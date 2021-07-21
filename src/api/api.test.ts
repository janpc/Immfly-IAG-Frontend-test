import '@testing-library/jest-dom/extend-expect';
import { getPokemonsByGeneration, getPokemonByName } from './api';

describe('Get all pokemons info by generation', () => {
  it('Returns all the pokemon species', () => {
    return getPokemonsByGeneration(1).then((data) => {
      expect(data?.pokemon_species?.length).toBe(151);
    });
  });
  it('Pokemons have its name', () => {
    return getPokemonsByGeneration(1).then((data) => {
      expect(data?.pokemon_species[0].name).toBeDefined();
    });
  });
});

describe('Get pokemon info by its name', () => {
  it('Pokemons have its id', () => {
    return getPokemonByName('charizard').then((data) => {
      expect(data?.id).toBe(6);
    });
  });
  it('Pokemons have its name', () => {
    return getPokemonByName('charizard').then((data) => {
      expect(data?.name).toBe('charizard');
    });
  });
});
