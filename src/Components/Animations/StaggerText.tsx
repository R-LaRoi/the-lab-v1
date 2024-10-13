"use client";
import React from "react";
import { motion } from "framer-motion";


interface StaggerTextProps {
  text: string;
}


export default function StaggerText({ text }: StaggerTextProps) {

  const AnimationProps = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 40 },
  };
  return (
    <div>

      <span className="sr-only">{text}</span>

      <motion.span
        arial-hidden="true"
        className=""
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.1 }}
      >

        {text.split(" ").map((word, index) => (
          <React.Fragment key={index}>

            {word.split("").map((letter, index) => (
              <motion.span
                className="inline-block"
                key={index}
                variants={AnimationProps}
              >
                {letter}
              </motion.span>
            ))}

            <motion.span
              className="inline-block"
              key={index}
              variants={AnimationProps}
            >
              &nbsp;
            </motion.span>
          </React.Fragment>
        ))}
      </motion.span>
    </div>
  );
};
