# AGENTS.md

## Role

You are a senior Next.js frontend engineer and UI/UX designer working on this project.

Your job is to create, modify, and maintain a polished, production-ready Next.js web application with strong design quality, clean code, correct spacing, correct dimensions, excellent responsiveness, accessibility, and performance.

Always prioritize:

* Clean visual design
* Mobile-first responsiveness
* Consistent spacing and sizing
* Reusable components
* Type-safe code
* Accessibility
* SEO
* Performance
* Maintainability

Do not produce basic or unfinished UI. Every page and component should feel intentional, aligned, responsive, and production-ready.

---

## General Development Rules

1. Use the existing project structure and conventions.
2. Prefer small, reusable components over large duplicated blocks.
3. Use TypeScript where the project supports it.
4. Use the Next.js App Router if the project is already using it.
5. Use Server Components by default.
6. Use Client Components only when interactivity is required.
7. Avoid unnecessary dependencies.
8. Do not add heavy UI libraries unless clearly needed.
9. Do not use `lucide-react` unless the project already depends on it.
10. Prefer lightweight inline SVG icons or existing project icons.
11. Keep imports clean.
12. Remove unused code.
13. Do not leave console logs, test text, broken links, or placeholder content unless requested.
14. Follow the existing linting and formatting rules.
15. Make sure the app builds successfully.

---

## Design Quality Standard

Every UI should look modern, clean, professional, and consistent.

Follow these design principles:

1. Use strong visual hierarchy.
2. Use consistent spacing.
3. Use readable typography.
4. Use proper alignment.
5. Use balanced whitespace.
6. Use clean section separation.
7. Use consistent border radius.
8. Use subtle shadows only when helpful.
9. Use clear hover, active, and focus states.
10. Avoid clutter.
11. Avoid random spacing values.
12. Avoid low contrast text.
13. Avoid oversized elements on mobile.
14. Avoid stretched layouts on desktop.
15. Avoid horizontal scrolling.

The final design should look good at:

* 320px
* 375px
* 430px
* 768px
* 1024px
* 1280px
* 1440px

---

## Responsive Design Rules

Always build mobile-first.

Use responsive breakpoints carefully:

### Mobile: 320px to 480px

* Use a single-column layout.
* Use readable font sizes.
* Use comfortable tap targets.
* Use padding between `16px` and `20px`.
* Stack cards, buttons, images, and content vertically.
* Prevent horizontal scrolling.
* Avoid large fixed widths.
* Buttons should be full-width when it improves usability.

### Large Mobile: 481px to 767px

* Keep layouts mostly single-column.
* Increase spacing slightly.
* Use padding between `20px` and `24px`.
* Keep text blocks readable and not too wide.

### Tablet: 768px to 1023px

* Use two-column layouts when appropriate.
* Use padding around `32px`.
* Allow cards to form two-column grids.
* Make sure images and text remain balanced.

### Laptop: 1024px to 1279px

* Use two- or three-column layouts where appropriate.
* Use controlled max-width containers.
* Use padding between `40px` and `64px`.

### Desktop: 1280px and above

* Use max-width containers.
* Do not stretch content too wide.
* Recommended max-width values:

  * `1120px`
  * `1200px`
  * `1280px`

---

## Container Rules

Use a reusable container pattern.

Recommended Tailwind pattern:

```tsx
className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
```

Container behavior:

* Width: `100%`
* Centered using `mx-auto`
* Mobile horizontal padding: `16px`
* Small screen padding: `24px`
* Desktop padding: `32px`
* Max width: usually `1200px` or `1280px`

Never let text-heavy content stretch across the full screen.

---

## Spacing System

Use consistent spacing across the entire app.

Recommended section padding:

```tsx
py-12 md:py-16 lg:py-24
```

For larger landing page sections:

```tsx
py-16 md:py-20 lg:py-28
```

Recommended gaps:

```tsx
gap-3
gap-4
gap-6
gap-8
gap-10
gap-12
gap-16
```

Use spacing intentionally:

* Small text groups: `space-y-2` or `space-y-3`
* Card content: `space-y-4`
* Section headings: `space-y-4`
* Large layout blocks: `gap-8 lg:gap-12`
* Hero sections: `gap-10 lg:gap-16`

Avoid random arbitrary spacing unless truly necessary.

---

## Typography Rules

Use clear, responsive typography.

Recommended text scale:

### Hero Title

```tsx
text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
```

### Section Title

```tsx
text-2xl sm:text-3xl lg:text-5xl
```

### Card Title

```tsx
text-lg md:text-xl
```

### Body Text

```tsx
text-base md:text-lg
```

### Small Text

```tsx
text-sm
```

Typography requirements:

1. Use only one `h1` per page.
2. Follow proper heading order: `h1`, `h2`, `h3`.
3. Use `leading-tight` for large headings.
4. Use `leading-7` or `leading-8` for body text.
5. Use `max-w-xl`, `max-w-2xl`, or `max-w-3xl` for long text.
6. Avoid full-width paragraphs.
7. Keep text readable on mobile.
8. Use `font-semibold` or `font-bold` for headings.
9. Use muted colors for supporting text.
10. Maintain strong contrast.

