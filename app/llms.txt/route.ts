import { NextResponse } from "next/server";
import { blogPosts } from "@/data/blog";
import { businessUnits } from "@/data/businessUnits";

const BASE_URL = "https://edymvillageenterprise.com";

/**
 * LLMs.txt / AI-oriented site map for crawlers and AI search.
 * Describes the site in plain text for LLM consumption.
 * See: https://llmstxt.org/ (convention for AI-readable site info)
 */
export async function GET() {
  const lines = [
    "# EDYM Herbal Hub",
    "",
    "EDYM Herbal Hub is a youth-driven herbal agriculture and processing company in Ghana. We cultivate medicinal plants, operate agro-processing systems, and provide training for youth and rural farmers. We are part of Ghana's 24-Hour Economy & Accelerated Export Development programme and work in alignment with the Ministry of Food and Agriculture.",
    "",
    "## Main pages",
    `${BASE_URL} - Home`,
    `${BASE_URL}/about - About us, story, team`,
    `${BASE_URL}/contact - Contact, partnerships, investment, training inquiries`,
    `${BASE_URL}/enterprise - Our approach: herbal agriculture, processing, training`,
    `${BASE_URL}/impact - Impact dashboard: youth trained, farms, outcomes`,
    `${BASE_URL}/business-units - Business units overview`,
    `${BASE_URL}/projects - Projects overview`,
    `${BASE_URL}/projects/herbal-hub - Herbal Hub Ghana flagship project`,
    `${BASE_URL}/blog - Blog and news`,
    `${BASE_URL}/privacy - Privacy policy`,
    `${BASE_URL}/terms - Terms of service`,
    "",
    "## Business units (subpages)",
    ...businessUnits.map((u) => `- ${BASE_URL}/business-units/${u.id}: ${u.title}`),
    "",
    "## Blog posts",
    ...blogPosts.map((p) => `- ${BASE_URL}/blog/${p.id}: ${p.title} (${p.date})`),
    "",
    "## External links",
    "- 24-Hour Economy: https://24hplus.gov.gh/",
    "- Ministry of Food and Agriculture: https://mofa.gov.gh",
    "",
    "## Contact",
    "Email: Edymherbalhub@gmail.com",
    "Phone: +233 24 489 5520",
    "Address: EDYM Herbal Hub Company Limited, No. 55 Apple Street, Adjiringano, East Legon, Accra, Ghana",
  ];

  return new NextResponse(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
