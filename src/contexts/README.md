# Animation Context

The `AnimationProvider` provides a centralized GSAP context for the entire application, managing animation state, reduced motion preferences, and timeline cleanup.

## Setup

The provider should wrap your entire application:

```tsx
import { AnimationProvider } from '@/contexts'
import { Layout } from '@/components/layout'

function App() {
  return (
    <AnimationProvider>
      <Layout />
    </AnimationProvider>
  )
}
```

## Usage

### Basic Animation

```tsx
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { useAnimationContext } from '@/contexts'

function AnimatedComponent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { prefersReducedMotion, easing } = useAnimationContext()

  useGSAP(
    () => {
      if (prefersReducedMotion) return

      gsap.from('.animated-element', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: easing.power4Out,
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef}>
      <div className="animated-element">Animated content</div>
    </div>
  )
}
```

### ScrollTrigger Animation

```tsx
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { useAnimationContext } from '@/contexts'

function ScrollAnimatedComponent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { prefersReducedMotion, easing } = useAnimationContext()

  useGSAP(
    () => {
      if (prefersReducedMotion) return

      gsap.from('.scroll-element', {
        scrollTrigger: {
          trigger: '.scroll-element',
          start: 'top center+=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: easing.expoInOut,
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef}>
      <div className="scroll-element">Scroll-triggered content</div>
    </div>
  )
}
```

### Timeline Registration

For complex animations that need manual cleanup:

```tsx
import { useRef, useEffect } from 'react'
import { gsap } from '@/lib/gsap'
import { useAnimationContext } from '@/contexts'

function ComplexAnimation() {
  const { registerTimeline, easing } = useAnimationContext()

  useEffect(() => {
    const tl = gsap.timeline({ paused: true })

    tl.to('.element-1', { x: 100, ease: easing.power4Out }).to(
      '.element-2',
      { y: 50, ease: easing.power4Out },
      '-=0.2'
    )

    registerTimeline(tl, () => {
      console.log('Timeline cleaned up')
    })

    tl.play()

    return () => {
      tl.kill()
    }
  }, [registerTimeline, easing])

  return (
    <div>
      <div className="element-1">Element 1</div>
      <div className="element-2">Element 2</div>
    </div>
  )
}
```

## Context Values

### `gsapContext`

The global GSAP context instance. Usually not needed directly as `useGSAP` handles scoping.

### `prefersReducedMotion`

Boolean flag indicating if the user prefers reduced motion. Always check this before animating:

```tsx
const { prefersReducedMotion } = useAnimationContext()

if (prefersReducedMotion) {
  // Skip or simplify animation
  return
}
```

### `easing`

Pre-configured easing constants:

- `easing.power4Out` - Smooth ease out (power4.out)
- `easing.expoInOut` - Exponential ease in-out (expo.inOut)
- `easing.slow(n)` - Custom power ease (power${n}.out)

### `registerTimeline`

Function to register timelines for automatic cleanup:

```tsx
registerTimeline(timeline, optionalCleanupCallback)
```

## Reduced Motion Support

The AnimationProvider automatically:

1. Detects `prefers-reduced-motion` media query
2. Adds/removes `reduce-motion` class on `<html>`
3. Speeds up GSAP global timeline by 100x when reduced motion is preferred
4. Configures ScrollTrigger to limit callbacks

Components should still check `prefersReducedMotion` and skip or simplify animations accordingly.

## Best Practices

1. **Always use `useGSAP` hook** for proper cleanup and scoping
2. **Check `prefersReducedMotion`** before complex animations
3. **Use provided easing constants** for consistency
4. **Scope animations** using the `scope` option in `useGSAP`
5. **Clean up manually created timelines** in useEffect return functions
