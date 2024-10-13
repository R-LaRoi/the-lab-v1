
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  // width?: 'fit-content' | "100%"
};

export default function Reveal({ children, width = 'fit-content' }: Props) {

  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation()
  const slider = useAnimation();

  useEffect(() => {
    if (isInView)
      mainControls.start('visible')
    slider.start('visible')

  }, [isInView])

  return (


    <div ref={ref} style={{}}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.9, delay: .5 }}
        whileInView={{ opacity: 1, x: 0 }}

      >
        {children}
      </motion.div>




    </div>
  );
}