import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { Building2, Factory, HardHat, Warehouse, Wrench } from 'lucide-react';

const industries = [
  { label: 'Manufacturing Units', Icon: Factory },
  { label: 'Warehouses & Logistics Centers', Icon: Warehouse },
  { label: 'Industrial Workshops', Icon: Wrench },
  { label: 'Construction Sites', Icon: HardHat },
  { label: 'Commercial & Institutional Facilities', Icon: Building2 },
];

export default function HomeIndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.ind-card'), {
              translateY: { to: 0, from: 24 },
              opacity: { to: 1, from: 0 },
              duration: 550,
              delay: stagger(60),
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
    <section ref={sectionRef} className="py-14 sm:py-16 md:py-20 px-4 sm:px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="text-unicore-dark">Industries We </span>
            <span className="text-unicore-accent">Serve</span>
          </h2>
          <div className="h-1 w-20 bg-unicore-accent mx-auto rounded-full mb-4" />
          <p className="text-design-mid text-sm sm:text-base max-w-2xl mx-auto">
            Our industrial cooling and ventilation systems are widely used in demanding, large-scale environments across sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {industries.map(({ label, Icon }) => (
            <div
              key={label}
              className="ind-card bg-white rounded-2xl border border-design-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-5 sm:p-6 flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-unicore-accent/10 text-unicore-accent flex items-center justify-center">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <span className="text-unicore-dark font-semibold text-sm sm:text-base leading-snug">{label}</span>
            </div>
          ))}
        </div>

        <p className="text-design-mid text-sm sm:text-base text-center mt-10 max-w-2xl mx-auto">
          We understand operational challenges in large-scale environments and provide solutions designed for continuous performance.
        </p>
      </div>
    </section>
  );
}
