export const varianten = [
  { id: 'stepper', naam: 'Horizontale proceslijn', tekst: 'Vier vaste fasen op één lijn. Gevuld betekent bewezen; halfgevuld betekent deels.' },
  { id: 'pills', naam: 'Badges per fase', tekst: 'Compacte capsules met de status in tekst. Alle vier fasen blijven zichtbaar.' },
  { id: 'segments', naam: 'Gesegmenteerde statusbalk', tekst: 'Vier gelijke vlakken verbinden de fasen tot één rustig geheel.' },
  { id: 'icons', naam: 'Iconen met labels', tekst: 'Elke fase krijgt een herkenbaar icoon, een naam en een expliciete status.' },
] as const;
export const faseStatus = ['Niet in deze case', 'Deels', 'Bewezen'];
