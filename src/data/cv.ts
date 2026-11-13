import { parse } from "yaml";
import { z } from "astro/zod";
import source from "./cv.yaml?raw";
import resumeSource from "./resume.yaml?raw";
import type { Lang } from "../i18n/ui";

// Text in both languages. Validation fails the build if one is missing.
const t = z.object({ ca: z.string().min(1), en: z.string().min(1) });
// Plain strings are the same in both languages (product names, tech).
const maybeT = z.union([z.string(), t]);
const yearMonth = z.string().regex(/^\d{4}(-\d{2})?$/, 'Use "AAAA" or "AAAA-MM"');

const link = z.object({ label: t, url: z.string() });

const media = z.union([
  z.object({ image: z.string(), alt: t }),
  z.object({ youtube: z.string(), alt: t }),
]);

// ---------- src/data/cv.yaml: website-only content ----------
const schema = z.object({
  person: z.object({
    name: z.string(),
    email: z.string().email(),
    website: z.string().url(),
    links: z.array(z.object({ id: z.enum(["linkedin", "github", "x"]), label: z.string(), url: z.string().url() })),
    same_as: z.array(z.string().url()).default([]),
    site_title: t,
  }),
  // Photos, videos and links per job; the job texts are in resume.yaml.
  career_extras: z.record(
    z.string(),
    z.object({ links: z.array(link).default([]), media: z.array(media).default([]) }),
  ),
  projects: z.array(
    z.object({
      id: z.string(),
      category: z.enum(["research", "web", "teaching", "personal"]),
      featured: z.boolean().default(false),
      title: t,
      description: t,
      image: z.string().optional(),
      demo: z.string().url().optional(),
      code: z.string().url().optional(),
      links: z.array(link).default([]),
    }),
  ),
  about: z.array(t),
  about_projects: z.array(z.string()).default([]),
});

// ---------- src/data/resume.yaml: the full CV, shared with the PDFs ----------
const resumeSchema = z.object({
  updated: yearMonth,
  person: z.object({ headline: t, summary: t }),
  experience: z.array(
    z.object({
      id: z.string(),
      org: z.string(),
      url: z.string().url().optional(),
      role: t,
      start: yearMonth,
      end: yearMonth.nullable(),
      highlights: z.array(t),
    }),
  ),
  education: z.array(z.object({ title: t, org: z.string(), start: yearMonth, end: yearMonth, detail: t })),
  publications: z.array(
    z.object({ authors: z.string(), year: z.number(), title: z.string(), venue: z.string(), pdf: z.string().optional() }),
  ),
  awards: z.array(z.object({ year: z.number(), title: t, org: t })),
  courses: z.array(z.object({ year: z.number(), title: t, org: t })),
  skills: z.array(z.object({ name: t, items: z.array(maybeT) })),
  languages: z.array(z.object({ name: t, level: t })),
});

export type CV = z.infer<typeof schema>;
export type Resume = z.infer<typeof resumeSchema>;
export type Link = z.infer<typeof link>;
export type Media = z.infer<typeof media>;

function load<T extends z.ZodTypeAny>(file: string, text: string, s: T): z.infer<T> {
  const result = s.safeParse(parse(text));
  if (!result.success) {
    const issues = result.error.issues.map((i) => `  - ${i.path.join(".")}: ${i.message}`).join("\n");
    throw new Error(`src/data/${file} is not valid:\n${issues}`);
  }
  return result.data;
}

export const cv: CV = load("cv.yaml", source, schema);
export const resume: Resume = load("resume.yaml", resumeSource, resumeSchema);

for (const job of resume.experience) {
  if (!(job.id in cv.career_extras)) throw new Error(`cv.yaml career_extras has no entry for "${job.id}" (resume.yaml)`);
}

export function tr(value: string | { ca: string; en: string }, lang: Lang): string {
  return typeof value === "string" ? value : value[lang];
}

const months = {
  ca: ["gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

/** "set. 2021 – actualitat" / "Sep 2021 – present", as in the PDF. */
export function formatRange(start: string, end: string | null, lang: Lang): string {
  const date = (value: string) => {
    const [year, month] = value.split("-");
    return month ? `${months[lang][Number(month) - 1]} ${year}` : year;
  };
  return `${date(start)} – ${end ? date(end) : lang === "ca" ? "actualitat" : "present"}`;
}

/**
 * Turns **bold** into <strong>, *italic* into <em> and [text](https://...) into
 * a link. Text is escaped first, so the result is safe for set:html.
 */
export function inline(text: string): string {
  const escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  return escaped
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g, '<a class="link" href="$2">$1</a>');
}
