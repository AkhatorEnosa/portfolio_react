import React from 'react';
// import {HiArrowNarrowRight} from 'react-icons/ai';
import { HiArrowCircleRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className='text-pink-600 text-2xl'>Hi, I am</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Akhator Osakhogba</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#7d7f84]'>I am a Frontend Developer!</h2>
        <p className='text-[#7d7f84] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore accusantium alias autem repellendus repellat! Nostrum repudiandae consectetur eius? Porro voluptates dolores molestias obcaecati alias architecto accusantium.</p>

        <div className="w-full">
          <button className='group text-white bg-pink-600 rounded-sm px-6 py-2 my-2 flex items-center justify-between hover:bg-pink-900 duration-300'>View Work<HiArrowCircleRight className='ml-2 group-hover:ml-4 duration-300'/></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
