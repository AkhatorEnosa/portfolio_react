import React, {useState} from 'react';
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div className="">
        <p className='w-10 text-5xl md:text-6xl logo tracking-tighter font-bold text-[#F02252]'>Osa</p>
      </div>

      {/* Menu */}
        <ul className="hidden md:flex">
          <li className='hover:text-[#F02252] duration-300'>
            <Link activeClass="active" to="home" spy={true} smooth={true} duration={600}>
              Home
            </Link>
          </li>
          <li className='hover:text-[#F02252] duration-300'>
            <Link activeClass="active" to="about" spy={true} smooth={true} duration={600}>
              About
            </Link>
          </li>
          <li className='hover:text-[#F02252] duration-300'>
            <Link activeClass="active" to="skills" spy={true} smooth={true} duration={600}>
              Skills
            </Link>
          </li>
          <li className='hover:text-[#F02252] duration-300'>
            <Link activeClass="active" to="work" spy={true} smooth={true} duration={600}>
              Work
            </Link>
          </li>
          <li className='hover:text-[#F02252] duration-300'>
            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={600}>
              Contact
            </Link>
          </li>
        </ul>

      {/* Hamburger */}
       <div className='md:hidden z-50' onClick={handleNav}>
        {nav ? <FaTimes size={20}/> : <FaBars size={20}/> }
       </div>

       {/* Mobile menu */}
       <ul className={nav ? 'md:hidden w-full absolute top-0 left-0 bg-[#0a192f] h-screen flex flex-col justify-center items-center z-50' : 'hidden'}>
          <li className='py-6 text-4xl hover:text-[#F02252] duration-300'>
            <Link onClick={handleNav} activeClass="active" to="home" spy={true} smooth={true} duration={600}>
              Home
            </Link>
          </li>
          <li className='py-6 text-4xl hover:text-[#F02252] duration-300'>
            <Link onClick={handleNav} activeClass="active" to="about" spy={true} smooth={true} duration={600}>
              About
            </Link>
          </li>
          <li className='py-6 text-4xl hover:text-[#F02252] duration-300'>
            <Link onClick={handleNav} activeClass="active" to="skills" spy={true} smooth={true} duration={600}>
              Skills
            </Link>
          </li>
          <li className='py-6 text-4xl hover:text-[#F02252] duration-300'>
            <Link onClick={handleNav} activeClass="active" to="work" spy={true} smooth={true} duration={600}>
              Work
            </Link>
          </li>
          <li className='py-6 text-4xl hover:text-[#F02252] duration-300'>
            <Link onClick={handleNav} activeClass="active" to="contact" spy={true} smooth={true} duration={600}>
              Contact
            </Link>
          </li>
       </ul>


       {/* Social Icons */}
       <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[150px] h-[60px] flex items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-blue-900'>
            <a href="/" className='w-full flex justify-between items-center'>
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[150px] h-[60px] flex items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-black'>
            <a href="/" className='w-full flex justify-between items-center'>
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[150px] h-[60px] flex items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-red-600'>
            <a href="/" className='w-full flex justify-between items-center'>
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[150px] h-[60px] flex items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-green-700'>
            <a href="/" className='w-full flex justify-between items-center'>
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
       </div>
    </div>
  );
};

export default Navbar;
