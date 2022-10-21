import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-[#7d7f84]'>
        <div className="w-full flex flex-col justify-center items-center h-full">
      <AnimationOnScroll animateIn="animate__fadeInRight">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-10 md:pb-8  pl-4">
              <p className='text-4xl font-bold inline border-b-4 border-[#F02252]'>
                About
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-3xl font-bold md:mb-0 -mb-4">
              <p>
                HI, I am Osa, so nice to meet you.
              </p>
            </div>
            <div className='text-gray-300'>
              <p className='leading-8 md:leading-normal'>
                I am Akhator Osakhogba, alias Osa, a 25 years old Computer Scienec graduate mspecializing in front end web development to promote organization-specific website presence with workng knowlegde of HTML, CSS, TailwindCSS, React JavaScript, Git to generate custom webpage design. Detail-oriented approach to maintaining website responsiveness and effectiveness Hardworking and passionate with strong organizational skills and ready to help team achieve company goals.

                Though specialized in front-end development, my abilities also extends to being able to use back-end technologies like PHP, MySQL, NodeJS, Express, Postgresql and also design tools like Figma, Photoshop and Inkscape.
              </p>
            </div>
          </div>
      </AnimationOnScroll>
        </div>
    </div>
  );
};

export default About;
