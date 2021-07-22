import React from 'react';
import { Link } from 'react-router-dom';

import { Container, PokemonImage, PokemonName } from './style';

export default function PokemonItem({ name }: { name: string }) {
  return (
    <Link to={`/pokemon/${name}`}>
      <Container>
        <PokemonImage
          alt={name}
          src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
          loading="lazy"
        />
        <PokemonName>{name}</PokemonName>
      </Container>
    </Link>
  );
}
