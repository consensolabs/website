import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Team from './Pages/Team';
import Contact from './Pages/Contact';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
