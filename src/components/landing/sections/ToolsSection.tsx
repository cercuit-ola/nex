import { Link } from "react-router-dom";
import {
  Handshake,
  CalendarClock,
  Landmark,
  CheckCircle2,
  Edit3,
  Clock,
  Users,
  Lock,
  ArrowUpRight,
} from "lucide-react";
import type { ReactNode } from "react";

// ─── ToolCard ─────────────────────────────────────────────────────────────────

interface ToolCardProps {
  icon: ReactNode;
  iconBg?: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
  dark?: boolean;
}

function ToolCard({
  icon,
  iconBg = "bg-ink/5 text-ink",
  title,
  description,
  children,
  className = "",
  dark = false,
}: ToolCardProps) {
  return (
    <div
      className={`rounded-3xl p-8 border architect-grid-item ${
        dark ? "border-cream/10" : "border-ink/5"
      } ${className}`}
    >
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${iconBg}`}>
        {icon}
      </div>
      <h3 className={`font-display text-2xl font-semibold mb-3 ${dark ? "text-cream" : "text-ink"}`}>
        {title}
      </h3>
      <p className={`text-sm leading-relaxed max-w-md ${dark ? "text-cream/60" : "text-ink/60"}`}>
        {description}
      </p>
      {children}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function ToolsSection() {
  return (
    <section id="solutions" className="py-24 px-6 lg:px-12 bg-cream">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink leading-tight">
              Three tools. One platform.
            </h2>
            <p className="mt-4 text-ink/60 max-w-xl">
              Architected for professionals who demand certainty in an uncertain digital economy.
            </p>
          </div>
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-ink/10 hover:bg-ink hover:text-cream transition-all"
          >
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Freelancer Escrow */}
          <ToolCard
            icon={<Handshake className="w-5 h-5" />}
            title="Freelancer Escrow"
            description="Funds are locked in a smart contract before work begins. When milestones are met, payment is released automatically. No disputes, no delays."
            className="bg-white"
          >
            <div className="bg-cream rounded-2xl p-5 mt-6 border border-ink/5">
              <p className="text-[10px] uppercase tracking-wider text-ink/50 font-bold">Active Contract</p>
              <div className="flex items-center justify-between mt-3">
                <p className="text-ink font-semibold text-sm">Milestone 1: Wireframes</p>
                <p className="font-display text-xl font-semibold text-ink">$1,200</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Funded On-Chain
                </span>
                <button className="bg-ink text-cream text-xs font-semibold px-3 py-1.5 rounded-full">
                  Release Payment
                </button>
              </div>
            </div>
          </ToolCard>

          {/* Income Scheduler */}
          <ToolCard
            icon={<CalendarClock className="w-5 h-5" />}
            iconBg="bg-gold/30 text-gold-deep"
            title="Income Scheduler"
            description="Smooth out variable income. Deposit lump sums and set up automated, steady payouts to yourself over time."
            className="bg-white"
          >
            <div className="bg-navy-deep rounded-2xl p-5 mt-6 text-cream">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-cream/50 font-bold">Monthly Budget</p>
                  <p className="font-display text-2xl font-semibold mt-1">$850.00</p>
                </div>
                <button className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center">
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="mt-4 h-1 w-full bg-cream/10 rounded-full overflow-hidden">
                <div className="h-full w-[64%] bg-gold rounded-full" />
              </div>
              <div className="flex items-center justify-between mt-3 text-[11px] text-cream/60">
                <span>Next: Oct 15</span>
                <span>64% Automated</span>
              </div>
            </div>
          </ToolCard>

          {/* Income Vault - full width */}
          <ToolCard
            icon={<Landmark className="w-5 h-5" />}
            iconBg="bg-gold/20 text-gold-deep"
            title="Income Vault"
            description="Secure your long-term wealth. Multi-signature protection and time-locked vaults ensure your hard-earned capital remains untouched until you truly need it."
            className="lg:col-span-2 bg-navy-deep text-cream"
            dark
          >
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs bg-cream/10 px-3 py-1.5 rounded-full">
                  <Clock className="w-3.5 h-3.5" /> 48h Time-lock
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs bg-cream/10 px-3 py-1.5 rounded-full">
                  <Users className="w-3.5 h-3.5" /> Multi-Sig
                </span>
              </div>
              <div className="flex items-center justify-end">
                <div className="w-24 h-24 rounded-2xl border border-cream/15 flex items-center justify-center bg-cream/5">
                  <Lock className="w-8 h-8 text-gold" />
                </div>
              </div>
            </div>
          </ToolCard>
        </div>
      </div>
    </section>
  );
}
