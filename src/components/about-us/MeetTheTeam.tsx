"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type TeamMember = {
  name: string;
  role: string;
  img?: string;
};

const leadership: TeamMember[] = [
  {
    name: "Peter Njeri",
    role: "Co-founder & CEO",
    img: "/images/local-02.jpg",
  },
  {
    name: "Margaret Maina",
    role: "Co-founder & Head of Business Development",
    img: "/images/local-03.jpg",
  },
];

const otherTeamMembers: TeamMember[] = [
  { name: "Teresia Njoki", role: "Plant Engineer" },
  { name: "Eric Ochieng", role: "Head of Waste Collection" },
  { name: "Erastus Makena", role: "Head of Operations" },
  { name: "Mercy Irungu", role: "Plant Engineer" },
  { name: "Eunice Wangeci", role: "Head of Community Kitchens" },
  { name: "Janet Mbusu", role: "Accountant" },
  { name: "Godfrey Owino", role: "PAYGO Engineer" },
  { name: "Zack Mwangi", role: "Logistics Lead (Motorbikes)" },
  { name: "Michael Njoroge", role: "Logistics Lead" },
  { name: "Anastacia Muthoni", role: "Community Champions Lead" },
  { name: "Fred Maina", role: "Head of Marketing" },
  { name: "Sherine Njeri", role: "Partnerships and Engagement" },
];

const teamMembers = [...leadership, ...otherTeamMembers];

export function MeetTheTeam() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-[#1B4332] sm:text-4xl"
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
          The people building technology, trust, and scale-one cylinder at a time.
        </motion.p>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                {m.img ? (
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1B4332]/85 via-[#2D6A4F]/80 to-[#52B788]/70">
                    <span className="text-4xl font-extrabold tracking-wide text-white/95">
                      {m.name
                        .split(" ")
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join("")}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-[#1B4332]/35 transition duration-500 group-hover:bg-transparent" />
                <div className="absolute right-3 top-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-[#1B4332]">
                    <span className="-mt-px text-[10px] font-extrabold tracking-tight">in</span>
                  </span>
                </div>
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
