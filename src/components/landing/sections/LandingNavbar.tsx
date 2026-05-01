import { Link } from "react-router-dom";
import nexolLogo from "@/assets/nexolpay-logo.png";
import type { NavItem } from "@/types";

const NAV_LINKS: NavItem[] = [
  { label: "Escrow", href: "#solutions" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
];

export function LandingNavbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-cream/70 border-b border-ink/5">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={nexolLogo} alt="NexolPay" className="w-9 h-9 rounded-lg" />
          <span className="font-display text-2xl font-semibold text-ink tracking-tight">NexolPay</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-ink/70 hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/dashboard"
            className="hidden sm:inline-block text-sm text-ink/80 hover:text-ink transition-colors"
          >
            Login
          </Link>
          <Link
            to="/dashboard"
            className="bg-ink text-cream text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-ink/90 transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
