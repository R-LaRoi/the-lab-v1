import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

interface FloatSvgProps {
  paths: string[]
}

export default function FloatSvg({ paths }: FloatSvgProps) {
  const [pathIndex, setPathIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const colors = ['#FFFFFF', '#292929', '#F1FD03'];

  useEffect(() => {
    if (paths.length < 2) return;

    const pathInterval = setInterval(() => {
      setPathIndex((prevIndex) => (prevIndex + 1) % paths.length);
    }, 2000);

    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 4000);

    const positionInterval = setInterval(() => {
      setPosition({
        x: Math.random() * (window.innerWidth - 300),
        y: Math.random() * (window.innerHeight - 300)
      });
    }, 3000);

    return () => {
      clearInterval(pathInterval);
      clearInterval(colorInterval);
      clearInterval(positionInterval);
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
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {paths.length >= 2 && (
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
          animate={{ x: position.x, y: position.y }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <svg width="700" height="700" viewBox="0 0 300 300">
            <motion.path
              variants={variants}
              initial="initial"
              animate="animate"
              custom={{ path: paths[pathIndex], color: colors[colorIndex] }}
            />
          </svg>
        </motion.div>
      )}


    </div>
  )
}