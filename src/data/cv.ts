import { parse } from "yaml";
import { z } from "astro/zod";
import source from "./cv.yaml?raw";

// Text in both languages. Validation fails the build if one is missing.
const t = z.object({ ca: z.string().min(1), en: z.string().min(1) });

const link = z.object({ label: t, url: z.string() });

const media = z.union([
  z.object({ image: z.string(), alt: t }),
  z.object({ youtube: z.string(), alt: t }),
]);

const schema = z.object({
  person: z.object({
    name: z.string(),
    email: z.string().email(),
    website: z.string().url(),
    links: z.array(z.object({ id: z.enum(["linkedin", "github"]), label: z.string(), url: z.string().url() })),
    site_title: t,
    roles: t,
    degrees: t,
    presentation: t,
  }),
  career: z.array(
    z.object({
      id: z.string(),
      title: t,
      org: t,
      intro: t,
      list: z.array(t).default([]),
      sections: z
        .array(
          z.object({
            title: t,
            paragraphs: z.array(t),
            links: z.array(link).default([]),
            media: z.array(media).default([]),
          }),
        )
        .default([]),
      links: z.array(link).default([]),
      media: z.array(media).default([]),
    }),
  ),
  projects: z.array(
    z.object({
      id: z.string(),
      category: z.enum(["research", "web", "teaching"]),
      title: t,
      description: t,
      image: z.string().optional(),
      demo: z.string().url().optional(),
      code: z.string().url().optional(),
      links: z.array(link).default([]),
    }),
  ),
  about: z.array(t),
});

export type CV = z.infer<typeof schema>;
export type CareerItem = CV["career"][number];
export type Link = z.infer<typeof link>;
export type Media = z.infer<typeof media>;

const result = schema.safeParse(parse(source));
if (!result.success) {
  const issues = result.error.issues.map((i) => `  - ${i.path.join(".")}: ${i.message}`).join("\n");
  throw new Error(`src/data/cv.yaml is not valid:\n${issues}`);
}

export const cv: CV = result.data;

/**
 * Turns **bold** into <strong> and [text](https://...) into a link. Text is
 * escaped first, so the result is safe for set:html.
 */
export function inline(text: string): string {
  const escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  return escaped
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g, '<a class="link" href="$2">$1</a>');
}
