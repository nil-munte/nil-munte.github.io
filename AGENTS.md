# AGENTS.md

## Project Overview

This is a personal portfolio website built with **Astro 5.x** and **Tailwind CSS**. It's a static site (SSG) deployed to GitHub Pages with **bilingual support (English/Catalan)**.

## Directory Structure

```
├── src/
│   ├── i18n/
│   │   └── utils.ts          # Translation strings (EN/CA) and helpers
│   ├── components/            # Reusable Astro components
│   │   ├── Navbar.astro      # With language switcher
│   │   ├── Footer.astro      # With translations
│   │   └── ProjectCard.astro # With translations
│   ├── layouts/
│   │   └── BaseLayout.astro  # With hreflang, lang attribute
│   ├── pages/
│   │   ├── index.astro       # Redirects to /en/
│   │   ├── en/               # English pages
│   │   │   ├── index.astro
│   │   │   ├── career.astro
│   │   │   ├── projects.astro
│   │   │   └── about.astro
│   │   └── ca/               # Catalan pages (localized URLs)
│   │       ├── index.astro
│   │       ├── carrera.astro
│   │       ├── projectes.astro
│   │       └── sobre-mi.astro
│   └── styles/
│       └── global.css        # Global CSS (Tailwind directives)
├── public/
│   ├── info/
│   │   ├── en/               # English CV PDF
│   │   ├── ca/               # Catalan CV PDF
│   │   └── *.pdf             # Papers, thesis
│   └── logos/                # Social media icons
├── docs/
│   └── page_translation.md   # Translation plan documentation
├── astro.config.mjs          # Astro configuration
├── tailwind.config.cjs       # Tailwind configuration
├── tsconfig.json             # TypeScript config (extends astro/tsconfigs/strict)
└── package.json
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

All translations are in `src/i18n/utils.ts`. To add or modify translations:

1. Find the key in the `ui` object
2. Add/modify the English (`en`) and Catalan (`ca`) versions

```typescript
// Example: Adding a new translation key
'en': {
  'home.new_text': 'New English Text',
  // ...
},
'ca': {
  'home.new_text': 'Nou Text en Català',
  // ...
},
```

## Build & Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server at http://localhost:4321 |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

### Running a Single Test
This project has **no test framework** configured. If tests are added in the future, run them with:
```bash
npm test
```

## Code Style Guidelines

### General Conventions

- **Format**: 2-space indentation for all files
- **Line endings**: LF (enforced by Astro)
- **Encoding**: UTF-8

### Astro Components (.astro files)

- Frontmatter (YAML) uses `---` fences at top of file
- Import statements go inside frontmatter
- Props accessed via `Astro.props` or destructured: `const { propName } = Astro.props`
- Use Astro's built-in `<Image />` component for optimized images
- Components accept props with TypeScript interfaces (if needed)

```astro
---
// Good: Destructured props
const { title, description } = Astro.props;
---

<div class="card">
  <h2>{title}</h2>
  <p>{description}</p>
</div>
```

### TypeScript

- Use strict TypeScript (project extends `astro/tsconfigs/strict`)
- Define interfaces for component props
- No type assertions unless necessary

### CSS & Tailwind

- Use Tailwind utility classes exclusively (no custom CSS except Tailwind directives)
- Custom styles go in `src/styles/global.css`
- Use Tailwind's responsive prefixes: `md:`, `lg:`, etc.
- Use Tailwind's hover/focus variants: `hover:`, `focus:`, `active:`

```astro
<!-- Good: Responsive, interactive elements -->
<button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 md:px-6 transition-all">
  Click me
</button>
```

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Components | PascalCase | `Navbar.astro`, `ProjectCard.astro` |
| Pages | kebab-case (EN), localized (CA) | `career.astro`, `carrera.astro` |
| Props | camelCase | `currentPath`, `lang` |
| CSS classes | kebab-case (Tailwind) | `text-indigo-600`, `flex-grow` |

### File Organization

- Imports: external packages → internal modules → relative paths
- Components should be self-contained
- Layouts wrap pages with `<slot />` for content

```astro
---
// Order: external → internal → relative
import { Image } from "astro:assets";
import Navbar from "../components/Navbar.astro";
import "../styles/global.css";
---
```

### HTML Attributes & Formatting

- Use multi-line format for attributes with complex values
- Template literals for conditional classes
- External links should use `target="_blank"` with `rel="noopener"`

```astro
<a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  class={`hover:text-blue-600 ${isActive ? "font-bold" : ""}`}
>
  Link text
</a>
```

### Accessibility

- Always provide `alt` text for images
- Use semantic HTML elements
- Ensure color contrast meets WCAG guidelines

### Performance

- Use Astro's `<Image />` component for automatic optimization
- Lazy load images with `loading="lazy"` (default)
- Use `loading="eager"` for above-the-fold images
- Static assets go in `public/` directory

## Linting & Formatting

**This project does not have ESLint or Prettier configured.**

If added in the future, run:
```bash
npm run lint        # Run ESLint
npm run lint:fix    # Auto-fix linting issues
npm run format      # Format code with Prettier
```

## Deployment

The site auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` on pushes to `main`.

Manual deploy:
```bash
npm run build
# Upload dist/ folder to GitHub Pages
```

## Useful Links

- [Astro Docs](https://docs.astro.build/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Astro Assets](https://docs.astro.build/en/guides/assets/)
