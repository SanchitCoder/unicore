import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { BadgeCheck, Eye, Leaf, ShieldCheck, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ImageTextSection from '../components/ImageTextSection';

const drivesForward = [
  {
    title: 'Quality Focus',
    description:
      'We collaborate with trusted manufacturing partners to ensure the products we supply meet high standards of performance, durability, and reliability.',
    Icon: Target,
  },
  {
    title: 'Continuous Improvement',
    description:
      'We continuously expand and improve our product range to meet the evolving needs of industrial environments and large-scale facilities.',
    Icon: Zap,
  },
  {
    title: 'Customer Commitment',
    description:
      'We focus on building long-term relationships by providing dependable products, responsive support, and reliable supply for our business partners.',
    Icon: Eye,
  },
  {
    title: 'Responsible Practices',
    description:
      'We work with partners who follow responsible manufacturing practices and industry standards to support sustainable and efficient industrial operations.',
    Icon: ShieldCheck,
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const infrastructureRef = useRef<HTMLDivElement>(null);
  const certifiedRef = useRef<HTMLDivElement>(null);

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

    const refs = [missionRef.current, approachRef.current, infrastructureRef.current, certifiedRef.current]
      .filter(Boolean) as HTMLElement[];

    refs.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-20 pb-10 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 px-5 overflow-hidden">
        <img
          src="/Building-hero.png"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-90 saturate-125 contrast-110 brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-unicore-dark/50 via-unicore-dark-light/20 to-unicore-accent/8" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(46,203,182,0.18)_0%,transparent_55%)]"
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-12">
              <div ref={heroRef} className="max-w-xl">
                <div className="about-hero-item inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-white/85 text-xs font-semibold tracking-wide mb-3">
                  ABOUT UNICORE
                </div>
                <h1 className="about-hero-item text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
                  25 Years of Manufacturing Excellence
                </h1>
                <p className="about-hero-item text-white/95 text-sm sm:text-base md:text-lg mb-5 sm:mb-6">
                  Since 2000, we have been engineering reliable appliances that power industries and enhance homes worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <div ref={storyRef}>
        <ImageTextSection
          subtitle="OUR STORY"
          title="Building Trust Through Quality Since 2000"
          paragraphs={[
            'UNICORE was founded with a singular vision: to manufacture appliances that combine engineering precision with long-term reliability. What started as a small industrial fan manufacturer has grown into a comprehensive solutions provider serving both industrial and residential markets across 50+ countries.',
            'Our commitment to quality has remained unwavering throughout our 25-year journey. Every product that leaves our facility represents decades of accumulated expertise, continuous innovation, and an uncompromising dedication to customer satisfaction.',
          ]}
          subtitleClassName="text-xs sm:text-sm tracking-wider"
          titleClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
          paragraphClassName="text-sm sm:text-base leading-relaxed"
          className="py-6 sm:py-8 md:py-10 lg:py-12"
          imageSrc="/commercial-cooling.png"
          imageAlt="Industrial manufacturing facility"
          imageOnRight={true}
          imageFit="contain"
        />
      </div>

      {/* Mission & Vision */}
      <section
        id="mission-vision"
        ref={missionRef}
        className="py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-5 bg-design-bg scroll-mt-24"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="about-animate rounded-xl bg-white p-3 sm:p-5 border border-design-border hover:border-unicore-accent hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-unicore-accent bg-white text-design-dark mb-2">
                <Target className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-design-dark mb-1.5 text-center sm:text-left">Our Mission</h3>
              <p className="text-design-mid text-sm sm:text-base font-normal leading-relaxed text-center sm:text-left">
                To provide efficient and dependable industrial cooling solutions that help businesses maintain comfortable and productive working environments.
              </p>
            </div>

            <div className="about-animate rounded-xl bg-white p-3 sm:p-5 border border-design-border hover:border-unicore-accent hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-unicore-accent bg-white text-design-dark mb-2">
                <Eye className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-design-dark mb-1.5 text-center sm:text-left">Our Vision</h3>
              <p className="text-design-mid text-sm sm:text-base font-normal leading-relaxed text-center sm:text-left">
                To become a trusted supplier of industrial cooling and ventilation equipment across India, supporting manufacturing units and commercial facilities with high-quality products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives UNICORE Forward */}
      <section id="what-drives" className="py-6 sm:py-8 md:py-10 px-4 sm:px-5 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="about-animate text-2xl sm:text-3xl md:text-4xl font-semibold text-design-dark mb-2 text-center">
            What Drives UNICORE Forward
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mx-auto mb-4" />
          <p className="about-animate text-design-mid text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-5 text-center max-w-2xl mx-auto">
            Our approach is guided by strong partnerships, reliable products, and a commitment to supporting industrial businesses with dependable cooling and ventilation solutions.
          </p>

          <div ref={approachRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-1">
            {drivesForward.map((item, i) => {
              const Icon = item.Icon;
              return (
                <div
                  key={i}
                  className="about-animate rounded-2xl border border-design-border/80 bg-white p-3 sm:p-4 hover:border-unicore-accent/40 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-unicore-accent/10 border border-unicore-accent/30 flex items-center justify-center mb-2">
                    <Icon className="w-5 h-5 text-unicore-accent" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-design-dark mb-1">{item.title}</h3>
                  <p className="text-design-mid text-[0.78rem] sm:text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* World-Class Manufacturing Infrastructure */}
      <section ref={infrastructureRef} className="py-12 sm:py-14 px-4 sm:px-5 bg-unicore-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <h2 className="about-animate text-2xl sm:text-3xl font-semibold mb-3">
                World-Class Manufacturing Infrastructure
              </h2>

              <div className="about-animate mb-4">
                <h3 className="text-lg font-semibold text-white/90 mb-2">Strong Manufacturing Partnerships</h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  UNICORE collaborates with established manufacturers equipped with modern production facilities, advanced machinery, and quality testing systems. These partnerships allow us to deliver reliable industrial cooling and ventilation products that meet demanding performance standards.
                </p>
              </div>

              <div className="about-animate">
                <h3 className="text-lg font-semibold text-white/90 mb-2">Advanced Manufacturing Capabilities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base text-white/85">Efficient Production Systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base text-white/85">Quality Testing & Standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base text-white/85">Responsible Production Practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base text-white/85">Scalable Supply Capacity</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10">
                <div className="p-6 sm:p-7">
                  <div className="about-animate relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 min-h-[220px]">
                    <img
                      src="/industrial-coolers-fans.png"
                      alt=""
                      aria-hidden
                      className="absolute inset-0 w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-unicore-dark via-unicore-dark/30 to-transparent" />
                    <div className="relative p-6 sm:p-7 flex items-end">
                      {/* Image-only visual block (no extra copy beyond provided content) */}
                    </div>
                  </div>

                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <div className="about-animate rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-white/90 font-semibold text-sm sm:text-base">Efficient Production Systems</div>
                    </div>
                    <div className="about-animate rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-white/90 font-semibold text-sm sm:text-base">Quality Testing & Standards</div>
                    </div>
                    <div className="about-animate rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-white/90 font-semibold text-sm sm:text-base">Responsible Production Practices</div>
                    </div>
                    <div className="about-animate rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-white/90 font-semibold text-sm sm:text-base">Scalable Supply Capacity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certified Quality Standards */}
      <section ref={certifiedRef} className="py-12 sm:py-14 px-4 sm:px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="about-animate text-2xl sm:text-3xl font-semibold text-design-dark text-center mb-2">
            Certified Quality Standards
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mx-auto mb-10" />

          <p className="about-animate text-design-mid text-sm sm:text-base leading-relaxed max-w-3xl mx-auto text-center mb-8">
            UNICORE partners with manufacturers who follow internationally recognized quality and safety standards, ensuring reliable performance and consistent product quality.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="about-animate rounded-2xl border border-design-border/80 bg-white p-6 shadow-card">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-unicore-accent/10 border border-unicore-accent/30 flex items-center justify-center text-unicore-accent flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-unicore-accent font-semibold uppercase tracking-wider text-xs">ISO 9001:2015</div>
                  <div className="text-design-mid text-sm font-medium mt-1">Quality Management Systems</div>
                </div>
              </div>
              <p className="text-design-mid text-sm leading-relaxed">
                Products are sourced from manufacturing partners operating under ISO 9001:2015 Quality Management Systems, ensuring consistent production and quality control.
              </p>
            </div>

            <div className="about-animate rounded-2xl border border-design-border/80 bg-white p-6 shadow-card">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-unicore-accent/10 border border-unicore-accent/30 flex items-center justify-center text-unicore-accent flex-shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-unicore-accent font-semibold uppercase tracking-wider text-xs">ISO 14001:2015</div>
                  <div className="text-design-mid text-sm font-medium mt-1">Environmental Management Systems</div>
                </div>
              </div>
              <p className="text-design-mid text-sm leading-relaxed">
                Manufacturing facilities follow ISO 14001:2015 Environmental Management Systems, supporting responsible and sustainable production practices.
              </p>
            </div>

            <div className="about-animate rounded-2xl border border-design-border/80 bg-white p-6 shadow-card">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-unicore-accent/10 border border-unicore-accent/30 flex items-center justify-center text-unicore-accent flex-shrink-0">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-unicore-accent font-semibold uppercase tracking-wider text-xs">CE &amp; UL Compliance</div>
                  <div className="text-design-mid text-sm font-medium mt-1">Safety &amp; Performance Standards</div>
                </div>
              </div>
              <p className="text-design-mid text-sm leading-relaxed">
                Selected products comply with internationally recognized CE and UL safety standards, ensuring reliable performance and safety for industrial applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Industry Leaders */}
      <section className="py-12 sm:py-14 px-4 sm:px-5 bg-gradient-to-r from-unicore-dark via-unicore-dark-light to-unicore-accent/30 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 text-center">
            <h2 className="about-animate text-2xl sm:text-4xl font-semibold leading-tight">
              Partner With Industry Leaders
            </h2>
            <p className="about-animate mt-3 text-white/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who trust UNICORE for their appliance needs
            </p>

            <div className="about-animate mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/bulk-orders"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-unicore-accent px-10 py-3 sm:px-12 sm:py-4 text-white font-semibold shadow-btn hover:bg-unicore-accent-hover transition-colors"
              >
                Get in Touch
              </a>
              <Link
                to="/products"
                className="rounded-full border border-white/50 bg-transparent px-10 py-3 sm:px-12 sm:py-4 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
