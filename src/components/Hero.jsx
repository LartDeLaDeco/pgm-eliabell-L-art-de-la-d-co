export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="h-screen grid md:grid-cols-2 bg-gradient-to-br from-warmWhite via-lightRose to-soft relative overflow-hidden">
      {/* Subtle floral background elements */}
      <div className="absolute inset-0 bg-floral-light opacity-30"></div>
      <div className="absolute top-20 left-10 w-40 h-40 bg-rose-pattern opacity-20 rounded-full"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-vine-pattern opacity-15 rounded-full"></div>

      {/* Left */}
      <div className="flex flex-col justify-center px-10 md:px-20 relative z-10">
        {/* Logo in background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none"></div>

        {/* Decorative floating elements */}
        <div className="absolute -top-10 -left-5 w-20 h-20 border border-primary/10 rounded-full"></div>
        <div className="absolute top-40 -right-10 w-16 h-16 bg-rose/15 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-primary/10 rounded-full"></div>

        <h2 className="text-5xl md:text-6xl font-serif text-primary mb-4 relative">
          L'art de la déco
          {/* Decorative underline */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-gold mt-4"></div>
        </h2>

        <p className="mt-6 text-lg text-gray-700 max-w-md leading-relaxed">
          Décoration événementielle
          <br />
          <span className="font-medium text-primary">
            Particuliers & Entreprises
          </span>
        </p>

        {/* About section */}
        <div className="mt-8 p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-white/30 max-w-lg">
          <h3 className="text-xl font-serif text-primary mb-3">À propos</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Nous créons des décorations sur-mesure pour tous vos événements
            spéciaux. De l'intime soirée de fiançailles au mariage de rêve, en
            passant par les événements d'entreprise, nous donnons vie à vos
            idées avec passion et créativité. Chaque décoration est unique et
            adaptée à votre budget.
          </p>
        </div>

        {/* Call to action button */}
        <button
          onClick={scrollToServices}
          className="mt-6 px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl w-fit"
        >
          Découvrir nos créations
        </button>
      </div>

      {/* Right */}
      <div className="hidden md:block relative h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-lightRose/20 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e"
          alt="Décoration table"
          className="w-full h-full object-cover"
        />
        {/* Decorative border with floral corner */}
        <div className="absolute inset-4 border-2 border-white/30 rounded-lg pointer-events-none"></div>
        <div className="absolute top-6 right-6 w-8 h-8 bg-rose-pattern opacity-40 rounded-full"></div>
      </div>
    </section>
  );
}
