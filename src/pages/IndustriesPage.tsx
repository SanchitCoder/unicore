import { useRef, useEffect } from 'react';
import { animate, stagger } from 'animejs';
import Layout from '../components/Layout';
import ManufacturingExcellence from '../components/ManufacturingExcellence';

export default function IndustriesPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      animate(heroRef.current.querySelectorAll('.industry-hero-item'), {
        translateY: { to: 0, from: 28 },
        opacity: { to: 1, from: 0 },
        duration: 600,
        delay: stagger(50),
        ease: 'out-cubic',
      });
    }
  }, []);

  return (
    <Layout>
      {/* Hero - same style as Products page */}
      <section className="relative pt-20 pb-10 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 px-5 sm:px-6 md:px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-unicore-dark via-unicore-dark-light to-unicore-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(46,203,182,0.15)_0%,transparent_50%)]" aria-hidden />
        <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto text-center w-full px-2 sm:px-0">
          <h1 className="industry-hero-item text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight drop-shadow-hero">
            Industries We Serve
          </h1>
          <p className="industry-hero-item text-lg sm:text-xl md:text-2xl text-white/95 mb-4 sm:mb-5 drop-shadow-hero">
            Cooling and ventilation solutions for factories, warehouses, workshops, and commercial facilities
          </p>
        </div>
      </section>

      <ManufacturingExcellence />
      <section className="py-12 sm:py-14 px-4 sm:px-5 bg-gradient-to-r from-unicore-dark via-unicore-dark-light to-unicore-accent/30 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-4xl font-semibold leading-tight">
            Partner with UNICORE for Your Sector
            </h2>
            <p className="mt-3 text-white/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Whether you run a factory, a logistics hub, or a large commercial space, we can support your cooling and ventilation needs with bulk supply and consistent quality.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
