
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-12 z-[100]'
      }
    >
      
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          
          <span > <h2 className='transition duration-7 ease hover:text-pink-600 inline-block text-indigo-900 cursor-pointer'>KAM</h2></span>
            
        
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/blog'>BLOG</Link>
            </li>
           
            
            
            
           
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/about'>APROPOS</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/resume'>PORTFOLIO</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/contac'>CONTACT</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
            <h2 className='text-indigo-900 cursor-pointer'>KAM</h2>
              
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
              
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  ACCEUIL
                </li>
              </Link>
              <Link href='blog/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  BLOG
                </li>
              </Link>
              
             
              
              <Link href='/about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  APROPOS
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  PORTFOLIO
                </li>
              </Link>
              <Link href='/contac'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  CONTACT
                </li>
              </Link>
            </ul>
            
            <div className='pt-2'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Restons connectés
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/alphamohamedkaba/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/alpha970?tab=repositories'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
               
                <Link href='/#contac'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            
         
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;









/*import React, { useState, useEffect } from 'react';
import style from "../styles/Navbar.module.css";


import Link from 'next/link';



export default function()  {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <nav className=' flex items-center  bg-teal-800 mx-auto px-10 mb-8 '>
        <Link href='/'>
          <a className=' md:float-left inline-flex items-center p-2 mr-4 '>
          <img src="logo.png" alt="Logo" class="h-12 w-23 mr-2" />
          </a>
        </Link>
        
        <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            
            
            <Link href='/blog'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded cursor-pointer font-bold   text-white font-bold transition duration-70 hover:text-pink-600  '>
                BLOG
              </a>
            </Link>
            <Link href='/ai'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded cursor-pointer font-bold   text-white font-bold transition duration-70 hover:text-pink-600  '>
                AI
              </a>
            </Link>
            <Link href='bigdata'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded cursor-pointer font-bold   text-white font-bold transition duration-70 hover:text-pink-600  '>
                BIG DATA
              </a>
            </Link>
            <Link href='/about'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded cursor-pointer font-bold   text-white font-bold transition duration-70 hover:text-pink-600  '>
                ABOUT
              </a>
            </Link>
          </div>
         
        </div>
        <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={style.menuItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/blog">BLOG</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/ai">AI</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/bigdata">BIG DATA</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/about">ABOUT</Link>
        </li>
        
        
      </ul>
         
        
      </nav>
    </>
  );
};
*/




