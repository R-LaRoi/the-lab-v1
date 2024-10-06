import React from 'react'

type Props = {}

export default function MainProjects({ }: Props) {
  return (
    <div className='project-grid'>
      <div className="h-px bg-white/20 my-8 mx-8 mt-14">
      </div>

      <p className=" text-xs p-8 mb-4 md:mb-0 uppercase">projects</p>
      <div className='pro-inner container mx-auto px-4 w-full relative'>
        <div className='flex flex-col md:flex-row  gap-12
        '>
          <div className='md:w-1/2'>
            <div className='title '>
              <div>RECENT</div>
              <div>WORK<span>.</span></div>
            </div>
          </div>


          <video playsInline autoPlay muted loop className="col-2 rounded-2xl" >
            <source
              src="
https://github.com/user-attachments/assets/fc1b9ab7-89e1-4b81-97a6-ade972dfe0cf"
              type="video/mp4"
            />
          </video>

        </div>
      </div>
    </div>


  )
}