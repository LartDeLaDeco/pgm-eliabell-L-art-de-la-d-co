export default function AboutUs() {
  return (
    <section className="bg-gradient-to-br from-soft via-lightRose to-blush py-16 px-10 md:px-20 relative overflow-hidden">
      {/* Elegant floral background */}
      <div className="absolute inset-0 bg-vine-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-floral-light opacity-15"></div>

      {/* Decorative elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border border-primary/10 rounded-full bg-rose-pattern opacity-15"></div>
      <div className="absolute bottom-8 right-8 w-20 h-20 bg-vine-pattern opacity-15 rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h3 className="text-4xl font-serif text-primary mb-12 text-center">
          À propos de nous
        </h3>
        <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-gold mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Logo Section - Left */}
          <div className="flex justify-center">
            <div className="text-center">
              <img
                src="/images/LogoArtDecoTransparent.png"
                alt="Logo L'art de la déco"
                className="max-w-md w-full h-auto mx-auto mb-4"
              />
              <h2 className="text-2xl font-serif text-primary mb-2">
                L'art de la déco
              </h2>
              <p className="text-lg font-script text-primary/70">
                Votre événement, notre passion
              </p>
            </div>
          </div>

          {/* Text Content - Right */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-serif text-primary mb-3">
                Notre passion
              </h4>
              <p className="leading-relaxed text-gray-700">
                Chez <strong>L'art de la déco</strong>, nous transformons vos
                rêves en réalité. Spécialisés dans la décoration événementielle,
                nous créons des ambiances uniques et mémorables pour tous vos
                moments précieux.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-serif text-primary mb-3">
                Notre expertise
              </h4>
              <p className="leading-relaxed text-gray-700">
                De l'intimité d'une soirée henné aux fastes d'un mariage, en
                passant par l'élégance d'événements d'entreprise, nous
                maîtrisons l'art de créer l'atmosphère parfaite. Chaque
                décoration est pensée sur-mesure, adaptée à votre style et à
                votre budget.
              </p>
            </div>

            <div className="pt-4 border-t border-primary/20">
              <p className="text-center italic text-primary font-script text-lg">
                "Votre vision, notre créativité, ensemble pour des moments
                inoubliables"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
