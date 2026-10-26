# AGENTS.md

Personal portfolio built with **Astro 5** (static output) and **Tailwind CSS 4**, deployed to GitHub Pages. Bilingual: Catalan (`ca`) and English (`en`).

## Single source of truth

`src/data/cv.yaml` holds all site content, each visible string as `{ ca, en }`. `src/data/cv.ts` parses it and validates it with zod (the build fails with the exact path on a missing field or translation).

The content is currently the previous site's, unchanged on purpose: a content review will happen separately. Do not reword it.

Never hard-code content in pages. Add it to `cv.yaml` and render it.

## Design

A topographic map of the Mola de Colldejou with touches of radar signal: warm paper (`stone` scale remapped in `global.css`), green `accent`, `rust` markers, Instrument Sans plus IBM Plex Mono for labels.

- `public/design/colldejou.svg`: real contours (every 20 m) of the Mola de Colldejou and the ridges east of it, 7.2 x 2.4 km, from the ICGC MET-5 elevation model, CC BY 4.0, credited in the footer. The summit is at 31.04% / 49.58% of the map.
- Home hero (`.hero-grid` in `global.css`): the terrain is the background of the whole hero, edge to edge, and fades out before the text column so the text stays clean; under 900 px it is a band below the text. `.hero-art` is a size container, and the map, radar and summit marker are all placed from the same `--x` value in container units, so the radar stays on the summit at any width.
- Inner pages (`.page-header`): a strip of the same contours behind the title, framed as in the first version of the design.
- `public/design/chirp.svg`: the FMCW chirp used as the `.signal-rule` separator under every title.
- No dark mode, on purpose: the paper is part of the identity.

## Structure

```
src/
├── data/cv.yaml, cv.ts      # content + validation
├── i18n/ui.ts               # UI strings, localized routes, pathFor(), cvPdf()
├── layouts/BaseLayout.astro # SEO: title, description, canonical, hreflang, Open Graph, JSON-LD
├── components/              # Header (mobile menu), Footer, PageHeader, LinkButtons, ProjectCard, Media, YouTube, Icon
├── views/                   # Home, Career, Projects, About (one template for both languages)
├── pages/
│   ├── index.astro          # instant redirect by browser language
│   ├── 404.astro
│   └── [lang]/index.astro, [lang]/[page].astro
├── assets/media/            # images processed by astro:assets (WebP, responsive)
└── styles/global.css        # Tailwind 4 theme (accent colour) and utilities
public/info/                 # CV, papers and thesis PDFs
public/design/               # Colldejou contours and chirp SVGs
```

Routes are defined once in `routes` in `src/i18n/ui.ts` (`/ca/carrera/` ↔ `/en/career/`, etc.). `trailingSlash: "always"`.

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Dev server at http://localhost:4321 |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Serve the build |

No test, lint or format tooling is configured.

## Conventions

- 2-space indentation, LF, UTF-8.
- Tailwind utilities; shared patterns are `@utility` blocks in `global.css` (`card`, `btn-primary`, `btn-ghost`, `link`, `eyebrow`, `page-title`, `container-page`).
- Images go in `src/assets/` and through `<Image />`, never `public/`.
- External links: `target="_blank" rel="noopener"`.
- Catalan copy follows normative style: sentence case in headings, no calques.
- Commits use the GitHub noreply email; changes go through pull requests.
