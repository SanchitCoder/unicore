import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { Phone, Mail, MapPin } from 'lucide-react';

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
              delay: stagger(50),
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
    <section id="contact-cta" ref={sectionRef} className="relative py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-unicore-dark via-unicore-dark-light to-unicore-accent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="cta-content text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2 sm:mb-3 leading-snug">
          Reliable cooling and ventilation for your operations.
        </h2>
        <p className="cta-content text-base sm:text-lg text-white/90 font-normal mb-4 sm:mb-6">
          Get in touch for bulk orders and partnerships.
        </p>
        <div className="cta-content flex flex-col sm:flex-row gap-3 justify-center mb-6 sm:mb-10">
          <a
            href="/contact"
            className="btn-primary-large rounded-lg inline-block text-center"
          >
            Contact UNICORE Today
          </a>
        </div>

        <div className="cta-content flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-6 text-white/95 text-sm font-normal">
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors duration-300 font-medium">
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span>(+91) 9876543210</span>
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
