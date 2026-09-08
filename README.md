# Jandré Scholtz | Next.js website

Next.js App Router + React + TypeScript implementation of the approved ivory, ink and orange editorial design. This is a real Next.js project, not an iframe or wrapper around the HTML preview.

## Run locally

Use Node.js 22 LTS or a newer supported LTS release.

```sh
npm install
npm run dev
```

Open http://localhost:3000. No environment variables, API keys or external fonts are required. Installation generates package-lock.json; commit it and use npm ci for subsequent reproducible installations. A lockfile is not included because dependency installation was unavailable in the creation environment.

## Production

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Push this directory to a Git repository and import it into Vercel with the Next.js preset, or run the commands above on a Node.js host. Add your domain through your hosting provider after reviewing the deployment. Your existing live site has not been changed.

## Project structure

- src/app/page.tsx: server route rendering the website.
- src/app/layout.tsx: document language, canonical URL, SEO and social metadata.
- src/app/globals.css: design tokens, responsive container queries and reduced-motion rules.
- src/components/site.tsx: interactive page with mobile menu, result cards, service tabs and FAQs.
- src/components/growth-sculpture.tsx: original SVG hero artwork.
- src/lib/content.ts: service descriptions, results, FAQs and LinkedIn destination.
- src/app/robots.ts and sitemap.ts: crawler routes.
- public/social-preview.png: locally generated 1200×630 social card.
- tests/site.spec.ts: Playwright desktop and mobile interaction tests.

The interactive page is a client component that Next.js prerenders as HTML; it is not a client-only dynamic import. Styling is plain CSS. Existing design typography uses system Arial and Georgia, avoiding font downloads and layout changes.

## Tests

```sh
npx playwright install chromium
npm run test:e2e
```

Tests cover metadata, overflow, result toggles, keyboard-operated tabs, FAQ controls, mobile navigation and SEO assets. The test configuration builds and serves the production app unless a local server is already running.

## Verification status

The TS/TSX files were syntax-transpiled with the installed Bun tooling, the source import graph was bundled with framework dependencies marked external, and project/content checks were performed. Dependency installation, full TypeScript checking, ESLint, next build and browser tests could not run in the creation environment. Run the commands above before deploying. Do not interpret syntax checks as a successful Next.js production build.

## Content and contact

The copy, selected results and visual direction come from the approved redesign in this conversation. Results preserve the original attribution and qualifications. The contact CTA links to the existing LinkedIn profile. No form delivery, analytics, cookie consent, CMS or booking system is configured. No invented testimonials, client logos or portrait photography are included.

Edit structured content in src/lib/content.ts and narrative sections in src/components/site.tsx. If deploying to a different production domain, update metadataBase in layout.tsx and the URLs in robots.ts and sitemap.ts. Use hosting-level noindex controls for preview deployments.

## Optional static export

This site needs no backend. To export it for static hosting, add output: 'export' to next.config.ts and export const dynamic = 'force-static' in robots.ts and sitemap.ts, then run npm run build. Publish the resulting out/ directory rather than using npm start. This optional mode has not been tested here.

## Framework documentation

- https://nextjs.org/docs/app/getting-started/installation
- https://nextjs.org/docs/app/getting-started/deploying
