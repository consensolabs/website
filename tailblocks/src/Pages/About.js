import React from 'react';
import Header from '../components/Header';
import Description from '../components/Description';
import AboutDescription from '../components/About/About_description';
import AboutUs from '../components/About/AboutUs';
import Cta from '../components/About/Cta';
import Footer from '../components/Footer';
const About = () => {
  return (
    <>
      <AboutDescription />
      <AboutUs />
      <Cta />
      <Footer />
    </>
  );
};

export default About;
