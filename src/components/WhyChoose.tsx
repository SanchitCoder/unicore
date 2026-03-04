import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { Award, TrendingUp, DollarSign, Network, Shield, Handshake } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '25+ Years of Manufacturing Expertise',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Bulk Supply Capacity',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing for Large Orders',
  },
  {
    icon: Network,
    title: 'Strong Production & Distribution Network',
  },
  {
    icon: Shield,
    title: 'Built for Heavy-Duty Industrial Use',
  },
  {
    icon: Handshake,
    title: 'Reliable Long-Term B2B Partnerships',
  },
];

export default function WhyChoose() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.feature-item'), {
              translateY: { to: 0, from: 60 },
              opacity: { to: 1, from: 0 },
              scale: { to: 1, from: 0.8 },
              duration: 800,
              delay: stagger(100),
              ease: 'out-elastic(1, .6)',
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
    <section ref={sectionRef} className="py-24 px-6 bg-gradient-to-b from-blue-900 to-blue-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Why Choose UNICORE</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your trusted partner for industrial cooling and ventilation solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-item group relative bg-gradient-to-br from-blue-800/40 to-blue-900/40 rounded-xl p-8 border border-green-500/20 hover:border-green-500 transition-all duration-500 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-blue-500/5 rounded-xl transition-all duration-500"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Icon className="w-10 h-10 text-green-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
