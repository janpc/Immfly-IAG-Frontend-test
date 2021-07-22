import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import immflyLogo from '../../img/immfly-logo.png';
import pokemonLogo from '../../img/Pokemon-Logo.png';

import PokemonListByGeneration from '../../components/PokemonListByGeneration';
import LoadingSpinner from '../../components/LoadingSpinner';

import { pokemonSelector } from '../../redux/pokemon/pokemon-selectors';
import {
  getPokemons,
  getPokemonInfoReset
} from '../../redux/pokemon/pokemon-actions';

import { Background, ImmflyLogo, PokemonLogo } from './style';

export default function PokemonList() {
  const dispatch = useDispatch();

  const { generations, isGettingPokemons, getPokemonsError, generation } =
    useSelector(pokemonSelector);
  const { ref, inView } = useInView();

  useEffect(() => {
    dispatch(getPokemonInfoReset());
  }, []);

  useEffect(() => {
    if (inView && generation <= 8) {
      dispatch(getPokemons(generation));
    }
  }, [dispatch, inView]);

  return (
    <Background>
      <ImmflyLogo alt="Immfly logo" src={immflyLogo} />
      <PokemonLogo alt="Pokemon logo" src={pokemonLogo} />
      {generations &&
        generations.map((g: { number: number; pokemons: any[] }) => (
          <PokemonListByGeneration key={g.number} generation={g} />
        ))}
      <div ref={ref}>
        {isGettingPokemons && <LoadingSpinner />}
        {getPokemonsError && <p>{getPokemonsError}</p>}
      </div>
    </Background>
  );
}
