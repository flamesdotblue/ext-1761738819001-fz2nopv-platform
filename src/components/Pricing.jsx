import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: '$29',
    period: 'mo',
    features: ['4 videos / month', 'AI scripts & voice', 'Auto thumbnails', 'Scheduling'],
    cta: 'Start free',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$99',
    period: 'mo',
    features: ['12 videos / month', 'Avatars + B-roll', 'A/B thumbnails', 'Analytics & A/B tests'],
    cta: 'Choose Growth',
    popular: true,
  },
  {
    name: 'Scale',
    price: '$299',
    period: 'mo',
    features: ['30 videos / month', 'Hands-off mode', 'Brand kit', 'Priority support'],
    cta: 'Talk to sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Simple, scalable pricing</h2>
        <p className="mt-2 text-neutral-400">Start free. Upgrade as you grow.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className={`relative rounded-2xl border ${t.popular ? 'border-red-500/40 bg-red-500/10 shadow-red-900/30' : 'border-white/10 bg-white/5'} p-6 shadow`}> 
            {t.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-red-400/30 bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-200">Popular</div>
            )}
            <div className="text-lg font-semibold text-white">{t.name}</div>
            <div className="mt-1 flex items-end gap-1">
              <div className="text-4xl font-bold text-white">{t.price}</div>
              <div className="pb-1 text-sm text-neutral-400">/{t.period}</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-300">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-green-400" />{f}</li>
              ))}
            </ul>
            <a id="cta" href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold ${t.popular ? 'bg-red-600 text-white hover:bg-red-500' : 'border border-white/15 text-white hover:bg-white/10'}`}>{t.cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
