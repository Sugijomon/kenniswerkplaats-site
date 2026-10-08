// Vraagstukken: de instap van de site. Elk vraagstuk verwijst naar één aanbodpagina.
// `home: true` = tegel op de voorpagina (Herken je dit?).

export type Icoon = 'chip' | 'search' | 'doc' | 'rocket' | 'people' | 'target' | 'link' | 'layers' | 'chart' | 'book' | 'anchor';

export interface Vraagstuk {
  id: string;
  titel: string;
  tekst: string;
  icoon: Icoon;
  aanbod: string;
  home?: boolean;
}

export const vraagstukken: Vraagstuk[] = [
  {
    id: 'shadow-ai',
    titel: 'Allerlei AI-tools',
    tekst: 'Medewerkers gebruiken allerlei AI-tools, maar niemand heeft overzicht.',
    icoon: 'chip',
    aanbod: 'ai-foto',
    home: true,
  },
  {
    id: 'grip-op-ai',
    titel: 'Weinig grip op AI',
    tekst: 'Er zijn losse afspraken, maar geen eigenaar en geen ritme.',
    icoon: 'search',
    aanbod: 'ai-op-orde',
    home: true,
  },
  {
    id: 'ai-act',
    titel: 'De AI Act',
    tekst: 'De AI-verordening vraagt om afspraken en AI-geletterdheid. Waar begin je?',
    icoon: 'doc',
    aanbod: 'ai-op-orde',
    home: true,
  },
  {
    id: 'losse-pilots',
    titel: 'Losse pilots',
    tekst: 'Er lopen proeven, maar nog geen gezamenlijke keuzes.',
    icoon: 'rocket',
    aanbod: 'praktijklab',
    home: true,
  },
  {
    id: 'ai-in-hr',
    titel: 'AI in HR',
    tekst: 'AI raakt werving, beoordeling en ontwikkeling, zonder duidelijke spelregels.',
    icoon: 'people',
    aanbod: 'grip-op-ai-in-hr',
    home: true,
  },
  {
    id: 'copilot',
    titel: 'Copilot zonder resultaat',
    tekst: 'De licenties zijn er, de training is gegeven, maar het werk verandert nauwelijks.',
    icoon: 'target',
    aanbod: 'ai-bekwaamheid',
    home: true,
  },
  {
    id: 'samenwerken',
    titel: 'Samenwerken',
    tekst: 'Meerdere organisaties moeten tot één aanpak komen.',
    icoon: 'link',
    aanbod: 'praktijklab',
  },
  {
    id: 'samen-een-platform',
    titel: 'Samen een platform',
    tekst: 'We willen een gedeeld platform, maar wat hebben we nodig en van wie is het?',
    icoon: 'layers',
    aanbod: 'ontwerp-en-ontwikkeling',
  },
  {
    id: 'platform-opbrengst',
    titel: 'Wat levert het op?',
    tekst: 'Een programma of platform loopt al een tijdje. Doorgaan, bijsturen of stoppen?',
    icoon: 'chart',
    aanbod: 'governance-en-evaluatie',
  },
  {
    id: 'leermodule',
    titel: 'Leermodule op maat',
    tekst: 'Er is een competentiekader, maar nog geen leerroute die erop aansluit.',
    icoon: 'book',
    aanbod: 'leermodule-op-maat',
  },
  {
    id: 'borging',
    titel: 'Het komt niet van de grond',
    tekst: 'Er ligt een plan, maar het wordt geen onderdeel van het gewone werk.',
    icoon: 'anchor',
    aanbod: 'implementatie',
  },
];
