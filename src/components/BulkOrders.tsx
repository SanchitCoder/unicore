import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const services = [
  'High-volume industrial orders',
  'Project-based supply',
  'Regional distributor partnerships',
  'Structured B2B procurement agreements',
];

export default function BulkOrders() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.bulk-item'), {
              translateY: { to: 0, from: 40 },
              opacity: { to: 1, from: 0 },
              duration: 800,
              delay: stagger(80),
              ease: 'out-expo',
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
    <section id="bulk-orders" ref={sectionRef} className="py-20 md:py-28 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="bulk-item text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
          Bulk Orders & Distributor Opportunities
        </h2>
        <p className="bulk-item text-lg md:text-xl text-slate-600 text-center max-w-3xl mx-auto mb-10">
          Looking for a reliable industrial cooler supplier or industrial fan manufacturer for bulk procurement?
        </p>
        <p className="bulk-item text-slate-700 font-semibold text-center mb-8">UNICORE supports:</p>
        <ul className="bulk-item grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {services.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-slate-600">
              <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="bulk-item text-slate-600 text-center mb-10">
          Connect with our team to discuss bulk pricing and partnership opportunities.
        </p>
        <div className="bulk-item flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary-large rounded-lg inline-block text-center">Submit Bulk Enquiry</a>
          <a href="#contact" className="px-8 py-4 bg-transparent text-slate-800 text-lg font-bold rounded-lg border-2 border-slate-800 hover:bg-slate-800 hover:text-white transition-all duration-300 inline-block text-center">Apply for Distribution</a>
        </div>
      </div>
    </section>
  );
}
