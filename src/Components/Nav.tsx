'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import ahlogo from '@/app/assets/ahlab-logo.png'
import { motion } from 'framer-motion';
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
        <small className='ml-12 pl-8'>AH LAB</small>
      </div>





      {
        navActive ?
          <>
            <div onClick={showNavMenu} className='button'>
              <div>

              </div>

              {/* <Hamburger toggled={navActive} toggle={setNavActive} /> */}

            </div>
            <motion.div
              variants={menu}

              animate={navActive ? 'open' : 'closed'}

              initial='closed'>

              <div className='overlay'>

                <ul className=' nav-list text-left'>

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

          </>


          :


          <div onClick={showNavMenu} className='button mr-8 pr-8 hover cursor-pointer'>
            <svg width='40' height='55' viewBox='0 0 30 61' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_1490_325)'>
                <path className='lineA' d='M5.07 11 C5.07 27.33 5.07 43.66 5.07 60 ' stroke='#292929' strokeWidth='2' data-original='M5.07849 11V60'></path>
                <path className='lineB' d='M15.07 16 C15.07 25.66 15.07 35.33 15.07 45 ' stroke='#292929' strokeWidth='2' data-original='M15.0785 16V45'></path>
                <path className='lineC' d='M25.07 1 C25.07 17.33 25.07 33.66 25.07 50 ' stroke='#292929' strokeWidth='2' data-original='M25.0784 1V50'></path>
                <path className='pointA' fillRule='evenodd' clipRule='evenodd' d='M5.07 11 C6.38 10.14 7.69 9.29 9 8.44 9 6.83 9 5.22 9 3.61 7.69 2.74 6.38 1.87 5.07 1 3.74 1.87 2.41 2.74 1.07 3.61 1.05 5.22 1.02 6.83 1 8.44 2.35 9.29 3.71 10.14 5.07 11 ' stroke='#292929' strokeWidth='2' data-original='M5.07843 11L9 8.4482L9 3.61273L5.07843 1L1.07843 3.61273L1 8.4482L5.07843 11Z'></path>
                <path className='pointB' fillRule='evenodd' clipRule='evenodd' d='M25.07 60 C26.38 59.14 27.69 58.29 29 57.44 29 55.83 29 54.22 29 52.61 27.69 51.74 26.38 50.87 25.07 50 23.74 50.87 22.41 51.74 21.07 52.61 21.05 54.22 21.02 55.83 21 57.44 22.35 58.29 23.71 59.14 25.07 60 ' stroke='#292929' strokeWidth='2' data-original='M25.0784 60L29 57.4482V52.6127L25.0784 50L21.0784 52.6127L21 57.4482L25.0784 60Z'></path>
              </g>
            </svg>


          </div>

      }


    </section >

  );

}
