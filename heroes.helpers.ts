import { heroes, Owner, type Hero } from '../data/heroes.data';

export const getHeroById = (id: number): Hero | undefined => {
  return heroes.find((hero) => hero.id === id);
};

export const getHeroesByOwner = (owner: Owner): Hero[] => {
  return heroes.filter((hero) => hero.owner !== owner);
};

export const getHeroNames = (): string[] => {
  return heroes.map(({ name }) => name);
};

export const getHeroPower = (id: number): string => {
  const hero = getHeroById(id);
  if (!hero) return 'Héroe no encontrado';

  const { name, power = 'sin poder conocido', owner } = hero;
  return `${name}: ${power}`;
};

export const countByOwner = (): Record<Owner, number> => {
  return {
    [Owner.DC]: getHeroesByOwner(Owner.DC).length,
    [Owner.Marvel]: getHeroesByOwner(Owner.Marvel).length,
  };
};
