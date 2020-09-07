import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Description() {
  return (
    <>
      <section
        data-aos='fade-right'
        className='text-gray-700 body-font'
        id='services'
      >
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
              Our services
            </h1>
            <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
              Our dedicated and passionate team provides a variety of solutions
              related to application, tools, infrastructure, business logic
              development for several blockchain platforms..
            </p>
            <div className='flex mt-6 justify-center'>
              <div className='w-16 h-1 rounded-full bg-indigo-500 inline-flex'></div>
            </div>
          </div>
          <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4'>
            <div
              data-aos='fade-right'
              className='p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center'
            >
              <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-10 h-10'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                  Decentralized Application Development
                </h2>
                <p className='leading-relaxed text-base'>
                  We provide end to end support to develop and deploy
                  decentralized applications.
                </p>
              </div>
            </div>
            <div className='p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center'>
              <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-10 h-10'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
                  />
                </svg>
              </div>
              <div data-aos='fade-up' className='flex-grow'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                  Minimum Viable Product Development
                </h2>
                <p className='leading-relaxed text-base'>
                  We develop MVPs along with business models for variety of use
                  cases. Check out
                  <Link
                    to='/#products'
                    className='mr-5 hover:text-gray-900 mt-3 text-indigo-500'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    solutions
                  </Link>
                </p>
              </div>
            </div>
            <div
              data-aos='fade-left'
              className='p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center'
            >
              <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-10 h-10'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />{' '}
                </svg>
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                  Smart Contract Development
                </h2>
                <p className='leading-relaxed text-base'>
                  We design and implement business logic on popular smart
                  contract languages.
                </p>
              </div>
            </div>
            <div
              className='p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center'
              data-aos='fade-right'
            >
              <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-10 h-10'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                  />
                </svg>
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                  Smart Contract Audit
                </h2>
                <p className='leading-relaxed text-base'>
                  We make sure that contracts are will audited against business
                  logic and security flaws.
                </p>
              </div>
            </div>
            <div
              className='p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center'
              data-aos='fade-up'
            >
              <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-10 h-10'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'
                  />
                </svg>
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                  Infrastructure management
                </h2>
                <p className='leading-relaxed text-base'>
                  We manage infrastructural requirements of most of the private
                  blockchain platforms .
                </p>
              </div>
            </div>
            <div
              className='p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center'
              data-aos='fade-left'
            >
              <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-10 h-10'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
                  />
                </svg>
              </div>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                  Usecase Evaluation
                </h2>
                <p className='leading-relaxed text-base'>
                  We carefully assess the business logic for the feasibility/
                  need on a variety of platforms .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Description;
