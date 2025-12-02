"use client";

import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Factory, GraduationCap, Handshake, Sun, Sprout } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const coreAreas = [
  {
    icon: Leaf,
    title: "Herbal Agriculture",
    description: "We cultivate medicinal plants like lemongrass, moringa, hibiscus, and ginger using climate-smart techniques that restore soil health and promote biodiversity.",
    image: "/images/vegetable-corn-farm.jpg",
    principles: [
      "Climate-smart cultivation",
      "Organic farming practices",
      "Crop diversity",
      "Soil health restoration",
    ],
  },
  {
    icon: Factory,
    title: "Herbal Processing",
    description: "Our processing unit dries, mills, powders, and packages herbal materials for wholesalers, manufacturers, and exporters using modern equipment.",
    image: "/images/men-fixing-irrigation-onfarm.jpg",
    principles: [
      "Quality control",
      "Value addition",
      "Modern equipment",
      "Market-ready products",
    ],
  },
  {
    icon: GraduationCap,
    title: "Youth Training & Skills Development",
    description: "We train young people in herbal agronomy, processing, agro-enterprise, and eco-innovation to build the next generation of agricultural leaders.",
    image: "/images/youth-on-farm.webp",
    principles: [
      "Hands-on training",
      "Entrepreneurship skills",
      "Modern techniques",
      "Career development",
    ],
  },
  {
    icon: Handshake,
    title: "Outgrower Support",
    description: "We support smallholder farmers with seedlings, training, and guaranteed market access through our comprehensive outgrower scheme.",
    image: "/images/old-lady-carrying-firewood.jpg",
    principles: [
      "Seedling provision",
      "Technical support",
      "Market access",
      "Income generation",
    ],
  },
  {
    icon: Sun,
    title: "Sustainability & Eco-Services",
    description: "We promote soil health, organic farming, solar irrigation, and responsible land use to create sustainable agricultural systems.",
    image: "/images/germinating-corn-portrait.jpg",
    principles: [
      "Solar-powered systems",
      "Organic practices",
      "Land restoration",
      "Climate resilience",
    ],
  },
];

export default function EnterprisePage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative py-0 w-full">
        <div className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center w-full">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/old-lady-carrying-firewood.jpg"
              alt="What We Do"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F6131]/75 via-[#0F6131]/70 to-[#0F6131]/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-0 py-8 sm:py-12 md:py-16 lg:py-20">
            <AnimatedSection>
              <div className="w-full max-w-4xl mx-auto text-center text-white px-4 sm:px-6 md:px-8 lg:px-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-0 drop-shadow-2xl leading-tight px-2">
                  What We Do
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg leading-relaxed mb-0 mt-3 sm:mt-4 px-2">
                  EDYM Herbal Hub operates across key herbal value chain areas, ensuring quality, sustainability, and economic growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-5 sm:mt-6 px-2">
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm shadow-lg text-sm sm:text-base min-h-[44px] sm:min-h-[48px] px-4 sm:px-6 w-full sm:w-auto">
                    <Link href="/projects">
                      See Our Projects
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="bg-[#8EBA3E] hover:bg-[#8EBA3E]/90 text-white shadow-lg hover:shadow-xl transition-all text-sm sm:text-base min-h-[44px] sm:min-h-[48px] px-4 sm:px-6 w-full sm:w-auto">
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

      {/* Core Areas Section */}
      <Section className="bg-background">
        <div className="max-w-7xl mx-auto space-y-20">
          {coreAreas.map((area, index) => {
            const Icon = area.icon;
            const isEven = index % 2 === 0;

            return (
              <AnimatedSection key={index} delay={0.1 * index}>
                <div className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'md:grid-flow-dense' : ''}`}>
                  <div className={isEven ? '' : 'md:col-start-2'}>
                    <div className="relative h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl group">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F6131]/70 via-transparent to-transparent"></div>
                    </div>
                  </div>

                  <div className={isEven ? '' : 'md:col-start-1 md:row-start-1'}>
                    <Card className="border-2 border-[#8EBA3E]/30 shadow-xl h-full">
                      <CardHeader className="space-y-4">
                        <div className="w-16 h-16 rounded-full bg-[#8EBA3E]/20 flex items-center justify-center">
                          <Icon className="h-8 w-8 text-[#0F6131]" />
                        </div>
                        <CardTitle className="text-3xl font-bold text-[#0F6131]">{area.title}</CardTitle>
                        <CardDescription className="text-lg leading-relaxed">{area.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="font-semibold text-[#0F6131] mb-3">Key Focus Areas:</p>
                        <ul className="space-y-2 text-muted-foreground">
                          {area.principles.map((principle, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-[#8EBA3E] mr-2">•</span>
                              <span>{principle}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Section>

      {/* Impact Banner */}
      <Section className="bg-gradient-to-r from-[#0F6131] to-[#8EBA3E] text-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building a Sustainable Herbal Value Chain
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              From cultivation to processing, training to market access, we're creating a complete ecosystem that benefits farmers, youth, and communities.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F6131] mb-6">
              Explore Our Projects
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              See how we're putting these principles into practice through our flagship projects and initiatives.
            </p>
            <Button asChild size="lg" className="bg-[#0F6131] hover:bg-[#0F6131]/90 text-white shadow-lg">
              <Link href="/projects">
                See our projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
