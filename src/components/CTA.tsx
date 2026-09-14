import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.slate.800),theme(colors.slate.900)_50%)]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Building tomorrow, <span className="font-semibold text-white">delivered today.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Ready to scale your next project? Let's discuss how our modular solutions can accelerate your timeline and reduce costs.
          </p>
          <a href="#contact" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-sm font-medium transition-colors inline-flex items-center gap-2 shadow-sm">
            Contact Our Team
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
