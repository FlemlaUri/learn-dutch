import { useMemo, useState } from 'react'
import { cardIndex, type ReviewCard } from '../data/curriculum'
import { dueCards, retentionLabel, type Grade } from '../lib/srs'
import { navigate } from '../lib/router'
import type { ProgressApi } from '../lib/useProgress'
import { withArticle } from '../lib/text'
import { Section, SpeakButton } from '../components/ui'

type Direction = 'nl-fr' | 'fr-nl'

export function Review({ api }: { api: ProgressApi }) {
  const { progress } = api
  const batch = progress.settings.reviewBatch

  // Le paquet est figé au montage : ré-évaluer à chaque note ferait sauter des cartes.
  const [queue, setQueue] = useState<ReviewCard[]>(() =>
    dueCards(progress.cards)
      .map((c) => cardIndex[c.id])
      .filter(Boolean)
      .slice(0, batch),
  )
  const [pos, setPos] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [reviewed, setReviewed] = useState(0)
  const [direction] = useState<Direction>(() => (Math.random() < 0.5 ? 'nl-fr' : 'fr-nl'))

  const card = queue[pos]
  const totalDue = useMemo(
    () => dueCards(progress.cards).filter((c) => cardIndex[c.id]).length,
    [progress.cards],
  )

  const answer = (g: Grade) => {
    if (!card) return
    api.gradeCard(card.cardId, g)
    setReviewed((n) => n + 1)
    setFlipped(false)
    if (g === 'again') {
      // Remise en fin de paquet : on la revoit avant de sortir.
      setQueue((q) => [...q, card])
    }
    setPos((p) => p + 1)
  }

  if (!card) {
    return (
      <div className="stack">
        <div className="card center stack">
          <div className="eyebrow">Révision</div>
          <h2 style={{ fontSize: 22 }}>
            {reviewed > 0 ? `${reviewed} cartes revues` : 'Rien à réviser pour l’instant'}
          </h2>
          <p className="muted">
            {reviewed > 0
              ? totalDue > 0
                ? `Il reste ${totalDue} carte${totalDue > 1 ? 's' : ''} due${totalDue > 1 ? 's' : ''} aujourd’hui.`
                : 'Tout est à jour. Les prochaines cartes reviendront d’elles-mêmes.'
              : 'Les cartes apparaissent ici après ta première leçon, puis reviennent à intervalles croissants.'}
          </p>
          <div className="stack-sm" style={{ marginTop: 6 }}>
            {totalDue > 0 && (
              <button
                className="btn btn-primary btn-block"
                onClick={() => {
                  setQueue(
                    dueCards(progress.cards)
                      .map((c) => cardIndex[c.id])
                      .filter(Boolean)
                      .slice(0, batch),
                  )
                  setPos(0)
                }}
              >
                Continuer avec {Math.min(totalDue, batch)} cartes
              </button>
            )}
            <button className="btn btn-ghost btn-block" onClick={() => navigate({ name: 'home' })}>
              Retour à l’accueil
            </button>
          </div>
        </div>
      </div>
    )
  }

  const nl = card.kind === 'vocab' ? withArticle(card.nl, card.article) : card.nl
  const front = direction === 'nl-fr' ? nl : card.fr
  const back = direction === 'nl-fr' ? card.fr : nl
  const state = progress.cards[card.cardId]

  return (
    <div className="stack">
      <div className="row-between">
        <span className="eyebrow">
          Révision · {pos + 1} / {queue.length}
        </span>
        <span className="chip">{state ? retentionLabel(state) : 'nouveau'}</span>
      </div>

      <div className="flashcard fade-in" key={card.cardId + String(pos)} onClick={() => setFlipped(true)}>
        <div className="tiny">{direction === 'nl-fr' ? 'néerlandais' : 'français'} · jour {card.day}</div>
        <div className="front">{front}</div>
        {flipped ? (
          <>
            <div className="back">{back}</div>
            {card.hint && <div className="tiny" style={{ color: 'var(--accent)' }}>{card.hint}</div>}
            <SpeakButton text={nl} settings={progress.settings} auto={progress.settings.autoPlay} />
          </>
        ) : (
          <span className="tiny">Touche pour retourner</span>
        )}
      </div>

      {flipped ? (
        <div className="grade-row">
          <button className="again" onClick={() => answer('again')}>
            À revoir<span className="when">tout de suite</span>
          </button>
          <button className="hard" onClick={() => answer('hard')}>
            Difficile<span className="when">bientôt</span>
          </button>
          <button className="good" onClick={() => answer('good')}>
            Su<span className="when">plus tard</span>
          </button>
          <button className="easy" onClick={() => answer('easy')}>
            Facile<span className="when">beaucoup plus tard</span>
          </button>
        </div>
      ) : (
        <button className="btn btn-primary btn-block" onClick={() => setFlipped(true)}>
          Montrer la réponse
        </button>
      )}

      <Section eyebrow="Méthode">
        <p className="faint">
          Sois honnête : « À revoir » n’est pas un échec, c’est ce qui fait fonctionner la répétition
          espacée. Une carte notée trop généreusement disparaît de ta mémoire trois semaines plus tard.
        </p>
      </Section>
    </div>
  )
}
