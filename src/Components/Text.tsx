import React from 'react';

import dynamic from 'next/dynamic'
const ThreeDimension = dynamic(() => import('@/Components/ThreeDimension'), {
  ssr: false,

})


export default function MainText() {


  return (
    <>
      <div className="font-bold leading-none p-3 relative" >
        <div className="flex justify-between items-end mb-[-0.45em] w-[80%] mx-auto uppercase" >
          <div>Creative</div>
          <div>Web</div>
        </ div>
        <div className="text-right mt-12 w-[90%] text-right uppercase">Studio</div>
      </div>
      <div className='mt-4'>
        <ThreeDimension />
      </div>
    </>
  );
};

