"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/Section";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function AboutPreview() {
  return (
    <Section className="bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-4">
            <p className="text-sm font-medium text-[#8EBA3E] mb-2">About EDYM Herbal Hub</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">Who We Are</h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                EDYM Herbal Hub is a youth-driven herbal agriculture and processing company committed to building Ghana's next-generation herbal industry. We cultivate high-demand medicinal plants, operate modern agro-processing systems, and provide training that empowers youth and rural farmers.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                From crop production to value-added processing, we are building a sustainable herbal ecosystem that creates jobs, supports farmers, and strengthens rural livelihoods.
              </p>
              <div className="pt-2 sm:pt-4">
                <Button asChild size="lg" className="bg-[#0F6131] hover:bg-[#0F6131]/90 text-white w-full sm:w-auto min-h-[44px] text-sm sm:text-base">
                  <Link href="/about">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="left" delay={0.4}>
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="/images/vegetable-corn-farm.jpg"
                alt="Farmers working in fields - sustainable agriculture"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Section>
  );
}
