import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import PokemonDetails from './pages/PokemonDetail';
import PokemonList from './pages/PokemonList';

import themes from './style/themes';

export default function App() {
  const [isLight, setIsLight] = useState(true);

  function toggleTheme() {
    setIsLight(!isLight);
  }
  return (
    <ThemeProvider theme={isLight ? themes.light : themes.dark}>
      <button type="button" onClick={toggleTheme}>
        {isLight ? 'dark mode' : 'light mode'}
      </button>
      <Switch>
        <Route path="/pokemon/:name">
          <PokemonDetails />
        </Route>
        <Route path="/pokemon">
          <PokemonList />
        </Route>
        <Route path="/">
          <Redirect to="/pokemon" />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}
