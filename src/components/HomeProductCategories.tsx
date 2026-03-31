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
              className="absolute inset-0 w-full h-full object-contain object-center opacity-75"
            />
            <div className="absolute inset-0 bg-white/22" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/58 via-white/26 to-white/8" />

            <div className="relative p-3 sm:p-7 md:p-8 h-full flex flex-col justify-start sm:justify-end pt-14 sm:pt-7 md:pt-8">
              <div className="rounded-xl bg-white/78 backdrop-blur-[2px] px-3 py-2.5 sm:bg-transparent sm:backdrop-blur-0 sm:p-0 flex flex-col h-full">
                <h3 className="text-black text-lg sm:text-2xl md:text-3xl font-bold leading-tight max-w-[20rem] ml-4 sm:ml-5">
                  Industrial Air Coolers
                </h3>

                <div className="mt-auto pt-2">
                  <p className="text-black font-semibold text-sm sm:text-base leading-relaxed">
                    High-capacity cooling for large industrial spaces.
                  </p>
                  <div className="mt-2 sm:mt-6">
                    <Link
                      to="/products?tab=coolers"
                      className="inline-flex items-center gap-2 font-bold text-sm sm:text-base text-black hover:text-black/80 transition-colors"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two small cards */}
          <div className="pcat-item w-full flex flex-col gap-3 md:gap-4 md:max-w-2xl md:mx-0">
            {/* Industrial Fans */}
            <div className="pcat-item relative overflow-hidden rounded-xl sm:rounded-2xl border border-unicore-accent/10 bg-unicore-dark aspect-[16/10] sm:aspect-square lg:w-[78%] lg:mx-auto">
              <img
                src="/industrial-fan.png"
                alt="Industrial fans"
                    className="absolute inset-0 w-full h-full object-contain object-center opacity-75"
              />
              <div className="absolute inset-0 bg-white/22" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/58 via-white/26 to-white/8" />

              <div className="relative p-3 sm:p-5 h-full flex flex-col justify-start sm:justify-end pt-14 sm:pt-5">
                <div className="rounded-xl bg-white/78 backdrop-blur-[2px] px-3 py-2.5 sm:bg-transparent sm:backdrop-blur-0 sm:p-0 flex flex-col h-full">
                  <h3 className="text-black text-lg sm:text-2xl md:text-3xl font-bold leading-tight max-w-[20rem]">
                    Industrial Fans
                  </h3>

                  <div className="mt-auto pt-2">
                    <p className="text-black font-semibold text-sm sm:text-sm leading-relaxed">
                      Heavy-duty fans for strong air circulation.
                    </p>
                    <div className="mt-2.5 sm:mt-4">
                      <Link
                        to="/products?tab=circulators"
                        className="inline-flex items-center gap-2 font-bold text-xs sm:text-sm text-black hover:text-black/80 transition-colors"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Exhaust Fans */}
            <div className="pcat-item relative overflow-hidden rounded-xl sm:rounded-2xl border border-unicore-accent/10 bg-unicore-dark aspect-[16/10] sm:aspect-square md:w-[88%] md:mx-auto">
              <img
                src="/exhaust-fan.png"
                alt="Industrial exhaust fans"
                className="absolute inset-0 w-full h-full object-contain object-center opacity-75"
              />
              <div className="absolute inset-0 bg-white/22" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/58 via-white/26 to-white/8" />

              <div className="relative p-3 sm:p-5 h-full flex flex-col justify-start sm:justify-end pt-14 sm:pt-5">
                <div className="rounded-xl bg-white/78 backdrop-blur-[2px] px-3 py-2.5 sm:bg-transparent sm:backdrop-blur-0 sm:p-0 flex flex-col h-full">
                  <h3 className="text-black text-lg sm:text-2xl md:text-3xl font-bold leading-tight max-w-[20rem]">
                    Exhaust Fans
                  </h3>

                  <div className="mt-auto pt-2">
                    <p className="text-black font-semibold text-sm sm:text-sm leading-relaxed">
                      Efficient ventilation for heat and air control.
                    </p>
                    <div className="mt-2.5 sm:mt-4">
                      <Link
                        to="/products?tab=exhaust"
                        className="inline-flex items-center gap-2 font-bold text-xs sm:text-sm text-black hover:text-black/80 transition-colors"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
