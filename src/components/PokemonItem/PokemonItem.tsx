import React from 'react';
import { Link } from 'react-router-dom';

export default function PokemonItem({ name }: { name: string }) {
  return (
    <Link to={`/pokemon/${name}`}>
      <div>
        <img
          alt={name}
          src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
          loading="lazy"
        />
        <p>{name}</p>
      </div>
    </Link>
  );
}
