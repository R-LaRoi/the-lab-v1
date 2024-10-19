import React from 'react'
import Marquee from './Animations/Marquee'


const footerLinks1 = ['work', 'services', 'agency', 'contact']
const footerLinks2 = ['Spotify', 'LINKEDIN', 'AH GROUP']


export default function Footer() {
  return (

    <>
      <div className='text-9xl marquee mt-[20%]'>
        <Marquee duration={10}>
          / / / / ah lab/ / / / ah lab/ / / / ah lab/ / / / / /
        </Marquee>
      </div>
      <div className=' footer flex justify-between w-full text-xl md:text-3xl  mt-[10%] p-4'>
        <ul className="flex-none">
          {footerLinks1.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
        <ul className='mx-auto lowercase'>
          {footerLinks2.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
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