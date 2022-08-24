import React, {useState} from 'react';
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div className="">
        <img src={Logo} alt="logo" className='w-10'/>
      </div>

      {/* Menu */}
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>

      {/* Hamburger */}
       <div className='md:hidden z-50' onClick={handleNav}>
        {nav ? <FaTimes size={20}/> : <FaBars size={20}/> }
       </div>

       {/* Mobile menu */}
       <ul className={nav ? 'md:hidden w-full absolute top-0 left-0 bg-[#0a192f] h-screen flex flex-col justify-center items-center' : 'hidden'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Work</li>
          <li className='py-6 text-4xl'>Contact</li>
       </ul>


       {/* Social Icons */}
       <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li> </li>
        </ul>
       </div>
    </div>
  );
};

export default Navbar;
