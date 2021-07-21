import { combineReducers } from 'redux';

import pokemonReducer from './pokemon/pokemon-reducer';

const rootReducer = combineReducers({
  pokemon: pokemonReducer
});

export default rootReducer;
