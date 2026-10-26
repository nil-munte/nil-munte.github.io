import { statSync } from "node:fs";
import { join } from "node:path";

/** Size label ("3.7 MB") for a file served from public/, or null for external URLs. */
export function publicFileSize(url: string): string | null {
  if (!url.startsWith("/")) return null;
  try {
    const bytes = statSync(join(process.cwd(), "public", url)).size;
    return bytes > 1e6 ? `${(bytes / 1e6).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1e3))} kB`;
  } catch {
    return null;
  }
}
