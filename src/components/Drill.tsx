import { useMemo, useState } from 'react'
import type { Exercise } from '../lib/exercises'
import { xpFor } from '../lib/exercises'
import { grade as gradeText, words } from '../lib/text'
import type { Settings } from '../types'
import { Prose, SpeakButton } from './ui'
import { SpeakPrompt } from './SpeakPrompt'

export interface DrillResult {
  correct: number
  total: number
  xp: number
}

type Verdict = 'ok' | 'close' | 'no'

const TITLES: Record<Exercise['kind'], string> = {
  'mcq-nl-fr': 'Que veut dire ce mot ?',
  'mcq-fr-nl': 'Choisis la bonne traduction',
  'type-fr-nl': 'Écris en néerlandais',
  listen: 'Dictée — écoute et écris',
  order: 'Remets la phrase dans l’ordre',
  speak: 'Dis-le à voix haute',
}

export function Drill({
  exercises,
  settings,
  onGrade,
  onFinish,
}: {
  exercises: Exercise[]
  settings: Settings
  onGrade: (cardId: string, verdict: Verdict) => void
  onFinish: (result: DrillResult) => void
}) {
  const [index, setIndex] = useState(0)
  const [verdict, setVerdict] = useState<Verdict | null>(null)
  const [score, setScore] = useState({ correct: 0, xp: 0 })

  const ex = exercises[index]

  const settle = (v: Verdict) => {
    if (verdict) return
    setVerdict(v)
    onGrade(ex.cardId, v)
    if (v !== 'no') {
      setScore((s) => ({ correct: s.correct + 1, xp: s.xp + (v === 'ok' ? xpFor(ex.kind) : 1) }))
    }
  }

  const next = () => {
    if (index + 1 >= exercises.length) {
      onFinish({ correct: score.correct, total: exercises.length, xp: score.xp })
      return
    }
    setVerdict(null)
    setIndex((i) => i + 1)
  }

  if (!ex) return null

  return (
    <div className="stack">
      <div className="stepbar" aria-label={`Question ${index + 1} sur ${exercises.length}`}>
        {exercises.map((_, i) => (
          <span key={i} className={i === index ? 'on' : i < index ? 'done' : ''} />
        ))}
      </div>

      <div className="card fade-in" key={ex.id}>
        <div className="q-prompt">
          {index + 1}/{exercises.length} · {TITLES[ex.kind]}
        </div>

        {ex.kind === 'mcq-nl-fr' && (
          <McqNlFr ex={ex} settings={settings} verdict={verdict} onAnswer={settle} />
        )}
        {ex.kind === 'mcq-fr-nl' && <McqFrNl ex={ex} verdict={verdict} onAnswer={settle} />}
        {ex.kind === 'type-fr-nl' && <TypeAnswer ex={ex} verdict={verdict} onAnswer={settle} />}
        {ex.kind === 'listen' && (
          <Dictation ex={ex} settings={settings} verdict={verdict} onAnswer={settle} />
        )}
        {ex.kind === 'order' && <WordOrder ex={ex} verdict={verdict} onAnswer={settle} />}
        {ex.kind === 'speak' && (
          <SpeakPrompt
            fr={ex.fr}
            accept={ex.accept}
            settings={settings}
            done={verdict !== null}
            onResult={settle}
          />
        )}
      </div>

      {verdict && (
        <button className="btn btn-primary btn-block" onClick={next}>
          {index + 1 >= exercises.length ? 'Terminer' : 'Suivant'}
        </button>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */

function Feedback({ verdict, solution }: { verdict: Verdict; solution: string }) {
  const cls = verdict === 'ok' ? 'ok' : verdict === 'close' ? 'close' : 'no'
  const head =
    verdict === 'ok' ? 'Correct !' : verdict === 'close' ? 'Presque — une petite faute.' : 'Pas tout à fait.'
  return (
    <div className={`feedback ${cls}`} style={{ marginTop: 14 }}>
      <span className="head">{head}</span>
      {verdict !== 'ok' && <span className="sol">{solution}</span>}
    </div>
  )
}

function McqNlFr({
  ex,
  settings,
  verdict,
  onAnswer,
}: {
  ex: Extract<Exercise, { kind: 'mcq-nl-fr' }>
  settings: Settings
  verdict: Verdict | null
  onAnswer: (v: Verdict) => void
}) {
  const [picked, setPicked] = useState<string | null>(null)
  return (
    <>
      <div className="row" style={{ marginTop: 6, marginBottom: 14 }}>
        <div className="q-main grow">{ex.nl}</div>
        <SpeakButton text={ex.nl} settings={settings} auto={settings.autoPlay} />
      </div>
      <div className="options">
        {ex.options.map((o) => (
          <button
            key={o}
            className={`option${
              verdict && o === ex.answer ? ' correct' : verdict && o === picked ? ' wrong' : ''
            }`}
            disabled={verdict !== null}
            onClick={() => {
              setPicked(o)
              onAnswer(o === ex.answer ? 'ok' : 'no')
            }}
          >
            {o}
          </button>
        ))}
      </div>
    </>
  )
}

function McqFrNl({
  ex,
  verdict,
  onAnswer,
}: {
  ex: Extract<Exercise, { kind: 'mcq-fr-nl' }>
  verdict: Verdict | null
  onAnswer: (v: Verdict) => void
}) {
  const [picked, setPicked] = useState<string | null>(null)
  return (
    <>
      <div className="q-main">{ex.fr}</div>
      <div className="options" style={{ marginTop: 14 }}>
        {ex.options.map((o) => (
          <button
            key={o}
            className={`option${
              verdict && o === ex.answer ? ' correct' : verdict && o === picked ? ' wrong' : ''
            }`}
            disabled={verdict !== null}
            onClick={() => {
              setPicked(o)
              onAnswer(o === ex.answer ? 'ok' : 'no')
            }}
          >
            {o}
          </button>
        ))}
      </div>
    </>
  )
}

function TypeAnswer({
  ex,
  verdict,
  onAnswer,
}: {
  ex: Extract<Exercise, { kind: 'type-fr-nl' }>
  verdict: Verdict | null
  onAnswer: (v: Verdict) => void
}) {
  const [value, setValue] = useState('')
  const check = () => {
    if (!value.trim() || verdict) return
    const { quality } = gradeText(value, ex.accept)
    onAnswer(quality === 'exact' ? 'ok' : quality === 'close' ? 'close' : 'no')
  }
  return (
    <>
      <div className="q-main">{ex.fr}</div>
      {ex.hint && <div className="tiny" style={{ marginBottom: 10 }}>Prononciation : {ex.hint}</div>}
      <input
        className="answer-input"
        value={value}
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck={false}
        placeholder="en néerlandais…"
        disabled={verdict !== null}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && check()}
      />
      {!verdict && (
        <button className="btn btn-primary btn-block" style={{ marginTop: 12 }} onClick={check} disabled={!value.trim()}>
          Vérifier
        </button>
      )}
      {verdict && <Feedback verdict={verdict} solution={ex.accept[0]} />}
    </>
  )
}

function Dictation({
  ex,
  settings,
  verdict,
  onAnswer,
}: {
  ex: Extract<Exercise, { kind: 'listen' }>
  settings: Settings
  verdict: Verdict | null
  onAnswer: (v: Verdict) => void
}) {
  const [value, setValue] = useState('')
  const check = () => {
    if (!value.trim() || verdict) return
    const { quality } = gradeText(value, ex.accept)
    onAnswer(quality === 'exact' ? 'ok' : quality === 'close' ? 'close' : 'no')
  }
  return (
    <>
      <div className="center" style={{ padding: '18px 0 14px' }}>
        <SpeakButton text={ex.audio} settings={settings} auto={settings.autoPlay} label="Réécouter" />
        <div className="tiny" style={{ marginTop: 8 }}>Appuie pour réécouter</div>
      </div>
      <input
        className="answer-input"
        value={value}
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck={false}
        placeholder="ce que tu entends…"
        disabled={verdict !== null}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && check()}
      />
      {!verdict && (
        <button className="btn btn-primary btn-block" style={{ marginTop: 12 }} onClick={check} disabled={!value.trim()}>
          Vérifier
        </button>
      )}
      {verdict && (
        <>
          <Feedback verdict={verdict} solution={ex.accept[0]} />
          <div className="tiny" style={{ marginTop: 8 }}>Sens : {ex.fr}</div>
        </>
      )}
    </>
  )
}

function WordOrder({
  ex,
  verdict,
  onAnswer,
}: {
  ex: Extract<Exercise, { kind: 'order' }>
  verdict: Verdict | null
  onAnswer: (v: Verdict) => void
}) {
  const [slots, setSlots] = useState<number[]>([])
  const target = useMemo(() => words(ex.target), [ex.target])

  const push = (i: number) => !verdict && setSlots((s) => (s.includes(i) ? s : [...s, i]))
  const pop = (pos: number) => !verdict && setSlots((s) => s.filter((_, k) => k !== pos))

  const check = () => {
    if (verdict) return
    const attempt = slots.map((i) => ex.tokens[i])
    const same =
      attempt.length === target.length &&
      attempt.every((w, i) => w.toLowerCase() === target[i].toLowerCase())
    onAnswer(same ? 'ok' : 'no')
  }

  return (
    <>
      <div className="q-main small">{ex.fr}</div>
      <div className="slot-tray" style={{ marginTop: 12 }}>
        {slots.length === 0 && <span className="tiny">Touche les mots dans le bon ordre</span>}
        {slots.map((i, pos) => (
          <button key={`${i}-${pos}`} className="token" onClick={() => pop(pos)}>
            {ex.tokens[i]}
          </button>
        ))}
      </div>
      <div className="token-tray" style={{ marginTop: 12 }}>
        {ex.tokens.map((w, i) => (
          <button key={`${w}-${i}`} className={`token${slots.includes(i) ? ' used' : ''}`} onClick={() => push(i)}>
            {w}
          </button>
        ))}
      </div>
      {!verdict && (
        <button
          className="btn btn-primary btn-block"
          style={{ marginTop: 14 }}
          onClick={check}
          disabled={slots.length !== ex.tokens.length}
        >
          Vérifier
        </button>
      )}
      {verdict && <Feedback verdict={verdict} solution={ex.target} />}
    </>
  )
}

export function DrillSummary({
  result,
  onReplay,
  onContinue,
  note,
}: {
  result: DrillResult
  onReplay?: () => void
  onContinue: () => void
  note?: string
}) {
  const pct = result.total ? Math.round((result.correct / result.total) * 100) : 0
  const message =
    pct >= 90
      ? 'Excellent. Tu peux passer à la suite sans hésiter.'
      : pct >= 70
        ? 'Bien joué. Les erreurs reviendront en révision, c’est fait pour.'
        : 'Ça résiste encore — refais le drill, c’est le meilleur usage de tes dix prochaines minutes.'
  return (
    <div className="card center stack fade-in">
      <div className="eyebrow">Résultat</div>
      <div style={{ fontSize: 46, fontWeight: 700, letterSpacing: '-0.03em' }}>{pct}%</div>
      <p className="muted">
        {result.correct} / {result.total} · +{result.xp} points
      </p>
      <Prose text={note ?? message} />
      <div className="stack-sm" style={{ marginTop: 6 }}>
        <button className="btn btn-primary btn-block" onClick={onContinue}>
          Continuer
        </button>
        {onReplay && (
          <button className="btn btn-ghost btn-block" onClick={onReplay}>
            Refaire le drill
          </button>
        )}
      </div>
    </div>
  )
}
