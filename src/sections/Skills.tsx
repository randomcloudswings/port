import { Section, SectionHeader } from '@/components/layout'

export function Skills() {
  const skillCategories = [
    {
      name: 'Lorem Ipsum',
      items: ['Dolor sit amet', 'Consectetur adipiscing', 'Sed do eiusmod', 'Tempor incididunt'],
    },
    {
      name: 'Ut Labore',
      items: ['Et dolore magna', 'Aliqua enim', 'Ad minim veniam', 'Quis nostrud'],
    },
    {
      name: 'Exercitation',
      items: ['Ullamco laboris', 'Nisi ut aliquip', 'Ex ea commodo', 'Consequat duis'],
    },
  ]

  return (
    <Section id="skills" ariaLabel="Skills section">
      <SectionHeader
        title="Skills"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.name} className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary">{category.name}</h3>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="text-base sm:text-lg text-foreground/80 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
