import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import immflyLogo from '../../img/immfly-logo.png';
import pokemonLogo from '../../img/Pokemon-Logo.png';

import PokemonListByGeneration from '../../components/PokemonListByGeneration';

import {
  getPokemons,
  getPokemonInfoReset
} from '../../redux/pokemon/pokemon-actions';
import { pokemonSelector } from '../../redux/pokemon/pokemon-selectors';

export default function PokemonList() {
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
      <img alt="Immfly logo" src={immflyLogo} width="200px" />
      <img alt="Pokemon logo" src={pokemonLogo} width="500px" />
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
