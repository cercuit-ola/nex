import { LandingNavbar } from "./sections/LandingNavbar";
import { HeroSection } from "./sections/HeroSection";
import { RealitySection, DashboardPreviewSection, CtaSection } from "./sections/misc";
import { ToolsSection } from "./sections/ToolsSection";
import { SecuritySection } from "./sections/SecuritySection";
import { PricingSection } from "./sections/PricingSection";
import { LandingFooter } from "./sections/LandingFooter";

/**
 * LandingPage composes all marketing sections in order.
 * Each section is its own file — edit them independently without
 * touching this file.
 */
const LandingPage = () => (
  <div className="min-h-screen bg-mesh font-body text-ink">
    <LandingNavbar />
    <HeroSection />
    <RealitySection />
    <ToolsSection />
    <DashboardPreviewSection />
    <SecuritySection />
    <PricingSection />
    <CtaSection />
    <LandingFooter />
  </div>
);

export default LandingPage;
