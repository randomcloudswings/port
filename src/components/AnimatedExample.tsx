import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'

export function AnimatedExample() {
  const containerRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!boxRef.current) return

      gsap.from(boxRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      })

      ScrollTrigger.create({
        trigger: boxRef.current,
        start: 'top center',
        end: 'bottom center',
        markers: false,
        onEnter: () => {
          gsap.to(boxRef.current, { scale: 1.05, duration: 0.3 })
        },
        onLeave: () => {
          gsap.to(boxRef.current, { scale: 1, duration: 0.3 })
        },
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center">
      <div
        ref={boxRef}
        className="w-64 h-64 bg-primary rounded-lg flex items-center justify-center text-primary-foreground"
      >
        <h2 className="text-2xl font-bold">Animated with GSAP</h2>
      </div>
    </div>
  )
}
