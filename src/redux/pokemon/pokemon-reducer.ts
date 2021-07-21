import * as PokemonTypes from './pokemon-types';

type PokemonsStateType = {
  pokemons: any;
  generation: number;
  isGettingPokemons: boolean;
  getPokemonsError: any;
  getPokemonsSucces: boolean;

  pokemonInfo: any;
  isGettingPokemonInfo: boolean;
  getPokemonInfoError: any;
  getPokemonInfoSucces: boolean;
};

type ActionType = {
  type: string;
  payload: any;
};

export const PokemonsInitialState = {
  pokemons: [],
  generation: 1,
  isGettingPokemons: false,
  getPokemonsError: null,
  getPokemonsSucces: false,

  pokemonInfo: {},
  isGettingPokemonInfo: false,
  getPokemonInfoError: null,
  getPokemonInfoSucces: false
};

const pokemonReducer = (
  state: PokemonsStateType = PokemonsInitialState,
  action: ActionType
) => {
  switch (action.type) {
    case PokemonTypes.GET_POKEMONS_REQUEST: {
      return {
        ...state,
        isGettingPokemons: true,
        getPokemonsError: null,
        getPokemonsSucces: false
      };
    }
    case PokemonTypes.GET_POKEMONS_ERROR: {
      return {
        ...state,
        isGettingPokemons: false,
        getPokemonsError: action.payload
      };
    }
    case PokemonTypes.GET_POKEMONS_SUCCESS: {
      return {
        ...state,
        getPokemonsSucces: true,
        isGettingPokemons: false,
        getPokemonsError: null,
        pokemons: action.payload
      };
    }
    case PokemonTypes.GET_POKEMONS_RESET: {
      return {
        ...state,
        pokemons: [],
        isGettingPokemons: false,
        getPokemonsError: null,
        getPokemonsSucces: false
      };
    }

    case PokemonTypes.SET_GENERATION: {
      return {
        ...state,
        generation: action.payload
      };
    }

    case PokemonTypes.GET_POKEMON_INFO_REQUEST: {
      return {
        ...state,
        isGettingPokemonInfo: true,
        getPokemonInfoError: null,
        getPokemonInfoSucces: false
      };
    }
    case PokemonTypes.GET_POKEMON_INFO_ERROR: {
      return {
        ...state,
        isGettingPokemonInfo: false,
        getPokemonInfoError: action.payload
      };
    }
    case PokemonTypes.GET_POKEMON_INFO_SUCCESS: {
      return {
        ...state,
        getPokemonInfoSucces: true,
        isGettingPokemonInfo: false,
        getPokemonInfoError: null,
        pokemonInfo: action.payload
      };
    }
    case PokemonTypes.GET_POKEMON_INFO_RESET: {
      return {
        ...state,
        pokemonInfo: {},
        isGettingPokemonInfo: false,
        getPokemonInfoError: null,
        getPokemonInfoSucces: false
      };
    }
    default: {
      return state;
    }
  }
};

export default pokemonReducer;
