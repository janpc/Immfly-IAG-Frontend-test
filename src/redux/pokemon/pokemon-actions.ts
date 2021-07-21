import * as PokemonTypes from './pokemon-types';

import { getPokemonsByGeneration, getPokemonByName } from '../../api';

export const getPokemonsRequest = () => ({
  type: PokemonTypes.GET_POKEMONS_REQUEST
});

export const getPokemonsError = (message: string) => ({
  type: PokemonTypes.GET_POKEMONS_ERROR,
  payload: message
});

export function getPokemons(generation: number) {
  return async function getPokemonsThunk(dispatch: Function) {
    dispatch(getPokemonsRequest());
    try {
      const response = await getPokemonsByGeneration(generation);

      return dispatch(getPokemonsSuccess(response));
    } catch (error) {
      dispatch(getPokemonsError(error.message));
    }
  };
}

export const getPokemonsSuccess = (pokemons: [any]) => ({
  type: PokemonTypes.GET_POKEMONS_SUCCESS,
  payload: pokemons
});

export const getPokemonsReset = () => ({
  type: PokemonTypes.GET_POKEMONS_RESET
});

export const setGeneration = (generation: number) => ({
  type: PokemonTypes.SET_GENERATION,
  payload: generation
});

export const getMemeInfoRequest = () => ({
  type: PokemonTypes.GET_POKEMON_INFO_REQUEST
});

export const getMemeInfoError = (message: string) => ({
  type: PokemonTypes.GET_POKEMON_INFO_ERROR,
  payload: message
});

export function getMemeInfo(name: string) {
  return async function getMemeInfoThunk(dispatch: Function) {
    dispatch(getMemeInfoRequest());
    try {
      const response = await getPokemonByName(name);

      return dispatch(getMemeInfoSuccess(response));
    } catch (error) {
      dispatch(getMemeInfoError(error.message));
    }
  };
}

export const getMemeInfoSuccess = (pokemonInfo: {}) => ({
  type: PokemonTypes.GET_POKEMON_INFO_SUCCESS,
  payload: pokemonInfo
});

export const getMemeInfoReset = () => ({
  type: PokemonTypes.GET_POKEMON_INFO_RESET
});
