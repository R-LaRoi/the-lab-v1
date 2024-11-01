import React from 'react'


const footerLinks1 = ['work', 'services', 'agency', 'contact']
const footerLinks2 = ['Spotify', 'LINKEDIN', 'AH GROUP']


export default function Footer() {
  return (

    <div className='footer'>
      <div className="footer bg-[#f1fd03] m-0 h-[90vh] rounded-[20px] p-14 flex flex-col justify-between md:flex-row md:items-end">
        <div className="flex-grow"></div>
        <div className="w-full flex flex-col space-y-8 md:flex-row md:justify-between md:items-end md:space-y-0 md:space-x-8">
          <ul className="w-full text-center md:w-auto md:text-left text-2xl leading-[0.9] uppercase">
            {footerLinks1.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
          <ul className="w-full text-center md:w-auto md:text-left text-2xl leading-[0.9] uppercase">
            {footerLinks2.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex justify-between w-full text-xs mt-[5%] p-4'>
        <div>©2024 AHC
        </div>
        <div className='uppercase'>cookie policy </div>
      </div>
    </div>
  )
}