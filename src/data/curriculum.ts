import type { Lesson, VocabItem, Week } from '../types'
import { week1 } from './week1'
import { week2 } from './week2'
import { week3 } from './week3'
import { week4 } from './week4'
import { week5 } from './week5'
import { week6 } from './week6'

export const weeks: Week[] = [week1, week2, week3, week4, week5, week6]

export const lessons: Lesson[] = weeks.flatMap((w) => w.lessons)

export const TOTAL_DAYS = lessons.length

export function lessonByDay(day: number): Lesson | undefined {
  return lessons.find((l) => l.day === day)
}

export function weekOf(day: number): Week | undefined {
  return weeks.find((w) => w.lessons.some((l) => l.day === day))
}

/** Tout le vocabulaire du programme, dans l'ordre des leçons. */
export const allVocab: VocabItem[] = lessons.flatMap((l) => l.vocab)

/** Une carte de révision : mot de vocabulaire ou phrase, unifiés. */
export interface ReviewCard {
  cardId: string
  nl: string
  fr: string
  article?: 'de' | 'het'
  hint?: string
  kind: 'vocab' | 'phrase'
  day: number
}

function buildIndex(): Record<string, ReviewCard> {
  const index: Record<string, ReviewCard> = {}
  for (const lesson of lessons) {
    for (const v of lesson.vocab) {
      index[`v:${v.id}`] = {
        cardId: `v:${v.id}`,
        nl: v.nl,
        fr: v.fr,
        article: v.article,
        hint: v.hint,
        kind: 'vocab',
        day: lesson.day,
      }
    }
    for (const p of lesson.phrases) {
      index[`p:${p.id}`] = {
        cardId: `p:${p.id}`,
        nl: p.nl,
        fr: p.fr,
        kind: 'phrase',
        day: lesson.day,
      }
    }
    lesson.dialogue.lines.forEach((line, i) => {
      const id = `p:${lesson.id}-dl${i}`
      index[id] = { cardId: id, nl: line.nl, fr: line.fr, kind: 'phrase', day: lesson.day }
    })
  }
  return index
}

/** Index global cardId → contenu, utilisé par la session de révision. */
export const cardIndex: Record<string, ReviewCard> = buildIndex()

export function cardsForLesson(lesson: Lesson): string[] {
  return [...lesson.vocab.map((v) => `v:${v.id}`), ...lesson.phrases.map((p) => `p:${p.id}`)]
}

export const stats = {
  days: lessons.length,
  weeks: weeks.length,
  vocab: allVocab.length,
  phrases: lessons.reduce((n, l) => n + l.phrases.length, 0),
  dialogueLines: lessons.reduce((n, l) => n + l.dialogue.lines.length, 0),
}
