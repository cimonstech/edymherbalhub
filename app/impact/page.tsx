"use client";

import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Factory, Handshake, TrendingUp, Leaf, Sun, Droplets, Recycle, GraduationCap } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const impactMetrics = [
  {
    icon: MapPin,
    value: "50 acres",
    title: "Farm Size",
    description: "Herbal demonstration farm and processing center",
    color: "text-[#0F6131]",
  },
  {
    icon: Users,
    value: "100+",
    title: "Youth Trained",
    description: "Young people empowered through training programs",
    color: "text-[#8EBA3E]",
  },
  {
    icon: Factory,
    value: "1",
    title: "Processing Lines",
    description: "Modern processing equipment for value addition",
    color: "text-[#0F6131]",
  },
  {
    icon: Handshake,
    value: "50+",
    title: "Farmers Supported",
    description: "Smallholder farmers in our outgrower network",
    color: "text-[#8EBA3E]",
  },
];

const impactHighlights = [
  {
    icon: Leaf,
    title: "Youth Employment",
    description: "Creating jobs across the herbal value chain, from farming to processing to marketing.",
    value: "Across Value Chains",
  },
  {
    icon: GraduationCap,
    title: "Skills Development",
    description: "Training in farming and processing techniques that build sustainable careers.",
    value: "Farming & Processing",
  },
  {
    icon: Factory,
    title: "Supply Chains",
    description: "Building stronger herbal supply chains that connect farmers to markets.",
    value: "Strengthened",
  },
  {
    icon: TrendingUp,
    title: "Farmer Income",
    description: "Enhanced livelihoods through value addition and market access.",
    value: "Increased",
  },
  {
    icon: Sun,
    title: "Land Restoration",
    description: "Sustainable land restoration practices that improve soil health.",
    value: "Sustainable",
  },
  {
    icon: Droplets,
    title: "Solar Irrigation",
    description: "Adoption of solar-powered irrigation systems for water efficiency.",
    value: "Adoption",
  },
];

const environmentalImpact = [
  {
    icon: Leaf,
    label: "100% Organic Farming",
    percentage: "100%",
  },
  {
    icon: Droplets,
    label: "Water Conservation",
    percentage: "85%",
  },
  {
    icon: Recycle,
    label: "Waste Reduction",
    percentage: "90%",
  },
  {
    icon: Sun,
    label: "Renewable Energy",
    percentage: "75%",
  },
];

export default function ImpactPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative py-0 w-full">
        <div className="relative min-h-[90vh] flex items-center w-full">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/vegetable-corn-farm.jpg"
              alt="Our Impact"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F6131]/75 via-[#0F6131]/70 to-[#0F6131]/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-0 py-0">
            <AnimatedSection>
              <div className="w-full max-w-4xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-0 drop-shadow-2xl leading-tight">
                  Measuring Our Collective Impact
                </h1>
                <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg leading-relaxed mb-0 mt-4">
                  Everything we do at EDYM Herbal Hub is designed to create positive economic, social, and environmental change.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm shadow-lg">
                    <Link href="/projects">
                      Discover Our Projects
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

      {/* Key Metrics Section */}
      <Section className="bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F6131] mb-4">Impact Metrics</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Transparent data and insights into how we're making a difference.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <AnimatedSection key={index} delay={0.1 * index}>
                  <Card className="border-2 hover:shadow-xl transition-shadow text-center h-full">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-[#8EBA3E]/20 flex items-center justify-center mx-auto mb-4">
                        <Icon className={`h-8 w-8 ${metric.color}`} />
                      </div>
                      <CardTitle className="text-3xl font-bold text-[#0F6131] mb-2">{metric.value}</CardTitle>
                      <CardDescription className="text-lg font-semibold">{metric.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{metric.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Impact Highlights Section */}
      <Section className="bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F6131] mb-4">Impact Highlights</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Key areas where we're creating meaningful change.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <AnimatedSection key={index} delay={0.1 * index}>
                  <Card className="border-2 hover:shadow-xl transition-shadow h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-[#8EBA3E]/20 flex items-center justify-center mb-3">
                        <Icon className="h-6 w-6 text-[#0F6131]" />
                      </div>
                      <CardTitle className="text-xl text-[#0F6131]">{highlight.title}</CardTitle>
                      <CardDescription className="font-semibold text-lg">{highlight.value}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Environmental Impact Banner */}
      <Section className="bg-gradient-to-r from-[#0F6131] to-[#8EBA3E] text-white py-16">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Environmental Impact Summary</h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                Our commitment to sustainable practices and environmental stewardship.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {environmentalImpact.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={index} delay={0.1 * index}>
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-4xl font-bold mb-2">{item.percentage}</p>
                      <p className="text-white/90">{item.label}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Impact Summary Section */}
      <Section className="bg-background">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <Card className="border-2 border-[#8EBA3E]/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-[#0F6131] mb-4">Impact Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-[#8EBA3E] mt-1" />
                  <div>
                    <p className="font-semibold text-[#0F6131]">Increased crop yields by 20%</p>
                    <p className="text-muted-foreground">Through improved farming techniques and soil health</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Droplets className="h-6 w-6 text-[#8EBA3E] mt-1" />
                  <div>
                    <p className="font-semibold text-[#0F6131]">Reduced water usage by 15%</p>
                    <p className="text-muted-foreground">Through solar-powered irrigation and efficient systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="h-6 w-6 text-[#8EBA3E] mt-1" />
                  <div>
                    <p className="font-semibold text-[#0F6131]">Enhanced soil organic matter by 10%</p>
                    <p className="text-muted-foreground">Through organic farming and regenerative practices</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F6131] mb-6">
              Our work proves that rural enterprise can be profitable, sustainable, and youth-driven.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Discover how our projects are creating lasting impact in communities across Ghana.
            </p>
            <Button asChild size="lg" className="bg-[#0F6131] hover:bg-[#0F6131]/90 text-white shadow-lg">
              <Link href="/projects">
                Discover Our Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
