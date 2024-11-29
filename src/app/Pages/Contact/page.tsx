
"use client"
import React from 'react';
import ContactForm from '@/app/Components/ContactForm';
import Reveal from '../../Components/Animations/Reveal';
import { NavBar } from '@/app/Components/Nav';
import '../../Stylesheets/footer.css'
import FloatSvg from '@/app/Components/Animations/FloatSvg';

export default function page() {


  return (
    <div className='intro-container'>
      <NavBar />

      <div className="w-full md:w-[70%]">
        <FloatSvg paths={[
          "M150,150 m-150,0 a150,150 0 1,0 300,0 a150,150 0 1,0 -300,0",
          "M150,150 m-120,0 a120,120 0 1,0 240,0 a120,120 0 1,0 -240,0",
        ]} />
      </div>

      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 p-4 md:p-[8.5rem]">
        <div className="w-full md:w-[70%]">
          <div className="w-full mt-4 md:mt-0 p-7 mobile">
            <Reveal>
              <p className="text-3xl sm:text-4xl md:text-6xl leading-tight">
                Ready to transform your digital presence? Let's talk.
              </p>
            </Reveal>
            <Reveal>
              <h4 className="text-base sm:text-lg md:text-2xl lg:text-3xl leading-relaxed py-1">
                We are here to help—drop us a line and let's get started.
              </h4>
            </Reveal>
            <hr className="my-2 md:my-4" />
          </div>
          <div className="mt-4 md:mt-[20%] mobile-form">
            <ContactForm />
          </div>
        </div>

        <div className="w-full md:w-[30%] mt-[40%] p-8 text-xs ">
          <div className='mb-4'>
            <small>Contact Details</small>
            <div>info@ahlab.co</div>
          </div>
          <div className='mb-4'><small>Location</small>
            <div >New York, NY 11231</div></div>
          <div><small>Social</small>
            <div >linkedin</div><div >dribble</div></div>
        </div>
      </div>
    </div>

  )
}

