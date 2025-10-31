# GSAP Configuration

This directory contains the GSAP setup with all plugins registered and ready to use.

## Usage

Import GSAP utilities from this centralized location:

```typescript
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'

function MyComponent() {
  useGSAP(() => {
    gsap.to('.element', {
      x: 100,
      scrollTrigger: {
        trigger: '.element',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    })
  })

  return <div className="element">Animated content</div>
}
```

## Premium Plugins

### MorphSVGPlugin and DrawSVGPlugin

These plugins are part of GSAP Club GreenSock and require a license. Currently, stub files are in place.

To use the actual plugins:

1. **Purchase a license**: Visit [greensock.com/club](https://greensock.com/club/)
2. **Download the plugins**: Get `MorphSVGPlugin.js` and `DrawSVGPlugin.js` from your GSAP dashboard
3. **Replace the stubs**:
   - Copy the downloaded files to this directory
   - Rename them to `.ts` extensions
   - Update the exports to match TypeScript conventions

### Example Plugin File Structure

After replacing with the actual plugin:

```typescript
// MorphSVGPlugin.ts (after adding the real plugin)
import { gsap } from 'gsap'

// ... (actual plugin code from GSAP)

export const MorphSVGPlugin = {
  // ... plugin implementation
}

export default MorphSVGPlugin
```

## Available Plugins

- **ScrollTrigger** - Already configured and ready to use
- **MorphSVGPlugin** - Stub (requires license)
- **DrawSVGPlugin** - Stub (requires license)

## Tree-Shaking

All exports are designed to be tree-shakable. Only import what you need:

```typescript
// Import only what you need
import { gsap } from '@/lib/gsap'
// or
import { ScrollTrigger } from '@/lib/gsap'
// or
import { useGSAP } from '@/lib/gsap'
```
