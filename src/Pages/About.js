import React from 'react';
import AboutDescription from '../components/About/AboutDescription';
import AboutUs from '../components/About/AboutUs';
import Cta from '../components/About/Cta';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';
const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Consenso Labs</title>
        <meta
          name='description'
          content='Consenso Labs was started as a research lab to bring in futurist programmers and visionaries to explore the decentralization and other accompanying technologies to solve some of the fundamental problems.'
        />
        <meta name='robots' content='index, follow' />
        <meta
          name='keywords'
          content=' blockchain , blockchain technology, blockchain research lab in Bangalore, cryptography, Arbitration '
        />
      </Helmet>
      <AboutDescription />
      <AboutUs />
      <Cta />
      <Footer />
    </>
  );
};

export default About;
