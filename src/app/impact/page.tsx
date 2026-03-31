import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { EconomicEnvironmentalSplit } from "@/components/impact/EconomicEnvironmentalSplit";
import { ImpactIntro } from "@/components/impact/ImpactIntro";
import { ImpactNumbersDashboard } from "@/components/impact/ImpactNumbersDashboard";
import { SocialImpactSection } from "@/components/impact/SocialImpactSection";

export const metadata: Metadata = {
  title: "Our Impact | Mega Gas Alternative Energy",
  description:
    "Social, economic, and environmental impact of Mega Gas—households, jobs, forests, and measurable outcomes.",
};

export default function ImpactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-[92px] sm:pt-[108px]">
        <ImpactIntro />
        <SocialImpactSection />
        <EconomicEnvironmentalSplit />
        <ImpactNumbersDashboard />
      </main>
      <Footer />
    </>
  );
}
