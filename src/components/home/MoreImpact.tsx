"use client";

import Image from "next/image";

const blocks = [
  {
    metric: "Hard Work",
    label: "We are driven by action and results, working tirelessly to deliver impact at scale.",
    src: "/images/local-13.jpg",
  },
  {
    metric: "Integrity",
    label: "We operate with transparency, accountability, and trust in everything we do.",
    src: "/images/local-14.jpg",
  },
  {
    metric: "Commitment",
    label: "We are dedicated to our mission, our communities, and long-term sustainability.",
    src: "/images/local-15.jpg",
  },
  {
    metric: "Resilience",
    label: "We adapt, innovate, and persist in solving complex energy and environmental challenges.",
    src: "/images/local-16.jpg",
  },
  {
    metric: "Compassion",
    label: "We design solutions with empathy, putting the needs of our communities first.",
    src: "/images/local-17.jpg",
  },
];

const moreImpactStills = [
  {
    value: "10k+",
    label: "Trees planted",
    src: "/images/local-18.jpg",
  },
  {
    value: "35%",
    label: "Emissions reduced",
    src: "/images/local-19.jpg",
  },
  {
    value: "120+",
    label: "Communities served",
    src: "/images/local-15.jpg",
  },
  {
    value: "48MW",
    label: "Clean capacity",
    src: "/images/local-16.jpg",
  },
  {
    value: "2.4M",
    label: "Tons CO₂ offset",
    src: "/images/local-01.jpg",
  },
  {
    value: "500+",
    label: "Local jobs",
    src: "/images/local-02.jpg",
  },
  {
    value: "18",
    label: "Partner regions",
    src: "/images/local-03.jpg",
  },
  {
    value: "99.2%",
    label: "Uptime target",
    src: "/images/local-14.jpg",
  },
  {
    value: "24/7",
    label: "Monitoring",
    src: "/images/local-04.jpg",
  },
  {
    value: "12",
    label: "R&D pilots",
    src: "/images/local-05.jpg",
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
          Our Values
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-700">
          The principles that shape how we serve communities every day.
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

        <div className="mt-20 border-t border-brand-forest/10 pt-20 sm:mt-24 sm:pt-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-brand-forest sm:text-4xl">
            More Impact in Still
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-700">
            Outcomes we measure and report—environmental, social, and operational.
          </p>

          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {moreImpactStills.map((card) => (
              <li
                key={card.label}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-brand-forest/10 shadow-sm sm:min-h-[200px] sm:aspect-auto"
              >
                <Image
                  src={card.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                  <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {card.value}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase leading-snug tracking-wider text-white/95 sm:text-xs">
                    {card.label}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
