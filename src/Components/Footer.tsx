import React from 'react'


const footerLinks1 = ['work', 'services', 'agency', 'contact']
const footerLinks2 = ['Spotify', 'LINKEDIN', 'AH GROUP']
const rotation = 0.00115;
const translation = -76;


export default function Footer() {
  return (
    <div className='relative h-[600px] md:h-[50vh] bg-[#f1fd03] w-screen left-[50%] right-[50%] mx-[-50vw]'
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>

      <div className="container medium">
        <div className="row">
          <div className="flex-col">
            <div className="arrow" style={{ transform: 'rotate(15deg)' }}>
              {/* <ArrowSvg /> */}
            </div>
            <h2>
              <span><div className="profile-picture"></div> Let's work </span>
              <span>together</span>
            </h2>
          </div>
        </div>
        <div className="row mt-[10%]">
          <div className="relative flex-col m-4">
            <div className="absolute w-full top-1/2 transform -translate-y-1/2 z-0">
              <hr className="border-t border-gray-800" />
            </div>
            <div className="relative flex justify-end items-center z-10">
              <a
                href="https://dennissnellenberg.com/contact"
                className="
        inline-flex items-center justify-center
        w-[150px] h-[150px] rounded-full bg-gray-900
        hover:bg-gray-800
        text-white font-bold text-base text-center
        transition-all duration-300 ease-in-out
        transform hover:scale-105  -translate-x-[15%]
      "

              >
                <span className="block">Get in touch</span>
              </a>
            </div>
          </div>
        </div>
        {/* button----- */}
        <div className=" px-5 mt-[20%]">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <div className="mb-4 md:mb-0 flex-1 md:flex-none md:w-64">
              <a
                href="mailto:info@dennissnellenberg.com"
                className="
          block w-full  p-4 rounded-full
          border border-black hover:border-gray-800
          text-black hover:text-gray-800  text-base
          transition-all duration-300 ease-in-out
          transform hover:scale-105
          text-center truncate "
                title="info@dennissnellenberg.com"
              >
                <span>info@ahlab.co</span>
              </a>
            </div>
            <div className="flex-1 md:flex-none md:w-64 ">
              <a href="#"
                className="block w-full  p-4 rounded-full
                border border-black hover:border-gray-800
                text-black hover:text-gray-800  text-base
                transition-all duration-300 ease-in-out
                transform hover:scale-105 text-center" >
                <span>+1 000 000 0000</span>
              </a>
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}