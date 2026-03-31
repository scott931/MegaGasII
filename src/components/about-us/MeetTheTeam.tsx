"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const team = [
  {
    name: "Amina Kariuki",
    role: "Chief Executive Officer",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    href: "https://linkedin.com",
  },
  {
    name: "James Omondi",
    role: "Chief Operations Officer",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    href: "https://linkedin.com",
  },
  {
    name: "Grace Wanjiru",
    role: "Head of Sustainability",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    href: "https://linkedin.com",
  },
  {
    name: "David Mutua",
    role: "Director of Engineering",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    href: "https://linkedin.com",
  },
];

export function MeetTheTeam() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-bold text-[#1B4332] sm:text-3xl"
        >
          Meet the team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-neutral-600"
        >
          The people building technology, trust, and scale—one cylinder at a time.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#1B4332]/35 transition duration-500 group-hover:bg-transparent" />
                <Link
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-[#1B4332] shadow-sm transition hover:bg-white"
                  aria-label={`${m.name} on LinkedIn`}
                >
                  <LinkedInIcon className="h-4 w-4" />
                </Link>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#1B4332] transition duration-300 group-hover:text-[#52B788] group-hover:drop-shadow-[0_0_12px_rgba(82,183,136,0.45)]">
                  {m.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  {m.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
