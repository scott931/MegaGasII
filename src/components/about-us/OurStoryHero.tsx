"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const imgSrc =
  "https://images.unsplash.com/photo-1581092160562-40aa08ec7889?w=900&q=80";

export function OurStoryHero() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-14">
          <motion.div
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg shadow-neutral-900/10 lg:col-span-2"
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={imgSrc}
              alt="Mega Gas facility and early operations"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1B4332]/70">
              About Us
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#1B4332] sm:text-4xl md:text-5xl">
              Our Story
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-600">
              <p>
                It began with a simple observation: the energy crisis in Nairobi was
                costing more than just money—it was costing our environment. Families
                relied on charcoal and wood for daily cooking, driving deforestation,
                indoor smoke, and a cycle of expense that hit low-income households
                hardest.
              </p>
              <p>
                Mega Gas was founded to break that cycle—delivering affordable, cleaner
                gas through reliable distribution, safety-first operations, and
                technology that scales with the communities we serve. What started as a
                local response has grown into a mission to power homes without
                compromising the air we breathe or the land we depend on.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
