"use client";

import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Users, GraduationCap, Handshake, Factory, Sprout, Sun, Calendar, MapPin, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useState } from "react";

// Timeline data
const timeline = [
  {
    year: "2020",
    title: "The Beginning",
    description: "EDYM Herbal Hub was founded with a vision to revolutionize Ghana's herbal agriculture sector.",
  },
  {
    year: "2021",
    title: "First Farm Establishment",
    description: "Launched our first demonstration farm and began cultivating medicinal plants.",
  },
  {
    year: "2022",
    title: "Processing Unit Launch",
    description: "Established our modern agro-processing facility for drying, milling, and packaging.",
  },
  {
    year: "2023",
    title: "Youth Training Programs",
    description: "Expanded training initiatives to empower young people in herbal agriculture.",
  },
  {
    year: "2024",
    title: "Herbal Hub Ghana Project",
    description: "Launched our flagship 50-acre integrated farm, processing center, and training facility.",
  },
];

// Team members (placeholder - update with actual team data)
const teamMembers = [
  {
    name: "Leadership Team",
    role: "Founders & Directors",
    description: "Visionary leaders driving EDYM Herbal Hub's mission forward.",
    image: "/images/youth-on-farm.webp",
  },
  {
    name: "Agricultural Team",
    role: "Farm Managers & Agronomists",
    description: "Experts in herbal cultivation and sustainable farming practices.",
    image: "/images/germinating-corn-portrait.jpg",
  },
  {
    name: "Processing Team",
    role: "Production & Quality Control",
    description: "Ensuring high-quality herbal products through modern processing.",
    image: "/images/men-fixing-irrigation-onfarm.jpg",
  },
  {
    name: "Training Team",
    role: "Skills Development",
    description: "Empowering youth and farmers through comprehensive training programs.",
    image: "/images/youth-with-hoe-portrait.jpg",
  },
];

// Pillars data
const pillars = [
  {
    id: "herbal-agriculture",
    title: "Herbal Agriculture",
    icon: Leaf,
    definition: "The cultivation of medicinal plants using climate-smart, sustainable practices that restore soil health and biodiversity.",
    principles: [
      "Minimize soil disturbance",
      "Maximize crop diversity",
      "Keep soil covered",
      "Integrate organic inputs",
      "Promote biodiversity",
    ],
    image: "/images/vegetable-corn-farm.jpg",
  },
  {
    id: "youth-empowerment",
    title: "Youth Empowerment",
    icon: GraduationCap,
    definition: "Training and skills development programs that equip young people with modern agricultural knowledge and entrepreneurial skills.",
    principles: [
      "Hands-on training",
      "Mentorship programs",
      "Entrepreneurship support",
      "Job creation",
      "Leadership development",
    ],
    image: "/images/youth-on-farm.webp",
  },
  {
    id: "sustainable-processing",
    title: "Sustainable Processing",
    icon: Factory,
    definition: "Modern agro-processing systems that add value to herbal materials while maintaining quality and sustainability.",
    principles: [
      "Quality control",
      "Value addition",
      "Efficient processing",
      "Sustainable packaging",
      "Market access",
    ],
    image: "/images/men-fixing-irrigation-onfarm.jpg",
  },
  {
    id: "community-wellbeing",
    title: "Community Well-being",
    icon: Handshake,
    definition: "Supporting rural communities through outgrower schemes, market access, and sustainable livelihoods.",
    principles: [
      "Farmer support",
      "Market linkages",
      "Income generation",
      "Rural development",
      "Community partnerships",
    ],
    image: "/images/old-lady-carrying-firewood.jpg",
  },
  {
    id: "eco-innovation",
    title: "Eco-Innovation",
    icon: Sun,
    definition: "Integrating climate-smart technologies, solar irrigation, and eco-friendly practices for sustainable agriculture.",
    principles: [
      "Solar-powered systems",
      "Water conservation",
      "Organic farming",
      "Land restoration",
      "Climate resilience",
    ],
    image: "/images/germinating-corn-portrait.jpg",
  },
];

