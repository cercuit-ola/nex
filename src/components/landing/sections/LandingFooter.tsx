import { Link } from "react-router-dom";
import nexolLogo from "@/assets/nexolpay-logo.png";

interface FooterColProps {
  title: string;
  links: string[];
}

function FooterCol({ title, links }: FooterColProps) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-cream/40 font-bold mb-4">{title}</p>
      <ul className="space-y-3">
        {links.map((label) => (
          <li key={label}>
            <a href="/dashboard" className="text-sm text-cream/80 hover:text-gold transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LandingFooter() {
  return (
    <footer className="bg-navy-deep text-cream pt-20 pb-10 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto relative">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={nexolLogo} alt="NexolPay" className="w-9 h-9 rounded-lg" />
              <span className="font-display text-2xl font-semibold">NexolPay</span>
            </div>
            <p className="text-sm text-cream/60 leading-relaxed max-w-xs">
              Providing high-fidelity crypto escrow and advanced income management tools for the
              builders of the African frontier.
            </p>
          </div>

          <FooterCol title="Platform" links={["Security Infrastructure", "Freelance Hub", "Milestones"]} />
          <FooterCol title="Resources" links={["API Documentation", "Contact Support", "Whitepaper"]} />
          <FooterCol title="Legal" links={["Privacy Policy", "Terms of Service", "Cookie Policy"]} />
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} NexolPay. All Rights Reserved.
          </p>
          <p className="text-xs text-cream/50">Built for the African Frontier</p>
        </div>

        {/* Watermark */}
        <div className="absolute -bottom-10 left-0 right-0 text-center pointer-events-none select-none">
          <span className="font-display font-semibold text-cream/[0.04] text-[180px] leading-none tracking-tight">
            NEXOL
          </span>
        </div>

        {/* Hidden admin link */}
        <div className="text-center mt-6 relative z-10">
          <Link to="/admin/giftcards" className="text-[10px] text-cream/20 hover:text-cream/40 transition-colors">
            Admin Panel →
          </Link>
        </div>
      </div>
    </footer>
  );
}
