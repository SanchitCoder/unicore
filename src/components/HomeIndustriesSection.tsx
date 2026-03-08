import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const industries = [
  'Manufacturing Units',
  'Warehouses & Logistics Centers',
  'Industrial Workshops',
  'Construction Sites',
  'Commercial & Institutional Facilities',
];

export default function HomeIndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.ind-item'), {
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
    <section ref={sectionRef} className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="ind-item text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
          Industries We Serve
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mx-auto mb-8" />
        <p className="ind-item text-lg text-slate-600 text-center mb-8">
          Our industrial cooling and ventilation systems are widely used in:
        </p>
        <ul className="ind-item space-y-4 mb-8">
          {industries.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:shadow-md hover:scale-[1.01] transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
        <p className="ind-item text-lg text-slate-600 text-center">
          We understand operational challenges in large-scale environments and provide solutions designed for continuous performance.
        </p>
      </div>
    </section>
  );
}
