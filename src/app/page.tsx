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
        <div className="inner-content text-2xl flex items-center justify-center h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2   hero-text">
            <div className="flex flex-col items-start">
              <div className="ml-8 left">CREATIVE</div>
              <div className="blur-circle" style={circleStyle}></div>
              <ThreeDimension />

            </div>
            <div className="flex flex-col items-end right">
              <div className="text-[#F2FF01] mb-3">WEB</div>
              <div className="mt-20 pt-14">AGENCY</div>
              <div className="box"></div>
            </div>

          </div>
        </div>



      </main >


    </>
  );
}
