import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { Factory, Warehouse, Wrench, LayoutGrid, Building2 } from 'lucide-react';

const industrySections = [
  {
    icon: Factory,
    title: 'Manufacturing Industries',
    description: 'Factories and manufacturing plants generate significant heat due to machinery and continuous production processes. UNICORE cooling and ventilation systems help improve air circulation, worker comfort, and operational efficiency.',
  },
  {
    icon: Warehouse,
    title: 'Warehouses & Logistics Centers',
    description: 'Large warehouses require proper ventilation to maintain air circulation and reduce heat buildup. UNICORE solutions help create a more comfortable environment for storage operations and workforce productivity.',
  },
  {
    icon: Wrench,
    title: 'Industrial Workshops',
    description: 'Workshops require strong airflow to maintain ventilation and remove heat from machines and tools. UNICORE industrial fans and coolers help maintain consistent airflow across large workshop areas.',
  },
  {
    icon: LayoutGrid,
    title: 'Production & Assembly Units',
    description: 'Assembly lines and production areas require controlled airflow to maintain safe working conditions. UNICORE systems provide reliable ventilation and cooling support for continuous operations.',
  },
  {
    icon: Building2,
    title: 'Commercial & Institutional Facilities',
    description: 'Large commercial spaces and institutions require efficient cooling and ventilation to maintain indoor comfort. UNICORE products help support high airflow requirements for large enclosed areas.',
  },
];

export default function ManufacturingExcellence() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.mfg-item'), {
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
    <section id="manufacturing" ref={sectionRef} className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* H1 + intro */}
        <div className="mb-16 md:mb-20">
          <h1 className="mfg-item text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Industrial Cooling & Ventilation Solutions for Multiple Industries
          </h1>
          <p className="mfg-item text-lg text-slate-600 leading-relaxed mb-4">
            UNICORE provides industrial cooling and ventilation solutions for a wide range of industries where maintaining airflow and temperature control is critical for operations.
          </p>
          <p className="mfg-item text-lg text-slate-600 leading-relaxed">
            Our products are designed to support large industrial facilities, manufacturing environments, and commercial infrastructure.
          </p>
        </div>

        {/* H2 industry cards */}
        <div className="space-y-6">
          {industrySections.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="mfg-item group rounded-2xl p-6 md:p-8 border border-slate-200 bg-white hover:border-teal-400 hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl border-2 border-teal-500 flex items-center justify-center bg-slate-50 group-hover:bg-teal-50/50 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-slate-800 group-hover:text-teal-600 transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                      {item.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
