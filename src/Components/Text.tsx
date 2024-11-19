import React from 'react';
import Reveal from './Animations/Reveal';
import Marquee from './Animations/Marquee';


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
          <div className='text-xl inline-flex items-center justify-between
    py-6 px-5 border border-[#292929] rounded-md
    overflow-hidden relative leading-none
    w-full sm:w-[40%] mx-auto mt-10 sm:mt-0'>
            <div>projects</div>
            <i className='mx-2'>
              <svg viewBox='0 0 56 12' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-14 h-3'>
                <path className='arrow-line' d='M1 6L49.8077 6' stroke='#292929' strokeLinecap='round' strokeLinejoin='round'></path>
                <path className='arrow-line' d='M1 6L49.8077 6' stroke='#292929' strokeLinecap='round' strokeLinejoin='round'></path>
                <path fillRule='evenodd' clipRule='evenodd' d='M49.8086 1L55.0009 6L49.8086 11L49.8086 1Z' stroke='#292929' strokeLinecap='round' strokeLinejoin='round'></path>
              </svg>
            </i>
            <div>2024</div>
          </div>

          <Reveal>
            <div className="text-sm uppercase w-full mt-8 tracking-[1px]">
              Harness the power of innovation to create digital experiences that captivate, engage, and inspire.
            </div>
          </Reveal>
        </div>

        <div className='mt-4'>

        </div>
      </div>
    </>
  )
}