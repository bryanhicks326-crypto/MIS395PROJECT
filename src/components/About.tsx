import { motion } from 'motion/react';

const values = [
  {
    title: 'Built with precision',
    description: 'Each module is engineered and quality-reviewed in a controlled manufacturing environment before it ever reaches the site.',
  },
  {
    title: 'Designed for flexibility',
    description: 'Our systems adapt across commercial, residential, and specialty-use developments without sacrificing performance or aesthetics.',
  },
  {
    title: 'Delivered with confidence',
    description: 'From early planning through field installation, our team helps keep schedules, budgets, and expectations in sync.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.5fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">About us</p>
          <h2 className="text-4xl font-light tracking-[-0.04em] text-slate-900 md:text-5xl">
            Smarter building. Stronger outcomes.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-slate-600">
            Maddow Modular brings together thoughtful design, advanced manufacturing, and disciplined project coordination to make construction more predictable and more scalable. Based in Chicago with an office in Philadelphia, we help owners, developers, and builders reduce site disruption while accelerating timelines.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
                className="rounded-sm border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
