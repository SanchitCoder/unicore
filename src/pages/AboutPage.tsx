import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animate, stagger } from 'animejs';
import { Target, Eye, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';

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

const aboutNavItems = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'mission-vision', label: 'Mission & Vision' },
  { id: 'background', label: 'Our Background' },
  { id: 'what-we-offer', label: 'What We Offer' },
  { id: 'approach', label: 'Our Approach' },
];

function scrollToAboutSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

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
      {/* Hero */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-teal-700" />
        <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="about-hero-item text-4xl md:text-6xl font-bold text-white mb-4">
            About UNICORE
          </h1>
          <p className="about-hero-item text-xl md:text-2xl text-white/90 mb-8">
            Trusted industrial cooling and ventilation solutions for businesses across India
          </p>
        </div>
      </section>

      {/* In-page navigation */}
      <nav className="py-6 px-6 bg-white border-b border-slate-200" aria-label="About page sections">
        <div className="max-w-4xl mx-auto">
          <div className="sticky top-20 z-30 py-4 -mx-2 px-4 rounded-xl bg-slate-100/90 border border-slate-200 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">On this page</p>
            <div className="flex flex-wrap gap-2">
              {aboutNavItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToAboutSection(item.id)}
                  className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:border-teal-400 hover:text-teal-700 hover:bg-teal-50/50 transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Introduction */}
      <section id="introduction" ref={introRef} className="py-20 md:py-28 px-6 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="about-animate text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
            Introduction
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mx-auto mb-12" />
          <p className="about-animate text-lg text-slate-600 leading-relaxed mb-6">
            UNICORE is a trusted brand providing reliable industrial cooling and ventilation solutions for factories, warehouses, workshops, and large commercial environments.
          </p>
          <p className="about-animate text-lg text-slate-600 leading-relaxed mb-6">
            Built on a strong foundation of 25+ years of manufacturing experience, UNICORE collaborates with established manufacturers of industrial air coolers, industrial fans, and ventilation systems to bring together a comprehensive range of high-performance products under a single brand.
          </p>
          <p className="about-animate text-lg text-slate-600 leading-relaxed">
            Our focus is to provide durable, efficient, and large-scale cooling solutions that support the operational needs of industrial businesses across India.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" ref={missionRef} className="py-20 md:py-28 px-6 bg-slate-50 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="about-animate rounded-2xl bg-white p-8 border border-slate-200 hover:border-teal-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-teal-500 bg-white text-slate-800 mb-4">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide efficient and dependable industrial cooling solutions that help businesses maintain comfortable and productive working environments.
              </p>
            </div>
            <div className="about-animate rounded-2xl bg-white p-8 border border-slate-200 hover:border-teal-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-teal-500 bg-white text-slate-800 mb-4">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become a trusted supplier of industrial cooling and ventilation equipment across India, supporting manufacturing units and commercial facilities with high-quality products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Background */}
      <section id="background" ref={backgroundRef} className="py-20 md:py-28 px-6 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="about-animate text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
            Our Background
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mx-auto mb-12" />
          <p className="about-animate text-lg text-slate-600 leading-relaxed mb-6">
            UNICORE was established with the vision of simplifying the sourcing of industrial cooling equipment for businesses that require bulk quantities and reliable performance.
          </p>
          <p className="about-animate text-lg text-slate-600 leading-relaxed mb-6">
            Through collaboration with experienced manufacturers in the cooling and ventilation industry, UNICORE brings together multiple industrial appliances into a unified product portfolio.
          </p>
          <p className="about-animate text-lg text-slate-600 leading-relaxed">
            Each product is designed to meet the demanding conditions of industrial environments while maintaining efficiency, durability, and consistent airflow performance.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section id="what-we-offer" ref={offerRef} className="py-20 md:py-28 px-6 bg-slate-50 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="about-animate text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
            What We Offer
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mx-auto mb-12" />
          <p className="about-animate text-lg text-slate-600 leading-relaxed mb-6">
            UNICORE provides a wide range of industrial cooling and air circulation products, including:
          </p>
          <ul className="about-animate space-y-4 mb-8">
            {whatWeOffer.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <p className="about-animate text-lg text-slate-600 leading-relaxed">
            Our solutions are widely used in factories, warehouses, workshops, and production facilities where maintaining airflow and temperature control is essential.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" ref={approachRef} className="py-20 md:py-28 px-6 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="about-animate text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
            Our Approach
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mx-auto mb-12" />
          <p className="about-animate text-lg text-slate-600 leading-relaxed mb-8">
            UNICORE focuses on delivering reliable cooling and ventilation solutions in bulk quantities to meet the needs of industrial buyers. Our approach includes:
          </p>
          <ul className="space-y-4">
            {ourApproach.map((item, i) => (
              <li
                key={i}
                className="about-animate flex items-center gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
