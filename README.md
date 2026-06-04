# Moiz Zaidi — Director Portfolio (Nuxt 3)

A cinematic, high-end personal portfolio for film & commercial director **Moiz Zaidi**.
Built with Nuxt 3, Tailwind, GSAP + Lenis, and a cached server-side Vimeo proxy.

> This is the revamped front-end. The previous Vite/Quasar build lives one level up in the repo root and is untouched.

## Stack

- **Nuxt 3** (Composition API, file-based routing, SSR/ISR)
- **Tailwind** + scoped CSS with a cinematic design-token system (`assets/css/main.css`)
- **GSAP / ScrollTrigger** + **Lenis** smooth scroll (client plugins)
- **Vimeo** archive via a cached Nitro server route (`server/api/work.get.ts`) — the token never reaches the browser

## Getting started

```bash
cp .env.example .env      # add your NUXT_VIMEO_TOKEN
npm install
npm run dev               # http://localhost:3000
```

```bash
npm run build && npm run preview   # production preview
npm run generate                   # fully static export
```

## Structure

```
assets/css/main.css     design tokens, FX (grain/scanlines/vignette), transitions, buttons
components/             Hero, NavBar, Footer, WorkTile/Card, VideoModal, ReelFrame, ContactForm, …
composables/           useWork (Vimeo archive), useReveal (scroll-in), useTimecode
data/                  profile, projects (featured), clients, bts, craft
pages/                 index, work/index, work/[slug], about, contact
plugins/               gsap.client, lenis.client
server/api/work.get.ts cached Vimeo proxy (ISR via routeRules in nuxt.config)
```

## Content

- **Featured films** and project detail pages are curated in `data/projects.ts`.
- The **/work** archive is pulled live from Vimeo and categorised automatically by tags/description.
- Identity, bio and contact details live in `data/profile.ts`.

## Performance notes

- Posters/thumbnails are `loading="lazy"` + `decoding="async"`; hover previews use `preload="none"`.
- The archive renders 9 cards initially and reveals more via an IntersectionObserver sentinel.
- The Vimeo route is memory-cached for 1h (`?refresh=1` busts it); static assets get immutable cache headers.
- All motion respects `prefers-reduced-motion`.

## Ideas for next

- Wire the contact form to a Nitro `/api/contact` route (e.g. Resend) instead of `mailto:`.
- Add per-project OG images and a JSON-LD `Person`/`VideoObject` schema for SEO.
- Replace the placeholder showreel embed in `components/ReelFrame.vue` with the canonical reel.
- Optional: a custom cursor + magnetic buttons for extra polish.
