import "~/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { type Metadata } from "next";
import { Archivo, Fraunces } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

const SITE_URL = "https://vilouraai.com";
const SITE_TITLE = "VilouraAI: Know your next 12 weeks of bookings";
const SITE_DESCRIPTION =
  "Send a simple export of your past bookings. VilouraAI flags the exact weeks you'll turn customers away, 12 weeks out, with probability bands.";
const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "VilouraAI — Your competitors are guessing their next 12 weeks. You won't have to.",
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
    "booking forecast",
    "demand forecasting",
    "small business automation",
    "demand forecasting Texas",
    "AI agency Dallas",
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
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${archivo.variable}`}>
      <body className="bg-paper font-sans text-ink">
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Analytics />
      </body>
    </html>
  );
}
