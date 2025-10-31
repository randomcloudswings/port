# ShadCN UI Components

This directory contains UI components from [ShadCN UI](https://ui.shadcn.com/).

## Adding Components

To add new ShadCN components to your project, use the CLI:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add form
# ... etc
```

Components will be automatically added to this directory with proper theming.

## Available Components

Check the [ShadCN UI documentation](https://ui.shadcn.com/docs/components) for a full list of available components.

## Customization

All components are themed using the CSS variables defined in `src/styles/global.css` and can be further customized directly in their source files since they're copied into your project.
