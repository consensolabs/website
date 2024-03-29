import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../css/custom.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactGA from 'react-ga';
AOS.init();

const Cta = () => {
  const ClickHandlerTracker = () => {
    ReactGA.event({
      category: 'Button',
      action: 'clicked explore now button',
    });
  };
  return (
    <section className='text-gray-700 body-font ' data-aos='zoom-in'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto cta'>
          <h1 className='flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900'>
            Learn more about our solutions
          </h1>

          <Link to='/contact' onClick={ClickHandlerTracker}>
            <button className='flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0'>
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
