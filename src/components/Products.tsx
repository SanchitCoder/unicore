import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { Wind, Fan, Snowflake } from 'lucide-react';

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
    <section id="products" ref={sectionRef} className="py-24 px-6 bg-blue-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Our Product Categories</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="product-card group relative bg-gradient-to-br from-blue-900/60 to-blue-800/40 rounded-2xl p-8 border-2 border-transparent hover:border-green-500 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="mb-6 inline-block p-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-12 h-12 text-green-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {product.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <button className="flex items-center gap-2 text-green-400 font-semibold group-hover:gap-4 transition-all duration-300">
                    Learn More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
