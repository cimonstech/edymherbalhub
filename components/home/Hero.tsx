"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    title: "Growing the Future of Herbal Agriculture in Ghana",
    description: "EDYM Herbal Hub is shaping a modern herbal agriculture ecosystem—where young people lead cultivation, processing, innovation, and green enterprise.",
    image: "/images/youth-on-farm.webp",
    cta1: "Learn About Us",
    cta2: "Explore Our Projects",
    link1: "/about",
    link2: "/projects",
  },
  {
    title: "Empowering Youth Through Green Enterprise",
    description: "Building sustainable, modern, youth-led businesses that transform agriculture, protect the environment, and strengthen local economies.",
    image: "/images/germinating-corn-portrait.jpg",
    cta1: "Discover Our Impact",
    cta2: "Partner With Us",
    link1: "/impact",
    link2: "/contact",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const current = heroSlides[currentSlide];

  return (
    <section className="relative overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-center">
      {/* Background Images with Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={current.image}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F6131]/75 via-[#0F6131]/65 to-[#0F6131]/80"></div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 z-20 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 backdrop-blur-sm transition-all touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 z-20 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 backdrop-blur-sm transition-all touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 w-full px-0 py-8 sm:py-12 md:py-16 lg:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-3xl mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-0 text-white drop-shadow-2xl leading-tight px-2">
              {current.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-0 max-w-2xl mx-auto drop-shadow-lg leading-relaxed mt-3 sm:mt-4 px-2">
              {current.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-5 sm:mt-6 px-2">
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 backdrop-blur-md shadow-lg text-sm sm:text-base min-h-[44px] sm:min-h-[48px] px-4 sm:px-6">
                <Link href={current.link1}>
                  {current.cta1}
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-[#8EBA3E] hover:bg-[#8EBA3E]/90 text-white shadow-lg hover:shadow-xl transition-all text-sm sm:text-base min-h-[44px] sm:min-h-[48px] px-4 sm:px-6">
                <Link href={current.link2}>
                  {current.cta2} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 sm:h-2.5 rounded-full transition-all touch-manipulation min-w-[20px] min-h-[20px] ${
              index === currentSlide
                ? "w-6 sm:w-8 bg-white"
                : "w-2 bg-white/40 hover:bg-white/60 active:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
