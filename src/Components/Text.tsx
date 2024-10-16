import React from 'react';
import dynamic from 'next/dynamic'
import Reveal from './Animations/Reveal';
import StaggerText from './Animations/StaggerText';


const ThreeDimension = dynamic(() => import('@/Components/ThreeDimension'), {
  ssr: false,
})


export default function MainText() {


  return (
    <>
      <div className='font-bold leading-none p-1 mt-[-5%] relative' >
        <div className='flex justify-between items-end mb-[-0.45em] mx-auto uppercase mobile-adjust'>
          <div className='w-full whitespace-nowrap'>
            <StaggerText text='Creative' />
          </div>
          <div className='w-[75%] text-right whitespace-nowrap web'>
            <StaggerText text='WEB' />
          </div>
        </div>
        <div className='text-right mt-12 w-full uppercase mobile-adjust'>
          <StaggerText text='Studio' />
        </div>
        <div className='flex justify-end main-link mobile-adjust'>
          <div className='text-xl inline-flex items-center justify-between 
    py-6 px-5 border border-[#292929] rounded-md 
    overflow-hidden relative leading-none
    w-[45%] mt-12 mr-[-14%]'>
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
        </div>


        <div className='text-sm uppercase sub-text flex justify-end'>
          <div className='absolute sm:right-[10%] left-[5%] sm:left-auto text-sm uppercase sub-text mt-14 pt-12 w-[80%] sm:max-w-[80%]'>
            <Reveal>
              <p>Driven by innovation and creativity, AH LAB transforms ideas into dynamic digital experiences.</p>
            </Reveal>
          </div>
        </div>
      </div>


      <div className='mt-4'>
        {/* <ThreeDimension /> */}
      </div>
    </>
  )
}