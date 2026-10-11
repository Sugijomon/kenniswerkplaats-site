import data from './redactie-v2.json' with { type: 'json' };
export interface TekstBlok { type: string; text?: string; html?: string; items?: string[]; itemsHtml?: string[]; ordered?: boolean; headers?: string[]; headersHtml?: string[]; rows?: string[][]; rowsHtml?: string[][] }
export interface RedactieSectie { title: string; blocks: TekstBlok[]; caseIds: string[]; faq?: { vraag: string; antwoord: string }[] }
export interface RedactiePagina { name: string; title: string; seo: string; subtitle: string; hero: TekstBlok[]; sections: RedactieSectie[] }
export const paginas = data as Record<string, RedactiePagina>;
export const sectie = (pagina: RedactiePagina, titel: string) => pagina.sections.find(s => s.title.startsWith(titel));
