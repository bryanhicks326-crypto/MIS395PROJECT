import { Building, Home, Factory, Timer } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Building,
    title: 'Commercial Modular',
    description: 'Scalable solutions for retail, hospitality, and office spaces with minimal on-site disruption.'
  },
  {
    icon: Home,
    title: 'Multi-Family Residential',
    description: 'High-density housing developed 40% faster than traditional construction methods.'
  },
  {
    icon: Factory,
    title: 'Custom Manufacturing',
    description: 'Precision-engineered components built in our climate-controlled Chicago facility.'
  },
  {
    icon: Timer,
    title: 'Rapid Deployment',
    description: 'Streamlined logistics, transport, and installation across the Midwest and East Coast.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-light tracking-tight text-slate-900 sm:text-4xl mb-4">Engineering the Future</h2>
            <p className="text-lg text-slate-600">
              We leverage advanced manufacturing to deliver architectural excellence without the traditional delays. From structural steel to finishing touches, quality is built in.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group border border-slate-200 p-8 rounded-sm hover:border-slate-900 transition-colors"
              >
                <div className="mb-6 inline-flex p-3 bg-slate-50 text-slate-900 rounded-sm group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
