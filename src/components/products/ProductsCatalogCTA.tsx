import { Link } from 'react-router-dom';

export default function ProductsCatalogCTA() {
  return (
    <section className="py-14 sm:py-16 bg-gradient-to-r from-unicore-dark via-unicore-dark-light to-unicore-accent/30 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Need Help Choosing the Right Product?
        </h2>
        <p className="text-white/85 max-w-2xl mx-auto mb-8">
          Tell us your requirements and we will recommend the best cooling & ventilation solution for your facility.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/contact"
            className="inline-flex justify-center px-7 py-3 rounded-xl bg-unicore-accent text-white font-semibold shadow-btn hover:bg-unicore-accent-hover transition-colors"
          >
            Talk to an Expert
          </a>
          <Link
            to="/contact"
            className="inline-flex justify-center px-7 py-3 rounded-xl border border-white/30 bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Get a Bulk Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

