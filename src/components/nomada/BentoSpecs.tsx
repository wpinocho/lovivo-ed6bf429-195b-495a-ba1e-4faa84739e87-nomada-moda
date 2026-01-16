import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Thermometer, Lock, Layers } from 'lucide-react';

const SpecCard = ({ 
  children, 
  className = '',
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`glass rounded-none p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const BentoSpecs = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 font-jetbrains"
        >
          /// ESPECIFICACIONES DE BATALLA
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Video Card - Spans 2 columns */}
          <SpecCard className="md:col-span-2 md:row-span-2 relative overflow-hidden h-[400px]" delay={0}>
            <img
              src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/ed6bf429-195b-495a-ba1e-4faa84739e87/nano-tech-detail.jpg"
              alt="Nano-tecnología"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <div className="text-accent font-jetbrains text-sm mb-2">/// 001</div>
              <h3 className="text-3xl font-bold text-white">NANO-TECNOLOGÍA</h3>
              <p className="text-muted-foreground mt-2">Repelencia hidrofóbica avanzada</p>
            </div>
          </SpecCard>

          {/* Thermal Regulation */}
          <SpecCard delay={0.1}>
            <Thermometer className="w-12 h-12 text-accent mb-6" />
            <div className="text-accent font-jetbrains text-sm mb-2">/// 002</div>
            <h3 className="text-xl font-bold text-white mb-3">REGULACIÓN TÉRMICA</h3>
            <p className="text-muted-foreground text-sm">
              Sistema inteligente que se adapta a la temperatura corporal
            </p>
          </SpecCard>

          {/* Magnetic Pockets */}
          <SpecCard delay={0.2}>
            <Lock className="w-12 h-12 text-accent mb-6" />
            <div className="text-accent font-jetbrains text-sm mb-2">/// 003</div>
            <h3 className="text-xl font-bold text-white mb-3">BOLSILLOS MAGNÉTICOS</h3>
            <p className="text-muted-foreground text-sm">
              Acceso rápido con cierre magnético silencioso
            </p>
          </SpecCard>

          {/* Modular Design */}
          <SpecCard className="md:col-span-1" delay={0.3}>
            <Layers className="w-12 h-12 text-accent mb-6" />
            <div className="text-accent font-jetbrains text-sm mb-2">/// 004</div>
            <h3 className="text-xl font-bold text-white mb-3">SISTEMA MODULAR</h3>
            <p className="text-muted-foreground text-sm">
              Capas removibles para máxima versatilidad
            </p>
          </SpecCard>

          {/* Sealed Seams */}
          <SpecCard className="md:col-span-2 bg-accent/10" delay={0.4}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-accent font-jetbrains text-sm mb-2">/// 005</div>
                <h3 className="text-2xl font-bold text-white mb-2">COSTURAS SELLADAS</h3>
                <p className="text-muted-foreground">
                  100% impermeabilidad garantizada | Construcción termo-sellada
                </p>
              </div>
              <div className="text-6xl font-bold text-accent/20">20K</div>
            </div>
          </SpecCard>
        </div>
      </div>
    </section>
  );
};