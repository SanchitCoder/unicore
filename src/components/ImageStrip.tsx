import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

interface ImageStripProps {
  title?: string;
  images: { src: string; alt: string }[];
  className?: string;
  imageFit?: 'cover' | 'contain';
}

export default function ImageStrip({ title, images, className = '', imageFit = 'cover' }: ImageStripProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.strip-item'), {
              translateY: { to: 0, from: 20 },
              opacity: { to: 1, from: 0 },
              duration: 500,
              delay: stagger(60),
              ease: 'out-cubic',
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`py-6 sm:py-8 md:py-10 px-4 sm:px-5 ${className}`.trim()}>
      <div className="max-w-6xl mx-auto w-full overflow-hidden">
        {title && (
          <h2 className="strip-item text-lg sm:text-xl md:text-2xl font-semibold text-design-dark mb-3 sm:mb-4 text-center">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="strip-item rounded-2xl overflow-hidden border border-design-border shadow-md hover:shadow-xl hover:border-unicore-accent/30 transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full h-full ${imageFit === 'contain' ? 'object-contain' : 'object-cover'} hover:scale-105 transition-transform duration-500`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
