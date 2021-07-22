import React from 'react';

export default function PokemonItem({ name }: { name: string }) {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}
