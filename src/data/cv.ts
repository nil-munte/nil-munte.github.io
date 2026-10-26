import { parse } from "yaml";
import { z } from "astro/zod";
import type { Lang } from "../i18n/ui";
import source from "./cv.yaml?raw";

// Text in both languages. Validation fails the build if one is missing.
const t = z.object({ ca: z.string().min(1), en: z.string().min(1) });
// Plain strings are the same in both languages (product names, tech).
const maybeT = z.union([z.string(), t]);
const yearMonth = z.string().regex(/^\d{4}(-\d{2})?$/, "Use \"AAAA\" or \"AAAA-MM\"");

const link = z.object({ label: maybeT, url: z.string() });

const media = z.union([
  z.object({ image: z.string(), alt: t }),
  z.object({ youtube: z.string(), alt: t }),
]);

const schema = z.object({
  person: z.object({
    name: z.string(),
    initials: z.string(),
    location: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
    show_phone: z.boolean().default(false),
    website: z.string().url(),
    links: z.array(z.object({ id: z.string(), label: z.string(), handle: z.string(), url: z.string().url() })),
    roles: t,
    degrees: t,
    headline: t,
    summary: t,
    about: z.object({ ca: z.array(z.string()), en: z.array(z.string()) }),
    eu_projects: z.number().int(),
  }),
  keywords: z.object({ ca: z.array(z.string()), en: z.array(z.string()) }),
  experience: z.array(
    z.object({
      id: z.string(),
      kind: z.enum(["industry", "research", "teaching"]),
      org: z.string(),
      url: z.string().optional(),
      place: z.string().optional(),
      start: yearMonth,
      end: yearMonth.nullable(),
      role: t,
      summary: t,
      highlights: z.array(t),
      tags: z.array(z.string()).default([]),
      links: z.array(link).default([]),
      media: z.array(media).default([]),
      cv: z.boolean().default(true),
    }),
  ),
  education: z.array(
    z.object({
      id: z.string(),
      org: z.string(),
      place: z.string().optional(),
      start: yearMonth,
      end: yearMonth.nullable(),
      title: t,
      detail: t.optional(),
    }),
  ),
  publications: z.array(
    z.object({
      id: z.string(),
      authors: z.string(),
      year: z.number().int(),
      title: z.string(),
      venue: z.string(),
      pdf: z.string().optional(),
      doi: z.string().optional(),
    }),
  ),
  awards: z.array(z.object({ year: z.number().int(), title: t, org: t })),
  courses: z.array(z.object({ year: z.number().int(), title: t, org: t })),
  skills: z.array(z.object({ name: t, items: z.array(maybeT) })),
  languages: z.array(z.object({ name: t, level: t })),
  projects: z.array(
    z.object({
      id: z.string(),
      category: z.enum(["research", "web", "teaching"]),
      featured: z.boolean().default(false),
      title: t,
      description: t,
      tags: z.array(z.string()).default([]),
      demo: z.string().url().optional(),
      code: z.string().url().optional(),
      extra_links: z.array(link).default([]),
    }),
  ),
});

export type CV = z.infer<typeof schema>;
export type Experience = CV["experience"][number];
export type Project = CV["projects"][number];
export type Media = Experience["media"][number];

const raw = parse(source);
const result = schema.safeParse(raw);
if (!result.success) {
  const issues = result.error.issues.map((i) => `  - ${i.path.join(".")}: ${i.message}`).join("\n");
  throw new Error(`src/data/cv.yaml is not valid:\n${issues}`);
}

export const cv: CV = result.data;

export function tr(value: string | { ca: string; en: string }, lang: Lang): string {
  return typeof value === "string" ? value : value[lang];
}

/** Experience sorted newest first (ongoing roles before finished ones). */
export const experience = [...cv.experience].sort((a, b) => {
  if ((a.end === null) !== (b.end === null)) return a.end === null ? -1 : 1;
  return b.start.localeCompare(a.start);
});

const monthNames = {
  ca: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

export function formatDate(value: string, lang: Lang): string {
  const [year, month] = value.split("-");
  if (!month) return year;
  const name = monthNames[lang][Number(month) - 1];
  return lang === "ca" ? `${name} de ${year}` : `${name} ${year}`;
}

export function formatRange(start: string, end: string | null, lang: Lang): string {
  const now = lang === "ca" ? "actualitat" : "present";
  return `${formatDate(start, lang)} – ${end ? formatDate(end, lang) : now}`;
}

/** Whole years since the earliest start of the given experience entries. */
export function yearsSince(ids: string[]): number {
  const starts = cv.experience.filter((e) => ids.includes(e.id)).map((e) => e.start);
  const [year, month = "01"] = starts.sort()[0].split("-");
  const from = new Date(Number(year), Number(month) - 1);
  return Math.floor((Date.now() - from.getTime()) / (365.25 * 24 * 3600 * 1000));
}

/** Turns **bold** into <strong>. Text is escaped first, so it is safe for set:html. */
export function inline(text: string): string {
  const escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return escaped.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}
