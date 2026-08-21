import type { CardState } from '../types'

/** Qualité de rappel déclarée par l'apprenant (ou déduite d'un exercice). */
export type Grade = 'again' | 'hard' | 'good' | 'easy'

const DAY = 24 * 60 * 60 * 1000

export function newCard(id: string, now = Date.now()): CardState {
  return { id, ease: 2.5, interval: 0, due: now, reps: 0, lapses: 0 }
}

/**
 * SM-2 allégé. Les premiers intervalles sont volontairement courts :
 * sur un programme de six semaines, mieux vaut revoir souvent que loin.
 */
export function schedule(card: CardState, grade: Grade, now = Date.now()): CardState {
  const next: CardState = { ...card, reps: card.reps + 1 }

  if (grade === 'again') {
    next.lapses += 1
    next.ease = Math.max(1.3, card.ease - 0.25)
    next.interval = 0
    next.due = now + 8 * 60 * 1000 // revu dans la même session, 8 minutes plus tard
    return next
  }

  if (grade === 'hard') next.ease = Math.max(1.3, card.ease - 0.15)
  if (grade === 'easy') next.ease = Math.min(3.0, card.ease + 0.1)

  const factor = grade === 'hard' ? 1.2 : grade === 'easy' ? next.ease * 1.3 : next.ease

  if (card.interval === 0) next.interval = grade === 'easy' ? 3 : 1
  else if (card.interval === 1) next.interval = grade === 'hard' ? 2 : grade === 'easy' ? 6 : 3
  else next.interval = Math.round(card.interval * factor)

  next.interval = Math.min(next.interval, 60)
  next.due = now + next.interval * DAY
  return next
}

export function isDue(card: CardState, now = Date.now()): boolean {
  return card.due <= now
}

/** Cartes à réviser, les plus en retard d'abord. */
export function dueCards(cards: Record<string, CardState>, now = Date.now()): CardState[] {
  return Object.values(cards)
    .filter((c) => isDue(c, now))
    .sort((a, b) => a.due - b.due)
}

export function retentionLabel(card: CardState): string {
  if (card.reps === 0) return 'nouveau'
  if (card.interval === 0) return 'en cours'
  if (card.interval < 3) return 'fragile'
  if (card.interval < 10) return 'en mémoire'
  return 'acquis'
}
