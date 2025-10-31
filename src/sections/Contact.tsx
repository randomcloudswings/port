import { Section, SectionHeader } from '@/components/layout'

export function Contact() {
  return (
    <Section id="contact" ariaLabel="Contact section">
      <SectionHeader
        title="Contact"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Lorem ipsum"
              className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="lorem@ipsum.com"
              className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Lorem ipsum dolor sit amet..."
              className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  )
}
