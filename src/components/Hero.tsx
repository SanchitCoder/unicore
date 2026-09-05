import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Globe2, Hexagon, ShieldCheck } from 'lucide-react';

const stats = [
  { value: '25+', label: 'Years', target: 25, suffix: '+', caption: 'of manufacturing expertise', Icon: ShieldCheck },
  { value: '5000+', label: 'Products', target: 5000, suffix: '+', caption: 'engineered for every need', Icon: Hexagon },
  { value: 'ISO', label: 'Certified', target: null, suffix: '', caption: 'quality you can trust', Icon: Award },
  { value: '50+', label: 'Countries', target: 50, suffix: '+', caption: 'trust Unicore worldwide', Icon: Globe2 },
];

const cutoutMask = {
  WebkitMaskImage: 'radial-gradient(ellipse 62% 68% at 50% 46%, #000 58%, transparent 100%)',
  maskImage: 'radial-gradient(ellipse 62% 68% at 50% 46%, #000 58%, transparent 100%)',
} as const;

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
        delay: stagger(60),
        ease: 'out-cubic',
      });
      animate(heroRef.current.querySelectorAll('.hero-collage-item'), {
        scale: { to: 1, from: 0.85 },
        opacity: { to: 1, from: 0 },
        duration: 700,
        delay: stagger(90, { start: 250 }),
        ease: 'out-back',
      });
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
    <section id="home" className="relative bg-white overflow-hidden">
      <div className="relative overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="/industries-we-serve.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/78 to-white/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
        </div>

        {/* Animated airflow streaks, decorative */}
        <div className="hidden lg:block absolute right-[6%] top-[18%] w-[360px] h-[220px] pointer-events-none" aria-hidden="true">
          <span className="animate-airflow absolute left-0 top-2 h-[3px] w-14 rounded-full bg-gradient-to-r from-transparent via-unicore-accent to-transparent blur-[0.5px]" style={{ animationDelay: '0s' }} />
          <span className="animate-airflow absolute left-0 top-16 h-[3px] w-20 rounded-full bg-gradient-to-r from-transparent via-unicore-accent/80 to-transparent blur-[0.5px]" style={{ animationDelay: '0.9s' }} />
          <span className="animate-airflow absolute left-0 top-32 h-[3px] w-16 rounded-full bg-gradient-to-r from-transparent via-unicore-accent to-transparent blur-[0.5px]" style={{ animationDelay: '1.8s' }} />
        </div>

        <div
          ref={heroRef}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 md:pt-36 pb-20 sm:pb-24 grid lg:grid-cols-2 gap-10 items-center min-h-[600px] sm:min-h-[660px]"
        >
          <div>
            <h1 className="hero-text text-4xl sm:text-5xl md:text-[3.4rem] font-bold text-unicore-dark mb-5 leading-[1.08] tracking-tight">
              Powering Better Air.
              <br />
              Powering{' '}
              <span className="bg-gradient-to-r from-unicore-accent to-unicore-dark-light bg-clip-text text-transparent">
                Better Performance.
              </span>
            </h1>
            <p className="hero-text text-design-mid text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              High-performance cooling and ventilation systems designed for factories, warehouses, workshops, and commercial facilities across India.
            </p>
            <div className="hero-text flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2.5 pl-6 pr-2.5 py-2.5 rounded-full bg-unicore-dark text-white font-semibold text-sm sm:text-base shadow-card hover:bg-unicore-dark-light hover:shadow-card-hover transition-all duration-300"
              >
                View Products
                <span className="grid place-items-center w-8 h-8 rounded-full bg-white/15 group-hover:bg-white/25 group-hover:translate-x-0.5 transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 pl-6 pr-2.5 py-2.5 rounded-full border-2 border-unicore-dark/25 text-unicore-dark font-semibold text-sm sm:text-base hover:border-unicore-accent hover:text-unicore-accent transition-all duration-300"
              >
                Get in Touch
                <span className="grid place-items-center w-8 h-8 rounded-full bg-unicore-dark/8 group-hover:bg-unicore-accent/15 group-hover:translate-x-0.5 transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* Product collage */}
          <div className="hero-text relative hidden lg:block h-[440px]">
            <div
              className="absolute right-[6%] bottom-[6%] w-[380px] h-[380px] rounded-full bg-unicore-accent/12 blur-3xl"
              aria-hidden="true"
            />

            <img
              src="/products/go-cool-800/main.jpg"
              alt="UNICORE duct cooler"
              style={{ ...cutoutMask, '--float-rot': '2deg' } as React.CSSProperties}
              className="hero-collage-item animate-hero-float absolute left-[6%] top-[4%] w-40 xl:w-44 drop-shadow-[0_20px_28px_rgba(26,54,93,0.3)]"
            />
            <img
              src="/products/pure-air-hdef-15/main.jpg"
              alt="UNICORE heavy-duty exhaust fan"
              style={{ ...cutoutMask, '--float-rot': '-2deg' } as React.CSSProperties}
              className="hero-collage-item animate-hero-float absolute right-[30%] top-[2%] w-44 xl:w-52 drop-shadow-[0_20px_30px_rgba(26,54,93,0.3)]"
            />
            <img
              src="/products/coolbreeze/main.jpg"
              alt="UNICORE industrial air cooler"
              style={{ ...cutoutMask, '--float-rot': '3deg' } as React.CSSProperties}
              className="hero-collage-item animate-hero-float absolute right-[0%] bottom-[2%] w-40 xl:w-48 drop-shadow-[0_22px_32px_rgba(26,54,93,0.32)]"
            />
            <img
              src="/products/aerothrust-450-pedestal-18/main.jpg"
              alt="UNICORE air circulator fan"
              style={{ ...cutoutMask, '--float-rot': '-3deg' } as React.CSSProperties}
              className="hero-collage-item animate-hero-float absolute left-[26%] bottom-[0%] w-32 xl:w-36 drop-shadow-[0_16px_24px_rgba(26,54,93,0.28)]"
            />
          </div>
        </div>
      </div>

      {/* Floating stats card */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-12 sm:-mt-16">
        <div
          ref={statsRef}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-card-hover border border-design-border grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-design-border p-5 sm:p-7"
        >
          {stats.map((item, i) => {
            const Icon = item.Icon;
            return (
              <div key={item.label} className="flex flex-col items-center text-center px-3 py-3 sm:py-0">
                <div className="grid place-items-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-unicore-accent/10 text-unicore-accent mb-2.5 sm:mb-3">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-unicore-dark leading-none">
                  {typeof item.target === 'number' ? `${animatedValues[i]}${item.suffix}` : item.value}
                </div>
                <div className="text-[0.7rem] sm:text-xs font-bold text-unicore-dark uppercase tracking-wider mt-1.5">
                  {item.label}
                </div>
                <div className="text-[0.7rem] sm:text-xs text-design-mid mt-1 max-w-[10rem]">{item.caption}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-8 sm:h-12" />
    </section>
  );
}
