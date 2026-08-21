/** Helpers de dates, toujours en heure locale (le programme se vit au jour le jour). */

export function isoDay(d: Date = new Date()): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function fromIsoDay(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d)
}

export function daysBetween(fromIso: string, toIso: string): number {
  const a = fromIsoDay(fromIso).getTime()
  const b = fromIsoDay(toIso).getTime()
  return Math.round((b - a) / 86_400_000)
}

export function addDays(iso: string, n: number): string {
  const d = fromIsoDay(iso)
  d.setDate(d.getDate() + n)
  return isoDay(d)
}

const JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
const MOIS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
]

export function formatFr(iso: string): string {
  const d = fromIsoDay(iso)
  return `${JOURS[d.getDay()]} ${d.getDate()} ${MOIS[d.getMonth()]}`
}
