import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Units | EDYM Herbal Hub",
  description: "Explore EDYM Herbal Hub business units: herbal products, agro-processing, moringa value chain, training & consultancy, and eco-services.",
  alternates: { canonical: "/business-units" },
  openGraph: {
    title: "Business Units | EDYM Herbal Hub",
    description: "Herbal products, agro-processing, moringa, training, eco-services.",
    url: "https://edymvillageenterprise.com/business-units",
  },
};

export default function BusinessUnitsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
