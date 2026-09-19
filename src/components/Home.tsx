import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Modern modular building"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/55" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-blue-200 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Maddow Modular
          </div>

          <h1 className="text-5xl font-light tracking-[-0.04em] text-white md:text-7xl">
            Precision modular
            <span className="mt-2 block font-semibold text-white">construction for ambitious teams.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            We design and deliver high-performance modular spaces with the speed, consistency, and adaptability modern projects demand.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100">
              Explore our approach
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-sm border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/5">
              View project plans
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
          {[
            ['34%', 'Faster delivery cycle'],
            ['12+', 'Active project markets'],
            ['99.2%', 'Quality control rate'],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-3xl font-semibold text-white">{value}</div>
              <div className="mt-2 text-sm text-slate-300">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
