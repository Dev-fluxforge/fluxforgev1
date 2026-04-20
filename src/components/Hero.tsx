import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const words = [
  'interfaces that matter.',
  'products that ship.',
  'experiences that stay.',
  'Angular apps that scale.',
  'ideas that become real.'
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[linear-gradient(to_right,#00A86B_1px,transparent_1px),linear-gradient(to_bottom,#00A86B_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          <span className="section-eyebrow inline-block">FRONT-END SOFTWARE ENGINEERING</span>
          
          <h1 className="text-5xl md:text-8xl font-display font-medium leading-[1.1] mb-8">
            We build <br />
            <span className="rotating-word-container relative text-primary">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="text-pale-mint/70 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            FluxForge is a front-end engineering company crafting precision-built, 
            user-centered web applications with Angular, TypeScript, and a designer's eye for detail.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link to="/projects" className="btn-primary group flex items-center justify-center gap-2 px-8 py-4 text-lg">
              View Our Work <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </Link>
            <Link to="/contact" className="btn-secondary flex items-center justify-center gap-2 px-8 py-4 text-lg">
              Get In Touch
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-px md:bg-forest-edge/30 border-y border-forest-edge/50 py-10 md:py-0">
            <StatItem number="10+" label="Projects Shipped" />
            <StatItem number="3+" label="Years Experience" />
            <StatItem number="5K+" label="Weekly Users Reached" />
            <StatItem number="100%" label="Delivery Record" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="md:bg-void-black md:p-8 flex flex-col gap-1">
      <span className="text-4xl md:text-5xl font-display font-bold text-mint">{number}</span>
      <span className="text-xs font-medium text-sage uppercase tracking-wider">{label}</span>
    </div>
  );
}
