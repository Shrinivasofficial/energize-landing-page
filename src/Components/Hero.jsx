import React from 'react';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

export const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl font-semibold sm:text-6xl lg:text-7xl text-center tracking-wide'>
            Energize: Powering Your 
            <span className='bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text'> Tomorrow</span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
          Empower your environment and your households with solar panels. Get Started with using Solar 
          Panels with rental system with Energize. 
        </p>
        <div className='flex justify-center my-10'>
            <a href='/get-started' className='bg-gradient-to-r from-orange-400 to-orange-500 py-4 px-5 mx-3 rounded-md text-white'>Start for free</a>
            <a href='/documentation' className='py-4 px-5 mx-3 rounded-md border-2 border-orange-600'>Documentation</a>
        </div>
        <div className='flex mt-10 justify-center'>
          <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 my-2 mx-4'>
            <source src={video1} type='video/mp4' /> 
            Your browser does not support the video.
          </video>
          <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 my-2 mx-4'>
            <source src={video2} type='video/mp4' /> 
            Your browser does not support the video.
          </video>
        </div>
    </div>
  );
};
