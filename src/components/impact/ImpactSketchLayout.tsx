"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const socialPoints = ["Women", "Family", "Child"];

const numberCards = [
  { value: "15k+", label: "Households reached" },
  { value: "500+", label: "Community partners" },
  { value: "100+", label: "Safety trainings" },
  { value: "40%", label: "Avg. fuel cost reduction" },
];

export function ImpactSketchLayout() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-4xl font-bold text-[#1B4332] sm:text-5xl"
        >
          Impact
        </motion.h1>

        <p className="mt-4 max-w-3xl text-neutral-700">
          Mega Gas measures outcomes across people, prosperity, and planet. For our{" "}
          <Link
            href="/community-kitchen"
            className="font-semibold text-[#1B4332] underline decoration-[#1B4332]/30 underline-offset-2 hover:decoration-[#1B4332]"
          >
            Community Kitchens
          </Link>{" "}
          program, see the dedicated page.
        </p>

        <div className="mt-10 space-y-10">
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#1B4332]/20 bg-[#f9fbf9] p-6 sm:p-8"
          >
            <h2 className="text-2xl font-semibold text-[#1B4332] sm:text-3xl">Social</h2>
            <p className="mt-3 max-w-3xl text-neutral-700">
              We focus on social outcomes that improve day-to-day life in homes and
              communities.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {socialPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-xl border border-[#1B4332]/25 bg-white px-4 py-3 text-sm font-medium text-[#1B4332]"
                >
                  {point}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="rounded-2xl border border-[#1B4332]/20 p-6 sm:p-8"
          >
            <h2 className="text-2xl font-semibold text-[#1B4332] sm:text-3xl">Economic</h2>
            <p className="mt-3 max-w-3xl text-neutral-700">
              Affordable and reliable clean cooking lowers fuel spend, protects incomes, and
              supports local livelihoods.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-[#1B4332]/20 p-6 sm:p-8"
          >
            <h2 className="text-2xl font-semibold text-[#1B4332] sm:text-3xl">
              Environmental
            </h2>
            <p className="mt-3 max-w-3xl text-neutral-700">
              Shifting away from charcoal and firewood helps reduce deforestation and indoor
              air pollution.
            </p>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <h2 className="text-2xl font-bold text-[#1B4332] sm:text-3xl">Our Impact in Numbers</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {numberCards.map((card) => (
              <article
                key={card.label}
                className="rounded-2xl border-2 border-[#1B4332]/35 bg-white p-6"
              >
                <p className="text-3xl font-bold tracking-tight text-[#1B4332]">{card.value}</p>
                <p className="mt-2 text-sm text-neutral-700">{card.label}</p>
              </article>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}
