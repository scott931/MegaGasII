"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/images/logo1.png";

const nav = [
  { label: "Impact", href: "#impact" },
  { label: "Community Kitchen", href: "#community-kitchen" },
  { label: "About Us", href: "#about-us" },
  { label: "Overview", href: "#overview" },
  { label: "Testimony", href: "#testimony" },
  { label: "Partner", href: "#partner" },
  { label: "Contact Us", href: "#contact-us" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkClass = (isMobile: boolean) =>
    cn(
      "rounded-lg font-medium transition",
      isMobile
        ? "block w-full py-3 text-base"
        : "px-2 py-2 text-sm hover:opacity-80",
      scrolled
        ? "text-brand-forest hover:bg-brand-forest/5"
        : "text-white hover:bg-white/10"
    );

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-brand-forest/10 bg-softwhite/95 shadow-sm shadow-brand-forest/5 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between gap-3 sm:h-20">
          <a
            href="#"
            className="flex shrink-0 items-center rounded-lg transition-opacity hover:opacity-90"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src={logo}
              alt="Mega Gas — Clean and affordable cooking gas"
              className="h-10 w-10 object-contain sm:h-11 sm:w-11"
              priority
              sizes="48px"
            />
          </a>

          <nav
            className={cn(
              "hidden items-center gap-1 md:flex lg:gap-2",
              scrolled ? "text-brand-forest" : "text-white"
            )}
            aria-label="Primary"
          >
            {nav.map((item) => (
              <a key={item.label} href={item.href} className={linkClass(false)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#hero-cta"
              className={cn(
                "hidden rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition md:inline-flex md:items-center",
                scrolled
                  ? "bg-brand-forest text-white hover:bg-brand-forest/90"
                  : "bg-white text-brand-forest hover:bg-white/90"
              )}
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
            <button
              type="button"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-lg transition md:hidden",
                scrolled
                  ? "text-brand-forest hover:bg-brand-forest/10"
                  : "text-white hover:bg-white/10"
              )}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Menu className="h-6 w-6" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t md:hidden",
          mobileOpen ? "block" : "hidden",
          scrolled
            ? "border-brand-forest/10 bg-softwhite"
            : "border-white/15 bg-brand-forest/95 backdrop-blur-md"
        )}
      >
        <nav
          className="mx-auto max-h-[min(70vh,calc(100dvh-5rem))] max-w-7xl overflow-y-auto px-4 pb-6 pt-2 sm:px-6"
          aria-label="Mobile primary"
        >
          <ul
            className={cn(
              "flex flex-col divide-y",
              scrolled ? "divide-brand-forest/15" : "divide-white/15"
            )}
          >
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={linkClass(true)}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
