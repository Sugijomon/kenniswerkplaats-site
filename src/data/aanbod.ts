import type { Domein } from './domeinen';

// Aanbod: drie groepen, negen onderdelen. Elk onderdeel hangt aan een of twee fasen
// en toont onderaan de bijbehorende praktijkcases (ids uit cases.ts).

import type { FaseKey } from './fasen';

export interface AanbodItem {
  slug: string;
  domein: Domein;
  naam: string;
  groep: string;
  fasen: FaseKey[];
  instap?: boolean;
  kort: string;
  vraag: string;
  intro: string;
  jeKrijgt: string[];
  zoWerkIk: string[];
  casesIntro: string;
  cases: string[];
  noot?: string;
}

export type GroepKey = 'ai' | 'leren' | 'platforms';

export interface AanbodGroep {
  key: GroepKey; // redactionele groepering; kleur volgt het domein van elk item
  naam: string;
  tekst: string;
  kort: string; // zin op de groepskaart (homepage)
  items: string[];
}

export const groepen: AanbodGroep[] = [
  {
    key: 'ai',
    naam: 'Verantwoord werken met AI',
    tekst: 'Van zicht op feitelijk AI-gebruik naar afspraken, eigenaarschap en bewijs.',
    kort: 'AI zorgvuldig inzetten in je organisatie.',
    items: ['ai-foto', 'grip-op-ai-in-hr', 'ai-op-orde'],
  },
  {
    key: 'leren',
    naam: 'Leren en ontwikkelen',
    tekst: 'Samen werken aan wat mensen nodig hebben om het in de praktijk te laten werken.',
    kort: 'Leren verbinden met de dagelijkse praktijk.',
    items: ['praktijklab', 'leermodule-op-maat', 'ai-bekwaamheid'],
  },
  {
    key: 'platforms',
    naam: 'Digitale platforms',
    tekst: 'Platforms kiezen, inrichten en besturen, ook als meerdere organisaties ze delen.',
    kort: 'Platforms ontwikkelen die je werk ondersteunen.',
    items: ['ontwerp-en-ontwikkeling', 'implementatie', 'governance-en-evaluatie'],
  },
];