// Impact metrics
const impactMetrics = [
  {
    icon: MapPin,
    value: "50 acres",
    title: "Farm Size",
    description: "Herbal demonstration farm and processing center",
  },
  {
    icon: Users,
    value: "100+",
    title: "Youth Trained",
    description: "Young people empowered through training programs",
  },
  {
    icon: Factory,
    value: "5+",
    title: "Processing Lines",
    description: "Modern processing equipment for value addition",
  },
  {
    icon: Handshake,
    value: "50+",
    title: "Farmers Supported",
    description: "Smallholder farmers in our outgrower network",
  },
];

// Success stories
const stories = [
  {
    name: "Youth Farmer Success",
    role: "Trainee & Entrepreneur",
    story: "A young farmer who completed our training program and now runs a successful herbal farm, supplying materials to local markets.",
    image: "/images/youth-on-farm.webp",
  },
  {
    name: "Community Impact",
    role: "Rural Development",
    story: "How our outgrower program has transformed livelihoods in rural communities, creating sustainable income sources.",
    image: "/images/old-lady-carrying-firewood.jpg",
  },
  {
    name: "Processing Innovation",
    role: "Value Addition",
    story: "Our modern processing facility has enabled farmers to access premium markets and increase their income significantly.",
    image: "/images/men-fixing-irrigation-onfarm.jpg",
  },
];

