"use client";

import Image from "next/image";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Baron Builders residential community development"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brown-900/70 via-brown-900/50 to-brown-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        {/* Badge */}
        <div className="animate-fade-up mb-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-xs sm:text-sm font-medium text-white/90">
            <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Serving Lakewood &amp; Ocean County for 14+ Years
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up animation-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Building Communities,
          <br />
          <span className="text-green-300">One Home at a Time</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up animation-delay-200 mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          From custom single-family homes to entire residential communities like
          Royal Grove, Baron Builders delivers quality construction you can trust.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up animation-delay-300 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("#projects")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-all hover:bg-green-600 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5"
          >
            Explore Our Communities
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <a
            href="tel:7325349049"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/15 hover:-translate-y-0.5"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us Today
          </a>
        </div>

        {/* Stats bar */}
        <div className="animate-fade-up animation-delay-400 mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-3xl mx-auto">
          {[
            { value: "14+", label: "Years Experience" },
            { value: "4.6", label: "Google Rating" },
            { value: "90", label: "BuildZoom Score" },
            { value: "100+", label: "Homes Built" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
