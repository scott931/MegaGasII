"use client";

import Image from "next/image";

const blocks = [
  {
    metric: "10k+",
    label: "Trees planted",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
  },
  {
    metric: "35%",
    label: "Emissions reduced",
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
  {
    metric: "120+",
    label: "Communities served",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },
  {
    metric: "48MW",
    label: "Clean capacity",
    src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
  },
  {
    metric: "2.4M",
    label: "Tons CO₂ offset",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
  },
  {
    metric: "500+",
    label: "Local jobs",
    src: "https://images.unsplash.com/photo-1581092160562-40aa08ec7889?w=800&q=80",
  },
  {
    metric: "18",
    label: "Partner regions",
    src: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80",
  },
  {
    metric: "99.2%",
    label: "Uptime target",
    src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
  },
  {
    metric: "24/7",
    label: "Monitoring",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    metric: "12",
    label: "R&D pilots",
    src: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
  },
];

export function MoreImpact() {
  return (
    <section
      id="impact"
      className="border-t border-brand-forest/10 bg-softwhite py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-brand-forest sm:text-4xl">
          More Impact in Still
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-700">
          Outcomes we measure and report—environmental, social, and operational.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {blocks.map((b) => (
            <li
              key={b.label}
              className="shadow-mint-soft relative aspect-video overflow-hidden rounded-xl border border-brand-forest/10 sm:h-60 sm:aspect-auto"
            >
              <Image
                src={b.src}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {b.metric}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white">
                  {b.label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
