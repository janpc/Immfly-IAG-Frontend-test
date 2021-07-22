import * as React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import List from './';

describe('Pokemon List Item Tests', () => {
  const generation = { number: 1, pokemons: [{ name: 'charizard' }] };

  beforeEach(() => {
    render(<List generation={generation} />);
  });

  it('Pokemon List by Generation have the generation title', () => {
    const title = screen.getByText(`Generation ${generation.number}`);
    expect(title).toBeInTheDocument();
  });

  it('Pokemon List by Generation have the generation pokemon count', () => {
    const count = screen.getByAltText(`${generation.pokemons.length} pokemon`);

    expect(count).toBeInTheDocument();
  });

  it('Pokemon List by Generation prints pokemon item', () => {
    const pokemonName = screen.getByText(generation.pokemons[0].name);
    expect(pokemonName).toBeInTheDocument();

    const image = screen.getByAltText(generation.pokemons[0].name);
    expect(image).toHaveAttribute(
      'src',
      `https://img.pokemondb.net/sprites/black-white/anim/normal/${generation.pokemons[0].name}.gif`
    );
  });
});
