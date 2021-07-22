import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import PokemonDetails from './pages/PokemonDetail';
import PokemonList from './pages/PokemonList';

import themes from './style/themes';
import { ThemeButton, ThemeIcon } from './style/mainStyle';

import darkIcon from './img/darkMode.svg';
import lightIcon from './img/lightMode.svg';

export default function App() {
  const [isLight, setIsLight] = useState(true);

  function toggleTheme() {
    setIsLight(!isLight);
  }
  return (
    <ThemeProvider theme={isLight ? themes.light : themes.dark}>
      <Reset />
      <ThemeButton type="button" onClick={toggleTheme}>
        <ThemeIcon alt="change mode" src={isLight ? darkIcon : lightIcon} />
      </ThemeButton>
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
