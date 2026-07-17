# Web Pro Chicago

A fast, animated, SEO-ready rebuild of the Web Pro Chicago marketing site — React, Vite, and hand-written CSS, with scroll-driven reveal animations, a filterable portfolio, and per-route SEO metadata.

## Stack

- **React 19 + Vite** — app shell and dev/build tooling
- **React Router** — client-side routing (Home, Services, Portfolio, Portfolio detail, About, Contact)
- **Framer Motion** — scroll reveals, page transitions, animated counters
- **Plain CSS** (custom properties, no framework) — theme lives in `src/styles/theme.css`

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint      # oxlint
```

## Structure

```
src/
  components/   shared UI (Navbar, Footer, Reveal, PortfolioCard, ...)
  pages/        one file per route
  data/         site content (services, portfolio, testimonials, ...)
  hooks/        useSEO — sets per-route title/meta tags
  styles/       theme.css — design tokens and global styles
```

## Content

Copy, stats, services, and the 24-project portfolio are sourced from the live Web Pro Chicago site and rewritten for this rebuild. Update `src/data/site.js` to change any of it.

## SEO

- Per-route `<title>` / meta description via `useSEO`
- Open Graph + Twitter meta, canonical links, and a `ProfessionalService` JSON-LD block in `index.html`
- `public/robots.txt` and `public/sitemap.xml`

This is a client-rendered SPA, so meta tags update after the route mounts rather than being present in the initial server response — sufficient for most crawlers, but for guaranteed pre-render SEO consider a static/SSR framework (Next.js, Astro) down the line.
