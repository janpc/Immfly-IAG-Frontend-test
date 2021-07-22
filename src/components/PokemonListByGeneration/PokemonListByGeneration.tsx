import React from 'react';

type Generation = {
  number: number;
  pokemons: { name: string }[];
};

export default function PokemonListByGeneration({
  generation
}: {
  generation: Generation;
}) {
  return <div>{generation.number}</div>;
}
