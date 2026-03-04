import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { Check } from 'lucide-react';

const industries = [
  { title: 'Manufacturing Units' },
  { title: 'Warehouses & Logistics Centers' },
  { title: 'Industrial Workshops' },
  { title: 'Construction Sites' },
  { title: 'Commercial & Institutional Facilities' },
];

export default function ManufacturingExcellence() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.mfg-item'), {
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
    <section id="manufacturing" ref={sectionRef} className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="mfg-item">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Industries We Serve</h2>
          </div>
          <div className="mfg-item flex items-center">
            <p className="text-slate-600 text-lg">
              Our industrial cooling and ventilation systems are widely used in:
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="mfg-item group rounded-2xl overflow-hidden shadow-xl border border-slate-200 hover:border-teal-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="aspect-[4/3] relative bg-slate-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <img src="/industries-we-serve.png" alt="Industries we serve" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>

          <div className="mfg-item space-y-6">
            {industries.map((item, i) => (
              <div
                key={i}
                className="group flex gap-4 p-4 rounded-xl border border-slate-200 hover:border-teal-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-800 group-hover:text-teal-600 transition-colors duration-300">{item.title}</h3>
                </div>
                <span className="text-slate-400 self-center group-hover:text-teal-500 group-hover:translate-x-1 transition-all duration-300">→</span>
              </div>
            ))}
          </div>
        </div>
        <p className="mfg-item text-slate-600 text-lg mt-8 max-w-3xl">
          We understand operational challenges in large-scale environments and provide solutions designed for continuous performance.
        </p>
      </div>
    </section>
  );
}
