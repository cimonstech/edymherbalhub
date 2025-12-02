"use client";

import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/shared/Section";
import { herbalHubData } from "@/data/herbalHub";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ArrowRight } from "lucide-react";

export default function HerbalHubPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative py-0 w-full">
        <div className="relative min-h-[90vh] flex items-center w-full">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/vegetable-corn-farm.jpg"
              alt="Herbal Hub Ghana Project"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F6131]/75 via-[#0F6131]/70 to-[#0F6131]/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-0 py-0">
            <AnimatedSection>
              <div className="w-full max-w-4xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-0 drop-shadow-2xl leading-tight">
                  Herbal Hub Ghana Project
                </h1>
                <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg leading-relaxed mb-0 mt-4">
                  A 50-acre integrated herbal farm, processing center, and training hub supporting youth employment, rural development, and sustainable herbal value chains.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm shadow-lg">
                    <Link href="/projects">
                      View All Projects
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

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Project Overview */}
          <AnimatedSection>
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Herbal Hub Ghana Project is a 50-acre integrated herbal farm, processing center, and training hub supporting youth employment, rural development, and sustainable herbal value chains.
              </p>
            </div>
          </AnimatedSection>

          {/* Land & Location */}
          <AnimatedSection delay={0.2}>
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Location & Scale</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg mb-2">
                    <span className="font-semibold">Land Size: </span>
                    {herbalHubData.land.size}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">{herbalHubData.land.description}</p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          <Separator />

          {/* Key Components */}
          <AnimatedSection delay={0.3}>
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Components</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">50-Acre Herbal Farm</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Climate-smart cultivation of medicinal plants</CardDescription>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Processing & Packaging Center</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Modern facilities for value addition</CardDescription>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Youth Training Hub</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Skills development and capacity building</CardDescription>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Eco-Smart Systems</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Solar-powered irrigation and sustainable infrastructure</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>

          <Separator />

          {/* Crops */}
          <AnimatedSection delay={0.4}>
            <div>
              <h2 className="text-2xl font-bold mb-4">Cultivated Crops</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {herbalHubData.crops.map((crop, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{crop.name}</CardTitle>
                      <CardDescription>{crop.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-medium mb-2">Uses:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {crop.uses.map((use, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{use}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <Separator />

          {/* Outgrower Scheme */}
          <AnimatedSection delay={0.5}>
            <div>
              <h2 className="text-2xl font-bold mb-4">{herbalHubData.outgrower.title}</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">{herbalHubData.outgrower.description}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {herbalHubData.outgrower.benefits.map((benefit, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <p className="text-sm">{benefit}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="bg-[#8EBA3E]/10 border-2 border-[#8EBA3E]/30">
                <CardContent className="pt-6">
                  <p className="text-sm font-medium">{herbalHubData.outgrower.impact}</p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          <Separator />

          {/* Training & Skills Development */}
          <AnimatedSection delay={0.6}>
            <div>
              <h2 className="text-2xl font-bold mb-4">Training & Skills Development</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We provide comprehensive training in herbal agronomy, processing techniques, agro-enterprise, and sustainable farming practices for young people and farmers.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <p className="text-base font-medium">Herbal agronomy training</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <p className="text-base font-medium">Processing and value addition</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <p className="text-base font-medium">Agro-enterprise development</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <p className="text-base font-medium">Sustainable farming practices</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>

          <Separator />

          {/* Green Technology System */}
          <AnimatedSection delay={0.7}>
            <div>
              <h2 className="text-2xl font-bold mb-4">Green Technology System</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {herbalHubData.infrastructure.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <Separator />

          {/* Impact Forecast */}
          <AnimatedSection delay={0.8}>
            <div>
              <h2 className="text-2xl font-bold mb-6">{herbalHubData.impact.title}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{herbalHubData.impact.description}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {herbalHubData.impact.metrics.map((metric, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-2xl">{metric.value}</CardTitle>
                      <CardDescription className="text-base font-medium">{metric.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{metric.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <Separator />

          {/* Long-term Vision */}
          <AnimatedSection delay={0.9}>
            <Card className="bg-[#0F6131]/10 border-2 border-[#0F6131]/30 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Long-term Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Herbal Hub Ghana Project serves as a model for scalable, sustainable herbal agriculture that can be replicated across Ghana, creating lasting economic opportunities for youth and rural communities.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
