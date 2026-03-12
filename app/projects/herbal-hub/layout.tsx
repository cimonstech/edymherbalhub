import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Herbal Hub Ghana Project | EDYM Herbal Hub",
  description: "Flagship 50-acre herbal agriculture project: cultivation, processing, and training in Ghana. Part of the 24-Hour Economy and EDYM Herbal Hub.",
  alternates: { canonical: "/projects/herbal-hub" },
  openGraph: {
    title: "Herbal Hub Ghana Project | EDYM Herbal Hub",
    description: "Flagship herbal agriculture project in Ghana.",
    url: "https://edymvillageenterprise.com/projects/herbal-hub",
  },
};

export default function HerbalHubLayout({ children }: { children: React.ReactNode }) {
  return children;
}
