import React from 'react';
// import {HiArrowNarrowRight} from 'react-icons/ai';
import { HiArrowCircleRight } from 'react-icons/hi';
import {Link} from "react-scroll";
import SvgHome from './SvgHome';
// import Image from '../assets/svg/index.html';

const Home = () => {
  return (

    <div name="home"  className='w-full h-screen flex lg:grid lg:grid-cols-4 gap-7 bg-[#100f1f] px-36 justify-between items-center overflow-hidden'>
      <div className='lg:col-span-2'>
        <p className='text-[#F02252] text-2xl py-4'>Hello, I am</p>
          <h1 className='text-6xl md:text-6xl lg:text-7xl font-bold text-[#ccd6f6] mb-4'>Akhator Osakhogba</h1>
          <h2 className='text-4xl md:text-6xl lg:text-5xl font-bold text-[#7d7f84]'>Frontend Web Developer</h2>
          <p className='text-gray-300 py-4 max-w-[700px] md:pt-4 pt-10'>Innovative, Easy-going and a Teams' player.</p>
          <div className="w-full">
              <Link activeClass="active" to="work" spy={true} smooth={true} duration={600}>
                <button className='group text-white bg-[#F02252] rounded-md px-6 py-2 my-2 flex items-center justify-between hover:bg-pink-900 duration-300'>
                    View Work<HiArrowCircleRight className='ml-2 group-hover:ml-4 duration-300'/></button>
              </Link>
          </div>
      </div>
        <SvgHome />
    </div>
  );
};

export default Home;
