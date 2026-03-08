import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animate, stagger } from 'animejs';
import { Package, Wind, Factory, Thermometer } from 'lucide-react';

const exploreLinks = [
  { to: '/products', title: 'Products', description: 'Industrial cooling & ventilation product range', icon: Package },
  { to: '/ventilation', title: 'Industrial Ventilation Systems', description: 'High-performance fans & ventilation', icon: Wind },
  { to: '/industries', title: 'Industries we serve', description: 'Solutions for multiple industries', icon: Factory },
  { to: '/contact', title: 'Industrial Cooling Solutions', description: 'Cooling solutions & contact', icon: Thermometer },
];

export default function ExploreSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.explore-item'), {
              translateY: { to: 0, from: 40 },
              opacity: { to: 1, from: 0 },
              duration: 800,
              delay: stagger(100),
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
    <section ref={sectionRef} className="py-20 md:py-28 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="explore-item text-3xl md:text-4xl font-bold text-slate-800 mb-4 text-center">
          Explore UNICORE
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mx-auto mb-12" />
        <p className="explore-item text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12">
          Discover our products, ventilation systems, industries we serve, and cooling solutions.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exploreLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={i}
                to={item.to}
                className="explore-item group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl border-2 border-teal-500 text-slate-800 mb-4 group-hover:bg-teal-50 transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-teal-600 font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                  Learn more →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
