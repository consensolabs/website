import React from 'react';

import ArbChain from '../assets/icons/arbchain.svg';
import GitFunded from '../assets/icons/GitFunded.svg';
import SyndLend from '../assets/icons/syndlend.svg';

function Solution() {
  return (
    <>
      <section className='bg-primary text-gray-700 body-font' id='products'>
        <div className='container px-5 py-24 mx-auto'>
          <h1 className='text-textWhite flex justify-center sm:text-3xl sm:text-center text-2xl font-medium title-font mb-4 py-6 mobile-center cta'>
            Our blockchain technology solutions
          </h1>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3 '>
              <a href='https://arbchain.consensolabs.com' target='_blank'>
                <div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col transition duration-500 ease-in-out bg-white hover:bg-white transform hover:-translate-y-1 hover:scale-110'>
                  <div className='flex items-center mb-3'>
                    <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0 '>
                      <img src={ArbChain} alt='' srcset='' />
                    </div>
                    <h2 className='text-gray-900 text-lg title-font font-medium'>
                      Arbchain
                    </h2>
                  </div>
                  <div className='flex-grow'>
                    <p className='leading-relaxed text-base'>
                      A DLT based dispute resolution platform to perform
                      international arbitration in a faster, efficient,
                      enforceable, and authentic way.
                    </p>
                    <a className='mt-3 text-indigo-500 inline-flex items-center'>
                      Learn More
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        className='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                      >
                        <path d='M5 12h14M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </a>
            </div>

            <div className='p-4 md:w-1/3'>
              <a href='https://syndlend.com' target='_blank'>
                <div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col transition duration-500 ease-in-out bg-white hover:bg-white transform hover:-translate-y-1 hover:scale-110'>
                  <div className='flex items-center mb-3 '>
                    <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
                      <img src={SyndLend} alt='' srcset='' />
                    </div>
                    <h2 className='text-gray-900 text-lg title-font font-medium'>
                      SyndLend
                    </h2>
                  </div>
                  <div className='flex-grow'>
                    <p className='leading-relaxed text-base'>
                      SyndLend is a sophisticated solution to the predicaments
                      of the existing syndicated loan market by building an
                      ecosystem of banks and other financial institutions by
                      utilizing the capability of DLT.
                    </p>
                    <a
                      className='mt-3 text-indigo-500 inline-flex items-center'
                      href='https://syndlend.com'
                      target='_blank'
                    >
                      Learn More
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        className='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                      >
                        <path d='M5 12h14M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </a>
            </div>

            <div className='p-4 md:w-1/3'>
              <a href='https://gitfunded.consensolabs.com' target='_blank'>
                <div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col transition duration-500 ease-in-out bg-white hover:bg-white transform hover:-translate-y-1 hover:scale-110'>
                  <div className='flex items-center mb-3'>
                    <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
                      <img src={GitFunded} alt='' srcset='' />
                    </div>
                    <h2 className='text-gray-900 text-lg title-font font-medium'>
                      GitFunded
                    </h2>
                  </div>
                  <div className='flex-grow'>
                    <p className='leading-relaxed text-base'>
                      GitFunded is an open-source effort from Consenso Labs to
                      create a platform to help public goods and organizations
                      get funded in a decentralized ecosystem.
                    </p>

                    <a
                      href='https://gitfunded.consensolabs.com'
                      target='_blank'
                      className='mt-3 text-indigo-500 inline-flex items-center cursor-pointer'
                    >
                      Learn More
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        className='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                      >
                        <path d='M5 12h14M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Solution;
