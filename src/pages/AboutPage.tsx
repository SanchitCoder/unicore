import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animate, stagger } from 'animejs';
import { Target, Eye, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';
import ImageTextSection from '../components/ImageTextSection';
import ImageStrip from '../components/ImageStrip';

const whatWeOffer = [
  'Industrial Air Coolers',
  'Heavy Duty Exhaust Fans',
  'Air Circulator Fans',
  'Industrial Pedestal Fans',
  'Ventilation Systems for Industrial Facilities',
];

const ourApproach = [
  'Collaboration with experienced manufacturers',
  'High-performance industrial product range',
  'Bulk supply capability for large facilities',
  'Reliable product quality and durability',
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const offerRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      animate(heroRef.current.querySelectorAll('.about-hero-item'), {
        translateY: { to: 0, from: 28 },
        opacity: { to: 1, from: 0 },
        duration: 600,
        delay: stagger(50),
        ease: 'out-cubic',
      });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.about-animate'), {
              translateY: { to: 0, from: 28 },
              opacity: { to: 1, from: 0 },
              duration: 550,
              delay: stagger(40),
              ease: 'out-cubic',
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    const refs = [
      introRef.current,
      missionRef.current,
      backgroundRef.current,
      offerRef.current,
      approachRef.current,
    ].filter(Boolean) as HTMLElement[];
    refs.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* Hero - extra top padding on mobile so heading isn't hidden under fixed navbar */}
      <section className="relative pt-20 pb-10 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 px-5 sm:px-6 md:px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-unicore-dark via-unicore-dark-light to-unicore-accent" />
        <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto text-center w-full px-2 sm:px-0">
          <h1 className="about-hero-item text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            About UNICORE
          </h1>
          <p className="about-hero-item text-lg sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-5">
            Trusted industrial cooling and ventilation solutions for businesses across India
          </p>
        </div>
      </section>

      <ImageTextSection
        subtitle="About us"
        title="Built on 25+ Years of Manufacturing Expertise"
        paragraphs={[
          'UNICORE brings together decades of industrial manufacturing experience to deliver cooling and ventilation solutions that meet the demands of large-scale operations.',
          'Our partnership with established manufacturers ensures consistent quality, reliable supply, and products designed for the toughest environments.',
        ]}
        stats={[
          { value: '25+', label: 'Years Experience' },
          { value: '500+', label: 'Clients' },
          { value: '100%', label: 'Satisfaction' },
        ]}
        imageSrc="https://picsum.photos/seed/about-expertise/800/600"
        imageAlt="Industrial manufacturing facility"
        imageOnRight={true}
      />

      {/* Introduction */}
      <section id="introduction" ref={introRef} className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-design-bg scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="about-animate text-3xl md:text-4xl font-bold text-design-dark mb-4 text-center">
            Introduction
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mx-auto mb-5" />
          <p className="about-animate text-lg text-design-mid leading-relaxed mb-4">
            UNICORE is a trusted brand providing reliable industrial cooling and ventilation solutions for factories, warehouses, workshops, and large commercial environments.
          </p>
          <p className="about-animate text-lg text-design-mid leading-relaxed mb-4">
            Built on a strong foundation of 25+ years of manufacturing experience, UNICORE collaborates with established manufacturers of industrial air coolers, industrial fans, and ventilation systems to bring together a comprehensive range of high-performance products under a single brand.
          </p>
          <p className="about-animate text-lg text-design-mid leading-relaxed">
            Our focus is to provide durable, efficient, and large-scale cooling solutions that support the operational needs of industrial businesses across India.
          </p>
        </div>
      </section>

      <ImageTextSection
        subtitle="Our story"
        title="Quality and Partnership at Scale"
        paragraphs={[
          'We work with established manufacturers to bring you a unified range of industrial cooling and ventilation products. Every product is tested for durability and performance in real-world industrial conditions.',
          'From factories to warehouses, UNICORE solutions are built to run continuously and deliver consistent results.',
        ]}
        imageSrc="https://picsum.photos/seed/about-quality/800/600"
        imageAlt="Industrial facility"
        imageOnRight={false}
        className="bg-white"
      />

      {/* Mission & Vision */}
      <section id="mission-vision" ref={missionRef} className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-design-bg scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="about-animate rounded-xl bg-white p-5 sm:p-6 border border-design-border hover:border-unicore-accent hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-unicore-accent bg-white text-design-dark mb-4">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-design-dark mb-3">Our Mission</h3>
              <p className="text-design-mid leading-relaxed">
                To provide efficient and dependable industrial cooling solutions that help businesses maintain comfortable and productive working environments.
              </p>
            </div>
            <div className="about-animate rounded-xl bg-white p-5 sm:p-6 border border-design-border hover:border-unicore-accent hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-unicore-accent bg-white text-design-dark mb-4">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-design-dark mb-3">Our Vision</h3>
              <p className="text-design-mid leading-relaxed">
                To become a trusted supplier of industrial cooling and ventilation equipment across India, supporting manufacturing units and commercial facilities with high-quality products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Background */}
      <section id="background" ref={backgroundRef} className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="about-animate text-3xl md:text-4xl font-bold text-design-dark mb-4 text-center">
            Our Background
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mx-auto mb-5" />
          <p className="about-animate text-lg text-design-mid leading-relaxed mb-4">
            UNICORE was established with the vision of simplifying the sourcing of industrial cooling equipment for businesses that require bulk quantities and reliable performance.
          </p>
          <p className="about-animate text-lg text-design-mid leading-relaxed mb-4">
            Through collaboration with experienced manufacturers in the cooling and ventilation industry, UNICORE brings together multiple industrial appliances into a unified product portfolio.
          </p>
          <p className="about-animate text-lg text-design-mid leading-relaxed">
            Each product is designed to meet the demanding conditions of industrial environments while maintaining efficiency, durability, and consistent airflow performance.
          </p>
        </div>
      </section>

      <ImageTextSection
        subtitle="Capabilities"
        title="Designed for Demanding Environments"
        paragraphs={[
          'Our product portfolio is built to handle heat, dust, and long operating hours. Whether you need exhaust fans for ventilation or air coolers for large floors, we deliver equipment that meets industrial standards.',
        ]}
        imageSrc="https://picsum.photos/seed/about-capabilities/800/600"
        imageAlt="Industrial equipment"
        imageOnRight={true}
        className="bg-design-bg"
      />

      {/* What We Offer */}
      <section id="what-we-offer" ref={offerRef} className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-design-bg scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="about-animate text-3xl md:text-4xl font-bold text-design-dark mb-4 text-center">
            What We Offer
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mx-auto mb-5" />
          <p className="about-animate text-lg text-design-mid leading-relaxed mb-4">
            UNICORE provides a wide range of industrial cooling and air circulation products, including:
          </p>
          <ul className="about-animate space-y-2 mb-5">
            {whatWeOffer.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-design-border hover:border-unicore-accent hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                <span className="text-design-mid font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <p className="about-animate text-lg text-design-mid leading-relaxed">
            Our solutions are widely used in factories, warehouses, workshops, and production facilities where maintaining airflow and temperature control is essential.
          </p>
        </div>
      </section>

      <ImageStrip
        title="UNICORE in Action"
        images={[
          { src: 'https://picsum.photos/seed/action1/600/400', alt: 'Warehouse' },
          { src: 'https://picsum.photos/seed/action2/600/400', alt: 'Industrial' },
          { src: 'https://picsum.photos/seed/action3/600/400', alt: 'Manufacturing' },
        ]}
        className="bg-white"
      />

      {/* Our Approach */}
      <section id="approach" ref={approachRef} className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="about-animate text-3xl md:text-4xl font-bold text-design-dark mb-4 text-center">
            Our Approach
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mx-auto mb-5" />
          <p className="about-animate text-lg text-design-mid leading-relaxed mb-5">
            UNICORE focuses on delivering reliable cooling and ventilation solutions in bulk quantities to meet the needs of industrial buyers. Our approach includes:
          </p>
          <ul className="space-y-4">
            {ourApproach.map((item, i) => (
              <li
                key={i}
                className="about-animate flex items-center gap-3 p-4 rounded-xl bg-design-bg border border-design-border hover:border-unicore-accent hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-unicore-accent flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-design-mid font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
