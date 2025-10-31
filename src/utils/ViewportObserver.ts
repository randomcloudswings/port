type ObserverCallback = (entry: IntersectionObserverEntry) => void

interface ObserverOptions extends IntersectionObserverInit {
  once?: boolean
}

export class ViewportObserver {
  private observer: IntersectionObserver | null = null
  private callbacks = new Map<Element, ObserverCallback>()
  private onceElements = new Set<Element>()
  private options: ObserverOptions

  constructor(options: ObserverOptions = { threshold: 0.1, rootMargin: '0px' }) {
    this.options = options
    this.initialize()
  }

  private initialize() {
    if (typeof window === 'undefined') return

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { once, ...observerOptions } = this.options

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const callback = this.callbacks.get(entry.target)
        if (callback) {
          callback(entry)

          if (entry.isIntersecting && this.onceElements.has(entry.target)) {
            this.unobserve(entry.target)
          }
        }
      })
    }, observerOptions)
  }

  observe(element: Element, callback: ObserverCallback, once = false) {
    if (!this.observer || !element) return

    this.callbacks.set(element, callback)
    if (once) {
      this.onceElements.add(element)
    }
    this.observer.observe(element)
  }

  unobserve(element: Element) {
    if (!this.observer || !element) return

    this.observer.unobserve(element)
    this.callbacks.delete(element)
    this.onceElements.delete(element)
  }

  disconnect() {
    if (!this.observer) return

    this.observer.disconnect()
    this.callbacks.clear()
    this.onceElements.clear()
  }
}

export function createViewportObserver(options?: ObserverOptions) {
  return new ViewportObserver(options)
}
