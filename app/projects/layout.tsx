import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | EDYM Herbal Hub",
  description: "EDYM Herbal Hub projects including the flagship Herbal Hub Ghana—integrated farm, processing, and training in the Volta Region.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Our Projects | EDYM Herbal Hub",
    description: "Herbal Hub Ghana and other sustainable agriculture projects.",
    url: "https://edymvillageenterprise.com/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
