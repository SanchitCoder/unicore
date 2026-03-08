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
    <section ref={sectionRef} className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-design-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="explore-item text-3xl md:text-4xl font-bold text-design-dark mb-4 text-center">
          Explore UNICORE
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mx-auto mb-4" />
        <p className="explore-item text-lg text-design-mid text-center max-w-2xl mx-auto mb-6">
          Discover our products, ventilation systems, industries we serve, and cooling solutions.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {exploreLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={i}
                to={item.to}
                className="explore-item group block p-4 sm:p-5 rounded-xl bg-white border border-design-border hover:border-unicore-accent hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl border-2 border-unicore-accent text-design-dark mb-4 group-hover:bg-unicore-accent/10 transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-design-dark mb-2 group-hover:text-unicore-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-design-mid text-sm">{item.description}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-unicore-accent font-semibold text-sm group-hover:gap-2 transition-all duration-300">
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
