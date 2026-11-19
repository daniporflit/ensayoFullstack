import { describe, expect, it } from 'vitest';
import { getFullName, greet } from '../src/helpers/string.helpers';

describe('strings.helpers', () => {
  it('getFullName debe unir nombre y apellido con un espacio', () => {
    expect(getFullName('Tony', 'Stark')).toBe('Tony Stark');
    expect(getFullName('Peter', "O'Neal")).toBe("Peter O'Neal");
  });

  it('greet debe saludar', () => {
    expect(greet('Goku')).toBe('Hola Goku');
  });
});
