# GRIP en AI op Orde

Bronnen, bekeken op 9 oktober 2026:
- https://digidactics.nl/ai-in-hr/
- https://digidactics.nl/ai-op-orde/
- Algemene risicobenadering gecontroleerd bij https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai

De productinhoud is overgenomen in de Kenniswerkplaats-stijl en je/jouw-vorm. Geen prijzen, Digidactics-header/footer, Legal Baseline-branding of decoratieve illustraties. De juridische deadlinepassage en deadline-FAQ van GRIP zijn vervangen door uitleg over bestaande werkpraktijk en specialistische beoordeling. Dit houdt de productpagina vrij van een specifieke, onderhoudsgevoelige toepassingsdatum. Er wordt geen juridisch eindoordeel, classificatie of compliancegarantie gegeven.

GRIP: herkenning, GRIP-stappen, vier B’s, vier resultaten, doelgroepen, Remote Kern en HR-AI Werkplaats met scopegrenzen en 30-dagenopvolging, FAQ en mogelijke vervolgroutes.

AI op Orde: zes systeemonderdelen, herleidbare documentatie, zes uitvoeringsstappen, 30/60/90-mijlpalen, praktijklabs, overdracht/optionele ondersteuning, varianten met aantallen en doorlooptijden, inbegrepen 30-dagenborging, FAQ en hergebruik van eerdere analyses.

Productdata: src/data/ai-producten.ts. Beide pagina’s gebruiken AiProductPagina.astro. Bestaande URLs, aanbodgroepen, case-inhoud en casebrugzinnen blijven behouden. AI-Foto is ongewijzigd. Geen extra domeinlabels of dependencies.

Controle:
- npm run check en npm run build geslaagd: 22 routes, 9 aanbodonderdelen, 15 cases en 11 vraagstukken.
- Desktop en 360px visueel gecontroleerd; geen horizontale overflow, één h1 per pagina.
- Alle 13 FAQ’s, beide scopeblokken en zeven casepopups geopend en gesloten; GRIP ook op desktop gecontroleerd.
- Contactlinks nemen de gekozen variant mee in het mailonderwerp; geen e-mail verzonden.
- Bekijk de opbouw springt naar de systeemonderdelen met ruimte voor de sticky header.
- Alle 22 gebouwde HTML-pagina’s gecontroleerd op extra domeinlabels: geen gevonden.
- Contrast: 18 browsertoestanden, 3512 waargenomen elementen plus 65 tokencombinaties. Geen fouten; minimum tekst 4,74:1, grote tekst 7,85:1, iconen 5,12:1 (inclusief tokenmatrix). De opgeslagen observaties groeperen identieke kleurparen met hun aantallen; opnieuw controleren met node scripts/check-contrast.mjs docs/reviews/ai-producten/contrast-observaties.json.

Screenshots: grip-hero.jpg / ai-op-orde-hero.jpg, beide volledige desktopbeelden en 360px-beelden. Geen PR gemerged en niets naar productie gepromoveerd.
