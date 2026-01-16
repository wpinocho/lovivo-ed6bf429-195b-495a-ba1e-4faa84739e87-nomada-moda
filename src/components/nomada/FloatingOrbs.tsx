import { motion } from 'framer-motion';

export const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Amber Orb */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #d97706 0%, transparent 70%)' }}
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Storm Gray Orb */}
      <motion.div
        className="absolute bottom-1/4 -right-32 w-[32rem] h-[32rem] rounded-full opacity-15 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #4b5563 0%, transparent 70%)' }}
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Small Accent Orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-10 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #d97706 0%, transparent 70%)' }}
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};