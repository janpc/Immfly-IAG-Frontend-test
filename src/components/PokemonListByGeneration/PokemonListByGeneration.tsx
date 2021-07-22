import React from 'react';
import PokemonItem from '../PokemonItem';

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
    <div>
      <p>{`Generation ${number}`}</p>
      <p>{`${pokemons.length} pokemon`}</p>
      {pokemons.map((pokemon: { id: number; name: string; url: string }) => (
        <PokemonItem key={pokemon.id} name={pokemon.name} />
      ))}
    </div>
  );
}
