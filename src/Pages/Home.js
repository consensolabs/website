import React from 'react';
import Hero from '../components/Hero';
import Description from '../components/Description';
import Solution from '../components/Solution';
import Technology from '../components/Technology';
import Footer from '../components/Footer';
import Cta from '../components/Cta';
const Home = () => {
  return (
    <>
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
