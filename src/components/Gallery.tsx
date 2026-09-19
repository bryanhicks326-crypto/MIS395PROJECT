import { motion } from 'motion/react';

const projects = [
  {
    id: 1,
    title: 'Tech Hub Office Park',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Philadelphia Office',
    category: 'Office',
    image: '/images/philadelphia-center-city.jpg'
  },
  {
    id: 3,
    title: 'Precision Assembly Line',
    category: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Urban Retail Pavilion',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop'
  }
];

export default function Gallery() {
  return (
    <section id="projects" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-light tracking-tight text-slate-900 sm:text-4xl mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600">Explore our portfolio of completed modular developments. Precision engineering from the factory floor to the final site.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {projects.map((project, idx) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ delay: idx * 0.15, duration: 0.6 }} className="group relative h-[400px] overflow-hidden rounded-sm bg-slate-100">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/80 mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
