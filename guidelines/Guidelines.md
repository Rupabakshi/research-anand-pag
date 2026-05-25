# Anand PAG Inc. - Design Guidelines

## Overview
This document outlines the design system, color palette, typography, and component guidelines for the Anand PAG Inc. website to ensure consistency across all pages and sections.

---

## Color Palette

### Dark Sections
**Primary Dark Background:** `bg-[#030213]`
- Used for: Hero sections, testimonials, and other primary dark sections
- This is a very dark navy/blue-black (NOT `#0A0A0A` or `slate-900`)

### Light Sections
**Primary Light Background:** `bg-white`
- Used for: Core capabilities, case studies, process factory showcase, and CTA sections
- Design strategy: Alternating dark/light sections for visual rhythm and content separation

### Accent Colors
- **Primary CTA:** `bg-blue-600` / `hover:bg-blue-700`
- **Text on dark backgrounds:**
  - Primary text: `text-white`
  - Muted/subtitle text: `text-slate-400` or `text-white/60`
- **Text on light backgrounds:**
  - Primary text: `text-gray-900`
  - Muted text: `text-gray-600`

### Chart/Data Colors
When building dashboards or data visualizations:
- Green: `bg-green-500` / `text-green-500`
- Red: `bg-red-500` / `text-red-500`
- Blue: `bg-blue-600` / `text-blue-600`
- Yellow: `bg-yellow-500` / `text-yellow-500`
- Purple: `bg-purple-500` / `text-purple-500`
- Orange: `bg-orange-500` / `text-orange-500`

### Dark Interface Colors
When building product screenshots or dark-themed interfaces:
- Background: `bg-slate-900`
- Borders: `border-slate-700` or `border-slate-800`
- Text: `text-white` (headings), `text-slate-300` (body)
- Muted text: `text-slate-400`

### Background Effects
**Ambient Lights (on dark sections):**
- Blue ambient: `bg-blue-500/10 blur-3xl`
- Purple ambient: `bg-purple-500/5 blur-3xl` or `bg-purple-500/10 blur-3xl`
- Cyan ambient: `bg-cyan-500/10 blur-3xl`

**Grid Pattern (on dark sections):**
```css
background-image: linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px);
background-size: 64px 64px;
```

---

## Typography

### Font Weights
From `theme.css`:
- Normal: `var(--font-weight-normal)` = 400
- Medium: `var(--font-weight-medium)` = 500
- Semibold: `font-semibold` = 600
- Bold: `font-bold` = 700

### Heading Hierarchy

#### H1 - Hero Headlines (Dark Sections)
```
text-[36px] sm:text-[48px] md:text-[52px] lg:text-[58px] xl:text-[72px] 2xl:text-[88px]
font-bold
leading-[0.95]
tracking-[-0.03em]
text-white
```

#### H1 - Hero Headlines (Light Sections)
```
text-[40px] sm:text-[48px] lg:text-[56px]
font-[700]
leading-[1.1]
tracking-[-0.02em]
text-gray-900
```

#### H2 - Section Titles (Dark Sections)
```
text-[36px] sm:text-[48px] md:text-[56px] lg:text-[68px]
font-[700]
leading-[1.05]
tracking-[-0.04em]
text-white
```

#### H2 - Section Titles (Light Sections)
```
text-[32px] sm:text-[40px] lg:text-[48px]
font-[700]
leading-[1.15]
tracking-[-0.02em]
text-gray-900
```

#### H3 - Card/Component Titles
```
text-[20px] lg:text-[22px]
font-[700]
text-white (dark) or text-gray-900 (light)
```

### Body Text

#### Subheadlines/Lead Text (Dark Sections)
```
text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px]
leading-[1.5] sm:leading-[1.6] lg:leading-[1.4]
text-slate-300 or bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 bg-clip-text text-transparent
```

#### Subheadlines/Lead Text (Light Sections)
```
text-[16px] sm:text-[17px]
leading-[1.7]
text-gray-600
```

#### Body Copy
```
text-[14px] sm:text-[15px]
leading-[1.65]
text-white/60 (dark) or text-gray-600 (light)
```

#### Small Text / Captions
```
text-[12px] sm:text-[13px]
text-white/50 (dark) or text-gray-500 (light)
```

### Eyebrow Pills
```html
<div class="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
  <div class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
  <span class="text-[10px] sm:text-[11px] lg:text-[12px] font-mono uppercase tracking-[1.5px] sm:tracking-[2px] text-slate-400">
    LABEL TEXT
  </span>
</div>
```

---

## Component Guidelines

### Buttons

**IMPORTANT:** These button styles MUST be used consistently across ALL pages and components. Do not create custom button variants.

#### Primary CTA (Main Action Button)
Use for primary actions like "Request Demo", "Get Started", "Schedule a Demo"

```html
<button class="group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-[14px] sm:text-[15px] font-semibold rounded-xl overflow-hidden transition-all hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50">
  <span class="relative">Button Text</span>
</button>
```

