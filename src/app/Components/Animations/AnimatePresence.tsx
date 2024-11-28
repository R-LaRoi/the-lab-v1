import { AnimatePresence, motion } from 'framer-motion';
import { SplitText } from './SplitText';

interface Props {
  text: string;
}

export default function AnimatedText({ text }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="animate"
        exit="initial"
      >
        <SplitText>
          {text}
        </SplitText>
      </motion.div>

    </AnimatePresence>
  );
}