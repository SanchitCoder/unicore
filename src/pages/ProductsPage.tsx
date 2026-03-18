import { useRef, useEffect } from 'react';
import { animate, stagger } from 'animejs';
import Layout from '../components/Layout';
import ProductLines from '../components/ProductLines';
import ImageTextSection from '../components/ImageTextSection';

export default function ProductsPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      animate(heroRef.current.querySelectorAll('.product-hero-item'), {
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
      {/* Hero - extra top padding on mobile so heading isn't hidden under fixed navbar */}
      <section className="relative pt-20 pb-10 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 px-5 sm:px-6 md:px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-unicore-dark via-unicore-dark-light to-unicore-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(46,203,182,0.15)_0%,transparent_50%)]" aria-hidden />
        <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto text-center w-full px-2 sm:px-0">
          <h1 className="product-hero-item text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight drop-shadow-hero">
            Products
          </h1>
          <p className="product-hero-item text-lg sm:text-xl md:text-2xl text-white/95 mb-4 sm:mb-5 drop-shadow-hero">
            Industrial cooling and ventilation equipment built for reliability and scale
          </p>
        </div>
      </section>

      <ImageTextSection
        title="Engineered for Industrial Demands"
        paragraphs={[
          'Every UNICORE product is designed to withstand continuous operation in demanding environments. From heavy-duty exhaust fans to high-capacity air coolers, we focus on reliability, efficiency, and long service life.',
          'Our range covers ventilation, circulation, and evaporative cooling so you can find the right solution for your facility.',
        ]}
        imageSrc="/industries-we-serve.png"
        imageAlt="UNICORE industrial solutions"
        imageOnRight={true}
        className="bg-white"
      />
      <ProductLines />
    </Layout>
  );
}
