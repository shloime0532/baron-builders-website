"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Michael R.",
    role: "Homeowner, Royal Grove",
    text: "We moved into Royal Grove two years ago and couldn't be happier. The construction quality is outstanding — not a single issue since day one. Jose and his team truly care about the details that make a house feel like home.",
    rating: 5,
  },
  {
    name: "Sarah & David K.",
    role: "Custom Home Client",
    text: "Baron Builders built our custom home on time and on budget, which everyone told us was impossible. The communication throughout the process was excellent. They treated our project like it was their own home.",
    rating: 5,
  },
  {
    name: "Daniel F.",
    role: "Real Estate Investor",
    text: "I've worked with many builders in Ocean County, and Baron Builders stands apart. Their attention to quality, their knowledge of local codes, and their reliability make them my first call for every new development project.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-brown-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
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
    <section className="py-16 sm:py-24 bg-green-600 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-500 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-700 rounded-full translate-x-1/3 translate-y-1/3 opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="inline-block text-green-200 text-sm font-semibold tracking-widest uppercase mb-3">
            Testimonials
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            What Our Clients Say
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            Don&apos;t take our word for it — hear from the families and investors who trust Baron Builders.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={`rounded-2xl bg-white p-6 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                visible ? `animate-fade-up animation-delay-${(i + 1) * 100}` : "opacity-0"
              }`}
            >
              {/* Stars */}
              <StarRating rating={testimonial.rating} />

              {/* Quote */}
              <p className="mt-4 text-sm sm:text-base text-brown-500 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600 font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-brown-800">{testimonial.name}</div>
                  <div className="text-xs text-brown-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating badge */}
        <div className={`mt-10 sm:mt-12 text-center ${visible ? "animate-fade-up animation-delay-400" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3">
            <svg className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-white text-sm font-medium">
              Rated <strong>4.6/5</strong> on Google
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
