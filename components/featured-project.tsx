"use client";

import Image from "next/image";
import { useInView } from "./use-in-view";

const features = [
  {
    title: "Planned Community Design",
    description: "Thoughtfully laid-out streets, green spaces, and home placements that create a real neighborhood feel.",
  },
  {
    title: "Quality Construction",
    description: "Every home built to the same exacting standards Baron Builders is known for — no shortcuts.",
  },
  {
    title: "Modern Amenities",
    description: "Contemporary floor plans, energy-efficient systems, and finishes that today's families expect.",
  },
  {
    title: "Prime Location",
    description: "Conveniently located in Lakewood, NJ with easy access to shopping, schools, and major highways.",
  },
];

function anim(visible: boolean, delay?: number) {
  const base = visible ? "animate-fade-up" : "will-animate";
  return delay ? `${base} animation-delay-${delay}` : base;
}

export default function FeaturedProject() {
  const { ref, hasAnimated } = useInView();

  return (
    <section id="projects" className="py-16 sm:py-24 bg-brown-800 relative overflow-hidden" ref={ref}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 ${anim(hasAnimated)}`}>
          <span className="inline-block text-green-300 text-sm font-semibold tracking-widest uppercase mb-3">
            Featured Project
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Royal Grove NJ
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed">
            A premier residential community development showcasing Baron Builders&apos; vision for
            building neighborhoods, not just houses.
          </p>
        </div>

        {/* Project showcase */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className={anim(hasAnimated, 200)}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero.jpg"
                alt="Royal Grove NJ — Residential Community by Baron Builders"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-4 py-2 shadow-lg">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
                  <span className="text-sm font-semibold text-brown-800">Active Development</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-5 sm:space-y-6">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`flex gap-4 ${anim(hasAnimated, (i + 2) * 100)}`}
              >
                {/* Check icon */}
                <div className="shrink-0 mt-1">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{feature.title}</h3>
                  <p className="mt-1 text-sm sm:text-base text-white/50 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className={`pt-4 ${anim(hasAnimated, 600)}`}>
              <a
                href="tel:7325349049"
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-all hover:bg-green-600 hover:shadow-xl hover:-translate-y-0.5"
              >
                Inquire About Royal Grove
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
