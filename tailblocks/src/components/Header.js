import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className='bg-primary text-textWhite body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Link
            to='/'
            href
            className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
              viewBox='0 0 24 24'
            >
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
            </svg>
            <span className='ml-3 text-xl'>Consenso Labs</span>
          </Link>
          <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
            <Link to='/about' className='mr-5 hover:text-gray-900'>
              About
            </Link>
            <Link to='#' className='mr-5 hover:text-gray-900'>
              Product
            </Link>
            <Link to='#' className='mr-5 hover:text-gray-900'>
              Platform
            </Link>
            <Link to='/team' className='mr-5 hover:text-gray-900'>
              Teams
            </Link>
            <Link to='#' className='mr-5 hover:text-gray-900'>
              Blog
            </Link>
            <Link
              to='/contact'
              className='inline-flex items-center bg-secondary border-0 py-2 px-5 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0'
            >
              Contact
              
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
