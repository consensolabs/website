import React, { useEffect } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import InfoPageRajiv from './Pages/InfoPageRajiv';
import NoMatchPage from './Pages/404';
import ReactGA from 'react-ga';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Navigation/Header';

// function analytics() {
//   ReactGA.initialize('');
//   ReactGA.pageview('/');
//    ReactGA.set({ page: location.pathname });
// }
function App() {
  useEffect(() => {
    ReactGA.initialize('UA-178594238-1');
    //ReactGA.pageview(window.location.pathname + window.length.search);
    ReactGA.pageview('/');
    ReactGA.pageview('/about');
    ReactGA.pageview('/team');
    ReactGA.pageview('/contact');
  }, []);

  // useEffect(() => {
  //   console.log(window.location.search);
  // }, []);
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
          <Route path='/rajiv'>
            <InfoPageRajiv />
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
