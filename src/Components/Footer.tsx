import React from 'react'


const footerLinks1 = ['work', 'services', 'agency', 'contact']
const footerLinks2 = ['Spotify', 'LINKEDIN', 'AH GROUP']


export default function Footer() {
  return (
    <div className='relative h-[600px] md:h-[50vh] bg-[#f1fd03] w-screen left-[50%] right-[50%] mx-[-50vw]'
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className='fixed bottom-0 left-0 right-0 w-full'>
        <div className='footer'>
          <div className='bg-[#f1fd03] py-3 px-4 md:px-12 h-full w-full flex flex-col justify-between'>
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
          <div className='flex justify-between w-full text-xs mt-[5%] py-4'>
            <div className='p-8'>©2024 AHC</div>
            <div className='uppercase p-8 '>cookie policy</div>
          </div>
        </div>
      </div>
    </div>
  )
}