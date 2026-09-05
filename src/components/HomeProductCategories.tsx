import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animate, stagger } from 'animejs';
import { ArrowRight } from 'lucide-react';

const categories = [
  { label: 'Industrial Coolers', image: '/products/airmaxx/main.jpg', tab: 'coolers' },
  { label: 'Exhaust Fans', image: '/products/pure-air-hdef-18/main.jpg', tab: 'exhaust' },
  { label: 'Farrata Fans', image: '/products/air-jet-16/main.jpg', tab: 'farrata' },
  { label: 'Wall Fans', image: '/products/metawing-16-wall/main.jpg', tab: 'wall' },
  { label: 'Air Circulators', image: '/products/aerothrust-450-pedestal-18/main.jpg', tab: 'circulators' },
  { label: 'Duct Coolers', image: '/products/go-cool-800/main.jpg', tab: 'duct-coolers' },
];

export default function HomeProductCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.cat-card'), {
              translateY: { to: 0, from: 24 },
              opacity: { to: 1, from: 0 },
              duration: 500,
              delay: stagger(60),
              ease: 'out-cubic',
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-14 sm:py-16 md:py-20 px-4 sm:px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 leading-tight">
          <span className="text-unicore-dark">Complete Range of </span>
          <span className="text-unicore-dark-light">Ventilation</span>{' '}
          <span className="text-unicore-accent">Solutions</span>
        </h2>
        <div className="h-1 w-20 bg-unicore-accent mx-auto mb-4 rounded-full" />
        <p className="text-design-mid text-center text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-12">
          Engineered to deliver performance, efficiency and reliability in every environment.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((c) => (
            <Link
              key={c.label}
              to={c.tab ? `/products?tab=${c.tab}` : '/products'}
              className="cat-card group flex flex-col rounded-2xl border border-design-border bg-white p-3 sm:p-4 hover:border-unicore-accent/50 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="aspect-square bg-design-bg rounded-xl overflow-hidden mb-3">
                <img
                  src={c.image}
                  alt={c.label}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs sm:text-sm font-bold text-unicore-dark leading-snug">{c.label}</span>
                <ArrowRight className="w-4 h-4 text-unicore-accent shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
