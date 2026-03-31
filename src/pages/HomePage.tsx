import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import IntroLoader from '../components/IntroLoader';
import Hero from '../components/Hero';
import About from '../components/About';
import HomeProductCategories from '../components/HomeProductCategories';
import HomeAssuranceSection from '../components/HomeAssuranceSection';
import ProductsIndustryExcellenceSection from '../components/products/ProductsIndustryExcellenceSection';
import HomeIndustriesSection from '../components/HomeIndustriesSection';
import CTA from '../components/CTA';
import Layout from '../components/Layout';

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();
  const statsBannerRef = useRef<HTMLElement>(null);
  const stats = useMemo(
    () => [
      { value: '25+', label: 'Years', target: 25, suffix: '+' },
      { value: '5000+', label: 'Products', target: 5000, suffix: '+' },
      { value: 'ISO', label: 'Certified', target: null, suffix: '' },
      { value: '50+', label: 'Countries', target: 50, suffix: '+' },
    ],
    []
  );

  const initialAnimatedValues = useMemo(
    () => stats.map((s) => (typeof s.target === 'number' ? 0 : s.value)),
    [stats]
  );
  const [animatedValues, setAnimatedValues] = useState(initialAnimatedValues);

  useEffect(() => {
    if (showIntro) return;
    const hash = location.hash.slice(1) || window.location.hash.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150);
    }
  }, [showIntro, location.hash]);

  useEffect(() => {
    if (showIntro) return;
    const el = statsBannerRef.current;
    if (!el) return;

    let rafId = 0;
    let observer: IntersectionObserver | null = null;

    const startAnimation = () => {
      const durationMs = 1400;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setAnimatedValues(
          stats.map((item) => {
            if (typeof item.target !== 'number') return item.value;
            return Math.round(item.target * eased).toString();
          })
        );

        if (progress < 1) {
          rafId = window.requestAnimationFrame(tick);
        }
      };

      // Reset to 0 before counting so it animates from the start.
      setAnimatedValues(initialAnimatedValues);
      rafId = window.requestAnimationFrame(tick);
    };

    observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        startAnimation();
        observer?.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(el);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, [showIntro, stats, initialAnimatedValues]);

  if (showIntro) {
    return (
      <>
        <IntroLoader onComplete={() => setShowIntro(false)} />
        <div className="min-h-screen bg-white" aria-hidden="true" />
      </>
    );
  }

  return (
    <Layout>
      <Hero />
      <About />
      <HomeProductCategories />
      <HomeAssuranceSection />
      <section ref={statsBannerRef} className="w-full bg-unicore-dark/90 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
          {stats.map((item, index) => (
            <div key={item.label} className="transition-transform duration-300 hover:scale-105">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                {typeof item.target === 'number' ? `${animatedValues[index]}${item.suffix}` : item.value}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-white/80 uppercase tracking-wide">{item.label}</div>
            </div>
          ))}
        </div>
      </section>
      <ProductsIndustryExcellenceSection imageSrc="/manufacturing-excellence-home.png" />
      <HomeIndustriesSection />
      <CTA />
    </Layout>
  );
}
