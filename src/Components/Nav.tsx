'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import ahlogo from '@/app/assets/ahlab-logo.png'
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link'



const menu = {
  open: { transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] } },
  closed: {
    top: '0px',
    right: '0px',

    transition: { duration: 0.75, delay: 0.35, type: 'tween', ease: [0.76, 0, 0.24, 1] }

  }

}



export const NavBar = (): React.ReactElement => {
  const [navActive, setNavActive] = useState(false);

  const showNavMenu = () => {
    setNavActive(!navActive)
  }



  const menuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      height: "100vh",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }
  };

  const pathVariants = {
    closed: {
      d: "M 0 0 Q 50 0 100 0 L 100 0 L 0 0",
    },
    open: {
      d: "M 0 0 Q 50 100 100 0 L 100 100 L 0 100",
    },
  };




  return (

    <section className='fixed top-5 left-0 w-full flex justify-between items-center p-10 z-[9999]'>
      <div className='flex items-center'>
        <div style={{ maxWidth: '100%', height: 'auto', }}>
          <Image
            src={ahlogo}
            alt='logo'
            width={90}
            priority
          />
        </div>
        {/* <small className='ml-12 pl-8'>AH LAB</small> */}
      </div>



      {
        navActive ?
          <>
            <div onClick={showNavMenu} className='button'>
              <div>

              </div>

              {/* <Hamburger toggled={navActive} toggle={setNavActive} /> */}

            </div>
            <AnimatePresence>
              <motion.div
                // variants={menu}
                animate={navActive ? 'open' : 'closed'}
                initial='closed'
                variants={menuVariants}
                className="bg-black text-white absolute top-0 left-0 w-full overflow-hidden">
                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path
                    fill="white"
                    variants={pathVariants}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  />
                </svg>
                <div className=''>

                  <ul className=' nav-list text-left text-zinc-400'>

                    <Link href='/' ><li className='li-list'>
                      <span className='number'>00.</span>
                      <span>services</span>
                    </li>

                    </Link>
                    <Link href='/Menu/Work' > <li className='li-list'>
                      <span className='number'>01.</span><span>work</span>
                    </li></Link>
                    <Link href='/Menu/Connect'> <li className='li-list'>
                      <span className='number'>02.</span><span>studio</span>
                    </li>
                    </Link>

                    <li className='li-list'>
                      <span className='number'>03.</span><span><a href='https://www.rachelstroy.com/' target='_blank'> Studio_</a></span>
                    </li>


                  </ul>


                </div>
              </motion.div>
            </AnimatePresence>
          </>

          :
          <div onClick={showNavMenu} className='button mr-8 pr-8 hover cursor-pointer'>
            <svg width="61" height="40" viewBox="0 0 61 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1490_325)">
                <path className="lineA" d="M11 24.93 C27.33 24.93 43.66 24.93 60 24.93" stroke="#292929" strokeWidth="2" data-original="M11 24.92151H60"></path>
                <path className="lineB" d="M16 14.93 C25.66 14.93 35.33 14.93 45 14.93" stroke="#292929" strokeWidth="2" data-original="M16 14.9215H45"></path>
                <path className="lineC" d="M1 4.93 C17.33 4.93 33.66 4.93 50 4.93" stroke="#292929" strokeWidth="2" data-original="M1 4.9216H50"></path>
                <path className="pointA" fillRule="evenodd" clipRule="evenodd" d="M11 24.93 C10.14 23.62 9.29 22.31 8.44 21 6.83 21 5.22 21 3.61 21 2.74 22.31 1.87 23.62 1 24.93 1.87 26.26 2.74 27.59 3.61 28.93 5.22 28.95 6.83 28.98 8.44 29 9.29 27.65 10.14 26.29 11 24.93" stroke="#292929" strokeWidth="2" data-original="M11 24.92157L8.4482 21L3.61273 21L1 24.92157L3.61273 28.92157L8.4482 29L11 24.92157Z"></path>
                <path className="pointB" fillRule="evenodd" clipRule="evenodd" d="M60 4.93 C59.14 3.62 58.29 2.31 57.44 1 55.83 1 54.22 1 52.61 1 51.74 2.31 50.87 3.62 50 4.93 50.87 6.26 51.74 7.59 52.61 8.93 54.22 8.95 55.83 8.98 57.44 9 58.29 7.65 59.14 6.29 60 4.93" stroke="#292929" strokeWidth="2" data-original="M60 4.9216L57.4482 1H52.6127L50 4.9216L52.6127 8.9216L57.4482 9L60 4.9216Z"></path>
              </g>
            </svg>


          </div>

      }


    </section >

  );

}
