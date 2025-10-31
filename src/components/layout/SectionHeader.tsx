import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  children?: ReactNode
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  align?: 'left' | 'center' | 'right'
}

export function SectionHeader({
  title,
  subtitle,
  children,
  className,
  titleClassName,
  subtitleClassName,
  align = 'center',
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <div className={cn('mb-12 sm:mb-16 lg:mb-20', alignmentClasses[align], className)}>
      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl',
          'font-bold tracking-tight',
          'mb-4 sm:mb-6',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-base sm:text-lg lg:text-xl',
            'text-muted-foreground',
            'max-w-3xl',
            align === 'center' && 'mx-auto',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}
