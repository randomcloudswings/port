# Layout Components

This directory contains the core layout components for the portfolio application.

## Components

### Layout

The top-level layout component that orchestrates all page sections.

```tsx
import { Layout } from '@/components/layout'

function App() {
  return <Layout />
}
```

### Section

A reusable section wrapper that provides consistent spacing, max-width constraints, and semantic HTML.

**Props:**

- `id?: string` - HTML id for the section (useful for anchor links)
- `children: ReactNode` - Section content
- `className?: string` - Additional CSS classes
- `as?: 'section' | 'div' | 'article' | 'aside'` - HTML element to render (default: 'section')
- `fullHeight?: boolean` - Apply min-h-screen (default: true)
- `ariaLabel?: string` - ARIA label for accessibility

**Example:**

```tsx
import { Section } from '@/components/layout'

export function MySection() {
  return (
    <Section id="my-section" ariaLabel="My section">
      {/* Content */}
    </Section>
  )
}
```

### SectionHeader

Provides consistent section headers with title, subtitle, and flexible alignment.

**Props:**

- `title: string` - Section title (required)
- `subtitle?: string` - Optional subtitle text
- `children?: ReactNode` - Additional content below subtitle
- `className?: string` - Additional CSS classes for the wrapper
- `titleClassName?: string` - Additional CSS classes for the title
- `subtitleClassName?: string` - Additional CSS classes for the subtitle
- `align?: 'left' | 'center' | 'right'` - Text alignment (default: 'center')

**Example:**

```tsx
import { Section, SectionHeader } from '@/components/layout'

export function MySection() {
  return (
    <Section id="my-section">
      <SectionHeader title="My Section" subtitle="A brief description" align="center" />
      {/* Section content */}
    </Section>
  )
}
```

## Responsive Behavior

All layout components are fully responsive with mobile-first design:

- **Mobile**: Smaller padding and typography
- **Tablet (sm)**: Moderate spacing increases
- **Desktop (lg)**: Full spacing and optimal reading widths

The responsive spacing is controlled via CSS variables defined in `global.css`:

- `--section-spacing-y`: Vertical section padding
- `--section-spacing-x`: Horizontal section padding
- `--section-gap`: Gap between section elements

## Accessibility

All layout components follow accessibility best practices:

- Semantic HTML landmarks (`<section>`, `<article>`, etc.)
- ARIA labels for screen readers
- Proper heading hierarchy
- Focus management
