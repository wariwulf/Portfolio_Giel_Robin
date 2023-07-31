import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/home';
import About from '../About/about';
import Error from '../Error/error'
import Header from '../composant/header/header';

const Router = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            {/* Route par défaut pour les URL incorrectes */}
            <Route component={Error} />
        </Switch>
    </BrowserRouter>
  );
};

export default Router;
