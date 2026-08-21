/** Modèle de données du programme « Spreek Nederlands ». */

export type Article = 'de' | 'het'

export interface VocabItem {
  /** Identifiant stable, utilisé comme clé de répétition espacée. Ne jamais le modifier. */
  id: string
  nl: string
  fr: string
  article?: Article
  plural?: string
  /** Prononciation approximative pour un francophone. */
  hint?: string
  tag?: string
}

export interface Phrase {
  id: string
  nl: string
  fr: string
  note?: string
}

export interface GrammarExample {
  nl: string
  fr: string
}

export interface GrammarPoint {
  title: string
  /** Texte explicatif. `**gras**`, `\n` et lignes commençant par `- ` sont rendus. */
  body: string
  examples: GrammarExample[]
}

export interface DialogueLine {
  speaker: string
  nl: string
  fr: string
}

export interface Dialogue {
  title: string
  context: string
  /** Le rôle que l'apprenant joue lors du mode « jeu de rôle ». */
  learnerRole: string
  lines: DialogueLine[]
}

export interface SpeakingTask {
  /** Consigne en français. */
  prompt: string
  /** Réponses néerlandaises acceptées (la première sert de modèle). */
  accept: string[]
}

export interface Lesson {
  id: string
  day: number
  week: number
  title: string
  goal: string
  grammar: GrammarPoint[]
  vocab: VocabItem[]
  phrases: Phrase[]
  dialogue: Dialogue
  speaking: SpeakingTask[]
}

export interface Week {
  week: number
  title: string
  focus: string
  lessons: Lesson[]
}

/* ------------------------------------------------------------------ */
/* Progression                                                         */
/* ------------------------------------------------------------------ */

/** État SM-2 allégé d'une carte de révision. */
export interface CardState {
  id: string
  ease: number
  /** Intervalle en jours. */
  interval: number
  /** Timestamp de la prochaine échéance. */
  due: number
  reps: number
  lapses: number
}

export interface LessonRecord {
  /** Date ISO (YYYY-MM-DD) de la première complétion. */
  date: string
  /** Score du drill, 0-100. */
  score: number
  /** Nombre de fois que la leçon a été refaite. */
  runs: number
}

export interface Settings {
  voiceURI: string | null
  rate: number
  showPhonetics: boolean
  autoPlay: boolean
  /** Nombre de cartes de révision par session. */
  reviewBatch: number
}

export interface Progress {
  version: 1
  /** Date ISO du jour 1 du programme. */
  startDate: string
  lessons: Record<string, LessonRecord>
  cards: Record<string, CardState>
  streak: number
  lastStudyDate: string | null
  /** Minutes travaillées par jour, clé = date ISO. */
  minutes: Record<string, number>
  xp: number
  settings: Settings
}

export type Route =
  | { name: 'home' }
  | { name: 'lesson'; day: number }
  | { name: 'review' }
  | { name: 'phrasebook' }
  | { name: 'plan' }
  | { name: 'progress' }
  | { name: 'settings' }
  | { name: 'sounds' }
