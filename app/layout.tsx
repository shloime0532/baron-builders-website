import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baron-builders.vercel.app"),
  title: "Baron Builders LLC | Home Builder & Community Developer in Lakewood, NJ",
  description:
    "Baron Builders LLC — 14+ years building quality homes and residential communities in Lakewood & Ocean County, NJ. New construction, community development, and custom homes. BuildZoom Top Rated.",
  keywords: [
    "home builder Lakewood NJ",
    "community developer Ocean County",
    "new construction NJ",
    "residential development Lakewood",
    "Baron Builders",
    "Royal Grove NJ",
    "custom home builder NJ",
  ],
  openGraph: {
    title: "Baron Builders LLC | Building Communities, One Home at a Time",
    description:
      "14+ years of quality home construction in Lakewood & Ocean County. From single homes to entire communities.",
    url: "https://baron-builders.vercel.app",
    siteName: "Baron Builders LLC",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Baron Builders — Residential Community Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baron Builders LLC | Building Communities, One Home at a Time",
    description:
      "14+ years of quality home construction in Lakewood & Ocean County, NJ.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Baron Builders LLC",
    description:
      "Quality home construction and community development in Lakewood & Ocean County, NJ. 14+ years of building homes and residential communities.",
    url: "https://baron-builders.vercel.app",
    telephone: "(732) 534-9049",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1309 Ridge Ave",
      addressLocality: "Lakewood",
      addressRegion: "NJ",
      postalCode: "08701",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.0982,
      longitude: -74.2177,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      bestRating: "5",
      ratingCount: "23",
    },
    image: "/images/hero.jpg",
    priceRange: "$$$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 40.0982,
        longitude: -74.2177,
      },
      geoRadius: "30mi",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icon-512.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
