import React from 'react';

const Product = () => {
  return (
    <section className='text-gray-700 body-font'>
      <div className='container px-5 py-0 mx-auto'>
        <h1 className='flex justify-center sm:text-3xl text-2xl font-medium title-font mb-4 py-2 '>
          Recent Blockchain Projects done by Consenso Labs
        </h1>
        <div className='flex flex-wrap -m-4'>
          <div className='p-4 md:w-1/3'>
            <div className='h-full border-2 border-gray-200 rounded-lg overflow-hidden'>
              <img
                className='lg:h-48 md:h-36 w-full object-cover object-center'
                src='https://dummyimage.com/720x400'
                alt='blog'
              />
              <div className='p-6'>
                <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                  Arbchain
                </h1>
                <p className='leading-relaxed mb-3'>
                  At eripuit signiferumque sea, vel ad mucius molestie, cu
                  labitur.
                </p>
                <div className='flex items-center flex-wrap '>
                  <a className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>
                    Learn More
                    <svg
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      stroke-width='2'
                      fill='none'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <path d='M5 12h14'></path>
                      <path d='M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='p-4 md:w-1/3'>
            <div className='h-full border-2 border-gray-200 rounded-lg overflow-hidden'>
              <img
                className='lg:h-48 md:h-36 w-full object-cover object-center'
                src='https://dummyimage.com/721x401'
                alt='blog'
              />
              <div className='p-6'>
                <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                  Syndlend
                </h1>
                <p className='leading-relaxed mb-3'>
                  At eripuit signiferumque sea, vel ad mucius molestie, cu
                  labitur.
                </p>
                <div className='flex items-center flex-wrap'>
                  <a className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>
                    Learn More
                    <svg
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      stroke-width='2'
                      fill='none'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <path d='M5 12h14'></path>
                      <path d='M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='p-4 md:w-1/3'>
            <div className='h-full border-2 border-gray-200 rounded-lg overflow-hidden'>
              <img
                className='lg:h-48 md:h-36 w-full object-cover object-center'
                src='https://dummyimage.com/722x402'
                alt='blog'
              />
              <div className='p-6'>
                <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                  GitFunded
                </h1>
                <p className='leading-relaxed mb-3'>
                  At eripuit signiferumque sea, vel ad mucius molestie, cu
                  labitur.
                </p>
                <div className='flex items-center flex-wrap '>
                  <a className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>
                    Learn More
                    <svg
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      stroke-width='2'
                      fill='none'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <path d='M5 12h14'></path>
                      <path d='M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
