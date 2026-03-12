import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | EDYM Herbal Hub",
  description: "Learn about EDYM Herbal Hub—our story, team, and mission to build Ghana's next-generation herbal agriculture and youth-led green enterprise.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | EDYM Herbal Hub",
    description: "Our story, team, and mission for herbal agriculture in Ghana.",
    url: "https://edymvillageenterprise.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
