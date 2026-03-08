import { useRef, useEffect } from 'react';
import { animate, stagger } from 'animejs';

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
              delay: stagger(45),
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
    <section id="about" ref={sectionRef} className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="about-item text-3xl md:text-4xl font-bold text-design-dark mb-4">About UNICORE</h2>
        <p className="about-item text-lg text-design-mid mb-4">
          UNICORE is a trusted industrial appliance brand specializing in industrial air coolers, industrial fans, and commercial cooling systems. Built in collaboration with established manufacturers, the brand combines decades of engineering experience with strong production capabilities to serve large-scale industrial requirements.
        </p>
        <p className="about-item text-lg text-design-mid">
          With a clear focus on bulk procurement and B2B partnerships, UNICORE ensures consistent product quality, dependable supply, and performance-driven solutions for demanding environments.
        </p>
      </div>
    </section>
  );
}
