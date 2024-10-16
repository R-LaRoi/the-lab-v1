import React from 'react'
import Marquee from './Animations/Marquee'

type Props = {

}

export default function Footer({ }: Props) {
  return (

    <>
      <div className='text-9xl marquee mt-[20%]'>
        <Marquee duration={10}>
          / / / / ah lab/ / / / ah lab/ / / / ah lab/ / / / / /
        </Marquee>
      </div>
      <div className=' footer flex justify-between w-full text-xl md:text-3xl  mt-[10%] p-4'>
        <ul className='flex-none'>
          <li>WORK</li>
          <li>SERVICES</li>
          <li>AGENCY</li>
          <li>CONTACT</li>
        </ul>
        <ul className='mx-auto '>
          <li>LINKEDIN</li>
          <li>SPOTIFY</li>
          <li>AH GROUP</li>
        </ul>

      </div>
      <div className='flex justify-between w-full text-xs mt-[5%] p-4'>
        <div>©2024 AHC
        </div>
        <div className='uppercase'>cookie policy </div>
      </div>
    </>
  )
}