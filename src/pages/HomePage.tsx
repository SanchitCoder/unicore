import { useState, useEffect } from 'react';
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
  const stats = [
    { value: '25+', label: 'Years' },
    { value: '5000+', label: 'Products' },
    { value: 'ISO', label: 'Certified' },
    { value: '50+', label: 'Countries' },
  ];

  useEffect(() => {
    if (showIntro) return;
    const hash = location.hash.slice(1) || window.location.hash.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150);
    }
  }, [showIntro, location.hash]);

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
      <section className="w-full bg-unicore-dark/90 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
          {stats.map((item) => (
            <div key={item.label} className="transition-transform duration-300 hover:scale-105">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">{item.value}</div>
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
