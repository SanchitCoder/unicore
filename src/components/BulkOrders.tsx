import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
              translateY: { to: 0, from: 28 },
              opacity: { to: 1, from: 0 },
              duration: 550,
              delay: stagger(40),
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
    <section id="bulk-orders" ref={sectionRef} className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-design-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="bulk-item text-3xl md:text-4xl font-bold text-design-dark mb-4 text-center">
          Bulk Orders & Distributor Opportunities
        </h2>
        <p className="bulk-item text-lg md:text-xl text-design-mid text-center max-w-3xl mx-auto mb-6">
          Looking for a reliable industrial cooler supplier or industrial fan manufacturer for bulk procurement?
        </p>
        <p className="bulk-item text-design-mid font-semibold text-center mb-5">UNICORE supports:</p>
        <ul className="bulk-item grid md:grid-cols-2 gap-3 max-w-2xl mx-auto mb-8">
          {services.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-design-mid">
              <span className="w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="bulk-item text-design-mid text-center mb-6">
          Connect with our team to discuss bulk pricing and partnership opportunities.
        </p>
        <div className="bulk-item flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary-large rounded-lg inline-block text-center">Submit Bulk Enquiry</Link>
          <Link to="/contact" className="px-8 py-4 bg-transparent text-design-dark text-lg font-bold rounded-lg border-2 border-unicore-dark hover:bg-unicore-dark hover:text-white transition-all duration-300 inline-block text-center">Apply for Distribution</Link>
        </div>
      </div>
    </section>
  );
}
