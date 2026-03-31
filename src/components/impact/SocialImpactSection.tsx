"use client";

import { Heart, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Heart,
    title: "Women’s Health",
    body: "Cleaner cooking with Mega Gas reduces indoor smoke exposure compared to charcoal and wood—supporting respiratory health for women who spend the most time in the kitchen and lowering long-term risks linked to poor air quality.",
  },
  {
    icon: GraduationCap,
    title: "Future Generations",
    body: "Reliable, fast-to-use gas frees hours previously spent collecting fuel—time families can redirect toward study, rest, and opportunity. Children gain safer homes and more predictable routines that support learning and well-being.",
  },
];

export function SocialImpactSection() {
  return (
    <section className="bg-[#F8F9FA] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#1B4332]/80"
        >
          Social — low income families
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 text-center text-2xl font-bold text-[#1B4332] sm:text-3xl"
        >
          Social impact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-center text-neutral-600"
        >
          Centered on households that need affordable, safe energy most—prioritising
          women and children in the communities we serve.
        </motion.p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {cards.map(({ icon: Icon, title, body }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-green-800/10 bg-white p-8 shadow-md shadow-green-900/5"
            >
              <div className="mb-5 inline-flex rounded-xl bg-[#1B4332]/5 p-4 text-[#1B4332]">
                <Icon className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#1B4332]">{title}</h3>
              <p className="mt-4 leading-relaxed text-neutral-600">{body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
