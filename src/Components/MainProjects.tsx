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


          <video playsInline autoPlay muted loop className="col-2 rounded-2xl" id='jmp'>
            <source
              src="
https://github.com/R-LaRoi/st-roi-studio/assets/114012059/1688da29-1d1f-48f3-beac-26f6a22d6135"
              type="video/mp4"
            />
          </video>

        </div>
      </div>
    </div>


  )
}