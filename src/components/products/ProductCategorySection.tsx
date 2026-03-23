import { CatalogCard } from '../../data/productsCatalog';
import ProductCatalogCard from './ProductCatalogCard';

export default function ProductCategorySection({
  title,
  cards,
}: {
  title: string;
  cards: CatalogCard[];
}) {
  return (
    <section className="py-6 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <h2 className="text-xl sm:text-2xl font-semibold text-design-dark mb-6 text-left sm:text-center">
          {title}
        </h2>
        <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-unicore-accent to-design-mid mx-auto mb-6 sm:mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((card) => (
            <ProductCatalogCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

