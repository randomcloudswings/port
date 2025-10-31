import { createContext, useContext, useRef, useEffect } from 'react'
import type { ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { ANIMATION_EASING } from '@/constants/animation'
import type { AnimationEasing } from '@/constants/animation'

gsap.registerPlugin(ScrollTrigger)

export type { AnimationEasing }

export interface AnimationContextValue {
  gsapContext: gsap.Context | null
  prefersReducedMotion: boolean
  easing: AnimationEasing
  registerTimeline: (timeline: gsap.core.Timeline, cleanup?: () => void) => void
}

const AnimationContext = createContext<AnimationContextValue | undefined>(undefined)

function useAnimationContextInternal() {
  const context = useContext(AnimationContext)
  if (!context) {
    throw new Error('useAnimationContext must be used within AnimationProvider')
  }
  return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { useAnimationContextInternal as useAnimationContext }

interface AnimationProviderProps {
  children: ReactNode
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  const contextRef = useRef<gsap.Context | null>(null)
  const timelinesRef = useRef<Array<{ timeline: gsap.core.Timeline; cleanup?: () => void }>>([])
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    contextRef.current = gsap.context(() => {})

    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    })

    if (prefersReducedMotion) {
      ScrollTrigger.config({
        limitCallbacks: true,
      })
      gsap.globalTimeline.timeScale(100)
    }

    return () => {
      timelinesRef.current.forEach(({ timeline, cleanup }) => {
        timeline.kill()
        cleanup?.()
      })
      timelinesRef.current = []

      contextRef.current?.revert()
      contextRef.current = null

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [prefersReducedMotion])

  const registerTimeline = (timeline: gsap.core.Timeline, cleanup?: () => void) => {
    timelinesRef.current.push({ timeline, cleanup })
  }

  const value: AnimationContextValue = {
    gsapContext: contextRef.current,
    prefersReducedMotion,
    easing: ANIMATION_EASING,
    registerTimeline,
  }

  return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>
}
