import React, { ReactNode } from "react";
import { motion } from "framer-motion";



interface MarqueeProps {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
}

export default function Marquee({ children, duration = 10, reverse = false }: MarqueeProps) {
  return (
    <div className="relative w-full">
      <motion.div
        className="whitespace-nowrap inline-block"
        animate={{
          x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {children}

      </motion.div>
    </div>
  );
};

