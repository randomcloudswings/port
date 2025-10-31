import { cn } from '@/utils/cn'

interface ExampleProps {
  className?: string
  children: React.ReactNode
}

export function Example({ className, children }: ExampleProps) {
  return (
    <div className={cn('p-4 rounded-lg bg-card text-card-foreground', className)}>{children}</div>
  )
}
