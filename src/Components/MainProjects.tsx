import React from 'react'


export default function MainProjects() {



  return (
    <div className='project-grid'>
      <div className='h-px bg-white/20 my-8 mx-8 mt-14'>
      </div>
      <p className='text-xs p-8 mb-4 md:mb-0 uppercase'>projects</p>
      <div className='pro-inner container mx-auto px-4 w-full relative'>
        <div className='flex flex-col md:flex-row  gap-12'>
          <div className='md:w-1/2'>
            <div className='title uppercase'>
              <div>
                recent
              </div>
              <div>work
                <span>.</span>
              </div>
            </div>
          </div>

          <video playsInline autoPlay muted loop className='col-2 rounded-2xl' >
            <source
              src='https://github.com/user-attachments/assets/513eb1cb-137e-44af-a649-899a1555c0f2'
              type='video/mp4' />
          </video>
        </div>
        <div className='flex flex-col mt-[15%] md:flex-row  gap-12'>
          <video playsInline autoPlay muted loop className='col-2 rounded-2xl' >
            <source
              src='https://github.com/user-attachments/assets/aac47a8b-88ce-457c-9f7d-ce287a89dec2'
              type='video/mp4' />
          </video>

          <div className='md:w-1/2'>
            <div className='title'>
              <div>atelier</div>
              <div>718<span>.</span></div>
            </div>
            <div className='h-px bg-white/20 my-8 mx-8 mt-14'>
            </div>
            <ul className='px-8'>
              <li>Web Design</li>
              <li>Shopify eCommerce</li>
              <li>SEO</li>
              <li>Frontend Development</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col mt-[15%] md:flex-row  gap-12'>
          <div className='md:w-1/2'>
            <div className='title'>
              <div>amas</div>
              <div>haus</div>


            </div>
            <div className='h-px bg-white/20 my-8 mx-8 mt-14'>
            </div>
            <ul className='px-8'>
              <li>Web Design</li>
              <li>Shopify eCommerce</li>
              <li>SEO</li>
              <li>Frontend Development</li>
            </ul>
          </div>

          <img src='https://github.com/user-attachments/assets/067f5ae1-0a41-4650-a9f5-ff68e2c6a216' alt='GitHub user attachment' className='col-2 rounded-2xl' />


        </div>

      </div>
    </div>

  )
}
