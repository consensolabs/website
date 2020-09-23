import React from 'react';
import AboutDescription from '../components/About/AboutDescription';
import AboutUs from '../components/About/AboutUs';
import Cta from '../components/About/Cta';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>About | Consenso Labs</title>
        <meta
          name='description'
          content='Consenso Labs is a blockchain research and development lab where we confront ourselves to solve some of the most challenging finance, legal and economical use cases by utilizing the cutting edge technology platforms to achieve efficiency and the consensus among the disparate parties.'
        />
        <meta name='robots' content='index, follow' />
        <meta
          name='keywords'
          content=' blockchain , blockchain technology, blockchain research lab in Bangalore, cryptography '
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
