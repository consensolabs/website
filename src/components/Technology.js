import React from 'react';
import Corda from '../assets/img/corda.png';
import Ethereum from '../assets/img/ethereum.png';
import Solidity from '../assets/img/solidity.png';
import IPFS from '../assets/img/ipfs.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Technology() {
  return (
    <section class='text-gray-700 body-font' data-aos='zoom-in'>
      <div class='container px-5 py-24 mx-auto'>
        <div class='flex flex-col text-center w-full mb-20'>
          <h1 class='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Technologies we work on
          </h1>
          <p class='lg:w-2/3 mx-auto leading-relaxed text-base'>
            We work on a variety of Web2 and Web3 technologies only after researching their
            capability to scale and to be composable with other tech stacks.
          </p>
        </div>
        <div class='flex flex-wrap -m-4 text-center'>
          <div class='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div
              class='border-2 border-gray-200 px-4 py-6 h-52 rounded-lg'
              data-aos='zoom-in'
            >
              <img
                className='w-24 h-24 object-cover object-center mb-4 inline-block'
                src={Ethereum}
              />
              <p class='leading-relaxed'>
                Enterprise and public Ethereum (EVM based) protcols and tools
              </p>
            </div>
          </div>
          <div class='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div
              class='border-2 border-gray-200 px-6 py-6 h-52 rounded-lg'
              data-aos='zoom-in'
            >
              <img
                className='w-24 h-24 object-cover object-center mb-4 inline-block'
                src={Solidity}
              />
              <p class='leading-relaxed'>Solidity smart contract language</p>
            </div>
          </div>
          <div class='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div
              class='border-2 border-gray-200 px-4 py-8 h-52 rounded-lg'
              data-aos='zoom-in'
            >
              <img
                className='w-24 h-24 object-cover object-center mb-4 inline-block'
                src={IPFS}
              />
              <p class='leading-relaxed'>IPFS storage stacks</p>
            </div>
          </div>
          <div class='p-4 md:w-1/4 sm:w-1/2 w-full' data-aos='zoom-in'>
            <div class='border-2 border-gray-200 px-4 py-5 h-52 rounded-lg'>
              <img
                className='w-32 h-32 object-cover object-center mb-4 inline-block'
                src={Corda}
              />
              <p class='leading-relaxed'>R3 Corda DLT</p>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default Technology;
