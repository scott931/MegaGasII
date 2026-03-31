"use client";

import { Cog, Heart, Leaf, Truck } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Technology",
    icon: Cog,
    summary:
      "Thermal cracking converts organic feedstock into clean, high-quality gas—engineered for consistent pressure and safe combustion.",
  },
  {
    title: "Distribution",
    icon: Truck,
    summary:
      "A last-mile logistics network brings cylinders and refills to neighborhoods across Nairobi—scheduled routes and trained handlers.",
  },
  {
    title: "Sustainability",
    icon: Leaf,
    summary:
      "A circular waste-to-energy loop: divert organic refuse from landfills, recover energy, and reduce pressure on forests.",
  },
  {
    title: "Community",
    icon: Heart,
    summary:
      "Affordable, reliable energy for households and small businesses—pricing and education designed for inclusive access.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function PillarGrid() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                variants={item}
                className="group flex flex-col rounded-2xl border border-[#1B4332]/35 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-[#1B4332] hover:bg-[#1B4332]"
              >
                <div className="mb-4 inline-flex rounded-xl bg-[#1B4332]/8 p-3 text-[#1B4332] transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white">
                  <Icon className="h-8 w-8" strokeWidth={1.5} aria-hidden />
                </div>
                <h2 className="text-lg font-bold text-[#1B4332] transition-colors duration-300 group-hover:text-white">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-white/95">
                  {p.summary}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
