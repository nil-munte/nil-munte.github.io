// CV en PDF generat a partir de src/data/cv.yaml, la mateixa font que la web.
//
//   typst compile --root . --font-path cv/fonts --input lang=ca cv/cv.typ cv.pdf
//
// O simplement: npm run cv

#let lang = sys.inputs.at("lang", default: "en")
#let data = yaml("../src/data/cv.yaml")
#let p = data.person

#let accent = rgb("#0f6a61")
#let muted = rgb("#57534e")
#let rule-color = rgb("#d6d3d1")

#let labels = (
  ca: (
    profile: "Perfil",
    experience: "Experiència",
    education: "Formació",
    publications: "Publicacions",
    awards: "Premis",
    courses: "Cursos i certificacions",
    skills: "Habilitats",
    languages: "Idiomes",
    now: "actualitat",
    months: ("gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"),
    year-sep: " de ",
  ),
  en: (
    profile: "Profile",
    experience: "Experience",
    education: "Education",
    publications: "Publications",
    awards: "Awards",
    courses: "Courses & certifications",
    skills: "Skills",
    languages: "Languages",
    now: "present",
    year-sep: " ",
    months: ("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"),
  ),
).at(lang)

// Text that is either a plain string or a { ca, en } dictionary.
#let tr(value) = if type(value) == dictionary { value.at(lang) } else { value }

// Supports the **bold** markup used in cv.yaml.
#let md(text) = {
  for (i, part) in text.split("**").enumerate() {
    if calc.odd(i) { strong(part) } else { part }
  }
}

#let fmt-date(value) = {
  let value = str(value)
  let parts = value.split("-")
  if parts.len() == 2 { labels.months.at(int(parts.at(1)) - 1) + labels.year-sep + parts.at(0) } else { parts.at(0) }
}

#let fmt-range(start, end) = fmt-date(start) + " – " + if end == none { labels.now } else { fmt-date(end) }

#set document(title: p.name + " · CV", author: p.name, keywords: data.keywords.at(lang))
#set page(paper: "a4", margin: (x: 1.6cm, top: 1.4cm, bottom: 1.4cm), footer: context {
  set text(size: 7.5pt, fill: muted)
  p.name + " · " + p.website.replace("https://", "")
  h(1fr)
  counter(page).display("1 / 1", both: true)
})
#set text(font: "Inter", size: 9pt, lang: lang, fill: rgb("#1c1917"))
#set par(leading: 0.55em, justify: false)
#set list(marker: text(fill: accent, sym.bullet), indent: 0pt, body-indent: 0.5em, spacing: 0.5em)
#show link: set text(fill: accent)

#let section(title) = {
  v(0.9em)
  block(below: 0.6em, {
    text(size: 8pt, weight: 700, fill: accent, tracking: 0.12em, upper(title))
    v(-0.5em)
    line(length: 100%, stroke: 0.5pt + rule-color)
  })
}

// ---------- Header ----------
#grid(
  columns: (1fr, auto),
  align: (left + bottom, right + bottom),
  [
    #text(size: 22pt, weight: 700, tracking: -0.02em, p.name)
    #v(-0.6em)
    #text(size: 10.5pt, weight: 500, fill: accent, tr(p.roles))
    #v(-0.5em)
    #text(fill: muted, tr(p.degrees))
  ],
  {
    set text(size: 8.5pt)
    set par(leading: 0.45em)
    let items = (p.location, link("mailto:" + p.email, p.email))
    if p.at("show_phone", default: false) and p.at("phone", default: none) != none { items.push(p.phone) }
    items.push(link(p.website, p.website.replace("https://", "")))
    for l in p.links { items.push(link(l.url, l.label + ": " + l.handle)) }
    items.join(linebreak())
  },
)

#section(labels.profile)
#tr(p.summary)

// ---------- Experience ----------
#section(labels.experience)
#{
  let entries = data.experience.filter(e => e.at("cv", default: true))
  let by-start = entries.sorted(key: e => str(e.start)).rev()
  let ordered = by-start.filter(e => e.end == none) + by-start.filter(e => e.end != none)
  for e in ordered {
    block(breakable: false, below: 0.9em, {
      grid(
        columns: (1fr, auto),
        column-gutter: 1em,
        [#text(weight: 600, size: 9.5pt, tr(e.role)) \ #text(fill: muted, e.org)],
        text(size: 8.5pt, fill: muted, fmt-range(e.start, e.end)),
      )
      v(-0.2em)
      list(..e.highlights.map(h => md(tr(h))))
    })
  }
}

// ---------- Two columns (kept together so they don't split across pages) ----------
#block(breakable: false, grid(
  columns: (1fr, 1fr),
  column-gutter: 1.4em,
  [
    #section(labels.education)
    #for e in data.education {
      block(breakable: false, below: 0.7em)[
        #text(weight: 600, tr(e.title)) \
        #text(fill: muted)[#e.org · #fmt-range(e.start, e.end)]
        #if e.at("detail", default: none) != none [\ #text(size: 8.5pt, tr(e.detail))]
      ]
    }

    #section(labels.awards)
    #for a in data.awards {
      block(below: 0.6em)[#text(weight: 600)[#a.year] · #tr(a.title) \ #text(size: 8.5pt, fill: muted, tr(a.org))]
    }

    #section(labels.courses)
    #for c in data.courses {
      block(below: 0.5em)[#text(weight: 600)[#c.year] · #tr(c.title) · #text(fill: muted, tr(c.org))]
    }
  ],
  [
    #section(labels.publications)
    #for (i, pub) in data.publications.enumerate() {
      block(below: 0.7em)[
        #set text(size: 8.5pt)
        [#(i + 1)] #pub.authors (#pub.year). #text(weight: 600, pub.title). #emph(pub.venue).
        #if pub.at("doi", default: none) != none [ #link("https://doi.org/" + pub.doi, "doi:" + pub.doi)]
      ]
    }

    #section(labels.skills)
    #for s in data.skills {
      block(below: 0.6em)[#text(weight: 600, tr(s.name)) \ #text(size: 8.5pt, s.items.map(tr).join(", "))]
    }

    #section(labels.languages)
    #data.languages.map(l => tr(l.name) + " (" + tr(l.level) + ")").join(" · ")
  ],
))
