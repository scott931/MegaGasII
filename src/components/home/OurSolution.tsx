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
              Community kitchens powered by renewable energy for inclusive clean cooking
            </h2>
            <p className="mt-6 leading-relaxed text-neutral-700">
              Mega Gas designs and operates community kitchens in informal
              settlements, enabling households to cook safely using clean energy
              without upfront costs.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-700">
              Our hybrid system integrates plastic-to-gas, biogas, and
              solar-powered cooking. Through our PAYGO model and Mega Gas Wallet
              (USSD-based), users can pay as little as $0.02 per hour, making
              clean cooking accessible to all.
            </p>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-brand-forest/10 shadow-mint-soft lg:col-span-3 lg:min-h-[420px]">
            <motion.div
              style={{ y: imageY }}
              className="absolute inset-x-0 top-[-8%] h-[116%] w-full"
            >
              <Image
                src="/images/fwdpitchdeckredesigning/IMG-20241115-WA0005.jpg.jpeg"
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
