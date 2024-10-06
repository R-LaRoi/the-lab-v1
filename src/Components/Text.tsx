import React from 'react';
import dynamic from 'next/dynamic'


const ThreeDimension = dynamic(() => import('@/Components/ThreeDimension'), {
  ssr: false,
})


export default function MainText() {

  return (
    <>
      <div className="font-bold leading-none p-1 mt-[-12%] relative" >
        <div className="flex justify-between items-end mb-[-0.45em] w-[85%] mx-auto uppercase" >
          <div className="w-[75%]">Creative</div>
          <div className="w-[70%] text-right">Web</div>
        </ div>
        <div className="text-right
         mt-12 w-[92%] text-right uppercase">Studio</div>
        <div className="flex justify-end main-link">
          <div className="text-xl inline-flex items-center justify-between 
      py-6 px-5 border border-[rgba(238,238,242,0.1)] rounded-md 
      overflow-hidden relative leading-none
      w-[45%] mt-5 mr-[-6%]">
            <div>projects</div>
            <i className="mx-2">
              <svg viewBox="0 0 56 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-3">
                <path className="arrow-line" d="M1 6L49.8077 6" stroke="#EEEEF2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path className="arrow-line" d="M1 6L49.8077 6" stroke="#EEEEF2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M49.8086 1L55.0009 6L49.8086 11L49.8086 1Z" stroke="#EEEEF2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </i>
            <div>2024</div>

          </div>

        </div>
        <div className='text-sm uppercase sub-text flex justify-end'>
          <div className='absolute right-[10%] text-xs uppercase sub-text mt-14 pt-12 max-w-[20%]'>
            Driven by innovation and creativity, AH LAB transforms ideas into dynamic digital experiences.

          </div>
        </div>

      </div>
      <div className='mt-4'>
        <ThreeDimension />
      </div>
    </>
  )
}