import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-[#7d7f84]'>
        <div className="w-full flex flex-col justify-center items-center h-full">
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
                Hi, I am Akhator Osakhogba, A graduate and BS.c certified Computer Scientist who got into tech because of my fascination and passion for building products on the web with code. I have a workng knowloegde of HTML5, CSS3,Tailwind CSS, JavaScript, ReactJs, PHP, MySQL and Wordpress. I take detail-oriented approach to maintaining website responsiveness, effectiveness and security. Hardworking and passionate with strong organizational skills and ready to help team achieve company goals. <br/>
      
        My hobbies when i am not coding includes; Listening to musics(Any genre), playing video games out of a few.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default About;
