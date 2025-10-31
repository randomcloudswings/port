# Utilities

## ViewportObserver

A wrapper around the browser's `IntersectionObserver` API that simplifies viewport-based animations and state updates.

### Basic Usage

```tsx
import { useEffect, useRef } from 'react'
import { createViewportObserver } from '@/utils'

function MyComponent() {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = createViewportObserver({
      threshold: 0.5,
      rootMargin: '0px',
    })

    if (elementRef.current) {
      observer.observe(elementRef.current, (entry) => {
        if (entry.isIntersecting) {
          console.log('Element is in viewport!')
        }
      })
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return <div ref={elementRef}>Content</div>
}
```

### One-time Observation

For animations that should only trigger once:

```tsx
observer.observe(
  element,
  (entry) => {
    if (entry.isIntersecting) {
      // Trigger entrance animation
      animateIn(entry.target)
    }
  },
  true // once = true
)
```

### Multiple Elements

```tsx
const observer = createViewportObserver({ threshold: 0.3 })

elements.forEach((element) => {
  observer.observe(element, (entry) => {
    element.classList.toggle('in-view', entry.isIntersecting)
  })
})

// Clean up all observations
observer.disconnect()
```

### Constructor Options

The `createViewportObserver` function accepts `IntersectionObserverInit` options plus a custom `once` option:

```tsx
interface ObserverOptions extends IntersectionObserverInit {
  once?: boolean // Automatically unobserve after first intersection
}
```

Standard options:

- `threshold` - Percentage of element visibility (0-1) or array of thresholds
- `rootMargin` - Margin around the viewport (e.g., '50px 0px')
- `root` - Custom viewport element (default: browser viewport)

### Methods

#### `observe(element, callback, once?)`

Start observing an element.

- `element`: DOM element to observe
- `callback`: Function called when intersection changes
- `once`: If true, automatically unobserve after first intersection

#### `unobserve(element)`

Stop observing a specific element.

#### `disconnect()`

Stop observing all elements and clean up.

### Use Cases

1. **Lazy Loading Content**

```tsx
observer.observe(
  element,
  (entry) => {
    if (entry.isIntersecting) {
      loadContent(entry.target)
    }
  },
  true
)
```

2. **Stagger Animations**

```tsx
const observer = createViewportObserver({ threshold: 0.2 })

items.forEach((item, index) => {
  observer.observe(
    item,
    (entry) => {
      if (entry.isIntersecting) {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          delay: index * 0.1,
        })
      }
    },
    true
  )
})
```

3. **Scroll-based State Updates**

```tsx
observer.observe(element, (entry) => {
  setIsVisible(entry.isIntersecting)
})
```

## cn (className utility)

Utility for merging Tailwind CSS classes with proper precedence handling.

```tsx
import { cn } from '@/utils'

function Button({ className, variant = 'primary' }) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded',
        variant === 'primary' && 'bg-primary text-white',
        variant === 'secondary' && 'bg-secondary',
        className // User classes can override defaults
      )}
    >
      Click me
    </button>
  )
}
```

Built with `clsx` and `tailwind-merge` to handle:

- Conditional classes
- Class precedence
- Tailwind class conflicts (e.g., `px-4 px-8` resolves to `px-8`)
