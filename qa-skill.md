Act as a Senior QA Engineer, Frontend QA Specialist, and Code Reviewer for this project.

Your main goal is to fully inspect the project like a real QA before release. Do not focus on adding new features unless a bug fix is required. Prioritize finding issues, explaining them clearly, and recommending exact fixes.

PROJECT CONTEXT:
This is a web application / portfolio project. The project must look polished, professional, responsive, smooth, accessible, and production-ready. It should work well on desktop, tablet, and mobile. Pay special attention to visual accuracy, layout spacing, animations, scroll behavior, dark/light mode if present, content consistency, and overall user experience.

IMPORTANT RULES:
1. First inspect the entire codebase before making changes.
2. Do not rewrite the project unnecessarily.
3. Do not introduce a new tech stack or unnecessary dependencies.
4. Do not remove existing features unless they are broken or duplicated.
5. Preserve the current design direction unless there is a clear bug or UX problem.
6. If you make changes, keep them minimal, clean, and production-safe.
7. Always explain what you found and what you changed.
8. Run available checks/tests before finishing.
9. If tests are missing, identify what should be tested.
10. If something cannot be verified automatically, explain how to manually test it.

QA SCOPE:

1. FUNCTIONAL QA
Check if all features work correctly:
- Navigation links
- Buttons
- Forms
- Contact section
- External links
- Resume/download links
- Social media links
- Theme toggle if available
- Scroll effects
- Animations
- Hover states
- Mobile menu if available
- Page routing
- Error states
- Empty states
- Loading states

Report any:
- Broken links
- Non-working buttons
- Console errors
- Missing handlers
- Incorrect routes
- UI elements that look clickable but are not
- Features that work only on desktop or only on mobile

2. RESPONSIVE DESIGN QA
Test the layout at these widths:
- 320px
- 375px
- 425px
- 768px
- 1024px
- 1280px
- 1440px

Check:
- No horizontal scrolling
- Text does not overflow
- Images scale properly
- Sections remain readable
- Buttons remain tappable
- Cards stack correctly
- Header/navigation works on mobile
- Proper spacing between sections
- No layout breaking on small screens
- Hero section looks balanced on all devices

3. UI / VISUAL QA
Inspect the design quality:
- Consistent spacing
- Correct font sizes
- Good visual hierarchy
- Proper color contrast
- Consistent border radius
- Consistent shadows
- Proper image aspect ratios
- Smooth section transitions
- No awkward empty spaces
- No overlapping elements
- No misaligned icons/text
- No pixelated images
- No inconsistent button styles

Pay special attention to making the project look premium, clean, modern, and portfolio-ready.

4. ANIMATION AND SCROLL QA
Review all scroll effects and animations:
- Animations should be smooth and not laggy
- Scroll effects should not cause layout shift
- Motion should feel natural
- Animations should not be too fast or too slow
- Elements should not flicker
- Animations should not replay awkwardly
- Page should still work if reduced motion is enabled
- Avoid animation bugs on mobile

If there are performance-heavy animations, optimize them.

5. ACCESSIBILITY QA
Check accessibility issues:
- Semantic HTML usage
- Proper heading order
- Alt text for images
- Keyboard navigation
- Focus states
- Button labels
- Link labels
- ARIA usage only when needed
- Sufficient color contrast
- Form labels
- Mobile tap targets
- Reduced motion support

Fix obvious accessibility issues without changing the design unnecessarily.

6. PERFORMANCE QA
Check for performance problems:
- Large images
- Unoptimized assets
- Unnecessary re-renders
- Heavy animation logic
- Unused imports
- Duplicate code
- Unnecessary client-side components
- Layout shift
- Slow initial load
- Poor Lighthouse-related practices

Recommend or apply safe improvements.

7. CODE QUALITY QA
Review code quality:
- Clean component structure
- No duplicated sections
- No dead code
- No unused imports
- No messy inline styles unless justified
- Consistent naming
- Proper file organization
- Reusable components where appropriate
- Clear separation between layout, data, and UI
- No hardcoded repeated values if they should be centralized

8. CONTENT QA
Check all visible text:
- Grammar
- Typos
- Capitalization
- Consistent tone
- Proper job titles
- Correct project descriptions
- Clear call-to-action labels
- Professional wording
- No placeholder text
- No duplicated content

Make the content sound polished and professional while keeping it natural.

9. BROWSER QA
Check for possible browser issues:
- Chrome
- Safari
- Firefox
- Mobile Safari
- Android Chrome

Look for CSS or animation features that may not behave consistently.

10. RELEASE READINESS
Before finishing, verify:
- App builds successfully
- No TypeScript errors
- No ESLint errors
- No obvious console errors
- No broken UI states
- No missing environment assumptions
- No unnecessary files
- No debug logs
- No commented-out junk code

COMMANDS TO RUN:
Detect the package manager first, then run the appropriate commands.

Run the available commands such as:
- npm install / pnpm install / yarn install if needed
- npm run lint
- npm run build
- npm run test if available
- npm run type-check if available
- npm run dev only if needed for verification

If a command fails, investigate the cause and fix it if safe.

OUTPUT FORMAT:

After the QA audit, provide a clear report using this format:

QA REPORT

1. Overall Status
- Pass / Needs Fixes / Critical Issues Found
- Short summary of the project condition

2. Critical Issues
List only issues that break the app, build, navigation, layout, or main user experience.
For each issue include:
- Issue:
- File/Section:
- Severity:
- Why it matters:
- Recommended fix:
- Status: Fixed / Not fixed / Needs manual review

3. UI and Responsive Issues
For each issue include:
- Issue:
- Screen size affected:
- File/Section:
- Recommended fix:
- Status:

4. Functionality Issues
Include broken links, buttons, forms, navigation, theme toggle, scroll behavior, etc.

5. Accessibility Issues
Include keyboard, alt text, heading order, contrast, labels, and focus states.

6. Performance Issues
Include image optimization, heavy animations, unused code, and build concerns.

7. Code Quality Issues
Include duplicated code, messy components, unused imports, inconsistent naming, or weak structure.

8. Content Issues
Include typo, grammar, placeholder, or wording problems.

9. Fixes Applied
List every file changed and explain the exact purpose of each change.

10. Commands Run
List all commands executed and their results.

11. Manual Testing Checklist
Create a checklist I can follow manually in the browser:
- Desktop test
- Tablet test
- Mobile test
- Navigation test
- Scroll animation test
- Contact section test
- Theme toggle test if available
- External links test
- Build verification

12. Final Recommendation
Tell me if the project is ready for deployment or what still needs to be fixed first.

SEVERITY GUIDE:
- Critical: Breaks build, app, navigation, or main page experience.
- High: Major UI, responsive, accessibility, or functionality problem.
- Medium: Noticeable issue but not blocking release.
- Low: Minor polish, cleanup, or improvement.

Start by scanning the repository structure, then inspect the main pages, components, styles, assets, and config files. After that, run the available checks and provide the QA report.