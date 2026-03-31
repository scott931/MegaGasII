"use client";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end justify-start overflow-hidden pb-4 sm:pb-6 md:pb-8">
      <div className="absolute inset-0 bg-brand-forest">
        <video
          className="h-full w-full object-cover opacity-90"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-left sm:px-6 lg:px-8">
        <div className="max-w-2xl py-4 sm:py-5 md:py-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-white">
            Mega Gas
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl">
            Clean Energy. Sustainable Future.
          </h1>
          <p className="mt-5 max-w-xl text-base text-white drop-shadow sm:text-lg">
            Powering communities across the continent with responsible gas solutions
            and a vision rooted in stewardship and innovation.
          </p>
          <a
            id="hero-cta"
            href="#vision"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-forest shadow-lg transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
