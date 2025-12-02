"use client";

import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Tractor, Users, Calendar, Link2, TrendingDown, Sun } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const impactMetrics = [
  {
    icon: Tractor,
    value: "50 acres",
    title: "Farm Size",
    description: "Herbal demonstration farm.",
  },
  {
    icon: Users,
    value: "Hundreds",
    title: "Youth Jobs",
    description: "Propelled youth employment.",
  },
  {
    icon: Calendar,
    value: "Ongoing",
    title: "Training",
    description: "For farmers and entrepreneurs.",
  },
  {
    icon: Link2,
    value: "Strengthened",
    title: "Value Chain",
    description: "Herbal industry growth.",
  },
  {
    icon: TrendingDown,
    value: "Reduced",
    title: "Post-Harvest",
    description: "Losses through processing.",
  },
  {
    icon: Sun,
    value: "Solar-Powered",
    title: "Eco-Systems",
    description: "Sustainable farming systems.",
  },
];

export function ImpactSection() {
  return (
    <Section className="relative py-20 overflow-hidden bg-[#0F6131]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-4">
            <p className="text-sm font-medium text-[#8EBA3E] mb-2">Making a Difference</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Our Impact</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Our mission is to build a sustainable herbal industry that creates dignified opportunities for youth and rural communities.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {impactMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <AnimatedSection key={index} delay={0.1 * index}>
                <div className="bg-[#8EBA3E] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-2xl transition-all duration-300 border-2 border-[#8EBA3E]/50">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{metric.value}</div>
                  <div className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{metric.title}</div>
                  <div className="text-xs sm:text-sm text-white/90">{metric.description}</div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.7}>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="secondary" className="bg-[#8EBA3E] hover:bg-[#8EBA3E]/90 text-white shadow-lg hover:shadow-xl transition-all">
              <Link href="/impact">
                Explore our impact <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
