import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';

import PokemonListByGeneration from '../../components/PokemonListByGeneration';

import {
  getPokemons,
  getPokemonInfoReset
} from '../../redux/pokemon/pokemon-actions';
import { pokemonSelector } from '../../redux/pokemon/pokemon-selectors';

export default function PokemonDetails() {
  const dispatch = useDispatch();

  const { generations, isGettingPokemons, getPokemonsError, generation } =
    useSelector(pokemonSelector);
  const { ref, inView } = useInView();

  useEffect(() => {
    dispatch(getPokemonInfoReset());
  }, []);

  useEffect(() => {
    if (inView) {
      dispatch(getPokemons(generation));
    }
  }, [dispatch, inView]);

  return (
    <>
      {generations &&
        generations.map((g: { number: number; pokemons: any[] }) => (
          <PokemonListByGeneration key={g.number} generation={g} />
        ))}
      <div ref={ref}>
        {isGettingPokemons && <p>loading...</p>}
        {getPokemonsError && <p>{getPokemonsError}</p>}
      </div>
    </>
  );
}
