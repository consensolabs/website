import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../assets/logo/HeaderLogo.png'

const HeaderLogoStyle = <img src={HeaderLogo}/>

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
            
            {HeaderLogoStyle}
            
          </Link>
          <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
            <Link to='/about' className='mr-5 hover:text-gray-900'>
              About
            </Link>
            <Link to='#' className='mr-5 hover:text-gray-900'>
              Product
            </Link>
            <Link to='#' className='mr-5 hover:text-gray-900'>
              Services
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
