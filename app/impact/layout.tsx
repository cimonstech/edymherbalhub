import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact Dashboard | EDYM Herbal Hub",
  description: "EDYM Herbal Hub impact: youth trained, acres farmed, processing capacity, and sustainable agriculture outcomes in Ghana.",
  alternates: { canonical: "/impact" },
  openGraph: {
    title: "Impact Dashboard | EDYM Herbal Hub",
    description: "Our impact on youth, farming, and sustainable agriculture.",
    url: "https://edymvillageenterprise.com/impact",
  },
};

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
