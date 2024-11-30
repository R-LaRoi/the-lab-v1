import React from 'react';
import Reveal from './Animations/Reveal';
import Marquee from './Animations/Marquee';
import Link from 'next/link';

export default function MainText() {

  return (
    <>
      <div className='font-bold leading-none p-1 relative'>
        <Reveal>

          <div className='mx-auto uppercase mobile-adjust'>
            <div className='whitespace-nowrap mt-[40%] mar'>

              <Marquee>DESIGN BEYOND LIMITS</Marquee>

            </div>
          </div>
        </Reveal>
        <div className='text-center sm:text-right mt-[-10%]  tracking-[1px]'>
          <Link href="/Pages/Projects" className="text-xl inline-flex items-center justify-between
    py-6 px-5 border border-[#292929] rounded-md
    overflow-hidden relative leading-none
    w-full sm:w-[40%] mx-auto mt-10 sm:mt-0
    hover:bg-[#f2ff01] hover:border-transparent group">
            <div className="group-hover:text-black">projects</div>
            <i className='mx-2'>
              <svg viewBox='0 0 56 12' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-14 h-3'>
                <path className='arrow-line group-hover:stroke-black' d='M1 6L49.8077 6' stroke='#292929' strokeLinecap='round' strokeLinejoin='round'></path>
                <path className='arrow-line group-hover:stroke-black' d='M1 6L49.8077 6' stroke='#292929' strokeLinecap='round' strokeLinejoin='round'></path>
                <path fillRule='evenodd' clipRule='evenodd' d='M49.8086 1L55.0009 6L49.8086 11L49.8086 1Z' stroke='#292929' strokeLinecap='round' strokeLinejoin='round' className="group-hover:stroke-black"></path>
              </svg>
            </i>
            <div className="group-hover:text-black">2024</div>
          </Link>

          <Reveal>
            <div className="text-sm uppercase w-full mt-8 tracking-[1px]">
              Designing dynamic digital experiences that captivate and inspire, creating outcomes that make a difference.
            </div>
          </Reveal>
        </div>

        <div className='mt-4'>

        </div>
      </div>
    </>
  )
}