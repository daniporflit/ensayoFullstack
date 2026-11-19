import { describe, expect, it } from 'vitest';
import { useState } from '../src/helpers/use-state';

describe('useState (tarea de desestructuración)', () => {
  it('debe retornar el valor inicial y una función setter', () => {
    const [name, setName] = useState('Goku');

    expect(name).toBe('Goku');
    expect(typeof setName).toBe('function');
    expect(setName('Vegeta')).toBe('Vegeta');
  });
});
