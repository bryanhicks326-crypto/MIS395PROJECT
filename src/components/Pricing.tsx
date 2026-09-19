import { ArrowRight, Check } from 'lucide-react';

const plans = [
  {
    name: 'Discovery',
    summary: 'For early feasibility, scope definition, and strategic project planning.',
    features: ['Program review', 'Site and feasibility analysis', 'Budget alignment strategy'],
  },
  {
    name: 'Project Delivery',
    summary: 'A complete modular solution from design development to final installation.',
    features: ['Custom engineering', 'Factory fabrication oversight', 'Install coordination and logistics'],
    featured: true,
  },
  {
    name: 'Portfolio Rollout',
    summary: 'Built for larger, phased growth and multi-location development programs.',
    features: ['Standardized systems', 'Program-wide coordination', 'Scalable deployment planning'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#171717] py-24 text-stone-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#d2ac74]">Pricing approach</p>
          <h2 className="text-4xl font-light tracking-[-0.06em] text-white md:text-5xl">
            Tailored pathways for beautifully efficient delivery.
          </h2>
          <p className="mt-5 text-lg text-stone-300">
            We align scope, schedule, and delivery strategy to create a sharper experience from concept through completion.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-sm border p-8 ${
                plan.featured
                  ? 'border-[#d2ac74] bg-[#d2ac74] text-[#171717] shadow-[0_25px_60px_rgba(210,172,116,0.22)]'
                  : 'border-white/10 bg-white/3 text-stone-100'
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

              <p className={`mt-4 min-h-16 leading-relaxed ${plan.featured ? 'text-[#262626]' : 'text-stone-300'}`}>
                {plan.summary}
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? 'text-[#171717]' : 'text-[#d2ac74]'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`mt-10 inline-flex items-center gap-2 text-sm font-semibold ${plan.featured ? 'text-[#171717]' : 'text-[#f6debb]'}`}>
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
