import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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
            <Link
                to='/#products'
                className='mr-5 hover:text-gray-900'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
              Product
            </Link>
            <Link
                to='/#services'
                className='mr-5 hover:text-gray-900'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
              Services
            </Link>
            <Link to='/team' className='mr-5 hover:text-gray-900'>
              Teams
            </Link>
            <a href='https://medium.com/conensolabs' target='_blank' className='mr-5 hover:text-gray-900'>
              Blog
            </a>
            <a href='https://angel.co/company/consensolabs/jobs' target='_blank' className='mr-5 hover:text-gray-900'>
              Career
            </a>
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
