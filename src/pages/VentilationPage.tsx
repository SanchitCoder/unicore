import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import Layout from '../components/Layout';
import IndustrialVentilationSystems from '../components/IndustrialVentilationSystems';
import ImageTextSection from '../components/ImageTextSection';
import ImageStrip from '../components/ImageStrip';

export default function VentilationPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      animate(heroRef.current.querySelectorAll('.vent-hero-item'), {
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
      <section className="relative pt-20 pb-10 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 px-5 sm:px-6 md:px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-unicore-dark via-unicore-dark-light to-unicore-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(46,203,182,0.15)_0%,transparent_50%)]" aria-hidden />
        <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto text-center w-full px-2 sm:px-0">
          <span className="vent-hero-item inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-white/85 text-xs font-semibold tracking-wide mb-3">
            VENTILATION
          </span>
          <h1 className="vent-hero-item text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight drop-shadow-hero">
            Industrial Ventilation Systems
          </h1>
          <p className="vent-hero-item text-lg sm:text-xl md:text-2xl text-white/95 mb-4 sm:mb-5 drop-shadow-hero">
            High-performance exhaust fans, air circulators, and duct coolers for factories, warehouses, and workshops
          </p>
        </div>
      </section>

      <ImageTextSection
        subtitle="AIRFLOW ENGINEERED FOR SCALE"
        title="Built to Move Air Where It's Needed Most"
        paragraphs={[
          'Proper ventilation is essential for maintaining airflow, removing heat, and improving air quality in industrial environments.',
          'UNICORE provides a range of industrial ventilation systems and high-performance fans designed for factories, warehouses, and workshops.',
        ]}
        imageSrc="/products/pure-air-hdef-18/main.jpg"
        imageAlt="UNICORE heavy-duty exhaust fan installed in an industrial facility"
        imageOnRight={false}
      />

      <ImageStrip
        title="Ventilation in Action"
        images={[
          { src: '/products/pure-air-hdef-24/main.jpg', alt: 'Heavy-duty exhaust fan installed on a factory wall' },
          { src: '/products/aerothrust-450-wall-18/main.jpg', alt: 'AEROTHRUST wall-mounted air circulator' },
          { src: '/products/go-cool-800/main.jpg', alt: 'GO COOL duct cooler on the factory floor' },
        ]}
        className="bg-design-bg"
      />

      <IndustrialVentilationSystems />

      <ImageTextSection
        subtitle="BUILT FOR CONTINUOUS OPERATION"
        title="Reliable Airflow for Large Spaces"
        paragraphs={[
          "From exhaust fans to circulators and duct coolers, our ventilation range is built for 24/7 operation. Partner with UNICORE for bulk orders and project-based supply across India.",
        ]}
        imageSrc="/products/vent-pro-1500/main.jpg"
        imageAlt="UNICORE duct cooler installed for large-scale ventilation"
        imageOnRight={true}
        className="bg-white"
      />
    </Layout>
  );
}
