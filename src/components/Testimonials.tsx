import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Maddow created a process that felt elevated from the outset. Their team combined precision, clarity, and strong field coordination from concept through install.',
    name: 'Jordan Ellis',
    role: 'Development Director',
  },
  {
    quote: 'The modular strategy helped us protect both schedule and finish quality. It was a refined, reliable solution built for high-expectation projects.',
    name: 'Morgan Reed',
    role: 'General Contractor',
  },
  {
    quote: 'They understood the balance between design integrity and operational efficiency. The result felt polished, intentional, and completely aligned with our goals.',
    name: 'Casey Thompson',
    role: 'Project Architect',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-[#e7dcc8] bg-[#f7f1e9] py-24 text-stone-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8d6d4f]">Testimonials</p>
          <h2 className="text-4xl font-light tracking-[-0.05em] text-[#171717] md:text-5xl">
            Trusted by teams who expect more.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              className="flex flex-col rounded-sm border border-[#e0d1b7] bg-white p-8 shadow-[0_18px_45px_rgba(23,23,23,0.03)]"
            >
              <Quote className="h-8 w-8 text-[#caa57a]" />
              <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-stone-700">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-[#efe2cf] pt-4">
                <div className="font-semibold text-[#171717]">{testimonial.name}</div>
                <div className="mt-1 text-sm text-stone-500">{testimonial.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
