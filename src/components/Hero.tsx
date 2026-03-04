import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const stats = [
  { value: '25+', label: 'Years' },
  { value: '5000+', label: 'Products' },
  { value: 'ISO', label: 'Certified' },
  { value: '50+', label: 'Countries' },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      animate(heroRef.current.querySelectorAll('.hero-text'), {
        translateY: { to: 0, from: 50 },
        opacity: { to: 1, from: 0 },
        duration: 1200,
        delay: stagger(150),
        ease: 'out-expo',
      });
      const statEls = heroRef.current.querySelectorAll('.hero-stat');
      if (statEls.length) {
        setTimeout(() => {
          animate(statEls, {
            translateY: { to: 0, from: 20 },
            opacity: { to: 1, from: 0 },
            duration: 800,
            delay: stagger(70),
            ease: 'out-expo',
          });
        }, 500);
      }
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/your-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/70" aria-hidden />
      </div>

      <div ref={heroRef} className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          Industrial Air coolers and Fans for Large Scale Industrial Application
        </h1>
        <p className="hero-text text-lg md:text-xl text-white/95 mb-10 max-w-2xl">
          High-performance cooling and ventilation systems designed for factories, warehouses, workshops, and commercial facilities across India.
        </p>
        <div className="hero-text flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary-large rounded-lg inline-block text-center">Request Bulk Quote</a>
          <a href="#contact" className="btn-secondary-large rounded-lg inline-block text-center">Become a Distributor</a>
        </div>
      </div>

      <div className="relative z-10 w-full bg-slate-800/90 py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((item, i) => (
            <div key={i} className="hero-stat transition-transform duration-300 hover:scale-105">
              <div className="text-2xl md:text-3xl font-bold text-white">{item.value}</div>
              <div className="text-sm md:text-base text-white/80 uppercase tracking-wide">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
