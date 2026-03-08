import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const airCoolerBenefits = [
  'High air delivery capacity for large industrial areas',
  'Energy-efficient cooling performance',
  'Durable construction for long-term use',
  'Large water tank capacity for extended operation',
  'Designed for continuous industrial usage',
];

const suitableFor = [
  'Manufacturing plants',
  'Warehouses',
  'Assembly units',
  'Workshops',
  'Production facilities',
];

const systemsHelp = [
  'Improve worker comfort',
  'Maintain proper airflow in production areas',
  'Reduce heat accumulation',
  'Enhance ventilation efficiency',
];

const industrialEnvironments = [
  'Manufacturing facilities',
  'Storage warehouses',
  'Engineering workshops',
  'Logistics centers',
  'Industrial plants',
];

const bulkSupport = [
  'Bulk industrial orders',
  'Project-based cooling installations',
  'Distributor partnerships',
  'Supply for large facilities across India',
];

export default function IndustrialCoolingSolutions() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.ics-item'), {
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
    <section id="contact" ref={sectionRef} className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* H1 + intro */}
        <div className="mb-8 md:mb-10">
          <h1 className="ics-item text-3xl md:text-4xl lg:text-5xl font-bold text-design-dark mb-4 leading-tight">
            Industrial Cooling Solutions for Factories, Warehouses and Large Facilities
          </h1>
          <p className="ics-item text-lg text-design-mid leading-relaxed mb-4">
            Maintaining the right temperature and airflow in industrial environments is essential for productivity, equipment performance, and worker comfort.
          </p>
          <p className="ics-item text-lg text-design-mid leading-relaxed mb-4">
            UNICORE provides reliable industrial cooling solutions designed to cool large spaces such as factories, warehouses, workshops, and production units.
          </p>
          <p className="ics-item text-lg text-design-mid leading-relaxed">
            Our cooling systems are engineered to deliver high airflow, energy efficiency, and long operational life, making them ideal for demanding industrial environments.
          </p>
        </div>

        {/* Industrial Air Cooling Systems */}
        <div className="ics-item mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-design-dark mb-3">
            Industrial Air Cooling Systems
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <p className="text-design-mid text-lg leading-relaxed mb-4">
            UNICORE industrial air coolers are designed to provide powerful cooling for large spaces where traditional cooling systems are not practical.
          </p>
          <p className="text-design-mid font-semibold mb-2">Key benefits include:</p>
          <ul className="space-y-1.5 mb-5">
            {airCoolerBenefits.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-design-bg border border-design-border hover:border-unicore-accent hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                <span className="text-design-mid">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-design-mid font-semibold mb-2">These cooling systems are suitable for:</p>
          <ul className="space-y-2">
            {suitableFor.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-design-mid">
                <span className="w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Cooling Large Industrial Spaces */}
        <div className="ics-item mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-design-dark mb-3">
            Cooling Large Industrial Spaces
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <p className="text-design-mid text-lg leading-relaxed mb-4">
            Industrial environments often face challenges such as heat buildup, poor ventilation, and limited airflow. UNICORE cooling solutions help improve working conditions by providing consistent airflow and temperature reduction.
          </p>
          <p className="text-design-mid font-semibold mb-2">Our systems help:</p>
          <ul className="space-y-2">
            {systemsHelp.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-design-bg border border-design-border hover:border-unicore-accent hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                <span className="text-design-mid">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Designed for Industrial Applications */}
        <div className="ics-item mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-design-dark mb-3">
            Designed for Industrial Applications
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <p className="text-design-mid text-lg leading-relaxed mb-4">
            UNICORE cooling systems are designed to support a wide range of industrial environments including:
          </p>
          <ul className="space-y-1.5 mb-4">
            {industrialEnvironments.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-design-mid">
                <span className="w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-design-mid text-lg leading-relaxed">
            Each system is built to deliver consistent cooling performance even in large and demanding spaces.
          </p>
        </div>

        {/* Bulk Supply Capability */}
        <div className="ics-item">
          <h2 className="text-2xl md:text-3xl font-bold text-design-dark mb-3">
            Bulk Supply Capability
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <p className="text-design-mid text-lg leading-relaxed mb-4">
            UNICORE specializes in supplying industrial cooling equipment in large quantities to businesses, contractors, and facility managers.
          </p>
          <p className="text-design-mid font-semibold mb-2">We support:</p>
          <ul className="space-y-1.5 mb-5">
            {bulkSupport.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-design-bg border border-design-border hover:border-unicore-accent hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                <span className="text-design-mid">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-design-mid text-lg leading-relaxed">
            For product specifications or bulk enquiries, contact our team to discuss your requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
