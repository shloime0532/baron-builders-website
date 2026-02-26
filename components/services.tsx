"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Community Development",
    description:
      "We plan and build entire residential communities from the ground up. Thoughtful layouts, quality infrastructure, and homes designed to foster neighborhood connection.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Custom Home Construction",
    description:
      "Your dream home, built to your specifications. We work with you from blueprint to final walkthrough, ensuring every detail meets your vision and our exacting standards.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Multi-Family Residential",
    description:
      "From duplexes to townhome communities, we build multi-family housing that maximizes value without compromising on quality or livability.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
  {
    title: "Land Development",
    description:
      "We identify, acquire, and develop raw land into buildable lots and thriving neighborhoods. Full-service from site prep to infrastructure to completed homes.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    title: "Residential Renovations",
    description:
      "Breathe new life into existing homes. Whether it's a kitchen overhaul, a full gut renovation, or an addition, we transform spaces with the same quality we bring to new builds.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 5.383a1.5 1.5 0 01-2.122-2.121l5.384-5.384m2.122 2.122L15.17 11.42a4.5 4.5 0 10-6.364-6.364L5.046 8.818a4.5 4.5 0 006.364 6.364z" />
      </svg>
    ),
  },
  {
    title: "Development Consulting",
    description:
      "Leveraging 14+ years of experience to advise on feasibility, zoning, project planning, and construction management. Smart decisions before breaking ground.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
];

export default function Services() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-16 sm:py-24 bg-cream" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="inline-block text-green-500 text-sm font-semibold tracking-widest uppercase mb-3">
            What We Do
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Full-Service Home Building &amp; Development
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brown-400 leading-relaxed">
            From raw land to thriving communities, we handle every phase of residential
            development with care and craftsmanship.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative rounded-2xl border border-brown-100 bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-brown-200/50 hover:-translate-y-1 hover:border-green-200 ${
                visible ? `animate-fade-up animation-delay-${(i + 1) * 100}` : "opacity-0"
              }`}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center rounded-xl bg-green-50 p-3 text-green-500 transition-colors group-hover:bg-green-500 group-hover:text-white">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="mt-5 text-lg sm:text-xl font-bold text-brown-800">
                {service.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-brown-400 leading-relaxed">
                {service.description}
              </p>

              {/* Hover arrow */}
              <div className="mt-4 flex items-center gap-2 text-green-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
