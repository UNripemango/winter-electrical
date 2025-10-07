# Winter Electrical — Frontend React + Tailwind Scaffold

Ready-to-deploy scaffold for a small electrician website (Winter Electrical).
Built for quick local development and deployment (Vercel / Netlify).

## Features
- React + Vite
- TailwindCSS
- Accessible components and responsive layout
- Tally.so form embed + n8n guidance for automation
- Git-friendly structure and Conventional Commits style

## Quick start (local)
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173`

## Deployment
- Push to GitHub and connect to Vercel or Netlify (default build command: `npm run build`)
- Make sure to configure environment variables on your automation server (n8n) and Tally forms.

## Tally + n8n Integration (high-level)
1. Create a Tally form (https://tally.so). In "After submit" enable webhook and copy URL.
2. Create an n8n workflow that receives the Tally webhook, processes the payload, and writes to Google Sheets or sends email.
3. Add the n8n webhook URL to Tally's "After submit" webhook field.
4. Alternatively, embed the Tally form in the Quote component (`src/components/QuoteForm.jsx`) as shown.

## Naming Conventions
- Components: PascalCase (e.g., `ServiceCard.jsx`)
- Assets: kebab-case (e.g., `ev-charger.jpg`)
- Commits: Conventional Commits (`feat:`, `fix:`, `style:`)

## Files of interest
- `src/` — React source
- `public/` — static assets
- `tailwind.config.cjs` — Tailwind configuration
