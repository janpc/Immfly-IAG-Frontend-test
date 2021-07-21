import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getPokemonInfo } from '../../redux/pokemon/pokemon-actions';
import { pokemonSelector } from '../../redux/pokemon/pokemon-selectors';

export default function PokemonDetails() {
  const { name } = useParams<{ name: string }>();

  const dispatch = useDispatch();

  const {
    pokemonInfo,
    isGettingInfoDetails,
    getPokemonInfosError,
    getPokemonInfoSucces
  } = useSelector(pokemonSelector);

  useEffect(() => {
    dispatch(getPokemonInfo(name));
  }, [dispatch, name]);

  return (
    <>
      {isGettingInfoDetails && <p>loading...</p>}
      {getPokemonInfosError && <p>{getPokemonInfosError}</p>}
      {getPokemonInfoSucces && (
        <>
          <p>{`ID: ${pokemonInfo.id}`}</p>
          <p>{`Name: ${pokemonInfo.name}`}</p>
          <p>Types:</p>
          {pokemonInfo.types.map((t: { type: { name: string } }) => (
            <p>{`-> ${t.type.name}`}</p>
          ))}
          <p>{`Height: ${pokemonInfo.height}`}</p>
          <p>Abilities:</p>
          {pokemonInfo.abilities.map((a: { ability: { name: string } }) => (
            <p>{`-> ${a.ability.name}`}</p>
          ))}
        </>
      )}
    </>
  );
}
