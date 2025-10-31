import { Section, SectionHeader } from '@/components/layout'

export function Projects() {
  const projects = [
    {
      title: 'Lorem Ipsum Dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Ut Enim Ad Minim',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'Duis Aute Irure',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ]

  return (
    <Section id="projects" ariaLabel="Projects section">
      <SectionHeader
        title="Projects"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-base text-muted-foreground leading-relaxed">{project.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
