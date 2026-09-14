import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern modular building architecture" 
            className="w-full h-full object-cover opacity-30" 
         />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5 text-sm font-medium text-slate-300 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-blue-500"></span>
          Faster. Smarter. Modular.
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6"
        >
          Precision modular<br />
          <span className="font-semibold">built for scale.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10"
        >
          Headquartered in Chicago with operations in Philadelphia. Maddow engineers state-of-the-art modular structures that redefine speed and quality.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#services" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-sm font-medium transition-colors inline-flex items-center gap-2 shadow-sm">
            Explore Capabilities
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