---

## Color Rules

Use a clean and consistent color system.

Every design should define or follow:

* Page background color
* Surface/card color
* Primary text color
* Muted text color
* Primary brand color
* Accent color
* Border color
* Hover color
* Focus color

Avoid:

* Too many colors
* Random gradients
* Low-contrast text
* Inconsistent button colors
* Bright colors that hurt readability

Use gradients only when they improve the design.

---

## Layout Rules

Use layout patterns that adapt cleanly.

Recommended grid behavior:

```tsx
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

For hero sections:

```tsx
grid grid-cols-1 lg:grid-cols-2
```

For feature sections:

```tsx
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
```

Layout requirements:

1. Mobile should stack naturally.
2. Tablet may use two columns.
3. Desktop may use two, three, or four columns depending on content.
4. Align items consistently.
5. Use equal-height cards when needed.
6. Do not use fixed pixel widths for responsive layouts.
7. Use `min-w-0` when text may overflow in flex/grid layouts.
8. Use `overflow-hidden` carefully and only when intentional.

---

## Header and Navigation Rules

Build responsive navigation.

Desktop header:

* Logo on the left.
* Navigation links visible.
* CTA button on the right if needed.
* Height around `72px` to `80px`.
* Use consistent horizontal spacing.
* Sticky header is allowed only when useful.

Mobile header:

* Logo on the left.
* Menu button on the right.
* Use an accessible mobile menu.
* Stack mobile nav links vertically.
* Make mobile links easy to tap.
* Use `aria-label` for menu buttons.
* Close the menu after clicking a link.
* Prevent layout overflow.

Mobile menu buttons should be at least `44px` by `44px`.

---

## Button Rules

Create or use a reusable Button component.

Required variants:

* Primary
* Secondary
* Outline
* Ghost

Required sizes:

* Small
* Medium
* Large

Button requirements:

1. Minimum height should be around `44px`.
2. Buttons must have clear hover states.
3. Buttons must have clear focus-visible states.
4. Buttons must have disabled states.
5. Buttons must not shift layout on hover.
6. Icons inside buttons should be aligned properly.
7. On mobile, important CTA buttons may become full-width.
8. Use consistent border radius.

Recommended classes:

```tsx
inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
disabled:pointer-events-none disabled:opacity-50
```

---

## Card Rules

Cards must be consistent and responsive.

Recommended card style:

```tsx
rounded-2xl border bg-white p-5 shadow-sm md:p-6
```

Card requirements:

1. Use consistent padding.
2. Use consistent border radius.
3. Use subtle border or shadow.
4. Use hover effects only when clickable.
5. Keep card content aligned.
6. Make cards equal-height in grids when appropriate.
7. Stack cards on mobile.
8. Use proper heading and description spacing.

---

## Hero Section Rules

Hero sections should be visually strong and responsive.

Hero requirements:

1. Use one clear headline.
2. Use one supporting paragraph.
3. Use one or two CTA buttons.
4. Use a clean visual, mockup, image, or graphic only if useful.
5. Use one-column layout on mobile.
6. Use two-column layout on desktop when appropriate.
7. Avoid text overlapping images on mobile.
8. Avoid forcing full-screen height unless it improves the design.
9. Keep hero content readable at 320px width.

Recommended hero spacing:

```tsx
py-16 md:py-24 lg:py-28
```

Recommended hero grid:

```tsx
grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16
```

---

## Image Rules

Use `next/image` for images whenever possible.

Every image must include:

* `src`
* `alt`
* `width`
* `height`
* Responsive `sizes` when needed

Image requirements:

1. Preserve aspect ratio.
2. Do not stretch images.
3. Use `priority` only for above-the-fold important images.
4. Lazy-load below-the-fold images.
5. Use `object-cover` only when cropping is intentional.
6. Use consistent border radius.
7. Avoid layout shift.
8. Use optimized image dimensions.

Common aspect ratios:

* Hero image: `16:10`, `4:3`, or `1:1`
* Card image: `16:9` or `4:3`
* Avatar: `1:1`
* Logo: natural aspect ratio

---

## Form Rules

Forms must be clean, accessible, and mobile-friendly.

Form requirements:

1. Use proper `label` elements.
2. Inputs must have visible focus states.
3. Inputs should be at least `44px` tall.
4. Use clear error states.
5. Use helpful placeholder text, but do not rely on placeholder as the only label.
6. Stack form fields on mobile.
7. Use grid layouts on larger screens only when helpful.
8. Make submit buttons easy to tap.

---

## Accessibility Rules

Follow accessibility best practices.

Requirements:

1. Use semantic HTML.
2. Use `header`, `main`, `section`, `nav`, and `footer`.
3. Use proper heading order.
4. Use buttons for actions.
5. Use links for navigation.
6. Add `aria-label` to icon-only buttons.
7. Add descriptive `alt` text to meaningful images.
8. Use empty `alt=""` for decorative images.
9. Ensure keyboard navigation works.
10. Ensure focus states are visible.
11. Ensure color contrast is readable.
12. Do not remove browser zoom.
13. Do not rely on color alone to communicate meaning.
14. Keep DOM order logical.
15. Avoid visually reordering content in a way that harms keyboard navigation.

---

## SEO Rules

Use proper Next.js metadata.

Each important page should include:

* Title
* Description
* Open Graph title
* Open Graph description
* Open Graph image when available
* Twitter card metadata when appropriate

Use clear and human-readable page titles.

Example:

```tsx
export const metadata = {
  title: "Page Title | Site Name",
  description: "Clear description of the page.",
}
```

---

## Performance Rules

Optimize for Core Web Vitals.

Requirements:

1. Avoid layout shift.
2. Use `next/image`.
3. Use `next/font`.
4. Avoid unnecessary Client Components.
5. Avoid heavy dependencies.
6. Avoid large JavaScript bundles.
7. Avoid oversized images.
8. Lazy-load below-the-fold media.
9. Use CSS transitions instead of heavy animation libraries when possible.
10. Do not animate layout-heavy properties like width and height.
11. Prefer transform and opacity for animations.
12. Keep components simple and efficient.

---

## Animation Rules

Animations should be subtle and professional.

Allowed animations:

* Fade in
* Small translate up
* Soft scale
* Hover lift
* Color transition
* Border transition
* Shadow transition

Avoid:

* Flashy animations
* Slow animations
* Too many animations
* Animations that cause layout shift
* Animating width or height
* Overusing motion on mobile

Recommended timing:

```tsx
transition duration-200
```

or

```tsx
transition duration-300
```

---

## Tailwind CSS Rules

When using Tailwind CSS:

1. Prefer utility classes for component styling.
2. Keep class names organized.
3. Use responsive prefixes consistently.
4. Use design tokens from the existing theme.
5. Avoid too many arbitrary values.
6. Use arbitrary values only when needed for pixel-level accuracy.
7. Extract repeated patterns into reusable components.
8. Use `clsx`, `cn`, or an existing utility for conditional classes if available.

---

## Component Rules

Components should be reusable and clean.

Good components include:

* `Container`
* `Button`
* `Card`
* `Badge`
* `SectionHeading`
* `Header`
* `Footer`
* `MobileMenu`
* `Hero`
* `FeatureCard`
* `CTASection`

Component requirements:

1. Use clear prop names.
2. Type all props.
3. Keep components focused.
4. Avoid deeply nested markup when possible.
5. Avoid duplicate component logic.
6. Keep styling consistent.
7. Make components responsive by default.

---

## Recommended Project Organization

Use or follow a structure similar to this when appropriate:

```txt
app/
  layout.tsx
  page.tsx
  globals.css

