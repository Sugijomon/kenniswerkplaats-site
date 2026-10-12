# Kenniswerkplaats — huisstijl v3

De aangeleverde kwp-stijlgids-v3 (oktober 2026) is de bron voor logo, kleur en typografie. Originele kleuren staan in `src/styles/kwp-kleuren.css`; semantische rollen staan bovenaan `src/styles/global.css`.

## Logo en typografie

Gebruik uitsluitend de originele v3-bestanden in `public/brand/v3/`. Header en footer gebruiken het horizontale vlakke SVG-logo met tagline, zonder vervorming of effecten. De tagline blijft minimaal 180px breed; het mobiele logo is 210px. De vrije ruimte zit rond het logo, met een header van minimaal 96px hoog. Favicons zijn SVG en 32px PNG; Apple touch gebruikt de aangeleverde 180px PNG.

Montserrat Variable is lokaal gebundeld via Fontsource, met Arial als fallback. Lopende tekst is Medium 500, tussenkoppen SemiBold 600 en koppen Bold 700. Geen externe fontaanvragen.

## Kleurrollen

- Diepnavy `#001F58`: koppen, hoofdtekst en donkere domeintekst.
- Leisteen `#4A5A70`: toelichting en bijschriften.
- Koningsblauw `#00337C`: acties en technologieaccenten; witte tekst op knoppen.
- Magenta `#DF0264`: organisatieaccenten.
- Petrol `#0093A8`: lerenaccenten; kleine tekst en bewijsstatus gebruiken een donkerdere rol.
- Wit en mist `#E8EEF4`: rustige achtergronden, kaarten en kaders.
- Oranjerood `#F5450F`, amber en cyaan blijven beschikbaar als merkaccenten, zonder extra kleurrollen aan inhoud toe te voegen.

Domeintinten mengen 8% basiskleur met wit. Op lichte tinten gebruikt kleine domeintekst navy of koningsblauw voor contrast. Acties en domeinen blijven apart herkenbaar; labels, iconen en bewijsstatus geven ook zonder kleur betekenis.

## Inhoud bepaalt het domein

`src/data/domeinen.ts` bevat de typecodes `org | tech | leren` en hun leesbare namen. Ieder vraagstuk en ieder aanbodonderdeel heeft een verplicht `domein`. De redactionele groepen AI, leren en platforms blijven ongewijzigd. Een aanbodgroep bepaalt geen kleur: bijvoorbeeld Implementatie staat nog bij Digitale platforms, maar heeft domein `org`.

| Onderwerp | Domein | Reden |
| --- | --- | --- |
| AI-Foto, GRIP op AI in HR, Shadow AI, AI in HR, Copilot | tech | Feitelijk gebruik en toepassingen van technologie |
| AI op Orde, Weinig grip op AI, AI Act | org | Afspraken, eigenaarschap, verantwoordingsstructuur en sturing |
| Praktijklab, Leermodule op maat, AI-bekwaamheid, Losse pilots | leren | Gezamenlijk onderzoeken, ontwerpen en vaardigheden ontwikkelen |
| Samenwerken, Implementatie, Governance en evaluatie, Het komt niet van de grond, Wat levert het op? | org | Samenwerking, borging, evaluatie en besluitvorming |
| Ontwerp en ontwikkeling, Samen een platform | tech | Platformontwerp, inrichting en koppelingen |

Copilot als vraagstuk blijft `tech`, terwijl het gekoppelde aanbod AI-bekwaamheid `leren` is. Samenwerken is `org`, terwijl het gekoppelde Praktijklab `leren` is. Dit zijn verschillende invalshoeken, geen reden om een kleur uit de bestemming af te leiden.

Cases behouden hun bestaande sectoromschrijving in `domein`. Een afzonderlijk `kleurDomein` geeft alleen de interne kleurrol aan. De oorspronkelijke sectoromschrijving blijft zichtbaar; er verschijnt geen extra domeinnaam. De indeling is expliciet, nooit automatisch afgeleid uit een woord als Zorg of Onderwijs:

- tech: Addventure, Rode Kruis, Zorgwise, Corpio, Moodle RBS, Stad+Esch.
- org: Enexis, Viazorg flexplatform, Balans flex/vast, Quarterly Review, Green Key, Heineken, UrWay, Delft OpenCourseWare.
- leren: HZ Personal Learning Journeys.

## Toepassing en verificatie

De bestaande pagina-indeling, teksten, casepopups, fasescores en navigatie blijven behouden. De footer blijft rustig en zonder kunststrook. Bestaande foto's, AISA-kaarten en decoratieve kunst zijn inhoudelijke beelden; zij worden niet vervangen door logo's. Abstracte decoratie blijft in grijstinten.

Geen verlopen in tekst of achtergrondvlakken. Alleen de aangeleverde logo-varianten mogen verlopen gebruiken. Tekst staat minimaal 24px van de schermrand.

`scripts/check-contrast.mjs` controleert de v3-kleuren en semantische rollen samen op WCAG AA (4,5:1 tekst, 3:1 iconen/grote tekst). `npm run build` controleert inhoudsverwijzingen en interne links. Controleer bij fontwijzigingen ook de navigatie en pagina's op 360px.
