import type { Domein } from './domeinen';

// Vraagstukken: de instap van de site. Elk vraagstuk verwijst naar één aanbodpagina.
// `home: true` = tegel op de voorpagina (Herken je dit?).

export type Icoon = 'chip' | 'search' | 'doc' | 'rocket' | 'people' | 'target' | 'link' | 'layers' | 'chart' | 'book' | 'anchor';

export interface Vraagstuk {
  id: string;
  domein: Domein;
  titel: string;
  tekst: string;
  icoon: Icoon;
  aanbod: string;
  home?: boolean;
  homeTekst?: string;
  groep: string;
}

export const vraagstukken: Vraagstuk[] = [
  {
    "id": "shadow-ai",
    "domein": "tech",
    "titel": "Allerlei AI-tools",
    "tekst": "Medewerkers gebruiken allerlei AI-tools, maar niemand weet precies wat, waarvoor en met welke gegevens.",
    "icoon": "chip",
    "aanbod": "ai-foto",
    "groep": "Verantwoord werken met AI",
    "home": true,
    "homeTekst": "Medewerkers gebruiken allerlei AI-tools, maar niemand weet precies wat, waarvoor en met welke gegevens."
  },
  {
    "id": "grip-op-ai",
    "domein": "org",
    "titel": "Wel beleid, geen grip",
    "tekst": "Er zijn losse afspraken over AI, maar geen eigenaar, geen register en geen ritme.",
    "icoon": "search",
    "aanbod": "ai-op-orde",
    "groep": "Verantwoord werken met AI",
    "home": true,
    "homeTekst": "Er zijn losse afspraken over AI, maar geen eigenaar, geen register en geen ritme."
  },
  {
    "id": "ai-act",
    "domein": "tech",
    "titel": "De AI Act",
    "tekst": "De AI-verordening vraagt om afspraken en AI-geletterdheid. Waar begin je?",
    "icoon": "doc",
    "aanbod": "ai-foto",
    "groep": "Verantwoord werken met AI",
    "home": true,
    "homeTekst": "De AI-verordening vraagt om afspraken en AI-geletterdheid. Waar begin je zonder dat het een papieren exercitie wordt?"
  },
  {
    "id": "losse-pilots",
    "domein": "leren",
    "titel": "Losse pilots",
    "tekst": "Afdelingen experimenteren elk op hun eigen manier, maar er zijn geen gezamenlijke keuzes.",
    "icoon": "rocket",
    "aanbod": "praktijklab",
    "groep": "Verantwoord werken met AI",
    "home": true,
    "homeTekst": "Afdelingen experimenteren elk op hun eigen manier, maar er zijn geen gezamenlijke keuzes."
  },
  {
    "id": "ai-in-hr",
    "domein": "tech",
    "titel": "AI in HR",
    "tekst": "AI raakt werving, beoordeling en ontwikkeling, zonder duidelijke spelregels.",
    "icoon": "people",
    "aanbod": "grip-op-ai-in-hr",
    "groep": "Verantwoord werken met AI",
    "home": true,
    "homeTekst": "AI raakt werving, beoordeling en ontwikkeling, zonder duidelijke spelregels."
  },
  {
    "id": "copilot",
    "domein": "leren",
    "titel": "Copilot zonder resultaat",
    "tekst": "De licenties zijn er, de training is gegeven, maar het werk verandert nauwelijks.",
    "icoon": "target",
    "aanbod": "ai-bekwaamheid",
    "groep": "Leren en ontwikkelen",
    "home": true,
    "homeTekst": "De licenties zijn er, de training is gegeven, maar het werk verandert nauwelijks."
  },
  {
    "id": "ai-geletterdheid",
    "domein": "leren",
    "titel": "AI-geletterdheid afvinken",
    "tekst": "Iedereen moet AI-geletterd zijn, maar een e-learning voelt als afvinken.",
    "icoon": "book",
    "aanbod": "ai-bekwaamheid",
    "groep": "Leren en ontwikkelen"
  },
  {
    "id": "leermodule",
    "domein": "leren",
    "titel": "Leermodule op maat",
    "tekst": "Er is een beroepsprofiel of competentiekader, maar nog geen leerroute die erop aansluit.",
    "icoon": "book",
    "aanbod": "leermodule-op-maat",
    "groep": "Leren en ontwikkelen"
  },
  {
    "id": "samenwerken",
    "domein": "leren",
    "titel": "Samen tot één aanpak",
    "tekst": "Meerdere organisaties moeten samen tot één aanpak komen, maar het blijft bij overleggen.",
    "icoon": "link",
    "aanbod": "praktijklab",
    "groep": "Samenwerken en digitale platforms"
  },
  {
    "id": "samen-een-platform",
    "domein": "tech",
    "titel": "Samen een platform",
    "tekst": "We willen een gedeeld platform, maar wat hebben we nodig en van wie is het?",
    "icoon": "layers",
    "aanbod": "ontwerp-en-ontwikkeling",
    "groep": "Samenwerken en digitale platforms"
  },
  {
    "id": "borging",
    "domein": "org",
    "titel": "Het komt niet van de grond",
    "tekst": "Er ligt een plan of platform, maar het wordt geen onderdeel van het gewone werk.",
    "icoon": "anchor",
    "aanbod": "implementatie",
    "groep": "Samenwerken en digitale platforms"
  },
  {
    "id": "platform-opbrengst",
    "domein": "org",
    "titel": "Wat levert het op?",
    "tekst": "Een programma, platform of AI-pilot loopt al een tijdje. Doorgaan, bijsturen of stoppen?",
    "icoon": "chart",
    "aanbod": "governance-en-evaluatie",
    "groep": "Samenwerken en digitale platforms"
  }
];
