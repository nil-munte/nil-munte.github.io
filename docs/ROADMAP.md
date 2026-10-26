# Full de ruta del portfoli

Anàlisi feta el 26 d'octubre de 2026 sobre la versió publicada a <https://nil-munte.github.io/> i el codi de `main` (`da066d6`). Cada punt diu què passava, per què importa i com es resol. Els marcats amb ✅ es resolen a la branca `redisseny-portfoli`; la resta depenen d'una decisió o d'una acció teva.

## 1. Errors que calia corregir ja

| # | Problema | Impacte | Solució |
|---|---|---|---|
| 1.1 ✅ | Els tres PDF del CV (`ca`, `en` i `Executive`) eren el mateix fitxer, en anglès. | Qui baixava el CV en català el rebia en anglès. | Els PDF es generen automàticament amb Typst a partir de `src/data/cv.yaml`, un per idioma. |
| 1.2 ✅ | L'arrel `/` mostrava «Redirecting…» durant 2 segons. | Primera impressió dolenta en l'URL que més es comparteix. | Redirecció immediata i segons l'idioma del navegador (`ca` → `/ca/`, la resta → `/en/`). |
| 1.3 ✅ | Sense `sitemap.xml`, `robots.txt` ni pàgina 404 pròpia. | Google no tenia cap guia per indexar el lloc; avui no surt cercant el nom. | `@astrojs/sitemap` amb alternatives d'idioma, `robots.txt` i 404 bilingüe. |
| 1.4 ✅ | Totes les pàgines tenien el mateix títol i cap descripció, Open Graph ni `canonical`. Els `hreflang` apuntaven sempre a la portada. | Resultats de cerca pobres i enllaços sense targeta a LinkedIn. | Títol i descripció per pàgina, `canonical`, `hreflang` per pàgina, Open Graph amb imatge i JSON-LD `Person`. |
| 1.5 ✅ | La favicon era el logo d'Astro i no estava enllaçada. | Aspecte de plantilla. | Monograma propi «NM». |
| 1.6 ✅ | La pàgina de Carrera carregava ~11 MB d'imatges sense optimitzar i dos iframes de YouTube de cop. | Càrrega lenta, sobretot al mòbil. | Imatges a `src/assets/` processades per Astro (WebP, mides responsives, càrrega diferida) i vídeos que només es carreguen en fer-hi clic (`youtube-nocookie`). |
| 1.7 ✅ | Al mòbil el menú no es plegava i el selector EN/CA quedava fora de la vista. | Navegació trencada al mòbil. | Menú desplegable i selector d'idioma sempre visible. |
| 1.8 ✅ | El telèfon personal sortia a totes les pàgines. | Spam i trucades comercials. | Fora de la web i del PDF públic; el contacte és el correu i LinkedIn. Es pot reactivar amb `contact.show_phone`. |
| 1.9 ✅ | Errors de català: «coordinate múltiples socis», «Gestos de Ma», «ThinkSpeak», majúscules a l'anglesa («La Meva Carrera»), calcs («estic apassionat per»). | Resta credibilitat. | Textos catalans reescrits; «ThingSpeak» corregit en tots dos idiomes. |

## 2. Contingut

| # | Problema | Solució |
|---|---|---|
| 2.1 ✅ | La Carrera no tenia cap data. | Línia de temps amb dates de cada etapa, presa del CV. |
| 2.2 ✅ | Faltaven etapes que sí que hi ha al CV: ALEPHSYS Lab (2023–2024) i Generation RFID (2020–2021). | Afegides. |
| 2.3 ✅ | Formació, premis, cursos, idiomes i habilitats només eren al PDF. | Seccions pròpies a la Carrera. |
| 2.4 ✅ | Les publicacions estaven enterrades dins del text. | Secció de publicacions amb la cita completa. |
| 2.5 ✅ | Projectes tenia 3 targetes, una de les quals era la mateixa web. | Projectes agrupats (recerca, aplicacions web, docència) amb demo i codi: calculadora del cost del viatge, Cuina amb mi, Riudoms 3D, Model-Region, Física de 2n de BAT, catapulta, radars, curs de Python… |
| 2.6 ✅ | La portada era genèrica: sense xifres ni proposta de valor. | Portada amb frase de valor, xifres clau, projectes destacats i accés al CV i al contacte. |
| 2.7 ✅ | Sobre mi tenia dues frases. El README deia més coses que la web. | Text personal: muntanya, escoltes, delegat de curs, premi de recerca jove, mobilitat elèctrica. |
| 2.8 ⏳ | **Feina actual.** El CV de novembre de 2025 diu «Applus+ IDIADA, maig 2024 – actualitat». | Confirma-ho o digues què hi ha de posar. Es canvia a `src/data/cv.yaml` (`experience[0].end`). |
| 2.9 ⏳ | **Foto.** No n'hi ha cap; ara es mostra el monograma. | Desa una foto quadrada a `src/assets/profile.jpg` i surt sola a la portada. |
| 2.10 ⏳ | **DOI de les publicacions.** | Afegeix `doi:` a cada publicació de `cv.yaml` i s'enllaça sol. |
| 2.11 ⏳ | **PDF dels articles IEEE.** IEEE només permet penjar a la web personal la versió acceptada de l'autor, no la maquetada per l'editorial. | Comprova quina versió són `IEEESensors_77GHz.pdf` i `IEEE_IMOC2023_60GHz_v3short.pdf`. Si són les de l'editorial, substitueix-les per l'*accepted manuscript* o enllaça només el DOI. |
| 2.12 ⏳ | **Assignatura d'IA a la URV.** Si ja l'imparteixes, és un projecte docent molt potent. | Afegeix-la a `teaching` o a `projects` de `cv.yaml`. |
| 2.13 ⏳ | **Blog.** Ara no n'hi ha. | Col·lecció de Markdown a `src/content/blog/` amb RSS. Proposta: 1 article al mes sobre radar, ADAS, IA aplicada o mobilitat elèctrica. |

