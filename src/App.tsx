import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pokemon/:name">
          <p>pokemon</p>
        </Route>
        <Route path="/pokemon">
          <p>list</p>
        </Route>
        <Route path="/">
          <Redirect to="/pokemon" />
        </Route>
      </Switch>
    </Router>
  );
}
