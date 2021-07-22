import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getPokemonInfo } from '../../redux/pokemon/pokemon-actions';
import { pokemonSelector } from '../../redux/pokemon/pokemon-selectors';

export default function PokemonDetails() {
  // default is bulbasur to test it
  const { name = 'bulbasaur' } = useParams<{ name: string }>();

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
          <p>hola</p>
          <img
            alt={name}
            src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
          />
          <p>{name}</p>
          <p>{`ID: ${pokemonInfo.id}`}</p>
          <p>Types:</p>
          {pokemonInfo.types.map((t: { type: { name: string } }) => (
            <p key={t.type.name}>{t.type.name}</p>
          ))}
          <p>{`Height: ${pokemonInfo.height}`}</p>
          <p>Abilities:</p>
          {pokemonInfo.abilities.map((a: { ability: { name: string } }) => (
            <p key={a.ability.name}>{a.ability.name}</p>
          ))}
        </>
      )}
    </>
  );
}
