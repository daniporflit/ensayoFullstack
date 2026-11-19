import { describe, expect, it } from 'vitest';
import { Owner } from '../src/data/heroes.data';
import {
  countByOwner,
  getHeroById,
  getHeroesByOwner,
  getHeroNames,
  getHeroPower,
} from '../src/helpers/heroes.helpers';

describe('heroes.helpers', () => {
  it('getHeroById debe retornar el héroe con el id indicado', () => {
    const hero = getHeroById(2);
    expect(hero).toEqual({
      id: 2,
      name: 'Spiderman',
      owner: Owner.Marvel,
      power: 'Sentido arácnido',
    });
  });

  it('getHeroById debe retornar undefined si el héroe no existe', () => {
    expect(getHeroById(100)).toBeUndefined();
  });

  it('getHeroesByOwner debe retornar sólo héroes de Marvel', () => {
    const marvel = getHeroesByOwner(Owner.Marvel);
    expect(marvel.length).toBe(2);
    expect(marvel.every((hero) => hero.owner === Owner.Marvel)).toBe(true);
  });

  it('getHeroesByOwner debe retornar 4 héroes de DC', () => {
    expect(getHeroesByOwner(Owner.DC).map((h) => h.name)).toEqual([
      'Batman',
      'Superman',
      'Flash',
      'Green Lantern',
    ]);
  });

  it('getHeroNames debe retornar los 6 nombres', () => {
    expect(getHeroNames()).toHaveLength(6);
    expect(getHeroNames()[0]).toBe('Batman');
  });

  it('getHeroPower debe usar un valor por defecto si no tiene poder', () => {
    expect(getHeroPower(1)).toBe('Batman: Dinero');
    expect(getHeroPower(6)).toBe('Green Lantern: sin poder conocido');
    expect(getHeroPower(99)).toBe('Héroe no encontrado');
  });

  it('countByOwner debe contar héroes por propietario', () => {
    expect(countByOwner()).toEqual({ DC: 4, Marvel: 2 });
  });
});
