import { AnimatePresence, motion } from 'framer-motion';
import { SplitText } from './SplitText';

interface Props {
  text: string;
}

export default function AnimatedText({ text }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <SplitText
          initial={{ y: '100%' }}
          animate="visible"
          variants={{
            visible: (i: number) => ({
              y: 0,
              transition: {
                delay: i * 0.3
              }
            })
          }}
        >
          {text}
        </SplitText>
      </motion.div>

    </AnimatePresence>
  );
}