import React from 'react';
// import {HiArrowNarrowRight} from 'react-icons/ai';
import { HiArrowCircleRight } from 'react-icons/hi';
import {Link} from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]' id="home">

      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full animate__animated animate__fadeInLeft">
        <p className='text-[#F02252] text-2xl py-4'>Hi, I am</p>
        <h1 className='text-6xl sm:text-7xl font-bold text-[#ccd6f6]'>Akhator Osakhogba</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#7d7f84]'>I am a Frontend Web Developer  & UI/UX designer.</h2>
        <p className='text-gray-300 py-4 max-w-[700px] md:pt-4 pt-10'>Innovative, Easy-going and a Team player.</p>

        <div className="w-full">
            <Link activeClass="active" to="work" spy={true} smooth={true} duration={600}>
              <button className='group text-white bg-[#F02252] rounded-md px-6 py-2 my-2 flex items-center justify-between hover:bg-pink-900 duration-300'>
                  View Work<HiArrowCircleRight className='ml-2 group-hover:ml-4 duration-300'/></button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
