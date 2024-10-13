'use client';
import { useState, useEffect } from 'react';
import { NavBar } from '@/Components/Nav';
import MainProjects from '@/Components/MainProjects';
import MainTwo from '@/Components/MainTwo';
import Text from '@/Components/Text'
import Loader from '@/Components/Loader'


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
    setTimeout(() => setLoading(false), 2000)
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
                <Text />
              </div>
            </div>
            <MainTwo />
            <MainProjects />
          </main>
        </>)
        : (<Loader />)
      }

    </>
  );
}
