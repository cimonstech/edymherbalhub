"use client";

import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const services = [
  "Tree planting & land restoration",
  "Herbal crop nursery development",
  "Solar-powered irrigation systems",
  "Agro-ecology and organic farming training",
  "Environmental management solutions",
];

export default function EcoServicesPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative py-0 w-full">
        <div className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center w-full">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/youth-on-farm.webp"
              alt="Eco-Services & Sustainability"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F6131]/75 via-[#0F6131]/70 to-[#0F6131]/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-0 py-8 sm:py-12 md:py-16 lg:py-20">
            <AnimatedSection>
              <div className="w-full max-w-4xl mx-auto text-center text-white px-4 sm:px-6 md:px-8 lg:px-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-0 drop-shadow-2xl leading-tight px-2">
                  Eco-Services & Sustainability
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg leading-relaxed mb-0 mt-3 sm:mt-4 px-2">
                  Supporting communities, farms, and organizations with green services and sustainable solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-5 sm:mt-6 px-2">
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm shadow-lg text-sm sm:text-base min-h-[44px] sm:min-h-[48px] px-4 sm:px-6 w-full sm:w-auto">
                    <Link href="/business-units">
                      View All Business Units
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="bg-[#8EBA3E] hover:bg-[#8EBA3E]/90 text-white shadow-lg hover:shadow-xl transition-all">
                    <Link href="/contact">
                      Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <Section className="bg-background">
        <div className="max-w-4xl mx-auto space-y-8">
          <AnimatedSection>
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our Eco-Services Unit supports communities, farms, and organizations with:
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <Card className="border-2 hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <p className="text-base font-medium">{service}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.6}>
            <Card className="bg-gradient-to-br from-[#0F6131] to-[#8EBA3E] text-white border-0 shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Sun className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Goal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 leading-relaxed">
                  We help build greener, healthier, more productive landscapes.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <Button asChild size="lg" variant="outline" className="border-2 border-[#0F6131] text-[#0F6131] hover:bg-[#0F6131]/10">
              <Link href="/business-units">
                View All Business Units <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
