import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { getPokemonInfo } from '../../redux/pokemon/pokemon-actions';
import { pokemonSelector } from '../../redux/pokemon/pokemon-selectors';

import LoadingSpinner from '../../components/LoadingSpinner';

import {
  Background,
  Container,
  PokemonImage,
  PokemonName,
  PokemonDetail,
  CloseButton
} from './style';

export default function PokemonDetails() {
  // default is bulbasur to test it
  const { name = 'bulbasaur' } = useParams<{ name: string }>();

  const dispatch = useDispatch();
  const history = useHistory();

  const {
    pokemonInfo,
    isGettingInfoDetails,
    getPokemonInfosError,
    getPokemonInfoSucces
  } = useSelector(pokemonSelector);

  useEffect(() => {
    dispatch(getPokemonInfo(name));
  }, [dispatch, name]);

  function goBack() {
    history.goBack();
  }
  return (
    <Background>
      {isGettingInfoDetails && <LoadingSpinner />}
      {getPokemonInfosError && <p>{getPokemonInfosError}</p>}
      {getPokemonInfoSucces && (
        <Container>
          <CloseButton type="button" onClick={goBack}>
            x
          </CloseButton>
          <PokemonImage
            alt={name}
            src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
          />
          <PokemonName>{name}</PokemonName>
          <PokemonDetail>
            <span>ID:</span>
            <span>{pokemonInfo.id}</span>
          </PokemonDetail>
          <PokemonDetail>
            <span>Types:</span>
            {pokemonInfo.types.map((t: { type: { name: string } }) => (
              <p key={t.type.name}>{t.type.name}</p>
            ))}
          </PokemonDetail>
          <PokemonDetail>
            <span>Height: </span>
            <span>{pokemonInfo.height}</span>
          </PokemonDetail>
          <PokemonDetail>
            <span>Abilities:</span>
            {pokemonInfo.abilities.map((a: { ability: { name: string } }) => (
              <p key={a.ability.name}>{a.ability.name}</p>
            ))}
          </PokemonDetail>
        </Container>
      )}
    </Background>
  );
}
