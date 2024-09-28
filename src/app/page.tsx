import { NavBar } from "@/Components/Nav";


export default function Home() {
  return (
    <>
      <NavBar />
      <main className="intro-container">

        <div className="inner-content text-2xl flex items-center justify-center h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 hero-text">
            <div className="flex items-center justify-start">
              <div>creative</div>
            </div>

            <div className="flex flex-col items-end justify-center">
              <div className="text text-[#F2FF01]">web</div>  {/* Original font color */}
              <div className="text pt-14">agency</div>  {/* Original font color */}
            </div>
          </div>
        </div>



      </main >


    </>
  );
}
