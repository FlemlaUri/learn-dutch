import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { CardState, Progress, Settings } from '../types'
import { emptyProgress, loadProgress, saveProgress } from './storage'
import { newCard, schedule, type Grade } from './srs'
import { addDays, daysBetween, isoDay } from './date'

export interface ProgressApi {
  progress: Progress
  /** Jour du programme (1-42) attendu aujourd'hui, borné à 42. */
  scheduledDay: number
  /** Prochaine leçon non terminée. */
  nextDay: number
  todayMinutes: number
  setSettings: (patch: Partial<Settings>) => void
  ensureCards: (ids: string[]) => void
  gradeCard: (id: string, grade: Grade) => void
  completeLesson: (lessonId: string, score: number) => void
  addXp: (n: number) => void
  logMinutes: (n: number) => void
  resetAll: () => void
  replaceAll: (p: Progress) => void
  /** Recale le jour 1 du programme sur une date ISO. */
  setStartDate: (iso: string) => void
}

const TOTAL_DAYS = 42

export function useProgress(): ProgressApi {
  const [progress, setProgress] = useState<Progress>(() => loadProgress())
  const saveTimer = useRef<number | null>(null)

  useEffect(() => {
    if (saveTimer.current) window.clearTimeout(saveTimer.current)
    saveTimer.current = window.setTimeout(() => saveProgress(progress), 250)
    return () => {
      if (saveTimer.current) window.clearTimeout(saveTimer.current)
    }
  }, [progress])

  const update = useCallback((fn: (p: Progress) => Progress) => setProgress(fn), [])

  const setSettings = useCallback(
    (patch: Partial<Settings>) =>
      update((p) => ({ ...p, settings: { ...p.settings, ...patch } })),
    [update],
  )

  /** Crée les cartes manquantes sans toucher à celles déjà planifiées. */
  const ensureCards = useCallback(
    (ids: string[]) =>
      update((p) => {
        const missing = ids.filter((id) => !p.cards[id])
        if (!missing.length) return p
        const cards = { ...p.cards }
        const now = Date.now()
        for (const id of missing) cards[id] = newCard(id, now)
        return { ...p, cards }
      }),
    [update],
  )

  const gradeCard = useCallback(
    (id: string, grade: Grade) =>
      update((p) => {
        const current: CardState = p.cards[id] ?? newCard(id)
        return { ...p, cards: { ...p.cards, [id]: schedule(current, grade) } }
      }),
    [update],
  )

  const touchStreak = useCallback((p: Progress): Progress => {
    const today = isoDay()
    if (p.lastStudyDate === today) return p
    const streak =
      p.lastStudyDate && daysBetween(p.lastStudyDate, today) === 1 ? p.streak + 1 : 1
    return { ...p, streak, lastStudyDate: today }
  }, [])

  const completeLesson = useCallback(
    (lessonId: string, score: number) =>
      update((p) => {
        const prev = p.lessons[lessonId]
        const record = prev
          ? { ...prev, score: Math.max(prev.score, score), runs: prev.runs + 1 }
          : { date: isoDay(), score, runs: 1 }
        return touchStreak({ ...p, lessons: { ...p.lessons, [lessonId]: record } })
      }),
    [update, touchStreak],
  )

  const addXp = useCallback(
    (n: number) => update((p) => touchStreak({ ...p, xp: p.xp + n })),
    [update, touchStreak],
  )

  const logMinutes = useCallback(
    (n: number) =>
      update((p) => {
        const today = isoDay()
        return { ...p, minutes: { ...p.minutes, [today]: (p.minutes[today] ?? 0) + n } }
      }),
    [update],
  )

  const resetAll = useCallback(() => setProgress(emptyProgress()), [])
  const replaceAll = useCallback((p: Progress) => setProgress(p), [])
  const setStartDate = useCallback(
    (iso: string) => update((p) => ({ ...p, startDate: iso })),
    [update],
  )

  const scheduledDay = useMemo(() => {
    const elapsed = daysBetween(progress.startDate, isoDay())
    return Math.min(TOTAL_DAYS, Math.max(1, elapsed + 1))
  }, [progress.startDate])

  const nextDay = useMemo(() => {
    for (let d = 1; d <= TOTAL_DAYS; d++) {
      if (!progress.lessons[dayId(d)]) return d
    }
    return TOTAL_DAYS
  }, [progress.lessons])

  const todayMinutes = progress.minutes[isoDay()] ?? 0

  return {
    progress,
    scheduledDay,
    nextDay,
    todayMinutes,
    setSettings,
    ensureCards,
    gradeCard,
    completeLesson,
    addXp,
    logMinutes,
    resetAll,
    replaceAll,
    setStartDate,
  }
}

export function dayId(day: number): string {
  return `d${String(day).padStart(2, '0')}`
}

/** Date prévue pour un jour du programme. */
export function plannedDate(startDate: string, day: number): string {
  return addDays(startDate, day - 1)
}

/** Chronomètre de session : renvoie les minutes écoulées et les enregistre à la sortie. */
export function useSessionTimer(onFlush: (minutes: number) => void): void {
  const start = useRef(Date.now())
  const flush = useRef(onFlush)
  flush.current = onFlush
  useEffect(() => {
    const started = start.current
    return () => {
      const minutes = Math.round((Date.now() - started) / 60_000)
      if (minutes > 0) flush.current(minutes)
    }
  }, [])
}