## 3. Visibilitat (accions teves)

1. ⏳ Dona d'alta el lloc a **Google Search Console** (verificació per etiqueta HTML o fitxer) i envia-hi `https://nil-munte.github.io/sitemap-index.xml`.
2. ⏳ Posa l'enllaç a la web a: LinkedIn (Contacte i Destacats), el camp *Website* del perfil de GitHub, el camp *homepage* d'aquest repo, ORCID i Google Scholar, i la signatura de correu.
3. ⏳ Crea un **README de perfil** a GitHub (`nil-munte/nil-munte`) amb l'enllaç i els projectes destacats.
4. ⏳ Si tens ORCID o Google Scholar, afegeix-los a `contact.links` de `cv.yaml`: entren al JSON-LD `sameAs`.
5. ⏳ Valora un **domini propi** (`nilmunte.cat`, `.dev`…, uns 10–15 € l'any). Cal afegir `public/CNAME` i canviar `site` a `astro.config.mjs`. Atenció: les altres webs (`/cuina-amb-mi/`, `/calcul-cost-trajecte/`…) també canviarien de domini.
6. ⏳ Comparteix cada projecte nou a LinkedIn amb l'enllaç a la seva fitxa del portfoli.

## 4. Disseny

| # | Canvi |
|---|---|
| 4.1 ✅ | Identitat pròpia: color verd blavós (mobilitat elèctrica) en lloc de l'índigo per defecte de Tailwind, tipografia Inter allotjada al mateix lloc. |
| 4.2 ✅ | Mode fosc automàtic segons el sistema. |
| 4.3 ✅ | Fora la barra de gradient amb pulsació i el text justificat. |
| 4.4 ✅ | Carrera com a línia de temps; projectes com a targetes amb etiquetes i enllaços. |
| 4.5 ⏳ | Captures o miniatures per a cada projecte web (es poden afegir a `src/assets/projects/`). |

## 5. Mantenibilitat i edició del CV

Abans, una feina nova s'havia d'escriure a 4 o 5 llocs (PDF a part, `utils.ts` en dos idiomes i les llistes de cada pàgina), i ja s'havien desincronitzat.

| # | Canvi |
|---|---|
| 5.1 ✅ | **Font única:** `src/data/cv.yaml` té tot el contingut del CV i dels projectes, en català i anglès. Es valida en compilar: si falta una traducció, la compilació falla i diu on. |
| 5.2 ✅ | **Una sola plantilla per pàgina** (`src/pages/[lang]/…`) en lloc de duplicar-les per idioma. Els textos curts de la interfície són a `src/i18n/ui.ts`. |
| 5.3 ✅ | **PDF automàtics:** `cv/cv.typ` llegeix el mateix YAML. GitHub Actions genera el CV en català i en anglès a cada desplegament. |
| 5.4 ✅ | Les PR compilen el lloc i els PDF abans de fusionar. |
| 5.5 ✅ | Tailwind 4 amb `@tailwindcss/vite`; fora `@astrojs/tailwind` (obsolet) i les dependències que no es feien servir. |
| 5.6 ⏳ | Protegir `main` (PR obligatòria i check de compilació), igual que a `calcul-cost-trajecte`. |
| 5.7 ⏳ | Pujar a Astro 7 quan convingui (ara s'usa l'última 5.x). |

### Com s'edita ara el CV

1. Obre `src/data/cv.yaml` (també des de github.com, amb el llapis).
2. Canvia o afegeix l'entrada, amb el text `ca` i `en`.
3. Fes una PR. Quan es fusiona, la web i els dos PDF s'actualitzen sols i sempre coincideixen.

Per veure el PDF en local cal Typst (`winget install --id Typst.Typst`) i `npm run cv`.
