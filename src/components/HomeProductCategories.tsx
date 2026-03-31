import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animate, stagger } from 'animejs';

export default function HomeProductCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.pcat-item'), {
              translateY: { to: 0, from: 28 },
              opacity: { to: 1, from: 0 },
              duration: 550,
              delay: stagger(45),
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
    <section ref={sectionRef} className="pt-8 pb-4 sm:py-12 md:py-14 px-4 sm:px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="pcat-item text-2xl sm:text-3xl md:text-4xl font-semibold text-design-dark mb-4 text-center">
          Our Product Categories
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mx-auto mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 items-start">
          {/* Big card */}
          <div className="pcat-item relative overflow-hidden rounded-xl sm:rounded-2xl border border-unicore-accent/10 bg-unicore-dark aspect-[16/10] sm:aspect-square">
            <img
              src="/industrial-coolers-banner.png"
              alt="Industrial Air Coolers"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-75"
            />
            <div className="absolute inset-0 bg-white/22" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/58 via-white/26 to-white/8" />

            <div className="relative p-4 sm:p-7 md:p-8 h-full flex flex-col justify-end">
              <div className="text-design-mid uppercase tracking-widest text-xs font-semibold mb-3">
                COOLING SYSTEMS
              </div>
              <h3 className="text-design-dark text-lg sm:text-2xl md:text-3xl font-bold leading-tight max-w-[20rem]">
                Industrial Air Coolers
              </h3>
              <p className="text-design-mid text-xs sm:text-base leading-relaxed mt-2 sm:mt-3">
                High-capacity cooling systems designed for factories, warehouses, and large industrial spaces. Built for powerful airflow, wide coverage, and reliable performance in demanding environments.
              </p>
              <div className="mt-3 sm:mt-6">
                <Link
                  to="/products?tab=coolers"
                  className="inline-flex items-center gap-2 font-semibold text-sm sm:text-base text-unicore-accent hover:text-unicore-accent/90 transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>

          {/* Two small cards */}
          <div className="pcat-item flex flex-col gap-3 md:gap-4 md:max-w-2xl mx-auto md:mx-0">
            {/* Industrial Fans */}
            <div className="pcat-item relative overflow-hidden rounded-xl sm:rounded-2xl border border-unicore-accent/10 bg-unicore-dark aspect-[16/9] sm:aspect-[16/8]">
              <img
                src="/industrial-fan.png"
                alt="Industrial fans"
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-75"
              />
              <div className="absolute inset-0 bg-white/22" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/58 via-white/26 to-white/8" />

              <div className="relative p-4 sm:p-5 h-full flex flex-col justify-end">
                <div className="text-design-mid uppercase tracking-widest text-[0.65rem] sm:text-xs font-semibold mb-2">
                  Industrial Fans
                </div>
                <h4 className="text-design-dark text-base sm:text-xl font-bold leading-tight">
                  Industrial Fans
                </h4>
                <p className="text-design-mid text-[0.72rem] sm:text-sm leading-relaxed mt-1.5 sm:mt-2">
                  Heavy-duty fans engineered for strong air circulation in industrial and commercial environments. Designed for continuous operation and efficient airflow across large spaces.
                </p>
                <div className="mt-2.5 sm:mt-4">
                  <Link
                    to="/products?tab=circulators"
                    className="inline-flex items-center gap-2 font-semibold text-xs sm:text-sm text-unicore-accent hover:text-unicore-accent/90 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Exhaust Fans */}
            <div className="pcat-item relative overflow-hidden rounded-xl sm:rounded-2xl border border-unicore-accent/10 bg-unicore-dark aspect-[16/9] sm:aspect-[16/8]">
              <img
                src="/exhaust-fan.png"
                alt="Industrial exhaust fans"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-75"
              />
              <div className="absolute inset-0 bg-white/22" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/58 via-white/26 to-white/8" />

              <div className="relative p-4 sm:p-5 h-full flex flex-col justify-end">
                <div className="text-design-mid uppercase tracking-widest text-[0.65rem] sm:text-xs font-semibold mb-2">
                  Exhaust Fans
                </div>
                <h4 className="text-design-dark text-base sm:text-xl font-bold leading-tight">
                  Exhaust Fans
                </h4>
                <p className="text-design-mid text-[0.72rem] sm:text-sm leading-relaxed mt-1.5 sm:mt-2">
                  Industrial exhaust fans designed to remove heat, smoke, dust, and humidity from large facilities. Built to ensure effective ventilation and improved air quality in demanding environments.
                </p>
                <div className="mt-2.5 sm:mt-4">
                  <Link
                    to="/products?tab=exhaust"
                    className="inline-flex items-center gap-2 font-semibold text-xs sm:text-sm text-unicore-accent hover:text-unicore-accent/90 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
