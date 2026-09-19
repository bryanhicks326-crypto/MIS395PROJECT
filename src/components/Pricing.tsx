import { ArrowRight, Check } from 'lucide-react';

const plans = [
  {
    name: 'Planning',
    description: 'A clear path from early concept to a buildable modular plan.',
    features: ['Site and scope review', 'Preliminary design guidance', 'Budget and timeline planning'],
  },
  {
    name: 'Project Delivery',
    description: 'A coordinated modular build managed from factory to final installation.',
    features: ['Custom module engineering', 'Quality-controlled manufacturing', 'Transport and installation coordination'],
    featured: true,
  },
  {
    name: 'Portfolio Scale',
    description: 'Repeatable systems for teams planning multiple sites or larger developments.',
    features: ['Standardized module programs', 'Dedicated project support', 'Multi-site delivery planning'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Pricing approach</p>
          <h2 className="text-4xl font-light tracking-tight text-slate-900 md:text-5xl">The right plan for your project.</h2>
          <p className="mt-5 text-lg text-slate-600">Every site is different, so we build a proposal around your scope, schedule, and delivery goals.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-sm border p-8 ${plan.featured ? 'border-slate-900 bg-slate-900 text-white shadow-xl' : 'border-slate-200 bg-white'}`}>
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className={`mt-4 min-h-20 leading-relaxed ${plan.featured ? 'text-slate-300' : 'text-slate-600'}`}>{plan.description}</p>
              <ul className="mt-8 space-y-4 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? 'text-blue-300' : 'text-slate-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-10 inline-flex items-center gap-2 text-sm font-semibold ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                Discuss your project <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
