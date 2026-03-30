import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const industrySections = [
  {
    title: 'Manufacturing Industries',
    description: 'Factories and manufacturing plants generate significant heat due to machinery and continuous production processes. UNICORE cooling and ventilation systems help improve air circulation, worker comfort, and operational efficiency.',
    imageSrc: '/manufacturing-industries.jpeg',
    imageAlt: 'Manufacturing facility',
  },
  {
    title: 'Warehouses & Logistics Centers',
    description: 'Large warehouses require proper ventilation to maintain air circulation and reduce heat buildup. UNICORE solutions help create a more comfortable environment for storage operations and workforce productivity.',
    imageSrc: '/warehouses.jpg',
    imageAlt: 'Warehouse and logistics',
  },
  {
    title: 'Industrial Workshops',
    description: 'Workshops require strong airflow to maintain ventilation and remove heat from machines and tools. UNICORE industrial fans and coolers help maintain consistent airflow across large workshop areas.',
    imageSrc: '/workshop.webp',
    imageAlt: 'Industrial workshop',
  },
  {
    title: 'Production & Assembly Units',
    description: 'Assembly lines and production areas require controlled airflow to maintain safe working conditions. UNICORE systems provide reliable ventilation and cooling support for continuous operations.',
    imageSrc: '/production-unit.jpeg',
    imageAlt: 'Production and assembly',
  },
  {
    title: 'Commercial & Institutional Facilities',
    description: 'Large commercial spaces and institutions require efficient cooling and ventilation to maintain indoor comfort. UNICORE products help support high airflow requirements for large enclosed areas.',
    imageSrc: '/industries-we-serve.png',
    imageAlt: 'Commercial facilities',
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
        <div className="mb-10 md:mb-12">
          <h1 className="mfg-item text-3xl md:text-4xl lg:text-5xl font-bold text-design-dark mb-4 leading-tight tracking-tight">
            Industrial Cooling & Ventilation Solutions for Multiple Industries
          </h1>
          <p className="mfg-item text-lg text-design-mid font-normal leading-relaxed mb-4">
            UNICORE provides industrial cooling and ventilation solutions for a wide range of industries where maintaining airflow and temperature control is critical for operations.
          </p>
          <p className="mfg-item text-lg text-design-mid font-normal leading-relaxed">
            Our products are designed to support large industrial facilities, manufacturing environments, and commercial infrastructure.
          </p>
        </div>

        {/* H2 industry cards with images - alternate left/right */}
        <div className="space-y-8">
          {industrySections.map((item, i) => (
            <div
              key={i}
              className="mfg-item group rounded-2xl overflow-hidden border border-design-border bg-white shadow-card hover:border-unicore-accent/50 hover:shadow-card-hover transition-all duration-300"
            >
              <div className={`flex flex-col sm:flex-row ${i % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}>
                <div className="sm:w-2/5 lg:w-2/5 flex-shrink-0">
                  <div className="aspect-[4/3] w-full bg-design-bg">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center">
                  <h2 className="text-xl md:text-2xl font-semibold text-design-dark mb-3 group-hover:text-unicore-accent transition-colors duration-300">
                    {item.title}
                  </h2>
                  <p className="text-design-mid font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
