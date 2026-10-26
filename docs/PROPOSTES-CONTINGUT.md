# Propostes de contingut

Recull de tots els suggeriments de contingut de l'anàlisi del 26 d'octubre de 2026, per pàgines. **Res d'això no és a la web**: el contingut publicat continua sent el de sempre. Serveix de base per a la revisió de contingut, que farem secció per secció i amb les teves paraules.

Els textos proposats són els de la primera versió del redisseny (commit `3d63f81`), que vam desfer perquè el contingut es revisaria a part. Allà també hi ha la versió anglesa de cada text.

**Origen de cada text**
- **[CV]**: tret del teu CV en PDF (novembre de 2025) i traduït.
- **[web]**: ja és a la web, potser retocat.
- **[README]** / **[GitHub]**: tret del README del portfoli o dels READMEs dels teus repos.
- **[nou]**: escrit per Claude. És el que més s'ha de revisar.

⚠️ marca coses que no són segures o que són inventades.

---

## 1. Errors objectius del contingut actual

Es poden corregir sense canviar res més:

| On | Ara | Correcció |
|---|---|---|
| Carrera, IDIADA | «coordinate múltiples socis» | «coordinant diversos socis» (el verb s'havia quedat en anglès) |
| Carrera, NEPHOS | «Sistema de Detecció de Gestos de Ma» | «… de Gestos de la Mà» |
| Carrera, URV (CA i EN) | «ThinkSpeak» | «ThingSpeak» |
| Títols i menú | «La Meva Carrera», «Sobre Mi», «Veure Projecte», «Professor Associat» | Majúscula només a la primera paraula: «La meva carrera», «Sobre mi»… |
| Portada | «estic especialment apassionat per» | «m'apassiona» (calc de l'anglès) |
| Portada | «per oferir solucions significatives» | Calc de *meaningful*; reformular |
| Portada | «iniciatives locals, i estic» | Sense coma davant de «i» |
| Botó | «Descarregar CV» | «Descarrega el CV» |
| Rols | «Director de Projectes» | «Cap de projectes» és més habitual en català per a *Project Manager* |
| CV en PDF | El CV «català» és el PDF anglès (els tres PDF són idèntics) | Fer el CV en català |

---

## 2. Portada

**Actual:** nom, rols, titulació, un paràgraf de presentació, botó de CV i icones de LinkedIn i GitHub.

