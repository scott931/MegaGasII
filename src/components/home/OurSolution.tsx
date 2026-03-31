"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function OurSolution() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [48, -48]);

  return (
    <section
      ref={sectionRef}
      id="solution"
      className="border-t border-brand-forest/10 bg-softwhite py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-forest">
              Our Solution
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-forest sm:text-4xl">
              Integrated gas infrastructure for a lower-carbon footprint
            </h2>
            <p className="mt-6 leading-relaxed text-neutral-700">
              Mega Gas designs and operates distribution networks that prioritize leak
              prevention, smart metering, and data-driven maintenance. Our teams work
              alongside regulators and communities to keep service dependable and
              accountable.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-700">
              From industrial supply to urban residential lines, we align project
              delivery with environmental safeguards—so growth in energy demand does
              not come at the cost of air quality or water security.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-700">
              Every engagement includes clear reporting, safety training, and pathways
              to adopt cleaner blends as technology and policy evolve.
            </p>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-brand-forest/10 shadow-mint-soft lg:col-span-3 lg:min-h-[420px]">
            <motion.div
              style={{ y: imageY }}
              className="absolute inset-x-0 top-[-8%] h-[116%] w-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80"
                alt="Forest canopy and sustainable landscape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority={false}
              />
            </motion.div>
            <div
              className="pointer-events-none absolute inset-0 bg-brand-forest/10"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
