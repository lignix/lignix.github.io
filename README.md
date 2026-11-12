# Portfolio – Charles Bouvier

Personal portfolio of Charles Bouvier, fullstack developer. Bilingual (English / French), fully static, hosted on Cloudflare.

**Live site:** [charlesbouvier.dev](https://charlesbouvier.dev)

## Highlights

- **Multilingual by design**: one URL per language (`/en/`, `/fr/`), `hreflang` tags and a sitemap covering every locale. Adding a language takes three steps (see below).
- **Static export**: no server, no runtime. The whole site is plain HTML, CSS and a little JavaScript.
- **Restrained motion**: the name slides in on load and sections fade in once while scrolling. Everything is disabled when the visitor prefers reduced motion, and the content stays readable without JavaScript.
- **Light and dark themes** that follow the system setting.
- **Accessibility and performance basics**: semantic HTML, skip link, visible focus states, self-hosted fonts, optimized images (WebP).
- **Localized 404 page** that picks its language from the URL or the browser.

## Tech stack

| | |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router, static export) |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 |
| i18n | [next-intl](https://next-intl.dev/) |
| Fonts | Bricolage Grotesque and Instrument Sans, self-hosted via [Fontsource](https://fontsource.org/) |
| Hosting | Cloudflare Workers (static assets), deployed from GitHub |

## Getting started

Requirements: Node.js 20.9 or later.

```bash
npm install
npm run dev
```

The site runs on <http://localhost:3000> and redirects to `/en/` or `/fr/` depending on the browser language.

To build and preview the production version:

```bash
npm run build    # generates the static site in ./out
npx serve out    # serves it locally
```

## Project structure

```
messages/            Translations, one JSON file per language (en.json, fr.json)
public/
  projects/          Project screenshots (WebP)
src/
  app/
    [locale]/        Localized layout and page
    not-found.tsx    404 page (shows every language, picks one in the browser)
    page.tsx         "/" redirect to the visitor's language
    globals.css      Theme (colors, fonts) and animations
  components/        Header, Hero, Projects, Experience, Skills, Contact...
  content/site.ts    Non-translatable data: links, stack, projects, skills
  i18n/              Routing, request config and navigation helpers
wrangler.jsonc       Cloudflare deployment config (serves ./out, custom 404)
.node-version        Node version used for builds
```

## Editing the content

- **Texts** (any language): `messages/<locale>.json`.
- **Links, tech stack, projects, skills, CV paths**: `src/content/site.ts`.
- **Add a project**: add an entry to `projects` in `src/content/site.ts`, add its `title`, `description` and `imageAlt` under `projects.items` in every `messages/*.json`, and optionally put a screenshot in `public/projects/` (WebP, about 1600 px wide).
- **Add a language**:
  1. add the code to `locales` in `src/i18n/routing.ts`;
  2. add its name to `localeLabels` in the same file;
  3. copy `messages/en.json` to `messages/<code>.json` and translate it.

  The language switcher, the 404 page, the root redirect and the sitemap pick it up automatically.
- **CV**: replace the PDF in `public/` and update the `cv` paths in `src/content/site.ts`.

## Deployment

The site is a static export (`npm run build` writes it to `out/`) served by Cloudflare Workers static assets. Cloudflare's Git integration builds and deploys on every push to `main`:

| Setting | Value |
|---|---|
| Production branch | `main` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

`wrangler.jsonc` points Cloudflare at `./out` and serves `404.html` (with a 404 status) for unknown URLs. The custom domain is attached to the Worker in the Cloudflare dashboard.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build (static export to `out/`) |
| `npm run lint` | ESLint |
