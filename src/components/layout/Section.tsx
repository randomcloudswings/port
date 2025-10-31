import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  as?: 'section' | 'div' | 'article' | 'aside'
  fullHeight?: boolean
  ariaLabel?: string
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children, className, as: Component = 'section', fullHeight = true, ariaLabel }, ref) => {
    return (
      <Component
        id={id}
        // @ts-expect-error - polymorphic ref typing
        ref={ref}
        className={cn(
          'relative w-full',
          fullHeight && 'min-h-screen',
          'px-4 sm:px-6 lg:px-8',
          'py-16 sm:py-20 lg:py-24',
          className
        )}
        aria-label={ariaLabel}
      >
        <div className="mx-auto max-w-7xl">{children}</div>
      </Component>
    )
  }
)

Section.displayName = 'Section'
