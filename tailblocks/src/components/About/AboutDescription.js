import React from 'react';
import About from '../../assets/img/about.svg';
const AboutDescription = () => {
  return (
    <section className='text-gray-700 body-font'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            Leader in Blockchain Development and Solutions
            {/* <br className='hidden lg:inline-block'>readymade gluten /></br> */}
          </h1>
          <p className='mb-8 leading-relaxed'>
            Our Blockchain specialists perform best possible solutions on
            various platforms such as Ethereum, Hyperledger, EOS. With our
            thorough experience in blockchain domain, clients get in-house
            blockchain developers, analysts, security advisors for their
            projects.
          </p>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            className='object-cover object-center rounded'
            alt='hero'
            src={About}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutDescription;
