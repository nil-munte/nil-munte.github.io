// Share image (1200x630 at 144 ppi): paper, the Mola de Colldejou contours and the radar.
#let lang = sys.inputs.at("lang", default: "en")
#let p = yaml("../src/data/cv.yaml").person
#let paper = rgb("#f4efe4")
#let green = rgb("#2f5d4a")
#let rust = rgb("#a0522d")

#set page(width: 600pt, height: 315pt, margin: 0pt, fill: paper)
#set text(font: "Instrument Sans", fill: rgb("#1f1e1a"))

// Map: 3:1, summit at 31.04% / 49.58%. Put the summit at (445pt, 157.5pt).
#let mh = 380pt
#let mw = mh * 3
#let sx = 478pt
#let sy = 157.5pt
#place(top + left, dx: sx - mw * 0.3104, dy: sy - mh * 0.4958, image("../public/design/colldejou.svg", width: mw, height: mh))
// Fade the map out towards the text on the left, and at the bottom.
#place(top + left, rect(width: 100%, height: 100%, fill: gradient.linear(paper, paper, paper.transparentize(100%), angle: 0deg)))
#place(top + left, dy: 250pt, rect(width: 100%, height: 65pt, fill: gradient.linear(paper.transparentize(100%), paper, angle: 90deg)))

// Radar on the summit.
#let r = 100pt
#place(top + left, dx: sx - r, dy: sy - r, circle(radius: r, fill: gradient.conic(green.transparentize(65%), paper.transparentize(100%), paper.transparentize(100%), paper.transparentize(100%), paper.transparentize(100%), paper.transparentize(100%), angle: -90deg)))
#for k in (1, 2, 3) {
  let rr = r * k / 3
  place(top + left, dx: sx - rr, dy: sy - rr, circle(radius: rr, stroke: (paint: green.transparentize(if k == 3 { 40% } else { 60% }), thickness: 0.6pt)))
}
#place(top + left, dx: sx - r, dy: sy, line(length: 2 * r, stroke: 0.4pt + green.transparentize(70%)))
#place(top + left, dx: sx, dy: sy - r, line(length: 2 * r, angle: 90deg, stroke: 0.4pt + green.transparentize(70%)))
#place(top + left, dx: sx - 5pt, dy: sy - 7pt, polygon(fill: rust, (5pt, 0pt), (10pt, 9pt), (0pt, 9pt)))

// Text.
#place(top + left, dx: 44pt, dy: 0pt, box(width: 310pt, height: 315pt, align(horizon, {
  text(font: "IBM Plex Mono", size: 8.5pt, weight: 500, fill: green, p.roles.at(lang))
  v(6pt)
  text(size: 33pt, weight: 700, tracking: -0.02em, p.name)
  v(2pt)
  // FMCW chirp, as on the site.
  let pts = range(0, 121).map(i => {
    let t = i / 120
    (t * 120pt, 6pt + 5pt * calc.sin(2 * calc.pi * (1.5 * t + 7 * t * t)))
  })
  curve(stroke: 1pt + green, curve.move(pts.first()), ..pts.slice(1).map(q => curve.line(q)))
  v(6pt)
  text(size: 10.5pt, fill: rgb("#5b5648"), p.degrees.at(lang))
})))
