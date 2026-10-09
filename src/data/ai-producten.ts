// Productinhoud vertaald uit digidactics.nl/ai-in-hr/ en /ai-op-orde/.
// Prijzen, specifieke juridische deadlines en Legal Baseline-branding niet overgenomen.
export interface ProductCard { titel: string; tekst?: string; items?: string[]; marker?: string }
export interface ProductSection { titel: string; label?: string; intro?: string; kaarten: ProductCard[]; kolommen?: 2 | 3 | 4; zacht?: boolean; noot?: string }
export interface ProductVariant extends ProductCard { scope: string; tijd: string; grens?: string; contact: string }
export interface AiProduct {
  slug: string; belofte: string; intro: string; uitleg: string;
  actie: string; voorbeeld?: string;
  schema: { titel: string; items: string[]; uitkomst: string; noot: string };
  herkenning: { titel: string; items: string[]; noot: string };
  secties: ProductSection[];
  varianten: { titel: string; intro: string; items: ProductVariant[]; noot: string };
  scope: string;
  faq: { vraag: string; antwoord: string }[];
  vervolg: string; verwant: string[]; contact: string;
}

export const grip: AiProduct = {
  slug: 'grip-op-ai-in-hr',
  belofte: 'Weten wat er draait. Beslissen wat mag. Kunnen laten zien.',
  intro: 'Met de GRIP-methode maak ik samen met je team concrete AI-toepassingen zichtbaar. We wegen operationele aandachtspunten en leggen toezicht, eigenaarschap en vervolgstappen praktisch vast.',
  uitleg: 'Een compact, besluitgericht traject: voorbereiding, concrete uitwerking en een 30/60/90-uitvoeringsplan. Een werkbare basis voor AI in processen die mensen direct raken.',
  actie: 'Plan een AI-in-HR-check', voorbeeld: 'Voorbeelduitwerking GRIP op AI in HR',
  schema: { titel: 'Betekenisvol toezicht', items: ['Bemenst', 'Bekwaam', 'Bevoegd en bijtijds', 'Bewijsbaar'], uitkomst: 'Een mens die daadwerkelijk kan ingrijpen', noot: 'De vier B’s worden uitgewerkt in het werkproces.' },
  herkenning: { titel: 'Herken je één van deze situaties?', items: [
    'Je ATS, jobboard of recruitmentplatform screent, matcht, rangschikt of beveelt kandidaten aan.',
    'Software verdeelt diensten, taken of werk mede op basis van gegevens over individuele medewerkers.',
    'Scores, voorspellingen of inzichten beïnvloeden beoordeling, ontwikkeling, verzuimbegeleiding of uitstroom.',
    'HR, recruiters of leidinggevenden gebruiken generatieve AI met informatie over mensen.',
    'Je kunt niet direct laten zien wie eigenaar is, hoe toezicht werkt en welke afspraken zijn vastgelegd.',
  ], noot: 'Een keer “ja” of “weet ik niet” is aanleiding om het gebruik nader in kaart te brengen. Niet iedere toepassing is automatisch hoog risico: teksthulp verschilt van kandidaat-ranking, en algemene capaciteitsplanning van individuele taaktoewijzing op basis van gedrag.' },
  secties: [
    { titel: 'De GRIP-methode', label: 'Vier stappen, besluiten met een eigenaar', kolommen: 4, zacht: true, intro: 'Gebruik zichtbaar maken, operationele aandachtspunten wegen, toezicht organiseren en acties vastleggen. De weging is signalering en prioritering, geen juridische classificatie.', kaarten: [
      { marker: 'G', titel: 'Gebruik in kaart', tekst: 'Welke AI wordt formeel, ingebouwd en informeel gebruikt? Wat gebeurt er met de uitkomsten?' },
      { marker: 'R', titel: 'Risico’s wegen', tekst: 'Welke toepassingen vragen basisafspraken, nader onderzoek, specialistische beoordeling of direct ingrijpen?' },
      { marker: 'I', titel: 'Inrichten van toezicht', tekst: 'Wie kijkt mee, met welke kennis, tijd en bevoegdheid om de uitkomst te beoordelen en bijtijds bij te sturen?' },
      { marker: 'P', titel: 'Plannen en borgen', tekst: 'Welke besluiten, eigenaren, acties en bewijsstukken zijn nodig om grip te krijgen en te houden?' },
    ] },
    { titel: 'Vier B’s van betekenisvol toezicht', label: 'Toezicht in de werkpraktijk', kolommen: 2, kaarten: [
      { titel: 'Bemenst', tekst: 'Er is een aanwijsbare verantwoordelijke. Waar continuïteit dat vraagt, is ook vervanging geregeld.' },
      { titel: 'Bekwaam', tekst: 'De toezichthouder begrijpt de toepassing en kan output, fouten en relevante vertekening beoordelen.' },
      { titel: 'Bevoegd en bijtijds', tekst: 'De toezichthouder mag ingrijpen of afwijken, krijgt voldoende tijd en kan handelen zolang dat nog effect heeft.' },
      { titel: 'Bewijsbaar', tekst: 'Relevante controles, afwijkingen, incidenten en besluiten zijn passend terug te zien.' },
    ] },
    { titel: 'Wat je ontvangt', label: 'Vier concrete resultaten', kolommen: 2, zacht: true, intro: 'De documentatie ontstaat uit het gesprek en de genomen besluiten. Open vragen worden expliciet belegd bij de juiste eigenaar of specialist.', kaarten: [
      { titel: 'Overzicht', items: ['AI-in-HR-register: toepassingen, gebruik, eigenaar en status', 'HR-proceskaart: waar AI ingrijpt in de employee journey', 'Use-casekaarten: doel, data, output, impact en open vragen'] },
      { titel: 'Prioriteiten en besluiten', tekst: 'Operationele prioritering en besluiten met eigenaren. Specialistische opvolging wordt expliciet vastgesteld waar dat nodig is.' },
      { titel: 'Afspraken en toezicht', tekst: 'Werk- en toezichtsafspraken volgens de vier B’s: wie kijkt mee, wat mag en wanneer wordt ingegrepen.' },
      { titel: 'Bewijs en vervolg', tekst: 'Een 30/60/90-uitvoeringsplan met managementsamenvatting, bewijsindex en waar relevant een transparantie- en informatiecheck.' },
    ], noot: 'De transparantie- en informatiecheck wordt alleen uitgevoerd waar een onderzochte toepassing kandidaten, medewerkers of andere betrokkenen raakt en een relevante informatie- of transparantievraag speelt.' },
    { titel: 'Waar AI mensen direct raakt', label: 'Voor wie', kaarten: [
      { titel: 'Accountancy en administratie', tekst: 'ATS, AFAS/Nmbrs, Copilot en recruitment in een context waarin verantwoording belangrijk is.' },
      { titel: 'Zakelijke dienstverlening en recruitment', tekst: 'Matching, sourcing, kandidaatpools en bewijs richting opdrachtgevers.' },
      { titel: 'Logistiek en personeelsintensief werk', tekst: 'Roostering, taaktoewijzing, monitoring en medezeggenschap.' },
    ] },
  ],
  varianten: { titel: 'Twee uitvoeringsvormen', intro: 'Dezelfde methode, een andere werkvorm. Indicatieve doorlooptijd: ongeveer drie weken vanaf bevestigde opdracht en scope.', items: [
    { titel: 'Remote Kern', scope: '4–8 deelnemers · online', tijd: 'Twee sessies van 2 uur', contact: 'GRIP Remote Kern', tekst: 'Voor een kernteam van HR, directie, IT/applicatiebeheer en eventueel privacy.', items: ['Use-cases in kaart brengen, prioriteren en de belangrijkste verdiepen', 'Twee besluitgerichte sessies met tussenanalyse en operationele prioritering', 'Documentatieset en overdracht', 'Korte 30-dagencheck na afronding'], grens: 'Maximaal circa 10–12 use-cases registreren en triageren; maximaal 5 prioritaire use-cases verdiepen.' },
    { titel: 'HR-AI Werkplaats', scope: '8–12 deelnemers · op locatie', tijd: 'Werkplaats en 30-dagenreview', contact: 'HR-AI Werkplaats', tekst: 'Voor HR, directie, operations, IT en eventueel de OR die samen tot besluiten en gedragen werkafspraken moeten komen.', items: ['Voorbereide HR-procesplaat, samen aangevuld en gevalideerd', 'Operationele weging en besluiten, met de simulatie “De selectieronde” rond foutieve of scheve AI-output', 'Besluitforum met eigenaren en mandaat', 'Documentatieset, managementbriefing en een 30-dagenreview met statusnotitie'], grens: 'Meerdere perspectieven en gedeeld mandaat; maximaal 8 diepgaand uitgewerkte prioritaire use-cases.' },
  ], noot: 'Diepgaand betekent: outputketen, mensimpact, operationele weging, toezicht volgens de vier B’s, besluit, werkafspraken, eigenaar, bewijsroute en reviewdatum. Overige use-cases krijgen een registratie en vervolgroute. De 30-dagenopvolging hoort bij het product; nieuwe use-cases, volledige herweging en implementatiebegeleiding vallen daarbuiten.' },
  scope: 'GRIP is een inventarisatie-, toezicht- en besluitaanpak voor een begrensde set HR-AI-use-cases. Het levert geen juridisch advies, formele AI Act-classificatie, DPIA, technische audit, security-audit, biasaudit, certificering of compliancegarantie. Waar een concrete toepassing specialistische beoordeling vraagt, leg ik de vraag en route expliciet vast. Een formele juridische beoordeling blijft het werk van een bevoegde jurist met relevante AI- en technologierechtelijke expertise.',
  faq: [
    { vraag: 'Onze leverancier zegt dat de tool compliant is. Zijn we dan klaar?', antwoord: 'Een leveranciersclaim beantwoordt nog niet hoe je organisatie de toepassing feitelijk gebruikt. In GRIP kijken we naar doel, inrichting, gebruikte gegevens, output en de gevolgen in je eigen HR-processen. Juridische vragen worden waar nodig bij een specialist belegd.' },
    { vraag: 'Een mens neemt altijd de eindbeslissing. Is dat genoeg?', antwoord: 'Niet automatisch. Die mens moet de uitkomst kunnen beoordelen, fouten herkennen, voldoende tijd hebben, bevoegd zijn om af te wijken en kunnen ingrijpen zolang dit nog effect heeft. Anders blijft toezicht vooral symbolisch.' },
    { vraag: 'Is iedere vorm van AI in HR hoog risico?', antwoord: 'Niet iedere toepassing is hetzelfde. Teksthulp verschilt van kandidaat-ranking, prestatiebeoordeling en individuele taaktoewijzing. GRIP signaleert en prioriteert operationele aandachtspunten; een formele wettelijke classificatie vraagt specialistische beoordeling.' },
    { vraag: 'Waarom beginnen we nu?', antwoord: 'AI wordt al gebruikt in recruitment, planning, beoordeling en dagelijkse werkzaamheden. Overzicht, eigenaarschap en werkbaar toezicht helpen om besluiten te nemen over die bestaande praktijk. GRIP is niet afhankelijk van één juridische deadline.' },
    { vraag: 'Is dit juridisch advies of certificering?', antwoord: 'Nee. Ik breng gebruik in kaart, structureer operationele aandachtspunten, faciliteer besluiten en help werkafspraken en bewijsstukken vast te leggen. Voor juridische beoordeling, een DPIA, technische audit of biasmeting wordt een passende specialist betrokken.' },
  ],
  vervolg: 'HR hoeft niet de eerste ingang te zijn. Is organisatiebreed onduidelijk waar AI wordt gebruikt, dan kan AI-Foto eerst helpen. Is HR de concrete aanleiding, dan kan GRIP zelfstandig starten. Register, besluiten, werkafspraken en uitvoeringsplan kunnen later worden hergebruikt in AI op Orde. Een specialistische route of geen vervolg kan ook passend zijn.',
  verwant: ['ai-foto', 'ai-op-orde'],
  contact: 'In een korte kennismaking bepalen we of GRIP op AI in HR de juiste ingang is, of dat AI-Foto of een specialistische route eerst meer waarde oplevert.',
};

