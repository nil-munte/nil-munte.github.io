# Nil Munté Guerrero · Portfoli

Codi de la meva web personal: <https://nil-munte.github.io> ([català](https://nil-munte.github.io/ca/) · [English](https://nil-munte.github.io/en/)).

Hi ha la trajectòria, els projectes, les publicacions i el CV en PDF en català i anglès.

## Com funciona

Tot el contingut de la web surt d'**un sol fitxer**, [`src/data/cv.yaml`](src/data/cv.yaml), en català i anglès.

- La web està feta amb [Astro](https://astro.build/) i [Tailwind CSS](https://tailwindcss.com/) 4, i es publica a GitHub Pages.
- Cada push a `main` compila la web i la desplega. Les PR només compilen, per comprovar que tot funciona.
- Els PDF del CV són a `public/info/<idioma>/`.

## Editar el CV

1. Obre `src/data/cv.yaml`. Es pot fer des de github.com, amb el llapis.
2. Canvia o afegeix l'entrada, amb el text en català (`ca`) i en anglès (`en`).
3. Obre una PR. En fusionar-la, la web s'actualitza sola.

Si falta un camp o una traducció, la compilació falla i diu exactament on.

Altres canvis habituals:

| Vull… | On |
|---|---|
| Afegir una imatge a una feina | Fitxer a `src/assets/media/` i entrada `media` a `cv.yaml` |
| Canviar textos de la interfície (menú, botons) | `src/i18n/ui.ts` |

## Desenvolupament

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # web estàtica a dist/
```

## Full de ruta

Les millores fetes i les pendents són a [`docs/ROADMAP.md`](docs/ROADMAP.md).
