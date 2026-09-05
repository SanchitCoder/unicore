import { useEffect, useState } from 'react';

const points = [
  {
    no: '01',
    title: 'Trusted Manufacturing Partnerships',
    description:
      'UNICORE collaborates with experienced manufacturers specializing in industrial cooling and ventilation equipment to deliver reliable solutions for large-scale applications.',
  },
  {
    no: '02',
    title: 'Quality Assured Products',
    description:
      'All products supplied through UNICORE undergo strict quality standards to ensure reliable performance, durability, and efficiency in demanding industrial environments.',
  },
  {
    no: '03',
    title: 'Reliable Supply Network',
    description:
      'UNICORE enables businesses to source industrial cooling equipment efficiently for large-scale and project-based requirements.',
  },
] as const;

export default function ProductsIndustryExcellenceSection({
  imageSrc = '/manufacturing-excellence.png',
}: {
  imageSrc?: string;
}) {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlideIndex((i) => (i >= points.length - 1 ? 0 : i + 1));
    }, 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="text-unicore-dark">Strong Manufacturing </span>
            <span className="text-unicore-accent">Partnerships</span>
          </h2>
          <div className="h-1 w-20 bg-unicore-accent mx-auto rounded-full mb-4" />
          <p className="text-design-mid text-sm sm:text-base max-w-2xl mx-auto">
            UNICORE combines trusted manufacturing partners, rigorous quality assurance, and a responsive supply network to deliver industrial cooling and ventilation solutions at scale.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left: image */}
          <div className="w-full lg:w-[52%] relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-unicore-accent/8 blur-2xl -z-10" aria-hidden="true" />
            <div className="rounded-3xl overflow-hidden border border-design-border shadow-card-hover">
              <img
                src={imageSrc}
                alt="Strong manufacturing partnerships"
                className="w-full h-72 sm:h-96 object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right: cards */}
          <div className="w-full lg:w-[48%]">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${slideIndex * 100}%)` }}
              >
                {points.map((p) => (
                  <div key={p.no} className="w-full flex-shrink-0 px-0.5">
                    <div className="relative rounded-2xl bg-white border border-design-border shadow-card hover:shadow-card-hover transition-all duration-300 p-6 sm:p-8 text-center min-h-[250px] sm:min-h-[280px] flex items-center justify-center">
                      <div className="flex flex-col items-center justify-center text-center h-full">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-unicore-accent/10 text-unicore-accent flex items-center justify-center text-base sm:text-lg font-bold mb-4">
                          {p.no}
                        </div>
                        <h3 className="text-unicore-dark font-bold text-xl sm:text-2xl leading-snug">{p.title}</h3>
                        <p className="text-design-mid text-sm sm:text-base leading-relaxed mt-3 max-w-[95%]">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-5">
              {points.map((p, i) => (
                <button
                  key={p.no}
                  type="button"
                  onClick={() => setSlideIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === slideIndex ? 'w-6 bg-unicore-accent' : 'w-2 bg-design-mid/30 hover:bg-design-mid/50'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
