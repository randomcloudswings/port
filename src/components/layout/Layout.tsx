import type { ReactNode } from 'react'
import { Hero, About, Skills, Projects, Contact } from '@/sections'

interface LayoutProps {
  children?: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full bg-background text-foreground antialiased">
      <main className="relative w-full" role="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      {children}
    </div>
  )
}
