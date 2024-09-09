import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

type FadeInProps = {
  children: React.ReactNode;
};

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
export default FadeIn;
