import React from 'react';
// import dynamic from 'next/dynamic'
import Reveal from './Animations/Reveal';
import StaggerText from './Animations/StaggerText';
import FloatSvg from './Animations/FloatSvg';
import ToggleIcon from './Animations/IconToggle';
import { faMoon, faICursor } from '@fortawesome/free-solid-svg-icons';
import { faEarlybirds, faSpaceAwesome } from '@fortawesome/free-brands-svg-icons'


// const ThreeDimension = dynamic(() => import('@/Components/ThreeDimension'), {
//   ssr: false,
// })


export default function MainText() {

  return (
    <>
      <div className='font-bold leading-none p-1  relative' >
        <Reveal>
          <div className='mx-auto uppercase mobile-adjust'>
            <div className=' whitespace-nowrap mt-[40%] '>
              <span><ToggleIcon character="c" icon={faMoon} /></span>re<span><ToggleIcon character="a" icon={faSpaceAwesome} /></span>tive
            </div>
            <br />
            <div className='w-[75%] whitespace-nowrap mt-[-21%]  web text-right ' >

              <div>

                WE<span><ToggleIcon character="b" icon={faEarlybirds} /></span>

              </div>
              <br />

            </div>
            <div className=' text-right whitespace-nowrap w-full uppercase mobile-adjust mt-[-20%] '>
              Stud<span><ToggleIcon character="i" icon={faICursor} /></span>o

            </div>
          </div>
        </Reveal>
        <div className='text-right mt-[-10%] pro-txt' >
          <div className='text-xl inline-flex items-center justify-between
          py-6 px-5 border border-[#292929] rounded-md
        overflow-hidden relative leading-none
    w-[40%] '>
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
            <div className="text-sm uppercase w-[32%] ml-[60%] mt-8 pro-txt">Driven by innovation and creativity, AH LAB transforms ideas into dynamic digital experiences.</div>
          </Reveal>

        </div >




        <div className='mt-4'>
          <FloatSvg paths={[
            "M150,150 m-150,0 a150,150 0 1,0 300,0 a150,150 0 1,0 -300,0",
            "M150,150 m-120,0 a120,120 0 1,0 240,0 a120,120 0 1,0 -240,0",
          ]} />
          {/* <ThreeDimension /> */}
        </div>
      </div >
    </>
  )
}