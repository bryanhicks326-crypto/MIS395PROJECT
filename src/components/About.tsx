import { motion } from 'motion/react';

const values = [
  {
    title: 'Measured precision',
    description: 'Every module is engineered and quality-reviewed in a controlled environment to ensure refined detail and long-term performance.',
  },
  {
    title: 'Flexible by design',
    description: 'Our systems adapt elegantly across hospitality, residential, commercial, and specialty-use developments.',
  },
  {
    title: 'Built for momentum',
    description: 'From planning through installation, we help teams move with clarity, speed, and confidence.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#f5f1ea] py-24 text-stone-800">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.5fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#8c6948]">About us</p>
          <h2 className="text-4xl font-light tracking-[-0.06em] text-[#171717] md:text-5xl">
            Thoughtful construction for a more refined built environment.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-stone-700">
            Maddow Modular brings together disciplined manufacturing, architectural restraint, and high-touch project management to create spaces that are durable, intentional, and sharply efficient. Based in Chicago with a regional office in Philadelphia, we serve teams that value clarity, quality, and a more elegant form of industrial build delivery.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="rounded-sm border border-[#e1d1b3] bg-white p-5 shadow-[0_18px_45px_rgba(17,17,17,0.03)]"
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
