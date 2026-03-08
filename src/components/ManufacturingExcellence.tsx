import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const industrySections = [
  {
    title: 'Manufacturing Industries',
    description: 'Factories and manufacturing plants generate significant heat due to machinery and continuous production processes. UNICORE cooling and ventilation systems help improve air circulation, worker comfort, and operational efficiency.',
  },
  {
    title: 'Warehouses & Logistics Centers',
    description: 'Large warehouses require proper ventilation to maintain air circulation and reduce heat buildup. UNICORE solutions help create a more comfortable environment for storage operations and workforce productivity.',
  },
  {
    title: 'Industrial Workshops',
    description: 'Workshops require strong airflow to maintain ventilation and remove heat from machines and tools. UNICORE industrial fans and coolers help maintain consistent airflow across large workshop areas.',
  },
  {
    title: 'Production & Assembly Units',
    description: 'Assembly lines and production areas require controlled airflow to maintain safe working conditions. UNICORE systems provide reliable ventilation and cooling support for continuous operations.',
  },
  {
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
    <section id="manufacturing" ref={sectionRef} className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* H1 + intro */}
        <div className="mb-8 md:mb-10">
          <h1 className="mfg-item text-3xl md:text-4xl lg:text-5xl font-bold text-design-dark mb-4 leading-tight">
            Industrial Cooling & Ventilation Solutions for Multiple Industries
          </h1>
          <p className="mfg-item text-lg text-design-mid leading-relaxed mb-4">
            UNICORE provides industrial cooling and ventilation solutions for a wide range of industries where maintaining airflow and temperature control is critical for operations.
          </p>
          <p className="mfg-item text-lg text-design-mid leading-relaxed">
            Our products are designed to support large industrial facilities, manufacturing environments, and commercial infrastructure.
          </p>
        </div>

        {/* H2 industry cards */}
        <div className="space-y-6">
          {industrySections.map((item, i) => (
            <div
              key={i}
              className="mfg-item group rounded-xl p-4 sm:p-5 border border-design-border bg-white hover:border-unicore-accent hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
            >
              <h2 className="text-xl md:text-2xl font-bold text-design-dark mb-3 group-hover:text-unicore-accent transition-colors duration-300">
                {item.title}
              </h2>
              <p className="text-design-mid leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
