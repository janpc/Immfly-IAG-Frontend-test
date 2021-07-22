import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PokemonItem from './PokemonItem';

describe('Pokemon List Item Tests', () => {
  const name = 'charizard';

  beforeEach(() => {
    render(
      <Router>
        <PokemonItem name={name} />
      </Router>
    );
  });

  it('Pokemon List Item have the Name of the Pokemon', () => {
    const pokemonName = screen.getByText(name);
    expect(pokemonName).toBeInTheDocument();
  });

  it('Pokemon List Item have the Pokemon Picture', () => {
    const image = screen.getByAltText(name);

    expect(image).toHaveAttribute(
      'src',
      `https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`
    );
  });
});
