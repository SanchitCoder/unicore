import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { BadgeCheck, Globe2, Settings } from 'lucide-react';

const items = [
  {
    icon: Settings,
    title: 'Precision Engineering',
    description:
      'Advanced manufacturing processes and rigorous quality control ensure every product meets the highest industry standards for performance and durability.',
  },
  {
    icon: BadgeCheck,
    title: 'ISO Certified Manufacturing',
    description:
      'Our facilities maintain international quality certifications, demonstrating our commitment to excellence in every aspect of production and testing.',
  },
  {
    icon: Globe2,
    title: 'Worldwide Service Network',
    description:
      'Comprehensive support infrastructure spanning 50+ countries ensures rapid response times and reliable after-sales service wherever you operate.',
  },
] as const;

export default function HomeAssuranceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.assurance-card'), {
              translateY: { to: 0, from: 24 },
              opacity: { to: 1, from: 0 },
              duration: 550,
              delay: stagger(80),
              ease: 'out-cubic',
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-14 sm:py-16 md:py-20 px-4 sm:px-5 bg-design-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="text-unicore-dark">Why Businesses Choose </span>
            <span className="text-unicore-accent">UNICORE</span>
          </h2>
          <div className="h-1 w-20 bg-unicore-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="assurance-card bg-white rounded-2xl border border-design-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-6 sm:p-8 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-unicore-accent/10 text-unicore-accent mx-auto flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-unicore-dark mb-2.5">{item.title}</h3>
                <p className="text-sm sm:text-base text-design-mid leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
