import type { Progress, Settings } from '../types'
import { isoDay } from './date'

const KEY = 'spreek-nederlands:progress:v1'

export const DEFAULT_SETTINGS: Settings = {
  voiceURI: null,
  rate: 0.9,
  showPhonetics: true,
  autoPlay: true,
  reviewBatch: 20,
}

export function emptyProgress(): Progress {
  return {
    version: 1,
    startDate: isoDay(),
    lessons: {},
    cards: {},
    streak: 0,
    lastStudyDate: null,
    minutes: {},
    xp: 0,
    settings: { ...DEFAULT_SETTINGS },
  }
}

/** Le stockage peut échouer (navigation privée, quota) : on ne casse jamais l'app pour ça. */
export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return emptyProgress()
    const parsed = JSON.parse(raw) as Partial<Progress>
    const base = emptyProgress()
    return {
      ...base,
      ...parsed,
      version: 1,
      lessons: parsed.lessons ?? {},
      cards: parsed.cards ?? {},
      minutes: parsed.minutes ?? {},
      settings: { ...base.settings, ...(parsed.settings ?? {}) },
    }
  } catch {
    return emptyProgress()
  }
}

export function saveProgress(p: Progress): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(p))
  } catch {
    /* quota dépassé ou stockage bloqué : la session reste utilisable en mémoire */
  }
}

export function exportProgress(p: Progress): string {
  return JSON.stringify(p, null, 2)
}

export function importProgress(json: string): Progress | null {
  try {
    const parsed = JSON.parse(json) as Progress
    if (!parsed || typeof parsed !== 'object' || !parsed.startDate) return null
    const base = emptyProgress()
    return { ...base, ...parsed, settings: { ...base.settings, ...(parsed.settings ?? {}) } }
  } catch {
    return null
  }
}
