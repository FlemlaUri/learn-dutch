import type { Lesson, Phrase, VocabItem } from '../types'
import { sample, shuffle, withArticle, words } from './text'

export type Exercise =
  /** Reconnaissance : on entend/lit le néerlandais, on choisit le sens. */
  | { kind: 'mcq-nl-fr'; id: string; cardId: string; nl: string; options: string[]; answer: string }
  /** Production guidée : on lit le français, on choisit le néerlandais. */
  | { kind: 'mcq-fr-nl'; id: string; cardId: string; fr: string; options: string[]; answer: string }
  /** Production libre : on écrit le néerlandais. */
  | { kind: 'type-fr-nl'; id: string; cardId: string; fr: string; accept: string[]; hint?: string }
  /** Dictée : on écoute, on écrit ce qu'on entend. */
  | { kind: 'listen'; id: string; cardId: string; audio: string; accept: string[]; fr: string }
  /** Ordre des mots : le point le plus dur du néerlandais. */
  | { kind: 'order'; id: string; cardId: string; fr: string; target: string; tokens: string[] }
  /** Production orale. */
  | { kind: 'speak'; id: string; cardId: string; fr: string; accept: string[] }

export function vocabCardId(v: VocabItem): string {
  return `v:${v.id}`
}
export function phraseCardId(p: Phrase): string {
  return `p:${p.id}`
}

function frDistractors(target: string, pool: VocabItem[], n: number): string[] {
  const seen = new Set([target])
  const out: string[] = []
  for (const v of shuffle(pool)) {
    if (out.length >= n) break
    if (seen.has(v.fr)) continue
    seen.add(v.fr)
    out.push(v.fr)
  }
  return out
}

function nlDistractors(target: string, pool: VocabItem[], n: number): string[] {
  const seen = new Set([target])
  const out: string[] = []
  for (const v of shuffle(pool)) {
    if (out.length >= n) break
    const label = withArticle(v.nl, v.article)
    if (seen.has(label)) continue
    seen.add(label)
    out.push(label)
  }
  return out
}

/**
 * Construit le drill d'une leçon : ~20 items qui font travailler
 * reconnaissance, production écrite, écoute, ordre des mots et production orale.
 * `pool` sert à fabriquer des distracteurs crédibles (mots déjà vus ailleurs).
 */
export function buildLessonDrill(lesson: Lesson, pool: VocabItem[]): Exercise[] {
  const local = lesson.vocab
  const distractorPool = pool.length >= 12 ? pool : local
  const items: Exercise[] = []

  const forRecognition = sample(local, Math.min(6, local.length))
  for (const v of forRecognition) {
    const options = shuffle([v.fr, ...frDistractors(v.fr, distractorPool, 3)])
    items.push({
      kind: 'mcq-nl-fr',
      id: `${lesson.id}-r-${v.id}`,
      cardId: vocabCardId(v),
      nl: withArticle(v.nl, v.article),
      options,
      answer: v.fr,
    })
  }

  const remaining = local.filter((v) => !forRecognition.includes(v))
  const forProduction = sample(remaining.length >= 5 ? remaining : local, Math.min(5, local.length))
  for (const v of forProduction) {
    const label = withArticle(v.nl, v.article)
    // Un mot court se tape ; un mot long ou à article se joue en QCM pour ne pas décourager.
    if (v.nl.length <= 9 && !v.article) {
      items.push({
        kind: 'type-fr-nl',
        id: `${lesson.id}-p-${v.id}`,
        cardId: vocabCardId(v),
        fr: v.fr,
        accept: [v.nl],
        hint: v.hint,
      })
    } else {
      items.push({
        kind: 'mcq-fr-nl',
        id: `${lesson.id}-p-${v.id}`,
        cardId: vocabCardId(v),
        fr: v.fr,
        options: shuffle([label, ...nlDistractors(label, distractorPool, 3)]),
        answer: label,
      })
    }
  }

  for (const v of sample(local, Math.min(3, local.length))) {
    items.push({
      kind: 'listen',
      id: `${lesson.id}-l-${v.id}`,
      cardId: vocabCardId(v),
      audio: v.nl,
      accept: [v.nl, withArticle(v.nl, v.article)],
      fr: v.fr,
    })
  }

  // Ordre des mots : phrases de la leçon d'abord, puis répliques du dialogue.
  const orderSources: Array<{ id: string; nl: string; fr: string }> = [
    ...lesson.phrases.map((p) => ({ id: p.id, nl: p.nl, fr: p.fr })),
    ...lesson.dialogue.lines.map((l, i) => ({ id: `${lesson.id}-dl${i}`, nl: l.nl, fr: l.fr })),
  ].filter((s) => {
    const n = words(s.nl).length
    return n >= 3 && n <= 9
  })
  for (const s of sample(orderSources, Math.min(3, orderSources.length))) {
    items.push({
      kind: 'order',
      id: `${lesson.id}-o-${s.id}`,
      cardId: `p:${s.id}`,
      fr: s.fr,
      target: s.nl,
      tokens: shuffle(words(s.nl)),
    })
  }

  for (const p of sample(lesson.phrases, Math.min(2, lesson.phrases.length))) {
    items.push({
      kind: 'speak',
      id: `${lesson.id}-s-${p.id}`,
      cardId: phraseCardId(p),
      fr: p.fr,
      accept: [p.nl],
    })
  }

  // On garde reconnaissance → production → oral dans cet ordre pédagogique,
  // mais on mélange à l'intérieur de chaque famille.
  const order: Record<Exercise['kind'], number> = {
    'mcq-nl-fr': 0,
    'mcq-fr-nl': 1,
    'type-fr-nl': 1,
    listen: 2,
    order: 3,
    speak: 4,
  }
  return items.sort((a, b) => order[a.kind] - order[b.kind])
}

/** Nombre de points gagnés par exercice réussi. */
export function xpFor(kind: Exercise['kind']): number {
  switch (kind) {
    case 'mcq-nl-fr':
      return 2
    case 'mcq-fr-nl':
      return 3
    case 'type-fr-nl':
      return 4
    case 'listen':
      return 5
    case 'order':
      return 5
    case 'speak':
      return 6
  }
}
