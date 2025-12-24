import { useState } from "react";
import ImageModel from "./ImageModel";

const images = [
    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
    "https://images.unsplash.com/photo-1519741497674-611481863552",
    "https://images.unsplash.com/photo-1526045478516-99145907023c",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    "https://images.unsplash.com/photo-1494526585095-c41746248156",
    "/src/assets/images/Red1.jpg",
    "/src/assets/images/Red2.jpg",
    "/src/assets/images/Red3.jpg",
    "/src/assets/images/Red4.jpg",
    "/src/assets/images/Red5.jpg",
    "/src/assets/images/Red6.jpg",
    "/src/assets/images/Red7.jpg",
    "/src/assets/images/Red8.jpg",
    "/src/assets/images/Pink1.jpg",
];

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-24 px-10 md:px-20 bg-gradient-to-br from-warmWhite to-soft relative overflow-hidden">
      {/* Layered floral backgrounds */}
      <div className="absolute inset-0 bg-subtle-pattern opacity-40"></div>
      <div className="absolute inset-0 bg-rose-pattern opacity-20"></div>
      
      {/* Decorative floral elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-primary/10 rounded-full bg-floral-light opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-vine-pattern opacity-25 rounded-full"></div>
      <div className="absolute top-1/2 left-20 w-24 h-24 bg-rose-pattern opacity-15 rounded-full"></div>
      <div className="absolute top-20 left-1/2 w-16 h-16 bg-floral-light opacity-20 rounded-full"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-serif text-primary mb-4">
            Nos réalisations
          </h3>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos créations pour des événements inoubliables
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div 
              key={img} 
              className="group cursor-pointer relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={img}
                className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Décoration"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-2 border border-white/0 group-hover:border-white/50 rounded-lg transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      <ImageModel 
        image={selectedIndex !== null ? images[selectedIndex] : null}
        onClose={() => setSelectedIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        showArrows={images.length > 1}
      />
    </section>
  );
}