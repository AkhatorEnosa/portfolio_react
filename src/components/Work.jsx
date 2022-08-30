import React from 'react';
import WorkImg from '../assets/workImg.jpeg'
import RealEstate from '../assets/realestate.jpg'

const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen bg-[#0a192f] text-[#7d7f84] '>
      <div className='max-w-[1000px] mx-auto w-full h-full p-4 flex flex-col justify-center'>
        <div className='pb-6'>
          <p className='text-4xl font-bold border-b-4 border-[#F02252 ] inline'>Work</p>
          <p className='py-6'>Below are some of my recent works. </p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* grid-item */}
          <div style={{backgroundImage: `url(${WorkImg})`}}  className='shadow-lg shadow-[#040c16] group container flex rounded-md justify-center items-center mx-auto  content-div w-full'>

            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100 duration-300'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                 React Js Application
              </span>

              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg py-3 px-4 m-3 bg-white text-[#F02252] font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg py-3 px-4 m-3 bg-white text-[#F02252] font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${RealEstate})`}}  className='shadow-lg shadow-[#040c16] group container flex rounded-md justify-center items-center mx-auto  content-div w-full'>

            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100 duration-300'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                 React Js Application
              </span>

              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg py-3 px-4 m-3 bg-white text-[#F02252] font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg py-3 px-4 m-3 bg-white text-[#F02252] font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${WorkImg})`}}  className='shadow-lg shadow-[#040c16] group container flex rounded-md justify-center items-center mx-auto  content-div w-full'>

            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100 duration-300'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                 React Js Application
              </span>

              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg py-3 px-4 m-3 bg-white text-[#F02252] font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg py-3 px-4 m-3 bg-white text-[#F02252] font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${RealEstate})`}}  className='shadow-lg shadow-[#040c16] group container flex rounded-md justify-center items-center mx-auto  content-div w-full'>

            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100 duration-300'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                 React Js Application
              </span>

              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg py-3 px-4 m-3 bg-white text-[#F02252] font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg py-3 px-4 m-3 bg-white text-[#F02252] font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${WorkImg})`}}  className='shadow-lg shadow-[#040c16] group container flex rounded-md justify-center items-center mx-auto  content-div w-full'>

            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100 duration-300'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                 React Js Application
              </span>

              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg py-3 px-4 m-3 bg-white text-[#F02252] font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg py-3 px-4 m-3 bg-white text-[#F02252] font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${RealEstate})`}}  className='shadow-lg shadow-[#040c16] group container flex rounded-md justify-center items-center mx-auto  content-div w-full'>

            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100 duration-300'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                 React Js Application
              </span>

              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg py-3 px-4 m-3 bg-white text-[#F02252] font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg py-3 px-4 m-3 bg-white text-[#F02252] font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
