import { cardIndex, lessonByDay, stats, weekOf } from '../data/curriculum'
import { dueCards } from '../lib/srs'
import { dayId, plannedDate, type ProgressApi } from '../lib/useProgress'
import { formatFr, isoDay } from '../lib/date'
import { navigate } from '../lib/router'
import { Bar, Metric, Section } from '../components/ui'
import { ttsSupported, useDutchVoices } from '../lib/speech'

export function Home({ api }: { api: ProgressApi }) {
  const { progress, scheduledDay, nextDay } = api
  const target = Math.min(scheduledDay, Math.max(nextDay, 1))
  const lesson = lessonByDay(target)
  const week = weekOf(target)
  const due = dueCards(progress.cards).filter((c) => cardIndex[c.id])
  const doneCount = Object.keys(progress.lessons).length
  const knownCards = Object.values(progress.cards).filter((c) => c.interval >= 3).length
  const late = scheduledDay - nextDay

  const dutchVoices = useDutchVoices()
  const voiceMissing = ttsSupported && dutchVoices.length === 0

  return (
    <div className="stack">
      <div className="hero">
        <div className="eyebrow">
          Jour {target} sur {stats.days} · Semaine {week?.week ?? 1}
        </div>
        <h2>{lesson?.title ?? 'Programme terminé'}</h2>
        <p>{lesson?.goal ?? 'Tu as parcouru les six semaines. Passe en mode entretien : révisions quotidiennes.'}</p>
        {lesson && (
          <button className="btn btn-primary" onClick={() => navigate({ name: 'lesson', day: target })}>
            {progress.lessons[dayId(target)] ? 'Refaire la leçon' : 'Commencer la leçon'} →
          </button>
        )}
      </div>

      <div className="metrics">
        <Metric value={progress.streak} label="jours d’affilée" />
        <Metric value={`${doneCount}/${stats.days}`} label="leçons faites" />
        <Metric value={knownCards} label="mots en mémoire" />
      </div>

      {due.length > 0 && (
        <Section eyebrow="À faire d’abord" title={`${due.length} carte${due.length > 1 ? 's' : ''} à réviser`}>
          <p className="faint" style={{ marginBottom: 12 }}>
            La répétition espacée est ce qui empêche d’oublier. Cinq minutes, avant la leçon du jour.
          </p>
          <button className="btn btn-deep btn-block" onClick={() => navigate({ name: 'review' })}>
            Lancer la révision
          </button>
        </Section>
      )}

      {late > 0 && (
        <div className="banner">
          Tu as {late} jour{late > 1 ? 's' : ''} de retard sur le planning. Enchaîne deux leçons courtes
          plutôt que d’en sauter une : la semaine 4 s’appuie sur la semaine 1.
        </div>
      )}

      {voiceMissing && (
        <div className="banner">
          Aucune voix néerlandaise n’est installée sur cet appareil : la lecture audio sonnera faux.
          Ajoute la voix « Nederlands » dans les réglages de langue de ton système, puis relance l’app.
        </div>
      )}

      <Section eyebrow="Programme" title="Les 42 jours" action={
        <button className="btn btn-ghost btn-sm" onClick={() => navigate({ name: 'plan' })}>Détail</button>
      }>
        <div className="calendar">
          {Array.from({ length: stats.days }, (_, i) => i + 1).map((d) => {
            const done = Boolean(progress.lessons[dayId(d)])
            const isToday = d === target
            return (
              <button
                key={d}
                className={`${done ? 'done' : ''}${isToday ? ' today' : ''}${d > scheduledDay ? ' locked' : ''}`}
                onClick={() => navigate({ name: 'lesson', day: d })}
                title={lessonByDay(d)?.title}
              >
                {d}
              </button>
            )
          })}
        </div>
        <div className="row-between" style={{ marginTop: 14 }}>
          <span className="tiny">Avancement</span>
          <span className="tiny">{Math.round((doneCount / stats.days) * 100)} %</span>
        </div>
        <div style={{ marginTop: 6 }}>
          <Bar value={doneCount} max={stats.days} ok />
        </div>
        <p className="tiny" style={{ marginTop: 10 }}>
          Jour 1 : {formatFr(progress.startDate)} · fin prévue : {formatFr(plannedDate(progress.startDate, stats.days))}
          {progress.startDate === isoDay() ? ' (démarré aujourd’hui)' : ''}
        </p>
      </Section>

      <Section eyebrow="Aide" title="Deux repères à garder sous la main">
        <div className="stack-sm">
          <button className="btn btn-ghost btn-block" onClick={() => navigate({ name: 'sounds' })}>
            🗣 Guide de prononciation
          </button>
          <button className="btn btn-ghost btn-block" onClick={() => navigate({ name: 'phrasebook' })}>
            📓 Carnet de survie — {stats.days > 0 ? '80 phrases' : ''} à dégainer
          </button>
        </div>
      </Section>
    </div>
  )
}
