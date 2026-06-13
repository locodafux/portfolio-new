You are a senior full-stack engineer. Prepare this project for a clean production deployment on Vercel.

Goal:
Make the app deploy-ready for Vercel without changing the core design, UI, content, or intended behavior unless a change is required to fix deployment/build/runtime issues.

First, inspect the repository:
1. Detect the framework, package manager, project root, and whether this is a monorepo.
2. Read package.json, lock files, config files, environment usage, API routes, build scripts, and deployment-related files.
3. Identify whether the project is Next.js, React/Vite, or another frontend framework.
4. Do not assume the tech stack. Confirm it from the files.

Deployment readiness tasks:
1. Make sure the project installs and builds successfully.
2. Fix all blocking TypeScript, ESLint, import, module, routing, hydration, and build errors.
3. Ensure package.json has correct scripts:
   - dev
   - build
   - start, only if appropriate for the framework
   - lint, if lint tooling exists
4. Remove unused broken imports, dead files that break build, duplicate components, and invalid dependencies.
5. Make sure all file paths are case-sensitive and deployment-safe.
6. Make sure all images/assets referenced by the app exist and work in production.
7. Make sure responsive layout is not broken after fixes.
8. Do not add unnecessary libraries.

Vercel-specific requirements:
1. Use Vercel defaults when possible.
2. Only create or modify vercel.json if the project actually needs it.
3. If vercel.json is needed, keep it minimal and correct.
4. For Next.js:
   - Do not set an output directory manually unless required.
   - Make sure next.config.js / next.config.mjs is valid.
   - Fix Server Component vs Client Component issues.
   - Add "use client" only where required.
   - Move browser-only code such as window, document, localStorage, and navigator into client-safe logic.
   - Fix useSearchParams, usePathname, and router usage issues.
   - Make sure API routes, route handlers, and server actions are production-safe.
5. For Vite/React:
   - Confirm build output is dist.
   - Confirm the build command works.
   - Ensure environment variables use the correct VITE_ prefix only for public variables.

Environment variables and secrets:
1. Search the codebase for hardcoded API keys, tokens, secrets, private URLs, or credentials.
2. Remove any hardcoded secrets from the source code.
3. Create or update .env.example with placeholder values only.
4. Make sure .env, .env.local, .env.production, and similar secret files are ignored by Git.
5. If the app uses Gemini API, use an environment variable like GEMINI_API_KEY.
6. Never expose secret keys in the browser.
7. For Next.js, do not use NEXT_PUBLIC_ for private API keys.
8. Gemini API calls must happen server-side only through an API route, server action, or backend function.
9. Add clear README instructions telling me exactly which environment variables to add in Vercel.

Production quality checks:
1. Run install if needed.
2. Run lint if available.
3. Run typecheck if available.
4. Run build.
5. Fix all errors until the production build passes.
6. Do not ignore build errors using unsafe config like ignoring TypeScript or ESLint errors unless there is no better fix.
7. Make sure the app does not depend on localhost URLs in production.
8. Make sure fetch/API base URLs work on Vercel.
9. Make sure any generated/static files needed for production are included.

README deployment guide:
Update or create a README section called "Deploying to Vercel" that includes:
1. Required Node version, if known.
2. Package manager command.
3. Local setup commands.
4. Build command.
5. Environment variables needed in Vercel.
6. Vercel project settings:
   - Framework preset
   - Build command
   - Output directory, only if applicable
   - Install command, only if applicable
7. Reminder not to commit .env files.
8. Troubleshooting notes for common build issues.

Security:
1. If any API key is found in the repository, remove it and mention that it must be rotated.
2. Add comments only where useful.
3. Do not print or expose secrets in logs.
4. Make sure public client code never receives private environment variables.

Do not:
1. Do not redesign the project.
2. Do not rewrite the whole app unnecessarily.
3. Do not change the tech stack.
4. Do not replace existing styling libraries unless the current setup is broken.
5. Do not add authentication, database, or new features unless they already exist and need fixing for deployment.
6. Do not use placeholder fake UI that removes existing functionality.

Final response after changes:
Give me:
1. A short summary of what you changed.
2. The exact files modified.
3. Any environment variables I must add to Vercel.
4. The exact Vercel settings to use.
5. The commands you ran and whether they passed.
6. Any remaining warnings or manual steps before deployment.

Start by inspecting the repository, then make the required fixes.