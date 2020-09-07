import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import HeaderLogo from '../../assets/logo/HeaderLogo.png';
// import NavMenu from './MobileNav';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../css/custom.css';

AOS.init();

const HeaderLogoStyle = <img src={HeaderLogo} />;

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  let menu;

  if (showMenu) {
    menu = (
      <div class='w-full block flex-grow lg:flex lg:items-center lg:w-auto bg-primary '>
        <div className='container mx-auto flex px-5  md:flex-row flex-col '>
          <div class='text-sm lg:flex-grow' data-aos='fade-left'>
            <Link
              to='/about'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4'
              onClick={() => setShowMenu(!showMenu)}
              data-aos='fade-left'
            >
              About
            </Link>
            <Link
              to='/#services'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(!showMenu)}
              data-aos='fade-left'
            >
              Services
            </Link>
            <Link
              to='/#products'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(!showMenu)}
              data-aos='fade-left'
            >
              Products
            </Link>

            <Link
              to='/team'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4'
              onClick={() => setShowMenu(!showMenu)}
              data-aos='fade-left'
            >
              Team
            </Link>
            <a
              href='https://medium.com/conensolabs'
              target='_blank'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4'
              rel='noopener noreferrer'
              onClick={() => setShowMenu(!showMenu)}
              data-aos='fade-left'
            >
              Blog
            </a>
            <a
              href='https://angel.co/company/consensolabs/jobs'
              target='_blank'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4'
              rel='noopener noreferrer'
              onClick={() => setShowMenu(!showMenu)}
              data-aos='fade-left'
            >
              Career
            </a>
            <Link
              to='/contact'
              className='inline-flex items-center bg-secondary border-0 py-2 px-5 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0'
              onClick={() => setShowMenu(!showMenu)}
              data-aos='fade-left'
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <header className='bg-primary text-textWhite body-font mob'>
        <div
          data-aos='fade-in'
          className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'
        >
          <Link
            to='/'
            className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
          >
            {HeaderLogoStyle}
          </Link>
          <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
            <Link to='/about' className='mr-5 hover:text-gray-900'>
              About
            </Link>

            <Link
              to='/#services'
              className='mr-5 hover:text-gray-900'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Services
            </Link>
            <Link
              to='/#products'
              className='mr-5 hover:text-gray-900'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Products
            </Link>

            <Link to='/team' className='mr-5 hover:text-gray-900'>
              Team
            </Link>
            <a
              href='https://medium.com/conensolabs'
              target='_blank'
              className='mr-5 hover:text-gray-900'
              rel='noopener noreferrer'
            >
              Blog
            </a>
            <a
              href='https://angel.co/company/consensolabs/jobs'
              target='_blank'
              className='mr-5 hover:text-gray-900'
              rel='noopener noreferrer'
            >
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

      {/* mobile nav */}

      <nav className='mobile-toggle flex items-center bg-primary p-3 flex-wrap sm:hidden md:hidden z-50  mobile-nav'>
        <Link to='/' href='#' class='p-2 mr-4 inline-flex items-center'>
          {HeaderLogoStyle}
        </Link>

        <button
          className='text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler'
          data-target='#navigation'
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            class='w-6 h-6'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            stroke='white'
            viewBox='0 0 24 24'
          >
            <path d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>

        {menu}
      </nav>
    </>
  );
}

export default Header;
