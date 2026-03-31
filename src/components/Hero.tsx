import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';

const stats = [
  { value: '25+', label: 'Years', target: 25, suffix: '+' },
  { value: '5000+', label: 'Products', target: 5000, suffix: '+' },
  { value: 'ISO', label: 'Certified', target: null, suffix: '' },
  { value: '50+', label: 'Countries', target: 50, suffix: '+' },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [animatedValues, setAnimatedValues] = useState<(number | string)[]>(
    stats.map((s) => (typeof s.target === 'number' ? 0 : s.value))
  );

  useEffect(() => {
    if (heroRef.current) {
      animate(heroRef.current.querySelectorAll('.hero-text'), {
        translateY: { to: 0, from: 40 },
        opacity: { to: 1, from: 0 },
        duration: 650,
        delay: stagger(50),
        ease: 'out-cubic',
      });
      const statEls = heroRef.current.querySelectorAll('.hero-stat');
      if (statEls.length) {
        setTimeout(() => {
          animate(statEls, {
            translateY: { to: 0, from: 16 },
            opacity: { to: 1, from: 0 },
            duration: 500,
            delay: stagger(40),
            ease: 'out-cubic',
          });
        }, 300);
      }
    }
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    let rafId = 0;
    let didAnimate = false;

    const startCounter = () => {
      if (didAnimate) return;
      didAnimate = true;
      const durationMs = 1400;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setAnimatedValues(
          stats.map((item) => {
            if (typeof item.target !== 'number') return item.value;
            return Math.round(item.target * eased);
          })
        );
        if (progress < 1) rafId = window.requestAnimationFrame(tick);
      };

      rafId = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          startCounter();
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      observer.disconnect();
    };
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
          <source src="/Unicore_hero_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-unicore-dark/70" aria-hidden />
      </div>

      <div ref={heroRef} className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-5 py-14 sm:py-20 md:py-24">
        <h1 className="hero-text text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-3 leading-tight tracking-tight max-w-5xl drop-shadow-hero">
          Industrial Air Coolers & Industrial Fans for Large-Scale Industrial Applications
        </h1>
        <p className="hero-text text-lg sm:text-lg md:text-xl text-white/95 font-normal mb-4 sm:mb-3 max-w-2xl drop-shadow-hero">
          High-performance cooling and ventilation systems designed for factories, warehouses, workshops, and commercial facilities across India.
        </p>
        <p className="hero-text text-xl sm:text-lg md:text-xl text-white/95 font-normal mb-6 sm:mb-6 max-w-2xl">
          UNICORE delivers reliable bulk supply solutions backed by 25+ years of manufacturing expertise.
        </p>
        <div className="hero-text flex flex-row items-center justify-center gap-3 sm:gap-3 mt-4 sm:mt-0">
          <a
            href="/products"
            className="inline-flex items-center justify-center text-center px-4 sm:px-6 py-2.5 sm:py-3 min-h-[48px] rounded-2xl border border-white/45 text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-colors"
          >
            View Products
          </a>
          <a
            href="/bulk-orders"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-large rounded-2xl inline-block text-center"
          >
            Request Bulk Quote
          </a>
        </div>
      </div>

      <div ref={statsRef} className="relative z-10 w-full bg-unicore-dark/90 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
          {stats.map((item, i) => (
            <div key={item.label} className="hero-stat transition-transform duration-300 hover:scale-105">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                {typeof item.target === 'number' ? `${animatedValues[i]}${item.suffix}` : item.value}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-white/80 uppercase tracking-wide">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
