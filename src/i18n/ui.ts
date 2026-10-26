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
    "nav.about": "Sobre Mi",
    "title.career": "La Meva Carrera",
    "title.projects": "Projectes",
    "title.about": "Sobre Mi",
    "common.download_cv": "Descarregar CV",
    "common.view_project": "Veure Projecte",
    "footer.copyright": "Tots els drets reservats.",
    "a11y.menu": "Menú",
    "a11y.skip": "Vés al contingut",
    "a11y.lang": "Idioma",
    "a11y.play": "Reprodueix el vídeo",
  },
  en: {
    "nav.home": "Home",
    "nav.career": "Career",
    "nav.projects": "Projects",
    "nav.about": "About Me",
    "title.career": "My Career",
    "title.projects": "Projects",
    "title.about": "About Me",
    "common.download_cv": "Download CV",
    "common.view_project": "View Project",
    "footer.copyright": "All rights reserved.",
    "a11y.menu": "Menu",
    "a11y.skip": "Skip to content",
    "a11y.lang": "Language",
    "a11y.play": "Play video",
  },
} as const;

export type UiKey = keyof (typeof ui)["en"];

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key];
}
