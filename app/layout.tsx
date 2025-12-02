import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EDYM Herbal Hub | A New Era of Herbal Agriculture in Ghana",
  description: "EDYM Herbal Hub is building a modern, youth-led herbal agriculture ecosystem—combining cultivation, processing, training, and sustainable rural enterprise.",
  metadataBase: new URL("https://edymvillageenterprise.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://edymvillageenterprise.com",
    siteName: "EDYM Herbal Hub",
    title: "EDYM Herbal Hub | A New Era of Herbal Agriculture in Ghana",
    description: "EDYM Herbal Hub is building a modern, youth-led herbal agriculture ecosystem—combining cultivation, processing, training, and sustainable rural enterprise.",
    images: [
      {
        url: "https://edymvillageenterprise.com/images/edym%20village%20logo.png",
        width: 1200,
        height: 630,
        alt: "EDYM Herbal Hub Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EDYM Herbal Hub | A New Era of Herbal Agriculture in Ghana",
    description: "EDYM Herbal Hub is building a modern, youth-led herbal agriculture ecosystem—combining cultivation, processing, training, and sustainable rural enterprise.",
    images: ["https://edymvillageenterprise.com/images/edym%20village%20logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
