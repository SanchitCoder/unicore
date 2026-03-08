import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import IntroLoader from '../components/IntroLoader';
import Hero from '../components/Hero';
import About from '../components/About';
import HomeProductCategories from '../components/HomeProductCategories';
import ValueProposition from '../components/ValueProposition';
import HomeIndustriesSection from '../components/HomeIndustriesSection';
import BulkOrders from '../components/BulkOrders';
import CTA from '../components/CTA';
import Layout from '../components/Layout';

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();

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
      <ValueProposition />
      <HomeIndustriesSection />
      <BulkOrders />
      <CTA />
    </Layout>
  );
}
