import React from 'react'
import Reveal from './Animations/Reveal';
import AnimatedText from './Animations/AnimatePresence';

export default function MainTwo() {
  return (
    <>
      <div className="grid grid-cols-1 mt-[20%] mx-[5%] md:mx-[10%] md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <Reveal>
            <p className="mb-4 md:mb-0 uppercase text-xs">mission
            </p>
          </Reveal>
        </div>

        <div className="col-span-1 md:col-span-1">
          <Reveal>
            <p className='uppercase text-xs pb-8 mb-6'>
              Creating dynamic interfaces with key features, including user-friendly interactions, animations, and intuitive design, that together cultivate a vibrant and engaging user experience.
            </p>
          </Reveal>
        </div>
        <div className="col-span-1 md:col-span-2 md:ml-[15%]">

          <div className='text-3xl md:text-5xl uppercase'>
            <Reveal>
              <AnimatedText text="We work with awesome people like you to create web experiences that are user-friendly and designed to go places." />
            </Reveal>
          </div>

          <div className='mt-14 pt-14 flex space-x-14 uppercase text-xs'>
            <span className="border-b border-current pb-1 hover:pb-2 transition-all duration-300">services</span>
            <span className="border-b border-current pb-1 hover:pb-2 transition-all duration-300">about</span>
          </div>
        </div>
      </div >

    </>
  )
}

