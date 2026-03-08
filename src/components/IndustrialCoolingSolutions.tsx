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
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* H1 + intro */}
        <div className="mb-16 md:mb-20">
          <h1 className="ics-item text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Industrial Cooling Solutions for Factories, Warehouses and Large Facilities
          </h1>
          <p className="ics-item text-lg text-slate-600 leading-relaxed mb-4">
            Maintaining the right temperature and airflow in industrial environments is essential for productivity, equipment performance, and worker comfort.
          </p>
          <p className="ics-item text-lg text-slate-600 leading-relaxed mb-4">
            UNICORE provides reliable industrial cooling solutions designed to cool large spaces such as factories, warehouses, workshops, and production units.
          </p>
          <p className="ics-item text-lg text-slate-600 leading-relaxed">
            Our cooling systems are engineered to deliver high airflow, energy efficiency, and long operational life, making them ideal for demanding industrial environments.
          </p>
        </div>

        {/* Industrial Air Cooling Systems */}
        <div className="ics-item mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Industrial Air Cooling Systems
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mb-6" />
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            UNICORE industrial air coolers are designed to provide powerful cooling for large spaces where traditional cooling systems are not practical.
          </p>
          <p className="text-slate-700 font-semibold mb-3">Key benefits include:</p>
          <ul className="space-y-2 mb-8">
            {airCoolerBenefits.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-700 font-semibold mb-3">These cooling systems are suitable for:</p>
          <ul className="space-y-2">
            {suitableFor.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-600">
                <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Cooling Large Industrial Spaces */}
        <div className="ics-item mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Cooling Large Industrial Spaces
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mb-6" />
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Industrial environments often face challenges such as heat buildup, poor ventilation, and limited airflow. UNICORE cooling solutions help improve working conditions by providing consistent airflow and temperature reduction.
          </p>
          <p className="text-slate-700 font-semibold mb-3">Our systems help:</p>
          <ul className="space-y-2">
            {systemsHelp.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Designed for Industrial Applications */}
        <div className="ics-item mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Designed for Industrial Applications
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mb-6" />
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            UNICORE cooling systems are designed to support a wide range of industrial environments including:
          </p>
          <ul className="space-y-2 mb-6">
            {industrialEnvironments.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-600">
                <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-slate-600 text-lg leading-relaxed">
            Each system is built to deliver consistent cooling performance even in large and demanding spaces.
          </p>
        </div>

        {/* Bulk Supply Capability */}
        <div className="ics-item">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Bulk Supply Capability
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mb-6" />
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            UNICORE specializes in supplying industrial cooling equipment in large quantities to businesses, contractors, and facility managers.
          </p>
          <p className="text-slate-700 font-semibold mb-3">We support:</p>
          <ul className="space-y-2 mb-8">
            {bulkSupport.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-600 text-lg leading-relaxed">
            For product specifications or bulk enquiries, contact our team to discuss your requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
