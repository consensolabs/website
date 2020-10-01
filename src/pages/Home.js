import React from 'react';
import Hero from '../components/Hero';
import Description from '../components/Description';
import Solution from '../components/Solution';
import Technology from '../components/Technology';
import Footer from '../components/Footer';
import Cta from '../components/Cta';
import { Helmet } from 'react-helmet';
const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Consenso Labs</title>
        <meta
          name='description'
          content='Consenso Labs is a blockchain research and development lab where we confront ourselves to solve some of the most challenging finance, legal and economical use cases by utilizing the cutting edge technology platforms to achieve efficiency and the consensus among the disparate parties.'
        />
        <meta name='robots' content='index, follow' />
        <meta
          name='keywords'
          content=' blockchain , blockchain technology, blockchain research lab in Bangalore, cryptography, Arbitration '
        />
      </Helmet>
      <Hero />
      <Description />
      <Solution />
      <Technology />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
