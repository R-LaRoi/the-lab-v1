'use client';
import { useState, useEffect } from 'react';
import { NavBar } from '@/Components/Nav';

import MainTwo from '@/Components/MainTwo';
import Loader from '@/Components/Loader'
import Footer from '@/Components/Footer';
import MainText from '@/Components/Text';
import MainProjects from '@/Components/MainProjects';

const circleStyle = {
  translate: 'none',
  rotate: 'none',
  scale: 'none',
  opacity: 0.5,
  transform: 'translate(-50%, -50%) translate(-0.199px, -0.199px)'
};


export default function Home() {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])


  return (
    <>
      {loading === false ? (
        <>
          <NavBar />
          <main className='intro-container'>
            <div className='inner-content flex items-center h-screen relative'>
              <div className='blur-circle' style={circleStyle}></div>
              <div className='container mx-auto p-4'>
                <MainText />

              </div>
            </div>
            <MainTwo />
            <MainProjects />
            <div className='mt-[20%]'>
              <Footer />
            </div>
          </main>
        </>)
        : (<Loader />)
      }

    </>
  );
}
