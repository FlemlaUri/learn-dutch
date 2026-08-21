/** Petites icônes vectorielles : rendu identique sur toutes les plateformes, contrairement aux emojis. */

const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export type IconName = 'home' | 'plan' | 'review' | 'book' | 'chart' | 'gear' | 'speech' | 'back'

export function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const props = { ...base, width: size, height: size, 'aria-hidden': true }
  switch (name) {
    case 'home':
      return (
        <svg {...props}>
          <path d="M3.5 10.5 12 3.5l8.5 7" />
          <path d="M5.5 9.5V20h13V9.5" />
          <path d="M9.5 20v-5.5h5V20" />
        </svg>
      )
    case 'plan':
      return (
        <svg {...props}>
          <path d="M4 6h16M4 12h16M4 18h10" />
          <circle cx="19.5" cy="18" r="1.6" />
        </svg>
      )
    case 'review':
      return (
        <svg {...props}>
          <path d="M20 12a8 8 0 1 1-2.6-5.9" />
          <path d="M20 4v4.5h-4.5" />
        </svg>
      )
    case 'book':
      return (
        <svg {...props}>
          <path d="M5 4.5h9a3 3 0 0 1 3 3V20a2.5 2.5 0 0 0-2.5-2.5H5z" />
          <path d="M5 4.5V20" />
          <path d="M19.5 7.5V20" />
        </svg>
      )
    case 'chart':
      return (
        <svg {...props}>
          <path d="M4 20h16" />
          <path d="M7 20v-6M12 20V6M17 20v-9" />
        </svg>
      )
    case 'gear':
      return (
        <svg {...props}>
          <path d="M4 7h9M17 7h3M4 17h3M11 17h9M4 12h5M13 12h7" />
          <circle cx="15" cy="7" r="2" />
          <circle cx="9" cy="17" r="2" />
          <circle cx="11" cy="12" r="2" />
        </svg>
      )
    case 'speech':
      return (
        <svg {...props}>
          <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4h-1A0.5 0.5 0 0 1 4 15.5z" />
          <path d="M9 10h.01M12 10h.01M15 10h.01" strokeWidth={2.4} />
        </svg>
      )
    case 'back':
      return (
        <svg {...props}>
          <path d="M15 5l-7 7 7 7" />
        </svg>
      )
  }
}
