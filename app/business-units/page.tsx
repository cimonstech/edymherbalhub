"use client";

import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { BusinessUnitCard } from "@/components/cards/BusinessUnitCard";
import { businessUnits } from "@/data/businessUnits";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory } from "lucide-react";

export default function BusinessUnitsPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative py-0 w-full">
        <div className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center w-full">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/men-fixing-irrigation-onfarm.jpg"
              alt="Our Business Units"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F6131]/75 via-[#0F6131]/70 to-[#0F6131]/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-0 py-8 sm:py-12 md:py-16 lg:py-20">
            <AnimatedSection>
              <div className="w-full max-w-4xl mx-auto text-center text-white px-4 sm:px-6 md:px-8 lg:px-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-0 drop-shadow-2xl leading-tight px-2">
                  Our Business Units
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg leading-relaxed mb-0 mt-3 sm:mt-4 px-2">
                  EDYM Herbal Hub is structured into focused business units that strengthen Ghana's herbal value chain. Each unit plays a key role in cultivation, processing, training, and sustainable development.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-5 sm:mt-6 px-2">
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm shadow-lg text-sm sm:text-base min-h-[44px] sm:min-h-[48px] px-4 sm:px-6 w-full sm:w-auto">
                    <Link href="/enterprise">
                      Learn More About Our Work
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="bg-[#8EBA3E] hover:bg-[#8EBA3E]/90 text-white shadow-lg hover:shadow-xl transition-all">
                    <Link href="/contact">
                      Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Business Units Grid */}
      <Section className="bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessUnits.map((unit, index) => (
              <AnimatedSection key={unit.id} delay={index * 0.1}>
                <BusinessUnitCard
                  id={unit.id}
                  title={unit.title}
                  description={unit.description}
                  image={unit.image}
                  features={unit.features}
                  impact={unit.impact}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Banner */}
      <Section className="bg-gradient-to-r from-[#0F6131] to-[#8EBA3E] text-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Factory className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore Our Business Units
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Each unit is designed to create value, generate employment, and build sustainable livelihoods in Ghana's herbal industry.
            </p>
            <Button asChild size="lg" className="bg-white text-[#0F6131] hover:bg-white/90 shadow-lg">
              <Link href="/enterprise">
                Learn More About Our Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
