import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const XRaySection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ANATOMÍA NÓMADA
          </h2>
          <p className="text-muted-foreground font-jetbrains">
            Desliza para revelar la construcción interna
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video max-w-5xl mx-auto overflow-hidden glass"
        >
          {/* Exterior Image */}
          <div className="absolute inset-0">
            <img
              src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/ed6bf429-195b-495a-ba1e-4faa84739e87/storm-v1-hero.jpg"
              alt="Exterior"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Interior Image with Clip */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
          >
            <img
              src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/ed6bf429-195b-495a-ba1e-4faa84739e87/storm-v1-interior.jpg"
              alt="Interior"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-accent cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-black rounded-full" />
            </div>
          </div>

          {/* Interactive Area */}
          <div
            className="absolute inset-0 cursor-ew-resize"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const percentage = (x / rect.width) * 100;
              setSliderPosition(Math.max(0, Math.min(100, percentage)));
            }}
            onTouchMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.touches[0].clientX - rect.left;
              const percentage = (x / rect.width) * 100;
              setSliderPosition(Math.max(0, Math.min(100, percentage)));
            }}
          />

          {/* Labels */}
          <div className="absolute top-8 left-8 font-jetbrains text-sm text-white">
            EXTERIOR
          </div>
          <div className="absolute top-8 right-8 font-jetbrains text-sm text-accent">
            INTERIOR
          </div>
        </motion.div>
      </div>
    </section>
  );
};