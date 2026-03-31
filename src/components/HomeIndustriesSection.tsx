import { useEffect, useRef, useState } from 'react';
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
  const [index, setIndex] = useState(0);

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

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i >= industries.length - 1 ? 0 : i + 1));
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={sectionRef} className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="ind-item text-3xl md:text-4xl font-semibold text-design-dark mb-4 text-center">
          Industries We Serve
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mx-auto mb-5" />
        <p className="ind-item text-lg text-design-mid font-normal text-center mb-8">
          Our industrial cooling and ventilation systems are widely used in:
        </p>

        <div className="ind-item relative">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {industries.map((item, i) => (
                <div key={i} className="w-full flex-shrink-0 px-1">
                  <div className="flex items-center justify-center text-center p-5 sm:p-6 rounded-xl bg-design-bg border border-design-border hover:border-unicore-accent hover:shadow-md transition-all duration-300">
                    <span className="text-design-dark font-medium text-lg">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {industries.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? 'bg-unicore-accent scale-125' : 'bg-design-mid/40 hover:bg-design-mid/60'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="ind-item text-lg text-design-mid font-normal text-center mt-8">
          We understand operational challenges in large-scale environments and provide solutions designed for continuous performance.
        </p>
      </div>
    </section>
  );
}
