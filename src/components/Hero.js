import React from 'react';
import HeroImage from '../assets/img/hero.svg';
import {HashLink as Link} from "react-router-hash-link";

function Hero() {
  return (
    <>
      <section className='bg-gradient-to-r from-primary via-indigo-500 to-blue-400 text-gray-700 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-textWhite'>
            Web 3.0 research, development, and services
            </h1>
            <p className='text-textWhite mb-8 leading-relaxed'>
            <span style={{fontWeight : "700"}}>Consenso Labs</span> is a web3 research and development lab where we confront ourselves to solve some of the critical problems in the crypto space.
            </p>
            
            <p className='text-textWhite mb-8 leading-relaxed'>
            Currently, we are working on our flagship product (Safient) designed to solve in the trustless atmosphere the issue related to the valid inheritance of crypto assets and recovery of assets on account of accidental losses.

            </p>
            <div className='flex justify-center'>
              <a
                  href='https://safient.io'
                  className='mr-5 hover:text-gray-900'
                  target='_blank'
                  >
                <button className='inline-flex text-textWhite bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                  Learn More
                </button>
              </a>

            </div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img
              className='object-cover object-center rounded'
              alt='hero'
              src={HeroImage}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
