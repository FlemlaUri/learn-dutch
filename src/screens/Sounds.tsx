import { pronunciation } from '../data/pronunciation'
import type { ProgressApi } from '../lib/useProgress'
import { Section, SpeakButton } from '../components/ui'

export function Sounds({ api }: { api: ProgressApi }) {
  return (
    <div className="stack">
      <Section eyebrow="Prononciation" title="Les sons qui font l’accent">
        <p className="faint">
          Un francophone est compris en néerlandais dès qu’il maîtrise quatre choses : le g raclé,
          la longueur des voyelles, la diphtongue <strong>ui</strong>, et l’accent tonique sur la
          bonne syllabe. Le reste s’ajuste tout seul. Reviens sur cette page une fois par semaine.
        </p>
      </Section>

      {pronunciation.map((group) => (
        <section className="card" key={group.title}>
          <div className="eyebrow">{group.title}</div>
          <p className="faint" style={{ margin: '8px 0 4px' }}>{group.intro}</p>

          {group.entries.map((e) => (
            <div key={e.sound} style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--line)' }}>
              <div className="row-between">
                <h4 style={{ fontSize: 18 }}>{e.sound}</h4>
              </div>
              <p className="faint" style={{ marginTop: 4 }}>{e.how}</p>
              <div className="stack-sm" style={{ marginTop: 10 }}>
                {e.words.map((w) => (
                  <div className="row" style={{ gap: 8 }} key={w.nl}>
                    <div className="example grow">
                      <span className="nl">{w.nl}</span>
                      <span className="fr">{w.fr}</span>
                    </div>
                    <SpeakButton text={w.nl.replace(/[A-Z]{2,}/g, (m) => m.toLowerCase())} settings={api.progress.settings} small />
                  </div>
                ))}
              </div>
              {e.trap && (
                <div className="banner" style={{ marginTop: 10 }}>
                  ⚠ {e.trap}
                </div>
              )}
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}
