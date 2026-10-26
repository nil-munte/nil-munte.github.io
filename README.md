# Nil Munté Guerrero · Portfoli

Codi de la meva web personal: <https://nil-munte.github.io> ([català](https://nil-munte.github.io/ca/) · [English](https://nil-munte.github.io/en/)).

Hi ha la trajectòria, els projectes, les publicacions i el CV en PDF en català i anglès.

## Com funciona

Tot el contingut surt d'**un sol fitxer**, [`src/data/cv.yaml`](src/data/cv.yaml):

```
src/data/cv.yaml ──► web (Astro)            /ca/, /en/, /ca/carrera/, /en/career/…
                 └─► CV en PDF (Typst)      /info/ca/CV_…_CA.pdf, /info/en/CV_…_EN.pdf
```

- La web està feta amb [Astro](https://astro.build/) i [Tailwind CSS](https://tailwindcss.com/) 4, i es publica a GitHub Pages.
- Els PDF els genera [Typst](https://typst.app/) amb la plantilla [`cv/cv.typ`](cv/cv.typ).
- Cada push a `main` compila els PDF i la web i els desplega. Les PR només compilen, per comprovar que tot funciona.

## Editar el CV

1. Obre `src/data/cv.yaml`. Es pot fer des de github.com, amb el llapis.
2. Canvia o afegeix l'entrada, amb el text en català (`ca`) i en anglès (`en`).
3. Obre una PR. En fusionar-la, la web i els dos PDF s'actualitzen sols.

Si falta un camp o una traducció, la compilació falla i diu exactament on.

Altres canvis habituals:

| Vull… | On |
|---|---|
| Afegir una foto | Desa-la a `src/assets/profile.jpg` (quadrada) |
| Afegir una imatge a una feina | Fitxer a `src/assets/media/` i entrada `media` a `cv.yaml` |
| Destacar un projecte a la portada | `featured: true` a `projects` |
| Mostrar el telèfon | `person.show_phone: true` |
| Canviar textos de la interfície | `src/i18n/ui.ts` |

## Desenvolupament

```bash
npm install
npm run dev      # http://localhost:4321
npm run cv       # genera els PDF (cal Typst: winget install --id Typst.Typst)
npm run build    # web estàtica a dist/
```

## Full de ruta

Les millores fetes i les pendents són a [`docs/ROADMAP.md`](docs/ROADMAP.md).
