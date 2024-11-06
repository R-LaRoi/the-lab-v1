import React from 'react'
import Reveal from './Animations/Reveal';
import AnimatedText from './Animations/AnimatePresence';
import FloatSvg from './Animations/FloatSvg';
import Image from 'next/image';
export default function MainTwo() {
  return (
    <>
      <div className='mt-4'>
        <FloatSvg paths={[
          "M150,150 m-150,0 a150,150 0 1,0 300,0 a150,150 0 1,0 -300,0",
          "M150,150 m-120,0 a120,120 0 1,0 240,0 a120,120 0 1,0 -240,0",
        ]} />
      </div>
      <div className='grid grid-cols-1 mt-[70%] mx-[5%] md:mx-[10%] md:grid-cols-4 gap-8 text-stone-900'>
        <div className='col-span-1 md:col-span-1'>
          <Reveal>
            <p className='mb-4 md:mb-0 uppercase text-xs'>mission</p>
          </Reveal>
        </div>
        <div className='col-span-1 md:col-span-1'>
          <Reveal>
            <p className='uppercase text-xs pb-8 mb-6'>
              AH Lab is committed to harnessing the power of innovation to create digital experiences that captivate, engage, and inspire. We believe in the transformative potential of immersive experiences, which blend cutting-edge technology with creative storytelling to cultivate deeper connections between brands and their audiences.
            </p>
          </Reveal>
        </div>
        <div className='col-span-1 md:col-span-2 md:ml-[15%]'>
          <div className='text-3xl md:text-5xl uppercase statement'>
            <Reveal>
              <AnimatedText text='We work with awesome people like you to create web experiences that are user-friendly and designed to go places.' />
            </Reveal>
          </div>
          <div className='mt-14 pt-14 flex space-x-14 uppercase text-xs'>
            <span className='border-b border-current pb-1 hover:pb-2 transition-all duration-300'>services</span>
            <span className='border-b border-current pb-1 hover:pb-2 transition-all duration-300'>about</span>
          </div>
        </div>
      </div>
      <div className='mt-14 relative w-screen h-[80vh] md:h-[70vh] left-[50%] right-[50%] mx-[-50vw]'>
        <Image
          src="https://github.com/user-attachments/assets/ccc430e0-db01-4089-8954-1125555c59ed"
          alt='landing page'
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row mx-[6rem] my-[12rem] gap-8 md:gap-12">
          <div className="md:w-1/3 mt-4 md:mt-0">
            <p className="text-base md:text-md">
              <b>Design Beyond Limits</b><br />Creating Memorable Experiences for Brands.
            </p>
          </div>
          <div className="md:w-2/3">
            <h4 className="text-2xl md:text-2xl lg:text-xl leading-tight">
              AH Lab is a creative studio dedicated to helping brands thrive in the digital landscape. With a user-centric approach, we transform complexity into seamless simplicity.
            </h4>
          </div>

        </div>
      </div>
    </>
  )
}

