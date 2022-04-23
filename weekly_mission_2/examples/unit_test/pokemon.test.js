import Pokemon from './pokemon.js'

test('1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Pikachu')
  expect(myPokemon.name).toBe('Pikachu'); // Corrige esta prueba
});

test('2) Create type pokemon', () => {
  const myPokemon = new Pokemon('Pikachu', 'agua')
  expect(myPokemon.type).toBe('agua');
});
