import { useRef, useEffect } from 'react';
import { animate, stagger } from 'animejs';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const highlights = [
  'Engineering-led manufacturing',
  'Bulk supply & B2B partnerships',
  'Consistent quality control',
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.about-item'), {
              translateY: { to: 0, from: 24 },
              opacity: { to: 1, from: 0 },
              duration: 550,
              delay: stagger(60),
              ease: 'out-cubic',
            });
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px 60px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-14 sm:py-16 md:py-20 px-4 sm:px-5 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <span className="about-item inline-flex items-center px-4 py-1.5 rounded-full bg-unicore-accent/10 text-unicore-accent text-xs font-bold uppercase tracking-wider mb-4">
            Who We Are
          </span>
          <h2 className="about-item text-3xl sm:text-4xl font-bold text-unicore-dark mb-5 leading-tight">
            About <span className="text-unicore-accent">UNICORE</span>
          </h2>
          <p className="about-item text-design-mid text-base sm:text-lg leading-relaxed mb-4">
            UNICORE is a trusted industrial appliance brand specializing in industrial air coolers, industrial fans, and commercial cooling systems. Built in collaboration with established manufacturers, the brand combines decades of engineering experience with strong production capabilities to serve large-scale industrial requirements.
          </p>
          <p className="about-item text-design-mid text-base sm:text-lg leading-relaxed mb-7">
            With a clear focus on bulk procurement and B2B partnerships, UNICORE ensures consistent product quality, dependable supply, and performance-driven solutions for demanding environments.
          </p>

          <ul className="about-item flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-3 mb-8">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm sm:text-base font-semibold text-unicore-dark">
                <CheckCircle2 className="w-5 h-5 text-unicore-accent shrink-0" />
                {h}
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="about-item group inline-flex items-center gap-2.5 pl-6 pr-2.5 py-2.5 rounded-full bg-unicore-dark text-white font-semibold text-sm sm:text-base shadow-card hover:bg-unicore-dark-light hover:shadow-card-hover transition-all duration-300"
          >
            Our Story
            <span className="grid place-items-center w-8 h-8 rounded-full bg-white/15 group-hover:bg-white/25 group-hover:translate-x-0.5 transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="about-item relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-unicore-accent/8 blur-2xl -z-10" aria-hidden="true" />
          <div className="rounded-3xl overflow-hidden border border-design-border shadow-card-hover">
            <img
              src="/about-us-top.png"
              alt="UNICORE manufacturing and logistics facility"
              className="w-full h-72 sm:h-96 object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 bg-white rounded-2xl shadow-card-hover border border-design-border px-5 py-3.5 flex items-center gap-3">
            <div className="text-2xl sm:text-3xl font-bold text-unicore-accent leading-none">25+</div>
            <div className="text-xs sm:text-sm font-semibold text-unicore-dark leading-snug max-w-[9rem]">
              Years of Manufacturing Excellence
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
