import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getHeroByIdAsync } from '../src/helpers/async.helpers';

describe('getHeroByIdAsync', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('debe resolver el héroe si existe', async () => {
    const promise = getHeroByIdAsync(3);
    vi.advanceTimersByTime(500);

    const hero = await promise;
    expect(hero.name).toBe('Superman');
  });

  it('debe rechazar con un mensaje si el héroe no existe', async () => {
    const promise = getHeroByIdAsync(10);
    vi.advanceTimersByTime(500);

    await expect(promise).rejects.toThrow('No existe un héroe con el id 10');
  });
});
