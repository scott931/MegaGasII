import type { Metadata } from "next";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { FloatingTestimonialsHero } from "@/components/testimony/FloatingTestimonialsHero";
import { TestimonialsShowcase } from "@/components/testimony/TestimonialsShowcase";

export const metadata: Metadata = {
  title: "Testimonials | Mega Gas Alternative Energy",
  description:
    "Trusted by households and businesses across Kenya—success stories from Mega Gas customers.",
};

export default function TestimonyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-[92px] sm:pt-[108px]">
        <FloatingTestimonialsHero />
        <TestimonialsShowcase />
      </main>
      <Footer />
    </>
  );
}
