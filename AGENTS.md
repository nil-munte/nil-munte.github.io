# AGENTS.md

Personal portfolio built with **Astro 5** (static output) and **Tailwind CSS 4**, deployed to GitHub Pages. Bilingual: Catalan (`ca`) and English (`en`).

## Single source of truth

`src/data/cv.yaml` holds all CV and portfolio content, each visible string as `{ ca, en }`.

- `src/data/cv.ts` parses it, validates it with zod (the build fails with the exact path on a missing field or translation) and exports helpers (`tr`, `formatRange`, `inline`, `experience` sorted newest first).
- `cv/cv.typ` (Typst) reads the same YAML and renders the PDF CVs to `public/info/<lang>/CV_Nil_Munte_Guerrero_<LANG>.pdf` (`npm run cv`, gitignored, built in CI).
- `cv/og.typ` renders the social preview images `public/og-<lang>.png` (committed; regenerate when name/roles/headline change).

Never hard-code CV content in pages. Add it to `cv.yaml` and render it.

## Structure

```
src/
├── data/cv.yaml, cv.ts      # content + validation
├── i18n/ui.ts               # UI strings, localized routes, pathFor(), cvPdf()
├── layouts/BaseLayout.astro # SEO: title, description, canonical, hreflang, Open Graph, JSON-LD
├── components/              # Header (mobile menu), Footer, ExperienceItem, ProjectCard, Media, YouTube, Icon
├── views/                   # Home, Career, Projects, About (one template for both languages)
├── pages/
│   ├── index.astro          # instant redirect by browser language
│   ├── 404.astro
│   └── [lang]/index.astro, [lang]/[page].astro
├── assets/media/            # images processed by astro:assets (WebP, responsive)
└── styles/global.css        # Tailwind 4 theme (accent colour) and utilities
cv/                          # Typst templates and Inter fonts (OFL)
public/info/                 # papers and thesis PDFs
```

Routes are defined once in `routes` in `src/i18n/ui.ts` (`/ca/carrera/` ↔ `/en/career/`, etc.). `trailingSlash: "always"`.

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Dev server at http://localhost:4321 |
| `npm run cv` | Generate CV PDFs (needs the `typst` CLI) |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Serve the build |

No test, lint or format tooling is configured.

## Conventions

- 2-space indentation, LF, UTF-8.
- Tailwind utilities; shared patterns are `@utility` blocks in `global.css` (`card`, `tag`, `btn-primary`, `btn-ghost`, `link`, `eyebrow`, `container-page`).
- Images go in `src/assets/` and through `<Image />`, never `public/`.
- External links: `target="_blank" rel="noopener"`.
- Catalan copy follows normative style: sentence case in headings, no calques.
- Commits use the GitHub noreply email; changes go through pull requests.
