import "~/styles/globals.css";

import { type Metadata } from "next";
import { Archivo, Fraunces } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

const SITE_URL = "https://vilouraai.com";
// 56 chars
const SITE_TITLE = "VilouraAI: New website $497, AI receptionist, free audit";
// 148 chars
const SITE_DESCRIPTION =
  "Mobile-first websites for DFW small businesses, live in 7 days, plus an AI receptionist that answers every call. Free SEO audit. $497 site, $149/mo.";
const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "VilouraAI — New website in 7 days. Every call answered.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · VilouraAI",
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  keywords: [
    "Lewisville TX web redesign",
    "AI receptionist for local business",
    "small business website redesign $497",
    "DFW digital marketing",
    "free SEO audit Lewisville",
  ],
  authors: [{ name: "VilouraAI LLC" }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "VilouraAI",
    type: "website",
    locale: "en_US",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: [{ rel: "icon", url: "/icon.svg", type: "image/svg+xml" }],
};

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

/**
 * Site-wide structured data: Organization + LocalBusiness + the three
 * priced services. FAQPage lives on the homepage (src/app/page.tsx),
 * next to the FAQs it describes.
 *
 * Address "357 E Corporate Dr, Lewisville, TX" comes from the
 * muse-seo-1 brief, not a live listing check — the Google Business
 * Profile is a service-area listing with no storefront address shown.
 * Phone + hours below are from the GBP record (adi-confirmed Oct 17,
 * 2026): (469) 496-5431, every day 7:00 AM–7:00 PM.
 */
function SiteStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://vilouraai.com/#organization",
        name: "VilouraAI LLC",
        url: "https://vilouraai.com",
        email: "vilouraai1@gmail.com",
        telephone: "+1-469-496-5431",
        sameAs: ["https://share.google/56agIYRJv4O5Jcj5Q"],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://vilouraai.com/#business",
        name: "VilouraAI LLC",
        url: "https://vilouraai.com",
        description:
          "VilouraAI builds new mobile-first websites in 7 days and answers every call with an AI receptionist that books the appointment — for small businesses in Dallas–Fort Worth. Website Launch $497, AI Receptionist $149/mo, Launch Bundle $597.",
        email: "vilouraai1@gmail.com",
        telephone: "+1-469-496-5431",
        address: {
          "@type": "PostalAddress",
          streetAddress: "357 E Corporate Dr",
          addressLocality: "Lewisville",
          addressRegion: "TX",
          addressCountry: "US",
        },
        openingHours: "Mo-Su 07:00-19:00",
        priceRange: "$0 - $597",
        areaServed: [
          "Dallas",
          "Fort Worth",
          "Plano",
          "Frisco",
          "Lewisville",
          "Southlake",
          "Arlington",
          "Irving",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://vilouraai.com/#website",
        url: "https://vilouraai.com",
        name: "VilouraAI",
        publisher: { "@id": "https://vilouraai.com/#organization" },
      },
      {
        "@type": "Service",
        "@id": "https://vilouraai.com/#website-launch",
        name: "Website Launch",
        description:
          "Mobile-first 5-page site: home, services, about, reviews, contact / booking. Online booking button, Google Business Profile tune-up, basic local SEO. Live in 7 days.",
        provider: { "@id": "https://vilouraai.com/#business" },
        areaServed: "Dallas–Fort Worth",
        offers: {
          "@type": "Offer",
          price: "497",
          priceCurrency: "USD",
          description: "Website Launch, one-time.",
        },
      },
      {
        "@type": "Service",
        "@id": "https://vilouraai.com/#ai-receptionist",
        name: "AI Receptionist",
        description:
          "Answers every call 24/7 in a natural voice, books appointments straight into your calendar, answers FAQs, texts you a summary after every call, missed-call text-back. No setup fee, cancel anytime, first 14 days free.",
        provider: { "@id": "https://vilouraai.com/#business" },
        areaServed: "Dallas–Fort Worth",
        offers: {
          "@type": "Offer",
          price: "149",
          priceCurrency: "USD",
          description:
            "AI Receptionist, per month. No setup fee, cancel anytime, first 14 days free.",
        },
      },
      {
        "@type": "Service",
        "@id": "https://vilouraai.com/#launch-bundle",
        name: "Launch Bundle",
        description:
          "Everything in Website Launch ($497), first month of AI Receptionist included ($149 value), Prisqo AI-visibility report included ($19 value). One call to set it all up.",
        provider: { "@id": "https://vilouraai.com/#business" },
        areaServed: "Dallas–Fort Worth",
        offers: {
          "@type": "Offer",
          price: "597",
          priceCurrency: "USD",
          description: "Launch Bundle, one-time + first month included.",
        },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${archivo.variable}`}>
      <body className="bg-paper font-sans text-ink">
        <SiteStructuredData />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
