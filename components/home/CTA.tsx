"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/Section";
import { ArrowRight, Download } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function CTA() {
  return (
    <Section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/youth-with-hoe-portrait.jpg"
          alt="Youth working with a hoe - partnership opportunity"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F6131]/80 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4 sm:px-6 md:px-8">
        <AnimatedSection>
          <div className="mb-3 sm:mb-4">
            <Button asChild size="sm" variant="outline" className="bg-white/10 border-white/40 text-white hover:bg-white/20 mb-4 sm:mb-6 text-xs sm:text-sm min-h-[36px] sm:min-h-[40px]">
              <Link href="/contact">Join Us</Link>
            </Button>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 drop-shadow-lg px-2">
            Partner With Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 drop-shadow-md leading-relaxed px-2">
            Together, we can build a stronger, greener, and more inclusive herbal agriculture sector in Ghana. EDYM Herbal Hub welcomes collaborations with organizations, investors, manufacturers, and development partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Button asChild size="lg" className="bg-[#8EBA3E] hover:bg-[#8EBA3E]/90 text-white shadow-lg hover:shadow-xl transition-all text-sm sm:text-base min-h-[44px] sm:min-h-[48px] px-4 sm:px-6 w-full sm:w-auto">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 backdrop-blur-md shadow-lg text-sm sm:text-base min-h-[44px] sm:min-h-[48px] px-4 sm:px-6 w-full sm:w-auto">
              <Link href="/projects">
                Download Brochure <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
