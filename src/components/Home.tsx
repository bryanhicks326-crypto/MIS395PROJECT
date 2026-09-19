import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#121212] text-stone-100">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop"
          alt="Industrial luxury architecture"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(189,146,89,0.32),transparent_28%),linear-gradient(90deg,rgba(18,18,18,0.96),rgba(18,18,18,0.82),rgba(18,18,18,0.65))]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#caa57a]/30 bg-[#caa57a]/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-[#f1d7ae]">
            <span className="h-2 w-2 rounded-full bg-[#d7b27a]" />
            Maddow Modular
          </div>

          <h1 className="max-w-3xl text-5xl font-light tracking-[-0.06em] text-white md:text-7xl">
            Precision-built environments
            <span className="mt-2 block font-semibold text-[#f0d9b3]">for modern living and work.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-300 md:text-xl">
            We create luxury industrial modular spaces that balance architectural finesse, operational efficiency, and fast, dependable delivery.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#d7b27a] px-8 py-4 text-sm font-semibold text-[#171717] transition-all hover:bg-[#e4c998]">
              Explore our method
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-sm border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              View delivery plans
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
          {[
            ['34%', 'Faster delivery cycle'],
            ['12+', 'Priority markets served'],
            ['99.2%', 'Quality assurance rate'],
          ].map(([value, label]) => (
            <div key={label} className="border-l border-[#d7b27a]/20 pl-4 first:border-l-0 first:pl-0">
              <div className="text-3xl font-semibold text-white">{value}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] text-stone-300">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
