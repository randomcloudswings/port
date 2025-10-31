import { Section } from '@/components/layout'

export function Hero() {
  return (
    <Section
      id="hero"
      ariaLabel="Hero section"
      as="section"
      className="flex items-center justify-center"
    >
      <div className="text-center space-y-6">
        <h1 className="text-hero font-bold">Lorem Ipsum Dolor Sit</h1>
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <div className="flex gap-4 justify-center pt-8">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
            Get Started
          </button>
          <button className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-card transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </Section>
  )
}
