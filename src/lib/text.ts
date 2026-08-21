/** Normalisation et comparaison souple des réponses saisies. */

/** Minuscules, sans accents, sans ponctuation, espaces compactés. */
export function normalize(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, "'")
    .replace(/[.,!?;:«»"()–—-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Variante encore plus tolérante : on retire aussi les apostrophes. */
function loose(input: string): string {
  return normalize(input).replace(/'/g, '')
}

export function levenshtein(a: string, b: string): number {
  if (a === b) return 0
  if (!a.length) return b.length
  if (!b.length) return a.length
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i)
  const curr = new Array<number>(b.length + 1)
  for (let i = 1; i <= a.length; i++) {
    curr[0] = i
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost)
    }
    prev = curr.slice()
  }
  return prev[b.length]
}

export type MatchQuality = 'exact' | 'close' | 'wrong'

/**
 * Compare une réponse à une liste de solutions acceptées.
 * « close » = faute de frappe ou d'accent (≤ 15 % de la longueur, au moins 1 caractère).
 */
export function grade(answer: string, accepted: string[]): { quality: MatchQuality; best: string } {
  const a = normalize(answer)
  const al = loose(answer)
  let best = accepted[0] ?? ''
  let bestDist = Infinity
  for (const candidate of accepted) {
    const c = normalize(candidate)
    if (a === c || al === loose(candidate)) return { quality: 'exact', best: candidate }
    const d = levenshtein(a, c)
    if (d < bestDist) {
      bestDist = d
      best = candidate
    }
  }
  const tolerance = Math.max(1, Math.floor(normalize(best).length * 0.15))
  return { quality: bestDist <= tolerance ? 'close' : 'wrong', best }
}

/** Découpe une phrase en mots pour l'exercice de remise en ordre. */
export function words(sentence: string): string[] {
  return sentence.replace(/[.?!]$/, '').split(/\s+/).filter(Boolean)
}

/** Mélange (Fisher-Yates) — retourne une nouvelle liste. */
export function shuffle<T>(list: readonly T[], rng: () => number = Math.random): T[] {
  const out = list.slice()
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/** Prend `n` éléments au hasard. */
export function sample<T>(list: readonly T[], n: number): T[] {
  return shuffle(list).slice(0, n)
}

/** Forme d'affichage d'un mot : « de fiets », « het huis », ou le mot nu. */
export function withArticle(nl: string, article?: 'de' | 'het'): string {
  return article ? `${article} ${nl}` : nl
}
