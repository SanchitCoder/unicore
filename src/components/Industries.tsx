import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { Factory, Warehouse, Wrench, HardHat, Building2 } from 'lucide-react';

const industries = [
  {
    icon: Factory,
    title: 'Manufacturing Units',
  },
  {
    icon: Warehouse,
    title: 'Warehouses & Logistics Centers',
  },
  {
    icon: Wrench,
    title: 'Industrial Workshops',
  },
  {
    icon: HardHat,
    title: 'Construction Sites',
  },
  {
    icon: Building2,
    title: 'Commercial & Institutional Facilities',
  },
];

export default function Industries() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.industry-box'), {
              translateY: { to: 0, from: 50 },
              opacity: { to: 1, from: 0 },
              duration: 800,
              delay: stagger(120),
              ease: 'out-expo',
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-unicore-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-2 sm:mb-3">Industries We Serve</h2>
          <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-unicore-accent to-unicore-dark-light mx-auto mb-3 sm:mb-4"></div>
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-normal max-w-2xl mx-auto px-1">
            Delivering specialized cooling and ventilation solutions across diverse industrial sectors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="industry-box group relative bg-gradient-to-br from-unicore-dark-light/80 to-unicore-dark/50 rounded-xl p-4 sm:p-5 border-b-4 border-transparent hover:border-unicore-accent transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-unicore-accent/0 to-unicore-accent/0 group-hover:from-unicore-accent/10 group-hover:to-transparent transition-all duration-500"></div>

                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-unicore-accent/30 to-unicore-dark-light/30 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon className="w-8 h-8 text-unicore-accent" />
                  </div>

                  <h3 className="text-xl font-semibold text-white group-hover:text-unicore-accent transition-colors duration-300 flex-1">
                    {industry.title}
                  </h3>
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-unicore-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
