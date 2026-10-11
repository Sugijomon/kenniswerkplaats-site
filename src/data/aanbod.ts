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
  ondertitel?: string;
  seo?: string;
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
    "key": "ai",
    "naam": "Verantwoord werken met AI",
    "tekst": "Van zicht op feitelijk AI-gebruik naar afspraken, eigenaarschap en bewijs.",
    "kort": "Van zicht op AI-gebruik naar afspraken, eigenaarschap en bewijs.",
    "items": [
      "ai-foto",
      "grip-op-ai-in-hr",
      "ai-op-orde"
    ]
  },
  {
    "key": "leren",
    "naam": "Leren en ontwikkelen",
    "tekst": "Leren dat aansluit op het werk en wat mensen er feitelijk mee moeten kunnen.",
    "kort": "Leren dat aansluit op het werk, van praktijklab tot leerroute.",
    "items": [
      "praktijklab",
      "leermodule-op-maat",
      "ai-bekwaamheid"
    ]
  },
  {
    "key": "platforms",
    "naam": "Digitale platforms",
    "tekst": "Platforms en hulpmiddelen kiezen, invoeren en besturen, ook als meerdere organisaties ze delen.",
    "kort": "Platforms kiezen, invoeren en besturen, ook als meerdere organisaties ze delen.",
    "items": [
      "ontwerp-en-ontwikkeling",
      "implementatie",
      "governance-en-evaluatie"
    ]
  }
];

