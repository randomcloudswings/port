# Cinematic Portfolio

A modern, cinematic portfolio website built with React, TypeScript, and cutting-edge web technologies.

## Tech Stack

### Core
- **Vite** - Next-generation frontend tooling
- **React 18** - UI library with TypeScript
- **TypeScript** - Type-safe development

### Styling
- **Tailwind CSS** - Utility-first CSS framework with custom dark theme
- **ShadCN UI** - High-quality, accessible UI components
- **Custom Design System** - Dark palette (`#37353E`, `#44444E`, `#715A5A`, `#D3DAD9`)

### Animation & Graphics
- **GSAP** - Professional-grade animation library
  - ScrollTrigger plugin for scroll-based animations
  - MorphSVG plugin for SVG morphing (requires GSAP license)
  - DrawSVG plugin for SVG drawing effects (requires GSAP license)
- **p5.js** - Creative coding library for generative graphics

### Forms & Validation
- **React Hook Form** - Performant form management
- **Zod** - TypeScript-first schema validation
- **EmailJS** - Email service integration for contact forms

### Utilities
- **clsx** & **tailwind-merge** - Utility class management
- **vite-plugin-svgr** - Import SVGs as React components

## Project Structure

```
src/
├── components/      # Reusable UI components
│   └── ui/         # ShadCN UI components
├── sections/       # Page section components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── hooks/          # Custom React hooks
├── lib/            # External library configurations
│   └── gsap/       # GSAP setup and plugins
├── styles/         # Global styles and CSS
│   └── global.css
├── utils/          # Utility functions
└── assets/         # Static assets
    └── svg/        # SVG files
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Copy the environment variables template:
```bash
cp .env.example .env
```

3. Configure EmailJS credentials in `.env`:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Add your service ID, template ID, and public key

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Code Quality

Lint code:
```bash
npm run lint
```

## Configuration

### Path Aliases
The project uses `@` as an alias for the `src` directory:
```typescript
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/cn'
```

### SVG Imports
SVGs can be imported as React components using the `?react` suffix:
```typescript
import { ReactComponent as Logo } from '@/assets/svg/logo.svg?react'
```

### GSAP Plugins
The project includes stubs for MorphSVGPlugin and DrawSVGPlugin. To use these premium features:

1. Purchase a GSAP Club GreenSock license at [greensock.com/club](https://greensock.com/club/)
2. Download the plugin files from your GSAP dashboard
3. Replace the stub files in `src/lib/gsap/` with the actual plugin files
4. Rename them to `.ts` extensions and add proper exports

### ShadCN UI Components
Add new ShadCN components using the CLI:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

Components will be added to `src/components/ui/` and automatically configured with the project's theme.

## Theme Customization

The color palette is defined in `src/styles/global.css` using CSS variables:
- Background: `#37353E`
- Card/Secondary: `#44444E`
- Accent: `#715A5A`
- Foreground: `#D3DAD9`

## Features

### GPU Acceleration
Utility classes for hardware-accelerated animations:
```tsx
<div className="gpu-accelerated smooth-transition">
  Optimized content
</div>
```

### Reduced Motion Support
The project respects user motion preferences with automatic animation disabling for `prefers-reduced-motion`.

### Custom Scrollbar
Styled scrollbars matching the dark theme palette (WebKit browsers and Firefox).

## Browser Support
- Modern browsers with ES2022 support
- Chrome, Firefox, Safari, Edge (latest versions)

## License
Private - All rights reserved

## Development Notes

- Always use TypeScript strict mode
- Follow the existing code style (enforced by ESLint and Prettier)
- Use the `cn()` utility for conditional Tailwind classes
- Prefer named exports over default exports for components
- Keep components small and focused on a single responsibility
