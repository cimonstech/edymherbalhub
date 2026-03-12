import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | EDYM Herbal Hub",
  description: "Get in touch with EDYM Herbal Hub. Partnerships, investment, training, and general inquiries. Adjiringano, East Legon, Accra, Ghana.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | EDYM Herbal Hub",
    description: "Partnerships, investment, training, and general inquiries.",
    url: "https://edymvillageenterprise.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
