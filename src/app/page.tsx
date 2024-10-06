import { NavBar } from "@/Components/Nav";

import MainTwo from "@/Components/MainTwo";
import Text from '@/Components/Text'


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
        <div className="inner-content flex items-center h-screen relative">
          <div className="blur-circle" style={circleStyle}></div>
          <div className="container mx-auto p-4">
            <Text />
          </div>
        </div>
        <MainTwo />

      </main>

    </>
  );
}
