import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div 
      id='hero' 
      className='min-h-screen bg-no-repeat bg-[url(/p2.png)] bg-cover flex flex-col items-center'
      style={{ backgroundSize: "27%", backgroundPosition: "left 150px top 150px" }}
    >
      {/* Navbar visible on larger screens (lg and up) */}
      <div className='w-full'>
        <div className='hidden lg:flex'>
          <Navbar />
        </div>
      </div>

      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden md:block'></div>
        <div className='text-center md:text-left text-[40px] sm:text-[60px] md:text-[70px] lg:text-[80px] font-bold leading-tight flex justify-center items-center'>
          <div className='text-[#990011]' data-aos="zoom-in">
            <p>I am a</p>
            <p>Professional</p>
            <p>Web Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
