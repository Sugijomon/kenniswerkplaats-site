// Praktijkcases, gebaseerd op het master-cv (v7).
// Regel: vul een fase alleen als de case die aantoonbaar bewijst.
//   2 = bewezen, 1 = gedeeltelijk, 0 = niet.
// De kaart toont eerst het vraagstuk; de organisatie staat onderaan.

import type { FaseKey } from './fasen';

export interface Case {
  id: string;
  vraagstuk: string;
  organisatie: string;
  domein: string;
  periode: string;
  rol: string;
  fasen: Record<FaseKey, 0 | 1 | 2>;
  aanpak: string;
  opbrengst: string;
  tekst: string;
}

export const cases: Case[] = [
  // ── Zicht krijgen ─────────────────────────────────────────────
  {
    id: 'addventure',
    vraagstuk: 'Wat doen docenten echt met digitale tools?',
    organisatie: 'Rotterdam Business School · Addventure',
    domein: 'Onderwijs · digitaal',
    periode: '2011–2016',
    rol: 'Verkenner',
    fasen: { zicht: 2, ontwerp: 1, ontwikkel: 0, sturen: 1 },
    aanpak: 'Docentensurvey (62 respondenten, 84% respons) · toolinventarisatie · stakeholderanalyse',
    opbrengst: 'Advies over selectiecriteria, governance, ondersteuning en professionalisering',
    tekst:
      'In een curriculuminnovatie met circa 80 docenten bracht ik in kaart welke digitale tools er feitelijk werden gebruikt, naast de centrale systemen. Inclusief privacy, security, auteursrecht en beheer.',
  },
  {
    id: 'enexis',
    vraagstuk: 'Hoe staat het met kennisdelen, en wat betekent dat voor HR?',
    organisatie: 'Enexis',
    domein: 'Organisatie · HR',
    periode: '2007–2010',
    rol: 'Verkenner',
    fasen: { zicht: 2, ontwerp: 0, ontwikkel: 0, sturen: 0 },
    aanpak: 'Kennismanagementscan · stakeholderinterviews',
    opbrengst: 'Managementrapport over kennismanagement en toekomstbestendig HR-beleid',
    tekst:
      'Een scan van hoe kennis in de organisatie werd gedeeld en vastgehouden, met interviews bij de belangrijkste betrokkenen.',
  },
  {
    id: 'rode-kruis',
    vraagstuk: 'Hoe zetten we onze online kanalen in, en wat werkt?',
    organisatie: 'Nederlandse Rode Kruis',
    domein: 'Organisatie · digitaal',
    periode: '2007–2010',
    rol: 'Verkenner',
    fasen: { zicht: 2, ontwerp: 2, ontwikkel: 0, sturen: 1 },
    aanpak: 'Analyse van corporate website, afdelingssites en socialemediagebruik · doelgroepsegmentatie',
    opbrengst: 'Onlinestrategie en managementdashboard met KPI’s',
    tekst:
      'Van een analyse van wat er online al gebeurde naar een strategie per doelgroep en een dashboard om erop te sturen.',
  },
  {
    id: 'zorgwise',
    vraagstuk: 'Welk platform vervangt dit, of is dat de verkeerde vraag?',
    organisatie: 'Viazorg · regionaal leerplatform Zorgwise',
    domein: 'Zorg · platform',
    periode: '2024',
    rol: 'Verkenner en evaluator',
    fasen: { zicht: 2, ontwerp: 2, ontwikkel: 0, sturen: 1 },
    aanpak: 'Reconstructie van de bestaande omgeving · vergelijking van vier platformroutes · analyse van koppelingen',
    opbrengst: 'Rapport, bestuurssamenvatting en advies voor een regionaal zorgportfolio',
    tekst:
      'Een onafhankelijke verkenning tijdens een geschil met de leverancier. De vraag verschoof van “welk platform” naar “hoe verbind je voorzieningen zonder nieuwe silo’s”.',
  },

  // ── Ontwerpen ─────────────────────────────────────────────────
  {
    id: 'viazorg-flexplatform',
    vraagstuk: 'Hoe komen tien zorgorganisaties tot één werkbare aanpak?',
    organisatie: 'Viazorg · Deltaplan 2.0',
    domein: 'Zorg · regionale samenwerking',
    periode: '2022–2024',
    rol: 'Kwartiermaker · werkplaatsleider',
    fasen: { zicht: 2, ontwerp: 2, ontwikkel: 0, sturen: 1 },
    aanpak: 'Achttien maanden maandelijkse ontwikkelsessies · procesontwerp · businesscase en financiële scenario’s',
    opbrengst: 'Beleidskaders, werkprocessen, pakket van eisen, implementatieplan en pilotopzet',
    tekst:
      'Binnen een maand bleek de aanname onder de opdracht niet houdbaar. Ik bracht die herziening in bij bestuur en stuurgroep en werkte met acht tot tien organisaties een nieuwe route uit.',
  },
  {
    id: 'balans-flex-vast',
    vraagstuk: 'Hoe kom je van een gedeeld probleem naar gezamenlijke bouwstenen?',
    organisatie: 'Viazorg · Balans flex/vast',
    domein: 'Zorg · arbeidsmarkt',
    periode: '2023–2024',
    rol: 'Werkplaatsleider',
    fasen: { zicht: 2, ontwerp: 2, ontwikkel: 0, sturen: 0 },
    aanpak: 'Reeks van vijf regionale sessies · arbeidsmarktdata van het CBS',
    opbrengst: 'Gedeelde probleemanalyse en bouwstenen voor contractvormen, roosteren en werkgeverschap',
    tekst:
      'Vijf opeenvolgende sessies met operationeel en tactisch verantwoordelijken, opgebouwd van gedeelde analyse naar bouwstenen en toepassing. Het thema staat nog op de regionale agenda.',
  },
  {
    id: 'hz-plj',
    vraagstuk: 'Hoe vertaal je een landelijk beroepsprofiel naar uitvoerbaar onderwijs?',
    organisatie: 'HZ University of Applied Sciences',
    domein: 'Onderwijs · leren',
    periode: '2024–2025',
    rol: 'Learning designer',
    fasen: { zicht: 0, ontwerp: 2, ontwikkel: 1, sturen: 0 },
    aanpak: 'Leeruitkomsten, activiteiten en beoordeling in samenhang · GenAI als ontwerpcopilot, met menselijke toetsing',
    opbrengst: 'Twee Personal Learning Journeys (10 en 5 EC)',
    tekst:
      'Twee nieuwe leerroutes voor International Business, vanuit het landelijk beroepsprofiel en competentiekader. Generatieve AI hielp bij sequencing en ideatie; de onderwijskundige toets bleef bij mij.',
  },

  // ── Ontwikkelen ───────────────────────────────────────────────
  {
    id: 'corpio',
    vraagstuk: 'Hoe krijg je één scholingsplatform werkend voor twee organisaties zonder hiërarchie?',
    organisatie: 'De huisartsenconnectie & Nucleuszorg',
    domein: 'Zorg · platform',
    periode: '2023–2024',
    rol: 'Implementatiepartner',
    fasen: { zicht: 0, ontwerp: 1, ontwikkel: 2, sturen: 2 },
    aanpak: 'Selectie en inrichting van Corpio · koppelingen met AFAS en PE-online/GAIA · harmonisatie van werkprocessen',
    opbrengst: 'Platform voor circa 1.500 professionals en 200 cursussen per jaar, met geautomatiseerde accreditatieregistratie',
    tekst:
      'Deelname en behaalde accreditatiepunten gaan automatisch naar de kwaliteitsregisters van de beroepsgroepen. Daarmee is aantoonbaar dat professionals aan hun vakbekwaamheidseisen voldoen.',
  },
  {
    id: 'moodle-rbs',
    vraagstuk: 'Hoe richt je een leeromgeving in die door meerdere hogescholen gedragen wordt?',
    organisatie: 'Rotterdam Business School · Circular Economy in the Cloud',
    domein: 'Onderwijs · platform',
    periode: '2011–2016',
    rol: 'Pilot owner · onderwijsontwerper',
    fasen: { zicht: 0, ontwerp: 2, ontwikkel: 2, sturen: 1 },
    aanpak: 'Twee Moodle-pilots · inrichting van de leeromgeving · contentmigratie · evaluatie van de gegevensstroom',
    opbrengst: 'Een minor van 30 EC met drie hogescholen en een vak voor circa 250 studenten',
    tekst:
      'Van cursusstructuur, rollen en toetsen tot hosting, ondersteuning en de koppeling met het studentinformatiesysteem.',
  },
  {
    id: 'quarterly-review',
    vraagstuk: 'Hoe wordt een nieuw kwaliteitsinstrument onderdeel van de gewone cyclus?',
    organisatie: 'HZ University of Applied Sciences · Quarterly Review',
    domein: 'Onderwijs · kwaliteit',
    periode: '2017–2022',
    rol: 'Co-ontwikkelaar',
    fasen: { zicht: 0, ontwerp: 2, ontwikkel: 2, sturen: 2 },
    aanpak: 'Co-ontwikkeling in een projectteam van vier · pilot met acht opleidingsteams · iteratief bijgesteld',
    opbrengst: 'Opgenomen in de reguliere kwaliteitszorgcyclus van het domein BHV',
    tekst:
      'Van een eenvoudige verbinding tussen team en beleid naar een integraal kwaliteitsmodel, gebouwd op feedback van de teams die ermee werkten.',
  },
  {
    id: 'green-key',
    vraagstuk: 'Hoe maak je duurzaamheid onderdeel van het gewone werk?',
    organisatie: 'Hotels, restaurants en festivals · Green Key',
    domein: 'Duurzaamheid · hospitality',
    periode: '2010–2011',
    rol: 'Implementatiepartner',
    fasen: { zicht: 0, ontwerp: 0, ontwikkel: 2, sturen: 2 },
    aanpak: 'Van eisen en ambities naar werkprocessen en bewijsvoering',
    opbrengst: 'Begeleiding naar de Green Key-duurzaamheidscertificering',
    tekst: 'Vanuit mijn eigen bedrijf begeleidde ik hospitalitybedrijven naar certificering.',
  },

  // ── Sturen & evalueren ────────────────────────────────────────
  {
    id: 'heineken',
    vraagstuk: 'Hoe houd je een internationaal merkplatform bestuurbaar?',
    organisatie: 'Heineken International · Brand Portal',
    domein: 'Organisatie · platform',
    periode: '2007–2010',
    rol: 'Adviseur',
    fasen: { zicht: 1, ontwerp: 2, ontwikkel: 0, sturen: 2 },
    aanpak: 'Analyse van werkprocessen · handboek · communicatie- en activatieplan',
    opbrengst: 'Governancemodel en managementrapportagekader',
    tekst: 'Governance rond een bestaand platform: wie beslist wat, en hoe zie je of het werkt.',
  },
  {
    id: 'urway',
    vraagstuk: 'Werkt een online leeromgeving voor jongeren die buiten het onderwijs zijn geraakt?',
    organisatie: 'TU Delft · UrWay.nl (OCW-pilot)',
    domein: 'Onderwijs · evaluatie',
    periode: '2008',
    rol: 'Onafhankelijk evaluator',
    fasen: { zicht: 1, ontwerp: 0, ontwikkel: 0, sturen: 2 },
    aanpak: 'Casestudies · triangulatie van loggegevens, interviews, observaties en deelnemersproducten',
    opbrengst: 'Evaluatierapport met conclusies over pilotdoelen en landelijke opschaling',
    tekst:
      'Een kwalitatieve evaluatie van leereffecten op vijf gebieden en van het organisatiemodel, de begeleiding en de techniek.',
  },
  {
    id: 'delft-ocw',
    vraagstuk: 'Wat levert open onderwijsmateriaal op voor het bedrijfsleven?',
    organisatie: 'TU Delft · ministerie van OCW',
    domein: 'Onderwijs · evaluatie',
    periode: '2007–2010',
    rol: 'Evaluator',
    fasen: { zicht: 1, ontwerp: 0, ontwikkel: 0, sturen: 2 },
    aanpak: 'Businessevaluatie op basis van ervaringen bij onder meer Philips, Shell en Texas Instruments',
    opbrengst: 'Businessevaluatie van Delft OpenCourseWare',
    tekst: 'Een evaluatie van wat Delft OpenCourseWare opleverde, gezien vanuit de bedrijven die het gebruikten.',
  },
  {
    id: 'stad-esch',
    vraagstuk: 'Wat levert één laptop per leerling werkelijk op?',
    organisatie: 'Kennisnet · Stad+Esch',
    domein: 'Onderwijs · digitaal',
    periode: '2007–2010',
    rol: 'Onderzoeker',
    fasen: { zicht: 2, ontwerp: 0, ontwikkel: 0, sturen: 2 },
    aanpak: 'Interviews · lesobservaties · enquête · deskresearch',
    opbrengst: 'Onderzoeksrapport “An Apple a day… Een laptop per leerling” (57 p.)',
    tekst: 'Onderzoek naar implementatie en effecten, met aandacht voor onderwijsvisie, leiderschap en digitale didactiek.',
  },
];

export const caseById = Object.fromEntries(cases.map((c) => [c.id, c])) as Record<string, Case>;
