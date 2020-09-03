import React from 'react';
import { Link } from 'react-router-dom';

const TeamsCta = () => {
  return (
    <>
      <section className='text-gray-700 body-font  '>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto mobile-center'>
            <h1 className='flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900'>
              Your next adventure starts here. Join our team now.
            </h1>
            <div className='flex justify-center mobile-center'>
              <a
                href='https://angel.co/company/consensolabs/jobs'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='flex-shrink-0  justify-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0 sm:items-center '>
                  Explore Roles
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TeamsCta;
