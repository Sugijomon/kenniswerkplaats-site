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
  "slug": "grip-op-ai-in-hr",
  "belofte": "Verantwoord AI-gebruik in HR. Weten wat er draait. Beslissen wat mag. Kunnen laten zien.",
  "intro": "Met de GRIP-methode maak ik samen met je team concrete AI-toepassingen in HR zichtbaar. We wegen operationele aandachtspunten en leggen toezicht, eigenaarschap en vervolgstappen praktisch vast.",
  "uitleg": "Een compact, besluitgericht traject: voorbereiding, concrete uitwerking en een 30/60/90-uitvoeringsplan. Een werkbare basis voor AI in processen die mensen direct raken.",
  "actie": "Plan een AI-in-HR-check",
  "voorbeeld": "Voorbeelduitwerking GRIP op AI in HR",
  "schema": {
    "titel": "Betekenisvol toezicht",
    "items": [
      "Bemenst",
      "Bekwaam",
      "Bevoegd en bijtijds",
      "Bewijsbaar"
    ],
    "uitkomst": "Een mens die daadwerkelijk kan ingrijpen",
    "noot": "De vier B’s worden uitgewerkt in het werkproces."
  },
  "herkenning": {
    "titel": "Herken je één van deze situaties?",
    "items": [
      "Je ATS, jobboard of recruitmentplatform screent, matcht, rangschikt of beveelt kandidaten aan.",
      "Software verdeelt diensten, taken of werk mede op basis van gegevens over individuele medewerkers.",
      "Scores, voorspellingen of inzichten beïnvloeden beoordeling, ontwikkeling, verzuimbegeleiding of uitstroom.",
      "HR, recruiters of leidinggevenden gebruiken generatieve AI met informatie over mensen.",
      "Je kunt niet direct laten zien wie eigenaar is, hoe toezicht werkt en welke afspraken zijn vastgelegd."
    ],
    "noot": "Eén keer “ja” of “weet ik niet” is aanleiding om het gebruik nader in kaart te brengen. Niet iedere toepassing is automatisch hoog risico: teksthulp verschilt van kandidaat-ranking, en algemene capaciteitsplanning van individuele taaktoewijzing op basis van gedrag."
  },
  "secties": [
    {
      "titel": "De GRIP-methode",
      "label": "Vier stappen, besluiten met een eigenaar",
      "kolommen": 4,
      "zacht": true,
      "intro": "De weging is signalering en prioritering, geen juridische classificatie.",
      "kaarten": [
        {
          "titel": "Gebruik in kaart",
          "tekst": "Welke AI wordt formeel, ingebouwd en informeel gebruikt? Wat gebeurt er met de uitkomsten?",
          "marker": "G"
        },
        {
          "titel": "Risico’s wegen",
          "tekst": "Welke toepassingen vragen basisafspraken, nader onderzoek, specialistische beoordeling of direct ingrijpen?",
          "marker": "R"
        },
        {
          "titel": "Inrichten van toezicht",
          "tekst": "Wie kijkt mee, met welke kennis, tijd en bevoegdheid om de uitkomst te beoordelen en bijtijds bij te sturen?",
          "marker": "I"
        },
        {
          "titel": "Plannen en borgen",
          "tekst": "Welke besluiten, eigenaren, acties en bewijsstukken zijn nodig om grip te krijgen en te houden?",
          "marker": "P"
        }
      ]
    },
    {
      "titel": "Vier B’s van betekenisvol toezicht",
      "label": "Toezicht in de werkpraktijk",
      "kolommen": 2,
      "kaarten": [
        {
          "titel": "Bemenst",
          "tekst": "Er is een aanwijsbare verantwoordelijke. Waar continuïteit dat vraagt, is ook vervanging geregeld."
        },
        {
          "titel": "Bekwaam",
          "tekst": "De toezichthouder begrijpt de toepassing en kan output, fouten en relevante vertekening beoordelen."
        },
        {
          "titel": "Bevoegd en bijtijds",
          "tekst": "De toezichthouder mag ingrijpen of afwijken, krijgt voldoende tijd en kan handelen zolang dat nog effect heeft."
        },
        {
          "titel": "Bewijsbaar",
          "tekst": "Relevante controles, afwijkingen, incidenten en besluiten zijn passend terug te zien."
        }
      ],
      "intro": "Samen leveren ze een mens die daadwerkelijk kan ingrijpen."
    },
    {
      "titel": "Wat je ontvangt",
      "label": "Vier concrete resultaten",
      "kolommen": 2,
      "zacht": true,
      "intro": "De documentatie ontstaat uit het gesprek en de genomen besluiten. Open vragen worden expliciet belegd bij de juiste eigenaar of specialist.",
      "kaarten": [
        {
          "titel": "Overzicht",
          "tekst": "een AI-in-HR-register (toepassingen, gebruik, eigenaar, status), een HR-proceskaart van waar AI ingrijpt in de employee journey, en use-casekaarten met doel, data, output, impact en open vragen."
        },
        {
          "titel": "Prioriteiten en besluiten",
          "tekst": "operationele prioritering en besluiten met eigenaren; specialistische opvolging waar nodig expliciet vastgesteld."
        },
        {
          "titel": "Afspraken en toezicht",
          "tekst": "werk- en toezichtsafspraken volgens de vier B’s."
        },
        {
          "titel": "Bewijs en vervolg",
          "tekst": "een 30/60/90-uitvoeringsplan met managementsamenvatting, bewijsindex en waar relevant een transparantie- en informatiecheck."
        }
      ],
      "noot": "De transparantie- en informatiecheck wordt alleen uitgevoerd waar een onderzochte toepassing kandidaten, medewerkers of andere betrokkenen raakt en een relevante informatie- of transparantievraag speelt."
    },
    {
      "titel": "Voor wie",
      "label": "Voor wie",
      "kaarten": [
        {
          "titel": "Accountancy en administratie",
          "tekst": "ATS, AFAS/Nmbrs, Copilot en recruitment in een context waarin verantwoording belangrijk is."
        },
        {
          "titel": "Zakelijke dienstverlening en recruitment",
          "tekst": "matching, sourcing, kandidaatpools en bewijs richting opdrachtgevers."
        },
        {
          "titel": "Logistiek en personeelsintensief werk",
          "tekst": "roostering, taaktoewijzing, monitoring en medezeggenschap."
        },
        {
          "titel": "Publieke organisaties en zorg",
          "tekst": "HR-processen waarin zorgvuldigheid en uitlegbaarheid richting medewerkers en OR extra zwaar wegen."
        }
      ],
      "kolommen": 2
    }
  ],
  "varianten": {
    "titel": "Twee uitvoeringsvormen",
    "intro": "Indicatieve doorlooptijd: ongeveer drie weken vanaf bevestigde opdracht en scope.",
    "items": [
      {
        "titel": "Remote Kern",
        "scope": "4–8, online",
        "tijd": "Twee sessies van 2 uur",
        "contact": "GRIP Remote Kern",
        "tekst": "Kernteam van HR, directie, IT/applicatiebeheer en eventueel privacy",
        "items": [
          "Use-cases in kaart, prioriteren en verdiepen; tussenanalyse; documentatieset en overdracht; korte 30-dagencheck"
        ],
        "grens": "Tot circa 10–12 use-cases registreren, maximaal 5 verdiepen"
      },
      {
        "titel": "HR-AI Werkplaats",
        "scope": "8–12, op locatie",
        "tijd": "Werkplaats en 30-dagenreview",
        "contact": "HR-AI Werkplaats",
        "tekst": "HR, directie, operations, IT en eventueel de OR, die samen tot gedragen werkafspraken moeten komen",
        "items": [
          "Voorbereide HR-procesplaat; weging en besluiten met de simulatie “De selectieronde”; besluitforum; documentatieset, managementbriefing en 30-dagenreview"
        ],
        "grens": "Maximaal 8 diepgaand uitgewerkte use-cases"
      }
    ],
    "noot": "Diepgaand betekent: outputketen, mensimpact, operationele weging, toezicht volgens de vier B’s, besluit, werkafspraken, eigenaar, bewijsroute en reviewdatum. Overige use-cases krijgen een registratie en vervolgroute."
  },
  "scope": "GRIP levert geen juridisch advies, formele AI Act-classificatie, DPIA, technische audit, security-audit, biasaudit, certificering of compliancegarantie. Waar een toepassing specialistische beoordeling vraagt, leg ik de vraag en route vast. Een formele juridische beoordeling blijft het werk van een bevoegde jurist.",
  "faq": [
    {
      "vraag": "Onze leverancier zegt dat de tool compliant is. Zijn we dan klaar?",
      "antwoord": "Een leveranciersclaim zegt nog niet hoe jullie de toepassing gebruiken. In GRIP kijken we naar doel, inrichting, gegevens, output en de gevolgen in je eigen HR-processen."
    },
    {
      "vraag": "Een mens neemt altijd de eindbeslissing. Is dat genoeg?",
      "antwoord": "Niet automatisch. Die mens moet de uitkomst kunnen beoordelen, fouten herkennen, voldoende tijd hebben, bevoegd zijn om af te wijken en kunnen ingrijpen zolang dat nog effect heeft."
    },
    {
      "vraag": "Is iedere vorm van AI in HR hoog risico?",
      "antwoord": "Nee. Teksthulp verschilt van kandidaat-ranking of individuele taaktoewijzing. GRIP signaleert en prioriteert; een formele classificatie vraagt specialistische beoordeling."
    },
    {
      "vraag": "Waarom nu beginnen?",
      "antwoord": "AI wordt al gebruikt in recruitment, planning en beoordeling. Overzicht, eigenaarschap en toezicht helpen om besluiten te nemen over die bestaande praktijk, los van één juridische deadline."
    },
    {
      "vraag": "Is dit juridisch advies of certificering?",
      "antwoord": "Nee. Ik breng gebruik in kaart, structureer aandachtspunten, faciliteer besluiten en help afspraken en bewijs vast te leggen. Voor juridische vragen schakelen we een specialist in."
    }
  ],
  "vervolg": "HR hoeft niet de eerste ingang te zijn. Is organisatiebreed onduidelijk waar AI wordt gebruikt, dan helpt AI-Foto eerst. Is HR de aanleiding, dan kan GRIP zelfstandig starten. Register, besluiten en uitvoeringsplan kun je later hergebruiken in AI op Orde.",
  "verwant": [
    "ai-foto",
    "ai-op-orde"
  ],
  "contact": "In een korte kennismaking bepalen we of GRIP op AI in HR de juiste ingang is, of dat AI-Foto eerst helpt."
};

