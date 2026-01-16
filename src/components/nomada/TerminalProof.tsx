import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const testimonials = [
  {
    user: 'Usuario_01',
    message: 'La calidad es irreal. Vale cada centavo.',
    verified: true,
  },
  {
    user: 'Usuario_02',
    message: 'El fit es perfecto. Mi nueva pieza favorita.',
    verified: true,
  },
  {
    user: 'Usuario_03',
    message: 'Resistió una tormenta completa sin una gota dentro.',
    verified: true,
  },
  {
    user: 'Usuario_04',
    message: 'El diseño es brutalmente minimalista. Perfecto.',
    verified: true,
  },
];

export const TerminalProof = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-jetbrains text-sm mb-2">/// TRANSMISIÓN DE USUARIOS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            FEEDBACK EN TIEMPO REAL
          </h2>
        </motion.div>

        <div className="glass p-8 font-jetbrains">
          <div className="flex items-center gap-2 text-accent text-sm mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span>LIVE FEED</span>
          </div>

          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-accent/30 pl-4 py-2 hover:border-accent transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-accent">&gt;</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white">{testimonial.user}:</span>
                      {testimonial.verified && (
                        <span className="flex items-center gap-1 text-accent text-xs">
                          [<Check className="w-3 h-3" />VERIFICADO]
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      '{testimonial.message}'
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>4,892 reviews totales</span>
              <span className="text-accent">4.9★ promedio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};