import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import AllBeers from './AllBeers';
import NewBeer from './NewBeer';
import BeerDetails from './BeerDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route exact path="/beers" component={AllBeers} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/randombeer" component={BeerDetails} />
        <Route exact path="/beer/:id" component={BeerDetails} />
      </Switch>
    </div>
  );
}

export default App;
