import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & News | EDYM Herbal Hub",
  description: "Articles, updates, and success stories from EDYM Herbal Hub—herbal agriculture, youth empowerment, and sustainable enterprise in Ghana.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog & News | EDYM Herbal Hub",
    description: "Articles and updates on herbal agriculture and youth empowerment.",
    url: "https://edymvillageenterprise.com/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
