"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const imgSrc =
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=85";

export function OverviewVisualAnchor() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[min(70vh,500px)] w-full min-h-[380px]">
        <Image
          src={imgSrc}
          alt="Panoramic view of green landscape and sustainable energy infrastructure"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_42%,rgba(36,97,2,0.5)_72%,rgb(36,97,2)_100%)]"
          aria-hidden
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5"
          >
            <a
              href="mailto:info@megagasalternativeenergy.co.ke?subject=Technical%20datasheet%20request"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-brand-forest shadow-lg transition hover:bg-white/95"
            >
              Download technical datasheet
            </a>
            <Link
              href="/partners"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-white bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Partner with us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
