export default function ForWhom() {
  return (
    <section className="bg-lightRose py-24 px-10 md:px-20 relative overflow-hidden">
      {/* Floral background patterns */}
      <div className="absolute inset-0 bg-vine-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-floral-light opacity-25"></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute top-16 right-16 w-24 h-24 border border-rose/20 rounded-full"></div>
      <div className="absolute bottom-16 left-16 w-16 h-16 bg-primary/10 rounded-full"></div>
      <div className="absolute top-40 left-1/4 w-32 h-32 bg-rose-pattern opacity-30 rounded-full"></div>
      <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-vine-pattern opacity-25 rounded-full"></div>
      
      <div className="relative z-10">
        <h3 className="text-4xl font-serif text-primary mb-12 text-center">
          TEXT TEXT TEXT 
        </h3>

        <div className="grid md:grid-cols-2 gap-12 text-gray-700 max-w-4xl mx-auto">
          <div className="bg-white/70 p-8 rounded-lg shadow-sm backdrop-blur-sm border border-white/20">
            <p>
              <strong className="text-primary">Pour les particuliers</strong> qui organisent un événement
              (soirée henné, fiançailles, mariages, demandes en mariage)
              et recherchent une décoration adaptée à leur budget et à leurs envies.
            </p>
          </div>

          <div className="bg-white/70 p-8 rounded-lg shadow-sm backdrop-blur-sm border border-white/20">
            <p>
              <strong className="text-primary">Pour les entreprises</strong> qui souhaitent une décoration
              pensée pour leurs événements professionnels
              (soirées, séminaires, fêtes).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}