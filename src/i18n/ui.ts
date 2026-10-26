export const languages = { ca: "Català", en: "English" } as const;
export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = "en";

// Localised slug of every page. "" is the home page.
export const routes = {
  home: { ca: "", en: "" },
  career: { ca: "carrera", en: "career" },
  projects: { ca: "projectes", en: "projects" },
  about: { ca: "sobre-mi", en: "about" },
} as const;
export type PageKey = keyof typeof routes;

export function pathFor(page: PageKey, lang: Lang, hash = ""): string {
  const slug = routes[page][lang];
  return `/${lang}/${slug ? `${slug}/` : ""}${hash}`;
}

export function cvPdf(lang: Lang): string {
  return `/info/${lang}/CV_Nil_Munte_Guerrero_${lang.toUpperCase()}.pdf`;
}

export const ui = {
  ca: {
    "nav.home": "Inici",
    "nav.career": "Trajectòria",
    "nav.projects": "Projectes",
    "nav.about": "Sobre mi",
    "nav.menu": "Menú",
    "nav.skip": "Vés al contingut",
    "nav.lang": "Idioma",
    "cta.cv": "Descarrega el CV",
    "cta.contact": "Contacta amb mi",
    "cta.all_projects": "Tots els projectes",
    "cta.career": "Tota la trajectòria",
    "home.stats.papers": "articles IEEE",
    "home.stats.awards": "premis",
    "home.stats.eu": "projectes europeus",
    "home.stats.teaching": "anys de docència",
    "home.now": "Ara mateix",
    "home.featured": "Projectes destacats",
    "career.title": "Trajectòria",
    "career.intro": "Indústria, recerca i docència, de més recent a més antic.",
    "career.experience": "Experiència",
    "career.education": "Formació",
    "career.publications": "Publicacions",
    "career.awards": "Premis",
    "career.courses": "Cursos i certificacions",
    "career.skills": "Habilitats",
    "career.languages": "Idiomes",
    "kind.industry": "Indústria",
    "kind.research": "Recerca",
    "kind.teaching": "Docència",
    "projects.title": "Projectes",
    "projects.intro": "Recerca publicada, aplicacions web que faig servir cada dia i materials docents oberts.",
    "projects.research": "Recerca i enginyeria",
    "projects.web": "Aplicacions web",
    "projects.teaching": "Docència i divulgació",
    "projects.demo": "Prova-ho",
    "projects.code": "Codi",
    "about.title": "Sobre mi",
    "about.outdoors": "A la muntanya",
    "about.contact": "Parlem-ne",
    "about.contact_text": "Si tens un projecte de mobilitat, IA o docència on pugui aportar alguna cosa, escriu-me.",
    "video.play": "Reprodueix el vídeo",
    "footer.updated": "Contingut generat a partir del CV.",
    "pdf": "PDF",
    "404.title": "Aquesta pàgina no existeix",
    "404.text": "Potser l'enllaç és antic. Pots tornar a l'inici o mirar els projectes.",
    "meta.home": "Enginyer de Telecomunicacions i màster en IA. Radar, ADAS, projectes europeus i docència a la URV. Projectes, publicacions i CV.",
    "meta.career": "Trajectòria de Nil Munté Guerrero: Applus+ IDIADA, recerca a la URV, docència, publicacions IEEE i premis.",
    "meta.projects": "Projectes de Nil Munté Guerrero: radar per a automoció, aplicacions web de mobilitat elèctrica i IA, i materials docents oberts.",
    "meta.about": "Qui és Nil Munté Guerrero: enginyer, professor i amant de la muntanya.",
  },
  en: {
    "nav.home": "Home",
    "nav.career": "Career",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.menu": "Menu",
    "nav.skip": "Skip to content",
    "nav.lang": "Language",
    "cta.cv": "Download CV",
    "cta.contact": "Get in touch",
    "cta.all_projects": "All projects",
    "cta.career": "Full career",
    "home.stats.papers": "IEEE papers",
    "home.stats.awards": "awards",
    "home.stats.eu": "European projects",
    "home.stats.teaching": "years teaching",
    "home.now": "Right now",
    "home.featured": "Featured projects",
    "career.title": "Career",
    "career.intro": "Industry, research and teaching, most recent first.",
    "career.experience": "Experience",
    "career.education": "Education",
    "career.publications": "Publications",
    "career.awards": "Awards",
    "career.courses": "Courses & certifications",
    "career.skills": "Skills",
    "career.languages": "Languages",
    "kind.industry": "Industry",
    "kind.research": "Research",
    "kind.teaching": "Teaching",
    "projects.title": "Projects",
    "projects.intro": "Published research, web apps I use every day and open teaching materials.",
    "projects.research": "Research & engineering",
    "projects.web": "Web apps",
    "projects.teaching": "Teaching & outreach",
    "projects.demo": "Try it",
    "projects.code": "Code",
    "about.title": "About me",
    "about.outdoors": "In the mountains",
    "about.contact": "Let's talk",
    "about.contact_text": "If you have a mobility, AI or teaching project where I could help, drop me a line.",
    "video.play": "Play video",
    "footer.updated": "Content generated from my CV.",
    "pdf": "PDF",
    "404.title": "This page doesn't exist",
    "404.text": "The link may be out of date. Go back home or have a look at the projects.",
    "meta.home": "Telecommunications engineer with an MSc in AI. Radar, ADAS, European projects and university teaching. Projects, publications and CV.",
    "meta.career": "Career of Nil Munté Guerrero: Applus+ IDIADA, research at URV, teaching, IEEE publications and awards.",
    "meta.projects": "Projects by Nil Munté Guerrero: automotive radar, electric mobility and AI web apps, and open teaching materials.",
    "meta.about": "About Nil Munté Guerrero: engineer, lecturer and mountain lover.",
  },
} as const;

export type UiKey = keyof (typeof ui)["en"];

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key];
}
