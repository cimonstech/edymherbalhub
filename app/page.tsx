import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ProjectPreview } from "@/components/home/ProjectPreview";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProjectPreview />
      <ServicesSection />
      <ImpactSection />
      <CTA />
    </>
  );
}
