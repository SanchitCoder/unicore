import { useMemo, useState } from 'react';
import ProductsCatalogHero from './ProductsCatalogHero';
import ProductCategorySection from './ProductCategorySection';
import ProductsCatalogCTA from './ProductsCatalogCTA';
import {
  allProductsCards,
  exhaustFanCards,
  farrataFanCards,
  airCirculatorCards,
  airCoolerCards,
} from '../../data/productsCatalog';

export default function ProductsCatalogLayout() {
  const tabs = useMemo(
    () => [
      { key: 'all', label: 'All Products' },
      { key: 'exhaust', label: 'Exhaust Fans' },
      { key: 'farrata', label: 'Farrata Fans' },
      { key: 'circulators', label: 'Air Circulators' },
      { key: 'coolers', label: 'Air Coolers' },
    ],
    []
  );
  const [activeTab, setActiveTab] = useState<'all' | 'exhaust' | 'farrata' | 'circulators' | 'coolers'>('all');

  const category = useMemo(() => {
    if (activeTab === 'exhaust') {
      return { title: 'Exhaust Fans', cards: exhaustFanCards };
    }
    if (activeTab === 'farrata') {
      return { title: 'Farrata Fans', cards: farrataFanCards };
    }
    if (activeTab === 'circulators') {
      return { title: 'Air Circulators', cards: airCirculatorCards };
    }
    if (activeTab === 'coolers') {
      return { title: 'Air Coolers', cards: airCoolerCards };
    }
    return { title: 'All Products', cards: allProductsCards };
  }, [activeTab]);

  return (
    <div className="w-full">
      <ProductsCatalogHero />

      {/* Category navigation tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-5 -mt-2 sm:-mt-3 mb-10 relative z-20 overflow-visible">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {tabs.map((t) => {
            const selected = t.key === activeTab;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActiveTab(t.key as typeof activeTab)}
                className={`px-6 sm:px-7 lg:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold leading-none whitespace-nowrap transition-colors duration-200 ${
                  selected
                    ? 'bg-unicore-dark text-white shadow-card'
                    : 'bg-white text-unicore-accent border border-unicore-dark/10 hover:bg-unicore-accent/5'
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      <ProductCategorySection title={category.title} cards={category.cards} />
      <ProductsCatalogCTA />
    </div>
  );
}

