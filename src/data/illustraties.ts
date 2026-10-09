import type { GroepKey } from './aanbod';
export const illustraties: Record<GroepKey, { src: string; alt: string }> = {
  ai: { src: '/illustraties/samen-organiseren.png', alt: 'Illustratie van twee mensen die samen processen, rollen en afspraken uitwerken.' },
  leren: { src: '/illustraties/samen-leren.png', alt: 'Illustratie van een groep die samen oefent met hulpmiddelen uit het werk.' },
  platforms: { src: '/illustraties/samen-ontwerpen.png', alt: 'Illustratie van collega’s die rond een laptop samen een oplossing ontwerpen.' },
};