export const aiOpOrde: AiProduct = {
  "slug": "ai-op-orde",
  "belofte": "AI-beleid en governance die in de praktijk werken. Van losse afspraken naar een werkend systeem.",
  "intro": "AI op Orde brengt AI-register, besluiten, werkafspraken, eigenaarschap, toezicht, praktijklabs, leveranciersroutes, bewijs en periodiek onderhoud samen binnen een heldere scope.",
  "uitleg": "Ik richt samen met je organisatie een praktijk in die mensen begrijpen, kunnen toepassen en na overdracht zelf kunnen onderhouden. Een begeleid implementatie- en borgingstraject, zonder verplichte softwarelicentie.",
  "actie": "Plan een scopegesprek",
  "schema": {
    "titel": "Samenhang in de praktijk",
    "items": [
      "Register en besluiten",
      "Afspraken en toezicht",
      "Oefenen en toepassen",
      "Bewijs en onderhoud"
    ],
    "uitkomst": "Je organisatie kan zelfstandig verder",
    "noot": "Bestaande resultaten uit AI-Foto, GRIP of een eigen analyse worden hergebruikt waar ze relevant en actueel zijn."
  },
  "herkenning": {
    "titel": "Wanneer losse maatregelen niet meer genoeg zijn",
    "items": [
      "AI wordt gebruikt, maar toepassingen, besluiten en eigenaren staan niet in één beheersbaar systeem.",
      "Er is AI-beleid of training, maar dagelijkse toepassing en onderhoud zijn onduidelijk.",
      "Nieuwe AI-tools en ingebouwde functies verschijnen zonder vaste beoordelings- en wijzigingsroute.",
      "Klanten, aanbesteders, OR, verzekeraars of auditors vragen hoe AI wordt beheerd.",
      "Je wilt AI opschalen zonder dat verantwoordelijkheid, toezicht en bewijs uit elkaar groeien.",
      "Een AI-Foto, GRIP-traject of eigen analyse heeft concrete implementatievragen opgeleverd."
    ],
    "noot": "De organisatie levert een sponsor, een interne trekker met tijd, een kernteam, eigenaren, gebruikers en beslismandaat. Ik breng structuur en tempo; de organisatie neemt besluiten en leert het systeem zelf beheren."
  },
  "secties": [
    {
      "titel": "Zes onderdelen van een werkend systeem",
      "label": "Het eindbeeld",
      "zacht": true,
      "kaarten": [
        {
          "titel": "Register en prioritaire use-cases",
          "tekst": "een onderhoudbaar overzicht met eigenaar, status, voorwaarden, bewijs en reviewdatum.",
          "marker": "01"
        },
        {
          "titel": "Besluiten en eigenaarschap",
          "tekst": "per toepassing wat mag, wat nog wordt onderzocht, wie beslist en wie beheert.",
          "marker": "02"
        },
        {
          "titel": "Praktische werkafspraken",
          "tekst": "in gewone werktaal over gegevens, outputcontrole, transparantie, uitzonderingen en gebruik onder druk.",
          "marker": "03"
        },
        {
          "titel": "Toezicht, leveranciers en incidentroutes",
          "tekst": "wie controleert, afwijkt of ingrijpt; hoe nieuwe tools, wijzigingen en incidenten worden behandeld.",
          "marker": "04"
        },
        {
          "titel": "Bekwaamheid en toepassing",
          "tekst": "teams oefenen in praktijklabs met eigen situaties, onjuiste output, gevoelige gegevens en bijna-incidenten.",
          "marker": "05"
        },
        {
          "titel": "Bewijs, open punten en onderhoud",
          "tekst": "besluiten, oefeningen, controles en open punten vindbaar, met eigenaren en een reviewcyclus.",
          "marker": "06"
        }
      ]
    },
    {
      "titel": "Wat je organisatie daarna kan laten zien",
      "label": "Herleidbaar binnen de afgesproken scope",
      "kolommen": 2,
      "intro": "Dit is geen certificaat. Het maakt zichtbaar hoe jullie AI beheren.",
      "kaarten": [
        {
          "titel": "Welke AI-toepassingen beheer je?",
          "tekst": "Een onderhoudbaar register met toepassing, eigenaar, besluit, voorwaarden en reviewdatum"
        },
        {
          "titel": "Hoe neem je besluiten?",
          "tekst": "Use-case- en besluitkaarten, een besluitlog en een uitzonderingsroute"
        },
        {
          "titel": "Hoe bereid je mensen voor?",
          "tekst": "Een bekwaamheidsmatrix, praktijklabs per team en een opfrisritme"
        },
        {
          "titel": "Wie houdt toezicht?",
          "tekst": "Een rollen-, toezicht- en escalatiestructuur met ruimte om in te grijpen"
        },
        {
          "titel": "Wat doe je bij wijzigingen en incidenten?",
          "tekst": "Een nieuwe-toolcheck, wijzigingsroute, meldinstructie en incidentlog"
        },
        {
          "titel": "Wat is nog niet afgerond?",
          "tekst": "Een lijst met open punten, eigenaar, specialistische route en deadline"
        }
      ]
    },
    {
      "titel": "Zo bouwen we het systeem samen op",
      "label": "Van afbakening tot overdracht",
      "zacht": true,
      "kaarten": [
        {
          "titel": "Kwalificeren en afbakenen",
          "tekst": "productfit, variant, scope, rollen, hergebruik en startvoorwaarden.",
          "marker": "1"
        },
        {
          "titel": "Kaderen en actualiseren",
          "tekst": "bestaande informatie valideren, baseline- en delta-check, registerstructuur en besluitforum.",
          "marker": "2"
        },
        {
          "titel": "Besluiten en inrichten",
          "tekst": "prioritaire toepassingen uitwerken; voorwaarden, eigenaarschap, afspraken, toezicht en routes vastleggen.",
          "marker": "3"
        },
        {
          "titel": "Oefenen en toepassen",
          "tekst": "teams testen de afspraken in praktijklabs met herkenbare situaties.",
          "marker": "4"
        },
        {
          "titel": "Aantonen en testen",
          "tekst": "routes voor nieuwe tools, wijzigingen en incidenten testen en een bewijswandeling uitvoeren.",
          "marker": "5"
        },
        {
          "titel": "Overdragen en bijhouden",
          "tekst": "de interne trekker neemt het beheer over; reviewkalender, vervanging, onboarding en 30-dagenborging vastgelegd.",
          "marker": "6"
        }
      ],
      "intro": "Mijlpalen rond dag 30 (basis en prioriteiten), dag 60 (besluiten en eerste routes) en dag 90 (oefenen en beheer). Bij Organisatiebreed en Complex is dag 90 een implementatiemijlpaal; verbreding en formele overdracht volgen daarna."
    },
    {
      "titel": "Mijlpalen rond dag 30, 60 en 90",
      "kaarten": [
        {
          "marker": "30",
          "titel": "Basis en prioriteiten",
          "tekst": "Scope, registerbasis en prioriteiten."
        },
        {
          "marker": "60",
          "titel": "Besluiten en eerste routes",
          "tekst": "Besluiten, eigenaren en eerste routes."
        },
        {
          "marker": "90",
          "titel": "Oefenen en beheer",
          "tekst": "Praktijklabs, eerste bewijs en beheerhandelingen."
        }
      ],
      "noot": "Bij Organisatiebreed en Complex is dag 90 een implementatiemijlpaal. Verbreding, tests en formele overdracht kunnen daarna volgen."
    },
    {
      "titel": "Oefenen in de werkpraktijk",
      "label": "Teamgerichte praktijklabs",
      "zacht": true,
      "intro": "Praktijklabs zijn gekoppeld aan rolclusters en echte use-cases, deels met het AISA-kaartspel. Dagelijkse gebruikers oefenen afspraken toepassen en onjuiste output herkennen. Eigenaren en toezichthouders oefenen beoordelen en bijtijds ingrijpen. Beslissers en beheerders oefenen escalatie, wijzigingen en onderhoud. Individuele toetsing alleen als dat expliciet is afgesproken.",
      "kaarten": []
    },
    {
      "titel": "Na overdracht blijft het systeem van jullie",
      "label": "Zelfstandig verder",
      "kolommen": 2,
      "kaarten": [],
      "intro": "Register, afspraken, routes, dossierstructuur en reviewkalender blijven bij de organisatie, zonder verplichte licentie. Periodieke ondersteuning bij reviews, nieuwe tools of onboarding kan optioneel. Inbegrepen 30-dagenborging: Compact 45 minuten; Organisatiebreed 60 minuten plus een statusnotitie; Complex per implementatiegolf."
    }
  ],
  "varianten": {
    "titel": "Drie varianten, één methodiek",
    "intro": "De scope- en ontwerpcheck bepaalt welke variant haalbaar is; het aantal medewerkers is alleen een eerste indicatie. Welke bestaande resultaten worden hergebruikt, leg ik vooraf vast in de offerte.",
    "items": [
      {
        "titel": "Compact",
        "scope": "Overzichtelijk",
        "tijd": "Circa 10–12 weken",
        "contact": "AI op Orde Compact",
        "items": [
          "Procesfamilies: 1–2",
          "Use-cases registreren: Circa 8–12",
          "Volledig inrichten: Maximaal 4–6",
          "Rolclusters / praktijklabs: Max. 3 / 1"
        ]
      },
      {
        "titel": "Organisatiebreed",
        "scope": "Meerdere functies en processen",
        "tijd": "Circa 16–20 weken",
        "contact": "AI op Orde Organisatiebreed",
        "items": [
          "Procesfamilies: 3–5",
          "Use-cases registreren: Circa 15–25",
          "Volledig inrichten: Maximaal 8–12",
          "Rolclusters / praktijklabs: Max. 4–6 / max. 3"
        ]
      },
      {
        "titel": "Complex",
        "scope": "Meerdere entiteiten of gevoelige domeinen",
        "tijd": "Meestal 20–26 weken of langer",
        "contact": "AI op Orde Complex",
        "items": [
          "Procesfamilies: Per implementatiegolf",
          "Use-cases registreren: Per golf",
          "Volledig inrichten: Per werkpakket",
          "Rolclusters / praktijklabs: Volgens adoptieplan"
        ]
      }
    ],
    "noot": "De doorlooptijd start wanneer scope, rollen, mandaat en benodigde input zijn bevestigd."
  },
  "scope": "Geen juridisch oordeel of compliancegarantie; geen vervanging van een DPIA, security- of technische audit, biasmeting of certificering. Waar specialistische beoordeling nodig is, leg ik vraag en route vast en verwerk ik de uitkomst in register, besluiten en afspraken.",
  "faq": [
    {
      "vraag": "Moet ik eerst een AI-Foto doen?",
      "antwoord": "Nee. Direct instappen kan bij voldoende betrouwbare basisinformatie. Wat kan worden overgenomen, leg ik vooraf vast."
    },
    {
      "vraag": "Hoe lang duurt het?",
      "antwoord": "Compact circa 10–12 weken, Organisatiebreed 16–20 weken, Complex meestal 20–26 weken of langer. De klok start als scope, rollen, mandaat en input zijn bevestigd."
    },
    {
      "vraag": "Wat vraagt dit van ons?",
      "antwoord": "Een sponsor, een interne trekker met tijd, een kernteam, eigenaren en deelnemers aan praktijklabs."
    },
    {
      "vraag": "Zijn we daarna compliant?",
      "antwoord": "AI op Orde geeft geen compliancegarantie. Wel liggen register, besluiten, eigenaarschap, afspraken, oefeningen, bewijs en open punten er, samen ingericht."
    },
    {
      "vraag": "Is dit een softwarepakket?",
      "antwoord": "Nee. Het is begeleide implementatie en borging. Documenten en beheer blijven bij jullie."
    },
    {
      "vraag": "Kunnen we dit zelf?",
      "antwoord": "Delen zeker. De waarde zit in samenhang, uitvoeringsdiscipline, praktijklabs, besluit- en bewijsstructuur en overdracht."
    }
  ],
  "vervolg": "AI-Foto en GRIP zijn mogelijke ingangen, geen verplichte voortrajecten. Direct instappen kan bij voldoende betrouwbare basisinformatie. Bestaande inventarisaties en besluiten worden waar mogelijk hergebruikt.",
  "verwant": [
    "ai-foto",
    "grip-op-ai-in-hr"
  ],
  "contact": "We bepalen samen of AI op Orde past, welke variant haalbaar is en wat al kan worden hergebruikt."
};
