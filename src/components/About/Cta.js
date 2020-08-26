import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Cta = () => {
  return (
    <section className='text-gray-700 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='lg:w-3/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto '>
          <h1 className='flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900'>
            Interested in exploring Blockchain for your business?
          </h1>
          <Link
           to="/contact">
          <button className='flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0'>
            Get Started
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Cta;
