import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface SplitTextProps extends MotionProps {
  children: string;
}

export function SplitText({ children, ...rest }: SplitTextProps) {
  const lines = children.split('\n');

  return (
    <>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} style={{ overflow: 'hidden' }}>
          <motion.div
            initial={{ y: '100%' }}
            animate="visible"
            variants={{
              visible: {
                y: 0,
                transition: {
                  delay: lineIndex * 1,
                  duration: 1,
                  ease: 'easeOut'
                }
              }
            }}
            {...rest}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </>
  )
}
