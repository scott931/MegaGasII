import type { Metadata } from "next";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { OverviewDeepDive } from "@/components/overview/OverviewDeepDive";
import { OverviewVisualAnchor } from "@/components/overview/OverviewVisualAnchor";
import { PillarGrid } from "@/components/overview/PillarGrid";

export const metadata: Metadata = {
  title: "Overview | Mega Gas Alternative Energy",
  description:
    "Mega Gas technology, distribution, sustainability, and community—technical overview of the clean gas ecosystem.",
};

export default function OverviewPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-[92px] sm:pt-[108px]">
        <PillarGrid />
        <OverviewDeepDive />
        <OverviewVisualAnchor />
      </main>
      <Footer />
    </>
  );
}
