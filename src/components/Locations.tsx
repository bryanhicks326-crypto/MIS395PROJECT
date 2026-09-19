import { MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const locations = [
  {
    city: 'Chicago',
    type: 'Headquarters & Manufacturing',
    address: '1000 W Fulton Market, Chicago, IL 60607',
    phone: '(316) 895-3463',
    image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=2070&auto=format&fit=crop'
  },
  {
    city: 'Philadelphia',
    type: 'Regional Office',
    address: '1701 John F Kennedy Blvd, Philadelphia, PA 19103',
    phone: '(316) 895-3463',
    image: '/images/philadelphia-skyline.jpg'
  }
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-light tracking-tight text-slate-900 sm:text-4xl mb-4">Our Locations</h2>
          <p className="text-lg text-slate-600">
            Operating out of our primary manufacturing facility in Chicago and our regional office in Philadelphia, we efficiently serve clients across the Midwest and East Coast.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={loc.image} alt={`${loc.city} cityscape`} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-slate-900">{loc.city}</h3>
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800">
                    {loc.type}
                  </span>
                </div>
                <div className="space-y-3 text-slate-600 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-slate-400" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 shrink-0 text-slate-400" />
                    <span>{loc.phone}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
