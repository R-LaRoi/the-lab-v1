"use client"
import React from 'react'
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import '../../Stylesheets/parallax.css'
import { NavBar } from '@/app/Components/Nav';
import MainProjects from '@/app/Components/MainProjects';
import Reveal from '../../Components/Animations/Reveal';


export default function Projects() {


  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })


  // const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  // const scale9 = useTransform(scrollYProgress, [0, 1], [1, 4]);

  const pictures = [

    {
      src: "https://github.com/user-attachments/assets/08486bee-23bc-42e4-8d37-965b212e94d8",
      scale: scale4
    },
    {
      src: "https://github.com/user-attachments/assets/19ceeb47-0be5-42b5-b6ca-bd9ab56dfcd6",
      scale: scale5
    },
    {
      src: "https://github.com/user-attachments/assets/34292003-0576-4f52-8829-26aac2435429",
      scale: scale6
    },
    {
      src: "https://github.com/user-attachments/assets/245e99d3-70c6-4621-993d-95096ee0dfe1",
      scale: scale8
    },
    {
      src: "https://github.com/user-attachments/assets/310f8b61-56d9-4cdc-9f26-72fdb4c08b32",
      scale: scale7
    },


  ]


  return (
    <>
      <div ref={container} className='container-plx'>
        <div className='sticky'>
          {
            pictures.map(({ src, scale }, index) => {
              return <motion.div key={index} style={{ scale }} className="el">
                <div className="imageContainer">

                  <Image
                    src={src}
                    fill
                    alt="image"
                  />
                </div>
              </motion.div>

            })

          }
        </div>
        <div className='text-7xl text-bold p-8 z-99 uppercase'>
          projects
        </div>
      </div>

      <div className='section-two'>
        <NavBar />
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row mx-4 sm:mx-8 md:mx-[6rem] my-48 sm:my-32 md:my-[12rem] gap-6 sm:gap-8 md:gap-12">
            <div className="w-full  mt-4 md:mt-0">
              <Reveal>
                <p className='mobile-service'>
                  Design Beyond Limits
                </p>
              </Reveal>
              <Reveal>
                <h4 className="text-xl sm:text-3xl md:text-3xl lg:text-2xl leading-relaxed">
                  AH Lab is a creative studio dedicated to helping brands thrive in the digital landscape. With a user-centric approach, we transform complexity into seamless simplicity.
                </h4>
              </Reveal>
            </div>

          </div>
        </div>

        <MainProjects />
      </div>

    </>
  )
}