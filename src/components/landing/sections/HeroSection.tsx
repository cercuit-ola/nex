import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-gold/20 text-ink/80 text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-deep" />
            Securing the African Frontier
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-ink">
            The Crypto Wallet
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">For African</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-gold/60 -z-0" />
            </span>
            <br />
            Creators.
          </h1>

          <p className="mt-8 text-lg text-ink/70 max-w-xl leading-relaxed">
            NexolPay is the crypto wallet for African creators — with income scheduling, freelance
            escrow, and yield savings built in.{" "}
            <span className="text-ink font-medium">
              Manage your money. Protect your work. Grow your earnings.
            </span>{" "}
            All in one place.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/dashboard"
              className="group inline-flex items-center gap-2 bg-ink text-cream font-semibold px-7 py-4 rounded-full hover:bg-ink/90 transition-all shadow-lg shadow-ink/10"
            >
              Start Escrow Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur border border-ink/10 text-ink font-semibold px-7 py-4 rounded-full hover:bg-white transition-all"
            >
              Explore Features
            </Link>
          </div>
        </motion.div>

        {/* Escrow card mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative max-w-md mx-auto perspective-lg">
            <div className="relative bg-gradient-to-br from-navy to-navy-deep rounded-3xl p-8 premium-shadow">
              <div className="flex items-center gap-2 mb-8">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-gold" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>

              <div className="flex items-start justify-between gap-6">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-gold-deep via-gold to-amber-700 flex items-center justify-center shadow-xl">
                  <div className="w-20 h-20 rounded-xl bg-navy-deep/40 flex items-center justify-center">
                    <Lock className="w-10 h-10 text-gold" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-cream/50 font-bold">Escrow Status</p>
                  <p className="font-display text-3xl font-semibold text-cream mt-2">$4,500 USDC</p>
                  <div className="mt-6 h-1 w-full bg-cream/10 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-gold rounded-full" />
                  </div>
                  <p className="text-[10px] text-cream/50 mt-3 uppercase tracking-wider">
                    Milestone 2 of 3 secured
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gold rounded-2xl flex items-center justify-center shadow-xl floating">
              <Lock className="w-8 h-8 text-navy-deep" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
