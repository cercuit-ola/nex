import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const PRICING_FEATURES = [
  "2% on Income Scheduler payouts",
  "2% on Freelance Escrow releases",
  "Free wallet, vault, and yield savings",
  "No hidden fees, ever",
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 lg:px-12 bg-cream">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-ink/50 mb-4">
          Pricing
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink leading-tight">
          Simple, transparent pricing.
        </h2>
        <p className="mt-4 text-ink/60 text-lg">
          We only charge when you use Scheduler or Freelance Escrow. Everything else is free.
        </p>
      </div>

      <div className="mt-14 max-w-md mx-auto">
        <div className="bg-white rounded-3xl p-10 border border-ink/5 premium-shadow relative">
          <span className="absolute top-5 right-5 text-[10px] uppercase tracking-widest font-bold bg-gold text-navy-deep px-3 py-1 rounded-full">
            Flat Rate
          </span>
          <p className="text-xs uppercase tracking-widest text-ink/50 font-bold">Standard</p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display text-6xl font-semibold text-ink">2%</span>
            <span className="text-ink/60 text-sm">per transaction</span>
          </div>
          <p className="mt-4 text-ink/60 text-sm leading-relaxed">
            We charge a flat 2% fee only on Income Scheduler payouts and Freelance Escrow releases.
          </p>

          <ul className="mt-8 space-y-3 text-left">
            {PRICING_FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-ink/75">
                <Check className="w-4 h-4 text-gold-deep mt-0.5 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <Link
            to="/dashboard"
            className="mt-10 block text-center bg-ink text-cream font-semibold py-3.5 rounded-full hover:bg-ink/90 transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
