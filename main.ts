import { Owner } from './data/heroes.data';
import { getHeroesByOwner, getHeroPower } from './helpers/heroes.helpers';
import { getFullName } from './helpers/strings.helpers';
import { getHeroByIdAsync } from './helpers/async.helpers';

const app = document.querySelector<HTMLDivElement>('#app')!;

const marvelHeroes = getHeroesByOwner(Owner.Marvel)
  .map((hero) => `<li>${hero.name}</li>`)
  .join('');

app.innerHTML = `
  <h1>${getFullName('Tony', 'Stark')}</h1>
  <p>${getHeroPower(1)}</p>
  <h2>Héroes de Marvel</h2>
  <ul>${marvelHeroes}</ul>
  <p id="async">Cargando...</p>
`;

getHeroByIdAsync(3)
  .then((hero) => {
    document.querySelector('#async')!.textContent = `Héroe cargado: ${hero.name}`;
  })
  .catch((error: Error) => {
    document.querySelector('#async')!.textContent = error.message;
  });
