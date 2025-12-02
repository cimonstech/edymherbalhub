"use client";

import Image from "next/image";

const images = [
  "/images/youth-on-farm.webp",
  "/images/germinating-corn-portrait.jpg",
  "/images/men-fixing-irrigation-onfarm.jpg",
  "/images/tractor_on_farm.webp",
  "/images/vegetable-corn-farm.jpg",
  "/images/youth-with-hoe-portrait.jpg",
  "/images/maizeplant.jpg",
  "/images/old-lady-carrying-firewood.jpg",
];

export default function TestImagesPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Image Test Page</h1>
      <div className="grid grid-cols-2 gap-4">
        {images.map((src, index) => (
          <div key={index} className="space-y-2">
            <p className="text-sm font-mono">{src}</p>
            <div className="relative h-64 w-full border-2 border-red-500">
              <Image
                src={src}
                alt={`Test image ${index + 1}`}
                fill
                className="object-cover"
                quality={90}
              />
            </div>
            {/* Also test with regular img tag */}
            <div className="relative h-64 w-full border-2 border-blue-500">
              <img
                src={src}
                alt={`Test image ${index + 1} (regular img)`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

