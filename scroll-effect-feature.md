You are an expert frontend developer. Implement a polished, modern scroll effect system for my portfolio website.

Goal:
Create smooth, professional scroll-based animations that make the portfolio feel premium, interactive, and modern without hurting performance, accessibility, or responsiveness.

Important:
- Do not redesign the whole portfolio.
- Do not change the content, layout structure, spacing, colors, or branding unless required for the scroll effects.
- Keep the design clean, elegant, and portfolio-focused.
- Make the animations subtle, not overly flashy.
- Ensure everything works on desktop, tablet, and mobile.
- Do not introduce unnecessary heavy libraries. If the project already uses Framer Motion, use it. If not, use CSS + Intersection Observer.

Implement these scroll effects:

1. Page Load / Hero Section
- Add a smooth entrance animation for the hero content.
- Name/title fades in first.
- Subtitle/description follows after a slight delay.
- CTA buttons fade/slide in last.
- Add a subtle parallax or floating effect to the hero visual/background, only if it does not break responsiveness.

2. Section Reveal on Scroll
- Each main section should animate when it enters the viewport:
  - About
  - Experience
  - Projects
  - Skills
  - Contact
- Use fade-up animation:
  - Initial state: opacity 0, translateY 24px
  - Visible state: opacity 1, translateY 0
  - Duration: around 500–700ms
  - Easing: smooth cubic-bezier or ease-out
- Animation should trigger once per section, not every time the user scrolls back and forth.

3. Staggered Card Animation
- For project cards, experience cards, skill items, and similar repeated elements:
  - Animate cards one by one with a small delay.
  - Delay should feel natural, around 80–120ms between items.
  - Cards should fade up smoothly.
  - Do not make delays too long.

4. Active Section Indicator
- If there is a navbar, update the active nav item based on the section currently in view.
- Add a smooth visual state for the active link.
- Do not break existing navigation.
- Clicking a nav item should smoothly scroll to the correct section.

5. Scroll Progress Bar
- Add a thin scroll progress bar fixed at the top of the page.
- It should show reading/scroll progress from 0% to 100%.
- Keep it minimal and match the portfolio theme.
- Make sure it does not overlap important UI.

6. Performance Requirements
- Use transform and opacity for animations.
- Avoid animating layout-heavy properties like width, height, top, left, margin, or padding.
- Avoid scroll event listeners for every animated element when Intersection Observer can be used.
- If using scroll listeners for the progress bar, throttle or use requestAnimationFrame.
- No animation should cause layout shift.
- Animations must remain smooth on mobile.

7. Accessibility Requirements
- Respect prefers-reduced-motion.
- If the user has reduced motion enabled:
  - Disable parallax.
  - Disable large movement animations.
  - Keep content visible immediately.
  - Use very subtle opacity transitions only if appropriate.
- Do not hide important content from screen readers.
- Do not rely on animation to communicate important information.

8. Implementation Details
- Create reusable animation utilities/components instead of repeating code.
- Suggested structure:
  - A reusable Reveal component or hook.
  - A reusable stagger animation helper for lists/cards.
  - A scroll progress component.
  - A section observer hook for active nav state.
- Keep the code clean, readable, and easy to maintain.
- Follow the existing project architecture and naming conventions.
- Use TypeScript types if the project uses TypeScript.
- Use existing CSS approach:
  - If the project uses Tailwind CSS, implement with Tailwind-friendly classes.
  - If it uses CSS modules or global CSS, follow that style.
  - Do not mix styling systems unnecessarily.

9. Animation Style
Use this visual direction:
- Premium developer portfolio
- Smooth
- Minimal
- Elegant
- Slightly futuristic
- Not childish
- Not too bouncy
- No excessive spinning, zooming, or distracting effects

10. Quality Check
After implementation:
- Check all sections still display correctly.
- Check mobile responsiveness.
- Check dark mode/light mode if available.
- Check that animations do not cause hydration errors.
- Check that reduced-motion mode works.
- Check that the scroll progress bar works from top to bottom.
- Check that active nav links update correctly.
- Remove unused code.
- Ensure there are no console errors.

Expected Output:
- Implement the scroll animation system directly in the existing portfolio.
- Provide clean, production-ready code.
- Briefly summarize what files were changed and what each change does.