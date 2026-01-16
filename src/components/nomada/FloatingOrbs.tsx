import { motion } from 'framer-motion';

export const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large Amber Orb - Top Left */}
      <motion.div
        className="absolute top-1/4 -left-32 w-[40rem] h-[40rem] rounded-full opacity-25 blur-[140px]"
        style={{ background: 'radial-gradient(circle, #d97706 0%, #ea580c 30%, transparent 70%)' }}
        animate={{
          x: [0, 150, 0],
          y: [0, -120, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Large Storm Gray Orb - Bottom Right */}
      <motion.div
        className="absolute bottom-1/4 -right-32 w-[38rem] h-[38rem] rounded-full opacity-20 blur-[130px]"
        style={{ background: 'radial-gradient(circle, #4b5563 0%, #6b7280 30%, transparent 70%)' }}
        animate={{
          x: [0, -120, 0],
          y: [0, 130, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Center Accent Orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full opacity-15 blur-[110px]"
        style={{ background: 'radial-gradient(circle, #d97706 0%, #f59e0b 40%, transparent 70%)' }}
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Top Right Amber Accent */}
      <motion.div
        className="absolute top-10 right-1/4 w-96 h-96 rounded-full opacity-18 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #ea580c 0%, #d97706 50%, transparent 70%)' }}
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Bottom Left Gray Accent */}
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-[28rem] h-[28rem] rounded-full opacity-12 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #6b7280 0%, #4b5563 40%, transparent 70%)' }}
        animate={{
          x: [0, -70, 0],
          y: [0, 90, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};