export const aanbod: AanbodItem[] = [
  {
    "slug": "ai-foto",
    "domein": "tech",
    "naam": "AI-Foto",
    "groep": "Verantwoord werken met AI",
    "fasen": [
      "zicht"
    ],
    "kort": "Zicht op AI-gebruik in je organisatie",
    "vraag": "Medewerkers gebruiken AI, maar niemand weet precies wat, waarvoor en met welke risico’s.",
    "intro": "AI-Foto brengt het feitelijke gebruik van AI in je organisatie in beeld, formeel én informeel, inclusief het gebruik waar niemand toestemming voor vroeg. Dat beeld wordt een besluitagenda waarmee de directie verder kan.",
    "jeKrijgt": [
      "Een beeld van het feitelijke AI-gebruik",
      "Inzicht in waarde, risico’s en vaardigheden",
      "Een besluitagenda met maximaal vijf besluitpunten",
      "Een route voor de eerste negentig dagen"
    ],
    "zoWerkIk": [
      "Korte uitvraag en gesprekken met medewerkers, management, HR en IT",
      "Analyse van gebruik, waarde en risico",
      "Een werksessie waarin de besluitpunten samen worden gewogen"
    ],
    "casesIntro": "AI-Foto is nieuw, de aanpak niet. Dezelfde vraag, wat gebeurt er echt, beantwoordde ik eerder voor digitale tools, kennisdeling, online kanalen en leerplatforms.",
    "cases": [
      "addventure",
      "enexis",
      "rode-kruis",
      "zorgwise"
    ],
    "ondertitel": "Zicht op AI-gebruik in je organisatie",
    "seo": "AI-Foto brengt in ongeveer twee tot vier weken het feitelijke gebruik van AI in je organisatie in beeld en vertaalt dat naar maximaal vijf besluitpunten met een 90-dagenroute."
  },
  {
    "slug": "grip-op-ai-in-hr",
    "domein": "tech",
    "naam": "GRIP op AI in HR",
    "groep": "Verantwoord werken met AI",
    "fasen": [
      "ontwerp"
    ],
    "kort": "Verantwoord AI-gebruik in HR",
    "vraag": "AI duikt op in werving, beoordeling en ontwikkeling, maar spelregels en toezicht ontbreken.",
    "intro": "Met de GRIP-methode maak ik samen met je team concrete AI-toepassingen in HR zichtbaar. We wegen operationele aandachtspunten en leggen toezicht, eigenaarschap en vervolgstappen praktisch vast.",
    "jeKrijgt": [
      "Een register van AI-toepassingen in HR",
      "Een procesbeeld met use-cases en risicoweging",
      "Werk- en toezichtafspraken",
      "Een uitvoeringsplan voor 30, 60 en 90 dagen"
    ],
    "zoWerkIk": [
      "Inventarisatie per HR-proces",
      "Praktijklab met de betrokken rollen om risico’s en afspraken te wegen",
      "Uitwerking tot een concreet uitvoeringsplan"
    ],
    "casesIntro": "HR-vraagstukken samen met de betrokkenen uitwerken deed ik eerder in de zorg, met organisaties die geen zeggenschap over elkaar hadden.",
    "cases": [
      "viazorg-flexplatform",
      "balans-flex-vast",
      "enexis"
    ],
    "ondertitel": "Verantwoord AI-gebruik in HR",
    "seo": "GRIP op AI in HR maakt in ongeveer drie weken zichtbaar welke AI je HR-processen raakt, weegt de aandachtspunten en legt toezicht, eigenaarschap en een 30/60/90-plan vast."
  },
  {
    "slug": "ai-op-orde",
    "domein": "org",
    "naam": "AI op Orde",
    "groep": "Verantwoord werken met AI",
    "fasen": [
      "ontwikkel",
      "sturen"
    ],
    "kort": "AI-beleid en governance die in de praktijk werken",
    "vraag": "Er zijn losse afspraken over AI, maar niemand is eigenaar en aantonen wat je doet lukt niet.",
    "intro": "AI op Orde brengt AI-register, besluiten, werkafspraken, eigenaarschap, toezicht, praktijklabs, leveranciersroutes, bewijs en periodiek onderhoud samen binnen een heldere scope.",
    "jeKrijgt": [
      "Governance en eigenaarschap",
      "Afspraken over bekwaamheid per rol",
      "Een bewijsstructuur",
      "Een terugkerend besluitritme"
    ],
    "zoWerkIk": [
      "Aansluiten op bestaande kwaliteits- en planningscycli",
      "Rollen, routines en registratie samen met de eigenaren inrichten",
      "Een eerste reviewronde om het ritme te testen"
    ],
    "casesIntro": "Verantwoording organiseren, met rollen, ritme en bewijs, deed ik eerder voor scholingsplatforms, kwaliteitszorg, merkplatforms en duurzaamheid.",
    "cases": [
      "corpio",
      "quarterly-review",
      "heineken",
      "green-key"
    ],
    "noot": "Ik geef geen juridisch eindoordeel en geen compliancegarantie. Waar specialistische juridische toetsing nodig is, gebeurt dat door een bevoegde jurist.",
    "ondertitel": "AI-beleid en governance die in de praktijk werken",
    "seo": "AI op Orde richt in 10 tot 26 weken AI-register, besluiten, werkafspraken, toezicht, praktijklabs en bewijs in, zodat je organisatie AI-gebruik daarna zelf kan beheren."
  },
  {
    "slug": "praktijklab",
    "domein": "leren",
    "naam": "Praktijklab",
    "groep": "Leren en ontwikkelen",
    "fasen": [
      "zicht",
      "ontwerp"
    ],
    "instap": true,
    "kort": "Samen uitzoeken, maken en beoordelen",
    "vraag": "Er zijn veel ideeën en losse pilots, maar nog geen gezamenlijke keuzes. Of meerdere organisaties moeten samen verder, maar het blijft bij overleggen.",
    "intro": "In een praktijklab werken de mensen die het vraagstuk kennen samen aan een oplossing. Geen presentatie waar je naar luistert, maar een werkplaats waarin je samen iets maakt: spelregels, een ontwerp, een keuze. Wie meedoet, maakt het onderweg eigen.",
    "jeKrijgt": [
      "Gedeelde spelregels of uitgangspunten",
      "Gezamenlijke keuzes en een besluitagenda met eigenaren",
      "Waar passend: een ontwerp, prototype of pilotopzet"
    ],
    "zoWerkIk": [
      "Een kaartspel om kansen en risico’s te beoordelen",
      "Een proceswand om een keten zichtbaar te maken",
      "Scenario’s vergelijken en samen spelregels formuleren",
      "Een pilot ontwerpen of een prototype testen"
    ],
    "casesIntro": "Werkplaatsen met meerdere partijen leidde ik eerder in de zorg en het hoger onderwijs.",
    "cases": [
      "balans-flex-vast",
      "viazorg-flexplatform",
      "moodle-rbs"
    ],
    "ondertitel": "Samen uitzoeken, maken en beoordelen",
    "seo": "In een praktijklab werken de mensen die het vraagstuk kennen samen aan een oplossing. Laagdrempelige instap, ook met meerdere organisaties, met het AISA-kaartspel bij AI-vraagstukken."
  },
  {
    "slug": "leermodule-op-maat",
    "domein": "leren",
    "naam": "Leermodule op maat",
    "groep": "Leren en ontwikkelen",
    "fasen": [
      "ontwerp",
      "ontwikkel"
    ],
    "kort": "Een leerroute die aansluit op werk en competentiekader",
    "vraag": "Er is een beroepsprofiel of competentiekader, maar nog geen leerroute die daar echt op aansluit. Of er is een standaardcursus, maar die past niet bij jullie werk.",
    "intro": "Ik vertaal beroepsprofielen, competentiekaders en leeruitkomsten naar samenhangende leerroutes: inhoud, activiteiten en beoordeling in één ontwerp, ingericht in je leeromgeving en zo nodig begeleid in de uitvoering.",
    "jeKrijgt": [
      "Leeruitkomsten, leeractiviteiten en beoordeling in samenhang",
      "Een uitvoerbare leerlijn",
      "Inrichting in je leeromgeving",
      "Op verzoek: begeleiding en evaluatie van de eerste uitvoering"
    ],
    "zoWerkIk": [
      "Vertrekken vanuit het profiel en de praktijk van de doelgroep",
      "Ontwerpen met docenten of opleiders, met AI als ontwerphulp en menselijke toets",
      "Testen, bijstellen en overdragen"
    ],
    "casesIntro": "Leerroutes en leeromgevingen ontwierp en richtte ik eerder in voor hogescholen.",
    "cases": [
      "hz-plj",
      "moodle-rbs"
    ],
    "ondertitel": "Een leerroute die aansluit op werk en competentiekader",
    "seo": "Een leermodule op maat, ontworpen vanuit je beroepsprofiel of competentiekader, gebouwd in je eigen leeromgeving en begeleid in de uitvoering."
  },
  {
    "slug": "ai-bekwaamheid",
    "domein": "leren",
    "naam": "AI-bekwaamheid",
    "groep": "Leren en ontwikkelen",
    "fasen": [
      "ontwikkel"
    ],
    "kort": "AI-geletterdheid per rol, zoals de AI Act vraagt",
    "vraag": "Iedereen heeft een AI-training gehad of een e-learning afgevinkt, maar in het werk verandert weinig. Of de Copilot-licenties zijn er, maar niemand weet goed waarvoor.",
    "intro": "Sinds februari 2025 moeten organisaties die AI inzetten zorgen dat hun mensen voldoende AI-geletterd zijn. Een algemene e-learning landt zelden in het werk. Ik werk met praktijklabs per rolcluster: wat moet een HR-adviseur, docent, beleidsmedewerker of teamleider kunnen, hoe oefen je dat met eigen werksituaties, en hoe leg je vast dat het gebeurt.",
    "jeKrijgt": [
      "Een bekwaamheidsprofiel per rolcluster: wat moet deze rol met AI kunnen en beoordelen?",
      "Praktijklabs die aansluiten op het eigen werk, met echte taken en echte twijfels",
      "Borging: hoe bekwaamheid wordt bijgehouden, opgefrist en aantoonbaar gemaakt"
    ],
    "zoWerkIk": [
      "Bepalen welke rollen wat moeten kunnen, vanuit het werk en de risico’s die erbij horen.",
      "Oefenen met eigen werksituaties, inclusief onjuiste output, gevoelige gegevens en twijfel.",
      "Vastleggen hoe bekwaamheid wordt bijgehouden, zodat je kunt laten zien wat je doet."
    ],
    "casesIntro": "Bekwaamheid ontwikkelen én aantoonbaar maken deed ik eerder in de zorg en het onderwijs.",
    "cases": [
      "hz-plj",
      "corpio",
      "addventure"
    ],
    "ondertitel": "AI-geletterdheid per rol, zoals de AI Act vraagt",
    "seo": "AI-geletterdheid per rol in plaats van een algemene training: praktijklabs met eigen werksituaties en borging in leren en registratie."
  },
  {
    "slug": "ontwerp-en-ontwikkeling",
    "domein": "tech",
    "naam": "Ontwerp en ontwikkeling",
    "groep": "Digitale platforms",
    "fasen": [
      "ontwerp",
      "ontwikkel"
    ],
    "kort": "Samen een platform of hulpmiddel kiezen en inrichten",
    "vraag": "We willen samen een platform, maar wat hebben we eigenlijk nodig, en van wie is het?",
    "intro": "Ik help organisaties, ook samen, om scherp te krijgen wat een platform moet doen, routes te vergelijken en de gekozen oplossing in te richten. Met aandacht voor koppelingen, eigendom en zeggenschap. Ik ben aan geen leverancier gebonden.",
    "jeKrijgt": [
      "Samenwerkingsafspraken, een pakket van eisen en scenario’s",
      "Een vergelijking van platformroutes, inclusief businesscase waar nodig",
      "Inrichting en koppelingen met bestaande systemen"
    ],
    "zoWerkIk": [
      "Eerst de bestaande omgeving en werkprocessen in beeld",
      "Samen met gebruikers en leveranciers ontwerpen",
      "Stapsgewijs inrichten en testen"
    ],
    "casesIntro": "Platforms ontwierp en richtte ik eerder in, vaak voor meerdere organisaties tegelijk.",
    "cases": [
      "zorgwise",
      "corpio",
      "moodle-rbs",
      "viazorg-flexplatform"
    ],
    "ondertitel": "Samen een platform of hulpmiddel kiezen en inrichten",
    "seo": "Samen scherp krijgen wat een platform of hulpmiddel moet doen, routes vergelijken en de gekozen oplossing inrichten, ook als meerdere organisaties hem delen."
  },
  {
    "slug": "implementatie",
    "domein": "org",
    "naam": "Implementatie",
    "groep": "Digitale platforms",
    "fasen": [
      "ontwikkel"
    ],
    "kort": "Van gekozen oplossing naar werkende praktijk",
    "vraag": "Er ligt een plan of een platform, maar het komt niet van de grond.",
    "intro": "Implementatie gaat om meer dan techniek: werkprocessen, rollen, kennisoverdracht en een eigenaar die het na de projectfase overneemt. Zeker als meerdere organisaties een platform delen, zonder hiërarchie tussen hen.",
    "jeKrijgt": [
      "Ingerichte processen en werkafspraken",
      "Werkende koppelingen en registraties",
      "Een eigenaar en overdracht",
      "Borging in de reguliere cyclus"
    ],
    "zoWerkIk": [
      "Werkprocessen harmoniseren met de betrokken organisaties",
      "Koppelingen en registraties laten werken",
      "Kennis overdragen en tactisch verankeren"
    ],
    "casesIntro": "Implementaties die bleven werken na de projectfase.",
    "cases": [
      "corpio",
      "moodle-rbs",
      "quarterly-review",
      "green-key"
    ],
    "ondertitel": "Van gekozen oplossing naar werkende praktijk",
    "seo": "Van gekozen oplossing naar werkende praktijk: werkprocessen, rollen, koppelingen, kennisoverdracht en een eigenaar die het na de projectfase overneemt."
  },
  {
    "slug": "governance-en-evaluatie",
    "domein": "org",
    "naam": "Governance en evaluatie",
    "groep": "Digitale platforms",
    "fasen": [
      "sturen"
    ],
    "kort": "Evaluatie van platforms, samenwerkingen en AI-pilots",
    "vraag": "Een programma, platform, samenwerking of AI-pilot loopt al een tijdje, maar wat levert het op, en hoe nu verder?",
    "intro": "Een evaluatie met handelingsperspectief: niet alleen een oordeel, maar ook wat er nu besloten moet worden. Doorgaan, bijsturen, opschalen of stoppen. Daarna richt ik waar nodig governance in die het besturen mogelijk maakt. Omdat ik geen platform, model of licentie verkoop, evalueer ik zonder eigen belang.",
    "jeKrijgt": [
      "Een evaluatie met besluitadvies",
      "Waar nodig: een governancemodel en rapportagekader",
      "Een reviewritme, zodat de volgende evaluatie geen verrassing is"
    ],
    "zoWerkIk": [
      "Meerdere bronnen combineren: data, interviews, observaties en producten van deelnemers",
      "Bevindingen vertalen naar besluitpunten",
      "Governance afstemmen op de sturing die er al is"
    ],
    "casesIntro": "Programma’s en platforms evalueerde ik eerder voor onder meer TU Delft, OCW en Kennisnet.",
    "cases": [
      "urway",
      "delft-ocw",
      "stad-esch",
      "heineken"
    ],
    "ondertitel": "Evaluatie van platforms, samenwerkingen en AI-pilots",
    "seo": "Onafhankelijke evaluatie van platforms, samenwerkingen en AI-pilots, met een besluit als uitkomst: doorgaan, bijsturen, opschalen of stoppen."
  }
];

export const aanbodBySlug = Object.fromEntries(aanbod.map(a => [a.slug, a])) as Record<string, AanbodItem>;
