export default function Services() {
  return (
    <section className="bg-lightRose py-24 px-10 md:px-20 relative overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute inset-0 bg-vine-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-floral-light opacity-25"></div>

      {/* Decorative shapes */}
      <div className="absolute top-16 right-16 w-24 h-24 border border-rose/20 rounded-full"></div>
      <div className="absolute bottom-16 left-16 w-16 h-16 bg-primary/10 rounded-full"></div>

      <div className="relative z-10">
        <h3 className="text-4xl font-serif text-primary mb-16 text-center">
          Nos services
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          
          {/* Service card */}
          <ServiceCard
            title="Soirée Henné"
            text="Décoration complète pour une soirée henné chaleureuse et fidèle aux traditions, avec mise en place des tables, du coin de la mariée et des éléments décoratifs."
          />

          <ServiceCard
            title="Demande en mariage"
            text="Création d’une ambiance élégante et romantique pour sublimer votre demande en mariage et marquer ce moment unique."
          />

          <ServiceCard
            title="Fiançailles"
            text="Décoration personnalisée pour vos fiançailles, pensée selon votre style, vos envies et votre budget."
          />

          <ServiceCard
            title="Mariage"
            text="Décoration de mariage harmonieuse et raffinée, pour une atmosphère accueillante et inoubliable le jour J."
          />

          <ServiceCard
            title="Catering à table"
            text="Service de catering avec plats simples ou élaborés, présentés avec soin pour que vos invités se sentent accueillis."
          />

          <ServiceCard
            title="Demandes sur mesure"
            text="Vous avez une idée précise ou un besoin particulier ? Nous adaptons la décoration et les services selon votre demande."
          />

        </div>
      </div>
    </section>
  );
}

/* Reusable card */
function ServiceCard({ title, text }) {
  return (
    <div className="bg-white/70 p-8 rounded-lg shadow-sm backdrop-blur-sm border border-white/20 hover:shadow-md transition">
      <h4 className="text-xl font-serif text-primary mb-4">
        {title}
      </h4>
      <p className="text-gray-700 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}