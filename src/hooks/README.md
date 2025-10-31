# Custom Hooks

This directory contains custom React hooks used throughout the application.

## Example Hooks

Some common custom hooks you might create:

- `useScrollAnimation.ts` - Hook for GSAP scroll-triggered animations
- `useMediaQuery.ts` - Hook for responsive design breakpoints
- `useP5.ts` - Hook for p5.js sketch integration
- `useIntersectionObserver.ts` - Hook for element visibility detection

## Usage Example

```typescript
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function MyComponent() {
  const elementRef = useScrollAnimation({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
  })

  return <div ref={elementRef}>Animated content</div>
}
```
