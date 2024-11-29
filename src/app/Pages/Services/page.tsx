'use client'
import React from 'react'
import { NavBar } from '@/app/Components/Nav';
import ServiceItem from '@/app/Components/ServiceItems';
import Reveal from '../../Components/Animations/Reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWordpressSimple, faShopify, faSquarespace, faWebflow, faReact } from '@fortawesome/free-brands-svg-icons';


export default function page() {
  return (
    <div className='intro-container bg-[#f1f1f1] '>
      <NavBar />
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row mx-4 sm:mx-8 md:mx-[6rem] my-48 sm:my-32 md:my-[12rem] gap-6 sm:gap-8 md:gap-12">
          <div className="w-full  mt-4 md:mt-0">
            <Reveal>
              <p style={{ fontSize: '4rem', lineHeight: '1' }} >
                Empowering Brands through Innovative Web Design
              </p>

            </Reveal>
            <Reveal>
              <h4 className="text-xl sm:text-3xl md:text-3xl lg:text-2xl leading-relaxed py-4">
                We're here to transform complexity into user-friendly solutions that drive engagement and fuel growth for your brand.
              </h4>

            </Reveal>
            <hr className='m-8  '></hr>
          </div>

        </div>
      </div>


      <div>
        <div className="flex flex-col items-center justify-between space-x-10 md:flex-row">
          <video playsInline autoPlay muted loop className="rounded-2xl md:order-2" style={{ width: '60%' }}>
            <source
              src="https://github.com/user-attachments/assets/513eb1cb-137e-44af-a649-899a1555c0f2"
              type="video/mp4"
            />
          </video>

          <div className="flex-1 max-w-sm text-left md:order-1 md:ml-0 md:mt-0">
            <Reveal>
              <p className='text-2xl'>
                We provide tailored solutions that elevate digital presence worldwide. Every project is a canvas for innovation, pushing boundaries with an unwavering commitment to excellence.
              </p>
            </Reveal>
          </div>
        </div>

        <section className='mt-[20%] p-4 md:mt-[10%] md:p-8'>
          <div>
            <div className="max-w-5xl mx-auto">
              <div className='text-5xl mb-4 md:mb-8 text-center'>We're dedicated to helping you define and build your digital presence.</div>
            </div>
            <div className="flex items-left justify-center space-x-4 mb-4 md:space-x-6 md:mb-8 ">
              <FontAwesomeIcon icon={faWordpressSimple} className="text-3xl" />
              <FontAwesomeIcon icon={faShopify} className="text-3xl" />
              <FontAwesomeIcon icon={faSquarespace} className="text-3xl" />
              <FontAwesomeIcon icon={faWebflow} className="text-3xl" />
              <FontAwesomeIcon icon={faReact} className="text-3xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-10">
            <ServiceItem
              number="01"
              title="Design"
              description="Creating dynamic interfaces with key features, including user-friendly interactions, animations, and intuitive design, that together cultivate a vibrant and engaging user experience."
            />
            <ServiceItem
              number="02"
              title="Development"
              description="Unlock the potential of your online presence with our responsive and interactive applications built on React, delivering a seamless experience across all devices. Plus, we specialize in creating customized solutions on WordPress, Shopify, and Webflow, perfectly tailored to meet your unique needs."
            />
            <ServiceItem
              number="03"
              title="Custom Solution"
              description="We deliver complete website solutions that define your digital presence. Using JavaScript frameworks like React and Next.js, we build responsive, interactive applications. Our skills in API integration and optimization ensure a seamless user experience across all devices, making your web presence both functional and memorable."
            />
          </div>
        </section>
      </div>
    </div>

  )
}