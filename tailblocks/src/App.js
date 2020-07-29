import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import Team from './pages/team';
import Contact from './pages/contact';
import NoMatchPage from './pages/404';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
function App() {
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

export default App;
