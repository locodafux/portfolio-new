# Leonardo Timkang Jr. Portfolio

Production-ready Next.js portfolio with a server-side Gemini-powered portfolio chat API, responsive landing page sections, and theme support.

## Requirements

- Node.js `18.18.0` or newer
- npm `10` or newer recommended

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file:

```bash
cp .env.example .env.local
```

3. Add your Gemini API key to `.env.local`:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

## Available Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

## Deploying to Vercel

### Framework

- Framework preset: `Next.js`
- Root directory: project root
- Build command: `npm run build`
- Install command: `npm install`
- Output directory: leave blank and use the Next.js default

### Environment Variables

Add this variable in your Vercel project settings:

- `GEMINI_API_KEY`: your private Gemini server API key

Optional:

- `GEMINI_MODEL`: override the default model used by `app/api/chat/route.ts`

Important:

- Do not use `NEXT_PUBLIC_GEMINI_API_KEY`
- Keep Gemini credentials server-side only
- Do not commit `.env`, `.env.local`, or `.env.production`

### Deploy Steps

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the repository into Vercel.
3. Confirm the framework is detected as `Next.js`.
4. Add `GEMINI_API_KEY` in `Project Settings > Environment Variables`.
5. Trigger the deployment.

## Production Notes

- The Gemini API call is server-side only through `app/api/chat/route.ts`.
- The app uses relative URLs for the chat request, so it does not depend on `localhost` in production.
- No `vercel.json` is required for this project.

## Troubleshooting

- If the build fails on Vercel, confirm the Node.js version is `18.18.0` or newer.
- If the chat widget returns a server error, verify `GEMINI_API_KEY` is set in Vercel.
- If the API route returns rate-limit errors during testing, wait for the in-memory window to reset.
- If styling looks stale after deploy, clear Vercel cache and redeploy.
