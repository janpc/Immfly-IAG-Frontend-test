import React from 'react';
import PokemonItem from '../PokemonItem';

import {
  Container,
  GenerationTitle,
  InfoContainer,
  GenerationCount
} from './style';

type Generation = {
  number: number;
  pokemons: { id: number; name: string; url: string }[];
};

export default function PokemonListByGeneration({
  generation
}: {
  generation: Generation;
}) {
  const { number, pokemons } = generation;
  return (
    <>
      <InfoContainer>
        <GenerationTitle>{`Generation ${number}`}</GenerationTitle>
        <GenerationCount>{`${pokemons.length} pokemon`}</GenerationCount>
      </InfoContainer>
      <Container>
        {pokemons.map((pokemon: { id: number; name: string; url: string }) => (
          <PokemonItem key={pokemon.id} name={pokemon.name} />
        ))}
      </Container>
    </>
  );
}
