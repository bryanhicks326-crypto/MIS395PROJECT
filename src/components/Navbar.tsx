import { Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Services', href: '#services' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="rounded-sm bg-slate-900 p-2">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold uppercase tracking-[0.18em] text-slate-900">Maddow</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
                {item.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600" aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-100 bg-white md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
