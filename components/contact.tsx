"use client";

import { useEffect, useRef, useState } from "react";

const contactInfo = [
  {
    label: "Phone",
    value: "(732) 534-9049",
    href: "tel:7325349049",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "Address",
    value: "1309 Ridge Ave, Lakewood, NJ 08701",
    href: "https://maps.google.com/?q=1309+Ridge+Ave+Lakewood+NJ+08701",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: "Hours",
    value: "Mon–Thu: 8AM–6PM\nFri: 8AM–1PM\nSat–Sun: Closed",
    href: null,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
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
    <section id="contact" className="py-16 sm:py-24 bg-cream" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="inline-block text-green-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Get in Touch
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Ready to Build Your Dream?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brown-400 leading-relaxed">
            Whether you&apos;re planning a custom home, exploring our communities, or have
            a development project in mind — we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info cards */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5">
            {contactInfo.map((info, i) => (
              <div
                key={info.label}
                className={`rounded-2xl border border-brown-100 bg-white p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:border-green-200 ${
                  visible ? `animate-fade-up animation-delay-${(i + 1) * 100}` : "opacity-0"
                }`}
              >
                <div className="flex gap-4">
                  <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-500">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-brown-300 uppercase tracking-wider">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-1 block text-sm sm:text-base font-medium text-brown-700 hover:text-green-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="mt-1 text-sm sm:text-base font-medium text-brown-700 whitespace-pre-line">
                        {info.value}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Big CTA */}
            <div className={`${visible ? "animate-fade-up animation-delay-400" : "opacity-0"}`}>
              <a
                href="tel:7325349049"
                className="flex items-center justify-center gap-3 rounded-2xl bg-green-500 p-5 sm:p-6 text-white font-semibold text-base sm:text-lg shadow-lg shadow-green-500/25 transition-all hover:bg-green-600 hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call (732) 534-9049
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div className={`lg:col-span-3 ${visible ? "animate-fade-up animation-delay-300" : "opacity-0"}`}>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-brown-100 h-full min-h-[350px] sm:min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.8!2d-74.2177!3d40.0982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA1JzUzLjUiTiA3NMKwMTMnMDMuNyJX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Baron Builders LLC location — 1309 Ridge Ave, Lakewood, NJ"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
