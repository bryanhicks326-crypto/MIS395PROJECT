import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote: 'Maddow gave our team a clearer path from concept to installation. The process felt organized at every stage.',
    name: 'Jordan Ellis',
    role: 'Development Director',
  },
  {
    quote: 'The consistency of the modular approach helped us protect both our schedule and the quality of the finished spaces.',
    name: 'Morgan Reed',
    role: 'General Contractor',
  },
  {
    quote: 'Their team understood the practical constraints of our site and delivered a solution that worked from day one.',
    name: 'Casey Thompson',
    role: 'Project Architect',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-slate-200 bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Testimonials</p>
          <h2 className="text-4xl font-light tracking-tight text-slate-900 md:text-5xl">Built on trust.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col rounded-sm border border-slate-200 bg-white p-8"
            >
              <Quote className="h-7 w-7 text-slate-300" />
              <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-slate-700">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-8 border-t border-slate-200 pt-4">
                <div className="font-semibold text-slate-900">{testimonial.name}</div>
                <div className="mt-1 text-sm text-slate-500">{testimonial.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
