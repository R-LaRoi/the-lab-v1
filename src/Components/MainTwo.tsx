import React from 'react'



export default function MainTwo() {
  return (

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1">
        <p>mission</p>
      </div>
      <div className="col-span-1 md:-ml-[10%]">
        <p className='uppercase text-sm md:text-base lg:text-lg pb-8 md:pb-10 w-11/12 md:w-1/4 lg:w-1/2'>
          Creating dynamic interfaces with key features, including user-friendly interactions, animations, and intuitive design, that together cultivate a vibrant and engaging user experience.
        </p>

      </div>
      <div className="col-span-1 md:col-span-2">
        <div className='text-5xl md:text-8xl lg:text-8xl xl:text-9xl uppercase w-full md:w-80 lg:w-96'>
          We work with awesome people like you to create web experiences that are user-friendly and designed to go places.
        </div>
      </div>
    </div>
  )
}

