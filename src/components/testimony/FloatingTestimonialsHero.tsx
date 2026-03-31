"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const portraits = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&q=80",
];

function TiltPortrait({
  src,
  className,
  delay,
}: {
  src: string;
  className?: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 24 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 24 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rotateY.set(px * 16);
    rotateX.set(-py * 16);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const transform = useMotionTemplate`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] as const }}
      className={cn("relative aspect-[3/4] w-full", className)}
    >
      <motion.div
        ref={ref}
        className="relative h-full w-full overflow-hidden rounded-2xl shadow-lg shadow-neutral-900/10 ring-1 ring-black/5 md:rounded-3xl"
        style={{ transform, transformStyle: "preserve-3d" }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 33vw, 140px"
        />
      </motion.div>
    </motion.div>
  );
}

export function FloatingTestimonialsHero() {
  const left = portraits.slice(0, 6);
  const right = portraits.slice(6, 12);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Mobile: story first */}
      <div className="relative mx-auto max-w-lg text-center lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/95 px-4 py-8 shadow-sm backdrop-blur-sm"
        >
          <p className="inline-flex rounded-full bg-softwhite px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-600 ring-1 ring-brand-forest/10">
            Testimonials
          </p>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-neutral-900">
            Trusted by leaders
            <span className="mt-1 block font-bold text-neutral-500">
              across Kenya &amp; beyond
            </span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-neutral-700">
            See why households and businesses trust Mega Gas for cleaner cooking and
            predictable costs.
          </p>
          <Link
            href="#success-stories"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-forest px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-forest-dark"
          >
            Read success stories
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-3 gap-2 sm:gap-3 md:mt-0 lg:mt-0 lg:grid-cols-[1fr_minmax(280px,420px)_1fr] lg:items-center lg:gap-4">
        <div className="contents lg:flex lg:flex-col lg:gap-4">
          <div className="col-span-3 grid grid-cols-3 gap-2 sm:gap-3 lg:col-span-1 lg:grid-cols-3 lg:gap-3">
            {left.map((src, i) => (
              <TiltPortrait
                key={src}
                src={src}
                delay={i * 0.05}
                className={cn(i % 3 === 1 ? "-translate-y-2 sm:-translate-y-3" : i % 3 === 0 ? "translate-y-1" : "")}
              />
            ))}
          </div>
        </div>

        <div className="col-span-3 hidden text-center lg:col-span-1 lg:block">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/95 px-6 py-10 shadow-sm backdrop-blur-sm"
          >
            <p className="inline-flex rounded-full bg-softwhite px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-600 ring-1 ring-brand-forest/10">
              Testimonials
            </p>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-neutral-900 xl:text-4xl">
              Trusted by leaders
              <span className="mt-2 block font-bold text-neutral-500">
                across Kenya &amp; beyond
              </span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-neutral-700">
              See why households and businesses trust Mega Gas for cleaner cooking,
              predictable costs, and a partner that shows up.
            </p>
            <Link
              href="#success-stories"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-forest px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-forest-dark"
            >
              Read success stories
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </div>

        <div className="contents lg:flex lg:flex-col lg:gap-4">
          <div className="col-span-3 grid grid-cols-3 gap-2 sm:gap-3 lg:col-span-1 lg:grid-cols-3 lg:gap-3">
            {right.map((src, i) => (
              <TiltPortrait
                key={src}
                src={src}
                delay={0.15 + i * 0.05}
                className={cn(i % 3 === 1 ? "translate-y-2 sm:translate-y-3" : i % 3 === 2 ? "-translate-y-1" : "")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
