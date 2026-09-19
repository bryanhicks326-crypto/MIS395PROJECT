import { ArrowRight, Check } from 'lucide-react';

const plans = [
  {
    name: 'Discovery',
    summary: 'For early feasibility, program definition, and planning support.',
    features: ['Scope and site review', 'Budget planning guidance', 'Conceptual modular strategy'],
  },
  {
    name: 'Project Delivery',
    summary: 'A full-service package from engineering through installation.',
    features: ['Custom module design', 'Factory production oversight', 'Site logistics coordination'],
    featured: true,
  },
  {
    name: 'Portfolio Rollout',
    summary: 'Built for repeatable multi-site or multi-unit expansion programs.',
    features: ['Standardized system packages', 'Program-level support', 'Expansion planning assistance'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Pricing approach</p>
          <h2 className="text-4xl font-light tracking-[-0.04em] text-slate-900 md:text-5xl">
            Tailored solutions for every phase of delivery.
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            We structure each engagement around your timeline, site conditions, and project goals so you get the right support at the right stage.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-sm border p-8 ${
                plan.featured
                  ? 'border-slate-900 bg-slate-900 text-white shadow-xl'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                {plan.featured && <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200">Popular</span>}
              </div>

              <p className={`mt-4 min-h-16 leading-relaxed ${plan.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                {plan.summary}
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? 'text-blue-300' : 'text-slate-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`mt-10 inline-flex items-center gap-2 text-sm font-semibold ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
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
