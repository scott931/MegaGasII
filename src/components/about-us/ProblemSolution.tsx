"use client";

import { ArrowRight, CloudFog, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export function ProblemSolution() {
  return (
    <section className="bg-[#F8F9FA] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-bold text-[#1B4332] sm:text-3xl"
        >
          The conflict
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-center text-neutral-600"
        >
          From dependency to delivery—why we exist, and how we respond.
        </motion.p>

        <div className="mt-12 flex flex-col items-stretch gap-6 md:flex-row md:items-stretch">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 rounded-2xl border border-neutral-300/80 bg-neutral-100/80 p-8 shadow-sm"
          >
            <div className="mb-5 inline-flex rounded-xl bg-neutral-500/15 p-4 text-neutral-700">
              <CloudFog className="h-9 w-9" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-neutral-800">The problem</h3>
            <p className="mt-4 leading-relaxed text-neutral-600">
              Heavy reliance on charcoal fuels deforestation, degrades indoor air
              quality—especially for women and children—and locks households into
              volatile fuel costs. The environmental and health toll extends far beyond
              the kitchen.
            </p>
          </motion.article>

          <div className="flex shrink-0 items-center justify-center md:flex-col md:py-8">
            <div className="hidden h-px w-full bg-neutral-300 md:block" aria-hidden />
            <div className="flex items-center gap-2 rounded-full border border-[#1B4332]/20 bg-white px-4 py-3 text-[#1B4332] shadow-sm md:flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider">
                Transition
              </span>
              <ArrowRight className="h-6 w-6 md:rotate-90" aria-hidden />
            </div>
            <div className="hidden h-px w-full bg-neutral-300 md:block" aria-hidden />
          </div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="flex-1 rounded-2xl border-2 border-[#1B4332]/40 bg-white p-8 shadow-md shadow-[#1B4332]/10"
          >
            <div className="mb-5 inline-flex rounded-xl bg-[#1B4332]/8 p-4 text-[#1B4332]">
              <Leaf className="h-9 w-9" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#1B4332]">The solution</h3>
            <p className="mt-4 leading-relaxed text-neutral-700">
              Mega Gas invests in thermal cracking and distribution infrastructure that
              brings affordable clean gas to households—reducing smoke exposure,
              stabilizing monthly spend, and easing pressure on forests while creating
              local jobs along the value chain.
            </p>
            <p className="mt-3 text-sm font-medium text-[#52B788]">
              Clean flame. Clear path forward.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
