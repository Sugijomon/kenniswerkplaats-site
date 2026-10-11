const impuls = { naam: 'Impuls Zeeland', href: 'https://www.impulszeeland.nl/investeren-in-zeeland' };
const hca = { naam: 'Zeeland in Stroomversnelling: arbeidsmarkt', href: 'https://www.zeeland.nl/subsidie-aanvragen/overzicht-subsidieregelingen/zis-human-capital-agenda' };
const slim = { naam: 'SLIM: leren en ontwikkelen in het mkb', href: 'https://www.uitvoeringvanbeleidszw.nl/subsidies-en-regelingen/algemene-informatie/slim-mkb-individuele-aanvragen--samenwerkingsverbanden-2025---2029/aanvraagprocedure-en-aanvraagcriteria' };
const klik = { naam: 'Klikopmorgen: voorwaarden voor mkb-support', href: 'https://www.klikopmorgen.nl/en/zo-werkt-het' };
const mit = { naam: 'MIT Zuid', href: 'https://www.stimulus.nl/mit-zuid/' };
const routes = {
  impuls: 'Impuls Zeeland kan Zeeuwse ondernemers helpen bij het vinden van passende financiering voor externe advisering. Adviesvouchers zijn gekoppeld aan specifieke programma’s en voorwaarden; ze zijn niet voor ieder bedrijf of iedere opdracht beschikbaar.',
  hca: 'Samenwerkingsverbanden in Zeeland kunnen kijken naar Zeeland in Stroomversnelling voor innovatieve oplossingen voor krapte op de arbeidsmarkt, de voortzetting van de HCA-openstelling. Dit vraagt onder meer minstens drie partijen, waaronder een onderneming en een kennispartner, en een project dat bij de arbeidsmarktdoelen en overige voorwaarden past.',
  slim: 'Voor structureel leren en ontwikkelen in het mkb kan de SLIM-regeling soms passen, bijvoorbeeld voor het ontwikkelen van een leer- en ontwikkelmethode. Een losse workshop, cursus of reguliere platforminvoering komt niet automatisch in aanmerking.',
  klik: 'Mkb-maakbedrijven in de deelnemende sectoren in Zuid-Nederland kunnen via Klikopmorgen ondersteuning bij digitalisering en AI verkennen. Een coach beoordeelt met je of het bedrijf, de vraag en de voorgestelde expert aan de voorwaarden voldoen.',
  mit: 'MIT Zuid is gericht op de haalbaarheid en ontwikkeling van innovatieve producten, processen of diensten met innovatierisico. Gewone platformselectie of invoering valt daar niet automatisch onder.',
};
export const financiering: Record<string, { teksten: string[]; bronnen: { naam: string; href: string }[] }> = {
  'ai-foto': { teksten: [routes.impuls, routes.klik], bronnen: [impuls,klik] },
  'grip-op-ai-in-hr': { teksten: [routes.impuls], bronnen: [impuls] },
  'ai-op-orde': { teksten: [routes.hca,routes.impuls], bronnen: [hca,impuls] },
  'praktijklab': { teksten: [routes.hca,routes.slim], bronnen: [hca,slim] },
  'leermodule-op-maat': { teksten: [routes.slim], bronnen: [slim] },
  'ai-bekwaamheid': { teksten: [routes.slim,routes.hca], bronnen: [slim,hca] },
  'ontwerp-en-ontwikkeling': { teksten: [routes.mit,routes.impuls,routes.hca], bronnen: [mit,impuls,hca] },
  'implementatie': { teksten: [routes.hca,routes.slim], bronnen: [hca,slim] },
  'governance-en-evaluatie': { teksten: ['Voor een zelfstandige evaluatie is niet automatisch een passende subsidie beschikbaar. Als de evaluatie onderdeel is van een subsidiabel project, kijken we eerst of de kosten volgens de betreffende regeling mogen worden meegenomen. In de kennismaking bespreken we de scope en beschikbare middelen.'], bronnen: [] },
};
export const financieringNoot = 'Voorwaarden en openstellingen wisselen. In de kennismaking kijk ik met je mee welke route kan passen. Ik vraag geen subsidie namens je aan en kan geen toekenning garanderen.';
