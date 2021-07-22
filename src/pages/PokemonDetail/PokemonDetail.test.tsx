import * as React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import store from '../../redux/store';

import Details from './';

describe('Pokemon Detail Tests', () => {
  beforeEach(() => {
    render(
      <Router initialEntries={['/pokemon/bulbasaur']}>
        <Provider store={store}>
          <Details />
        </Provider>
      </Router>
    );
  });

  it('Prints pokemon img', async () => {
    const image = await screen.findByAltText('bulbasaur');
    expect(image).toHaveAttribute(
      'src',
      'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif'
    );
  });

  it('Prints pokemon name', async () => {
    const name = await screen.findByText('bulbasaur');
    expect(name).toBeInTheDocument();
  });

  it('Prints id', async () => {
    const title = await screen.findByText('ID:');
    expect(title).toBeInTheDocument();

    const id = await screen.findByText('1');
    expect(id).toBeInTheDocument();
  });

  it('Prints Type', async () => {
    const title = await screen.findByText('Types:');
    expect(title).toBeInTheDocument();

    const type1 = await screen.findByText('grass');
    expect(type1).toBeInTheDocument();

    const type2 = await screen.findByText('poison');
    expect(type2).toBeInTheDocument();
  });

  it('Prints Height', async () => {
    const title = await screen.findByText('Height:');
    expect(title).toBeInTheDocument();

    const height = await screen.findByText('7');
    expect(height).toBeInTheDocument();
  });

  it('Prints Abilities', async () => {
    const title = await screen.findByText('Abilities:');
    expect(title).toBeInTheDocument();

    const ability1 = await screen.findByText('overgrow');
    expect(ability1).toBeInTheDocument();

    const ability2 = await screen.findByText('chlorophyll');
    expect(ability2).toBeInTheDocument();
  });
});
