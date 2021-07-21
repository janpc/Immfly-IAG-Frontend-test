import React from 'react';
import { useParams } from 'react-router-dom';

export default function PokemonDetails() {
  const { name } = useParams<{ name: string }>();
  return <div>{name}</div>;
}
