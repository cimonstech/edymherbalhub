"use client";

import { Section } from "@/components/shared/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import Image from "next/image";

const POLICY_LINKS = [
  {
    name: "24-Hour Economy & Accelerated Export Development",
    url: "https://24hplus.gov.gh/",
    logo: "/images/24H_logo_main.png",
    description: "Part of Ghana's 24H+ programme for round-the-clock productivity and export growth.",
  },
  {
    name: "Ministry of Food and Agriculture",
    url: "https://mofa.gov.gh",
    logo: null,
    description: "Aligned with MoFA's vision for sustainable agriculture and food security.",
  },
];

export function PolicyAffiliation() {
  return (
    <Section className="bg-muted/40 border-y border-[#8EBA3E]/20">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-[#8EBA3E] mb-2">Our Affiliation</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F6131] mb-4">
              Part of Ghana&apos;s 24-Hour Economy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              EDYM Herbal Hub is part of the national 24-Hour Economy &amp; Accelerated Export Development programme, building a modern, productive herbal agriculture sector in line with government and Ministry of Food and Agriculture priorities.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {POLICY_LINKS.map((item, index) => (
            <AnimatedSection key={item.url} delay={0.1 * index}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-xl border-2 border-[#8EBA3E]/20 bg-white hover:border-[#0F6131]/40 hover:shadow-lg transition-all group"
              >
                <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-[#8EBA3E]/30">
                  {item.logo ? (
                    <Image
                      src={item.logo}
                      alt=""
                      width={96}
                      height={96}
                      className="object-contain w-full h-full p-1"
                    />
                  ) : (
                    <span className="text-lg font-bold text-[#0F6131]">MoFA</span>
                  )}
                </div>
                <div className="text-center sm:text-left flex-1 min-w-0">
                  <h3 className="font-semibold text-[#0F6131] group-hover:underline">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.description}
                  </p>
                  <span className="inline-block mt-2 text-sm font-medium text-[#8EBA3E] group-hover:underline">
                    Visit website →
                  </span>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
}
