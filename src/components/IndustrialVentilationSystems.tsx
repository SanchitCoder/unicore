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
    <section id="ventilation" ref={sectionRef} className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-design-bg scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        {/* H1 + intro */}
        <div className="mb-8 md:mb-10">
          <h1 className="ivs-item text-3xl md:text-4xl lg:text-5xl font-semibold text-design-dark mb-4 leading-tight">
            Industrial Ventilation Systems and High-Performance Industrial Fans
          </h1>
          <p className="ivs-item text-lg text-design-mid leading-relaxed mb-4">
            Proper ventilation is essential for maintaining airflow, removing heat, and improving air quality in industrial environments.
          </p>
          <p className="ivs-item text-lg text-design-mid leading-relaxed mb-4">
            UNICORE provides a range of industrial ventilation systems and high-performance fans designed to support large facilities such as factories, warehouses, and workshops.
          </p>
          <p className="ivs-item text-lg text-design-mid leading-relaxed">
            Our products are engineered to deliver powerful air circulation, durability, and reliable performance in demanding industrial conditions.
          </p>
        </div>

        {/* Industrial Exhaust Fans */}
        <div className="ivs-item mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-design-dark mb-3">
            Industrial Exhaust Fans
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <p className="text-design-mid text-lg font-normal leading-relaxed mb-4">
            UNICORE heavy duty exhaust fans are designed to remove hot air, smoke, dust, and humidity from industrial environments.
          </p>
          <p className="text-design-mid font-medium mb-2">Key features include:</p>
          <ul className="space-y-1.5 mb-4">
            {exhaustFanFeatures.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-design-border hover:border-unicore-accent hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                <span className="text-design-mid">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-design-mid text-lg font-normal leading-relaxed">
            These fans help maintain proper air circulation and improve ventilation in large industrial spaces.
          </p>
        </div>

        {/* Air Circulator Fans */}
        <div className="ivs-item mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-design-dark mb-3">
            Air Circulator Fans
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <p className="text-design-mid text-lg font-normal leading-relaxed mb-4">
            UNICORE air circulator fans help distribute airflow evenly across large areas, ensuring consistent ventilation.
          </p>
          <p className="text-design-mid font-medium mb-3">Key benefits include:</p>
          <ul className="space-y-2 mb-6">
            {circulatorBenefits.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-design-border hover:border-unicore-accent hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                <span className="text-design-mid">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-design-mid text-lg font-normal leading-relaxed">
            These fans are widely used in factories, warehouses, and production units where effective air movement is required.
          </p>
        </div>

        {/* Ventilation for Large Industrial Spaces */}
        <div className="ivs-item mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-design-dark mb-3">
            Ventilation for Large Industrial Spaces
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <p className="text-design-mid text-lg font-normal leading-relaxed mb-4">
            Industrial ventilation plays a critical role in maintaining a safe and productive working environment.
          </p>
          <p className="text-design-mid font-medium mb-3">UNICORE ventilation systems help:</p>
          <ul className="space-y-2 mb-6">
            {ventilationHelp.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-design-border hover:border-unicore-accent hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                <span className="text-design-mid">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-design-mid text-lg font-normal leading-relaxed">
            Our ventilation products are designed to support the needs of modern industrial environments.
          </p>
        </div>

        {/* Bulk Orders and Distributor Enquiries */}
        <div className="ivs-item">
          <h2 className="text-2xl md:text-3xl font-semibold text-design-dark mb-4">
            Bulk Orders and Distributor Enquiries
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <p className="text-design-mid text-lg font-normal leading-relaxed mb-4">
            UNICORE supplies industrial fans and ventilation systems in bulk quantities to businesses across multiple industries.
          </p>
          <p className="text-design-mid font-medium mb-3">We work with:</p>
          <ul className="space-y-2 mb-8">
            {bulkPartners.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-design-border hover:border-unicore-accent hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                <span className="text-design-mid">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-design-mid text-lg font-normal leading-relaxed">
            For product details, technical specifications, or bulk supply enquiries, connect with the UNICORE team.
          </p>
        </div>
      </div>
    </section>
  );
}
