import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach | EDYM Herbal Hub",
  description: "How EDYM Herbal Hub combines herbal agriculture, processing, training, and sustainable enterprise for a modern herbal ecosystem in Ghana.",
  alternates: { canonical: "/enterprise" },
  openGraph: {
    title: "Our Approach | EDYM Herbal Hub",
    description: "Herbal agriculture, processing, and sustainable enterprise.",
    url: "https://edymvillageenterprise.com/enterprise",
  },
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
