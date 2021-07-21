import { createSelector } from 'reselect';

export const selectPokemonState = (state: any) => state.pokemon;

export const pokemonSelector = createSelector(
  [selectPokemonState],
  (pokemon) => pokemon
);
