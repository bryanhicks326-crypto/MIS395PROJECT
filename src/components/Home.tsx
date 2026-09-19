import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-900 py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.slate.800),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Maddow Modular</p>
          <h1 className="text-5xl font-light tracking-tight md:text-7xl">
            Precision modular construction <span className="font-semibold">built for scale.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            We design and deliver high-quality modular spaces with the speed, consistency, and flexibility modern projects demand.
          </p>
          <a href="#about" className="mt-10 inline-flex items-center gap-2 rounded-sm bg-white px-8 py-4 font-medium text-slate-900 transition-colors hover:bg-slate-100">
            Learn About Maddow
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
