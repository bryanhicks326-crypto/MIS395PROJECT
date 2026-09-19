import { motion } from 'motion/react';

const values = [
  ['Built with precision', 'Every module is engineered and inspected in a controlled manufacturing environment.'],
  ['Designed for flexibility', 'Our systems adapt to commercial, residential, and specialized project requirements.'],
  ['Delivered with confidence', 'From planning through installation, our team keeps projects moving forward.'],
];

export default function About() {
  return (
    <section id="about" className="border-t border-slate-200 bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">About us</p>
          <h2 className="text-4xl font-light tracking-tight text-slate-900 md:text-5xl">A smarter way to build.</h2>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-slate-600">
            Maddow Modular combines thoughtful design, advanced manufacturing, and dependable field installation to make construction more predictable. Based in Chicago with an office in Philadelphia, we help teams deliver durable spaces without sacrificing quality or momentum.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map(([title, description], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="border-t border-slate-300 pt-4"
              >
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
