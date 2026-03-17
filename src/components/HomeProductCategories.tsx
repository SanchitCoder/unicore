import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animate, stagger } from 'animejs';
import { stockImages } from '../lib/stockImages';

const categories = [
  {
    title: 'Industrial Air Coolers',
    description: 'High-capacity cooling systems engineered for large industrial spaces. Designed for efficient airflow, wide coverage, and durable performance in manufacturing units and warehouses.',
    imageSrc: stockImages.cooling,
    imageAlt: 'Industrial air coolers',
  },
  {
    title: 'Industrial Fans',
    description: 'Heavy-duty ventilation solutions built for continuous air circulation and reliable operation in industrial and commercial environments.',
    imageSrc: stockImages.ventilation,
    imageAlt: 'Industrial fans',
  },
  {
    title: 'Commercial Cooling Systems',
    description: 'Advanced cooling and airflow systems developed to support large facilities with consistent and energy-efficient performance.',
    imageSrc: stockImages.commercial,
    imageAlt: 'Commercial cooling systems',
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
    <section ref={sectionRef} className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-design-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="pcat-item text-3xl md:text-4xl font-semibold text-design-dark mb-4 text-center">
          Our Product Categories
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mx-auto mb-6" />
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          {categories.map((item, i) => (
            <div
              key={i}
              className="pcat-item group rounded-xl bg-white border border-design-border overflow-hidden hover:border-unicore-accent hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <div className="aspect-[16/10] max-h-36 w-full bg-design-bg overflow-hidden">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-xl font-semibold text-design-dark mb-3 group-hover:text-unicore-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-design-mid font-normal leading-relaxed mb-4">{item.description}</p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1 text-unicore-accent font-semibold text-sm group-hover:gap-2 transition-all duration-300"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
