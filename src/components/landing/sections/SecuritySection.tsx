import { Link } from "react-router-dom";
import { ShieldCheck, ClipboardCheck, Globe2, History, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface SecurityFeature {
  icon: ReactNode;
  title: string;
  desc: string;
}

const SECURITY_FEATURES: SecurityFeature[] = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Non-Custodial",
    desc: "We never hold your keys. You maintain absolute control over your funds at all times.",
  },
  {
    icon: <ClipboardCheck className="w-5 h-5" />,
    title: "Fully Audited",
    desc: "Smart contracts rigorously tested and audited by top-tier security firms.",
  },
  {
    icon: <Globe2 className="w-5 h-5" />,
    title: "Protocol Level",
    desc: "Built directly on robust L2 infrastructure for minimal fees and maximum security.",
  },
  {
    icon: <History className="w-5 h-5" />,
    title: "Immutable Record",
    desc: "Every transaction and escrow agreement is permanently recorded on-chain.",
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="py-24 px-6 lg:px-12 bg-cream">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {SECURITY_FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-ink/5 rounded-2xl p-6 architect-grid-item"
            >
              <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-ink mb-4 border border-ink/5">
                {f.icon}
              </div>
              <h4 className="font-display text-lg font-semibold text-ink">{f.title}</h4>
              <p className="text-sm text-ink/60 mt-2 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Copy */}
        <div className="lg:pl-8 lg:pt-12">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-ink/50 mb-4">
            The Foundation of Trust
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink leading-tight">
            Your money is protected at the protocol level.
          </h2>
          <p className="mt-6 text-ink/60 text-lg leading-relaxed">
            Trust shouldn't rely on promises. It should be written in code. NexolPay leverages
            open-source, audited smart contracts to guarantee execution without human intervention.
          </p>
          <Link
            to="/dashboard"
            className="mt-8 inline-flex items-center gap-2 text-ink font-semibold border-b-2 border-ink pb-1 hover:gap-3 transition-all"
          >
            View Audit Reports <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
