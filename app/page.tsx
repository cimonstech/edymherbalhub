import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { PolicyAffiliation } from "@/components/home/PolicyAffiliation";
import { ProjectPreview } from "@/components/home/ProjectPreview";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PolicyAffiliation />
      <AboutPreview />
      <ProjectPreview />
      <ServicesSection />
      <ImpactSection />
      <CTA />
    </>
  );
}
