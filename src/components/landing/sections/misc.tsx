// RealitySection.tsx
import { Link } from "react-router-dom";
import { ShieldCheck, Wallet, ArrowRight } from "lucide-react";

export function RealitySection() {
  return (
    <section className="bg-navy-deep text-cream py-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block bg-gold/20 text-gold text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-8">
          The Reality
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight">
          "You designed the logo. You built the app. You shipped the code. And then…{" "}
          <span className="text-gold italic">silence.</span>"
        </h2>
        <p className="mt-8 text-cream/60 text-lg leading-relaxed">
          NexolPay was built specifically to ensure that never happens again. We bridge the gap
          between completed work and guaranteed payment using immutable smart contracts.
        </p>
      </div>
    </section>
  );
}

export function DashboardPreviewSection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-cream">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-center text-ink tracking-tight">
          The Nexol Dashboard.
        </h2>

        <div className="mt-16 relative">
          <div className="bg-navy-deep rounded-3xl p-6 lg:p-10 premium-shadow text-cream">
            {/* Window chrome */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-gold" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs text-cream/40 font-mono">nexolpay.io/dashboard</span>
              <Link to="/dashboard" className="text-xs text-gold hover:underline">
                Open →
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-5">
              {/* Liquidity chart */}
              <div className="lg:col-span-2 bg-cream/5 rounded-2xl p-6 border border-cream/10">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-cream/50 font-bold">
                      Available Liquidity
                    </p>
                    <p className="font-display text-4xl font-semibold mt-2">
                      $42,850.00{" "}
                      <span className="text-sm text-emerald-400 font-sans">+12.4%</span>
                    </p>
                  </div>
                  <Wallet className="w-5 h-5 text-cream/40" />
                </div>
                <div className="mt-6 grid grid-cols-7 gap-2 h-32 items-end">
                  {[40, 55, 30, 70, 45, 95, 60].map((h, i) => (
                    <div
                      key={i}
                      className={`rounded-md ${i === 5 ? "bg-gold" : "bg-cream/15"}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Income Schedule */}
              <div className="bg-cream/5 rounded-2xl p-6 border border-cream/10">
                <p className="text-[10px] uppercase tracking-wider text-cream/50 font-bold mb-4">
                  Income Schedule
                </p>
                <div className="space-y-4">
                  {["OCT 15, 2024", "OCT 30, 2024", "NOV 15, 2024"].map((d) => (
                    <div key={d} className="flex items-center justify-between text-sm">
                      <span className="text-cream/60 text-xs font-mono">{d}</span>
                      <span className="font-semibold">$1,200.00</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-cream/10">
                  <p className="text-[10px] uppercase tracking-wider text-cream/50 font-bold">
                    Vault Growth
                  </p>
                  <p className="font-display text-2xl font-semibold text-emerald-400 mt-1">
                    +8.2% APY
                  </p>
                </div>
              </div>

              {/* Bottom strip */}
              <div className="lg:col-span-2 bg-cream/5 rounded-2xl p-5 border border-cream/10 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <div>
                  <p className="text-sm font-semibold">Vault Protection</p>
                  <p className="text-xs text-cream/50">48h Time-lock Active</p>
                </div>
              </div>
              <div className="bg-cream/5 rounded-2xl p-5 border border-cream/10">
                <p className="text-xs text-cream/50">Active Escrows</p>
                <p className="font-semibold mt-1 text-sm">Mobile App v2 · Brand Strategy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="px-6 lg:px-12 py-16 bg-cream">
      <div className="max-w-[1280px] mx-auto bg-navy-deep rounded-3xl px-8 lg:px-16 py-16 text-center text-cream relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(254,209,117,0.4), transparent 50%)",
          }}
        />
        <h3 className="relative font-display text-3xl md:text-5xl font-semibold tracking-tight">
          Ready to secure your work?
        </h3>
        <p className="relative mt-4 text-cream/60 max-w-xl mx-auto">
          Open your NexolPay dashboard and start protecting every payment, every milestone.
        </p>
        <Link
          to="/dashboard"
          className="relative mt-8 inline-flex items-center gap-2 bg-gold text-navy-deep font-semibold px-8 py-4 rounded-full hover:bg-gold/90 transition-all"
        >
          Launch Dashboard <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
