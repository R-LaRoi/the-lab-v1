import React from 'react';
import dynamic from 'next/dynamic'
// import Link from 'next/link';

const ThreeDimension = dynamic(() => import('@/Components/ThreeDimension'), {
  ssr: false,
})


export default function MainText() {

  return (
    <>
      <div className="font-bold leading-none p-3 relative" >
        <div className="flex justify-between items-end mb-[-0.45em] w-[80%] mx-auto uppercase" >
          <div>Creative</div>
          <div>Web</div>
        </ div>
        <div className="text-right mt-12 w-[90%] text-right uppercase">Studio</div>
        <div className="flex justify-end mr-12 main-link">
          <div className="text-xl inline-flex items-center justify-between 
      py-6 px-5 border border-[rgba(238,238,242,0.1)] rounded-md 
      overflow-hidden relative leading-none
      w-[40%] -ml-[5%]">
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

        <div className='text-sm uppercase sub-text flex 
      justify-end'>
          <div className='absolute right-2  text-sm uppercase sub-text mt-12 p-4 max-w-[20%]'>
            We specialize in creating meaningful digital experiences infused with emotion, driven by innovation, evoking a sense of awe and wonder.
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <ThreeDimension />
      </div>
    </>
  )
}