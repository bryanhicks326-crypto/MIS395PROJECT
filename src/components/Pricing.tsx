import { ArrowRight, Check } from 'lucide-react';

const plans = [
  {
    name: 'Discovery',
    summary: 'For early feasibility, scope definition, and premium planning guidance.',
    features: ['Concept review', 'Initial feasibility study', 'Budget and timeline alignment'],
  },
  {
    name: 'Project Delivery',
    summary: 'A full-service modular partner from engineering through installation.',
    features: ['Custom design and fabrication', 'Factory production oversight', 'Site logistics and install coordination'],
    featured: true,
  },
  {
    name: 'Portfolio Rollout',
    summary: 'Built for repeatable multi-site expansion and multi-unit programs.',
    features: ['Standardized delivery systems', 'Program-wide coordination', 'Scalable phased installation'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#171717] py-24 text-stone-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d7b27a]">Pricing approach</p>
          <h2 className="text-4xl font-light tracking-[-0.05em] text-white md:text-5xl">
            Tailored delivery pathways for exceptional outcomes.
          </h2>
          <p className="mt-5 text-lg text-stone-300">
            Every engagement is structured around your timeline, site conditions, and standards for quality so the process remains elegant and efficient.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-sm border p-8 ${
                plan.featured
                  ? 'border-[#d7b27a] bg-[#d7b27a] text-[#171717] shadow-[0_25px_60px_rgba(215,178,122,0.25)]'
                  : 'border-white/10 bg-white/5 text-stone-100'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                {plan.featured && (
                  <span className="rounded-full bg-[#171717]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#171717]">
                    Signature
                  </span>
                )}
              </div>

              <p className={`mt-4 min-h-16 leading-relaxed ${plan.featured ? 'text-[#2b2b2b]' : 'text-stone-300'}`}>
                {plan.summary}
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? 'text-[#171717]' : 'text-[#d7b27a]'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`mt-10 inline-flex items-center gap-2 text-sm font-semibold ${plan.featured ? 'text-[#171717]' : 'text-[#f7e7cd]'}`}>
                Discuss your project
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
