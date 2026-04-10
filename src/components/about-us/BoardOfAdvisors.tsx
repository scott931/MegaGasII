"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const advisors = [
  {
    name: "Dr. Helen Mbatha",
    focus: "20+ years in renewable energy policy",
    img: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?w=320&q=80",
  },
  {
    name: "Prof. Eric Thuo",
    focus: "Industrial safety & LPG standards",
    img: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=320&q=80",
  },
  {
    name: "Sarah Njeri",
    focus: "Community finance & inclusive energy access",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=320&q=80",
  },
  {
    name: "Michael Chen",
    focus: "Climate finance & carbon markets",
    img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=320&q=80",
  },
];

export function BoardOfAdvisors() {
  return (
    <section
      id="board-of-advisors"
      className="bg-[#1B4332] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Board of advisors
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Independent expertise that endorses our technical rigor and ethical standards-policy,
            safety, finance, and climate.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-8 sm:mt-12 lg:grid-cols-4">
          {advisors.map((advisor, i) => (
            <motion.article
              key={advisor.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-white/35 shadow-md shadow-black/15 sm:h-24 sm:w-24">
                <Image
                  src={advisor.img}
                  alt={advisor.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{advisor.name}</h3>
              <p className="mt-1 max-w-[220px] text-sm leading-relaxed text-white/80">
                {advisor.focus}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