export const aanbod: AanbodItem[] = [
  // ── Verantwoord werken met AI ────────────────────────────────
  {
    slug: 'ai-foto',
    domein: 'tech',
    naam: 'AI-Foto',
    groep: 'Verantwoord werken met AI',
    fasen: ['zicht'],
    kort: 'Zicht op wat er feitelijk met AI gebeurt in je organisatie.',
    vraag: 'Medewerkers gebruiken AI, maar niemand weet precies wat, waarvoor en met welke risico’s.',
    intro:
      'AI-Foto brengt in kaart wat er werkelijk gebeurt: welk gebruik, welke waarde, welke risico’s en welke vaardigheden. Geen oordeel vooraf, maar een feitelijk beeld waar je besluiten op kunt nemen.',
    jeKrijgt: [
      'Een beeld van het feitelijke AI-gebruik',
      'Inzicht in waarde, risico’s en vaardigheden',
      'Een besluitagenda met maximaal vijf besluitpunten',
      'Een route voor de eerste negentig dagen',
    ],
    zoWerkIk: [
      'Korte uitvraag en gesprekken met medewerkers, management, HR en IT',
      'Analyse van gebruik, waarde en risico',
      'Een werksessie waarin de besluitpunten samen worden gewogen',
    ],
    casesIntro:
      'AI-Foto is nieuw, de aanpak niet. Dezelfde vraag, wat gebeurt er echt, beantwoordde ik eerder voor digitale tools, kennisdeling, online kanalen en leerplatforms.',
    cases: ['addventure', 'enexis', 'rode-kruis', 'zorgwise'],
  },
  {
    slug: 'grip-op-ai-in-hr',
    domein: 'tech',
    naam: 'GRIP op AI in HR',
    groep: 'Verantwoord werken met AI',
    fasen: ['ontwerp'],
    kort: 'Afspraken en een uitvoeringsplan voor AI in HR-processen.',
    vraag: 'AI duikt op in werving, beoordeling en ontwikkeling, maar spelregels en toezicht ontbreken.',
    intro:
      'HR is een domein waarin AI direct raakt aan mensen en hun loopbaan. Samen met HR, management, IT en medewerkers breng ik in beeld waar AI wordt ingezet en ontwerpen we werk- en toezichtafspraken die passen bij de praktijk.',
    jeKrijgt: [
      'Een register van AI-toepassingen in HR',
      'Een procesbeeld met use-cases en risicoweging',
      'Werk- en toezichtafspraken',
      'Een uitvoeringsplan voor 30, 60 en 90 dagen',
    ],
    zoWerkIk: [
      'Inventarisatie per HR-proces',
      'Praktijklab met de betrokken rollen om risico’s en afspraken te wegen',
      'Uitwerking tot een concreet uitvoeringsplan',
    ],
    casesIntro:
      'HR-vraagstukken samen met de betrokkenen uitwerken deed ik eerder in de zorg, met organisaties die geen zeggenschap over elkaar hadden.',
    cases: ['viazorg-flexplatform', 'balans-flex-vast', 'enexis'],
  },
  {
    slug: 'ai-op-orde',
    domein: 'org',
    naam: 'AI op Orde',
    groep: 'Verantwoord werken met AI',
    fasen: ['ontwikkel', 'sturen'],
    kort: 'Governance, eigenaarschap, bekwaamheid en bewijs, met een vast ritme.',
    vraag: 'Er zijn losse afspraken over AI, maar niemand is eigenaar en aantonen wat je doet lukt niet.',
    intro:
      'AI op Orde zorgt dat verantwoord werken met AI onderdeel wordt van het gewone werk: wie is eigenaar, wie mag wat, hoe houd je bekwaamheid op peil en hoe toon je aan dat je zorgvuldig handelt.',
    jeKrijgt: [
      'Governance en eigenaarschap',
      'Afspraken over bekwaamheid per rol',
      'Een bewijsstructuur',
      'Een terugkerend besluitritme',
    ],
    zoWerkIk: [
      'Aansluiten op bestaande kwaliteits- en planningscycli',
      'Rollen, routines en registratie samen met de eigenaren inrichten',
      'Een eerste reviewronde om het ritme te testen',
    ],
    casesIntro:
      'Verantwoording organiseren, met rollen, ritme en bewijs, deed ik eerder voor scholingsplatforms, kwaliteitszorg, merkplatforms en duurzaamheid.',
    cases: ['corpio', 'quarterly-review', 'heineken', 'green-key'],
    noot:
      'Ik geef geen juridisch eindoordeel en geen compliancegarantie. Waar specialistische juridische toetsing nodig is, gebeurt dat door een bevoegde jurist.',
  },

  // ── Leren en ontwikkelen ─────────────────────────────────────
  {
    slug: 'praktijklab',
    domein: 'leren',
    naam: 'Praktijklab',
    groep: 'Leren en ontwikkelen',
    fasen: ['ontwerp'],
    instap: true,
    kort: 'Samen met de mensen die het vraagstuk kennen onderzoeken, ontwerpen en beoordelen.',
    vraag: 'Er zijn veel ideeën en losse pilots, maar nog geen gezamenlijke keuzes.',
    intro:
      'In een praktijklab werken de mensen die het vraagstuk kennen samen aan een oplossing. Dat kan één werkplaats zijn of een reeks van drie tot vijf sessies, in je eigen organisatie of met meerdere organisaties tegelijk.',
    jeKrijgt: [
      'Gedeelde spelregels of uitgangspunten',
      'Een ontwerp, prototype of pilotopzet',
      'Gezamenlijke keuzes en een beslisagenda',
    ],
    zoWerkIk: [
      'Een kaartspel om risico’s en kansen te beoordelen',
      'Een proceswand om een keten zichtbaar te maken',
      'Scenario’s vergelijken en samen spelregels formuleren',
      'Een pilot ontwerpen of een prototype testen',
    ],
    casesIntro: 'Werkplaatsen met meerdere partijen leidde ik eerder in de zorg en het hoger onderwijs.',
    cases: ['balans-flex-vast', 'viazorg-flexplatform', 'moodle-rbs'],
  },
  {
    slug: 'leermodule-op-maat',
    domein: 'leren',
    naam: 'Leermodule op maat',
    groep: 'Leren en ontwikkelen',
    fasen: ['ontwerp', 'ontwikkel'],
    kort: 'Een leerroute die aansluit op het werk en het competentiekader.',
    vraag: 'Er is een beroepsprofiel of competentiekader, maar nog geen leerroute die daar echt op aansluit.',
    intro:
      'Ik vertaal beroepsprofielen, competentiekaders en leeruitkomsten naar samenhangende leerroutes: inhoud, activiteiten en beoordeling in één ontwerp, ingericht in je leeromgeving.',
    jeKrijgt: [
      'Leeruitkomsten, leeractiviteiten en beoordeling in samenhang',
      'Een uitvoerbare leerlijn',
      'Inrichting in je leeromgeving',
    ],
    zoWerkIk: [
      'Vertrekken vanuit het profiel en de praktijk van de doelgroep',
      'Ontwerpen met docenten of opleiders, met AI als ontwerphulp en menselijke toets',
      'Testen, bijstellen en overdragen',
    ],
    casesIntro: 'Leerroutes en leeromgevingen ontwierp en richtte ik eerder in voor hogescholen.',
    cases: ['hz-plj', 'moodle-rbs'],
  },
  {
    slug: 'ai-bekwaamheid',
    domein: 'leren',
    naam: 'AI-bekwaamheid',
    groep: 'Leren en ontwikkelen',
    fasen: ['ontwikkel'],
    kort: 'AI-vaardigheden per rol, in plaats van een algemene training.',
    vraag: 'Iedereen heeft een AI-training gehad, maar in het werk verandert er weinig.',
    intro:
      'Een algemene AI-training landt zelden. Ik werk met praktijklabs per rolcluster: wat moet een HR-adviseur, docent of teamleider kunnen, en hoe borg je dat.',
    jeKrijgt: [
      'Een bekwaamheidsprofiel per rolcluster',
      'Praktijklabs die aansluiten op het eigen werk',
      'Borging in leren en registratie',
    ],
    zoWerkIk: [
      'Bepalen welke rollen wat moeten kunnen',
      'Oefenen met eigen werksituaties',
      'Vastleggen hoe bekwaamheid wordt bijgehouden',
    ],
    casesIntro:
      'Bekwaamheid ontwikkelen én aantoonbaar maken deed ik eerder in de zorg en het onderwijs.',
    cases: ['hz-plj', 'corpio', 'addventure'],
  },

  // ── Digitale platforms ───────────────────────────────────────
  {
    slug: 'ontwerp-en-ontwikkeling',
    domein: 'tech',
    naam: 'Ontwerp en ontwikkeling',
    groep: 'Digitale platforms',
    fasen: ['ontwerp', 'ontwikkel'],
    kort: 'Van vraag en eisen naar een gekozen en ingericht platform.',
    vraag: 'We willen samen een platform, maar wat hebben we eigenlijk nodig, en van wie is het?',
    intro:
      'Ik help organisaties, ook samen, om scherp te krijgen wat een platform moet doen, routes te vergelijken en de gekozen oplossing in te richten. Met aandacht voor koppelingen, eigendom en zeggenschap.',
    jeKrijgt: [
      'Pakket van eisen en scenario’s',
      'Vergelijking van platformroutes',
      'Inrichting en koppelingen met bestaande systemen',
    ],
    zoWerkIk: [
      'Eerst de bestaande omgeving en werkprocessen in beeld',
      'Samen met gebruikers en leveranciers ontwerpen',
      'Stapsgewijs inrichten en testen',
    ],
    casesIntro: 'Platforms ontwierp en richtte ik eerder in, vaak voor meerdere organisaties tegelijk.',
    cases: ['zorgwise', 'corpio', 'moodle-rbs', 'viazorg-flexplatform'],
  },
  {
    slug: 'implementatie',
    domein: 'org',
    naam: 'Implementatie',
    groep: 'Digitale platforms',
    fasen: ['ontwikkel'],
    kort: 'Van gekozen oplossing naar werkende en geborgde praktijk.',
    vraag: 'Er ligt een plan of een platform, maar het komt niet van de grond.',
    intro:
      'Implementatie gaat om meer dan techniek: werkprocessen, rollen, kennisoverdracht en een eigenaar die het na de projectfase overneemt.',
    jeKrijgt: [
      'Ingerichte processen en werkafspraken',
      'Een eigenaar en overdracht',
      'Borging in de reguliere cyclus',
    ],
    zoWerkIk: [
      'Werkprocessen harmoniseren met de betrokken organisaties',
      'Koppelingen en registraties laten werken',
      'Kennis overdragen en tactisch verankeren',
    ],
    casesIntro: 'Implementaties die bleven werken na de projectfase:',
    cases: ['corpio', 'moodle-rbs', 'quarterly-review', 'green-key'],
  },
  {
    slug: 'governance-en-evaluatie',
    domein: 'org',
    naam: 'Governance en evaluatie',
    groep: 'Digitale platforms',
    fasen: ['sturen'],
    kort: 'Sturen op wat een platform of programma oplevert, met een besluit als uitkomst.',
    vraag: 'Een programma of platform loopt al een tijdje, maar wat levert het op, en hoe nu verder?',
    intro:
      'Een evaluatie met handelingsperspectief: niet alleen een oordeel, maar ook wat er nu besloten moet worden. Doorgaan, bijsturen, opschalen of stoppen. Daarnaast richt ik governance in die het besturen na de evaluatie mogelijk maakt.',
    jeKrijgt: [
      'Een evaluatie met besluitadvies',
      'Een governancemodel en rapportagekader',
      'Een reviewritme',
    ],
    zoWerkIk: [
      'Meerdere bronnen combineren: data, interviews, observaties',
      'Bevindingen vertalen naar besluitpunten',
      'Governance afstemmen op bestaande sturing',
    ],
    casesIntro: 'Programma’s en platforms evalueerde ik eerder voor onder meer TU Delft, OCW en Kennisnet.',
    cases: ['urway', 'delft-ocw', 'stad-esch', 'heineken'],
  },
];

export const aanbodBySlug = Object.fromEntries(aanbod.map((a) => [a.slug, a])) as Record<string, AanbodItem>;
