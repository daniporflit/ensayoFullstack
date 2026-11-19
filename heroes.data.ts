export enum Owner {
  DC = 'DC',
  Marvel = 'Marvel',
}

export interface Hero {
  id: number;
  name: string;
  owner: Owner;
  power?: string;
}

export const heroes: Hero[] = [
  { id: 1, name: 'Batman', owner: Owner.DC, power: 'Dinero' },
  { id: 2, name: 'Spiderman', owner: Owner.Marvel, power: 'Sentido arácnido' },
  { id: 3, name: 'Superman', owner: Owner.DC, power: 'Super fuerza' },
  { id: 4, name: 'Flash', owner: 'DC', power: 'Velocidad' },
  { id: 5, name: 'Wolverine', owner: Owner.Marvel, power: 'Regeneración' },
  { id: 6, name: 'Green Lantern', owner: Owner.DC },
];
