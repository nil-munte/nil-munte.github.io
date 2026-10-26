"""Contour lines of the Mola de Colldejou for the site background.

Downloads the ICGC MET-5 elevation model (5 m, EPSG:25831, CC BY 4.0) for a
7.2 x 2.4 km window with the summit near its left third and writes
public/design/colldejou.svg (contours every 20 m, index every 100 m).

    pip install requests numpy contourpy
    python design/contours.py

The summit lands at 31.04% / 49.58% of the map: if the window changes, update
those numbers in src/styles/global.css and design/og.typ.
"""
import pathlib
import sys

import contourpy
import numpy as np
import requests

WCS = "https://geoserveis.icgc.cat/icc_mdt/wcs/service"
MINX, MINY = 319230, 4551655          # same grid as the first version
WIDTH_M, HEIGHT_M, CELL = 7200, 2400, 5
OUT = pathlib.Path(__file__).resolve().parent.parent / "public" / "design" / "colldejou.svg"

sys.setrecursionlimit(10000)


def download():
    params = {
        "SERVICE": "WCS", "VERSION": "1.0.0", "REQUEST": "GetCoverage",
        # The service proxy turns icc:met5 into icc:met55, so MET-5 is "icc:met".
        "COVERAGE": "icc:met", "CRS": "EPSG:25831", "FORMAT": "ArcGrid",
        "BBOX": f"{MINX},{MINY},{MINX + WIDTH_M},{MINY + HEIGHT_M}",
        "WIDTH": WIDTH_M // CELL, "HEIGHT": HEIGHT_M // CELL,
    }
    r = requests.get(WCS, params=params, timeout=300)
    r.raise_for_status()
    rows = [l for l in r.text.split("\n")[6:] if l.strip()]
    return np.array([[float(v) for v in row.split()] for row in rows])


def simplify(pts, eps):
    """Douglas-Peucker."""
    if len(pts) < 3:
        return pts
    a, b = pts[0], pts[-1]
    ab = b - a
    n = np.hypot(*ab)
    if n:
        d = np.abs(ab[0] * (pts[:, 1] - a[1]) - ab[1] * (pts[:, 0] - a[0])) / n
    else:
        d = np.hypot(pts[:, 0] - a[0], pts[:, 1] - a[1])
    i = int(np.argmax(d))
    if d[i] > eps:
        return np.vstack([simplify(pts[: i + 1], eps)[:-1], simplify(pts[i:], eps)])
    return np.array([a, b])


def main():
    z = download()
    h, w = z.shape
    row, col = np.unravel_index(np.argmax(z), z.shape)
    print(f"max {z.max():.1f} m at {col / w:.2%} / {row / h:.2%}")
    gen = contourpy.contour_generator(z=z, line_type="Separate")
    paths = []
    for level in range(int(z.min() // 20) * 20 + 20, int(z.max()) + 20, 20):
        d = ""
        for seg in gen.lines(level):
            if len(seg) >= 6:
                d += "M" + "L".join(f"{x:.0f} {y:.0f}" for x, y in simplify(seg, 0.7))
        if d:
            paths.append(f'<path class="{"m" if level % 100 == 0 else "n"}" d="{d}"/>')
    OUT.write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" preserveAspectRatio="xMidYMid slice">'
        "<!-- Mola de Colldejou (921 m) i serres a l'est. Corbes cada 20 m, mestres cada 100 m, "
        "a partir del MET-5 de l'ICGC (CC BY 4.0). -->"
        "<style>path{fill:none;stroke:#2f5d4a;stroke-linejoin:round;stroke-linecap:round}"
        ".n{stroke-opacity:.18;stroke-width:.7}.m{stroke-opacity:.34;stroke-width:1.2}</style>"
        + "".join(paths) + "</svg>",
        encoding="utf-8",
    )
    print(f"{OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
