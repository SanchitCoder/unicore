import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductsCatalogHero from './ProductsCatalogHero';
import ProductCategorySection from './ProductCategorySection';
import ProductsCatalogCTA from './ProductsCatalogCTA';
import {
  allProductsCards,
  exhaustFanCards,
  farrataFanCards,
  wallFanCards,
  airCirculatorCards,
  ductCoolerCards,
  airCoolerCards,
  centrifugalFanCards,
} from '../../data/productsCatalog';

type TabKey = 'all' | 'exhaust' | 'farrata' | 'wall' | 'circulators' | 'duct-coolers' | 'coolers' | 'centrifugal';

const TAB_KEYS: TabKey[] = ['all', 'exhaust', 'farrata', 'wall', 'circulators', 'duct-coolers', 'coolers', 'centrifugal'];

export default function ProductsCatalogLayout() {
  const tabs = useMemo(
    () => [
      { key: 'all', label: 'All Products' },
      { key: 'exhaust', label: 'Exhaust Fans' },
      { key: 'farrata', label: 'Farrata Fans' },
      { key: 'wall', label: 'Wall Fans' },
      { key: 'circulators', label: 'Air Circulators' },
      { key: 'duct-coolers', label: 'Duct Coolers' },
      { key: 'coolers', label: 'Air Coolers' },
      { key: 'centrifugal', label: 'Centrifugal Fans' },
    ] satisfies { key: TabKey; label: string }[],
    []
  );
  const [activeTab, setActiveTab] = useState<TabKey>('all');
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (!tab) return;
    const normalized = tab.toLowerCase() as TabKey;
    if (TAB_KEYS.includes(normalized)) {
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
    if (activeTab === 'wall') {
      return { title: 'Wall Fans', cards: wallFanCards };
    }
    if (activeTab === 'circulators') {
      return { title: 'Air Circulators', cards: airCirculatorCards };
    }
    if (activeTab === 'duct-coolers') {
      return { title: 'Duct Coolers', cards: ductCoolerCards };
    }
    if (activeTab === 'coolers') {
      return { title: 'Air Coolers', cards: airCoolerCards };
    }
    if (activeTab === 'centrifugal') {
      return { title: 'Centrifugal Fans', cards: centrifugalFanCards };
    }
    return { title: 'All Products', cards: allProductsCards };
  }, [activeTab]);

  return (
    <div className="w-full">
      <ProductsCatalogHero />

      {/* Category navigation tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-5 -mt-2 sm:-mt-3 mb-10 relative z-20 overflow-visible">
        <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-x-3 sm:gap-x-6 gap-y-3 overflow-x-auto pb-1">
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
                className={`px-6 sm:px-7 lg:px-8 py-3.5 sm:py-3 rounded-full text-[1rem] sm:text-base font-semibold leading-none whitespace-nowrap border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-unicore-accent/40 transition-all duration-200 ${
                  selected
                    ? 'bg-unicore-dark text-white border-unicore-accent shadow-[0_0_0_2px_rgba(46,203,182,0.22)]'
                    : 'bg-white text-unicore-accent border-unicore-accent/55 hover:bg-unicore-accent/10 hover:border-unicore-accent'
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

