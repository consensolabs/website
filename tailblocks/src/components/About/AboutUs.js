import React from 'react';
import Product from './Product';

const AboutUs = () => {
  return (
    <>
      <section className='text-gray-500 bg-gray-100 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-20'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4  text-gray-900'>
              About Us
            </h1>
            <p className='lg:w-3/3 mx-auto leading-relaxed text-gray-900 text-left'>
              Consenso Labs is a blockchain enterprise production studio. We
              explore and builds products and services in Blockchain to improve
              current services and concepts as well as building new ways in
              which we engage with technology and others. Our work is to build
              an ecosystem of consumer-centric products and enterprise solutions
              using blockchain technologies. We stay on the cutting edge of each
              service we provide,from Private and Public Blockchain technology
              platforms, Smart contract audits and token sale platforms.
            </p>
          </div>
        </div>
        <Product />
      </section>
    </>
  );
};
export default AboutUs;
