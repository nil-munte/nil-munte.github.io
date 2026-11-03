# Nil Munté Guerrero · Portfoli

Codi de la meva web personal: <https://nil-munte.github.io> ([català](https://nil-munte.github.io/ca/) · [English](https://nil-munte.github.io/en/)).

Hi ha la trajectòria, els projectes, les publicacions i el CV en PDF en català i anglès.

## Com funciona

Tot el contingut de la web surt d'**un sol fitxer**, [`src/data/cv.yaml`](src/data/cv.yaml), en català i anglès.

- La web està feta amb [Astro](https://astro.build/) i [Tailwind CSS](https://tailwindcss.com/) 4, i es publica a GitHub Pages.
- Cada push a `main` compila la web i la desplega. Les PR només compilen, per comprovar que tot funciona.
- El CV en PDF es genera amb [Typst](https://typst.app/) a partir de `src/data/resume.yaml` (vegeu més avall).

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

## El CV

El CV complet és a [`src/data/resume.yaml`](src/data/resume.yaml), en català i anglès. A partir d'aquest fitxer, [`cv/cv.typ`](cv/cv.typ) genera tres PDF:

| PDF | Adreça |
|---|---|
| CV complet en català | `/info/ca/CV_Nil_Munte_Guerrero_CA.pdf` |
| CV complet en anglès | `/info/en/CV_Nil_Munte_Guerrero_EN.pdf` |
| *Executive* d'una pàgina, en anglès | `/info/Executive_CV_Nil_Munte_Guerrero_ENG.pdf` |

Per actualitzar-lo:

1. Edita `src/data/resume.yaml` (també des de github.com) i canvia `updated` per la data d'avui.
2. Obre una PR. El CI comprova que els PDF es generin bé.
3. En fusionar-la, els PDF nous es publiquen a la web i es desa una còpia com a [*Release*](https://github.com/nil-munte/nil-munte.github.io/releases) del repo, de manera que hi queda l'historial de versions del CV.

Per marcar què entra a la versió *executive*, posa `exec: true` a la feina i als punts que vulguis.

## Desenvolupament

```bash
npm install
npm run dev      # http://localhost:4321
npm run cv       # genera els PDF del CV (cal Typst: winget install --id Typst.Typst)
npm run build    # web estàtica a dist/
```

## Full de ruta

Les millores fetes i les pendents són a [`docs/ROADMAP.md`](docs/ROADMAP.md).