export default function AboutPage() {
  const [activePillar, setActivePillar] = useState(pillars[0]);

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative py-0 w-full">
        <div className="relative min-h-[90vh] flex items-center w-full">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/maizeplant.jpg"
              alt="About EDYM Herbal Hub"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F6131]/75 via-[#0F6131]/70 to-[#0F6131]/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-0 py-0">
            <AnimatedSection>
              <div className="w-full max-w-4xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-0 drop-shadow-2xl leading-tight">
                  About EDYM Herbal Hub
                </h1>
                <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg leading-relaxed mb-0 mt-4">
                  A youth-focused herbal agriculture and processing company dedicated to expanding Ghana's herbal industry through innovation, training, and sustainable enterprise.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm shadow-lg">
                    <Link href="/enterprise">
                      Learn More About Our Work
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="bg-[#8EBA3E] hover:bg-[#8EBA3E]/90 text-white shadow-lg hover:shadow-xl transition-all">
                    <Link href="/business-units">
                      Explore Our Business Units <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* From Vision to Reality Section */}
      <Section className="bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-[#8EBA3E] mb-2">Our Journey</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F6131] mb-4">
                From Vision to Herbal Reality
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  EDYM Herbal Hub was born from a vision to transform Ghana's herbal agriculture sector. We recognized the immense potential of medicinal plants to create jobs, improve health, and strengthen rural economies.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we're building a modern, youth-led herbal ecosystem that combines traditional knowledge with innovative practices. Our approach focuses on soil health, biodiversity, community well-being, and empowering farmers through comprehensive training and market access.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From our 50-acre Herbal Hub Ghana project to our processing facilities and training programs, we're creating a sustainable model that proves rural enterprise can be profitable, environmentally responsible, and youth-driven.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.4}>
              <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="/images/germinating-corn-portrait.jpg"
                  alt="Sustainable agriculture in action"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F6131]/70 via-transparent to-transparent"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section className="bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-[#8EBA3E] mb-2">Our Growth</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F6131] mb-4">
                Journey of Transformation
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our path to building Ghana's next-generation herbal industry, marked by milestones and continuous growth.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#8EBA3E] to-[#0F6131]"></div>

            <div className="space-y-8 md:space-y-12">
              {timeline.map((item, index) => (
                <AnimatedSection key={index} delay={0.1 * index}>
                  <div className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <Card className="border-2 hover:shadow-xl transition-shadow h-full">
                        <CardHeader>
                          <div className="flex items-center gap-3 mb-2">
                            <Calendar className="h-5 w-5 text-[#8EBA3E]" />
                            <CardTitle className="text-xl">{item.year}</CardTitle>
                          </div>
                          <CardTitle className="text-2xl text-[#0F6131]">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#8EBA3E] border-4 border-background shadow-lg"></div>
                    </div>

                    <div className="md:w-5/12"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-[#8EBA3E] mb-2">Our People</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F6131] mb-4">
                The Innovators Behind EDYM Herbal Hub
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Meet the dedicated individuals and teams driving our mission forward.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <Card className="h-full border-2 hover:shadow-xl transition-shadow group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F6131]/80 via-transparent to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#0F6131]">{member.name}</CardTitle>
                    <CardDescription className="font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5}>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="border-2 border-[#0F6131] text-[#0F6131] hover:bg-[#0F6131]/10">
                <Link href="/team">
                  Meet the Entire Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Five Pillars Section */}
      <Section className="bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-[#8EBA3E] mb-2">Our Approach</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F6131] mb-4">
                Five Pillars of Sustainable Impact
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive approach to fostering a healthier planet and thriving communities.
              </p>
            </div>
          </AnimatedSection>

          {/* Pillar Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activePillar.id === pillar.id
                      ? "bg-[#0F6131] text-white shadow-lg"
                      : "bg-white text-[#0F6131] border-2 border-[#0F6131] hover:bg-[#0F6131]/10"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    <span>{pillar.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Content */}
          <AnimatedSection key={activePillar.id}>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={activePillar.image}
                  alt={activePillar.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F6131]/70 via-transparent to-transparent"></div>
              </div>

              <Card className="border-2 border-[#8EBA3E]/30 shadow-xl">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#8EBA3E]/20 flex items-center justify-center">
                    <activePillar.icon className="h-8 w-8 text-[#0F6131]" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-[#0F6131]">{activePillar.title}</CardTitle>
                  <CardDescription className="text-lg">{activePillar.definition}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-[#0F6131] mb-3">Key Principles:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    {activePillar.principles.map((principle, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#8EBA3E] mr-2">•</span>
                        <span>{principle}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          {/* Other Pillars Preview */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {pillars.filter(p => p.id !== activePillar.id).map((pillar) => {
              const Icon = pillar.icon;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar)}
                  className="text-left"
                >
                  <Card className="h-full border-2 hover:shadow-lg transition-shadow hover:border-[#8EBA3E]">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-[#8EBA3E]/20 flex items-center justify-center mb-3">
                        <Icon className="h-6 w-6 text-[#0F6131]" />
                      </div>
                      <CardTitle className="text-lg">{pillar.title}</CardTitle>
                    </CardHeader>
                  </Card>
                </button>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Impact Metrics Banner */}
      <Section className="bg-gradient-to-r from-[#0F6131] to-[#8EBA3E] text-white py-16">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Preserving Knowledge for Future Generations
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                We document and share traditional herbal knowledge and modern agricultural practices to ensure a sustainable future.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Herbal Species" },
              { value: "100+", label: "Training Programs" },
              { value: "30+", label: "Community Workshops" },
              { value: "5+", label: "Research Partnerships" },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                  <CardContent className="pt-6">
                    <p className="text-4xl font-bold mb-2">{item.value}</p>
                    <p className="text-white/90">{item.label}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Section>

      {/* Impact Metrics Section */}
      <Section className="bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-[#8EBA3E] mb-2">Our Impact</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F6131] mb-4">
                Measuring Our Collective Impact
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Transparent data and insights into how we're making a difference.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <AnimatedSection key={index} delay={0.1 * index}>
                  <Card className="border-2 hover:shadow-xl transition-shadow text-center h-full">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-[#8EBA3E]/20 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-[#0F6131]" />
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

      {/* Stories Section */}
      <Section className="bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-[#8EBA3E] mb-2">Success Stories</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F6131] mb-4">
                Stories from the Field
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Real-life accounts of transformation and resilience.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <Card className="h-full border-2 hover:shadow-xl transition-shadow group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F6131]/80 via-transparent to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#0F6131]">{story.name}</CardTitle>
                    <CardDescription className="font-medium">{story.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{story.story}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="border-2 border-[#0F6131] text-[#0F6131] hover:bg-[#0F6131]/10">
                <Link href="/success-stories">
                  Read More Stories <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-[#0F6131] to-[#8EBA3E] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us in Building Ghana's Herbal Future
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Together, we can build a stronger, greener, and more inclusive herbal agriculture sector in Ghana. EDYM Herbal Hub welcomes collaborations with organizations, investors, manufacturers, and development partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#0F6131] hover:bg-white/90 shadow-lg">
                <Link href="/contact">
                  Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <Link href="/business-units">
                  Explore Our Work
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
