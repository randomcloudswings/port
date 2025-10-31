import { Section, SectionHeader } from '@/components/layout'

export function About() {
  return (
    <Section id="about" ariaLabel="About section">
      <SectionHeader
        title="About"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-4">
          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>
          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </div>
    </Section>
  )
}
