import Image from "next/image";

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brown-800 text-white safe-bottom">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo-white.png"
                alt="Baron Builders LLC"
                width={40}
                height={40}
                className="h-9 w-9 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span
                  className="text-base font-bold tracking-tight text-white"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Baron Builders
                </span>
                <span className="text-[10px] tracking-widest uppercase text-green-300">
                  LLC
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              Building quality homes and thriving communities in Lakewood &amp; Ocean County
              for over 14 years.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-green-300 transition-colors min-h-0"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Community Development",
                "Custom Homes",
                "Multi-Family",
                "Land Development",
                "Renovations",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/50">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:7325349049"
                  className="text-sm text-white/50 hover:text-green-300 transition-colors flex items-center gap-2 min-h-0"
                >
                  <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (732) 534-9049
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=1309+Ridge+Ave+Lakewood+NJ+08701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-green-300 transition-colors flex items-start gap-2 min-h-0"
                >
                  <svg className="h-4 w-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  1309 Ridge Ave<br />
                  Lakewood, NJ 08701
                </a>
              </li>
              <li className="text-sm text-white/50 flex items-start gap-2">
                <svg className="h-4 w-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  Mon–Thu: 8AM–6PM<br />
                  Fri: 8AM–1PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Baron Builders LLC. All rights reserved. NJ Licensed Home Improvement Contractor.
          </p>
          <p className="text-xs text-white/20">
            1309 Ridge Ave, Lakewood, NJ 08701
          </p>
        </div>
      </div>
    </footer>
  );
}
