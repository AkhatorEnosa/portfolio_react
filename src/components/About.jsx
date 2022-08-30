import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-[#7d7f84]'>
      <div className="w-full flex flex-col justify-center items-center h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className='text-4xl font-bold inline border-b-4 border-[#F02252]'>
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold">
            <p>
              HI, I am Osa, so nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut quas praesentium, deleniti, neque quasi libero recusandae sapiente obcaecati laudantium molestiae nemo tempore quae. Eaque eos beatae neque temporibus odio voluptate veniam illum delectus cum explicabo. Quos sint nihil dolores esse voluptatibus consectetur eligendi soluta ut eaque. Odit, perferendis maxime?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
