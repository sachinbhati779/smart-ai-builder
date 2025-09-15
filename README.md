# Smart AI Builder

_A lightweight AI prompt builder and demo — recreated from scratch._

## What this package contains
- A fresh Vite + React + TypeScript skeleton
- A simple UI (src/App.tsx) to send prompts and view AI output
- A client-side helper that calls `/api/generate` (src/api/gemini.ts)
- Example serverless endpoint for Vercel (api/generate.ts)
- GitHub Actions workflow for deploying to GitHub Pages (optional)

> This scaffold is intentionally minimal so you can customize, add your own features, and claim it as your original work on GitHub.

---

## Setup (local)
1. Install:
```bash
npm install
```

2. Local dev:
```bash
npm run dev
```

3. Build:
```bash
npm run build
```

## Vercel deployment (recommended)
1. Push this repo to GitHub.
2. Import the repo into Vercel.
3. In Vercel Project Settings add the environment variable:
   - `GEMINI_API_KEY` (value is your secret)
4. Vercel will deploy automatically.
5. Use `api/generate.ts` serverless function to forward requests to Gemini, so the key stays secret.

## GitHub Pages (static) deployment
If you want to deploy to GitHub Pages (static), set `base` in `vite.config.ts` to `'/your-repo-name/'` and use the GitHub Actions workflow provided in `.github/workflows/deploy-pages.yml`.

## Important security note
**Never** store API keys in client-side code. Use serverless functions or a backend that keeps secrets out of the browser.

## Commit roadmap (suggested)
See `commit_roadmap.txt` for a step-by-step commit list to make your Git history look original.

Good luck — customize freely and make it yours!
