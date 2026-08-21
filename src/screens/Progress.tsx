import { stats } from '../data/curriculum'
import { retentionLabel } from '../lib/srs'
import { addDays, formatFr, isoDay } from '../lib/date'
import { navigate } from '../lib/router'
import { dayId, type ProgressApi } from '../lib/useProgress'
import { Bar, Metric, Section } from '../components/ui'

export function ProgressScreen({ api }: { api: ProgressApi }) {
  const { progress } = api
  const lessonsDone = Object.keys(progress.lessons).length
  const cards = Object.values(progress.cards)

  const buckets = { nouveau: 0, 'en cours': 0, fragile: 0, 'en mémoire': 0, acquis: 0 } as Record<string, number>
  for (const c of cards) buckets[retentionLabel(c)] = (buckets[retentionLabel(c)] ?? 0) + 1

  const last14 = Array.from({ length: 14 }, (_, i) => addDays(isoDay(), i - 13))
  const minutes = last14.map((d) => progress.minutes[d] ?? 0)
  const peak = Math.max(30, ...minutes)
  const totalMinutes = Object.values(progress.minutes).reduce((a, b) => a + b, 0)

  const scores = Object.values(progress.lessons).map((l) => l.score)
  const avgScore = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0

  return (
    <div className="stack">
      <div className="metrics">
        <Metric value={progress.streak} label="jours d’affilée" />
        <Metric value={progress.xp} label="points" />
        <Metric value={`${Math.round(totalMinutes / 60)} h`} label="temps total" />
      </div>

      <Section eyebrow="Programme" title={`${lessonsDone} leçons sur ${stats.days}`}>
        <Bar value={lessonsDone} max={stats.days} ok />
        <div className="row-between" style={{ marginTop: 10 }}>
          <span className="tiny">Score moyen aux drills</span>
          <span className="tiny">{avgScore} %</span>
        </div>
        <div className="row wrap" style={{ marginTop: 12, gap: 8 }}>
          {[1, 2, 3, 4, 5, 6].map((w) => {
            const done = Array.from({ length: 7 }, (_, i) => (w - 1) * 7 + i + 1).filter(
              (d) => progress.lessons[dayId(d)],
            ).length
            return (
              <span className={`chip${done === 7 ? ' ok' : ''}`} key={w}>
                S{w} · {done}/7
              </span>
            )
          })}
        </div>
      </Section>

      <Section eyebrow="Régularité" title="Les 14 derniers jours">
        <div className="spark" aria-hidden>
          {minutes.map((m, i) => (
            <i
              key={i}
              className={m === 0 ? 'empty' : undefined}
              style={{ height: `${Math.max(4, (m / peak) * 100)}%` }}
              title={`${formatFr(last14[i])} · ${m} min`}
            />
          ))}
        </div>
        <div className="row-between" style={{ marginTop: 8 }}>
          <span className="tiny">{formatFr(last14[0])}</span>
          <span className="tiny">aujourd’hui · {progress.minutes[isoDay()] ?? 0} min</span>
        </div>
        <p className="faint" style={{ marginTop: 12 }}>
          La régularité pèse plus que la durée. Vingt minutes tous les jours battent deux heures le
          dimanche — la mémoire consolide pendant le sommeil, pas pendant la session.
        </p>
      </Section>

      <Section eyebrow="Mémoire" title={`${cards.length} cartes suivies`}>
        <div className="stack-sm">
          {(['acquis', 'en mémoire', 'fragile', 'en cours', 'nouveau'] as const).map((k) => (
            <div key={k}>
              <div className="row-between">
                <span className="tiny" style={{ textTransform: 'capitalize' }}>{k}</span>
                <span className="tiny">{buckets[k] ?? 0}</span>
              </div>
              <Bar value={buckets[k] ?? 0} max={Math.max(1, cards.length)} ok={k === 'acquis'} />
            </div>
          ))}
        </div>
        <button className="btn btn-ghost btn-block" style={{ marginTop: 14 }} onClick={() => navigate({ name: 'review' })}>
          Ouvrir la révision
        </button>
      </Section>

      <Section eyebrow="Contenu" title="Ce que contient le programme">
        <div className="row wrap" style={{ gap: 8 }}>
          <span className="chip">{stats.days} leçons</span>
          <span className="chip">{stats.vocab} mots</span>
          <span className="chip">{stats.phrases} phrases clés</span>
          <span className="chip">{stats.dialogueLines} répliques de dialogue</span>
        </div>
      </Section>
    </div>
  )
}
