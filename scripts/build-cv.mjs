// Generates the CV PDFs in public/info/ from src/data/resume.yaml with Typst.
// Needs the Typst CLI: https://typst.app/open-source/#download
// (on Windows: winget install --id Typst.Typst)
import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";

// The paths are the ones the site has always linked to.
const outputs = [
  { lang: "ca", variant: "full", file: "public/info/ca/CV_Nil_Munte_Guerrero_CA.pdf" },
  { lang: "en", variant: "full", file: "public/info/en/CV_Nil_Munte_Guerrero_EN.pdf" },
  { lang: "en", variant: "exec", file: "public/info/Executive_CV_Nil_Munte_Guerrero_ENG.pdf" },
];

for (const { lang, variant, file } of outputs) {
  mkdirSync(dirname(file), { recursive: true });
  execFileSync(
    "typst",
    [
      "compile",
      "--root", ".",
      "--font-path", "cv/fonts",
      "--ignore-system-fonts",
      "--input", `lang=${lang}`,
      "--input", `variant=${variant}`,
      "cv/cv.typ",
      file,
    ],
    { stdio: "inherit" },
  );
  console.log(`✓ ${file}`);
}
