import { useEffect, useRef, useState } from 'react'
import { speakDutch, stopSpeaking } from '../lib/speech'
import type { Settings } from '../types'

/* ------------------------------------------------------------------ */
/* Texte enrichi minimal : **gras**, lignes, puces « - »              */
/* ------------------------------------------------------------------ */

function inline(text: string, keyPrefix: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) => {
    if (chunk.startsWith('**') && chunk.endsWith('**') && chunk.length > 4) {
      return <strong key={`${keyPrefix}-${i}`}>{chunk.slice(2, -2)}</strong>
    }
    return <span key={`${keyPrefix}-${i}`}>{chunk}</span>
  })
}

export function Prose({ text }: { text: string }) {
  const lines = text.split('\n')
  return (
    <div className="prose">
      {lines.map((line, i) =>
        line.startsWith('- ') ? (
          <div className="li" key={i}>
            <span>{inline(line.slice(2), `l${i}`)}</span>
          </div>
        ) : (
          <p key={i}>{inline(line, `p${i}`)}</p>
        ),
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Bouton d'écoute                                                     */
/* ------------------------------------------------------------------ */

export function SpeakButton({
  text,
  settings,
  small,
  auto,
  label = 'Écouter',
}: {
  text: string
  settings: Settings
  small?: boolean
  /** Joue automatiquement au montage (une seule fois). */
  auto?: boolean
  label?: string
}) {
  const [playing, setPlaying] = useState(false)
  const fired = useRef(false)

  const play = () => {
    setPlaying(true)
    speakDutch(text, {
      rate: settings.rate,
      voiceURI: settings.voiceURI,
      onEnd: () => setPlaying(false),
    })
    // Filet de sécurité : certains navigateurs n'émettent jamais « end ».
    window.setTimeout(() => setPlaying(false), Math.max(1600, text.length * 110))
  }

  useEffect(() => {
    if (auto && !fired.current) {
      fired.current = true
      play()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auto, text])

  useEffect(() => () => stopSpeaking(), [])

  return (
    <button
      type="button"
      className={`speak-btn${small ? ' sm' : ''}${playing ? ' playing' : ''}`}
      onClick={play}
      aria-label={`${label} : ${text}`}
      title={label}
    >
      ▶
    </button>
  )
}

/* ------------------------------------------------------------------ */
/* Petits blocs                                                        */
/* ------------------------------------------------------------------ */

export function Bar({ value, max, ok }: { value: number; max: number; ok?: boolean }) {
  const pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0
  return (
    <div className={`bar${ok ? ' ok' : ''}`} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <i style={{ width: `${pct}%` }} />
    </div>
  )
}

export function Metric({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="metric">
      <div className="value">{value}</div>
      <div className="label">{label}</div>
    </div>
  )
}

export function Section({
  title,
  eyebrow,
  children,
  action,
}: {
  title?: string
  eyebrow?: string
  children: React.ReactNode
  action?: React.ReactNode
}) {
  return (
    <section className="card">
      {(title || eyebrow || action) && (
        <div className="row-between" style={{ marginBottom: title || eyebrow ? 12 : 0 }}>
          <div>
            {eyebrow && <div className="eyebrow">{eyebrow}</div>}
            {title && <h3 style={{ fontSize: 17, marginTop: eyebrow ? 3 : 0 }}>{title}</h3>}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  )
}

export function Example({ nl, fr, settings }: { nl: string; fr: string; settings: Settings }) {
  return (
    <div className="row" style={{ gap: 8 }}>
      <div className="example grow">
        <span className="nl">{nl}</span>
        <span className="fr">{fr}</span>
      </div>
      <SpeakButton text={nl} settings={settings} small />
    </div>
  )
}
