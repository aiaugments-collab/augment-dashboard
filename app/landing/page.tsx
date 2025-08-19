import { HeroSection } from '@/components/landing/hero-section';
import { AppsShowcaseSection } from '@/components/landing/apps-showcase';
import { AIAgentsShowcaseSection } from '@/components/landing/ai-agents-showcase';
import { SocialProofSection } from '@/components/landing/social-proof';
import { FooterSection } from '@/components/landing/footer';

export default function LandingPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <AppsShowcaseSection />
      <AIAgentsShowcaseSection />
      <SocialProofSection />
      <FooterSection />
    </main>
  );
}