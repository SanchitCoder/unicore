import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animate, stagger } from 'animejs';
import { Cog, Award, Globe, Target, Users } from 'lucide-react';
import Layout from '../components/Layout';
import CTA from '../components/CTA';

const values = [
  {
    icon: Cog,
    title: 'Precision Engineering',
    description: 'Every product is designed with exacting standards and tested for durability in real-world industrial and residential environments.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'ISO certified manufacturing and rigorous testing ensure consistent excellence across our entire product range.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'From installation support to after-sales service, our worldwide network ensures you get the support you need, wherever you are.',
  },
  {
    icon: Target,
    title: 'Customer Focus',
    description: 'We build long-term partnerships by understanding your needs and delivering solutions that scale with your business.',
  },
];

const milestones = [
  { year: '2000', text: 'UNICORE founded with a focus on industrial ventilation and cooling.' },
  { year: '2008', text: 'Expanded into residential and commercial product lines.' },
  { year: '2015', text: 'ISO certification and state-of-the-art manufacturing facility.' },
  { year: '2020', text: '50+ countries served; 5000+ projects delivered.' },
  { year: 'Today', text: 'Engineering excellence for industrial and residential solutions worldwide.' },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      animate(heroRef.current.querySelectorAll('.about-hero-item'), {
        translateY: { to: 0, from: 40 },
        opacity: { to: 1, from: 0 },
        duration: 1000,
        delay: stagger(120),
        ease: 'out-expo',
      });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.about-animate'), {
              translateY: { to: 0, from: 40 },
              opacity: { to: 1, from: 0 },
              duration: 800,
              delay: stagger(80),
              ease: 'out-expo',
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    const refs = [storyRef.current, valuesRef.current, timelineRef.current].filter(Boolean) as HTMLElement[];
    refs.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-teal-700" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="about-hero-item text-4xl md:text-6xl font-bold text-white mb-4">
            About UNICORE
          </h1>
          <p className="about-hero-item text-xl md:text-2xl text-white/90 mb-8">
            Engineering Reliable Appliances Since 2000
          </p>
          <p className="about-hero-item text-lg text-white/80 max-w-2xl mx-auto">
            25 years of manufacturing excellence for industrial and residential markets worldwide.
          </p>
          <div className="about-hero-item mt-10">
            <Link to="/#products" className="btn-primary-large rounded-lg inline-block">
              Explore Our Products
            </Link>
          </div>

          {/* In-page navigation - same links as navbar */}
          <nav className="about-hero-item mt-12 pt-8 border-t border-white/20" aria-label="Page navigation">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm">
              <Link to="/" className="text-white/90 hover:text-white transition-colors font-medium">Home</Link>
              <span className="text-white/40" aria-hidden>|</span>
              <span className="text-teal-300 font-medium">About Us</span>
              <span className="text-white/40" aria-hidden>|</span>
              <Link to="/#products" className="text-white/90 hover:text-white transition-colors font-medium">Products</Link>
              <span className="text-white/40" aria-hidden>|</span>
              <Link to="/#manufacturing" className="text-white/90 hover:text-white transition-colors font-medium">Manufacturing</Link>
              <span className="text-white/40" aria-hidden>|</span>
              <Link to="/#contact" className="text-white/90 hover:text-white transition-colors font-medium">Contact</Link>
              <Link to="/#contact" className="ml-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-colors text-sm">
                Request Quote
              </Link>
            </div>
          </nav>
        </div>
      </section>

      <section ref={storyRef} className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="about-animate text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
            Our Story
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mx-auto mb-12" />
          <p className="about-animate text-lg text-slate-600 leading-relaxed mb-6">
            UNICORE was founded in 2000 with a simple mission: to engineer reliable, high-performance cooling and ventilation solutions for industries and homes. What started as a focus on heavy-duty industrial applications has grown into a comprehensive range spanning industrial fans, air coolers, ventilation systems, and residential products.
          </p>
          <p className="about-animate text-lg text-slate-600 leading-relaxed mb-6">
            Today we serve customers in over 50 countries, from manufacturing units and warehouses to hospitals, offices, and homes. Our ISO-certified facilities and commitment to quality have made us a trusted partner for businesses and institutions that demand durability, efficiency, and long-term performance.
          </p>
          <p className="about-animate text-lg text-slate-600 leading-relaxed">
            We believe in building lasting relationships—with our customers, our suppliers, and the communities we operate in. Every product we make is designed to last, to perform under demanding conditions, and to deliver value for years to come.
          </p>
        </div>
      </section>

      <section ref={valuesRef} className="py-20 md:py-28 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="about-animate text-3xl md:text-4xl font-bold text-slate-800 mb-4 text-center">
            Our Values
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mx-auto mb-16" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="about-animate rounded-2xl bg-white p-8 border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-teal-500 bg-white text-slate-800 mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section ref={timelineRef} className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="about-animate text-3xl md:text-4xl font-bold text-slate-800 mb-4 text-center">
            Our Journey
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mx-auto mb-16" />
          <div className="space-y-8">
            {milestones.map((item, i) => (
              <div key={i} className="about-animate flex gap-6">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-teal-600 font-bold text-lg">{item.year}</span>
                </div>
                <div className="flex-1 border-l-2 border-teal-200 pl-6 pb-8 last:pb-0">
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="about-animate inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-teal-500 bg-white text-slate-800 mb-6">
            <Users className="w-10 h-10" />
          </div>
          <h2 className="about-animate text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Join Our Story
          </h2>
          <p className="about-animate text-slate-600 mb-8 max-w-2xl mx-auto">
            Whether you need industrial ventilation, residential cooling, or a long-term manufacturing partner, we are here to help. Get in touch to discuss your project or explore partnership opportunities.
          </p>
          <Link to="/#contact" className="about-animate btn-primary rounded-lg inline-block">
            Get In Touch
          </Link>
        </div>
      </section>

      <CTA />
    </Layout>
  );
}
