Implement a polished, production-ready Dark Mode / Light Mode toggle for this web application.

Goal:
Add a smooth, accessible, persistent theme toggle that supports:
- Light mode
- Dark mode
- System preference support
- No hydration errors
- No flash of incorrect theme on page load
- Clean responsive design
- Pixel-consistent styling across all pages and reusable components

Core Requirements:
1. Detect the existing project structure before editing.
   - If this is a Next.js App Router project, implement the provider using the app directory pattern.
   - If the project already has a theme provider, extend it instead of duplicating it.
   - If Tailwind CSS is used, configure dark mode using a selector-based approach.
   - Do not rewrite unrelated files.
   - Do not change the existing tech stack unless absolutely necessary.

2. Add theme persistence.
   - Save the selected theme in localStorage or through the existing theme library if already installed.
   - Respect the user's system preference by default.
   - After the user manually chooses light or dark, preserve that choice across refreshes and browser sessions.

3. Prevent hydration issues.
   - Theme-dependent UI must not render incorrect server/client content.
   - Avoid directly reading window, localStorage, or matchMedia during server render.
   - Use a mounted/client-ready state where needed for the toggle button.
   - If using Next.js App Router, add suppressHydrationWarning only on the html element where appropriate.
   - The page must not show React hydration mismatch warnings.

4. Build a reusable ThemeToggle component.
   - Location suggestion:
     components/theme-toggle.tsx
   - It must be a client component only if needed.
   - The button should visually show the current theme.
   - Include light and dark icons using inline SVG only.
   - Do not install icon libraries such as lucide-react.
   - Add accessible labels:
     aria-label="Toggle theme"
     title="Toggle theme"
   - Ensure keyboard accessibility with native button behavior.
   - Add focus-visible styles.

5. UI / Design Requirements:
   - Toggle should look modern, minimal, and smooth.
   - Use a compact pill/switch design or icon button depending on the existing navbar style.
   - Match the existing design system, spacing, border radius, font sizes, and colors.
   - Add smooth transitions for background, text, borders, shadows, and icons.
   - Use subtle animation only; avoid distracting movement.
   - Must look good on desktop, tablet, and mobile.
   - The toggle must not break navbar alignment.
   - Minimum tap target should be comfortable on mobile, around 40px by 40px.

6. Theme Styling:
   - Audit the app and update all major surfaces to support both themes:
     body background
     text colors
     cards
     navbar/header
     footer
     buttons
     inputs
     modals/dropdowns if present
     borders/dividers
     hover states
     active states
     shadows
   - Prefer design tokens/CSS variables where possible:
     --background
     --foreground
     --card
     --card-foreground
     --muted
     --muted-foreground
     --border
     --primary
     --primary-foreground
   - Avoid hardcoded colors that only work in one theme.
   - Make sure dark mode is not pure black unless the existing design uses it.
   - Use comfortable contrast for readability.

7. Implementation Preference:
   - If next-themes is already installed, use it.
   - If next-themes is not installed and this is a Next.js project, install and use it unless the existing project has its own theme system.
   - Configure the provider with:
     attribute="class" or data attribute depending on the current Tailwind setup
     defaultTheme="system"
     enableSystem
     disableTransitionOnChange if appropriate
   - Wrap the root layout with the ThemeProvider.
   - Keep server components as server components where possible.
   - Only mark small interactive components as "use client".

8. Files to consider:
   - app/layout.tsx or pages/_app.tsx
   - app/globals.css or styles/globals.css
   - tailwind.config.ts/js if present
   - components/theme-provider.tsx
   - components/theme-toggle.tsx
   - navbar/header component where the toggle should be placed

9. Navbar Placement:
   - Place the toggle in the main navigation/header.
   - On desktop, align it with the existing nav actions.
   - On mobile, keep it visible and easy to tap.
   - Do not overcrowd the header.
   - If there is a mobile menu, make sure the toggle works both inside or beside it depending on the existing layout.

10. Quality Checks:
   - Run linting/type checks if available.
   - Verify no hydration warnings.
   - Verify no layout shift caused by the toggle.
   - Verify the chosen theme persists after refresh.
   - Verify system theme works when no manual preference exists.
   - Verify all important pages are readable in both dark and light mode.
   - Remove unused imports.
   - Keep code clean, typed, and maintainable.

Acceptance Criteria:
- User can switch between light and dark mode.
- Theme choice persists after refresh.
- System preference works by default.
- No flash of incorrect theme.
- No hydration mismatch warnings.
- Toggle is accessible by keyboard and screen readers.
- UI remains pixel-consistent and responsive.
- No unnecessary dependencies are added.
- No unrelated layout or content changes are made.

After implementation:
Provide a short summary of:
1. Files changed
2. How the theme system works
3. How to test light/dark/system behavior
4. Any assumptions made