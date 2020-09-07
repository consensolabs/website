import React from 'react';
import legal from '../../assets/img/legal.png';
import fintech from '../../assets/img/fintech1.png';
import economy from '../../assets/img/economy.png';
import Solution from '../Solution';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const AboutUs = () => {
  return (
    <>
      <section className='text-gray-500 bg-primary body-font'>
        <div className='container px-5 pt-24 mx-auto' data-aos='zoom-in'>
          <div className='flex flex-col text-center w-full'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4  text-white'>
              About Us
            </h1>
            <p className='lg:w-3/3 mx-auto leading-relaxed text-white text-center sm:text-justify'>
              We at Consenso Labs, carefully examine and design the use cases,
              and reach out to stakeholders to get early feedback on our minimal
              viable products.We design and implement our products to not only
              take it to the MVP stage but also mindfully architect to scale and
              make it flexible to pilot it universally across multiple targeted
              institutions. We work on a variety of enterprise and public
              blockchain platforms, networks, and tools to find the best fit for
              the customers’ requirements to fulfill the use cases. Talk to us
              if you have any blockchain service requirements in your
              organization.
            </p>
          </div>
        </div>

        <section className='text-white body-font'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='flex flex-col text-center w-full mb-20'>
              <h1
                className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'
                data-aos='zoom-in'
              >
                The industry sectors we work on
              </h1>
              <p
                className='lg:w-2/3 mx-auto leading-relaxed text-white'
                data-aos='zoom-in'
              >
                We work on a variety of technologies only after researching
                their capability to scale and integrate with other evolving
                technologies that could implement the use cases.
              </p>
            </div>
            <div className='flex flex-wrap -m-4 text-center mobile-flex'>
              <div className='p-4 md:w-1/4 sm:w-1/2 w-full' data-aos='zoom-in'>
                <div className='bg-white border-2 border-gray-200 px-6 py-6 h-52 rounded-lg'>
                  <img
                    className='w-24 h-24 object-cover object-center mb-4 inline-block'
                    src={legal}
                  />
                  <p className='text-gray-700'>Legal Tech</p>
                </div>
              </div>

              <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
                <div
                  className='bg-white border-2 border-gray-200 px-6 py-6 h-52 rounded-lg'
                  data-aos='zoom-in'
                >
                  <img
                    className='w-24 h-24 object-cover object-center mb-4 inline-block'
                    src={fintech}
                  />
                  <p className='text-gray-700'>Finance Tech</p>
                </div>
              </div>

              <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
                <div
                  className='bg-white border-2 border-gray-200 px-6 py-6 h-52 rounded-lg'
                  data-aos='zoom-in'
                >
                  <img
                    className='w-24 h-24 object-cover object-center mb-4 inline-block'
                    src={economy}
                  />
                  <p className='text-gray-700'>Open Economics</p>
                </div>
              </div>
            </div>
          </div>
          <Solution />
        </section>
      </section>
    </>
  );
};
export default AboutUs;
