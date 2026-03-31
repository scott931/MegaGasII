"use client";

import { motion } from "framer-motion";

const specs = [
  { label: "Pressure & safety", detail: "Tested cylinders and regulators; leak checks and staff certification at every handoff." },
  { label: "Caloric efficiency", detail: "Optimized burn profile for common household stoves—less fuel wasted as unused heat." },
  { label: "Burn time & stability", detail: "Consistent flame duration per fill, with predictable consumption for monthly budgeting." },
  { label: "Emissions profile", detail: "Lower particulate load versus solid fuels—measurably cleaner indoor air during cooking." },
];

export function OverviewDeepDive() {
  return (
    <section className="bg-[#F1F8F5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/90 bg-white/80 p-8 shadow-xl shadow-[#1B4332]/8 backdrop-blur-md sm:p-10 md:p-12"
        >
          <h2
            className="text-center text-3xl font-bold tracking-tight text-[#1B4332] sm:text-4xl md:text-[2.75rem]"
            style={{ fontFamily: "var(--font-overview-serif), Georgia, serif" }}
          >
            Overview
          </h2>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-neutral-700">
            <p>
              The Mega Gas ecosystem begins where others see waste: organic material that can be
              diverted from dumps and channels into controlled thermal processing. Our cracking
              trains are designed for steady output—gas that meets specification before it ever
              touches a cylinder—so what reaches the kitchen is predictable, not experimental.
            </p>
            <p>
              From the plant, product moves into inventory and quality checks, then onto our
              distribution fleet. Routes are planned for coverage and safety: trained drivers,
              documented handovers, and retail partners who understand how to support first-time
              gas users. The goal is simple—clean blue flame, on demand, without the smoke burden
              of charcoal or wood.
            </p>
            <p>
              Sustainability is not a slide in a deck; it is the loop we operate every day.
              Feedstock that would decay and emit methane is instead converted to useful energy;
              households that once drove deforestation for fuel can stabilize their monthly energy
              spend while breathing easier indoors.
            </p>
            <p>
              Community sits at the center: pricing structures, education, and service channels
              built for real neighborhoods—not laboratory ideals. Mega Gas is infrastructure you
              can see, measure, and trust—from sourcing through the last mile to the flame on the
              stove.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {specs.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-[#1B4332]/12 bg-[#F8F9FA]/90 px-5 py-4"
              >
                <h3 className="text-sm font-bold uppercase tracking-wide text-[#1B4332]">
                  {s.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
