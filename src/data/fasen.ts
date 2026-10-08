// De vier fasen van een traject. Elke aanbodpagina en elke case hangt hieraan.
// Een traject kan bij elke fase beginnen; fase 4 voedt weer fase 1.

export type FaseKey = 'zicht' | 'ontwerp' | 'ontwikkel' | 'sturen';

export interface Fase {
  key: FaseKey;
  nr: number;
  naam: string;
  vraag: string;
  tekst: string;
}

export const fasen: Fase[] = [
  {
    key: 'zicht',
    nr: 1,
    naam: 'Zicht krijgen',
    vraag: 'Wat speelt er echt?',
    tekst:
      'Eerst vaststellen wat er feitelijk gebeurt: gebruik, knelpunten, belangen en kansen. Soms blijkt de oorspronkelijke vraag niet de juiste.',
  },
  {
    key: 'ontwerp',
    nr: 2,
    naam: 'Ontwerpen',
    vraag: 'Wat gaan we doen?',
    tekst:
      'Samen met de betrokkenen richting en werking ontwerpen: scenario’s, kaders, processen, spelregels of een pilot.',
  },
  {
    key: 'ontwikkel',
    nr: 3,
    naam: 'Ontwikkelen',
    vraag: 'Hoe wordt het werkende praktijk?',
    tekst:
      'Van ontwerp naar werkende praktijk: inrichten, bouwen, koppelen, invoeren en borgen in het gewone werk.',
  },
  {
    key: 'sturen',
    nr: 4,
    naam: 'Sturen & evalueren',
    vraag: 'Blijft het werken, en wat levert het op?',
    tekst:
      'Governance, eigenaarschap en een vast ritme, plus evaluatie die uitmondt in een besluit: doorgaan, bijsturen, opschalen of stoppen.',
  },
];

export const faseByKey = Object.fromEntries(fasen.map((f) => [f.key, f])) as Record<FaseKey, Fase>;