**Key Features:**
- `bg-blue-600` background with `hover:bg-blue-700`
- `rounded-xl` (not `rounded-lg`)
- `hover:scale-[1.02]` for subtle lift effect
- `hover:shadow-lg hover:shadow-blue-500/50` for glow effect
- Wrap text in `<span class="relative">` for proper layering

#### Secondary Button (Outlined)
Use for secondary actions like "Watch Video", "View Case Studies", "Learn More"

```html
<button class="px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white text-[14px] sm:text-[15px] font-semibold rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all">
  Button Text
</button>
```

**Key Features:**
- Transparent background with border
- `border-2 border-blue-500/50` (50% opacity)
- `hover:border-blue-400 hover:bg-blue-500/10` for subtle interaction
- Same padding and text sizing as primary button

#### Button Pairing
When using both buttons together:
```html
<div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
  <button class="...primary...">Primary Action</button>
  <button class="...secondary...">Secondary Action</button>
</div>
```

### Glass Cards (Dark Sections)
```html
<div class="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all">
  <!-- Card content -->
</div>
```

### Feature Cards (Dark Sections)
```html
<div class="bg-slate-900 border border-slate-700 rounded-lg p-6">
  <!-- Card content -->
</div>
```

---

## Layout Guidelines

### Container & Spacing
```
container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16
max-w-[1400px] mx-auto
```

### Section Padding
- Light sections: `py-20 sm:py-28 lg:py-40`
- Dark sections: `py-20 sm:py-28 lg:py-40`

### Grid Layouts
- 3-column: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8`
- 4-column: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6`

---

## Design Principles

### ✅ DO:
- Use `bg-[#030213]` for all dark section backgrounds
- Use `bg-white` for all light section backgrounds
- Alternate dark/light sections for visual rhythm and content separation
- Use `text-slate-400` for muted text on dark backgrounds
- Use `text-gray-600` for muted text on light backgrounds
- Use `bg-blue-600` for primary CTAs
- Apply smooth transitions: `transition-all duration-300` or `duration-700`
- Use Motion (motion/react) for animations
- Keep typography hierarchy consistent across pages

### ❌ DON'T:
- Don't use gradients anywhere on the site (NO GRADIENTS rule)
- Don't use `#0A0A0A` for dark sections (use `#030213` instead)
- Don't use custom font sizes outside the defined hierarchy
- Don't create fake or incorrect content
- Don't use flashy or unprofessional design elements

---

## Responsive Breakpoints

Follow Tailwind's default breakpoints:
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px
- `2xl:` 1536px

---

## Animation Guidelines

### Fade In (on scroll)
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.1 }}
>
```

### Hover Effects
```
hover:scale-[1.02]
hover:shadow-lg
transition-all duration-300
```

### Floating Orbs (Dark Sections)
```tsx
<motion.div
  className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
  animate={{
    x: [-50, 50, -50],
    y: [-50, 75, -50],
  }}
  transition={{
    duration: 25,
    repeat: Infinity,
    ease: "easeInOut"
  }}
  style={{ top: '10%', left: '5%' }}
/>
```

---

## Product Screenshot Guidelines

When creating product interface screenshots (e.g., for ERC, Process Factory):

### Dark Interface Theme
- Background: `bg-slate-900`
- Border: `border-slate-800` or `border-slate-700`
- Panel backgrounds: `bg-slate-800/50`
- Text: `text-white` (headings), `text-slate-300` (body), `text-slate-400` (muted)

### Browser Chrome (if used)
```html
<div class="bg-slate-800 rounded-t-lg border-x border-t border-slate-700 px-4 py-3 flex items-center gap-2">
  <div class="flex gap-1.5">
    <div class="w-3 h-3 rounded-full bg-red-500"></div>
    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
    <div class="w-3 h-3 rounded-full bg-green-500"></div>
  </div>
  <div class="flex-1 mx-6">
    <div class="bg-slate-900/50 rounded-md px-4 py-1.5 text-sm text-slate-400 font-mono">
      domain.com/path
    </div>
  </div>
</div>
```

---

## Examples from Existing Components

### SophisticatedHero (Homepage)
- Background: `bg-[#0A0A0A]` ⚠️ *Note: This should be updated to `bg-[#030213]` for consistency*
- Grid pattern with `rgba(148, 163, 184, 0.1)`
- Ambient lights: `bg-blue-500/10` and `bg-purple-500/5`
- Floating tech icons with glass morphism

### ClientTestimonials
- Background: `bg-[#030213]` ✅ Correct dark color
- Floating orbs: blue, purple, cyan
- Glass cards: `bg-white/[0.03] border border-white/10`

### FinalCTA (Light Section)
- Background: `bg-white`
- Text: `text-gray-900` and `text-gray-600`
- CTA button: `bg-blue-600`

---

**Last Updated:** February 2026
**Maintained by:** Anand PAG Inc. Development Team