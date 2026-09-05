import { CatalogCard } from '../../data/productsCatalog';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProductCatalogCard({ card, priority = false }: { card: CatalogCard; priority?: boolean }) {
  return (
    <div className="group rounded-2xl bg-white border border-design-border shadow-card overflow-hidden hover:border-unicore-accent/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-[6/3] sm:aspect-[4/3] bg-design-bg overflow-hidden">
        <img
          src={card.imageSrc}
          alt={card.imageAlt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'low'}
          className="w-full h-full object-contain group-hover:scale-[1.04] transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 rounded-full bg-unicore-accent px-3 py-1 text-white text-[0.65rem] font-semibold uppercase tracking-wide">
          {card.badge}
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <h3 className="text-design-dark font-bold text-sm sm:text-base mb-1.5 leading-snug line-clamp-2">
          {card.title}
        </h3>
        <p className="text-design-mid text-xs sm:text-sm leading-relaxed mb-2 line-clamp-3">
          {card.description}
        </p>

        <ul className="text-design-mid text-[0.72rem] sm:text-xs space-y-0.5 mb-3">
          {card.bullets.slice(0, 3).map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-unicore-accent flex-shrink-0" />
              <span className="leading-snug">{b}</span>
            </li>
          ))}
        </ul>

        <Link
          to={`/product-details/${card.slug}`}
          className="group/btn flex items-center justify-center gap-2 w-full pl-4 pr-1.5 py-1.5 sm:py-2 rounded-full bg-unicore-dark text-white text-sm font-semibold hover:bg-unicore-dark-light transition-colors"
        >
          Learn More
          <span className="grid place-items-center w-6 h-6 rounded-full bg-white/15 group-hover/btn:bg-white/25 group-hover/btn:translate-x-0.5 transition-all duration-300">
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>
      </div>
    </div>
  );
}

