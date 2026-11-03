import type { Domein } from './domeinen';

// Praktijkcases, gebaseerd op het master-cv v12 en archiefreconstructies (3 november 2026).
// Regel: vul een fase alleen als de case die aantoonbaar bewijst.
//   2 = bewezen, 1 = gedeeltelijk, 0 = niet.
// De kaart toont eerst het vraagstuk; de organisatie staat onderaan.

import type { FaseKey } from './fasen';

export interface Case {
  id: string;
  vraagstuk: string;
  organisatie: string;
  domein: string; // bestaande sectoromschrijving blijft ongewijzigd
  kleurDomein: Domein;
  periode: string;
  rol: string;
  verband: string;
  toelichtingen?: Partial<Record<string, string>>;
  fasen: Record<FaseKey, 0 | 1 | 2>;
  aanpak: string;
  opbrengst: string;
  tekst: string;
}

export const cases: Case[] = [
  {
    "id": "hz-plj",
    "kleurDomein": "leren",
    "vraagstuk": "Hoe vertaal je een landelijk beroepsprofiel naar uitvoerbaar onderwijs?",
    "organisatie": "HZ University of Applied Sciences",
    "domein": "Onderwijs · leren",
    "periode": "2024–2025",
    "rol": "learning designer",
    "fasen": {
      "zicht": 0,
      "ontwerp": 2,
      "ontwikkel": 2,
      "sturen": 0
    },
    "aanpak": "leerdoelen, activiteiten en beoordeling in samenhang ontworpen en ontwikkeld; generatieve AI voor visuals en opbouw, met eigen onderwijskundige beoordeling",
    "opbrengst": "twee Personal Learning Journeys (10 en 5 EC), opgeleverd in Moodle, inclusief het inwerken van de docent",
    "tekst": "Twee nieuwe leerroutes voor International Business, ontworpen vanuit het landelijk beroepsprofiel en het aangereikte toetsingskader. Het onderwijskundig ontwerp en de ontwikkeling deed ik zelf, net als het grootste deel van het materiaal, de oefeningen en de assessments. Generatieve AI hielp bij visuals en bij de logische opbouw van het materiaal. Ik leverde de routes geïmplementeerd op in Moodle en werkte de docent in.",
    "verband": "Eigen opdracht (zzp)",
    "toelichtingen": {
      "home": "Maatwerkleren: twee HZ-leerroutes, van ontwerp tot oplevering in Moodle.",
      "leermodule-op-maat": "Voor twee HZ-leerroutes ontwierp en ontwikkelde ik leerdoelen, materiaal en beoordeling, en leverde ik ze op in Moodle.",
      "ai-bekwaamheid": "De HZ-leerroutes laten zien hoe ik leerdoelen, oefening en beoordeling met elkaar verbind, met generatieve AI als hulp en eigen beoordeling."
    }
  },
  {
    "id": "zorgwise",
    "kleurDomein": "tech",
    "vraagstuk": "Welk platform vervangt dit, of is dat de verkeerde vraag?",
    "organisatie": "Viazorg · regionaal leerplatform Zorgwise",
    "domein": "Zorg · platform",
    "periode": "2024",
    "rol": "strategisch adviseur, onafhankelijke verkenning",
    "fasen": {
      "zicht": 2,
      "ontwerp": 2,
      "ontwikkel": 0,
      "sturen": 1
    },
    "aanpak": "reconstructie van de bestaande omgeving, vergelijking van vier platformroutes, analyse van koppelingen tussen leerplatforms, registers en HR-systemen",
    "opbrengst": "rapport, bijlage, bestuurssamenvatting en presentatie, met advies voor een regionaal zorgportfolio als centrale laag voor bekwaamheid en inzetbaarheid",
    "tekst": "Een onafhankelijke verkenning tijdens een wisseling van projectleiding en een geschil met de leverancier. Ik reconstrueerde de bestaande omgeving en vergeleek vier platformroutes. Zo verschoof de vraag van \"welk platform\" naar \"hoe verbind je online leren en (micro-)accreditaties uit verschillende leerplatforms, zodat centraal zichtbaar wordt wie bekwaam en inzetbaar is in de regionale zorg\".",
    "verband": "Afzonderlijke opdracht binnen Deltaplan 2.0, op eigen voorstel en in samenspraak met de programmamanager en de bestuurders van Zorgwise",
    "toelichtingen": {
      "ai-foto": "Voordat er een nieuwe oplossing werd gekozen, reconstrueerde ik de bestaande platformomgeving en vergeleek ik mogelijke vervolgroutes.",
      "ontwerp-en-ontwikkeling": "Ik onderzocht hoe leerresultaten en accreditaties uit verschillende platforms samen kunnen komen, en vergeleek de routes daarvoor."
    }
  },
  {
    "id": "viazorg-flexplatform",
    "kleurDomein": "org",
    "vraagstuk": "Hoe maak je regionaal werkgeverschap werkbaar voor zelfstandige zorgorganisaties?",
    "organisatie": "Viazorg · Deltaplan 2.0 · Regionaal Werkgeverschap/Flex",
    "domein": "Zorg · regionale samenwerking",
    "periode": "september 2022 – februari 2024",
    "rol": "projectleider en voorzitter van het ontwikkelteam",
    "fasen": {
      "zicht": 2,
      "ontwerp": 2,
      "ontwikkel": 0,
      "sturen": 1
    },
    "aanpak": "maandelijks ontwikkelteam met zorgorganisaties; gerichte gesprekken met bestuurders en HR-managers; doelgroep- en arbeidsmarktanalyse; businesscases en financiële scenario's; inbreng van Zeeuwse casuïstiek bij landelijke gesprekken met VWS, SZW en de Belastingdienst",
    "opbrengst": "een herzien afsprakenkader en rekentool, door de stuurgroep vastgesteld; daarnaast doelgroepverkenningen, eisen voor het platform, businesscases, scenario's en een implementatieplan als basis voor verdere besluitvorming",
    "tekst": "Wat begon als een vraag naar een digitaal flexplatform, groeide uit tot een bredere opgave rond doelgroepen, personeelsbeleid, werkprocessen en financiering. Al in de eerste maand toetste ik de aanname dat vast personeel tussen organisaties zou gaan rouleren, en pauzeerde ik de leveranciersgesprekken om eerst samenwerking en doelgroepen uit te werken. Met zorgorganisaties, de programmamanager en landelijke partijen herzag ik de route daarna nog twee keer, telkens op basis van wat de praktijk liet zien. In februari 2024 zette de stuurgroep het project vanwege de bekostiging formeel on hold. Op verzoek liepen voorbereidende werkzaamheden op beperkte schaal en in laag tempo door. Ik droeg de lopende kennisactiviteiten over.",
    "verband": "Binnen programma Deltaplan 2.0. De bestuurlijke voorbereiding deed ik samen met de programmamanager; het ontwikkelteam zat ik eerst samen met een collega voor, later alleen.",
    "toelichtingen": {
      "home": "Samenwerking tussen zelfstandige zorgorganisaties: aannames toetsen, de route herzien en keuzes voorbereiden voor bestuurders.",
      "governance-en-evaluatie": "Als projectleider bereidde ik met de programmamanager bestuurlijke keuzes voor, en herzag ik de route toen de praktijk daarom vroeg.",
      "praktijklab": "Met een ontwikkelteam van zorgorganisaties vertaalden we praktijkervaringen naar kaders, doelgroepkeuzes en voorstellen. Ik bereidde de bijeenkomsten voor en zat ze voor.",
      "ontwerp-en-ontwikkeling": "Ik werkte aan eisen voor het platform, businesscases, financiële scenario's en een implementatieplan, steeds getoetst aan wat organisaties konden en wilden."
    }
  },
  {
    "id": "corpio",
    "kleurDomein": "tech",
    "vraagstuk": "Hoe krijg je één scholingsplatform werkend voor twee organisaties?",
    "organisatie": "De huisartsenconnectie & Nucleuszorg",
    "domein": "Zorg · platform",
    "periode": "2023–2024",
    "rol": "projectleider",
    "fasen": {
      "zicht": 0,
      "ontwerp": 1,
      "ontwikkel": 2,
      "sturen": 2
    },
    "aanpak": "selectie, voorbereiding en testen van Corpio, implementatie en datamigratie, stakeholdercommunicatie. Na livegang volgden technische doorontwikkeling met de scholingsteams en Netbasics, borging van administratie en scholingsbeleid, en een make/buy/ally-verkenning voor online scholing.",
    "opbrengst": "een gezamenlijk platform voor circa 1.500 professionals en 200 cursussen per jaar, met automatische registratie bij de beroepsgroepen en geborgde werkprocessen",
    "tekst": "Als projectleider bracht ik één scholingsplatform voor twee organisaties van selectie, testen en datamigratie naar implementatie, doorontwikkeling en borging. De communicatie met stakeholders liep door alle fasen heen. Voor beroepsgroepen met nascholings- en accreditatie-eisen gaan deelname en accreditatiepunten automatisch naar de bijbehorende registers.",
    "verband": "Teamopdracht, met de scholingsteams van De huisartsenconnectie en Nucleuszorg en technisch partner Netbasics",
    "toelichtingen": {
      "home": "Platformimplementatie voor twee organisaties: van selectie en migratie tot borging van de werkprocessen, samen met de scholingsteams en de technisch partner.",
      "ai-bekwaamheid": "Bij Corpio verbonden we een scholingsplatform met de beroepsgebonden nascholings- en accreditatieregistratie. Ik had de projectleiding.",
      "implementatie": "Als projectleider bracht ik het platform van selectie en testen via datamigratie en implementatie tot borging van de nieuwe werkprocessen.",
      "ai-op-orde": "Werkprocessen, verantwoordelijkheden en de beroepsgebonden nascholings- en accreditatieregistratie kwamen samen rond het scholingsplatform.",
      "ontwerp-en-ontwikkeling": "Van selectie en testen tot technische doorontwikkeling met de scholingsteams en de technisch partner."
    }
  },
  {
    "id": "balans-flex-vast",
    "kleurDomein": "org",
    "vraagstuk": "Wat moet elke organisatie op orde hebben voor een gezamenlijk flexplatform?",
    "organisatie": "Viazorg · Balans flex/vast",
    "domein": "Zorg · arbeidsmarkt",
    "periode": "2023–2024",
    "rol": "projectleider",
    "fasen": {
      "zicht": 2,
      "ontwerp": 1,
      "ontwikkel": 0,
      "sturen": 0
    },
    "aanpak": "reeks van vijf regionale sessies, van gedeelde analyse naar randvoorwaarden per organisatie, met arbeidsmarktdata van het CBS",
    "opbrengst": "gedeelde beeldvorming en inzicht in de drijfveren, belemmeringen en succesfactoren bij de deelnemende organisaties. Daarmee werd duidelijker welke organisatorische voorwaarden aandacht vragen voordat zij hun werkprocessen kunnen afstemmen op een gezamenlijk flexplatform. Uit de sessie over plannen en roosteren volgde een uitgewerkt expertisenetwerk, dat doorliep toen het project on hold ging.",
    "tekst": "Vijf opeenvolgende sessies met HR-managers, personeelsplanners, strategisch adviseurs en ICT-adviseurs, om de balans tussen flexibele en vaste medewerkers in de zorg hanteerbaar te maken. Op de agenda stonden regie op flexwerk, contractvormen, wat een regionaal flexplatform wel en niet kan, en het aantrekkelijk houden van werken in loondienst. Samen met een collega-projectleider ontwikkelde en organiseerde ik de reeks. Het thema staat nog op de regionale agenda.",
    "verband": "Binnen programma Deltaplan 2.0, samen met een collega-projectleider",
    "toelichtingen": {
      "praktijklab": "In vijf regionale sessies onderzochten deelnemers wat samenwerking rond flexwerk vraagt van hun eigen organisatie, en welke voorwaarden belangrijk zijn voor een gezamenlijk flexplatform."
    }
  },
  {
    "id": "quarterly-review",
    "kleurDomein": "org",
    "vraagstuk": "Hoe wordt een nieuw kwaliteitsinstrument onderdeel van de gewone cyclus?",
    "organisatie": "HZ University of Applied Sciences · Quarterly Review",
    "domein": "Onderwijs · kwaliteit",
    "periode": "2017–2022",
    "rol": "co-ontwikkelaar",
    "fasen": {
      "zicht": 0,
      "ontwerp": 2,
      "ontwikkel": 2,
      "sturen": 2
    },
    "aanpak": "co-ontwikkeling en modellering in een projectteam van vier, pilot met acht opleidingsteams tijdens domeindagen, iteratief bijgesteld op basis van wat we zagen",
    "opbrengst": "opgenomen in de reguliere kwaliteitszorgcyclus van het domein BHV",
    "tekst": "In een projectteam van vier ontwikkelden we de Quarterly Review: van een eenvoudige verbinding tussen team en beleid naar een integraal kwaliteitsmodel. Tijdens domeindagen piloteerden we de methodiek met acht opleidingsteams. Ik werkte als interne expert mee in mijn eigen team en keek vooral hoe teams ermee omgingen. Zo vond ik valkuilen en verbeterpunten voor de doorontwikkeling.",
    "verband": "Teamopdracht, in een projectteam van vier, in opdracht van de HZ-directie",
    "toelichtingen": {
      "implementatie": "Met het projectteam en de opleidingsteams ontwikkelden we het instrument, dat werd opgenomen in de gewone kwaliteitszorgcyclus."
    }
  },
  {
    "id": "addventure",
    "kleurDomein": "tech",
    "vraagstuk": "Wat doen docenten echt met digitale tools?",
    "organisatie": "Rotterdam Business School · Addventure",
    "domein": "Onderwijs · digitaal",
    "periode": "2011–2016",
    "rol": "trekker en uitvoerder van het onderzoek",
    "fasen": {
      "zicht": 2,
      "ontwerp": 1,
      "ontwikkel": 0,
      "sturen": 1
    },
    "aanpak": "zelf ontworpen docentensurvey (62 respondenten, 84% respons), toolinventarisatie, stakeholderanalyse en gesprekken met docenten",
    "opbrengst": "advies aan ICT en management over selectiecriteria, governance, ondersteuning en professionalisering",
    "tekst": "Binnen een curriculuminnovatie met circa 80 docenten onderzocht ik welke digitale tools er feitelijk werden gebruikt naast de centrale systemen, met aandacht voor privacy, security, auteursrecht en beheer. Het onderzoek ontwierp en voerde ik zelf uit, van survey tot analyse en presentatie. Gesprekken met collega-docenten leverden daarbij belangrijke input.",
    "verband": "Eigen onderzoek binnen een curriculuminnovatie met circa 80 docenten",
    "toelichtingen": {
      "ai-foto": "Ik onderzocht welke digitale tools docenten naast de centrale voorzieningen gebruikten en wat zij aan ondersteuning nodig hadden."
    }
  },
  {
    "id": "moodle-rbs",
    "kleurDomein": "tech",
    "vraagstuk": "Hoe richt je een leeromgeving in die door meerdere hogescholen gedragen wordt?",
    "organisatie": "Rotterdam Business School · Circular Economy in the Cloud",
    "domein": "Onderwijs · platform",
    "periode": "2013–2016",
    "rol": "interne projectleider en onderwijsontwerper",
    "fasen": {
      "zicht": 0,
      "ontwerp": 2,
      "ontwikkel": 2,
      "sturen": 1
    },
    "aanpak": "onderwijskundig ontwerp van doelen, toetsing, leeractiviteiten en online inhoud; inrichting van de leeromgeving; contentproductie en opbouw van aangeleverde weken in Moodle; evaluatie van de gegevensstroom",
    "opbrengst": "een Moodle-omgeving voor een minor van 30 EC, gedragen door drie hogescholen, met een flipped-classroompilot voor 40 à 50 studenten in het eerste jaar",
    "tekst": "Een gedeelde Moodle-leeromgeving om flipped classroom in de praktijk te brengen, van cursusstructuur, rollen en toetsen tot hosting, ondersteuning en de koppeling met het studentinformatiesysteem. Ik had de interne projectleiding en deed het onderwijskundig ontwerp: doelen, toetsing, leeractiviteiten en online inhoud op elkaar afgestemd. De minor bestond uit 15 ECTS voornamelijk theorie en 15 ECTS praktijk, met aanvullende theorie en begeleidende teksten, waaronder opdrachten. Mijn digitale contentproductie concentreerde zich op het theoriedeel: het grootste deel daarvan maakte ik zelf. Wat collega's aanleverden, bouwde ik in Moodle op tot complete weken.",
    "verband": "Teamopdracht, met drie hogescholen en een ontwikkelteam van docenten",
    "toelichtingen": {
      "leermodule-op-maat": "Bij Rotterdam Business School deed ik het onderwijskundig ontwerp en maakte ik het grootste deel van de online inhoud voor het theoriedeel van 15 ECTS, binnen een minor van 30 ECTS die drie hogescholen samen droegen.",
      "implementatie": "De gedeelde leeromgeving vroeg om afstemming van rollen, inhoud en gegevensstromen tussen hogescholen. Ik had de interne projectleiding."
    }
  },
  {
    "kleurDomein": "leren",
    "domein": "Onderwijs · leren",
    "fasen": {
      "zicht": 0,
      "ontwerp": 2,
      "ontwikkel": 2,
      "sturen": 2
    },
    "id": "sustainability-business",
    "vraagstuk": "Hoe breng je flipped classroom naar een vak met 250 studenten?",
    "organisatie": "Rotterdam Business School · Sustainability & Business (2 EC)",
    "verband": "Teamopdracht, met een docententeam van vijf",
    "periode": "april 2015 – oktober 2016",
    "rol": "onderwijsontwerper, projectleider van de pilot en facilitator van het docententeam",
    "aanpak": "flipped-classroompilot in vier stappen: voorbereiding, uitvoering, evaluatie en aanpassing; ontwerp van doelen, leeractiviteiten, toetsing en online inhoud; facilitatie van het docententeam; inrichting in Moodle",
    "opbrengst": "een geëvalueerde en aangepaste flipped-classroomcursus, overgedragen aan een nieuw team",
    "tekst": "Een vak voor circa 250 studenten in 11 klassen, omgebouwd naar flipped classroom. Van voorbereiding in april 2015 via uitvoering en evaluatie in maart 2016 tot aanpassing in oktober 2016. Ik ontwierp de cursus, bouwde hem op in Moodle en faciliteerde het docententeam. Bij mijn vertrek droeg ik hem over aan een nieuwe teamcoördinator.",
    "toelichtingen": {
      "leermodule-op-maat": "Voor een vak met circa 250 studenten ontwierp ik een flipped-classroomaanpak en bouwde ik de cursus opnieuw op in Moodle.",
      "implementatie": "Van een gezamenlijke pilot naar een herontworpen cursus, met een overdracht aan een nieuw team. Zo bleef de aanpak bestaan na mijn vertrek.",
      "praktijklab": "Met een docententeam van vijf werkten we een nieuwe didactiek uit en stelden die bij."
    }
  },
  {
    "id": "enexis",
    "kleurDomein": "org",
    "vraagstuk": "Hoe staat het met kennisdelen, en wat betekent dat voor HR?",
    "organisatie": "Enexis · Asset Management",
    "domein": "Organisatie · HR",
    "periode": "2009–2010",
    "rol": "consultant en onderzoeker kennismanagement",
    "fasen": {
      "zicht": 2,
      "ontwerp": 0,
      "ontwikkel": 0,
      "sturen": 0
    },
    "aanpak": "vier deelscans met benchmarkgegevens (bestaande instrumenten van Proven Partners), zeven stakeholderinterviews, analyse met de Kenniswaardeketen van Weggeman en het ESH-model",
    "opbrengst": "adviesrapport met conclusies en oplossingsrichtingen (april 2010)",
    "tekst": "Voor Enexis Asset Management onderzocht ik hoe kennis werd ontwikkeld, gedeeld en toegepast. Ik verbond vier kennismanagementscans met zeven interviews met sleutelpersonen, om te begrijpen wat er achter de scores zat. Dat vertaalde ik naar advies over kennisprocessen, verantwoordelijkheden en de aansluiting op de HR-cyclus.",
    "verband": "Eigen opdracht via Proven Partners, met redactionele inbreng van een collega in het rapport",
    "toelichtingen": {
      "ai-foto": "Met scans en interviews bracht ik in beeld hoe kennis feitelijk werd gedeeld en toegepast, als basis voor keuzes van management en HR."
    }
  },
  {
    "id": "rode-kruis",
    "kleurDomein": "tech",
    "vraagstuk": "Hoe breng je samenhang in een versnipperd online landschap?",
    "organisatie": "Nederlandse Rode Kruis",
    "domein": "Organisatie · digitaal",
    "periode": "2009 · overdracht januari 2010",
    "rol": "onderzoeker en adviseur binnen het webteam",
    "fasen": {
      "zicht": 2,
      "ontwerp": 1,
      "ontwikkel": 0,
      "sturen": 1
    },
    "aanpak": "inventarisatie en analyse van lokale websites, gezamenlijke doelgroepenaanpak, kader voor sturing en meting",
    "opbrengst": "analyse van het online landschap, advies over samenhang en een managementrapportage voor het webteam",
    "tekst": "Lokale verenigingen en het landelijk bureau hadden elk hun eigen online initiatieven. Ik bracht in kaart wat er was en hoe het samenhing, en werkte uit wie waarvoor verantwoordelijk was en hoe je het gebruik volgt. Samen met een collega, een marketingexpert, ontwikkelde ik een doelgroepenaanpak en advies over de samenhang tussen de kanalen.",
    "verband": "Teamopdracht via Proven Partners, met een collega-marketingexpert",
    "toelichtingen": {
      "ai-foto": "Ik bracht een versnipperd online landschap in kaart. Het is dezelfde vraag die AI-Foto stelt, toen nog over online kanalen.",
      "ontwerp-en-ontwikkeling": "Van bestaande kanalen en doelgroepen naar advies over samenhang en een gezamenlijke doelgroepenaanpak.",
      "governance-en-evaluatie": "Ik werkte een kader uit voor verantwoordelijkheden, beheer en het volgen van resultaten."
    }
  },
  {
    "id": "merkplatform",
    "kleurDomein": "org",
    "vraagstuk": "Hoe houd je een internationaal merkplatform bestuurbaar?",
    "organisatie": "Internationaal merkbedrijf · kennisplatform voor marketeers",
    "domein": "Organisatie · platform",
    "periode": "augustus 2008 – januari 2009",
    "rol": "knowledge management consultant",
    "fasen": {
      "zicht": 1,
      "ontwerp": 2,
      "ontwikkel": 0,
      "sturen": 1
    },
    "aanpak": "het portal bekeken vanuit vijf samenhangende onderdelen (functionaliteit, content, communicatie, techniek en beheer), uitgewerkt in rollen, contentprocessen, procedures en een verbetercyclus",
    "opbrengst": "handboek en governancemodel voor het platform; gezamenlijk activatieplan",
    "tekst": "Voor het internationale kennisplatform van een merkbedrijf werkte ik aan de organisatie achter het platform: wie doet wat, en hoe blijft het bruikbaar? Ik was verantwoordelijk voor het handboek en het governancemodel, met rollen, contentprocessen, beheerprocedures en een verbetercyclus. Samen met een senior consultant werkte ik aan het activatieplan, om het portal onderdeel te maken van het dagelijkse werk van marketeers.",
    "verband": "Teamopdracht via Proven Partners, met een senior consultant",
    "toelichtingen": {
      "governance-en-evaluatie": "Voor een internationaal kennisplatform legde ik rollen, verantwoordelijkheden en een verbetercyclus vast in een handboek en governancemodel.",
      "ai-op-orde": "Het governancemodel maakte eigenaarschap, beheer en verbetering rond het portal expliciet. Het activatieplan maakten we samen."
    }
  },
  {
    "id": "delft-ocw",
    "kleurDomein": "org",
    "vraagstuk": "Wat levert open onderwijsmateriaal op voor het bedrijfsleven?",
    "organisatie": "TU Delft · Delft OpenCourseWare",
    "domein": "Onderwijs · evaluatie",
    "periode": "mei – oktober 2008",
    "rol": "onderzoeker en auteur van het evaluatierapport",
    "fasen": {
      "zicht": 1,
      "ontwerp": 0,
      "ontwikkel": 0,
      "sturen": 2
    },
    "aanpak": "kwalitatieve interviews met een vast protocol bij tien bedrijven, onder meer Philips, Shell en Texas Instruments, binnen water management, micro-elektronica en offshore engineering; thematische analyse",
    "opbrengst": "Engelstalig evaluatierapport Opening up to the World (oktober 2008), met tussentijdse terugkoppelingen",
    "tekst": "Voor TU Delft onderzocht ik hoe professionals het eerste OpenCourseWare-aanbod beoordeelden, in drie technische vakgebieden. Ik vertaalde hun feedback naar inzichten over bruikbaarheid, didactiek, doelgroepen en samenwerking tussen universiteit en bedrijfsleven.",
    "verband": "Eigen opdracht via Proven Partners, in opdracht van TU Delft",
    "toelichtingen": {
      "governance-en-evaluatie": "Ik onderzocht wat professionals aan open onderwijsmateriaal hadden, en wat dat vraagt van inhoud, presentatie en beheer."
    }
  },
  {
    "id": "stad-esch",
    "kleurDomein": "tech",
    "vraagstuk": "Wat levert één laptop per leerling werkelijk op?",
    "organisatie": "Kennisnet · Stad+Esch, Meppel",
    "domein": "Onderwijs · digitaal",
    "periode": "2009–2010 · onderzoek september 2009 – januari 2010, rapport maart 2010",
    "rol": "onderzoeker en adviseur, auteur van het rapport",
    "fasen": {
      "zicht": 2,
      "ontwerp": 0,
      "ontwikkel": 0,
      "sturen": 2
    },
    "aanpak": "casestudie met kwalitatieve en kwantitatieve gegevens; literatuur- en documentonderzoek, interviews met leerlingen, docenten en schoolleiding, lesobservaties, online enquête binnen een onderzoeksgroep van 88 leerlingen en een vergelijking met de cijfers van het vorige cohort; randvoorwaarden geanalyseerd met Vier in Balans Plus",
    "opbrengst": "onderzoeksrapport An Apple a day… Een laptop per leerling (57 p., maart 2010), op eigen naam",
    "tekst": "Voor Kennisnet onderzocht ik bij Stad+Esch wat één laptop per leerling opleverde in vier derdejaars vmbo-klassen. Toen bleek dat alle klassen laptops kregen, paste ik in overleg met Kennisnet de onderzoeksopzet aan naar een casestudie. Ik verbond interviews, lesobservaties, een leerlingenenquête en cijfers, en vertaalde de bevindingen naar aanbevelingen voor digitale didactiek, docentondersteuning en praktische randvoorwaarden.",
    "verband": "Eigen opdracht via Proven Partners, in opdracht van Kennisnet",
    "toelichtingen": {
      "governance-en-evaluatie": "Ik onderzocht hoe onderwijsvisie, ICT-voorzieningen, digitaal materiaal en docentbegeleiding op elkaar aansloten, en wat leerlingen en docenten daarvan ervoeren.",
      "ai-foto": "Ook bij één laptop per leerling begon het met de vraag wat er in de klas feitelijk gebeurde, en welke randvoorwaarden het gebruik bepaalden."
    }
  },
  {
    "id": "urway",
    "kleurDomein": "org",
    "vraagstuk": "Hoe maak je zichtbaar dat jongeren weer gaan leren?",
    "organisatie": "TU Delft · UrWay.nl (pilot van het ministerie van OC&W)",
    "domein": "Onderwijs · evaluatie",
    "periode": "mei 2008",
    "rol": "onafhankelijk extern evaluator en samensteller van het rapport",
    "fasen": {
      "zicht": 1,
      "ontwerp": 0,
      "ontwikkel": 0,
      "sturen": 2
    },
    "aanpak": "kwalitatieve casestudies op vijf competentiegebieden; projectdocumentatie, rapportages van begeleiders, materiaal uit de leeromgeving, gesprekken en vragenlijsten; afstemming van concepten met de betrokkenen",
    "opbrengst": "tussentijds evaluatierapport Weer zin in leren via online coaching (mei 2008), onder eindredactie van Wim Veen",
    "tekst": "UrWay.nl was een door het ministerie van OC&W gefinancierde pilot: een online leeromgeving met coaching voor jongeren die waren vastgelopen in het reguliere onderwijs. Op verzoek van het ministerie en als onafhankelijk evaluator stelde ik de eerste tussentijdse evaluatie samen. Ik onderzocht hoe het Britse Notschool.net-concept naar Nederland was vertaald, welke ontwikkeling bij deelnemers zichtbaar was en hoe de organisatie daaraan bijdroeg. Daarvoor verbond ik informatie van begeleiders, het projectteam en de leeromgeving zelf.",
    "verband": "Eigen rol als onafhankelijk evaluator via Proven Partners. Het verzoek kwam vanuit het ministerie van OC&W, via Wim Veen (TU Delft). Het evaluatieplan en een deel van de dataverzameling lagen bij het projectteam.",
    "toelichtingen": {
      "governance-en-evaluatie": "Ik bracht een alternatieve leeromgeving in beeld met casestudies, materiaal uit de omgeving en de ervaringen van begeleiders."
    }
  }
];

export const caseById = Object.fromEntries(cases.map(c => [c.id, c])) as Record<string, Case>;

export const caseSamenwerkingIntro = "Veel van dit werk deed ik in teams en samenwerkingsverbanden. Per case staat wat mijn deel was.";
