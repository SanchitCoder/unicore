import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.cta-content'), {
              translateY: { to: 0, from: 28 },
              opacity: { to: 1, from: 0 },
              duration: 600,
              delay: stagger(60),
              ease: 'out-cubic',
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px 80px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact-cta" ref={sectionRef} className="relative py-14 sm:py-16 md:py-20 px-4 sm:px-5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-unicore-dark via-unicore-dark-light to-unicore-accent" />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-black/10 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="cta-content text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-snug">
          Reliable cooling and ventilation for your operations.
        </h2>
        <p className="cta-content text-base sm:text-lg text-white/90 font-normal mb-8">
          Get in touch for bulk orders and partnerships.
        </p>
        <div className="cta-content flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2.5 pl-6 pr-2.5 py-2.5 rounded-full bg-white text-unicore-dark font-semibold text-sm sm:text-base shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            Contact UNICORE Today
            <span className="grid place-items-center w-8 h-8 rounded-full bg-unicore-dark/10 group-hover:bg-unicore-dark/15 group-hover:translate-x-0.5 transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="cta-content flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-6 text-white/95 text-sm font-normal">
          <a href="tel:+917042526555" className="flex items-center gap-2 hover:text-white transition-colors duration-300 font-medium">
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span>+91 70425 26555</span>
          </a>
          <a href="mailto:info@unicore.com" className="flex items-center gap-2 hover:text-white transition-colors duration-300 font-medium">
            <Mail className="w-5 h-5 flex-shrink-0" />
            <span>info@unicore.com</span>
          </a>
          <span className="flex items-center gap-2 font-medium">
            <MapPin className="w-5 h-5 flex-shrink-0" />
            <span>Global Headquarters</span>
          </span>
        </div>
      </div>
    </section>
  );
}
