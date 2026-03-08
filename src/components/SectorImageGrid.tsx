import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { ArrowUpRight } from 'lucide-react';

interface SectorCard {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

interface SectorImageGridProps {
  title?: string;
  subtitle?: string;
  sectors: SectorCard[];
  className?: string;
}

export default function SectorImageGrid({
  title = 'Trusted Across Multiple Industrial Sectors',
  subtitle,
  sectors,
  className = '',
}: SectorImageGridProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.sector-card-item'), {
              translateY: { to: 0, from: 24 },
              opacity: { to: 1, from: 0 },
              duration: 500,
              delay: stagger(70),
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
    <section ref={sectionRef} className={`py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-white ${className}`.trim()}>
      <div className="max-w-6xl mx-auto w-full overflow-hidden">
        {title && (
          <h2 className="sector-card-item text-xl sm:text-2xl md:text-3xl font-semibold text-design-dark mb-2 text-center">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="sector-card-item text-design-mid text-sm sm:text-base font-normal text-center mb-4 sm:mb-6 max-w-2xl mx-auto px-1">
            {subtitle}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {sectors.map((sector, i) => (
            <div
              key={i}
              className="sector-card-item group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] min-h-[160px] sm:min-h-[200px] border border-design-border shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={sector.imageSrc}
                alt={sector.imageAlt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-unicore-dark/90 via-unicore-dark/50 to-unicore-dark/30"
                aria-hidden
              />
              <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1">{sector.title}</h3>
                <span className="inline-flex items-center gap-1 text-unicore-accent font-medium text-sm w-fit">
                  <span>Explore</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-unicore-accent/90 flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
