import { CatalogCard } from '../../data/productsCatalog';

export default function ProductCatalogCard({ card }: { card: CatalogCard }) {
  return (
    <div className="group rounded-2xl bg-white border border-design-border shadow-card overflow-hidden hover:border-unicore-accent/30 transition-all duration-300">
      <div className="relative aspect-[4/3] bg-design-bg overflow-hidden">
        <img
          src={card.imageSrc}
          alt={card.imageAlt}
          className="w-full h-full object-contain group-hover:scale-[1.04] transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 rounded-full bg-unicore-accent px-3 py-1 text-white text-[0.65rem] font-semibold uppercase tracking-wide">
          {card.badge}
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-design-dark font-bold text-sm sm:text-base mb-2 leading-snug line-clamp-2">
          {card.title}
        </h3>
        <p className="text-design-mid text-xs sm:text-sm leading-relaxed mb-3 line-clamp-3">
          {card.description}
        </p>

        <ul className="text-design-mid text-[0.72rem] sm:text-xs space-y-1 mb-4">
          {card.bullets.slice(0, 3).map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-unicore-accent flex-shrink-0" />
              <span className="leading-snug">{b}</span>
            </li>
          ))}
        </ul>

        <a
          href={`/product-details/${encodeURIComponent(card.productDetailsName)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center px-4 py-2 rounded-lg bg-unicore-dark text-white text-sm font-semibold hover:bg-unicore-dark-light transition-colors"
        >
          Learn More
        </a>

        {/* Card navigation uses external link to product-details in a new tab */}
      </div>
    </div>
  );
}

