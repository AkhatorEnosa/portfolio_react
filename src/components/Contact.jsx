import React from 'react';

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen flex justify-center items-center p-4 bg-[#0a192f] text-[#7d7f84]'>
      <form action="" className='flex flex-col max-w-[600px] w-full'>
        <div className="pb-8">
          <p className='text-4xl font-bold inline border-b-4 border-[#F02252]  '>Contact</p>
          <p className='py-4'>Send me an email through the form below or shoot me an email at <span className='text-[#F02252]'>aosakhogba@gmail.com</span></p>
        </div>

        <input className="p-3 rounded-md m-3 bg-[#e1edff]" type="text" name="name" id="name" placeholder='Name'/>
        <input className="p-3 rounded-md m-3 bg-[#e1edff]" type="email" name="email" id="email" placeholder='email@email.com'/>
        <textarea className="p-3 rounded-md m-3 bg-[#e1edff]" name="textarea" id="email" placeholder='email@email.com'></textarea>
        <button className='bg-[#F02252] hover:bg-pink-900 duration-300 text-white rounded-md p-3 m-3'>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
