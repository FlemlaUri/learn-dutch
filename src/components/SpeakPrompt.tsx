import { useEffect, useState } from 'react'
import { recognitionErrorMessage, useDutchRecognition } from '../lib/speech'
import { grade as gradeText } from '../lib/text'
import type { Settings } from '../types'
import { SpeakButton } from './ui'

type Verdict = 'ok' | 'close' | 'no'

/**
 * Consigne en français, production orale en néerlandais.
 * Si la reconnaissance vocale n'est pas disponible (Firefox, iOS ancien, micro refusé),
 * on bascule sur l'auto-évaluation : l'exercice reste faisable partout.
 */
export function SpeakPrompt({
  fr,
  accept,
  settings,
  done,
  onResult,
}: {
  fr: string
  accept: string[]
  settings: Settings
  done: boolean
  onResult: (v: Verdict) => void
}) {
  const rec = useDutchRecognition()
  const [heard, setHeard] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [manual, setManual] = useState(!rec.supported)

  useEffect(() => {
    if (done || rec.listening || !rec.transcript) return
    // La reconnaissance s'est arrêtée avec un résultat : on note.
    const candidates = rec.alternatives.length ? rec.alternatives : [rec.transcript]
    let best: Verdict = 'no'
    for (const candidate of candidates) {
      const { quality } = gradeText(candidate, accept)
      if (quality === 'exact') { best = 'ok'; break }
      if (quality === 'close') best = 'close'
    }
    setHeard(rec.transcript)
    setRevealed(true)
    onResult(best)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rec.listening])

  const model = accept[0]

  return (
    <div className="stack" style={{ marginTop: 8 }}>
      <div className="q-main small">{fr}</div>

      {!manual && (
        <div className="center stack" style={{ alignItems: 'center', gap: 12, padding: '10px 0' }}>
          <button
            type="button"
            className={`mic-btn${rec.listening ? ' listening' : ''}`}
            disabled={done}
            onClick={() => (rec.listening ? rec.stop() : rec.start())}
            aria-label={rec.listening ? 'Arrêter l’écoute' : 'Parler'}
          >
            {rec.listening ? '■' : '🎙'}
          </button>
          <div className="tiny">
            {rec.listening ? 'Je t’écoute…' : done ? '' : 'Appuie et dis la phrase en néerlandais'}
          </div>
          {(rec.transcript || heard) && (
            <div className="transcript">« {heard ?? rec.transcript} »</div>
          )}
          {rec.error && <div className="banner">{recognitionErrorMessage(rec.error)}</div>}
        </div>
      )}

      {manual && !revealed && (
        <div className="center stack" style={{ alignItems: 'center', gap: 10, padding: '10px 0' }}>
          <p className="faint">Dis la phrase à voix haute, puis vérifie.</p>
          <button className="btn btn-primary" onClick={() => setRevealed(true)} disabled={done}>
            Voir la réponse
          </button>
        </div>
      )}

      {(revealed || done) && (
        <div className="row" style={{ gap: 8 }}>
          <div className="example grow">
            <span className="nl">{model}</span>
            <span className="fr">Modèle attendu</span>
          </div>
          <SpeakButton text={model} settings={settings} small />
        </div>
      )}

      {revealed && !done && manual && (
        <div className="grade-row">
          <button className="again" onClick={() => onResult('no')}>
            Raté<span className="when">à revoir</span>
          </button>
          <button className="hard" onClick={() => onResult('close')}>
            Hésitant<span className="when">presque</span>
          </button>
          <button className="good" onClick={() => onResult('ok')}>
            Juste<span className="when">fluide</span>
          </button>
          <button className="easy" onClick={() => onResult('ok')}>
            Facile<span className="when">acquis</span>
          </button>
        </div>
      )}

      {!manual && !done && (
        <button className="btn btn-ghost btn-sm" onClick={() => setManual(true)}>
          Pas de micro ? Passer à l’auto-évaluation
        </button>
      )}
    </div>
  )
}
