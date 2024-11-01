import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import staticVideo from '../app/assets/staticVideo.mp4'


export default function LoadVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 0.2 }}
      transition={{ duration: 1, delay: 1 }}
      style={{ overflow: 'hidden', width: '100vw', height: '100vh' }}
    >
      <video
        ref={videoRef}
        src={staticVideo}
        muted
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </motion.div>
  );
};

