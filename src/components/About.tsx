import { motion } from 'motion/react';

const values = [
  {
    title: 'Refined fabrication',
    description: 'Each module is precision-built in a controlled environment to deliver exceptional finishes and long-term performance.',
  },
  {
    title: 'Adaptive systems',
    description: 'Our designs flex across hospitality, residential, commercial, and mixed-use developments without sacrificing sophistication.',
  },
  {
    title: 'Measured delivery',
    description: 'We align design, logistics, and installation to keep project momentum sharp while protecting quality and budget.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#f5f1ea] py-24 text-stone-800">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.55fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8d6d4f]">About us</p>
          <h2 className="text-4xl font-light tracking-[-0.05em] text-[#171717] md:text-5xl">
            Elevated modular design with industrial precision.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-stone-700">
            Maddow Modular merges architectural clarity, premium materials, and disciplined manufacturing to create spaces that feel intentional, durable, and distinctly premium. Based in Chicago with a regional office in Philadelphia, we build for teams that value speed without compromising character.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
                className="rounded-sm border border-[#d8c4a2] bg-white p-5 shadow-[0_18px_45px_rgba(17,17,17,0.03)]"
              >
                <h3 className="text-lg font-semibold text-[#171717]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
