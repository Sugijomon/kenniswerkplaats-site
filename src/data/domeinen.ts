// Kleurrollen staan los van de redactionele aanbodgroepen en casesectoren.
export type Domein = 'org' | 'tech' | 'leren';

export const domeinen = {
  org: { naam: 'Organisatie & governance', icoon: 'people' },
  tech: { naam: 'Technologie & AI', icoon: 'chip' },
  leren: { naam: 'Leren & ontwikkelen', icoon: 'book' },
} as const;
