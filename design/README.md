# Recursos de disseny

Fitxers que generen els gràfics de `public/`. No formen part de la web; només cal tornar-los a executar si canvia el que dibuixen.

| Fitxer | Genera | Quan |
|---|---|---|
| `contours.py` | `public/design/colldejou.svg`: corbes de nivell de la Mola de Colldejou (MET-5 de l'ICGC, CC BY 4.0) | Si vols una altra zona o un altre interval de corbes |
| `og.typ` | `public/og-ca.png` i `public/og-en.png`: la imatge que surt en compartir l'enllaç | Si canvien el nom, els rols o la titulació a `src/data/cv.yaml` |

## Imatge per compartir

Cal [Typst](https://typst.app/) i les fonts Instrument Sans (400, 700) i IBM Plex Mono (500) en TTF, per exemple de `https://cdn.jsdelivr.net/fontsource/fonts/<font>@5.2.5/latin-<pes>-normal.ttf`, en una carpeta `fonts/`:

```bash
typst compile --root . --font-path fonts --input lang=ca --format png --ppi 144 design/og.typ public/og-ca.png
typst compile --root . --font-path fonts --input lang=en --format png --ppi 144 design/og.typ public/og-en.png
```
