import AiAugmentsHeader from "@/components/landing/aiaugments-header";
import AiAugmentsHero from "@/components/landing/aiaugments-hero";
import AiAugmentsApps from "@/components/landing/aiaugments-apps";

export default function Home() {
  return (
    <div className="min-h-screen">
      <AiAugmentsHeader />
      <AiAugmentsHero />
      <AiAugmentsApps />
    </div>
  );
}
