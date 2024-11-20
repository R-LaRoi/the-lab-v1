'use client';
import { useState, useEffect } from 'react';
import { NavBar } from '@/Components/Nav';
import MainTwo from '@/Components/MainTwo';
import Loader from '@/Components/Loader'
import Footer from '@/Components/Footer';
import MainText from '@/Components/Text';
import MainProjects from '@/Components/MainProjects';





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
