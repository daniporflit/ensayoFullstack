import { heroes, Hero } from '../data/heroes.data';

export const getHeroByIdAsync = (id: number): Promise<Hero> => {
  return new Promise<Hero>((resolve, reject) => {
    setTimeout(() => {
      const hero = heroes.find((h) => h.id === id);

      if (!hero) {
        reject(new Error(`No existe el héroe con id ${id}`));
        return;
      }

      resolve(hero);
    }, 500);
  });
};
