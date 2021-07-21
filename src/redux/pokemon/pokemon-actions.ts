import * as PokemonTypes from './pokemon-types';

import { getPokemonsByGeneration, getPokemonByName } from '../../api';

export const getPokemonsRequest = () => ({
  type: PokemonTypes.GET_POKEMONS_REQUEST
});

export const getPokemonsError = (message: string) => ({
  type: PokemonTypes.GET_POKEMONS_ERROR,
  payload: message
});

export const getPokemonsSuccess = (pokemons: [any]) => ({
  type: PokemonTypes.GET_POKEMONS_SUCCESS,
  payload: pokemons
});

export function getPokemons(generation: number) {
  return async function getPokemonsThunk(dispatch: Function) {
    dispatch(getPokemonsRequest());
    try {
      const response = await getPokemonsByGeneration(generation);

      return dispatch(getPokemonsSuccess(response.data.pokemon_species));
    } catch (error) {
      return dispatch(getPokemonsError(error.message));
    }
  };
}

export const getPokemonsReset = () => ({
  type: PokemonTypes.GET_POKEMONS_RESET
});

export const setGeneration = (generation: number) => ({
  type: PokemonTypes.SET_GENERATION,
  payload: generation
});

export const getPokemonInfoRequest = () => ({
  type: PokemonTypes.GET_POKEMON_INFO_REQUEST
});

export const getPokemonInfoError = (message: string) => ({
  type: PokemonTypes.GET_POKEMON_INFO_ERROR,
  payload: message
});

export const getPokemonInfoSuccess = (pokemonInfo: {}) => ({
  type: PokemonTypes.GET_POKEMON_INFO_SUCCESS,
  payload: pokemonInfo
});

export function getPokemonInfo(name: string) {
  return async function getPokemonInfoThunk(dispatch: Function) {
    dispatch(getPokemonInfoRequest());
    try {
      const response = await getPokemonByName(name);
      return dispatch(getPokemonInfoSuccess(response.data));
    } catch (error) {
      return dispatch(getPokemonInfoError(error.message));
    }
  };
}

export const getPokemonInfoReset = () => ({
  type: PokemonTypes.GET_POKEMON_INFO_RESET
});
