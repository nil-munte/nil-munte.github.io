// Generates the CV PDFs in public/info/<lang>/ from src/data/cv.yaml.
// Needs the Typst CLI: https://typst.app/open-source/#download
import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";

for (const lang of ["ca", "en"]) {
  const out = `public/info/${lang}/CV_Nil_Munte_Guerrero_${lang.toUpperCase()}.pdf`;
  mkdirSync(`public/info/${lang}`, { recursive: true });
  execFileSync(
    "typst",
    ["compile", "--root", ".", "--font-path", "cv/fonts", "--ignore-system-fonts", "--input", `lang=${lang}`, "cv/cv.typ", out],
    { stdio: "inherit" },
  );
  console.log(`✓ ${out}`);
}
