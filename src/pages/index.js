import React from 'react';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Team from '../pages/Team';
import Contact from '../Pages/Contact';
import NoMatchPage from '../Pages/404';
import '../build/tailwind.css';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../components/Navigation/Header';

function Index() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/team'>
            <Team />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    </>
  );
}

export default Index;
