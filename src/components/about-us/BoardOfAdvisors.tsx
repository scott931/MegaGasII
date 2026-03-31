"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const advisors = [
  {
    name: "Dr. Helen Mbatha",
    expertise: "20+ years in renewable energy policy",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&q=80",
  },
  {
    name: "Prof. Eric Thuo",
    expertise: "Industrial safety & LPG standards",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Sarah Njeri",
    expertise: "Community finance & inclusive energy access",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    name: "Michael Chen",
    expertise: "Climate finance & carbon markets",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
];

export function BoardOfAdvisors() {
  return (
    <section
      id="board-of-advisors"
      className="bg-[#1B4332] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-bold text-white sm:text-3xl"
        >
          Board of advisors
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-white/80"
        >
          Independent expertise that endorses our technical rigor and ethical
          standards—policy, safety, finance, and climate.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advisors.map((a, i) => (
            <motion.article
              key={a.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-2 ring-white/20">
                <Image
                  src={a.img}
                  alt={a.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{a.name}</h3>
              <p className="mt-2 text-sm leading-snug text-white/75">{a.expertise}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