**Propostes**
- **Rols** [web, corregit]: «Enginyer R+D · Professor associat · Cap de projectes»
- **Titulació** [web]: «Enginyer de Telecomunicacions · Màster en Intel·ligència Artificial». ⚠️ Decidir si s'escriu el nom sencer del màster (Seguretat Informàtica i Intel·ligència Artificial).
- **Frase destacada** [nou], que ara no existeix: «Porto la IA i els sensors del laboratori a projectes reals de mobilitat.»
- **Text de presentació** [nou], per substituir l'actual: «He passat del radar d'ones mil·limètriques a la validació de sistemes ADAS, i de dirigir projectes europeus a fer classe a la universitat. M'agrada el punt on la tècnica es troba amb les persones: definir què s'ha de mesurar, construir l'eina que ho mesura i explicar-ho perquè tothom ho entengui. M'apassiona la mobilitat elèctrica i sempre busco projectes amb impacte a prop de casa.»
- **Xifres** [nou], calculades soles a partir del CV: 2 articles IEEE · 3 premis · 2 projectes europeus · anys de docència (des del setembre de 2021).
- **Bloc «Ara mateix»** [nou]: les feines en curs, amb enllaç a la carrera.
- **Bloc «Projectes destacats»** [nou]: 3 projectes (vegeu l'apartat 4).
- **Foto**: ara no n'hi ha. ⚠️ Cal una foto teva.
- **Feina actual**: ⚠️ el CV diu IDIADA «actualitat». Cal confirmar-ho.

---

## 3. Carrera (proposta de canviar el títol per «Trajectòria»)

**Actual:** 4 blocs sense dates (IDIADA, URV professor, Acadèmia Gaudí, NEPHOS), amb textos llargs, fotos i vídeos.

**Canvis d'estructura proposats**
- **Dates** a totes les etapes [CV].
- **Ordre:** de més recent a més antic, amb una etiqueta per tipus (Indústria, Recerca, Docència).
- **Línia de temps** visual (ja feta en el disseny: un camí amb un cim per etapa).
- **Etapes que falten** [CV]: ALEPHSYS Lab (setembre de 2023 – abril de 2024) i Generation RFID (novembre de 2020 – març de 2021).
- **Seccions noves** [CV]: Formació, Publicacions, Premis, Cursos, Habilitats, Idiomes.
- **Botó** per descarregar el CV a dalt de la pàgina.
- **Mida dels arxius** al costat dels enllaços a PDF (per exemple, «Treball de fi de grau (PDF) · 16 MB»).

### Experiència proposada (de més recent a més antiga)

#### Enginyer de funcions ADAS i AV · Cap de projectes · Applus+ IDIADA

- **Dates:** maig de 2024 – actualitat (en curs)
- **Tipus:** Indústria
- **Resum:** Projectes de sistemes avançats d'assistència a la conducció (ADAS) i de mobilitat autònoma, de la definició amb el client fins al lliurament.
- **Punts:**
  - Vaig definir i coordinar un programa de proves Euro NCAP, Reglament UN 152 i ASEAN NCAP per a una càmera basada en IA, des de les primeres reunions amb el client (KPI, estratègia de validació) fins al lliurament.
  - Amb l'equip de programari, vaig configurar l'entorn de proves per capturar les dades dels sensors i activar les proves automàticament, amb pipeline de CI/CD (CAN, C++, Python, Linux).
  - Vaig treballar en un projecte de visió per computador que integra dades de diversos sensors amb xarxes neuronals (YOLO, segmentació, seguiment).
  - Vaig crear una eina de reporting per al client (React, Python) que va canviar com es presentaven els resultats i va augmentar l'impacte del projecte.
  - Vaig ser cap de projecte de dos projectes europeus de mobilitat autònoma, AITHENA i AIGGREGATE. A AITHENA vaig liderar un paquet de treball amb socis de tot Europa fins a assolir-ne les fites.
- **Etiquetes:** ADAS, Euro NCAP, C++, Python, CAN, Linux, React, CI/CD, Project management
- **Enllaços:** [Resum del WP4 d'AITHENA](https://aithena.eu/advancing-tools-and-testing-facilities-in-the-aithena-project-a-look-into-wp4/)

#### Formador de Python · Acadèmia Gaudí

- **Dates:** abril de 2024 – actualitat (en curs)
- **Tipus:** Docència
- **Resum:** Disseny i docència de cursos de programació, sobretot de Python.
- **Punts:**
  - **Introducció a Python** (6 h): tipus de dades, estructures, control de flux, funcions, mòduls, fitxers i gestió d'errors.
  - **Python avançat** (6 h): NumPy, pandas, Matplotlib i Plotly, i aprenentatge automàtic amb scikit-learn, PyTorch i TensorFlow.
  - **Programació de robots per a infants** (3 h): primers passos amb mBot i Makeblock.
- **Etiquetes:** Python, NumPy, pandas, PyTorch
- **Enllaços:** [Vídeo del curs](https://www.instagram.com/reel/C57xNrxts60/)

#### Professor associat · Universitat Rovira i Virgili

- **Dates:** setembre de 2021 – actualitat (en curs)
- **Tipus:** Docència
- **Resum:** Assignatures pràctiques dels graus d'Enginyeria de Telecomunicacions i d'Enginyeria Biomèdica, i del doble grau.
- **Punts:**
  - **Electrònica digital:** plaques FPGA de Xilinx programades en VHDL, amb un rellotge multifunció com a projecte.
  - **Xarxes de sensors, IoT i ciutats intel·ligents:** Arduino amb WiFi i Zigbee, dades a ThingSpeak i mòduls Silicon Labs EFR32 programats en C.
  - **Comunicacions digitals:** modulacions M-PSK i M-QAM i càlcul d'errors, simulats amb MATLAB.
  - **Fonaments de comunicacions:** comunicacions analògiques i digitals (FFT, AM, FM) amb exercicis pràctics.
- **Etiquetes:** FPGA, VHDL, IoT, Zigbee, MATLAB
- **Enllaços:** [Docència a la URV](https://www.urv.cat/html/grupsrecerca/investigadors/docencia-I79429.php)

#### Enginyer R+D · ALEPHSYS Lab · Universitat Rovira i Virgili

- **Dates:** setembre de 2023 – abril de 2024
- **Tipus:** Recerca
- **Resum:** Aprenentatge profund i xarxes complexes.
- **Punts:**
  - Vaig estudiar i implementar algorismes d'aprenentatge supervisat i no supervisat (xarxes neuronals, SVM, retropropagació) en Java, C, Python i Julia.
  - Vaig implementar un model dinàmic amb equacions diferencials per descriure les fluctuacions de freqüència de la xarxa elèctrica, amb dades reals de Red Eléctrica (Fortran, Julia, Linux).
- **Etiquetes:** Deep learning, Julia, Fortran, Java, Python
- **Enllaços:** [Codi de sincronització de xarxa](https://github.com/nil-munte/Sincronization-Gran-Canaria-Julia-Fortran) · [Xarxa neuronal des de zero](https://github.com/nil-munte/Neural-Net)

#### Enginyer R+D · NEPHOS Lab · Universitat Rovira i Virgili

- **Dates:** març de 2021 – agost de 2023
- **Tipus:** Recerca
- **Resum:** Sistemes encastats i radars d'ones mil·limètriques aplicats a l'automoció.
- **Punts:**
  - Vaig treballar amb microcontroladors i plaques de ràdio (PIC, ESP32, Silicon Labs, Arduino).
  - **Detector d'ocupació de vehicles** amb un radar FMCW de Texas Instruments a 77 GHz i una Raspberry Pi. Va ser el meu treball de fi de grau, va guanyar el premi «Futur de les Telecomunicacions» del COITT i es va publicar a l'IEEE Sensors Journal.
  - **Reconeixement de gestos de la mà** amb un radar de 60 GHz i xarxes neuronals convolucionals (MATLAB, Python), publicat a l'IEEE IMOC 2023.
- **Etiquetes:** Radar FMCW, MATLAB, Python, CNN, Raspberry Pi, ESP32
- **Enllaços:** [Article IEEE Sensors (PDF)](/info/IEEESensors_77GHz.pdf) · [Treball de fi de grau (PDF)](/info/MemoriaTFG_NilMunteGuerrero.pdf) · [Codi del detector d'ocupació](https://github.com/nil-munte/Radar_Texas_AWR1642/tree/main/01-Matlab/01-ProjecteCotxe) · [Codi del detector de gestos](https://github.com/nil-munte/Radar_Texas_AWR1642/tree/main/01-Matlab/02-ProjecteGestos)

#### Enginyer de programari i maquinari (pràctiques) · Generation RFID

- **Dates:** novembre de 2020 – març de 2021
- **Tipus:** Indústria
- **Resum:** Optimització del consum d'un prototip encastat RFID d'alta freqüència.
- **Punts:**
  - Vaig mesurar i reduir el consum del prototip amb Simplicity Studio i la placa Silicon Labs Blue Gecko (C, Python, SCons, bootloader).
- **Etiquetes:** RFID, C, Python, Silicon Labs

### Seccions noves proposades

**Formació**

- **Màster en Seguretat Informàtica i Intel·ligència Artificial** · Universitat Rovira i Virgili · 2022–2023 · Nota mitjana 9,42/10 · 8 matrícules d'honor
- **Grau en Enginyeria de Telecomunicacions** · Universitat Rovira i Virgili · 2017–2021 · Nota mitjana 9,01/10 · 16 matrícules d'honor · delegat de curs a 2n, 3r i 4t

**Publicacions**

1. Munte, N., Lazaro, A., Villarino, R., & Girbau, D. (2022). *Vehicle occupancy detector based on FMCW mm-wave radar at 77 GHz*. IEEE Sensors Journal, 22(24), 24504–24515.
2. Lazaro, A., Munte, N., Villarino, R., & Girbau, D. (2023). *In-Vehicle Monitoring Based on a Low-Cost mm-Wave Radar at 60 GHz*. 2023 SBMO/IEEE MTT-S International Microwave and Optoelectronics Conference (IMOC), 241–243.

**Premis**

- **2022** · Premi Extraordinari de Grau en Enginyeria de Sistemes i Serveis de Telecomunicació · COETCC · Universitat Rovira i Virgili
- **2022** · 2n premi «Futur de les Telecomunicacions», categoria Enginyeria de Sistemes de Telecomunicació · Col·legi Oficial d'Enginyers Tècnics de Telecomunicació (COITT)
- **2017** · Premi de Recerca Jove pel treball «Nassos electrònics, l'olfacte en un xip» · Generalitat de Catalunya

**Cursos i certificacions**

- **2025** · AWS Cloud Practitioner · Microcredencials URV
- **2025** · MBSE a la pràctica amb Arcadia i Capella · Samares Engineering
- **2024** · Curs de cap de projectes · Applus+ IDIADA

**Habilitats**

- **Programació:** Python, C, C++, MATLAB, VHDL, Java, Julia, Fortran, JavaScript, TypeScript, Git, ROS, CAN
- **Sistemes encastats:** Radars FMCW de Texas Instruments, FPGA (Xilinx), Microcontroladors PIC, ESP32, Silicon Labs, Arduino, Raspberry Pi
- **IA i ciència de dades:** PyTorch, TensorFlow, Keras, scikit-learn, OpenCV, YOLO, NumPy, pandas, SciPy, LLM, n8n
- **Dades i núvol:** AWS, MySQL, SQLite, MongoDB, Firebase, Linux
- **Gestió:** Gestió de projectes, Definició de KPI, Projectes europeus, MBSE

**Idiomes:** Català (Nadiu) · Castellà (Nadiu) · Anglès (Avançat (C1, CAE))

⚠️ A revisar:
- **Nom oficial del màster:** està traduït com «Màster en Seguretat Informàtica i Intel·ligència Artificial»; cal comprovar el nom oficial de la URV.
- **«COETCC»:** és com surt al CV; potser és una errada per «COETC».
- **DOI dels articles:** no hi són. Si s'afegeixen, s'enllacen sols.
- **PDF dels articles IEEE:** IEEE només permet penjar a la web personal la versió acceptada de l'autor, no la de l'editorial. Cal comprovar quina versió són.

---

## 4. Projectes

**Actual:** 3 targetes (el mateix portfoli, el curs de Python i la xarxa neuronal).

**Proposta:** 12 projectes en tres grups, amb enllaç a la demo i al codi. ⭐ = surt a la portada. Totes les descripcions són [GitHub/nou], escrites a partir dels READMEs.

| Projecte | Grup | Portada | Descripció proposada | Tecnologies | Enllaços |
|---|---|---|---|---|---|
| **Detecció d'ocupació i gestos amb radar** | Recerca i enginyeria | ⭐ | Radars FMCW de 60 i 77 GHz per saber qui hi ha dins d'un cotxe i reconèixer gestos de la mà. Dos articles IEEE i un premi del COITT. | MATLAB, Python, CNN, Radar | [codi](https://github.com/nil-munte/Radar_Texas_AWR1642) · [Article IEEE (PDF)](/info/IEEESensors_77GHz.pdf) |
| **Cost d'un viatge en cotxe elèctric** | Aplicacions web | ⭐ | Calcula el cost real d'un viatge combinant la càrrega a casa i fora, amb el preu de la llum tret de la factura i historial sincronitzat. | JavaScript, Firebase, PWA | [demo](https://nil-munte.github.io/calcul-cost-trajecte/) · [codi](https://github.com/nil-munte/calcul-cost-trajecte) |
| **Disponibilitat de models d'IA per regió** | Aplicacions web | ⭐ | Segueix en quins proveïdors de núvol i regions hi ha cada model d'IA. Extreu la documentació cada dia i ho mostra en un tauler. | TypeScript, Next.js, Scraping | [demo](https://nil-munte.github.io/model-region/) · [codi](https://github.com/nil-munte/model-region) |
| **Riudoms 3D** | Aplicacions web |  | Recreació 3D navegable del poble amb dades obertes reals (Cadastre, LiDAR de l'ICGC, OpenStreetMap). Feta amb IA (Claude Code) a partir del meu encàrrec i les meves revisions. | TypeScript, 3D, Open data | [demo](https://nil-munte.github.io/riudoms-3d/) · [codi](https://github.com/nil-munte/riudoms-3d) |
| **Cuina amb mi** | Aplicacions web |  | Les receptes que he cuinat, amb fotos de cada pas. | Astro, TypeScript | [demo](https://nil-munte.github.io/cuina-amb-mi/) · [codi](https://github.com/nil-munte/cuina-amb-mi) |
| **Física de 2n de Batxillerat** | Docència i divulgació |  | Teoria orientada a exercicis, demos interactives, exercicis amb solució i problemes de les PAU de Catalunya. | Python, HTML | [demo](https://nil-munte.github.io/fisica-2n-bat/) · [codi](https://github.com/nil-munte/fisica-2n-bat) |
| **Catapulta parabòlica** | Docència i divulgació |  | Demo interactiva que descompon el moviment parabòlic en un MRU horitzontal i un MRUA vertical. | HTML, JavaScript | [demo](https://nil-munte.github.io/moviment-parabolic-catapulta/) · [codi](https://github.com/nil-munte/moviment-parabolic-catapulta) |
| **Curs de Python en català** | Docència i divulgació |  | Curs introductori de programació en Python amb quaderns de Jupyter, pensat per a catalanoparlants. | Python, Jupyter | [codi](https://github.com/nil-munte/Python_course_CAT) |
| **Llibreria de radars mmWave** | Recerca i enginyeria |  | Codi per adquirir i processar dades de tres radars d'ones mil·limètriques (TI AWR1642, TI IWR1443 i Acconeer XM132). | MATLAB, Python, Radar | [codi](https://github.com/nil-munte/Radar_Texas_IWR1443) · [Acconeer XM132](https://github.com/nil-munte/Radar_Acconeer_XM132) |
| **Fluctuacions de freqüència de la xarxa elèctrica** | Recerca i enginyeria |  | Model dinàmic amb equacions diferencials de la sincronització de la xarxa elèctrica de Gran Canària, amb dades reals. | Julia, Fortran, Python | [codi](https://github.com/nil-munte/Sincronization-Gran-Canaria-Julia-Fortran) |
| **Xarxa neuronal des de zero** | Recerca i enginyeria |  | Implementació d'una xarxa neuronal amb retropropagació sense cap llibreria, en Java. | Java, Machine learning | [codi](https://github.com/nil-munte/Neural-Net) |

⚠️ A revisar:
- El bot de despeses compartides s'ha descartat: el repositori ja no existeix.
- Cuina amb mi va a *Sobre mi*, no a Projectes.
- La menció «feta amb IA» de Riudoms 3D (la diu el seu README).
- Treure «El meu portfoli» de la llista.
- **Captures o miniatures** de cada projecte web, que ara no n'hi ha.

---

## 5. Sobre mi

**Actual:** «Vaig estudiar Enginyeria de Telecomunicacions i vaig completar un Màster en Intel·ligència Artificial.» i «En el meu temps lliure, m'agrada molt fer senderisme i anar a la muntanya.», més tres activitats de Strava.

**Proposta** [nou, a partir del CV i del README]:

1. Vaig estudiar Enginyeria de Telecomunicacions a la Universitat Rovira i Virgili, on vaig ser delegat de curs tres anys seguits, i després el Màster en Seguretat Informàtica i Intel·ligència Artificial. La curiositat ve de lluny: als 17 anys el treball de recerca «Nassos electrònics» va guanyar un Premi de Recerca Jove.
2. M'agrada entendre les coses fins al fons i, després, explicar-les. Per això combino l'enginyeria amb la docència: a la URV, a l'Acadèmia Gaudí i amb materials oberts com els de Física de 2n de Batxillerat.
3. Fora de la feina sóc de muntanya: m'agrada fer cims i caminar per la serralada. També he estat monitor d'escoltes.

⚠️ A revisar:
- «als 17 anys» està deduït de l'any del premi (2017).
- «caminar per la serralada» és una frase inventada.
- «sóc» s'escriu «soc» segons la normativa actual.

**Bloc «Parlem-ne»** [nou]: «Si tens un projecte de mobilitat, IA o docència on pugui aportar alguna cosa, escriu-me.», amb botons de correu, LinkedIn i GitHub.

---

## 6. Textos de la interfície i per a Google

**Interfície** [nou]
- **Menú:** Inici · Trajectòria · Projectes · Sobre mi
- **Botons:** «Descarrega el CV», «Contacta amb mi», «Prova-ho», «Codi», «Tots els projectes», «Tota la trajectòria».
- **Pàgina 404:** «Aquesta pàgina no existeix. Potser l'enllaç és antic. Pots tornar a l'inici o mirar els projectes.»

**Descripcions per a Google**, una per pàgina [nou]. Ara totes les pàgines fan servir el text de presentació:
- **Inici:** «Enginyer de Telecomunicacions i màster en IA. Radar, ADAS, projectes europeus i docència a la URV. Projectes, publicacions i CV.»
- **Trajectòria:** «Trajectòria de Nil Munté Guerrero: Applus+ IDIADA, recerca a la URV, docència, publicacions IEEE i premis.»
- **Projectes:** «Projectes de Nil Munté Guerrero: radar per a automoció, aplicacions web de mobilitat elèctrica i IA, i materials docents oberts.»
- **Sobre mi:** «Qui és Nil Munté Guerrero: enginyer, professor i amant de la muntanya.»

---

## 7. Contingut nou a més llarg termini

- **Formació en Claude i IA.** Si vols fer cursos de Claude i d'IA com a docent, això ha de ser visible a la web, i amb proves, no només amb paraules clau:
  - als rols de la portada (per exemple, «Formador en IA i Claude»);
  - en una secció o targeta «Formació en IA», amb què ensenyes, a qui, el format i un botó de contacte;
  - a les descripcions i a les dades per a Google, per aparèixer en cerques com «curs Claude Code» o «formació IA en català»;
  - com a proves: el curs de Python avançat amb aprenentatge automàtic, el màster en IA, Riudoms 3D (fet dirigint Claude Code) i aquest mateix portfoli;
  - al blog, amb 2 o 3 articles pràctics sobre com treballes amb Claude.
- **Blog:** articles en Markdown amb RSS. Per exemple, un article al mes sobre radar, ADAS, IA aplicada o mobilitat elèctrica. Dona contingut que Google pot indexar i coses per compartir a LinkedIn.
- **Assignatura d'IA a la URV:** si ja la fas, és un projecte docent molt potent per a la pàgina de projectes.
- **CV en PDF generat automàticament** (Typst) a partir de `src/data/cv.yaml`, en català i en anglès. Es va fer i provar a la primera versió (commit `3d63f81`, carpeta `cv/`) i es recuperarà amb la revisió de contingut.
- **ORCID i Google Scholar**, si en tens: s'afegeixen als enllaços i a les dades per a Google.
