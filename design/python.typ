// Generic image for the Python course card (16:10), in the site's palette.
#let paper = rgb("#f4efe4")
#let ink = rgb("#1f1e1a")
#let green = rgb("#2f5d4a")
#let rust = rgb("#a0522d")
#let muted = rgb("#6b6553")
#set page(width: 640pt, height: 400pt, margin: 0pt, fill: paper)
#set text(font: "IBM Plex Mono", size: 19pt, fill: ink)

#let kw(s) = text(fill: green, weight: 500, s)
#let st(s) = text(fill: rust, s)
#let cm(s) = text(fill: muted, s)

#place(top + left, dx: 56pt, dy: 46pt, box(width: 528pt, {
  set par(leading: 0.75em)
  cm("# Introducció a Python")
  linebreak()
  linebreak()
  "noms = [" + st("\"Anna\"") + ", " + st("\"Pau\"") + ", " + st("\"Martí\"") + "]"
  linebreak()
  linebreak()
  kw("for") + " nom " + kw("in") + " noms:"
  linebreak()
  h(2.4em) + kw("print") + "(" + st("f\"Hola, {nom}!\"") + ")"
  linebreak()
  linebreak()
  v(4pt)
  line(length: 100%, stroke: 0.8pt + rgb("#cbc3ae"))
  v(4pt)

  [Hola, Anna!]
  linebreak()

  [Hola, Pau!]
  linebreak()

  [Hola, Martí!]
}))
