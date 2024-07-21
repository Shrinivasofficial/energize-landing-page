import React from 'react';
import { features } from '../constants';

export const Features = () => {
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[500px]'>
      <div className='text-center'>
        <span className='bg-white text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
          Features
        </span>
        <h2 className='text-3xl font-semibold sm:text-5xl lg:text-6xl mt-10 tracking-wide'>
          Switch to 
          <span className='bg-gradient-to-r from-orange-300 to-orange-500 text-transparent bg-clip-text'>
          {" "} Solar Energy with ease.
          </span>
        </h2>
      </div>
      <div className='flex flex-wrap mt-10 lg:mt-20'>
        {features.map((feature, index) => (
          <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-4'>
             <div className='flex mx-6 h-10 w-10 p-2 border-2 border-orange-500 text-orange-500 justify-center items-center rounded-full'>{feature.icon}</div>
            <div className='rounded-lg p-6 h-full'>
              <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
              <p className='text-neutral-500'>{feature.description}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
