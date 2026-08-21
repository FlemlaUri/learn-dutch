import { useEffect, useState } from 'react'
import type { Route } from '../types'

function parse(hash: string): Route {
  const path = hash.replace(/^#\/?/, '')
  const [head, arg] = path.split('/')
  switch (head) {
    case 'lecon': {
      const day = Number(arg)
      return Number.isFinite(day) && day >= 1 ? { name: 'lesson', day } : { name: 'home' }
    }
    case 'reviser':
      return { name: 'review' }
    case 'carnet':
      return { name: 'phrasebook' }
    case 'plan':
      return { name: 'plan' }
    case 'progres':
      return { name: 'progress' }
    case 'reglages':
      return { name: 'settings' }
    case 'sons':
      return { name: 'sounds' }
    default:
      return { name: 'home' }
  }
}

export function href(route: Route): string {
  switch (route.name) {
    case 'home':
      return '#/'
    case 'lesson':
      return `#/lecon/${route.day}`
    case 'review':
      return '#/reviser'
    case 'phrasebook':
      return '#/carnet'
    case 'plan':
      return '#/plan'
    case 'progress':
      return '#/progres'
    case 'settings':
      return '#/reglages'
    case 'sounds':
      return '#/sons'
  }
}

export function navigate(route: Route): void {
  window.location.hash = href(route)
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash))
  useEffect(() => {
    const onChange = () => {
      setRoute(parse(window.location.hash))
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}
