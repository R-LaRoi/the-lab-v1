import React from 'react'
import '../../src/app/Stylesheets/footer.css'

// const footerLinks1 = ['work', 'services', 'agency', 'contact']
// const footerLinks2 = ['Spotify', 'LINKEDIN', 'AH GROUP']
// const rotation = 0.00115;
// const translation = -76;


export default function Footer() {
  return (
    <div className='relative h-[700px] md:h-[100vh] bg-[#f1fd03] w-screen left-[50%] right-[50%] mx-[-50vw]'
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className='fixed bottom-0 left-0 right-0 w-full'>
        <div className='footer md:flex md:justify-center md:items-end md:h-full'>
          <div className='py-5 px-6 md:py-5 md:px-16 md:w-3/4 h-full w-full flex flex-col justify-between'>
            <div className="flex-grow"></div>
            <div className="relative mb-16 text-5xl">
              <span className=''><div className="profile-picture "></div> Let's work </span><br />
              <span>together</span>

              <div className="mt-8">
                <hr className="border-t border-gray-800" />
              </div>

              <div className="absolute bottom-0 right-0 transform translate-y-1/2">
                <a
                  href="#"
                  className="
                inline-flex items-center justify-center
                w-[130px] h-[130px] rounded-full bg-gray-900
                hover:bg-gray-800
                text-white font-bold text-base text-center
                transition-all duration-300 ease-in-out
                transform hover:scale-105
              "
                >
                  <span>Get in touch</span>
                </a>
              </div>
            </div>

            <div className="w-full flex flex-col space-y-8 md:flex-row md:justify-between md:items-end md:space-y-0 md:space-x-8">
              <div className="flex flex-col md:flex-row md:space-x-4 mt-8">
                <div className="mb-4 md:mb-0 flex-1 md:flex-none md:w-64">
                  <a
                    href="mailto:info@ahlab.co"
                    className="
                  block w-full p-4 rounded-full
                  border border-black hover:border-gray-800
                  text-black hover:text-gray-800 text-base
                  transition-all duration-300 ease-in-out
                  transform hover:scale-105
                  text-center truncate
                "
                    title="info@ahlab.co"
                  >
                    <span>info@ahlab.co</span>
                  </a>
                </div>
                <div className="mb-4 md:mb-0 flex-1 md:flex-none md:w-64">
                  <a
                    href="mailto:"
                    className="
                  block w-full p-4 rounded-full
                  border border-black hover:border-gray-800
                  text-black hover:text-gray-800 text-base
                  transition-all duration-300 ease-in-out
                  transform hover:scale-105
                  text-center truncate
                "
                    title=""
                  >
                    <span>info@ahlab.co</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between w-full text-xs mt-[5%] py-4 md:w-1/2 md:mx-auto'>
          <div className='p-8'>©2024 AHC</div>
          <div className='uppercase p-8'>cookie policy</div>
        </div>
      </div>
    </div>

  )
}