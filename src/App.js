import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import NoMatchPage from './Pages/404';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Navigation/Header';
import { CookieBanner } from '@palmabit/react-cookie-law';
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
      {/*    <CookieBanner*/}
      {/*     styles={{*/}
      {/*  dialog: { bottom : '0px' , position : "fixed", padding : '1rem', backgroundColor : "white", width : "100%" }*/}
      {/*}}*/}
      {/*      message="Cookie banner message"*/}
      {/*      wholeDomain={true}*/}
      {/*      onAccept = {() => {}}*/}
      {/*      onAcceptPreferences = {() => {}}*/}
      {/*      onAcceptStatistics = {() => {}}*/}
      {/*      onAcceptMarketing = {() => {}}*/}
      {/*    />*/}
    </>
  );
}

export default App;
