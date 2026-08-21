import { useMemo, useState } from 'react'
import { cardsForLesson, lessons, lessonByDay, stats } from '../data/curriculum'
import { buildLessonDrill } from '../lib/exercises'
import { navigate } from '../lib/router'
import { dayId, type ProgressApi } from '../lib/useProgress'
import { withArticle } from '../lib/text'
import { speakDutch } from '../lib/speech'
import { Drill, DrillSummary, type DrillResult } from '../components/Drill'
import { SpeakPrompt } from '../components/SpeakPrompt'
import { Example, Prose, Section, SpeakButton } from '../components/ui'
import type { Lesson as LessonType } from '../types'

type Step = 'intro' | 'grammar' | 'vocab' | 'phrases' | 'dialogue' | 'drill' | 'speaking' | 'done'

const ORDER: Step[] = ['intro', 'grammar', 'vocab', 'phrases', 'dialogue', 'drill', 'speaking', 'done']

const STEP_LABEL: Record<Step, string> = {
  intro: 'Objectif',
  grammar: 'Grammaire',
  vocab: 'Vocabulaire',
  phrases: 'Phrases clés',
  dialogue: 'Dialogue',
  drill: 'Exercices',
  speaking: 'Défi oral',
  done: 'Bilan',
}

export function Lesson({ api, day }: { api: ProgressApi; day: number }) {
  const lesson = lessonByDay(day)
  const [step, setStep] = useState<Step>('intro')
  const [drillKey, setDrillKey] = useState(0)
  const [result, setResult] = useState<DrillResult | null>(null)
  const [spoken, setSpoken] = useState(0)

  // Les distracteurs ne viennent que des mots déjà rencontrés : un choix multiple
  // rempli de vocabulaire de la semaine 6 au jour 1 ne teste rien.
  const seenVocab = useMemo(
    () => lessons.filter((l) => l.day <= day).flatMap((l) => l.vocab),
    [day],
  )

  const drill = useMemo(
    () => (lesson ? buildLessonDrill(lesson, seenVocab) : []),
    // drillKey force une nouvelle génération quand on refait le drill
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lesson, seenVocab, drillKey],
  )

  if (!lesson) {
    return (
      <div className="card center">
        <p className="muted">Cette leçon n’existe pas.</p>
        <button className="btn btn-ghost" style={{ marginTop: 12 }} onClick={() => navigate({ name: 'home' })}>
          Retour à l’accueil
        </button>
      </div>
    )
  }

  const idx = ORDER.indexOf(step)
  const goto = (s: Step) => {
    setStep(s)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const nextStep = () => goto(ORDER[Math.min(ORDER.length - 1, idx + 1)])

  const finishDrill = (r: DrillResult) => {
    setResult(r)
    api.addXp(r.xp)
    goto('speaking')
  }

  const complete = () => {
    api.ensureCards(cardsForLesson(lesson))
    const score = result && result.total ? Math.round((result.correct / result.total) * 100) : 0
    api.completeLesson(lesson.id, score)
    goto('done')
  }

  return (
    <div className="stack">
      {step !== 'drill' && (
        <div className="stepbar">
          {ORDER.slice(0, -1).map((s, i) => (
            <span key={s} className={i === idx ? 'on' : i < idx ? 'done' : ''} />
          ))}
        </div>
      )}
      <div className="row-between">
        <span className="eyebrow">
          Jour {lesson.day} · {STEP_LABEL[step]}
        </span>
        {step !== 'done' && (
          <button className="btn btn-ghost btn-sm" onClick={() => navigate({ name: 'home' })}>
            Quitter
          </button>
        )}
      </div>

      {step === 'intro' && <Intro lesson={lesson} onNext={nextStep} api={api} />}
      {step === 'grammar' && <Grammar lesson={lesson} api={api} onNext={nextStep} />}
      {step === 'vocab' && <Vocab lesson={lesson} api={api} onNext={nextStep} />}
      {step === 'phrases' && <Phrases lesson={lesson} api={api} onNext={nextStep} />}
      {step === 'dialogue' && <Dialogue lesson={lesson} api={api} onNext={nextStep} />}

      {step === 'drill' && (
        <Drill
          key={drillKey}
          exercises={drill}
          settings={api.progress.settings}
          onGrade={(cardId, verdict) =>
            api.gradeCard(cardId, verdict === 'ok' ? 'good' : verdict === 'close' ? 'hard' : 'again')
          }
          onFinish={finishDrill}
        />
      )}

      {step === 'speaking' && (
        <SpeakingStep
          lesson={lesson}
          api={api}
          count={spoken}
          onOne={() => setSpoken((n) => n + 1)}
          onDone={complete}
        />
      )}

      {step === 'done' && (
        <Done
          lesson={lesson}
          result={result}
          onReplayDrill={() => {
            setDrillKey((k) => k + 1)
            setResult(null)
            goto('drill')
          }}
        />
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */

function NextButton({ label = 'Continuer', onClick }: { label?: string; onClick: () => void }) {
  return (
    <button className="btn btn-primary btn-block" onClick={onClick}>
      {label}
    </button>
  )
}

function Intro({ lesson, onNext, api }: { lesson: LessonType; onNext: () => void; api: ProgressApi }) {
  const previous = api.progress.lessons[dayId(lesson.day)]
  return (
    <div className="stack fade-in">
      <div className="card">
        <div className="eyebrow">Objectif du jour</div>
        <h2 style={{ fontSize: 23, margin: '8px 0 10px' }}>{lesson.title}</h2>
        <p className="muted">{lesson.goal}</p>
        <div className="row wrap" style={{ marginTop: 14 }}>
          <span className="chip">{lesson.vocab.length} mots</span>
          <span className="chip">{lesson.phrases.length} phrases</span>
          <span className="chip">{lesson.dialogue.lines.length} répliques</span>
          {previous && <span className="chip ok">déjà fait · {previous.score} %</span>}
        </div>
      </div>
      <Section eyebrow="Déroulé" title="Sept étapes, environ 35 minutes">
        <ul className="stack-sm">
          {[
            'Grammaire — le point du jour, expliqué en français',
            'Vocabulaire — écoute et répète chaque mot à voix haute',
            'Phrases clés — les tournures à réutiliser telles quelles',
            'Dialogue — écoute, puis joue ton rôle',
            'Exercices — reconnaissance, écriture, dictée, ordre des mots',
            'Défi oral — tu produis, le micro écoute',
            'Bilan — les cartes entrent en révision espacée',
          ].map((t, i) => (
            <li key={i} className="row" style={{ alignItems: 'flex-start', gap: 10 }}>
              <span className="day-num" style={{ width: 26, height: 26, fontSize: 12 }}>{i + 1}</span>
              <span className="faint" style={{ paddingTop: 3 }}>{t}</span>
            </li>
          ))}
        </ul>
      </Section>
      <NextButton label="C’est parti" onClick={onNext} />
    </div>
  )
}

function Grammar({ lesson, api, onNext }: { lesson: LessonType; api: ProgressApi; onNext: () => void }) {
  return (
    <div className="stack fade-in">
      {lesson.grammar.map((g, i) => (
        <Section key={i} eyebrow={`Point ${i + 1}`} title={g.title}>
          <Prose text={g.body} />
          <div className="stack-sm" style={{ marginTop: 14 }}>
            {g.examples.map((e, j) => (
              <Example key={j} nl={e.nl} fr={e.fr} settings={api.progress.settings} />
            ))}
          </div>
        </Section>
      ))}
      <NextButton label="Passer au vocabulaire" onClick={onNext} />
    </div>
  )
}

function Vocab({ lesson, api, onNext }: { lesson: LessonType; api: ProgressApi; onNext: () => void }) {
  const { showPhonetics } = api.progress.settings
  return (
    <div className="stack fade-in">
      <Section eyebrow="Vocabulaire" title={`${lesson.vocab.length} mots — répète chacun à voix haute`}>
        <p className="faint" style={{ marginBottom: 8 }}>
          Écoute, puis redis le mot avant de passer au suivant. L’article fait partie du mot :
          apprends « de fiets », jamais « fiets » seul.
        </p>
        <ul>
          {lesson.vocab.map((v) => (
            <li className="vocab-item" key={v.id}>
              <SpeakButton text={withArticle(v.nl, v.article)} settings={api.progress.settings} small />
              <div className="grow">
                <div className="nl">
                  {v.article && <span className="art">{v.article} </span>}
                  {v.nl}
                  {v.plural && <span className="art"> · pl. {v.plural}</span>}
                </div>
                <div className="fr">{v.fr}</div>
                {showPhonetics && v.hint && <div className="hint">{v.hint}</div>}
              </div>
            </li>
          ))}
        </ul>
      </Section>
      <NextButton label="Passer aux phrases" onClick={onNext} />
    </div>
  )
}

function Phrases({ lesson, api, onNext }: { lesson: LessonType; api: ProgressApi; onNext: () => void }) {
  return (
    <div className="stack fade-in">
      <Section eyebrow="Phrases clés" title="À réutiliser telles quelles">
        <div className="stack-sm">
          {lesson.phrases.map((p) => (
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
      </Section>
      <NextButton label="Écouter le dialogue" onClick={onNext} />
    </div>
  )
}

function Dialogue({ lesson, api, onNext }: { lesson: LessonType; api: ProgressApi; onNext: () => void }) {
  const [roleplay, setRoleplay] = useState(false)
  const [revealed, setRevealed] = useState<Set<number>>(new Set())
  const d = lesson.dialogue

  const playAll = () => {
    // Lecture enchaînée : chaque réplique déclenche la suivante.
    const speakFrom = (i: number) => {
      if (i >= d.lines.length) return
      speakDutch(d.lines[i].nl, {
        rate: api.progress.settings.rate,
        voiceURI: api.progress.settings.voiceURI,
        onEnd: () => window.setTimeout(() => speakFrom(i + 1), 350),
      })
    }
    speakFrom(0)
  }

  return (
    <div className="stack fade-in">
      <Section eyebrow="Dialogue" title={d.title}>
        <p className="faint">{d.context}</p>
        <div className="row wrap" style={{ marginTop: 12, gap: 8 }}>
          <button className="btn btn-ghost btn-sm" onClick={playAll}>▶ Tout écouter</button>
          <button
            className={`btn btn-sm ${roleplay ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => {
              setRoleplay((r) => !r)
              setRevealed(new Set())
            }}
          >
            🎭 Jouer {d.learnerRole}
          </button>
        </div>
      </Section>

      <div className="card">
        {d.lines.map((line, i) => {
          const mine = line.speaker === d.learnerRole
          const hidden = roleplay && mine && !revealed.has(i)
          return (
            <div className={`line${mine ? ' mine' : ''}${hidden ? ' hidden' : ''}`} key={i}>
              <div className="who">{line.speaker}</div>
              <div className="grow" onClick={() => hidden && setRevealed((s) => new Set(s).add(i))}>
                <div className="nl">{line.nl}</div>
                <div className="fr">{line.fr}</div>
              </div>
              {!hidden && <SpeakButton text={line.nl} settings={api.progress.settings} small />}
            </div>
          )
        })}
        {roleplay && (
          <p className="tiny" style={{ marginTop: 10 }}>
            Tes répliques sont floutées : dis-les d’abord à voix haute, puis touche pour vérifier.
          </p>
        )}
      </div>

      <NextButton label="Passer aux exercices" onClick={onNext} />
    </div>
  )
}

function SpeakingStep({
  lesson,
  api,
  count,
  onOne,
  onDone,
}: {
  lesson: LessonType
  api: ProgressApi
  count: number
  onOne: () => void
  onDone: () => void
}) {
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(false)
  const task = lesson.speaking[index]
  const last = index >= lesson.speaking.length - 1

  return (
    <div className="stack fade-in">
      <Section eyebrow={`Défi oral ${index + 1}/${lesson.speaking.length}`} title="Produis la phrase, sans lire">
        <SpeakPrompt
          key={index}
          fr={task.prompt}
          accept={task.accept}
          settings={api.progress.settings}
          done={done}
          onResult={(v) => {
            setDone(true)
            if (v !== 'no') onOne()
            api.addXp(v === 'ok' ? 6 : v === 'close' ? 3 : 1)
          }}
        />
      </Section>
      {done && (
        <button
          className="btn btn-primary btn-block"
          onClick={() => {
            if (last) onDone()
            else {
              setIndex((i) => i + 1)
              setDone(false)
            }
          }}
        >
          {last ? `Terminer la leçon (${count + 1} défis réussis)` : 'Défi suivant'}
        </button>
      )}
      {!done && (
        <button className="btn btn-ghost btn-block" onClick={() => (last ? onDone() : setIndex((i) => i + 1))}>
          Passer
        </button>
      )}
    </div>
  )
}

function Done({
  lesson,
  result,
  onReplayDrill,
}: {
  lesson: LessonType
  result: DrillResult | null
  onReplayDrill: () => void
}) {
  const nextDay = lesson.day + 1
  return (
    <div className="stack fade-in">
      {result ? (
        <DrillSummary
          result={result}
          onReplay={onReplayDrill}
          onContinue={() =>
            nextDay <= stats.days ? navigate({ name: 'lesson', day: nextDay }) : navigate({ name: 'home' })
          }
          note={`Leçon ${lesson.day} enregistrée. Les ${lesson.vocab.length + lesson.phrases.length} cartes de cette leçon entrent en révision espacée : tu les reverras demain, puis dans trois jours, puis de plus en plus loin.`}
        />
      ) : (
        <div className="card center stack">
          <div className="eyebrow">Terminé</div>
          <h2 style={{ fontSize: 22 }}>Leçon {lesson.day} enregistrée</h2>
          <p className="muted">Les cartes de cette leçon sont entrées en révision espacée.</p>
          <button className="btn btn-primary btn-block" onClick={() => navigate({ name: 'home' })}>
            Retour à l’accueil
          </button>
        </div>
      )}
      <div className="stack-sm">
        <button className="btn btn-ghost btn-block" onClick={() => navigate({ name: 'review' })}>
          Réviser maintenant
        </button>
        <button className="btn btn-ghost btn-block" onClick={() => navigate({ name: 'home' })}>
          Retour à l’accueil
        </button>
      </div>
    </div>
  )
}
