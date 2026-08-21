import { useState } from 'react'
import { weeks } from '../data/curriculum'
import { navigate } from '../lib/router'
import { dayId, plannedDate, type ProgressApi } from '../lib/useProgress'
import { formatFr } from '../lib/date'
import { Bar, Section } from '../components/ui'

export function Plan({ api }: { api: ProgressApi }) {
  const { progress, scheduledDay } = api
  const currentWeek = Math.ceil(scheduledDay / 7)
  const [open, setOpen] = useState<number>(currentWeek)

  return (
    <div className="stack">
      <Section eyebrow="Programme" title="Six semaines, du silence à la conversation">
        <p className="faint">
          Chaque semaine construit sur la précédente. Sauter la semaine 3 rend la semaine 4
          incompréhensible : la subordonnée s’appuie sur la règle V2, le passé composé sur les modaux.
        </p>
      </Section>

      {weeks.map((w) => {
        const done = w.lessons.filter((l) => progress.lessons[dayId(l.day)]).length
        const isOpen = open === w.week
        return (
          <section className="card" key={w.week}>
            <button
              className="row-between"
              style={{ width: '100%', background: 'none', border: 'none', padding: 0, textAlign: 'left' }}
              onClick={() => setOpen(isOpen ? -1 : w.week)}
            >
              <div className="grow">
                <div className="eyebrow">Semaine {w.week}</div>
                <h3 style={{ fontSize: 17, marginTop: 3 }}>{w.title}</h3>
              </div>
              <span className="chip">{done}/7</span>
            </button>

            <div style={{ marginTop: 12 }}>
              <Bar value={done} max={7} ok={done === 7} />
            </div>

            {isOpen && (
              <div className="fade-in" style={{ marginTop: 14 }}>
                <p className="faint" style={{ marginBottom: 10 }}>{w.focus}</p>
                {w.lessons.map((l) => {
                  const record = progress.lessons[dayId(l.day)]
                  const isToday = l.day === scheduledDay
                  return (
                    <button
                      key={l.id}
                      className={`day-row${record ? ' done' : ''}${isToday ? ' today' : ''}`}
                      onClick={() => navigate({ name: 'lesson', day: l.day })}
                    >
                      <span className="day-num">{l.day}</span>
                      <span className="grow">
                        <span className="t">{l.title}</span>
                        <span className="g" style={{ display: 'block' }}>
                          {record
                            ? `Fait le ${formatFr(record.date)} · ${record.score} %`
                            : formatFr(plannedDate(progress.startDate, l.day))}
                        </span>
                      </span>
                      <span className="tiny">→</span>
                    </button>
                  )
                })}
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}
