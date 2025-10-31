import { useEffect, useState } from 'react'

export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setPrefersReducedMotion(event.matches)

      if (event.matches) {
        document.documentElement.classList.add('reduce-motion')
      } else {
        document.documentElement.classList.remove('reduce-motion')
      }
    }

    handleChange(mediaQuery)

    const listener = (e: MediaQueryListEvent) => handleChange(e)
    mediaQuery.addEventListener('change', listener)

    return () => {
      mediaQuery.removeEventListener('change', listener)
    }
  }, [])

  return prefersReducedMotion
}
