import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
              translateY: { to: 0, from: 40 },
              opacity: { to: 1, from: 0 },
              duration: 1000,
              delay: stagger(120),
              ease: 'out-expo',
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 md:py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-teal-600" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="cta-content text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Power your operations with dependable industrial cooling and ventilation systems designed for scale, efficiency, and long-term performance.
        </h2>
        <p className="cta-content text-lg md:text-xl text-white/90 mb-10">
          Contact UNICORE today for bulk supply enquiries.
        </p>
        <div className="cta-content flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Link to="/#contact" className="btn-primary-large rounded-lg inline-block text-center">Contact UNICORE Today</Link>
        </div>

        <div className="cta-content flex flex-wrap justify-center gap-8 md:gap-12 text-white/95">
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white hover:scale-105 transition-all duration-300">
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span>(+91) 9876543210</span>
          </a>
          <a href="mailto:info@unicore.com" className="flex items-center gap-2 hover:text-white hover:scale-105 transition-all duration-300">
            <Mail className="w-5 h-5 flex-shrink-0" />
            <span>info@unicore.com</span>
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-5 h-5 flex-shrink-0" />
            <span>Global Headquarters</span>
          </span>
        </div>
      </div>
    </section>
  );
}
