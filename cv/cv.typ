// CV en PDF a partir de src/data/resume.yaml.
//
//   typst compile --root . --font-path cv/fonts --ignore-system-fonts \
//     --input lang=ca --input variant=full cv/cv.typ cv-ca.pdf
//
// lang: ca | en. variant: full (complet) | exec (una pàgina).
// O simplement: npm run cv
//
// Una sola columna i text real (no imatges), perquè els programes de selecció
// de personal el llegeixin bé.

#let lang = sys.inputs.at("lang", default: "en")
#let variant = sys.inputs.at("variant", default: "full")
#let exec = variant == "exec"
#let data = yaml("../src/data/resume.yaml")
#let p = data.person

#let ink = rgb("#1f1e1a")
#let green = rgb("#2f5d4a")
#let muted = rgb("#5b5648")
#let rule = rgb("#cbc3ae")

#let labels = (
  ca: (
    profile: "Perfil",
    experience: "Experiència",
    earlier: "Altra experiència",
    education: "Formació",
    publications: "Publicacions",
    awards: "Premis",
    courses: "Cursos i certificacions",
    skills: "Habilitats",
    languages: "Idiomes",
    projects: "Projectes",
    now: "actualitat",
    updated: "Actualitzat",
    months: ("gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."),
  ),
  en: (
    profile: "Profile",
    experience: "Experience",
    earlier: "More experience",
    education: "Education",
    publications: "Publications",
    awards: "Awards",
    courses: "Courses and certifications",
    skills: "Skills",
    languages: "Languages",
    projects: "Projects",
    now: "present",
    updated: "Updated",
    months: ("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"),
  ),
).at(lang)

// Text that is either a plain string or a { ca, en } dictionary.
#let tr(value) = if type(value) == dictionary { value.at(lang) } else { value }

// The markup used in resume.yaml: **bold** and *italic*.
#let md(text) = {
  for (i, part) in text.split("**").enumerate() {
    if calc.odd(i) {
      strong(part)
    } else {
      for (j, piece) in part.split("*").enumerate() {
        if calc.odd(j) { emph(piece) } else { piece }
      }
    }
  }
}

#let fmt-date(value) = {
  let parts = str(value).split("-")
  if parts.len() == 2 { labels.months.at(int(parts.at(1)) - 1) + " " + parts.at(0) } else { parts.at(0) }
}
#let fmt-range(start, end) = fmt-date(start) + " – " + if end == none { labels.now } else { fmt-date(end) }

#set document(
  title: p.name + " · CV",
  author: p.name,
  keywords: data.keywords.at(lang),
)
#set page(
  paper: "a4",
  margin: (x: 1.7cm, top: 1.5cm, bottom: 1.5cm),
  footer: context {
    set text(size: 7.5pt, fill: muted)
    p.name + " · " + p.website.replace("https://", "") + " · " + labels.updated + " " + fmt-date(data.updated)
    h(1fr)
    counter(page).display("1 / 1", both: true)
  },
)
#set text(font: "Instrument Sans", size: 9.5pt, lang: lang, fill: ink)
#set par(leading: 0.58em, justify: false)
#set list(marker: text(fill: green, sym.bullet), indent: 0pt, body-indent: 0.5em, spacing: 0.55em)
#show link: set text(fill: green)

// FMCW chirp, the same signature as the website.
#let chirp(width: 7.5em) = {
  let n = 120
  let pts = range(0, n + 1).map(i => {
    let t = i / n
    (t * width, 0.35em + 0.28em * calc.sin(2 * calc.pi * (1.5 * t + 7 * t * t)))
  })
  box(height: 0.7em, curve(stroke: 0.8pt + green, curve.move(pts.first()), ..pts.slice(1).map(q => curve.line(q))))
}

#let section(title) = {
  v(0.85em)
  block(below: 0.55em, {
    text(font: "IBM Plex Mono", size: 8.5pt, weight: 500, fill: green, tracking: 0.06em, upper(title))
    v(-0.45em)
    line(length: 100%, stroke: 0.5pt + rule)
  })
}

