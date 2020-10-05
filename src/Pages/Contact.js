import React from 'react';
import ContactForm from '../components/Contact/Contact';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Contact | Consenso Labs</title>
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
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
