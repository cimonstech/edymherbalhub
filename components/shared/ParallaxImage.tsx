"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  priority?: boolean;
}

export function ParallaxImage({ src, alt, className = "", speed = 0.5, priority = false }: ParallaxImageProps) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const parallax = scrolled * speed;
        setOffset(parallax);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        style={{ transform: `translateY(${offset}px)` }}
        className="transition-transform duration-300 ease-out"
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-full object-cover"
          priority={priority}
        />
      </div>
    </div>
  );
}