export const aiOpOrde: AiProduct = {
  slug: 'ai-op-orde',
  belofte: 'Van losse afspraken naar een werkend systeem.',
  intro: 'AI op Orde brengt AI-register, besluiten, werkafspraken, eigenaarschap, toezicht, praktijklabs, leveranciersroutes, bewijs en periodiek onderhoud samen binnen een heldere scope.',
  uitleg: 'Ik richt samen met je organisatie een werkende praktijk in die mensen begrijpen, kunnen toepassen en na overdracht zelf kunnen onderhouden. Een begeleid implementatie- en borgingstraject, zonder verplichte softwarelicentie.',
  actie: 'Plan een scopegesprek',
  schema: { titel: 'Samenhang in de praktijk', items: ['Register en besluiten', 'Afspraken en toezicht', 'Oefenen en toepassen', 'Bewijs en onderhoud'], uitkomst: 'Je organisatie kan zelfstandig verder', noot: 'Bestaande resultaten uit AI-Foto, GRIP of een eigen analyse worden hergebruikt waar ze relevant en actueel zijn.' },
  herkenning: { titel: 'Wanneer losse maatregelen niet meer genoeg zijn', items: [
    'AI wordt gebruikt, maar toepassingen, besluiten en eigenaren staan niet in één beheersbaar systeem.',
    'Er is beleid of training, maar dagelijkse toepassing en onderhoud zijn onduidelijk.',
    'Nieuwe AI-tools en ingebouwde functies verschijnen zonder vaste beoordelings- en wijzigingsroute.',
    'Klanten, aanbesteders, OR, verzekeraars of auditors vragen hoe AI wordt beheerd.',
    'Je wilt AI opschalen zonder dat verantwoordelijkheid, toezicht en bewijs uit elkaar groeien.',
    'Een AI-Foto, GRIP-traject of eigen analyse heeft concrete implementatievragen opgeleverd.',
  ], noot: 'De organisatie levert een sponsor, een interne trekker met beschikbare tijd, een kernteam, eigenaren, feitelijke gebruikers en beslismandaat. Ik breng structuur en tempo; de organisatie neemt besluiten en leert het systeem zelf beheren.' },
  secties: [
    { titel: 'Zes onderdelen van een werkend systeem', label: 'Het eindbeeld', zacht: true, kaarten: [
      { marker: '01', titel: 'Register en prioritaire use-cases', tekst: 'Een onderhoudbaar overzicht van bekende toepassingen binnen scope, met eigenaar, status, voorwaarden, bewijs en reviewdatum.' },
      { marker: '02', titel: 'Besluiten en eigenaarschap', tekst: 'Per prioritaire toepassing is duidelijk wat mag, wat nog onderzocht wordt, wie beslist en wie het vervolg beheert.' },
      { marker: '03', titel: 'Praktische werkafspraken', tekst: 'Afspraken in gewone werktaal over gegevens, outputcontrole, transparantie, uitzonderingen en gebruik onder druk.' },
      { marker: '04', titel: 'Toezicht, leveranciers en incidentroutes', tekst: 'Wie controleert, kan afwijken of ingrijpen? Hoe worden nieuwe tools, wijzigingen en incidenten behandeld?' },
      { marker: '05', titel: 'Bekwaamheid en toepassing', tekst: 'Teams bouwen en toetsen hun bekwaamheid in praktijklabs met eigen AI-situaties, onjuiste output, gevoelige gegevens, tegenspraak, escalatie en bijna-incidenten.' },
      { marker: '06', titel: 'Bewijs, open punten en onderhoud', tekst: 'Besluiten, oefeningen, controles en open punten zijn vindbaar, met eigenaren, deadlines en een periodieke reviewcyclus.' },
    ] },
    { titel: 'Wat je organisatie kan laten zien', label: 'Herleidbaar binnen de afgesproken scope', kolommen: 2, intro: 'Gebruik, besluiten, verantwoordelijkheden, oefeningen, controles en open punten worden zichtbaar in de organisatiepraktijk. Dit is geen certificaat.', kaarten: [
      { titel: 'Welke AI-toepassingen beheer je?', tekst: 'Een onderhoudbaar register met toepassing, eigenaar, besluit, voorwaarden en reviewdatum.' },
      { titel: 'Hoe neem je besluiten?', tekst: 'Use-case- en besluitkaarten, een besluitlog en een uitzonderingsroute.' },
      { titel: 'Hoe bereid je mensen voor?', tekst: 'Een bekwaamheidsmatrix, teamgerichte praktijklabs, behandeld materiaal en een opfrisritme.' },
      { titel: 'Wie houdt toezicht?', tekst: 'Een rollen-, toezicht- en escalatiestructuur met ruimte om in te grijpen.' },
      { titel: 'Wat doe je bij wijzigingen en incidenten?', tekst: 'Een nieuwe-toolcheck, wijzigingsroute, meldinstructie en incidentlog.' },
      { titel: 'Wat is nog niet afgerond?', tekst: 'Een expliciete lijst met open punten, eigenaar, specialistische route en deadline.' },
    ] },
    { titel: 'Zo bouwen we het systeem samen op', label: 'Van afbakening tot overdracht', zacht: true, kaarten: [
      { marker: '1', titel: 'Kwalificeren en afbakenen', tekst: 'Productfit, variant, scope, rollen, hergebruik, specialistische afhankelijkheden en startvoorwaarden bepalen.' },
      { marker: '2', titel: 'Kaderen en actualiseren', tekst: 'Bestaande informatie valideren, een gerichte baseline- en delta-check uitvoeren en registerstructuur en besluitforum inrichten.' },
      { marker: '3', titel: 'Besluiten en inrichten', tekst: 'Prioritaire toepassingen uitwerken en besluiten, voorwaarden, eigenaarschap, werkafspraken, toezicht en routes vastleggen.' },
      { marker: '4', titel: 'Oefenen en toepassen', tekst: 'Teams testen de afspraken in praktijklabs met herkenbare situaties, onjuiste output, tijdsdruk, twijfel en incidenten.' },
      { marker: '5', titel: 'Aantonen en testen', tekst: 'Nieuwe-tool-, wijzigings- en incidentroutes testen en een bewijswandeling uitvoeren.' },
      { marker: '6', titel: 'Overdragen en bijhouden', tekst: 'De interne trekker neemt het beheer over. Reviewkalender, vervanging, onboarding, open punten en 30-dagenborging worden vastgelegd.' },
    ] },
    { titel: 'Mijlpalen rond dag 30, 60 en 90', kaarten: [
      { marker: '30', titel: 'Basis en prioriteiten', tekst: 'Scope, registerbasis en prioriteiten.' },
      { marker: '60', titel: 'Besluiten en eerste routes', tekst: 'Besluiten, eigenaren en eerste routes.' },
      { marker: '90', titel: 'Oefenen en beheer', tekst: 'Praktijklabs, eerste bewijs en beheerhandelingen.' },
    ], noot: 'Bij Organisatiebreed en Complex is dag 90 een implementatiemijlpaal. Verbreding, tests en formele overdracht kunnen daarna volgen.' },
    { titel: 'Oefenen in de werkpraktijk', label: 'Teamgerichte praktijklabs', zacht: true, intro: 'Praktijklabs zijn gekoppeld aan rolclusters en echte use-cases. Teams oefenen met gevoelige informatie, plausibele maar foutieve output, tegenspraak en het melden van incidenten of bijna-incidenten.', kaarten: [
      { titel: 'Dagelijkse gebruikers', tekst: 'Afspraken toepassen en twijfel of onjuiste output herkennen.' },
      { titel: 'Eigenaren en toezichthouders', tekst: 'Output beoordelen, tegenspraak bieden en bijtijds ingrijpen.' },
      { titel: 'Beslissers en beheerders', tekst: 'Besluiten, escalatie, wijzigingen en onderhoud in de praktijk oefenen.' },
    ], noot: 'Individuele toetsing wordt alleen toegevoegd als dit expliciet nodig en overeengekomen is. AI op Orde levert geen algemene individuele wettelijke certificering.' },
    { titel: 'Na overdracht blijft het systeem van je organisatie', label: 'Zelfstandig verder', kolommen: 2, kaarten: [
      { titel: 'Beheer in eigen handen', tekst: 'Register, afspraken, routes, dossierstructuur, beheerinstructies en reviewkalender blijven bij de organisatie. Er is geen verplichte licentie.' },
      { titel: 'Optionele ondersteuning', tekst: 'Periodieke ondersteuning bij reviews, nieuwe tools, wijzigingen, onboarding of opfrissing kan worden afgesproken. Omvang en ritme stemmen we af op je organisatie.' },
    ], noot: 'Inbegrepen 30-dagenborging: Compact heeft een check van 45 minuten. Organisatiebreed heeft 60 minuten plus een statusnotitie van maximaal één pagina. Bij Complex wordt dit per implementatiegolf afgesproken.' },
  ],
  varianten: { titel: 'Drie varianten, één methodiek', intro: 'De scope- en ontwerpcheck bepaalt welke variant haalbaar is. Processen, use-cases, rollen, locaties, besluitvorming, gevoeligheid, trainingslogistiek en benodigde validatie zijn bepalend; het aantal medewerkers is alleen een eerste indicatie.', items: [
    { titel: 'Compact', scope: 'Overzichtelijke context', tijd: 'Circa 10–12 weken', contact: 'AI op Orde Compact', items: ['1–2 procesfamilies', 'Circa 8–12 use-cases registreren', 'Maximaal 4–6 prioritaire use-cases volledig inrichten', 'Maximaal 3 rolclusters', '1 praktijklab'] },
    { titel: 'Organisatiebreed', scope: 'Meerdere functies en processen', tijd: 'Circa 16–20 weken', contact: 'AI op Orde Organisatiebreed', items: ['3–5 procesfamilies', 'Circa 15–25 use-cases registreren', 'Maximaal 8–12 prioritaire use-cases volledig inrichten', 'Maximaal 4–6 rolclusters', 'Maximaal 3 praktijklabs'] },
    { titel: 'Complex', scope: 'Gefaseerd maatwerk', tijd: 'Meestal 20–26 weken of langer', contact: 'AI op Orde Complex', items: ['Meerdere entiteiten, uiteenlopende werkpraktijken of gevoelige domeinen', 'Start met een scope- en ontwerpcheck', 'Register per implementatiegolf', 'Inrichting per werkpakket', 'Apart adoptieplan en praktijklabs volgens plan'] },
  ], noot: 'De doorlooptijd start zodra scope, rollen, mandaat en benodigde input zijn bevestigd. Welke bestaande resultaten kunnen worden hergebruikt, leg ik vooraf vast in de offerte.' },
  scope: 'AI op Orde is een begeleid implementatie- en borgingstraject binnen een afgesproken scope. Het geeft geen juridisch oordeel of compliancegarantie en vervangt geen volledige DPIA, security- of technische audit, biasmeting of certificering. Waar specialistische beoordeling nodig is, leg ik de vraag en route expliciet vast. Gevalideerde uitkomsten worden verwerkt in besluitkaarten, register, werkafspraken, leveranciersroutes en de lijst met bewijs en open punten.',
  faq: [
    { vraag: 'Moet ik eerst een AI-Foto doen?', antwoord: 'Nee. Direct instappen kan bij voldoende betrouwbare basisinformatie. Relevante en actuele resultaten uit AI-Foto, GRIP of een eigen analyse worden hergebruikt. Wat kan worden overgenomen en of daar een verrekening tegenover staat, leg ik vooraf vast in de offerte.' },
    { vraag: 'Welke variant past bij ons?', antwoord: 'Dat bepalen we samen. Vooral processen, use-cases, rollen, locaties, entiteiten, gevoelige toepassingen, trainingsgroepen en benodigde validatie bepalen de passende variant.' },
    { vraag: 'Hoe lang duurt AI op Orde?', antwoord: 'Compact duurt meestal circa 10–12 weken, Organisatiebreed 16–20 weken en Complex meestal 20–26 weken of langer in implementatiegolven. De doorlooptijd start wanneer scope, rollen, mandaat en input zijn bevestigd.' },
    { vraag: 'Wat vraagt dit van onze organisatie?', antwoord: 'Een sponsor, een interne trekker met beschikbare tijd, een kernteam, relevante eigenaren en deelnemers aan praktijklabs. Ik breng structuur en tempo; de organisatie neemt besluiten en leert het systeem zelf beheren.' },
    { vraag: 'Zijn we daarna compliant?', antwoord: 'AI op Orde geeft geen juridisch oordeel of compliancegarantie. Binnen de afgesproken scope worden register, besluiten, eigenaarschap, werkafspraken, oefeningen, routes, bewijs en open punten samen ingericht. Juridische of technische vragen worden waar nodig bij een bevoegde specialist belegd.' },
    { vraag: 'Is dit een softwarepakket?', antwoord: 'Nee. Het is een begeleid implementatie- en borgingstraject. De ingevulde documenten en het beheer blijven bij je organisatie. Er is geen verplichte softwarelicentie; het systeem moet ook zonder mijn begeleiding kunnen functioneren.' },
    { vraag: 'Wat gebeurt er na overdracht?', antwoord: 'Je organisatie kan zelfstandig verder met beheerinstructies en reviewkalender. Een begrensde 30-dagenborgingscheck is inbegrepen. Periodieke ondersteuning kan optioneel worden afgesproken.' },
    { vraag: 'Kunnen we dit zelf?', antwoord: 'Delen zeker. De waarde zit in de samenhang, uitvoeringsdiscipline, praktijklabs, besluit- en bewijsstructuur en overdracht. Je organisatie blijft eigenaar en beslisser. Ik help het geheel werkend te krijgen en dubbel werk te voorkomen.' },
  ],
  vervolg: 'AI-Foto en GRIP zijn mogelijke ingangen, geen verplichte voortrajecten. Direct instappen kan bij voldoende betrouwbare basisinformatie. Bestaande inventarisaties en besluiten worden waar mogelijk hergebruikt.',
  verwant: ['ai-foto', 'grip-op-ai-in-hr'],
  contact: 'We bepalen samen of AI op Orde past, welke variant haalbaar is, wat al kan worden hergebruikt en welke specialistische vragen eerst moeten worden belegd.',
};
