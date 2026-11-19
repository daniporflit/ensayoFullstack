# Heroes TS — Práctica de debugging

**Nivel:** 1 · Básico
**Errores intencionales:** 8

Proyecto de TypeScript puro (sin React), basado en el repo *reforzamiento*: héroes con `enum Owner`, filtros, template strings, desestructuración, promesas y la "tarea" del `useState` con tuplas.

Los tests están en la carpeta `tests/`. El `tsconfig.json` también revisa esa carpeta, así que un error de tipos en un test también rompe la compilación.

## Reglas del ejercicio

1. **No cambies los valores esperados** de los tests (lo que va dentro de `expect(...)`). Los tests describen el comportamiento correcto.
2. Los errores pueden estar en **cualquier parte**: código en `src/`, imports o setup de los tests, o archivos de configuración (`package.json`, `tsconfig*.json`, `vite.config.ts`).
3. Un error puede esconder a otro: al arreglar uno, pueden aparecer fallos nuevos. Es normal.
4. Anota cada error que encuentres: **archivo, línea, qué estaba mal y cómo lo arreglaste**. Así practicas para la evaluación.

## Cómo trabajar

```bash
npm install
npm run build     # tsc + vite build  → errores de COMPILACIÓN
npm test          # vitest run        → errores de PRUEBAS
```

Terminaste cuando:

- [ ] `npm run build` termina sin errores
- [ ] `npm test` muestra todos los tests en verde
