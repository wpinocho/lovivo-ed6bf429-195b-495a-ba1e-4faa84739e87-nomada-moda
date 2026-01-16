import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      
      {/* Crosshair when hovering */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999]"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        >
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-accent" />
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-accent" />
          </div>
        </motion.div>
      )}
    </>
  );
};