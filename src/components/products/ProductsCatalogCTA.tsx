import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProductsCatalogCTA() {
  return (
    <section className="relative py-14 sm:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-unicore-dark via-unicore-dark-light to-unicore-accent" />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Need Help Choosing the Right Product?
        </h2>
        <p className="text-white/85 max-w-2xl mx-auto mb-8">
          Tell us your requirements and we will recommend the best cooling &amp; ventilation solution for your facility.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2.5 pl-6 pr-2.5 py-2.5 rounded-full bg-white text-unicore-dark font-semibold text-sm sm:text-base shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            Talk to an Expert
            <span className="grid place-items-center w-8 h-8 rounded-full bg-unicore-dark/10 group-hover:translate-x-0.5 transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2.5 pl-6 pr-2.5 py-2.5 rounded-full border-2 border-white/40 text-white font-semibold text-sm sm:text-base hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Get a Bulk Quote
            <span className="grid place-items-center w-8 h-8 rounded-full bg-white/10 group-hover:translate-x-0.5 transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

