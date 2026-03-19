# AGENTS.md

## Project Overview

This is a personal portfolio website built with **Astro 5.x** and **Tailwind CSS**. It's a static site (SSG) deployed to GitHub Pages.

## Directory Structure

```
├── src/
│   ├── components/       # Reusable Astro components (Navbar, Footer, ProjectCard)
│   ├── layouts/          # Page layouts (BaseLayout)
│   ├── pages/            # Route pages (index, career, projects, about_me)
│   └── styles/           # Global CSS (Tailwind directives)
├── public/
│   ├── info/             # CVs, PDFs, images
│   └── logos/            # Social media icons
├── astro.config.mjs      # Astro configuration
├── tailwind.config.cjs  # Tailwind configuration
├── tsconfig.json         # TypeScript config (extends astro/tsconfigs/strict)
└── package.json
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
| Pages | kebab-case | `about_me.astro`, `career.astro` |
| Props | camelCase | `currentPath`, `projectTitle` |
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
