import React from 'react';
import Teams from '../../assets/img/teams.png';
const TeamDescription = () => {
  return (
    <section className='text-gray-700 body-font'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            People make the difference
            {/* <br className='hidden lg:inline-block'>readymade gluten /></br> */}
          </h1>
          <p className='mb-8 leading-relaxed'>
            We believe people and talent are the real core value of any company
            and our most important asset. We invest time selecting the people
            that join our team and work hard in making sure they keep growing
            with us. We measure our standards not only by technical knowledge
            and field expertise, but by the ability to collaborate and utmost
            professionalism. Value is created from within, and people is the
            cornerstone for longlasting success.
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
