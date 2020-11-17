import React from 'react';
import ContactForm from '../components/Contact/Contact';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player'
const LawtechIntro = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Lawtech | Consenso Labs</title>
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
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center  items-center'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
          Arbchain submission video for Lawtech sandbox application.
          </h1>
          <div className='flex text-justiy items-center' style={{width: '80%', height: '600px'}}> 
          <ReactPlayer 
        
        url="https://youtu.be/tPuTKhuddHk"
        width='100%'
        height='100%'
        controls
        playing
        playIcon
/>
</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LawtechIntro;
