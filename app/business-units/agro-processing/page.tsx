"use client";

import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export default function AgroProcessingPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative py-0 w-full">
        <div className="relative min-h-[90vh] flex items-center w-full">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/men-fixing-irrigation-onfarm.jpg"
              alt="Agro-Processing Unit"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F6131]/75 via-[#0F6131]/70 to-[#0F6131]/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-0 py-0">
            <AnimatedSection>
              <div className="w-full max-w-4xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-0 drop-shadow-2xl leading-tight">
                  Agro-Processing Unit
                </h1>
                <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg leading-relaxed mb-0 mt-4">
                  Modern processing equipment ensuring high-quality herbal materials ready for market.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm shadow-lg">
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
                This unit houses our herbal processing machinery including dryers, grinders, mills, and packaging tools.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We convert fresh herbal crops into clean, well-processed materials ready for commercial use.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#0F6131]">Our processes ensure:</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="border-2 hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <p className="text-base font-medium">Reduced post-harvest losses</p>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <p className="text-base font-medium">Uniform product quality</p>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <p className="text-base font-medium">Value addition for rural farmers</p>
                  </CardContent>
                </Card>
              </div>
            </div>
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
