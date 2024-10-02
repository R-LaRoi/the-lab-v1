import { NavBar } from "@/Components/Nav";
import dynamic from 'next/dynamic'


const ThreeDimension = dynamic(() => import('@/Components/ThreeDimension'), {
  ssr: false,

})


const circleStyle = {
  translate: 'none',
  rotate: 'none',
  scale: 'none',
  opacity: 0.5,
  transform: 'translate(-50%, -50%) translate(-0.199px, -0.199px)'
};


export default function Home() {
  return (
    <>
      <NavBar />

      <main className="intro-container">
        <div className="inner-content flex items-center justify-center h-screen relative">
          <div className="blur-circle" style={circleStyle}></div>
          <div className="absolute text-white z-0" style={{ fontSize: '14vw', whiteSpace: 'nowrap', textAlign: 'center', width: '100%', left: 0 }}>

          </div>
          <ThreeDimension />
        </div>
      </main>

    </>
  );
}
