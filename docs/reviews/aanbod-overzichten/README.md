# Drie aanbodoverzichten vergelijken

Aparte route: /aanbod/voorbeeld-overzichten/. Het huidige aanbodoverzicht, de homepage en alle productpagina’s zijn ongewijzigd. Geen navigatie-item toegevoegd; de preview is rechtstreeks bereikbaar.

Drie patronen uit het aangeleverde voorstel:
1. Categorie-tabs: één categorie tegelijk, context en bestaand abstract kunstaccent links, diensten rechts. Muis- en toetsenbordbediening (pijlen, Home/End), ARIA-tabs en zichtbare selectie. Zonder JavaScript blijven alle panelen met hun links beschikbaar.
2. Afwisselende blokken: AI in een breed blok, praktijklab uitgelicht naast gestapelde leerdiensten, platforms als proceskaart. Geen verplichte volgorde voorgeschreven.
3. Filterbare trajectmatrix: de bestaande diensten op hun werkelijke categorie/fase. Combineren van categorie en fase, uniek dienstenaantal, lege resultaten en filters wissen. Een dienst met meerdere fasen verschijnt op meerdere plekken. Op mobiel staan de cellen onder elkaar.

Alle inhoud komt uit het bestaande aanbod en fasendata; er zijn geen diensten, categorieën, fases of resultaten verzonnen. De variantbeschrijvingen staan in src/data/aanbod-voorbeelden.ts. De dienstkaarten gebruiken één gedeelde component.

Het voorstel noemt magenta/oker/petrol categorieknoppen en Tailwind. Hier zijn de bestaande kleurrollen en gewone scoped Astro-CSS aangehouden: acties in petrol, marine tekst, lichte tinten, bestaande icoonaccenten. Oranje blijft buiten functionele UI; geen extra domeinlabels, dependencies of nieuw beeldmateriaal. De abstracte kunst gebruikt de bestaande grijstintencomponent.

Validatie:
- npm run check en npm run build geslaagd: 23 routes, 9 aanbodonderdelen, 15 cases en 11 vraagstukken.
- Desktop en 360px visueel gecontroleerd: geen horizontale overflow.
- Alle drie tabpanelen, toetsenbordbediening en mobiele pijlbediening gecontroleerd.
- Alle twintig categorie/fasecombinaties op desktop hebben het juiste unieke dienstenaantal; lege resultaten en reset werken. Op mobiel is onder meer Platforms + Ontwikkelen gecontroleerd (twee diensten).
- Contrast: twaalf browsertoestanden, 1765 waargenomen elementen plus 65 tokencombinaties. Geen fouten. Minimum normale tekst 4,74:1, grote tekst 7,85:1 en iconen 5,12:1 (inclusief de tokenmatrix).
- Meetgegevens zijn gegroepeerd per kleurpaar met behoud van aantallen; herhaal met node scripts/check-contrast.mjs docs/reviews/aanbod-overzichten/contrast-observaties.json.

Screenshots in deze map laten alle drie indelingen en de mobiele pagina zien. Er is geen keuze voor een definitief overzicht gemaakt en niets gemerged.