// ---------- Header ----------
#text(size: 24pt, weight: 700, tracking: -0.02em, p.name)
#v(-0.55em)
#text(font: "IBM Plex Mono", size: 9pt, weight: 500, fill: green, tr(p.headline))
#v(-0.2em)
#chirp()
#v(-0.1em)
#{
  set text(size: 8.8pt, fill: muted)
  let items = (p.location, link("mailto:" + p.email, p.email), link(p.website, p.website.replace("https://", "")))
  for l in p.links { items.push(link(l.url, l.handle)) }
  items.join([ #h(0.3em)·#h(0.3em) ])
}

#section(labels.profile)
#tr(p.summary)

// ---------- Experience ----------
// The organisation links to its page when resume.yaml gives a url.
#let org(e) = if e.at("url", default: none) != none { link(e.url, e.org) } else { text(fill: muted, e.org) }
#section(labels.experience)
#let entry(e, bullets) = block(breakable: false, below: 0.95em, {
  grid(
    columns: (1fr, auto),
    column-gutter: 1em,
    [#text(weight: 700, size: 10pt, tr(e.role)) \ #org(e)],
    text(size: 8.8pt, fill: muted, fmt-range(e.start, e.end)),
  )
  if bullets.len() > 0 {
    v(-0.15em)
    // The executive CV has no publication list, so drop the [n] references.
    list(..bullets.map(h => md(if exec { tr(h).replace(regex("\s*\[\d+\]"), "") } else { tr(h) })))
  }
})

#for e in data.experience.filter(e => not exec or e.at("exec", default: false)) {
  let bullets = e.highlights.filter(h => not exec or h.at("exec", default: false))
  entry(e, bullets)
}

#if exec {
  section(labels.earlier)
  for e in data.experience.filter(e => not e.at("exec", default: false)) {
    block(below: 0.45em, grid(
      columns: (1fr, auto),
      [#text(weight: 600, tr(e.role)) · #org(e)],
      text(size: 8.8pt, fill: muted, fmt-range(e.start, e.end)),
    ))
  }
}

// ---------- Education ----------
#section(labels.education)
#for e in data.education {
  block(below: 0.6em, grid(
    columns: (1fr, auto),
    column-gutter: 1em,
    [#text(weight: 700, tr(e.title)) \ #text(fill: muted, e.org + " · " + tr(e.detail))],
    text(size: 8.8pt, fill: muted, str(e.start) + " – " + str(e.end)),
  ))
}

// ---------- Publications, awards, courses (full CV only) ----------
#if not exec {
  section(labels.publications)
  for (i, pub) in data.publications.enumerate() {
    block(below: 0.5em)[[#(i + 1)] #pub.authors (#pub.year). #text(weight: 600, pub.title). #emph(pub.venue).]
  }

  section(labels.awards)
  for a in data.awards {
    block(below: 0.45em, grid(
      columns: (1fr, auto),
      column-gutter: 1em,
      [#tr(a.title) · #text(fill: muted, tr(a.org))],
      text(size: 8.8pt, fill: muted, str(a.year)),
    ))
  }

  section(labels.courses)
  for c in data.courses {
    block(below: 0.45em, grid(
      columns: (1fr, auto),
      column-gutter: 1em,
      [#tr(c.title) · #text(fill: muted, tr(c.org))],
      text(size: 8.8pt, fill: muted, str(c.year)),
    ))
  }
}

// ---------- Skills and languages ----------
#section(labels.skills)
#for s in data.skills {
  block(below: 0.45em)[#text(weight: 700, tr(s.name)): #s.items.map(tr).join(", ")]
}
#block(below: 0.45em)[#text(weight: 700, labels.languages): #data.languages.map(l => tr(l.name) + " (" + tr(l.level) + ")").join(", ")]

// ---------- Projects (full CV only) ----------
#if not exec {
  section(labels.projects)
  data.projects.map(pr => link(pr.url, tr(pr.title))).join([ #h(0.3em)·#h(0.3em) ])
}
