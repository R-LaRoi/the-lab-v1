'use client';
import { useState, useEffect } from 'react';
import { NavBar } from '@/app/Components/Nav';
import MainTwo from '@/app/Components/MainTwo';
import Loader from '@/app/Components/Loader'
import Footer from '@/app/Components/Footer';
import MainText from '@/app/Components/Text';
import MainProjects from '@/app/Components/MainProjects';





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
