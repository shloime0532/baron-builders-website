"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About() {
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
    <section id="about" className="py-16 sm:py-24 bg-cream" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className={`order-2 lg:order-1 ${visible ? "animate-fade-up" : "opacity-0"}`}>
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/team.jpg"
                  alt="Jose Baron, President of Baron Builders LLC"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 sm:p-5 border border-brown-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-brown-400 font-medium">NJ Licensed</div>
                    <div className="text-sm font-bold text-brown-800">HIC Contractor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={`order-1 lg:order-2 ${visible ? "animate-fade-up animation-delay-200" : "opacity-0"}`}>
            <span className="inline-block text-green-500 text-sm font-semibold tracking-widest uppercase mb-3">
              About Baron Builders
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              From Single Homes to Entire Communities
            </h2>
            <div className="mt-6 space-y-4 text-brown-400 leading-relaxed text-sm sm:text-base">
              <p>
                Founded by <strong className="text-brown-700">Jose Baron</strong>, Baron Builders LLC
                has spent over 14 years transforming the landscape of Lakewood and Ocean County, New Jersey.
                What started as a passion for quality home construction has grown into one of the area&apos;s
                most trusted names in residential development.
              </p>
              <p>
                We don&apos;t just build houses — we build the communities people call home. Our flagship project,
                Royal Grove NJ, exemplifies our approach: thoughtful planning, quality construction, and a
                genuine commitment to creating spaces where families thrive.
              </p>
              <p>
                With a BuildZoom score of 90 (top-rated), a 4.6 Google rating, and an active NJ Home
                Improvement Contractor license, our track record speaks for itself. Every home we build
                carries our promise of craftsmanship and integrity.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full bg-brown-50 border border-brown-100 px-4 py-2">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-brown-700">NJ Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-brown-50 border border-brown-100 px-4 py-2">
                <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-brown-700">4.6 Google Rating</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-brown-50 border border-brown-100 px-4 py-2">
                <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-brown-700">BuildZoom Score: 90</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