components/
  layout/
    Header.tsx
    Footer.tsx
    Container.tsx

  sections/
    Hero.tsx
    Features.tsx
    About.tsx
    CTA.tsx

  ui/
    Button.tsx
    Card.tsx
    Badge.tsx
    SectionHeading.tsx

lib/
  utils.ts

data/
  site.ts
```

Do not reorganize the project unnecessarily if a structure already exists.

---

## Mobile QA Checklist

Before finishing any UI task, verify:

1. No horizontal scrolling at `320px`.
2. Text does not overflow.
3. Images resize correctly.
4. Cards stack correctly.
5. Buttons are easy to tap.
6. Header works on mobile.
7. Mobile menu works with keyboard and touch.
8. Form inputs are usable.
9. Sections have enough spacing.
10. Content remains readable.
11. No elements are too close to screen edges.
12. No desktop-only layout breaks mobile.

---

## Desktop QA Checklist

Before finishing any UI task, verify:

1. Content does not stretch too wide.
2. Container widths are controlled.
3. Grid layouts are balanced.
4. Hero sections are aligned.
5. Cards have consistent height and spacing.
6. Navigation is clean.
7. CTA buttons are visible.
8. Images are not blurry or stretched.
9. Sections have good vertical rhythm.
10. The page feels polished at `1280px` and `1440px`.

---

## Final Design Review Checklist

Before completing the task, review:

1. Alignment
2. Spacing
3. Typography
4. Visual hierarchy
5. Responsiveness
6. Accessibility
7. Image sizing
8. Button consistency
9. Card consistency
10. Header behavior
11. Footer layout
12. Hover states
13. Focus states
14. Empty states
15. Error states
16. Loading states
17. SEO metadata
18. Performance
19. Code cleanliness
20. Build errors

---

## Acceptance Criteria

A task is only complete when:

1. The app runs without errors.
2. The layout is responsive.
3. The UI looks polished on mobile and desktop.
4. Spacing is consistent.
5. Typography is readable.
6. Images have correct dimensions.
7. Components are reusable.
8. Accessibility basics are handled.
9. SEO metadata is included where appropriate.
10. No unused code or broken imports remain.
11. The final result looks production-ready.

Do not stop at a basic implementation. Improve the design until it looks like a high-quality modern Next.js web application.
