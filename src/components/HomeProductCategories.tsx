import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animate, stagger } from 'animejs';

const categories = [
  {
    title: 'Industrial Air Coolers',
    description: 'High-capacity cooling systems engineered for large industrial spaces. Designed for efficient airflow, wide coverage, and durable performance in manufacturing units and warehouses.',
  },
  {
    title: 'Industrial Fans',
    description: 'Heavy-duty ventilation solutions built for continuous air circulation and reliable operation in industrial and commercial environments.',
  },
  {
    title: 'Commercial Cooling Systems',
    description: 'Advanced cooling and airflow systems developed to support large facilities with consistent and energy-efficient performance.',
  },
];

export default function HomeProductCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.pcat-item'), {
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
    <section ref={sectionRef} className="py-20 md:py-28 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="pcat-item text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
          Our Product Categories
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mx-auto mb-12" />
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((item, i) => (
            <div
              key={i}
              className="pcat-item group p-6 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">{item.description}</p>
              <Link
                to="/products"
                className="inline-flex items-center gap-1 text-teal-600 font-semibold text-sm group-hover:gap-2 transition-all duration-300"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
