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
    <section ref={sectionRef} className="py-24 px-6 bg-blue-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Industries We Serve</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Delivering specialized cooling and ventilation solutions across diverse industrial sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="industry-box group relative bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-xl p-8 border-b-4 border-transparent hover:border-green-500 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-transparent transition-all duration-500"></div>

                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-green-500/30 to-blue-500/30 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon className="w-8 h-8 text-green-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 flex-1">
                    {industry.title}
                  </h3>
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
