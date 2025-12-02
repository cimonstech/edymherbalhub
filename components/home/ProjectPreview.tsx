"use client";

import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Leaf, GraduationCap, Handshake, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const features = [
  {
    icon: Leaf,
    title: "Quality Raw Materials",
    description: "Supply Ghana's herbal industry with quality raw materials.",
  },
  {
    icon: GraduationCap,
    title: "Youth Training",
    description: "Train young people in modern herbal production.",
  },
  {
    icon: Handshake,
    title: "Outgrower Support",
    description: "Support smallholder farmers through an outgrower scheme.",
  },
  {
    icon: MapPin,
    title: "Rural Expansion",
    description: "Expand sustainable agriculture in rural communities.",
  },
];

export function ProjectPreview() {
  return (
    <Section className="bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-4">
            <p className="text-sm font-medium text-[#8EBA3E] mb-2">Flagship initiative</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">Our Flagship Project: Herbal Hub Ghana</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Herbal Hub Ghana is a 50-acre integrated herbal farm, processing center, and training facility. This project is the heart of our work and the foundation of Ghana's emerging herbal economy.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="/images/men-fixing-irrigation-onfarm.jpg"
                alt="Aerial view of Herbal Hub Ghana facility"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.3}>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="bg-white hover:shadow-xl transition-shadow border-2">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-[#8EBA3E]/20 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-[#0F6131]" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-[#0F6131] hover:bg-[#0F6131]/90 text-white">
                <Link href="/projects/herbal-hub">
                  Explore the project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Section>
  );
}
