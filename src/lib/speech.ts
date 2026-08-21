/** Synthèse vocale néerlandaise et reconnaissance vocale, avec dégradation propre. */

import { useCallback, useEffect, useRef, useState } from 'react'

/* ------------------------------------------------------------------ */
/* Synthèse vocale (lecture du néerlandais)                            */
/* ------------------------------------------------------------------ */

export const ttsSupported = typeof window !== 'undefined' && 'speechSynthesis' in window

let cachedVoices: SpeechSynthesisVoice[] = []

function refreshVoices(): SpeechSynthesisVoice[] {
  if (!ttsSupported) return []
  cachedVoices = window.speechSynthesis.getVoices()
  return cachedVoices
}

export function dutchVoices(): SpeechSynthesisVoice[] {
  const all = cachedVoices.length ? cachedVoices : refreshVoices()
  return all.filter((v) => v.lang.toLowerCase().startsWith('nl'))
}

/** La liste des voix arrive de façon asynchrone sur la plupart des navigateurs. */
export function useDutchVoices(): SpeechSynthesisVoice[] {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>(() => dutchVoices())

  useEffect(() => {
    if (!ttsSupported) return
    const update = () => {
      refreshVoices()
      setVoices(dutchVoices())
    }
    update()
    window.speechSynthesis.addEventListener('voiceschanged', update)
    // Safari ne déclenche pas toujours l'évènement : on repasse une fois après le premier rendu.
    const t = window.setTimeout(update, 500)
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', update)
      window.clearTimeout(t)
    }
  }, [])

  return voices
}

export interface SpeakOptions {
  rate?: number
  voiceURI?: string | null
  onEnd?: () => void
}

export function speakDutch(text: string, opts: SpeakOptions = {}): void {
  if (!ttsSupported || !text.trim()) {
    opts.onEnd?.()
    return
  }
  const synth = window.speechSynthesis
  synth.cancel()
  const utter = new SpeechSynthesisUtterance(text)
  utter.lang = 'nl-NL'
  utter.rate = opts.rate ?? 0.9
  const pool = dutchVoices()
  const chosen =
    (opts.voiceURI && pool.find((v) => v.voiceURI === opts.voiceURI)) ||
    pool.find((v) => v.lang.toLowerCase() === 'nl-nl') ||
    pool[0]
  if (chosen) utter.voice = chosen
  if (opts.onEnd) utter.addEventListener('end', opts.onEnd)
  synth.speak(utter)
}

export function stopSpeaking(): void {
  if (ttsSupported) window.speechSynthesis.cancel()
}

/** Vrai si aucune voix néerlandaise n'est installée : la lecture serait alors incompréhensible. */
export function hasDutchVoice(): boolean {
  return dutchVoices().length > 0
}

/* ------------------------------------------------------------------ */
/* Reconnaissance vocale (production orale)                            */
/* ------------------------------------------------------------------ */

interface RecognitionAlternative {
  transcript: string
  confidence: number
}
interface RecognitionResult {
  readonly length: number
  isFinal: boolean
  [index: number]: RecognitionAlternative
}
interface RecognitionEvent extends Event {
  results: { readonly length: number; [index: number]: RecognitionResult }
  resultIndex: number
}
interface RecognitionErrorEvent extends Event {
  error: string
}
interface RecognitionInstance extends EventTarget {
  lang: string
  continuous: boolean
  interimResults: boolean
  maxAlternatives: number
  start(): void
  stop(): void
  abort(): void
  onresult: ((e: RecognitionEvent) => void) | null
  onerror: ((e: RecognitionErrorEvent) => void) | null
  onend: (() => void) | null
}
type RecognitionCtor = new () => RecognitionInstance

function recognitionCtor(): RecognitionCtor | null {
  if (typeof window === 'undefined') return null
  const w = window as unknown as {
    SpeechRecognition?: RecognitionCtor
    webkitSpeechRecognition?: RecognitionCtor
  }
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null
}

export const asrSupported = recognitionCtor() !== null

export interface SpeechRecognitionState {
  supported: boolean
  listening: boolean
  /** Transcription courante (intermédiaire ou finale). */
  transcript: string
  /** Toutes les alternatives finales, utiles pour être indulgent à la correction. */
  alternatives: string[]
  error: string | null
  start: () => void
  stop: () => void
  reset: () => void
}

export function useDutchRecognition(): SpeechRecognitionState {
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [alternatives, setAlternatives] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const ref = useRef<RecognitionInstance | null>(null)

  const stop = useCallback(() => {
    ref.current?.stop()
    setListening(false)
  }, [])

  const reset = useCallback(() => {
    setTranscript('')
    setAlternatives([])
    setError(null)
  }, [])

  const start = useCallback(() => {
    const Ctor = recognitionCtor()
    if (!Ctor) {
      setError('unsupported')
      return
    }
    stopSpeaking()
    ref.current?.abort()
    const rec = new Ctor()
    ref.current = rec
    rec.lang = 'nl-NL'
    rec.continuous = false
    rec.interimResults = true
    rec.maxAlternatives = 5
    setTranscript('')
    setAlternatives([])
    setError(null)

    rec.onresult = (e) => {
      let interim = ''
      const finals: string[] = []
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const result = e.results[i]
        if (result.isFinal) {
          for (let j = 0; j < result.length; j++) finals.push(result[j].transcript)
        } else {
          interim += result[0].transcript
        }
      }
      if (finals.length) {
        setTranscript(finals[0].trim())
        setAlternatives(finals.map((f) => f.trim()))
      } else if (interim) {
        setTranscript(interim.trim())
      }
    }
    rec.onerror = (e) => {
      setError(e.error)
      setListening(false)
    }
    rec.onend = () => setListening(false)

    try {
      rec.start()
      setListening(true)
    } catch {
      setError('start-failed')
      setListening(false)
    }
  }, [])

  useEffect(() => () => ref.current?.abort(), [])

  return { supported: asrSupported, listening, transcript, alternatives, error, start, stop, reset }
}

export function recognitionErrorMessage(code: string): string {
  switch (code) {
    case 'not-allowed':
    case 'service-not-allowed':
      return "Le micro est bloqué. Autorise l'accès au micro dans les réglages du navigateur."
    case 'no-speech':
      return "Je n'ai rien entendu. Réessaie en parlant plus près du micro."
    case 'audio-capture':
      return 'Aucun micro détecté sur cet appareil.'
    case 'network':
      return 'La reconnaissance vocale a besoin du réseau et la connexion a échoué.'
    case 'unsupported':
      return "Ce navigateur ne gère pas la reconnaissance vocale. Utilise l'auto-évaluation."
    default:
      return "La reconnaissance vocale n'a pas abouti. Réessaie ou utilise l'auto-évaluation."
  }
}
