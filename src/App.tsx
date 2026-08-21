import { useMemo } from 'react'
import { cardIndex, lessonByDay, stats } from './data/curriculum'
import { dueCards } from './lib/srs'
import { href, navigate, useRoute } from './lib/router'
import { useProgress, useSessionTimer } from './lib/useProgress'
import { Home } from './screens/Home'
import { Lesson } from './screens/Lesson'
import { Review } from './screens/Review'
import { Plan } from './screens/Plan'
import { Phrasebook } from './screens/Phrasebook'
import { Sounds } from './screens/Sounds'
import { ProgressScreen } from './screens/Progress'
import { SettingsScreen } from './screens/Settings'
import type { Route } from './types'
import { Icon, type IconName } from './components/icons'

const NAV: { route: Route; label: string; icon: IconName }[] = [
  { route: { name: 'home' }, label: 'Accueil', icon: 'home' },
  { route: { name: 'plan' }, label: 'Programme', icon: 'plan' },
  { route: { name: 'review' }, label: 'Réviser', icon: 'review' },
  { route: { name: 'phrasebook' }, label: 'Carnet', icon: 'book' },
  { route: { name: 'progress' }, label: 'Progrès', icon: 'chart' },
]

const TITLES: Record<Route['name'], string> = {
  home: 'Spreek Nederlands',
  lesson: 'Leçon',
  review: 'Révision',
  plan: 'Programme',
  phrasebook: 'Carnet de survie',
  progress: 'Progression',
  settings: 'Réglages',
  sounds: 'Prononciation',
}

export default function App() {
  const api = useProgress()
  const route = useRoute()
  useSessionTimer(api.logMinutes)

  const due = useMemo(
    () => dueCards(api.progress.cards).filter((c) => cardIndex[c.id]).length,
    [api.progress.cards],
  )

  const lesson = route.name === 'lesson' ? lessonByDay(route.day) : undefined
  const title = route.name === 'lesson' && lesson ? `Jour ${lesson.day}` : TITLES[route.name]
  const subtitle =
    route.name === 'home'
      ? `${stats.days} jours · ${stats.vocab} mots`
      : route.name === 'lesson' && lesson
        ? lesson.title
        : null

  return (
    <>
      <div className="app">
        <header className="topbar">
          {route.name !== 'home' && (
            <button className="icon-btn" onClick={() => navigate({ name: 'home' })} aria-label="Accueil">
              <Icon name="back" size={19} />
            </button>
          )}
          <div className="grow">
            <h1>{title}</h1>
            {subtitle && <div className="sub">{subtitle}</div>}
          </div>
          <button
            className="icon-btn"
            onClick={() => navigate({ name: 'sounds' })}
            aria-label="Guide de prononciation"
            title="Prononciation"
          >
            <Icon name="speech" size={19} />
          </button>
          <button
            className="icon-btn"
            onClick={() => navigate({ name: 'settings' })}
            aria-label="Réglages"
            title="Réglages"
          >
            <Icon name="gear" size={19} />
          </button>
        </header>

        <main>
          {route.name === 'home' && <Home api={api} />}
          {route.name === 'lesson' && <Lesson api={api} day={route.day} />}
          {route.name === 'review' && <Review api={api} />}
          {route.name === 'plan' && <Plan api={api} />}
          {route.name === 'phrasebook' && <Phrasebook api={api} />}
          {route.name === 'sounds' && <Sounds api={api} />}
          {route.name === 'progress' && <ProgressScreen api={api} />}
          {route.name === 'settings' && <SettingsScreen api={api} />}
        </main>
      </div>

      <nav className="nav">
        <div className="nav-inner">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={href(item.route)}
              className={route.name === item.route.name ? 'active' : undefined}
            >
              <span className="glyph"><Icon name={item.icon} size={21} /></span>
              {item.label}
              {item.route.name === 'review' && due > 0 && (
                <span className="badge">{due > 99 ? '99+' : due}</span>
              )}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}
