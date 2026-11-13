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

// Visible labels are the ones the previous version of the site used.
// "a11y.*" strings are only read by screen readers.
export const ui = {
  ca: {
    "nav.home": "Inici",
    "nav.career": "Carrera",
    "nav.projects": "Projectes",
    "nav.about": "Sobre mi",
    "title.career": "La meva carrera",
    "career.experience": "Experiència",
    "career.education": "Formació",
    "career.publications": "Publicacions",
    "career.awards": "Premis",
    "career.courses": "Cursos i certificacions",
    "career.skills": "Habilitats",
    "career.languages": "Idiomes",
    "title.projects": "Projectes",
    "title.about": "Sobre mi",
    "common.download_cv": "Descarregar CV",
    "projects.research": "Recerca i enginyeria",
    "projects.web": "Aplicacions web",
    "projects.teaching": "Docència i divulgació",
    "projects.demo": "Prova-ho",
    "projects.code": "Codi",
    "about.more": "Altres webs meves",
    "about.contact": "Parlem-ne",
    "about.contact_text": "Si tens un projecte de mobilitat, IA o docència on pugui aportar alguna cosa, escriu-me.",
    "footer.copyright": "Tots els drets reservats.",
    "footer.terrain": "Relleu de la Mola de Colldejou:",
    "a11y.menu": "Menú",
    "a11y.skip": "Vés al contingut",
    "a11y.lang": "Idioma",
    "a11y.play": "Reprodueix el vídeo",
    "a11y.strava": "Activitat a Strava",
    // Search engines: the full name goes in every <title> and description.
    "meta.home_title": "Nil Munté Guerrero · Arquitecte d'IA i enginyer de telecomunicacions",
    "meta.home": "Web de Nil Munté Guerrero, arquitecte d'IA al CTTI, enginyer de telecomunicacions i professor associat a la URV: trajectòria, projectes i CV.",
    "meta.career": "Trajectòria de Nil Munté Guerrero: arquitectura d'IA al CTTI, ADAS i projectes europeus a Applus+ IDIADA, recerca en radar i docència a la URV.",
    "meta.projects": "Projectes de Nil Munté Guerrero: radar per a automoció, aplicacions web i materials docents de física i Python.",
    "meta.about": "Qui és Nil Munté Guerrero: formació, docència i el que fa fora de la feina.",
  },
  en: {
    "nav.home": "Home",
    "nav.career": "Career",
    "nav.projects": "Projects",
    "nav.about": "About Me",
    "title.career": "My career",
    "career.experience": "Experience",
    "career.education": "Education",
    "career.publications": "Publications",
    "career.awards": "Awards",
    "career.courses": "Courses and certifications",
    "career.skills": "Skills",
    "career.languages": "Languages",
    "title.projects": "Projects",
    "title.about": "About Me",
    "common.download_cv": "Download CV",
    "projects.research": "Research and engineering",
    "projects.web": "Web apps",
    "projects.teaching": "Teaching and outreach",
    "projects.demo": "Try it",
    "projects.code": "Code",
    "about.more": "More of my sites",
    "about.contact": "Let's talk",
    "about.contact_text": "If you have a mobility, AI or teaching project where I could help, drop me a line.",
    "footer.copyright": "All rights reserved.",
    "footer.terrain": "Terrain of the Mola de Colldejou:",
    "a11y.menu": "Menu",
    "a11y.skip": "Skip to content",
    "a11y.lang": "Language",
    "a11y.play": "Play video",
    "a11y.strava": "Strava activity",
    "meta.home_title": "Nil Munté Guerrero · AI Architect and Telecommunications Engineer",
    "meta.home": "Website of Nil Munté Guerrero, AI architect at CTTI, telecommunications engineer and associate professor at URV: career, projects and CV.",
    "meta.career": "Career of Nil Munté Guerrero: AI architecture at CTTI, ADAS and European projects at Applus+ IDIADA, radar research and teaching at URV.",
    "meta.projects": "Projects by Nil Munté Guerrero: automotive radar, web apps and teaching materials for physics and Python.",
    "meta.about": "About Nil Munté Guerrero: education, teaching and life outside work.",
  },
} as const;

export type UiKey = keyof (typeof ui)["en"];

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key];
}
