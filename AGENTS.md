# AGENTS.md

Personal portfolio built with **Astro 5** (static output) and **Tailwind CSS 4**, deployed to GitHub Pages. Bilingual: Catalan (`ca`) and English (`en`).

## Single source of truth

`src/data/cv.yaml` holds all site content, each visible string as `{ ca, en }`. `src/data/cv.ts` parses it and validates it with zod (the build fails with the exact path on a missing field or translation).

The content is currently the previous site's, unchanged on purpose: a content review will happen separately. Do not reword it.

Never hard-code content in pages. Add it to `cv.yaml` and render it.

## Design preview

Two directions are under review, switched with `data-theme` on `<html>` (`?tema=senyal|relleu`, stored in localStorage, plus the temporary `ThemeSwitcher`): `relleu` (topographic, light, green) and `senyal` (radar, dark, orange). Each theme remaps the Tailwind `stone` and `accent` scales in `global.css`, so components use those scales only. Once one is chosen, delete the other theme block, its decorative CSS and `ThemeSwitcher`.

## Structure

```
src/
├── data/cv.yaml, cv.ts      # content + validation
├── i18n/ui.ts               # UI strings, localized routes, pathFor(), cvPdf()
├── layouts/BaseLayout.astro # SEO: title, description, canonical, hreflang, Open Graph, JSON-LD
├── components/              # Header (mobile menu), Footer, LinkButtons, ProjectCard, Media, YouTube, Icon, ThemeSwitcher
├── views/                   # Home, Career, Projects, About (one template for both languages)
├── pages/
│   ├── index.astro          # instant redirect by browser language
│   ├── 404.astro
│   └── [lang]/index.astro, [lang]/[page].astro
├── assets/media/            # images processed by astro:assets (WebP, responsive)
└── styles/global.css        # Tailwind 4 theme (accent colour) and utilities
public/info/                 # CV, papers and thesis PDFs
public/design/               # chirp and topographic SVGs
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
