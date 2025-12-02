"use client";

import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Cog, Sprout, Droplets } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const services = [
  {
    icon: Leaf,
    title: "Herbal Products",
    description: "Cultivation and processing of medicinal plants for herbal manufacturing, wellness brands, and export markets.",
    image: "/images/germinating-corn-portrait.jpg",
  },
  {
    icon: Cog,
    title: "Agro-Processing",
    description: "Drying, milling, powdering, and packaging of herbal materials using modern equipment.",
    image: "/images/agroprocessing.jpg",
  },
  {
    icon: Sprout,
    title: "Moringa Value Chain",
    description: "Production and processing of moringa leaves, seeds, and powder for nutritional and health industries.",
    image: "/images/moringa.jpg",
  },
  {
    icon: Droplets,
    title: "Eco-Services",
    description: "Sustainable farm services including training, nursery development, land restoration, and solar-powered irrigation systems.",
    image: "/images/tractor_on_farm.webp",
  },
];

export function ServicesSection() {
  return (
    <Section className="bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-4">
            <p className="text-sm font-medium text-[#8EBA3E] mb-2">Our Services</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              We operate across key areas of the herbal value chain to ensure quality, sustainability, and opportunity for youth and rural farmers.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={index} delay={0.1 * index}>
                <Card className="bg-white hover:shadow-xl transition-all duration-300 border-2 overflow-hidden group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#0F6131]" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#0F6131] hover:bg-[#0F6131]/90 text-white">
              <Link href="/business-units">
                See all business units <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}

