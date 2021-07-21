import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PokemonDetails from './pages/PokemonDetail';
import PokemonList from './pages/PokemonList';

export default function App() {
  return (
    <Router>
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
    </Router>
  );
}
