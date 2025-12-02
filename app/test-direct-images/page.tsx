export default function TestDirectImagesPage() {
  const images = [
    "/images/youth-on-farm.webp",
    "/images/germinating-corn-portrait.jpg",
    "/images/men-fixing-irrigation-onfarm.jpg",
    "/images/tractor_on_farm.webp",
    "/images/vegetable-corn-farm.jpg",
    "/images/youth-with-hoe-portrait.jpg",
    "/images/maizeplant.jpg",
    "/images/old-lady-carrying-firewood.jpg",
    "/images/edym village logo.png",
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Direct Image Test (No Next.js Optimization)</h1>
      <div className="grid grid-cols-2 gap-4">
        {images.map((src, index) => (
          <div key={index} className="space-y-2 border p-4">
            <p className="text-sm font-mono break-all">{src}</p>
            <div className="relative h-64 w-full border-2 border-red-500 bg-gray-100">
              <img
                src={src}
                alt={`Test ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error("Image failed to load:", src);
                  e.currentTarget.style.border = "4px solid red";
                }}
                onLoad={() => {
                  console.log("Image loaded successfully:", src);
                }}
              />
            </div>
            <a 
              href={src} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              Open directly →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

