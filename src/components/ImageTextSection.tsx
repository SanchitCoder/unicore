import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface ImageTextSectionProps {
  title: string;
  subtitle?: string;
  paragraphs: string[];
  stats?: { value: string; label: string }[];
  imageSrc: string;
  imageAlt: string;
  imageOnRight?: boolean;
  className?: string;
}

export default function ImageTextSection({
  title,
  subtitle,
  paragraphs,
  stats,
  imageSrc,
  imageAlt,
  imageOnRight = true,
  className = '',
}: ImageTextSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.img-txt-item'), {
              translateY: { to: 0, from: 24 },
              opacity: { to: 1, from: 0 },
              duration: 550,
              delay: (el, i) => i * 80,
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

  const textBlock = (
    <div className="flex flex-col justify-center">
      {subtitle && (
        <p className="img-txt-item text-sm font-semibold uppercase tracking-wider text-unicore-accent mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="img-txt-item text-xl sm:text-2xl md:text-3xl font-bold text-design-dark mb-3 sm:mb-4 tracking-tight">
        {title}
      </h2>
      {paragraphs.map((p, i) => (
        <p key={i} className="img-txt-item text-design-mid text-sm sm:text-base font-normal leading-relaxed mb-2 sm:mb-3">
          {p}
        </p>
      ))}
      {stats && stats.length > 0 && (
        <div className="img-txt-item grid grid-cols-3 gap-3 mt-4">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-design-dark">{stat.value}</div>
              <div className="text-sm text-design-mid uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const imageBlock = (
    <div className="img-txt-item rounded-2xl overflow-hidden shadow-card border border-design-border/80 bg-design-bg aspect-[4/3] max-h-44 min-h-[140px] sm:max-h-none sm:min-h-[220px] md:min-h-[240px] w-full transition-shadow duration-300 group-hover:shadow-card-hover">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <section ref={sectionRef} className={`py-10 sm:py-12 md:py-16 lg:py-20 px-5 sm:px-6 md:px-8 ${className}`.trim()}>
      <div className="max-w-6xl mx-auto w-full overflow-hidden px-1 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center group">
          <div className={`order-2 ${imageOnRight ? 'md:order-1' : 'md:order-2'}`}>{textBlock}</div>
          <div className={`order-1 ${imageOnRight ? 'md:order-2' : 'md:order-1'}`}>{imageBlock}</div>
        </div>
      </div>
    </section>
  );
}
