import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  getPokemons,
  getPokemonInfoReset
} from '../../redux/pokemon/pokemon-actions';
import { pokemonSelector } from '../../redux/pokemon/pokemon-selectors';

export default function PokemonDetails() {
  const dispatch = useDispatch();

  const { pokemons, isGettingPokemons, getPokemonsError, generation } =
    useSelector(pokemonSelector);

  useEffect(() => {
    dispatch(getPokemonInfoReset());
  }, []);

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(getPokemons(generation));
    }
  }, [dispatch, generation]);

  return (
    <>
      {isGettingPokemons && <p>loading...</p>}
      {getPokemonsError && <p>{getPokemonsError}</p>}
      {pokemons.map((pokemon: { id: number; name: string; url: string }) => (
        <Link to={`/pokemon/${pokemon.name}`}>
          <img
            alt={pokemon.name}
            src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
            loading="lazy"
          />
        </Link>
      ))}
    </>
  );
}
