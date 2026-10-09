// Inhoud vertaald uit digidactics.nl/ai-foto/; prijzen bewust niet overgenomen.
export const aiFoto = {
  beeldSamenvatting: 'Systemen alleen of zelfrapportage alleen geven een onvolledig beeld. Samen ontstaat een basis waarop de directie kan beslissen.',
  routeNoot: 'De inhoud volgt uit je eigen besluitpunten. De route is geen belofte vooraf.',
  belofte: 'Eerst zien. Dan samen beslissen.',
  intro: 'AI-Foto brengt het feitelijke gebruik van AI in je organisatie in beeld, formeel én informeel. Dat beeld wordt een besluitagenda waarmee de directie verder kan.',
  uitleg: 'Individuele voorbereiding, een gezamenlijke scan, drie analysekaarten en maximaal vijf besluitpunten met een route voor de eerste negentig dagen. Vertrouwelijk en geaggregeerd.',
  past: [
    'Je weet niet waar AI in het werk al wordt gebruikt.',
    'Formele systemen en wat mensen zelf doen geven een verschillend beeld.',
    'Je wilt beleid of training baseren op gebruik dat je daadwerkelijk hebt gezien.',
    'Je hebt besluitpunten nodig, geen verzameling losse gegevens.',
  ],
  grenzen: [
    'Geen prompt-inzage, plug-ins of netwerkmonitoring.',
    'Geen individuele rapportage aan de werkgever.',
    'Geen maturityscore: drie afzonderlijke kaarten in plaats van één cijfer.',
    'Geen juridisch oordeel, DPIA, audit of certificering.',
  ],
  perspectieven: [
    { naam: 'Medewerkers', kop: 'Wat er in het werk gebeurt', tekst: 'Vertrouwelijke, geaggregeerde uitvraag. Bij Standaard en Uitgebreid ook een medewerkerspuls en validatiegesprekken.', icoon: 'people' },
    { naam: 'Management', kop: 'Wat de organisatie denkt te weten', tekst: 'Aannames, afspraken en verwachtingen naast de praktijk gelegd. Het verschil is zelf informatie.', icoon: 'target' },
    { naam: 'Systemen', kop: 'Wat vastligt in software', tekst: 'Vastgelegde toepassingen en ingebouwde AI-functies als basis voor een register.', icoon: 'layers' },
  ],
  stappen: [
    { naam: 'Voorbereiding', tijd: 'Week 1', tekst: 'Individueel, per deelnemer. De scope en eenheid worden vastgesteld en de uitvraag wordt klaargezet.' },
    { naam: 'Gezamenlijke scan', tijd: 'Week 1', tekst: 'Praktijk, aannames en systemen naast elkaar. Geaggregeerd, nooit op persoon.' },
    { naam: 'Analyse', tijd: 'Week 2', tekst: 'Drie kaarten: waarde, aandachtspunten en vaardigheden.' },
    { naam: 'Besluiten', tijd: 'Week 2', tekst: 'Maximaal vijf besluitpunten met eigenaren, tijdelijke voorzorgen en een 90-dagenroute.' },
  ],
  kaarten: [
    { naam: 'Waarde', vraag: 'Waar levert AI nu al iets op?', punten: ['Tekst en concepten', 'Zoeken en samenvatten', 'Analyse en planning'] },
    { naam: 'Aandachtspunten', vraag: 'Waar vraagt gebruik om een besluit?', punten: ['Persoonsgegevens', 'Output in klantwerk', 'Onbekende tools'] },
    { naam: 'Vaardigheden', vraag: 'Wat kunnen mensen en wat missen ze?', punten: ['Output beoordelen', 'Weten wanneer je stopt', 'Vastleggen wat je hebt gedaan'] },
  ],
  kaartenNoot: 'Dit zijn schematische voorbeelden, geen meetresultaten. Eén totaalscore suggereert precisie die er niet is en verbergt waar de organisatie wél of niet klaar voor is.',
  besluiten: ['Waar AI het werk nu al raakt', 'Welke maximaal vijf punten een besluit vragen', 'Wie eigenaar is van elk punt', 'Welke tijdelijke voorzorgen nu gelden', 'Wat er in 30, 60 en 90 dagen gebeurt'],
  vertrouwen: 'Ik begin bij het werk. Mensen vertellen alleen wat er echt gebeurt als het veilig is. Daarom is de uitvraag vertrouwelijk en geaggregeerd, zonder prompt-inzage, plug-ins of netwerkmonitoring en zonder individuele rapportage aan de werkgever. Deelnemers krijgen terugkoppeling op het geheel.',
  rollen: [
    { naam: 'Directie en MT', tekst: 'Besluitpunten met eigenaren en een route voor de eerste drie maanden.' },
    { naam: 'HR en L&D', tekst: 'Zicht op vaardigheden en waar oefening nodig is, per rolcluster.' },
    { naam: 'Privacy en IT', tekst: 'Basis voor een register: toepassingen, ingebouwde functies en ontbrekende informatie.' },
    { naam: 'Medewerkers', tekst: 'Duidelijkheid over wat mag en terugkoppeling op het geaggregeerde beeld.' },
  ],
  varianten: [
    { naam: 'Compact', scope: 'Eén team of eenheid', tijd: 'Ongeveer 2 weken', tekst: 'Individuele voorbereiding en een gezamenlijke scan; drie kaarten; een besluitagenda met maximaal vijf besluitpunten en een 90-dagenroute.', grens: 'Geen anonieme medewerkersuitvraag op grote schaal. Bedoeld als eerste, begrensd beeld.' },
    { naam: 'Standaard', scope: 'Tot ongeveer vijf teams', tijd: '2–3 weken', tekst: 'Een medewerkerspuls, 3–5 validatiegesprekken, een gedeeld organisatiebeeld en een besluitsessie.', grens: 'Een basis voor een register, geen volledige inventarisatie van alle systemen.' },
    { naam: 'Uitgebreid', scope: 'Tot ongeveer acht eenheden', tijd: '3–4 weken', tekst: '6–8 gesprekken, afgesproken deelanalyses en besluitvorming over een breder deel van de organisatie.', grens: 'Complexe scopes of meerdere entiteiten vragen aparte scoping.' },
  ],
  buitenScope: 'Geen juridisch oordeel of compliancegarantie. Geen volledige DPIA, security- of technische audit, biasmeting of certificering. Geen AI-ontwikkeling en geen formele FG-rol. Open juridische en technische vragen benoem ik en zet ik door naar specialisten. Bouwt je organisatie zelf AI-systemen? Dan gelden aanbiedersverplichtingen waarvoor dit product niet is gemaakt.',
  vervolg: 'Er is geen verplichte volgorde. Kies je later GRIP op AI in HR of AI op Orde, dan gaan inventarisatie, codes, eigenaren, statussen en besluiten mee, zodat werk niet wordt herhaald.',
  contact: 'In een half uur bepalen we samen of AI-Foto past en welke variant bij je scope hoort. Past het niet, dan zeg ik dat. Blijkt dat twee gerichte ingrepen voldoende zijn, dan zeg ik dat ook.',
};
