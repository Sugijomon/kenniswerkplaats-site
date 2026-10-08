# Kenniswerkplaats.nl — instructies voor Claude Code

Website van Kenniswerkplaats (Rink Weijs). Statische site in **Astro 5**, gehost op **Vercel**.

## Werken in deze repo
- `npm install` · `npm run dev` (lokaal) · `npm run build` (moet altijd slagen vóór een PR)
- Werk op een eigen branch per taak en open een pull request; Vercel maakt per PR een preview.
- Houd wijzigingen klein en afgebakend tot de taak. Geen nieuwe dependencies zonder reden in de PR-beschrijving.

## Structuur
- `src/data/` — **alle inhoud staat hier**, pagina's lezen eruit:
  - `fasen.ts` — de vier fasen: Zicht krijgen · Ontwerpen · Ontwikkelen · Sturen & evalueren
  - `aanbod.ts` — drie groepen, negen aanbodonderdelen, elk met fasen en case-ids
  - `cases.ts` — praktijkcases met fase-scores (2 = bewezen, 1 = deels, 0 = niet)
  - `vraagstukken.ts` — instaptegels; `home: true` = op de voorpagina
  - `werkplaats.ts`, `site.ts`
- `src/pages/` — home, vraagstukken, werkwijze, aanbod/[slug], cases, werkplaats, over, contact
- `src/components/` — CaseCard, PhaseDots, FaseStrip, Icon, Logo
- `src/styles/global.css` — design tokens bovenaan (`:root`)

## Inhoudelijke spelregels (belangrijk)
1. **Ik-vorm.** Het is een eenmanspraktijk: "ik", niet "we/ons team". Tegen de lezer: "je".
2. **Fasen ≠ werkwijze.** De vier fasen zijn de indeling van het aanbod (wat je koopt). De werkwijze-principes (samen met betrokkenen, eerst zicht, tastbare opbrengst, besluitmoment) gelden in élke fase.
3. **Cases eerlijk.** Een fase alleen vullen als de case die aantoonbaar bewijst. Geen resultaten, cijfers of klantnamen verzinnen; bron is het master-cv van Rink. Vraag bij twijfel.
4. **Casekaart-anatomie:** domein → vraagstuk (kop) → korte tekst → rol/aanpak/opbrengst → fase-stipjes → organisatie onderaan. De bezoeker herkent eerst het probleem.
5. **Nog geen AI-klantcases.** AI-pagina's tonen overdraagbare cases met een brugzin. Niet doen alsof AI-Foto e.d. al bij klanten zijn uitgevoerd.
6. **Juridisch:** geen juridisch eindoordeel of compliancegarantie claimen (zie noot bij AI op Orde).
7. **Prijzen** staan (nog) niet op de site.

## Stijl
- Teal-palet via CSS-variabelen; niet "alles groen": domeinen (AI, zorg, onderwijs) moeten zichtbaar blijven.
- Toegankelijk: semantische HTML, zichtbare focus, alt-teksten, contrast AA, werkt op 360px breed zonder horizontaal scrollen.
- Geen externe trackers of fonts van derden (font zit in de bundle).

## Open punten
- Definitief logo en beeldmateriaal (nu een tijdelijk woordmerk en illustratieve tegels)
- E-mailadres in `site.ts` vervangen door Kenniswerkplaats-adres; contactformulier kiezen
- Werkplaats-items (signaalfeed, tools, canvas) inhoudelijk uitwerken
- Casepagina's per hoofdcase (Viazorg, Zorgwise, Corpio, Quarterly Review)
- Domeinrecepten ("groep · tech · inhoud") op de werkwijzepagina uitwerken
