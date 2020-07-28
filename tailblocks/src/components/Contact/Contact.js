import React from 'react';

const ContactForm = () => {
  return (
    <section className='text-gray-700 body-font relative'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Interested in exploring Blockchain for your business? reach out to
            us, we’ll get back to you.
          </h1>
          <p className='lg:w-3/3 mx-auto leading-relaxed text-base'>
            Our Blockchain specialists perform best possible solutions on
            various platforms such as Ethereum, Hyperledger, EOS. With our
            thorough experience in blockchain domain, clients get in-house
            blockchain developers, analysts, security advisors for their
            projects.
          </p>
        </div>
      </div>
      <div className='lg:w-1/2 md:w-2/3 mx-auto'>
        <div className='flex flex-wrap -m-2'>
          <div className='p-2 w-1/2'>
            <input
              className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
              placeholder='Name'
              type='text'
            />
          </div>
          <div className='p-2 w-1/2'>
            <input
              className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
              placeholder='Email'
              type='email'
            />
          </div>
          <div className='p-2 w-full'>
            <textarea
              className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block'
              placeholder='Message'
            ></textarea>
          </div>
          <div className='p-2 w-full'>
            <button className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
