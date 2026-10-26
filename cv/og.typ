// Imatge per compartir a xarxes (Open Graph, 1200×630). Es genera un cop i es desa a public/:
//   typst compile --root . --font-path cv/fonts --input lang=ca --format png --ppi 144 cv/og.typ public/og-ca.png
#let lang = sys.inputs.at("lang", default: "en")
#let data = yaml("../src/data/cv.yaml")
#let p = data.person
#let accent = rgb("#0f6a61")

#set page(width: 600pt, height: 315pt, margin: 0pt, fill: rgb("#fafaf9"))
#set text(font: "Inter", fill: rgb("#1c1917"))

#place(right + horizon, dx: 90pt, {
  for r in (40pt, 75pt, 110pt, 145pt, 180pt) {
    place(center + horizon, circle(radius: r, stroke: 1pt + accent.transparentize(70%)))
  }
})
#place(left + top, dx: 48pt, dy: 44pt, box(fill: accent, radius: 8pt, inset: (x: 9pt, y: 7pt),
  text(fill: white, weight: 700, size: 14pt, p.initials)))
#place(left + bottom, dx: 48pt, dy: -44pt, box(width: 380pt, {
  text(size: 9pt, weight: 600, fill: accent, tracking: 0.12em, upper(p.roles.at(lang)))
  v(2pt)
  text(size: 34pt, weight: 700, tracking: -0.02em, p.name)
  v(-4pt)
  text(size: 13pt, weight: 500, fill: rgb("#44403c"), p.headline.at(lang))
}))
