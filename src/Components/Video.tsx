import React from 'react';

interface VideoProps {
  videoSrc: string

}

export default function Video({ videoSrc }: VideoProps) {
  return (
    <>
      <source src={videoSrc} type="video/mp4" />
    </>
  )


}
