# Kenniswerkplaats: kleursysteem

Versie 3 · 9 oktober 2026. Deze rolverdeling vervangt het eerdere functionele merkpalet. De bron voor UI-kleuren is de ene `:root` bovenaan `src/styles/global.css`.

## Rollen en tokens

| Token | Kleur | Gebruik |
| --- | --- | --- |
| `--ink` | #004E70 | Marine voor koppen en hoofdtekst |
| `--ink-2` | #435871 | Lopende tekst en toelichting |
| `--ink-3` | #586B7C | Ondergeschikte tekst |
| `--action` | #034F64 | Alle knoppen, links en focusranden; bestaande knopkleur |
| `--action-hover` | #003D4E | Donkere actievariant bij hover |
| `--action-tint` | #EBF1F3 | Lichte achtergrond bij acties |
| `--paper` | #F7F8F6 | Pagina-achtergrond |
| `--card` | #FFFFFF | Kaarten en dialogs |
| `--surface` | #EAF0F2 | Neutrale ondersteunende vlakken |
| `--phase` | #034F64 | Neutrale teal voor bewijsstatus, onafhankelijk van domein |
| `--org` | #B52A68 | Organisatie & governance: magenta |
| `--org-tint` | #F9EEF3 | Lichte domeinachtergrond |
| `--org-ink` | #9A2057 | Domeintekst op wit en lichte achtergronden |
| `--tech` | #006D9A | Technologie & AI: blauw |
| `--tech-tint` | #EBF3F7 | Lichte domeinachtergrond |
| `--tech-ink` | #005779 | Domeintekst op wit en lichte achtergronden |
| `--leren` | #709F3A | Leren & ontwikkelen: groen |
| `--leren-tint` | #F4F7EF | Lichte domeinachtergrond |
| `--leren-ink` | #486823 | Domeintekst en groene lijniconen |

De drie domeintinten zijn afgeronde mengingen van 8% basiskleur met 92% wit. Lijnen en schaduwen gebruiken neutrale tokens. Bestaande `--teal-*` en vijf `--brand-*` namen zijn compatibiliteitsaliassen; voeg geen nieuw functioneel palet naast de rollen toe. Oranje heeft geen UI-token en blijft in het logo en de bijbehorende favicon.

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

Cases behouden hun bestaande sectoromschrijving in `domein`. Een afzonderlijk `kleurDomein` geeft de presentatierol aan. Zowel de oorspronkelijke sectoromschrijving als de nieuwe domeinnaam blijven zichtbaar. De indeling is expliciet, nooit automatisch afgeleid uit een woord als Zorg of Onderwijs:

- tech: Addventure, Rode Kruis, Zorgwise, Corpio, Moodle RBS, Stad+Esch.
- org: Enexis, Viazorg flexplatform, Balans flex/vast, Quarterly Review, Green Key, Heineken, UrWay, Delft OpenCourseWare.
- leren: HZ Personal Learning Journeys.

## Toepassing

Vraagstuktegels en aanbodkaarten krijgen een rond icoonvlak in de domeintint. Het icoon gebruikt de basiskleur, behalve bij leren: daar is ook de donkere variant nodig voor voldoende contrast. Domeinlabels gebruiken altijd de `--x-ink` variant. De domeinnaam staat in tekst; kleur is nooit de enige informatiebron.

Alle actieknoppen en links gebruiken de actie-rol, met witte tekst op een donkere knop of donkere actie-tekst op een lichte achtergrond. Gewone koppen blijven marine. De categorieën in navigatie en de nummers in de mini-mindmap zijn neutraal; individuele onderwerpen dragen hun eigen domeinlabel. Kaarten blijven wit, met zachte randen en schaduwen.

Hero en praktijklabbanner gebruiken wit of een zeer lichte tint. De vijf echte AISA-kaarten en de compacte beeldruimte in de praktijklabbanner blijven behouden. De homepage-illustratie blijft behouden: zij gebruikt zacht magenta, teal, gedempt groen en donkere contouren op een lichte achtergrond. Het horizontale logo behoudt zijn eigen beeldkleuren: oranje, magenta, donkerblauw en petrol. Logo- en illustratiekleuren vormen geen extra functionele UI-rollen.

Abstracte decoratie wordt in grijstinten getoond, zodat oranje buiten logo/favicon geen rol speelt en kunst niet met domeinaccenten concurreert. Zij blijft buiten de toegankelijkheidsboom en buiten klikbare controls. Op pagina's met achtergrondkunst heeft de kleine breadcrumbtekst een ondoorzichtige paper-achtergrond; de hoofdtekst houdt voldoende contrast bij de maximale decoratie-opacity. Mensgerichte illustraties blijven alleen op de homepage. De footer blijft typografisch, zonder kunststrook.

Fasecirkels tonen bewijsstatus: gevuld is bewezen, halfgevuld is deels, leeg is niet in deze case. Zij gebruiken neutrale teal, met bestaande statusnamen voor schermlezers en een zichtbare legenda. Fasescores, case-inhoud en dialoggedrag veranderen niet. Algemene fasenoverzichten hebben geen geselecteerde stap; alleen de passende fasen op een aanbodpagina worden gemarkeerd.

## Contrast en verificatie

Groen #709F3A haalt op wit slechts 3,13:1 en op de eigen lichte tint minder dan 3:1. Gebruik deze kleur dus niet voor tekst of dunne betekenisvolle lijniconen. De donkere variant #486823 haalt op de eigen tint 5,91:1. Magenta en blauw halen als icoon op hun tint respectievelijk 5,31:1 en 5,12:1. Voor domeintekst gebruiken alle domeinen de donkere variant.

`scripts/check-contrast.mjs` rekent met de WCAG 2.x-formule voor relatieve luminantie. Het toetst tekst tegen 4,5:1, grote tekst en iconen tegen 3:1, inclusief de kleurcombinaties uit browserobservaties. Transparante achtergronden worden samengesteld met hun ouderachtergrond; bewijsstipjes worden tegen hun buitenachtergrond getoetst. Extra conservatieve berekeningen gebruiken zwart als donkerste mogelijke decoratie bij de maximale opacity.

Draai `npm run check`, `npm run build` en `node scripts/check-contrast.mjs`. De gegevenscontrole eist een geldig domein op alle onderwerpen en cases. Voor opgeslagen browserobservaties: `node scripts/check-contrast.mjs docs/reviews/kleursysteem/contrast-observaties.json`. Bekijk ook de gerenderde site op desktop en 360px, inclusief navigatie en dialogs. Logo's en rasterillustraties zijn geen functionele tekst/iconen in deze kleurcontrole; dit is geen volledige WCAG-audit.

Historische ontwerpvoorbeelden behouden hun vergelijkingspaletten. De gezamenlijke componenten en contrasten worden wel meegecontroleerd; een botsende banner of onvoldoende duidelijke bewijsstipjes worden hersteld zonder de voorbeeldteksten te herschrijven. Het huidige kleursysteem geldt voor de hoofdsite.
