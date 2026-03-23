import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (!tab) return;
    const normalized = tab.toLowerCase() as typeof activeTab;
    if (['all', 'exhaust', 'farrata', 'circulators', 'coolers'].includes(normalized)) {
      setActiveTab(normalized);
    }
  }, [searchParams]);

  useEffect(() => {
    // Scroll into view when tab changes via footer links / query params.
    // This ensures users land at the top of the product cards section.
    const t = window.setTimeout(() => {
      categoryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
    return () => window.clearTimeout(t);
  }, [activeTab]);

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
        <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-x-4 sm:gap-x-6 gap-y-3 overflow-x-auto pb-1">
          {tabs.map((t) => {
            const selected = t.key === activeTab;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => {
                  setActiveTab(t.key as typeof activeTab);
                  if (t.key === 'all') {
                    setSearchParams({});
                  } else {
                    setSearchParams({ tab: t.key });
                  }
                }}
                className={`px-4 sm:px-7 lg:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold leading-none whitespace-nowrap transition-colors duration-200 ${
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

      <div ref={categoryRef}>
        <ProductCategorySection title={category.title} cards={category.cards} />
      </div>
      <ProductsCatalogCTA />
    </div>
  );
}

