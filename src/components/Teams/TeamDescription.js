import React from 'react';
import Teams from '../../assets/img/teams.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const TeamDescription = () => {
  return (
    <section className='text-gray-700 body-font' data-aos='zoom-in'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div
          className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'
          data-aos='zoom-in'
        >
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            People make the difference
          </h1>
          <p className='mb-8 leading-relaxed'>
            We believe people and talent are the real core value of any company
            and our most important asset. Our core team is comprised of
            financial, legal, and blockchain technology connoisseurs and a
            passionate development team with a great amount of time spent on
            understanding issues in the existing infrastructure.
          </p>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            className='object-cover object-center rounded'
            alt='hero'
            src={Teams}
          />
        </div>
      </div>
    </section>
  );
};

export default TeamDescription;
