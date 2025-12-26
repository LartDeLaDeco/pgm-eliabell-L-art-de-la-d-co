export default function Contact() {
  return (
    <section className="bg-gradient-to-br from-soft via-lightRose to-blush py-24 px-10 md:px-20 relative overflow-hidden">
      {/* Elegant floral background */}
      <div className="absolute inset-0 bg-vine-pattern opacity-15"></div>
      <div className="absolute inset-0 bg-floral-light opacity-25"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-12 left-12 w-20 h-20 border border-primary/15 rounded-full bg-rose-pattern opacity-20"></div>
      <div className="absolute bottom-12 right-12 w-28 h-28 bg-vine-pattern opacity-20 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-floral-light opacity-30 rounded-full"></div>
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h3 className="text-4xl font-serif text-primary mb-8">
          Contact
        </h3>
        <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-gold mx-auto mb-8"></div>

        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg text-gray-700 space-y-4 border border-white/30">
          <p className="flex items-center justify-center gap-3">
            <span className="text-primary">📧</span>
            <a
              href="mailto:LArtDeLaDeco68@outlook.fr?subject=Demande%20de%20devis"
              className="no-underline hover:text-primary transition-colors"
            >
              LArtDeLaDeco68@outlook.fr
            </a>
          </p>

          <p className="flex items-center justify-center gap-3">
            <span className="text-primary">📞</span>
            07 49 65 66 39
          </p>

          <p className="flex items-center justify-center gap-3">
            <span className="text-primary">💬</span>
            <a
              href="https://wa.me/33759564619"
              target="_blank"
              className="no-underline hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}