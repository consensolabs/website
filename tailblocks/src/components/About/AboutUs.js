import React from 'react';
import Product from './Product';

const AboutUs = () => {
  return (
    <>
      <section className='text-gray-500 bg-primary body-font'>
        <div className='container px-5 pt-24 mx-auto'>
          <div className='flex flex-col text-center w-full'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4  text-white'>
              About Us
            </h1>
            <p className='lg:w-3/3 mx-auto leading-relaxed text-white text-center'>
            We at Consenso Labs, carefully examine and design the use cases, and reach out to stakeholders to get early feedback on our minimal viable products.We design and implement our products to not only take it to the MVP stage but also mindfully architect to scale and make it flexible to pilot it universally across multiple targeted institutions.

We work on a variety of enterprise and public blockchain platforms, networks, and tools to find the best fit for the customers’ requirements to fulfill the use cases. Talk to us if you have any blockchain service requirements in your organization.


            </p>
            <div className="my-8 text-white">
              <p className="text-left">The industry sectors we work on:</p>
              <ul className="text-left">
                <li><span>1.</span>Legal Tech</li>
                <li><span>2.</span>Finance Tech</li>
                <li><span>3.</span>Open Economics</li>
              </ul>
            </div>
          </div>
        </div>
        <Product />
      </section>
    </>
  );
};
export default AboutUs;
