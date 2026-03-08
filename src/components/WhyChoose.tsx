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
    <section ref={sectionRef} className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-gradient-to-b from-unicore-dark-light to-unicore-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-2 sm:mb-3">Why Choose UNICORE</h2>
          <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-unicore-accent to-unicore-dark-light mx-auto mb-3 sm:mb-4"></div>
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-normal max-w-2xl mx-auto px-1">
            Your trusted partner for industrial cooling and ventilation solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-item group relative bg-gradient-to-br from-unicore-dark-light/60 to-unicore-dark/60 rounded-xl p-4 sm:p-5 border border-unicore-accent/20 hover:border-unicore-accent transition-all duration-500 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-unicore-accent/0 to-unicore-accent/0 group-hover:from-unicore-accent/5 group-hover:to-unicore-dark-light/5 rounded-xl transition-all duration-500"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-gradient-to-br from-unicore-accent/20 to-unicore-dark-light/20 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Icon className="w-10 h-10 text-unicore-accent" />
                  </div>

                  <h3 className="text-lg font-semibold text-white group-hover:text-unicore-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-unicore-accent to-unicore-dark-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
