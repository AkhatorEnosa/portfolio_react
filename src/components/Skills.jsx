import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import TW from '../assets/tailwind.png';
import JS from '../assets/javascript.png';
import REACT from '../assets/react.png';
import GITHUB from '../assets/github.png';

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f] text-[#7d7f84] '>

      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 w-full h-full flex flex-col justify-center'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#F02252]'>Skills</p>
          <p className='py-4 text-gray-300'>These are the technologies i have worked with.</p>
        </div>
        
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-6'>
           <div className='md:w-[200px] mx-auto shadow-md shadow-[#040c16] hover:scale-110 duration-300 rounded-lg my-6'>
            <img className="w-16 mx-auto" src={HTML} alt="HTML logo" />
            <p className='my-4'>HTML</p>
           </div>

           <div className='md:w-[200px] mx-auto shadow-md shadow-[#040c16] hover:scale-110 duration-300 rounded-lg my-6'>
            <img className="w-16 mx-auto" src={CSS} alt="CSS logo" />
            <p className='my-4'>CSS</p>
           </div>

           <div className='md:w-[200px] mx-auto shadow-md shadow-[#040c16] hover:scale-110 duration-300 rounded-lg my-6'>
            <img className="w-16 mx-auto" src={TW} alt="Tailwind logo" />
            <p className='my-4'>Tailwind</p>
           </div>

           <div className='md:w-[200px] mx-auto shadow-md shadow-[#040c16] hover:scale-110 duration-300 rounded-lg my-6'>
            <img className="w-16 mx-auto" src={JS} alt="JS logo" />
            <p className='my-4'>JavaScript</p>
           </div>

           <div className='md:w-[200px] mx-auto shadow-md shadow-[#040c16] hover:scale-110 duration-300 rounded-lg my-6'>
            <img className="w-16 mx-auto" src={REACT} alt="React logo" />
            <p className='my-4'>React</p>
           </div>

           <div className='md:w-[200px] mx-auto shadow-md shadow-[#040c16] hover:scale-110 duration-300 rounded-lg my-6'>
            <img className="w-16 mx-auto" src={GITHUB} alt="Github logo" />
            <p className='my-4'>Github</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
