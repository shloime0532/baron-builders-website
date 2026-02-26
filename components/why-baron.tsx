"use client";

import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    number: "01",
    title: "14+ Years of Experience",
    description:
      "Over a decade of building homes and communities in Lakewood and Ocean County. We know the land, the codes, the market, and the people.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Community-Scale Projects",
    description:
      "We think bigger than individual homes. Our developments like Royal Grove NJ create entire neighborhoods designed for families to thrive.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "BuildZoom Top Rated",
    description:
      "A BuildZoom score of 90 puts us in the top tier of contractors nationwide. This independent rating is based on license verification, complaint history, and project quality.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Licensed & Insured",
    description:
      "Active New Jersey Home Improvement Contractor license. Fully insured. You're protected every step of the way.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Lakewood's Own",
    description:
      "We're not an out-of-town company. We live here, we build here, and we stake our reputation on every home in this community.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function WhyBaron() {
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
    <section className="py-16 sm:py-24 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="inline-block text-green-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Why Choose Us
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Built Different. Built Better.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brown-400 leading-relaxed">
            When your home is the biggest investment you&apos;ll make, choose a builder
            with a proven track record of excellence.
          </p>
        </div>

        {/* Reasons */}
        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          {reasons.map((reason, i) => (
            <div
              key={reason.number}
              className={`group flex gap-4 sm:gap-6 rounded-2xl border border-brown-100 bg-cream/50 p-5 sm:p-6 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-green-200 ${
                visible ? `animate-fade-up animation-delay-${(i + 1) * 100}` : "opacity-0"
              }`}
            >
              {/* Number/Icon */}
              <div className="shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-500 transition-colors group-hover:bg-green-500 group-hover:text-white">
                  {reason.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-green-500/50 tracking-wider">{reason.number}</span>
                  <h3 className="text-base sm:text-lg font-bold text-brown-800">{reason.title}</h3>
                </div>
                <p className="mt-2 text-sm sm:text-base text-brown-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
