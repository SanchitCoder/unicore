import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animate, stagger } from 'animejs';
import { Info } from 'lucide-react';

interface ProductCard {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkTo?: string;
}

interface ProductImageCardsProps {
  title?: string;
  subtitle?: string;
  cards: ProductCard[];
  className?: string;
}

export default function ProductImageCards({
  title = 'Industrial Cooling & Ventilation Equipment',
  subtitle,
  cards,
  className = '',
}: ProductImageCardsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.prod-card-item'), {
              translateY: { to: 0, from: 28 },
              opacity: { to: 1, from: 0 },
              duration: 500,
              delay: stagger(80),
              ease: 'out-cubic',
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-design-bg ${className}`.trim()}>
      <div className="max-w-6xl mx-auto w-full overflow-hidden">
        {title && (
          <h2 className="prod-card-item text-xl sm:text-2xl md:text-3xl font-semibold text-design-dark mb-1 text-center">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="prod-card-item text-design-mid text-sm sm:text-base font-normal text-center mb-4 sm:mb-6 max-w-2xl mx-auto px-1">
            {subtitle}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className="prod-card-item group rounded-2xl bg-white border border-design-border overflow-hidden shadow-md hover:shadow-xl hover:border-unicore-accent/30 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] bg-design-bg overflow-hidden">
                <img
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-unicore-accent flex items-center justify-center">
                  <Info className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-semibold text-design-dark mb-1 group-hover:text-unicore-accent transition-colors">
                  {card.title}
                </h3>
                <p className="text-design-mid text-xs sm:text-sm font-normal leading-relaxed mb-2 line-clamp-3">{card.description}</p>
                {card.linkTo ? (
                  <Link
                    to={card.linkTo}
                    className="inline-flex items-center gap-1 text-unicore-accent font-semibold text-sm hover:underline"
                  >
                    Know more →
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-1 text-unicore-accent font-semibold text-sm">
                    Know more →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
