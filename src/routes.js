import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Builder from './pages/Builder';
import Rules from './pages/Rules';

export default function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/builder" component={Builder} />
      <Route path="/rules" component={Rules} />
    </Switch>
  )
}