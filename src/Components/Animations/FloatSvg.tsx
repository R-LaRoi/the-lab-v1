import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
// import { interpolate } from 'flubber';


interface FloatSvgProps {
  paths: string[]
}

export default function FloatSvg({ paths }: FloatSvgProps) {



  const [pathIndex, setPathIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ['#FFFFFF', '#292929', '#F1FD03'];

  useEffect(() => {
    if (paths.length < 2) return;

    const pathInterval = setInterval(() => {
      setPathIndex((prevIndex) => (prevIndex + 1) % paths.length);
    }, 2000);

    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 4000);

    return () => {
      clearInterval(pathInterval);
      clearInterval(colorInterval);
    };
  }, [paths]);

  const variants = {
    initial: { d: paths[0], fill: colors[0] },
    animate: (custom: { path: string, color: string }) => ({
      d: custom.path,
      fill: custom.color,
      transition: { duration: 1, ease: "easeInOut" }
    })
  };



  return (
    <>
      {paths.length >= 2 && (
        <svg width="500" height="500" viewBox="0 0 300 300">
          <motion.path
            variants={variants}
            initial="initial"
            animate="animate"
            custom={{ path: paths[pathIndex], color: colors[colorIndex] }}
          />
        </svg>
      )}

    </>
  )
}