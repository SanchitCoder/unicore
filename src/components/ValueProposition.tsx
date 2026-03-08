import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { Award, TrendingUp, DollarSign, Network, Shield, Handshake } from 'lucide-react';

const features = [
  { icon: Award, title: '25+ Years of Manufacturing Expertise' },
  { icon: TrendingUp, title: 'Scalable Bulk Supply Capacity' },
  { icon: DollarSign, title: 'Competitive Pricing for Large Orders' },
  { icon: Network, title: 'Strong Production & Distribution Network' },
  { icon: Shield, title: 'Built for Heavy-Duty Industrial Use' },
  { icon: Handshake, title: 'Reliable Long-Term B2B Partnerships' },
];

export default function ValueProposition() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.vp-item'), {
              translateY: { to: 0, from: 28 },
              opacity: { to: 1, from: 0 },
              scale: { to: 1, from: 0.98 },
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

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="vp-item text-3xl md:text-4xl font-bold text-slate-800 mb-4 text-center">Why Choose UNICORE</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="vp-item group text-center md:text-left p-6 rounded-2xl border border-transparent hover:border-teal-400/50 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-teal-500 bg-white text-slate-800 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-teal-600 transition-colors duration-300">{item.title}</h3>
              </div>
            );
          })}
        </div>
        <p className="vp-item text-slate-600 text-lg text-center max-w-3xl mx-auto">
          UNICORE is structured to support businesses that require performance, durability, and consistent bulk supply.
        </p>
      </div>
    </section>
  );
}
