import { motion } from 'framer-motion';
import { DigitalRain } from './DigitalRain';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <DigitalRain />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating Jacket */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12 animate-breathe"
        >
          <img
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/ed6bf429-195b-495a-ba1e-4faa84739e87/storm-v1-hero.jpg"
            alt="STORM-V1"
            className="w-full max-w-2xl mx-auto"
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 animate-glitch"
        >
          DOMINA LA<br />TORMENTA.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground font-jetbrains mb-8 max-w-2xl mx-auto"
        >
          Ingeniería textil para el caos urbano.<br />
          Impermeabilidad 20k. Garantía de por vida.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={() => navigate('/productos/storm-v1')}
          className="group relative px-12 py-5 bg-white text-black font-jetbrains font-semibold text-lg overflow-hidden transition-all hover:bg-black hover:text-white border-2 border-white"
        >
          <span className="relative z-10">ADQUIRIR STORM-V1</span>
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Specs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm font-jetbrains text-muted-foreground"
        >
          <div>IMPERMEABILIDAD 20K</div>
          <div className="text-accent">///</div>
          <div>MODULER SYSTEM</div>
          <div className="text-accent">///</div>
          <div>GARANTÍA VITALICIA</div>
        </motion.div>
      </div>
    </section>
  );
};