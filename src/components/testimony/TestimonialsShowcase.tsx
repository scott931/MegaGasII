"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const heroImg =
  "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=85";

type Item = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  stars: number;
  variant: "primary" | "secondary";
};

const items: Item[] = [
  {
    quote:
      "Switching to Mega Gas cut smoke in our kitchen overnight. Delivery is reliable, staff explain safety clearly, and our monthly fuel spend finally feels predictable.",
    name: "Mary Wambui",
    role: "Restaurant owner, Nairobi",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
    stars: 5,
    variant: "primary",
  },
  {
    quote:
      "As someone who cares about indoor air quality for my family, Mega Gas met a high bar. The flame is steady, cylinders feel professionally handled, and support actually answers.",
    name: "James Otieno",
    role: "Homeowner, Kiambu",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
    stars: 4,
    variant: "secondary",
  },
  {
    quote:
      "We needed a partner for clean cooking at scale—not a one-off sale. Mega Gas aligned with our community program goals and made rollout straightforward for our team.",
    name: "Grace Muthoni",
    role: "Program lead, NGO partner",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80",
    stars: 5,
    variant: "secondary",
  },
];

function StarRating({
  count,
  max = 5,
  className,
  starClass,
}: {
  count: number;
  max?: number;
  className?: string;
  starClass?: string;
}) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-label={`${count} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4 shrink-0",
            starClass,
            i < count ? "fill-current" : "fill-current opacity-35"
          )}
          strokeWidth={0}
          aria-hidden
        />
      ))}
    </div>
  );
}

export function TestimonialsShowcase() {
  return (
    <section
      id="success-stories"
      className="bg-[#F4F6F5] px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl bg-white p-5 shadow-xl shadow-neutral-900/5 sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12 lg:gap-x-14">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-3xl md:text-4xl md:leading-[1.15]">
                Hear what our satisfied clients have to say{" "}
                <span className="inline-block text-brand-forest" aria-hidden>
                  ♥
                </span>
              </h2>

              <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[16/10]">
                <Image
                  src={heroImg}
                  alt="Lush forest — environmental benefit of clean gas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute bottom-4 right-4 rounded-xl bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm">
                  <p className="text-3xl font-bold tabular-nums text-brand-forest sm:text-4xl">
                    10.9K+
                  </p>
                  <p className="text-xs font-medium uppercase tracking-wide text-neutral-600">
                    Happy customers
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-2">
              {items.map((item, index) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={cn(
                    "relative flex flex-col rounded-2xl p-6 shadow-sm",
                    item.variant === "primary"
                      ? "bg-brand-forest text-white"
                      : "border border-neutral-200/80 bg-softwhite"
                  )}
                >
                  <StarRating
                    count={item.stars}
                    starClass={
                      item.variant === "primary"
                        ? "text-white"
                        : "text-brand-forest"
                    }
                  />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed sm:text-base">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white/20">
                      <Image
                        src={item.avatar}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className={cn(
                          "truncate font-bold",
                          item.variant === "primary" ? "text-white" : "text-neutral-900"
                        )}
                      >
                        {item.name}
                      </p>
                      <p
                        className={cn(
                          "truncate text-sm",
                          item.variant === "primary" ? "text-white/85" : "text-neutral-600"
                        )}
                      >
                        {item.role}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                        item.variant === "primary"
                          ? "bg-brand-vibrant/25 text-white"
                          : "bg-neutral-200/80 text-neutral-700"
                      )}
                      aria-hidden
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-stretch justify-between gap-4 rounded-2xl bg-brand-forest px-6 py-6 sm:flex-row sm:items-center sm:px-8">
            <p className="text-center text-lg font-semibold text-white sm:text-left">
              Are you the next one?
            </p>
            <Link
              href="/#partner"
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-brand-forest transition hover:scale-[1.03] hover:bg-white/95"
            >
              Join now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
