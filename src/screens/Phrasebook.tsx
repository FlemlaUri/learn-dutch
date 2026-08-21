import { useMemo, useState } from 'react'
import { survival } from '../data/survival'
import { normalize } from '../lib/text'
import type { ProgressApi } from '../lib/useProgress'
import { Section, SpeakButton } from '../components/ui'

export function Phrasebook({ api }: { api: ProgressApi }) {
  const [query, setQuery] = useState('')
  const q = normalize(query)

  const sections = useMemo(() => {
    if (!q) return survival
    return survival
      .map((s) => ({
        ...s,
        phrases: s.phrases.filter(
          (p) => normalize(p.nl).includes(q) || normalize(p.fr).includes(q),
        ),
      }))
      .filter((s) => s.phrases.length > 0)
  }, [q])

  const total = survival.reduce((n, s) => n + s.phrases.length, 0)

  return (
    <div className="stack">
      <Section eyebrow="Carnet de survie" title={`${total} phrases à dégainer`}>
        <p className="faint" style={{ marginBottom: 12 }}>
          Ouvre cette page deux minutes avant la situation : avant d’entrer chez le médecin,
          avant l’appel, avant le guichet. Lis à voix haute les trois phrases dont tu auras besoin.
        </p>
        <input
          className="search"
          placeholder="Chercher en français ou en néerlandais…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Section>

      {sections.length === 0 && (
        <div className="card center">
          <p className="muted">Aucune phrase ne correspond à « {query} ».</p>
        </div>
      )}

      {sections.map((s) => (
        <section className="card" key={s.title}>
          <div className="eyebrow">{s.title}</div>
          {!q && <p className="faint" style={{ margin: '8px 0 12px' }}>{s.intro}</p>}
          <div className="stack-sm" style={{ marginTop: q ? 12 : 0 }}>
            {s.phrases.map((p) => (
              <div key={p.id}>
                <div className="row" style={{ gap: 8 }}>
                  <div className="example grow">
                    <span className="nl">{p.nl}</span>
                    <span className="fr">{p.fr}</span>
                  </div>
                  <SpeakButton text={p.nl} settings={api.progress.settings} small />
                </div>
                {p.note && <div className="tiny" style={{ marginTop: 4, paddingLeft: 12 }}>{p.note}</div>}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
