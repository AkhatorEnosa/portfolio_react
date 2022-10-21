import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import RandomQuotes from '../assets/1.png'
import GenotypeMatch from '../assets/2.png'
import Unscramble from '../assets/3.png'
import LandingPage from '../assets/drib-1.webp'
import BankingUl from '../assets/drib-2.webp'
import Logo from '../assets/drib-3.webp'

const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen bg-[#0a192f] text-[#7d7f84]'>
      <div className='max-w-[1000px] mx-auto w-full h-full p-4 flex flex-col justify-center'>

      <AnimationOnScroll animateIn="animate__fadeInRight">
        <div className='pb-6'>
          <p className='text-4xl font-bold border-b-4 border-[#F02252] inline'>Work</p>
          <p className='py-6 text-gray-300'>Below are some of my recent works. </p>
        </div>

        <div className='flex flex-col justify-between'>
          {/* Container */}
          <div className='text-[#F02252] w-full text-2xl mb-4 mx-auto'>
            <p className='font-bold'>- Web</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* grid-item */}
            <div style={{backgroundImage: `url(${RandomQuotes})`}}  className='shadow-lg shadow-[#040c16] flex rounded-md justify-center items-center mx-auto content-div w-full'>

              {/* Hover effect */}
              <div className='details text-center text-white p-6'>
                <span className='text-2xl font-bold tracking-wider'>
                  Random Quote App
                </span>
                <p className='mt-4'>This is a web application that utilizes api to get random quotes made by great men and women. Built with RreactJs</p>

                <div className='pt-2 text-center'>
                  <a href="https://kwota.netlify.app">
                    <button className='text-center rounded-lg py-1 px-3 m-2 bg-white text-[#F02252] font-bold text-lg'>Demo</button>
                  </a>
                  <a href="https://github.com/AkhatorEnosa/quotes-app">
                    <button className='text-center rounded-lg py-1 px-3 m-2 bg-white text-[#F02252] font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>

            <div style={{backgroundImage: `url(${GenotypeMatch})`}}  className='shadow-lg shadow-[#040c16] flex rounded-md justify-center items-center mx-auto  content-div w-full'>

              {/* Hover effect */}
              <div className='details text-center text-white p-6'>
                <span className='text-2xl font-bold tracking-wider'>
                  Genotype Match Checker
                </span>
                <p className='mt-4'>A web application to check if spouses genotype compatibility.</p>

                <div className='pt-2 text-center'>
                  <a href="https://gmchecker.netlify.app/">
                    <button className='text-center rounded-lg py-1 px-3 m-3 bg-white text-[#F02252] font-bold text-lg'>Demo</button>
                  </a>
                  <a href="https://github.com/AkhatorEnosa/genotype_match_checker">
                    <button className='text-center rounded-lg py-1 px-3 m-3 bg-white text-[#F02252] font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
            <div style={{backgroundImage: `url(${Unscramble})`}}  className='shadow-lg shadow-[#040c16] flex rounded-md justify-center items-center mx-auto  content-div w-full'>

              {/* Hover effect */}
              <div className='details text-center text-white p-6'>
                <span className='text-2xl font-bold tracking-wider'>
                  Unscramble Game
                </span>
                <p className='mt-4'>For those that love puzzles, this is a web game that people can enjoy for fun by uncrambling scrambled words.</p>

                <div className='pt-2 text-center'>
                  <a href="https://akhatorenosa.github.io/unscramble-game/">
                    <button className='text-center rounded-lg py-1 px-3 m-3 bg-white text-[#F02252] font-bold text-lg'>Demo</button>
                  </a>
                  <a href="https://github.com/AkhatorEnosa/unscramble-game">
                    <button className='text-center rounded-lg py-1 px-3 m-3 bg-white text-[#F02252] font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div> 
          {/* container end */}

        {/* Container 2*/}

          <div className='text-[#F02252] w-full text-2xl mb-4 my-4 mt-20 mx-auto'>
            <p className='font-bold'>- Graphics</p>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* grid-item */}
            <div style={{backgroundImage: `url(${LandingPage})`}}  className='shadow-lg shadow-[#040c16] flex rounded-md justify-center items-center mx-auto  content-div w-full'>

              {/* Hover effect */}
              <div className='details text-center text-white p-6'>
                <span className='text-2xl font-bold tracking-wider'>
                  Forum mobile app landing page
                </span>
                <p className='mt-4'>A simple design for a mobile app for reading articles landing page.</p>

                <div className='pt-2 text-center'>
                  <a href="https://dribbble.com/shots/15462316-Mobile-App-Landing-Page?utm_source=Clipboard_Shot&utm_campaign=Gosab&utm_content=Mobile%20App%20Landing%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Gosab&utm_content=Mobile%20App%20Landing%20Page&utm_medium=Social_Share">
                    <button className='text-center rounded-lg py-1 px-3 m-3 bg-white text-[#F02252] font-bold text-lg'>View</button>
                  </a>
                </div>
              </div>
            </div>

            <div style={{backgroundImage: `url(${BankingUl})`}}  className='shadow-lg shadow-[#040c16] flex rounded-md justify-center items-center mx-auto  content-div w-full'>

              {/* Hover effect */}
              <div className='details text-center text-white p-6'>
                <span className='text-2xl font-bold tracking-wider'>
                  Banking app UI
                </span>
                <p className='mt-4'>Shots illustrating how the pages of a banking app would look like.</p>

                <div className='pt-2 text-center'>
                  <a href="https://dribbble.com/shots/15387427-UI-for-a-Mobile-Banking-app?utm_source=Clipboard_Shot&utm_campaign=Gosab&utm_content=UI%20for%20a%20Mobile%20Banking%20app&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Gosab&utm_content=UI%20for%20a%20Mobile%20Banking%20app&utm_medium=Social_Share">
                    <button className='text-center rounded-lg py-1 px-3 m-3 bg-white text-[#F02252] font-bold text-lg'>View</button>
                  </a>
                </div>
              </div>
            </div>
            <div style={{backgroundImage: `url(${Logo})`}}  className='shadow-lg shadow-[#040c16] flex rounded-md justify-center items-center mx-auto  content-div w-full'>

              {/* Hover effect */}
              <div className='details text-center text-white p-6'>
                <span className='text-2xl font-bold tracking-wider'>
                  Zoom Typography logo
                </span>
                <p className='mt-4'>Using Typography to create clean and useful logo. In this case, Zoom is the case.</p>

                <div className='pt-2 text-center'>
                  <a href="https://dribbble.com/shots/5743727-Remake-of-Zoom-typography?utm_source=Clipboard_Shot&utm_campaign=Gosab&utm_content=Remake%20of%20Zoom%20typography&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Gosab&utm_content=Remake%20of%20Zoom%20typography&utm_medium=Social_Share">
                    <button className='text-center rounded-lg py-1 px-3 m-3 bg-white text-[#F02252] font-bold text-lg'>View</button>
                  </a>
                </div>
              </div>
            </div>
          </div> 
          {/* container 2 end */}
        </div>
      </AnimationOnScroll>

      </div>
    </div>
  );
};

export default Work;
