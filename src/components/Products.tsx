import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { Wind, Fan, Snowflake } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'Industrial Air Coolers',
    icon: Wind,
    description: 'Heavy-duty evaporative cooling systems designed for large industrial spaces, providing efficient temperature control in demanding environments.',
  },
  {
    title: 'Industrial Fans',
    icon: Fan,
    description: 'High-performance ventilation fans built for continuous operation in factories, warehouses, and manufacturing facilities.',
  },
  {
    title: 'Commercial Cooling Systems',
    icon: Snowflake,
    description: 'Comprehensive cooling solutions for commercial establishments, designed to handle high-capacity requirements with energy efficiency.',
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.product-card'), {
              translateY: { to: 0, from: 80 },
              opacity: { to: 1, from: 0 },
              scale: { to: 1, from: 0.9 },
              duration: 1000,
              delay: stagger(200),
              ease: 'out-expo',
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-unicore-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-2 sm:mb-3">Our Product Categories</h2>
          <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-unicore-accent to-unicore-dark-light mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="product-card group relative bg-gradient-to-br from-unicore-dark-light/80 to-unicore-dark/60 rounded-xl p-4 sm:p-5 border-2 border-transparent hover:border-unicore-accent transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-unicore-accent/0 to-unicore-accent/0 group-hover:from-unicore-accent/10 group-hover:to-unicore-dark-light/10 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="mb-4 inline-block p-3 bg-gradient-to-br from-unicore-accent/20 to-unicore-dark-light/20 rounded-xl group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-12 h-12 text-unicore-accent" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 group-hover:text-unicore-accent transition-colors duration-300">
                    {product.title}
                  </h3>

                  <p className="text-white/90 font-normal mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <Link to="/contact" className="flex items-center gap-2 text-unicore-accent font-semibold group-hover:gap-4 transition-all duration-300">
                    Learn More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-unicore-accent/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
