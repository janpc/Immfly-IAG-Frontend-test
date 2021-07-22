import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'intersection-observer';

import store from '../../redux/store';

import List from './';

describe('Pokemon List Tests', () => {
  beforeEach(() => {
    render(
      <Router>
        <Provider store={store}>
          <List />
        </Provider>
      </Router>
    );
  });

  it('Prints Immfly logo', () => {
    const image = screen.getByAltText('Immfly logo');
    expect(image).toHaveAttribute('src', '../../img/imfly-logo.png');
  });

  it('Prints Pokemon logo', () => {
    const image = screen.getByAltText('Pokemon logo');
    expect(image).toHaveAttribute('src', '../../img/Pokemon-Logo.png');
  });

  it('Pokemon List by Generation have the generation title', async () => {
    const title = await screen.findByText(`Generation 1`);
    expect(title).toBeInTheDocument();
  });

  it('Pokemon List by Generation have the generation pokemon count', async () => {
    const count = await screen.findByText('151 pokemon');

    expect(count).toBeInTheDocument();
  });

  it('Pokemon List by Generation prints pokemon item', async () => {
    const pokemonName = await screen.findByText('charizard');
    expect(pokemonName).toBeInTheDocument();

    const image = await screen.findByAltText('charizard');
    expect(image).toHaveAttribute(
      'src',
      'https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif'
    );
  });
});
