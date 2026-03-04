import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const smallProducts = [
  {
    title: 'Industrial Air Coolers',
    description: 'High-capacity cooling systems engineered for large industrial spaces. Designed for efficient airflow, wide coverage, and durable performance in manufacturing units and warehouses.',
    image: '/energy-efficient-cooler.png',
  },
  {
    title: 'Industrial Fans',
    description: 'Heavy-duty ventilation solutions built for continuous air circulation and reliable operation in industrial and commercial environments.',
    image: '/ceiling-fan.png',
  },
  {
    title: 'Commercial Cooling Systems',
    description: 'Advanced cooling and airflow systems developed to support large facilities with consistent and energy-efficient performance.',
    image: '/commercial-cooling.png',
  },
];

export default function ProductLines() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.product-line-item'), {
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
    <section id="products" ref={sectionRef} className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="product-line-item">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Product Categories
            </h2>
          </div>
          <div className="product-line-item flex items-center">
            <p className="text-slate-600 text-lg">
              UNICORE delivers reliable bulk supply solutions backed by 25+ years of manufacturing expertise.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="product-line-item lg:col-span-1 order-2 lg:order-1 flex flex-col gap-6">
            {smallProducts.map((product, i) => (
              <a
                key={i}
                href="#contact"
                className="group flex gap-4 p-5 bg-white rounded-xl border border-slate-200 hover:border-teal-400 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-lg bg-slate-100 flex-shrink-0 overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-800 mb-1 group-hover:text-teal-600 transition-colors duration-300">{product.title}</h3>
                  <p className="text-slate-600 text-sm mb-2">{product.description}</p>
                  <span className="inline-flex items-center gap-1 text-teal-600 font-semibold text-sm group-hover:gap-2 transition-all duration-300">Learn More →</span>
                </div>
              </a>
            ))}
          </div>

          <div className="product-line-item lg:col-span-2 order-1 lg:order-2">
            <a
              href="#contact"
              className="group block rounded-2xl overflow-hidden shadow-xl border border-slate-200 hover:border-teal-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-[4/5] md:aspect-[3/4] relative bg-slate-200 overflow-hidden">
                <img src="/industrial-coolers-fans.png" alt="Industrial air coolers and industrial fans" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Industrial Air Coolers & Industrial Fans</h3>
                  <ul className="space-y-2 text-white/90 text-sm md:text-base">
                    <li>• High-capacity cooling for large industrial spaces</li>
                    <li>• Heavy-duty ventilation and continuous operation</li>
                    <li>• Built for scale, efficiency, and long-term performance</li>
                  </ul>
                  <span className="inline-block mt-4 text-white font-semibold border-b border-white/80 group-hover:border-white group-hover:gap-2 inline-flex items-center gap-1 transition-all duration-300">View all products →</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
