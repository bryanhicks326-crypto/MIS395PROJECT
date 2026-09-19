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
    <nav className="sticky top-0 z-50 border-b border-[#e9dcc4] bg-[#111111]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="rounded-sm bg-[#d2ac74] p-2 shadow-[0_8px_24px_rgba(210,172,116,0.2)]">
              <Building2 className="h-5 w-5 text-[#171717]" />
            </div>
            <span className="text-lg font-semibold uppercase tracking-[0.22em] text-stone-100">Maddow</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-stone-300 transition-colors hover:text-[#f1d7af]">
                {item.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-200" aria-label="Toggle menu">
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
            className="overflow-hidden border-t border-white/10 bg-[#111111] md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-stone-300 transition-colors hover:text-[#f1d7af]"
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
