import { useState } from "react";
import ImageModel from "./ImageModel";

// Organize images by categories/albums
const albums = {
  mariages: {
    title: "Mariages & Fiançailles ",
    description: "Des décorations élégantes et personnalisées pour le jour le plus important de votre vie. Nous créons des ambiances romantiques et inoubliables qui reflètent votre style et votre histoire d'amour.",
    coverImage: "/images/Pink1.jpg",
    images: [
      "assets/images/Pink1.jpg",
      "/assets/images/red1.jpg",
      "/images/Red4.jpg"
    ]
  },
  // fiancailles: {
  //   title: "Fiançailles",
  //   description: "Célébrez votre engagement avec une décoration sur-mesure qui reflète votre histoire d'amour. Des ambiances intimes et chaleureuses pour marquer ce moment précieux.",
  //   coverImage: "/images/Pink1.jpg",
  //   images: [
  //     "/images/Pink1.jpg",
  //     "/images/red1.jpg",
  //     "/images/Red2.jpg",
  //     "/images/Red3.jpg",
  //     "/images/Red4.jpg"
  //   ]
  // },
  entreprises: {
    title: "Événements d'entreprise",
    description: "Des décorations professionnelles et raffinées pour vos événements corporate. Séminaires, soirées d'entreprise, lancements de produits - nous créons l'ambiance parfaite.",
    coverImage: "/images/company1.jpg",
    images: [
      "/images/company1.jpg",
      "/images/company2.jpg",
      "/images/company3.jpg"
    ]
  },
  henna: {
    title: "Soirées henné",
    description: "Plongez dans la tradition avec des décorations vibrantes et colorées pour vos soirées henné. Nous créons des ambiances festives et authentiques pour célébrer ce rituel spécial.",
    coverImage: "/images/Red6.jpg",
    images: [
      "/images/Red2.jpg",
      "/images/Red3.jpg",
      "/images/Red6.jpg",
      "/images/Red7.jpg",
      "/images/Red8.jpg"
    ]
  }
};

export default function Services() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (albumKey) => {
    setSelectedAlbum(albumKey);
    setSelectedImageIndex(0);
  };

  const handleNext = () => {
    if (selectedAlbum) {
      const album = albums[selectedAlbum];
      setSelectedImageIndex((prev) => (prev + 1) % album.images.length);
    }
  };

  const handlePrev = () => {
    if (selectedAlbum) {
      const album = albums[selectedAlbum];
      setSelectedImageIndex((prev) => (prev - 1 + album.images.length) % album.images.length);
    }
  };

  const handleClose = () => {
    setSelectedAlbum(null);
    setSelectedImageIndex(0);
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-warmWhite to-soft relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-subtle-pattern opacity-40"></div>
      <div className="absolute inset-0 bg-rose-pattern opacity-20"></div>
      
      {/* Header */}
      <div className="text-center mb-16 px-10 md:px-20">
        <h3 className="text-4xl font-serif text-primary mb-4">
          Nos réalisations
        </h3>
        <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-gold mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez nos créations pour chaque type d'événement
        </p>
      </div>

      {/* Service sections */}
      <div className="relative z-10">
        {Object.entries(albums).map(([key, album], index) => (
          <div
            key={key}
            className={`w-full py-16 px-10 md:px-20 ${
              index % 2 === 0 ? 'bg-white/30' : 'bg-lightRose/30'
            }`}
          >
            <div className={`max-w-7xl mx-auto flex items-center gap-12 ${
              index % 2 === 1 ? 'flex-row-reverse' : ''
            }`}>
              
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <h4 className="text-3xl font-serif text-primary">
                  {album.title}
                </h4>
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-gold"></div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {album.description}
                </p>
                <button
                  onClick={() => handleImageClick(key)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl"
                >
                  Voir la galerie
                  <span>→</span>
                </button>
              </div>

              {/* Image */}
              <div className="flex-1 max-w-md">
                <div 
                  className="group cursor-pointer relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => handleImageClick(key)}
                >
                  <img
                    src={album.coverImage}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={album.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-4 border-2 border-white/0 group-hover:border-white/50 rounded-lg transition-all duration-300"></div>
                  
                  {/* Play icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedAlbum && (
        <ImageModel 
          image={albums[selectedAlbum].images[selectedImageIndex]}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
          showArrows={albums[selectedAlbum].images.length > 1}
          title={`${albums[selectedAlbum].title} - ${selectedImageIndex + 1}/${albums[selectedAlbum].images.length}`}
        />
      )}
    </section>
  );
}