import React from 'react';
import Tech from '../assets/img/Tech.svg';

function Technology() {
  return (
    <>
      <section class='text-gray-700 body-font bg-gray-100'>
        <div class='container px-5 py-24 mx-auto'>
          <div class='flex flex-col text-center w-full mb-20'>
            <h1 class='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
              Tech Stack We Work On
            </h1>
          </div>
          <div class='flex flex-wrap -m-4 text-center'>
            <img src={Tech} alt='Tech' />
          </div>
        </div>
      </section>
    </>
  );
}

export default Technology;
