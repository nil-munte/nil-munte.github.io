# Website Translation: English to Catalan

## Overview

Added Catalan language support to the portfolio website while maintaining English, using separate directory structure for each language with localized URL slugs.

## Final Structure

```
src/
├── i18n/
│   └── utils.ts          # Translation strings and helper functions
├── pages/
│   ├── index.astro       # Redirects to /en/
│   ├── en/               # English pages
│   │   ├── index.astro
│   │   ├── career.astro
│   │   ├── projects.astro
│   │   └── about.astro
│   └── ca/               # Catalan pages (localized URLs)
│       ├── index.astro
│       ├── carrera.astro
│       ├── projectes.astro
│       └── sobre-mi.astro
├── components/
│   ├── Navbar.astro       # With language switcher
│   ├── Footer.astro       # With translations
│   └── ProjectCard.astro  # With translations
└── layouts/
    └── BaseLayout.astro  # With hreflang, lang attribute
```

## URL Structure

| Language | URL | Page |
|----------|-----|------|
| English | `/en/` | Home |
| English | `/en/career` | Career |
| English | `/en/projects` | Projects |
| English | `/en/about` | About Me |
| Catalan | `/ca/` | Home |
| Catalan | `/ca/carrera` | Career |
| Catalan | `/ca/projectes` | Projects |
| Catalan | `/ca/sobre-mi` | About Me |
| Root | `/` | Redirects to `/en/` |

## Translation System

**File:** `src/i18n/utils.ts`

Contains:
- `ui` object with all translations (EN and CA)
- `languages` constant for supported languages
- `useTranslations()` helper function
- `getLocalizedRoute()` for URL mapping
- Type definitions (`Lang` type)

### Usage in Components

```astro
---
import { useTranslations, type Lang } from "../i18n/utils";

const lang = 'en' as Lang;  // or 'ca'
const t = useTranslations(lang);
---

<h1>{t('career.page_title')}</h1>
```

## SEO

- `<html lang="en">` or `<html lang="ca">` attribute
- `hreflang` tags in `<head>` pointing to alternate language versions
- Canonical URLs for each language version

## Language Switcher

Located in Navbar component. Features:
- Two buttons: **EN** and **CA**
- Active language highlighted with indigo background
- Switches to corresponding page in other language
- URL mapping ensures correct page navigation

## Files Created/Modified

| File | Change |
|------|--------|
| `src/i18n/utils.ts` | Created - all translations and helpers |
| `src/pages/index.astro` | Created - redirect to `/en/` |
| `src/pages/en/` | Created - all 4 English pages |
| `src/pages/ca/` | Created - all 4 Catalan pages |
| `src/components/Navbar.astro` | Updated - language switcher added |
| `src/components/Footer.astro` | Updated - uses translations |
| `src/components/ProjectCard.astro` | Updated - uses translations |
| `src/layouts/BaseLayout.astro` | Updated - hreflang, lang prop |
| `public/info/en/` | Created - for EN PDF |
| `public/info/ca/` | Created - for CA PDF |

## PDF Directories

```
public/info/
├── en/
│   └── CV_Nil_Munte_Guerrero_EN.pdf
└── ca/
    └── CV_Nil_Munte_Guerrero_CA.pdf
```

## TODO

- [x] Placeholder CV PDFs in `public/info/en/` and `public/info/ca/` (same file, needs translation)
- [ ] Replace placeholder CV PDFs with actual translated versions
- [ ] Update sitemap (if using @astrojs/sitemap)
- [ ] Test mobile responsiveness

## Notes

- Language switching tested and working (URL mapping fixed for localized Catalan slugs)
- All translations stored in single `src/i18n/utils.ts` file
- PDFs are placeholders - same English file duplicated for both languages

## Commands

```bash
npm run dev      # Preview at localhost:4321
npm run build    # Build for production
npm run preview  # Preview production build
```
