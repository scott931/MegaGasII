"use client";

import { motion } from "framer-motion";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { CostBarChart } from "./CostBarChart";

export function EconomicEnvironmentalSplit() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-bold text-[#1B4332] sm:text-3xl"
        >
          Economic &amp; environmental
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-neutral-600"
        >
          Household savings and local employment on one side; land and forests on the
          other—two lenses on the same transition to cleaner gas.
        </motion.p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#1B4332]/80">
              Economic
            </p>
            <h3 className="mt-2 text-xl font-bold text-[#1B4332] sm:text-2xl">
              Up to 40% household savings
            </h3>
            <p className="mt-4 leading-relaxed text-neutral-600">
              Families switching from charcoal often see meaningful reductions in monthly
              fuel spend—money that can go toward food, school fees, and savings.
            </p>
            <h4 className="mt-8 text-lg font-bold text-[#1B4332]">Local job creation</h4>
            <p className="mt-2 leading-relaxed text-neutral-600">
              Distribution, safety training, and cylinder services create jobs in the
              communities we serve—linking environmental gains to local livelihoods.
            </p>
            <CostBarChart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#1B4332]/80">
              Environmental
            </p>
            <h3 className="mt-2 text-xl font-bold text-[#1B4332] sm:text-2xl">
              Forest preservation
            </h3>
            <p className="mt-4 leading-relaxed text-neutral-600">
              Lower demand for wood fuel eases pressure on nearby forests. Use the slider
              to compare landscape stress with a pathway toward protection and regrowth.
            </p>
            <div className="mt-8">
              <BeforeAfterSlider />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
