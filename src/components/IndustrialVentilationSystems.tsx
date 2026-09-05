import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const exhaustFanFeatures = [
  'Powerful airflow performance',
  'Heavy duty motor design',
  'Durable metal construction',
  'High speed ventilation capability',
  'Reliable operation in industrial environments',
];

const circulatorBenefits = [
  'Strong air throw for large spaces',
  'High speed air circulation',
  'Durable metal blades',
  'Designed for industrial environments',
];

const ventilationHelp = [
  'Improve air circulation',
  'Remove heat and humidity',
  'Maintain comfortable working conditions',
  'Support proper airflow across large facilities',
];

const bulkPartners = [
  'Industrial buyers',
  'Facility managers',
  'Contractors',
  'Distributors',
];

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 mb-4">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-design-border hover:border-unicore-accent hover:shadow-md transition-all duration-300"
        >
          <span className="w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
          <span className="text-design-mid">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function IndustrialVentilationSystems() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.ivs-item'), {
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
    <section id="ventilation" ref={sectionRef} className="py-14 sm:py-16 md:py-20 px-4 sm:px-5 bg-design-bg scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Industrial Exhaust Fans */}
        <div className="ivs-item mb-10 md:mb-14 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-unicore-dark mb-3">Industrial Exhaust Fans</h2>
            <div className="h-1 w-20 bg-unicore-accent rounded-full mb-4" />
            <p className="text-design-mid text-base leading-relaxed mb-4">
              UNICORE heavy duty exhaust fans are designed to remove hot air, smoke, dust, and humidity from industrial environments.
            </p>
            <p className="text-design-mid font-semibold mb-2">Key features include:</p>
            <FeatureList items={exhaustFanFeatures} />
            <p className="text-design-mid text-base leading-relaxed">
              These fans help maintain proper air circulation and improve ventilation in large industrial spaces.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-design-border shadow-card-hover order-first md:order-last">
            <img
              src="/products/pure-air-hdef-24/main.jpg"
              alt="UNICORE heavy-duty industrial exhaust fan"
              className="w-full h-64 sm:h-80 object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Air Circulator Fans */}
        <div className="ivs-item mb-10 md:mb-14 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="rounded-3xl overflow-hidden border border-design-border shadow-card-hover">
            <img
              src="/products/aerothrust-600-pedestal-24/main.jpg"
              alt="UNICORE AEROTHRUST air circulator fan"
              className="w-full h-64 sm:h-80 object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-unicore-dark mb-3">Air Circulator Fans</h2>
            <div className="h-1 w-20 bg-unicore-accent rounded-full mb-4" />
            <p className="text-design-mid text-base leading-relaxed mb-4">
              UNICORE air circulator fans help distribute airflow evenly across large areas, ensuring consistent ventilation.
            </p>
            <p className="text-design-mid font-semibold mb-2">Key benefits include:</p>
            <FeatureList items={circulatorBenefits} />
            <p className="text-design-mid text-base leading-relaxed">
              These fans are widely used in factories, warehouses, and production units where effective air movement is required.
            </p>
          </div>
        </div>

        {/* Ventilation for Large Industrial Spaces */}
        <div className="ivs-item mb-10 md:mb-14 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-unicore-dark mb-3">Ventilation for Large Industrial Spaces</h2>
          <div className="h-1 w-20 bg-unicore-accent rounded-full mx-auto mb-4" />
          <p className="text-design-mid text-base leading-relaxed mb-4">
            Industrial ventilation plays a critical role in maintaining a safe and productive working environment.
          </p>
          <p className="text-design-mid font-semibold mb-3">UNICORE ventilation systems help:</p>
          <div className="grid sm:grid-cols-2 gap-3 text-left mb-4">
            {ventilationHelp.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-design-border hover:border-unicore-accent hover:shadow-md transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                <span className="text-design-mid">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-design-mid text-base leading-relaxed">
            Our ventilation products are designed to support the needs of modern industrial environments.
          </p>
        </div>

        {/* Bulk Orders and Distributor Enquiries */}
        <div className="ivs-item max-w-3xl mx-auto rounded-3xl bg-white border border-design-border shadow-card p-6 sm:p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-unicore-dark mb-3">Bulk Orders and Distributor Enquiries</h2>
          <div className="h-1 w-20 bg-unicore-accent rounded-full mx-auto mb-4" />
          <p className="text-design-mid text-base leading-relaxed mb-4">
            UNICORE supplies industrial fans and ventilation systems in bulk quantities to businesses across multiple industries.
          </p>
          <p className="text-design-mid font-semibold mb-3">We work with:</p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {bulkPartners.map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-unicore-accent/10 text-unicore-dark text-sm font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-design-mid text-base leading-relaxed">
            For product details, technical specifications, or bulk supply enquiries, connect with the UNICORE team.
          </p>
        </div>
      </div>
    </section>
  );
}
