// Kwaliteitscheck: wordt na `astro build` automatisch uitgevoerd (zie package.json).
// 1. Elk case-id in aanbod.ts bestaat in cases.ts
// 2. Elke vraagstuk-verwijzing in vraagstukken.ts wijst naar een bestaande aanbodpagina
// 3. Geen interne links in de gebouwde site naar niet-bestaande pagina's
// Data worden direct uit src/data/*.ts gelezen (Node 22.18+ kan TypeScript draaien).
// De linkcontrole leest dist/, dus draai eerst `npm run build` als je alleen `npm run check` gebruikt.
// `--data` slaat de linkcontrole over; de build draait die variant vóór `astro build`,
// zodat een kapotte verwijzing een duidelijke melding geeft in plaats van een crash.

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(fileURLToPath(import.meta.url), '..', '..');
const dist = join(root, 'dist');
const fouten = [];

const laad = (naam) => import(pathToFileURL(join(root, 'src/data', naam)).href);
const { aanbod } = await laad('aanbod.ts');
const { cases } = await laad('cases.ts');
const { vraagstukken } = await laad('vraagstukken.ts');
const { domeinen } = await laad('domeinen.ts');

// Elk onderwerp heeft een expliciete kleurrol, los van groep of casesector.
for (const [bestand, items, veld] of [
  ['aanbod.ts', aanbod, 'domein'],
  ['vraagstukken.ts', vraagstukken, 'domein'],
  ['cases.ts', cases, 'kleurDomein'],
]) {
  for (const item of items) {
    if (!Object.hasOwn(domeinen, item[veld])) fouten.push(`${bestand}: ongeldig ${veld} bij "${item.id ?? item.slug}"`);
  }
}

// 1. case-ids
const caseIds = new Set(cases.map((c) => c.id));
for (const a of aanbod) {
  for (const id of a.cases) {
    if (!caseIds.has(id)) fouten.push(`aanbod.ts: "${a.slug}" verwijst naar onbekend case-id "${id}"`);
  }
}

// 2. vraagstuk -> aanbodpagina
const slugs = new Set(aanbod.map((a) => a.slug));
for (const v of vraagstukken) {
  if (!slugs.has(v.aanbod)) fouten.push(`vraagstukken.ts: "${v.id}" verwijst naar onbekende aanbodpagina "${v.aanbod}"`);
}

// 3. interne links in dist/
if (process.argv.includes('--data')) {
  console.log('check: data in orde');
} else if (!existsSync(dist)) {
  fouten.push('dist/ ontbreekt: draai eerst `npm run build` voor de linkcontrole');
} else {
  const html = [];
  const loop = (map) => {
    for (const naam of readdirSync(map)) {
      const pad = join(map, naam);
      if (statSync(pad).isDirectory()) loop(pad);
      else if (naam.endsWith('.html')) html.push(pad);
    }
  };
  loop(dist);

  const bestaat = (pad) => {
    const schoon = decodeURIComponent(pad.replace(/^\/+/, ''));
    const kandidaten = [join(dist, schoon), join(dist, schoon, 'index.html')];
    return kandidaten.some((k) => existsSync(k) && statSync(k).isFile());
  };
  for (const bestand of html) {
    const bron = readFileSync(bestand, 'utf8');
    const paginaUrl = '/' + relative(dist, bestand).replace(/index\.html$/, '');
    for (const m of bron.matchAll(/\s(?:href|src)="([^"]*)"/g)) {
      const url = m[1];
      if (!url || /^(https?:|mailto:|tel:|data:|javascript:)/i.test(url) || url.startsWith('//')) continue;
      const pad = url.split('#')[0].split('?')[0]; // ankers en query's tellen niet mee
      const doel = pad === '' ? paginaUrl : pad.startsWith('/') ? pad : new URL(pad, 'http://x' + paginaUrl).pathname;
      if (!bestaat(doel)) {
        fouten.push(`${paginaUrl}: link naar niet-bestaande pagina "${url}"`);
      }
    }
  }
  console.log(`check: ${html.length} pagina's, ${aanbod.length} aanbodonderdelen, ${cases.length} cases, ${vraagstukken.length} vraagstukken gecontroleerd`);
}

if (fouten.length) {
  console.error(`\ncheck MISLUKT, ${fouten.length} probleem(en):`);
  for (const f of fouten) console.error(`  ✗ ${f}`);
  process.exit(1);
}
if (!process.argv.includes('--data')) console.log('check: alles in orde ✓');
