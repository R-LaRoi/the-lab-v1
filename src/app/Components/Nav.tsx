'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import ahlogo from '@/app/assets/ahlab-logo.png'
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import '../Stylesheets/nav.css'



export const NavBar = (): React.ReactElement => {
  const [navActive, setNavActive] = useState(false);

  const showNavMenu = () => {
    setNavActive(!navActive)
  }

  const menuVariants = {
    open: { transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] } },
    closed: {

      top: "0px",
      right: "0px",
      transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }

    }
  };


  return (

    <section className='fixed top-4 left-0 w-full flex justify-between items-center  z-[9990]'>
      <div className='flex items-center'>
        <a href="/" style={{ maxWidth: '100%', height: 'auto', padding: '.5rem' }}>
          <Image
            src={ahlogo}
            alt='logo'
            width={90}
            priority
          />
        </a>
      </div>

      <div className='relative'>
        <AnimatePresence>
          {navActive && (
            <motion.div
              animate={navActive ? 'open' : 'closed'}
              initial='closed'
              variants={menuVariants}
              className="fixed bottom-0 left-0 h-screen w-screen bg-[#f1f1f1] z-[998]"
            >

              <a href="/" style={{ maxWidth: '100%', height: 'auto', padding: '1rem' }}>
                <Image
                  src={ahlogo}
                  alt='logo'
                  width={90}
                  priority
                />
              </a>

              <div className='absolute top-5 right-5 text-4xl text-zinc-900 p-8 ' onClick={() => setNavActive(false)}>
                <FontAwesomeIcon icon={faStarOfLife} />
              </div>
              <div className='p-10'>
                <ul className='nav-list text-left text-zinc-400'>
                  {['Projects', 'Services', 'Contact'].map((link) => (
                    <Link key={link} href={`/Pages/${link}`}>
                      <li className='li-list'><span>{link}</span></li>
                    </Link>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!navActive && (
          <div onClick={showNavMenu} className='button mr-8 pr-8 hover cursor-pointer'>
            <svg width="61" height="40" viewBox="0 0 61 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1490_325)">
                <path className="lineA" d="M11 24.93 C27.33 24.93 43.66 24.93 60 24.93" stroke="#292929" strokeWidth="2"></path>
                <path className="lineB" d="M16 14.93 C25.66 14.93 35.33 14.93 45 14.93" stroke="#292929" strokeWidth="2"></path>
                <path className="lineC" d="M1 4.93 C17.33 4.93 33.66 4.93 50 4.93" stroke="#292929" strokeWidth="2"></path>
              </g>
            </svg>
          </div>
        )}
      </div>
    </section>

  );

}
