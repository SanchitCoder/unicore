export default function ProductsCatalogHero() {
  return (
    <section className="relative pt-20 pb-10 sm:pt-24 sm:pb-14 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-unicore-dark via-unicore-dark-light/80 to-unicore-accent/30" />
      <img
        src="/industrial-coolers-fans.png"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(46,203,182,0.25)_0%,transparent_55%)]" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-unicore-accent" />
            <span className="text-white/80 text-sm font-semibold uppercase tracking-widest">
              Products
            </span>
          </div>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Engineered for Performance &amp; Reliability
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed">
            Cooling and ventilation solutions built for industrial demands and reliable everyday comfort.
          </p>
        </div>

        <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-unicore-accent" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
}

