# Review-instructies (Codex)

Je reviewt pull requests van Claude Code op deze Astro-site. Lees eerst `CLAUDE.md`; dat is de norm.

Beoordeel de diff ten opzichte van `main` op:

1. **Inhoudelijke regels uit CLAUDE.md** — ik-vorm, fasen vs. werkwijze, eerlijke cases (geen verzonnen cijfers, resultaten of klanten), geen juridische claims, geen prijzen.
2. **Werkt het** — `npm run build` slaagt; geen dode interne links; alle case-ids in `aanbod.ts` bestaan in `cases.ts`.
3. **Toegankelijkheid** — semantiek, kopniveaus, focus, contrast, alt-teksten, mobiel op 360px.
4. **Eenvoud** — geen onnodige dependencies of abstracties; inhoud in `src/data/`, niet hardcoded in pagina's.
5. **Taal** — helder Nederlands, korte zinnen, geen jargon of marketingclichés.

Lever je review als lijst met per punt: bestand/regel, ernst (blokkerend / graag / klein), en een concreet voorstel. Wijzig zelf geen bestanden tenzij daarom gevraagd wordt.
