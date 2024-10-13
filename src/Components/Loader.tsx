'use client'
import Scramble from "./Animations/Scramble"


export default function Loader() {


  return (
    <section className='loader-body'>
      <div className='text-center '>
        <Scramble />
      </div>
      <div className='loader'>
        <div id='load'>

        </div>

      </div>
    </section>
  )

}