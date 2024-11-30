"use client"
import React from 'react'
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import '../../Stylesheets/parallax.css'
import { NavBar } from '@/app/Components/Nav';
import MainProjects from '@/app/Components/MainProjects';
import Reveal from '../../Components/Animations/Reveal';
import Footer from '@/app/Components/Footer';

export default function Projects() {


  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })


  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: "https://github.com/user-attachments/assets/067f5ae1-0a41-4650-a9f5-ff68e2c6a216",
      scale: scale
    },
    {
      src: "https://github.com/user-attachments/assets/067f5ae1-0a41-4650-a9f5-ff68e2c6a216",
      scale: scale4
    },
    {
      src: "https://github.com/user-attachments/assets/067f5ae1-0a41-4650-a9f5-ff68e2c6a216",
      scale: scale5
    },
    {
      src: "https://github.com/user-attachments/assets/067f5ae1-0a41-4650-a9f5-ff68e2c6a216",
      scale: scale6
    },
    {
      src: "https://github.com/user-attachments/assets/067f5ae1-0a41-4650-a9f5-ff68e2c6a216",
      scale: scale8
    },
    {
      src: "https://github.com/user-attachments/assets/067f5ae1-0a41-4650-a9f5-ff68e2c6a216",
      scale: scale7
    },
    {
      src: "https://github.com/user-attachments/assets/067f5ae1-0a41-4650-a9f5-ff68e2c6a216",
      scale: scale9
    }

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