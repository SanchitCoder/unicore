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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start">
          {/* Big card */}
          <div className="pcat-item relative overflow-hidden rounded-2xl border border-unicore-accent/10 bg-unicore-dark aspect-[4/3] sm:aspect-square">
            <img
              src="/energy-efficient-cooler.png"
              alt="Industrial Air Coolers"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-unicore-dark/95 via-unicore-dark/30 to-transparent" />

            <div className="relative p-5 sm:p-7 md:p-8 h-full flex flex-col justify-end">
              <div className="text-white/60 uppercase tracking-widest text-xs mb-3">
                COOLING SYSTEMS
              </div>
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight max-w-[20rem]">
                Industrial Air Coolers
              </h3>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed mt-3 line-clamp-3">
                High-capacity cooling systems designed for factories, warehouses, and large industrial spaces. Built for powerful airflow, wide coverage, and reliable performance in demanding environments.
              </p>
              <div className="mt-4 sm:mt-6">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 font-semibold text-unicore-accent hover:text-unicore-accent/90 transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>

          {/* Two small cards */}
          <div className="pcat-item flex flex-col gap-4 md:max-w-2xl mx-auto md:mx-0">
            {/* Industrial Fans */}
            <div className="pcat-item group rounded-xl sm:rounded-2xl border border-design-border bg-white overflow-hidden shadow-card hover:border-unicore-accent/40 transition-all duration-300">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="w-full sm:w-5/12 bg-design-bg overflow-hidden sm:h-full sm:p-4 p-4 aspect-[4/3] flex items-center justify-center">
                  <img
                    src="/industrial-coolers-fans.png"
                    alt="Exhaust fans"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                  <div className="text-unicore-accent uppercase tracking-widest text-xs font-semibold mb-2">
                    Exhaust Fans
                  </div>
                  <h4 className="text-design-dark font-bold text-base sm:text-lg md:text-xl mb-2 group-hover:text-unicore-accent transition-colors">
                    Exhaust Fans
                  </h4>
                  <p className="text-design-mid text-sm leading-relaxed mb-4 line-clamp-2">
                    Industrial exhaust fans designed to remove heat, smoke, dust, and humidity from large facilities. Built to ensure effective ventilation and improved air quality in demanding environments.
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 text-unicore-accent font-semibold text-sm mt-auto"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Exhaust Fans */}
            <div className="pcat-item group rounded-xl sm:rounded-2xl border border-design-border bg-white overflow-hidden shadow-card hover:border-unicore-accent/40 transition-all duration-300">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="w-full sm:w-5/12 bg-design-bg overflow-hidden sm:h-full sm:p-4 p-4 aspect-[4/3] flex items-center justify-center">
                  <img
                    src="/industrial-coolers-fans.png"
                    alt="Exhaust fans"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                  <div className="text-unicore-accent uppercase tracking-widest text-xs font-semibold mb-2">
                    Exhaust Fans
                  </div>
                  <h4 className="text-design-dark font-bold text-base sm:text-lg md:text-xl mb-2 group-hover:text-unicore-accent transition-colors">
                    Exhaust Fans
                  </h4>
                  <p className="text-design-mid text-sm leading-relaxed mb-4 line-clamp-2">
                    Industrial exhaust fans designed to remove heat, smoke, dust, and humidity from large facilities. Built to ensure effective ventilation and improved air quality in demanding environments.
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 text-unicore-accent font-semibold text-sm mt-auto"
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
