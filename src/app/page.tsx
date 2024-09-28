import { NavBar } from "@/Components/Nav";


export default function Home() {
  return (
    <>
      <NavBar />
      <main className="intro-container">
        <div className="inner-content text-2xl text-center">
          <h1 className="text">CREATIVE</h1>
          <h1 className="text text-[#F2FF01]">WEB</h1>
          <h1 className="text">AGENCY</h1>
        </div>
      </main>


    </>
  );
}
