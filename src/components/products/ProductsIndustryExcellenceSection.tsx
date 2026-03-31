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
    <section className="pt-5 pb-4 sm:py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: image */}
          <div className="w-full lg:w-[52%]">
            <h2 className="text-[1.5rem] sm:text-[2.35rem] leading-[1.08] font-semibold tracking-tight text-design-dark mb-2 sm:mb-4 whitespace-nowrap text-center">
              Strong Manufacturing Partnerships
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-5 mx-auto" />

            <div className="rounded-[26px] border-[12px] border-unicore-dark/40 overflow-hidden shadow-card">
              <img
                src={imageSrc}
                alt="Strong manufacturing partnerships"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: cards */}
          <div className="w-full lg:w-[48%]">
            <p className="text-design-mid text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed text-center sm:text-left">
              UNICORE combines trusted manufacturing partners, rigorous quality assurance, and a responsive supply network to deliver industrial cooling and ventilation solutions at scale.
            </p>

            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${slideIndex * 100}%)` }}
              >
                {points.map((p) => (
                  <div key={p.no} className="w-full flex-shrink-0">
                    <div className="relative rounded-xl bg-design-bg border border-design-border hover:border-unicore-accent hover:shadow-md transition-all duration-300 p-5 sm:p-6 text-center min-h-[250px] sm:min-h-[280px] flex items-center justify-center">
                      <div className="flex flex-col items-center justify-center text-center h-full">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-unicore-accent flex items-center justify-center text-white text-sm sm:text-base font-semibold mb-3">
                          {p.no}
                        </div>
                        <h3 className="text-design-dark font-semibold text-xl sm:text-2xl leading-snug">
                          {p.title}
                        </h3>
                        <p className="text-design-mid text-base sm:text-lg leading-relaxed mt-3 max-w-[95%]">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {points.map((p, i) => (
                <button
                  key={p.no}
                  type="button"
                  onClick={() => setSlideIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === slideIndex ? 'bg-unicore-accent scale-125' : 'bg-design-mid/40 hover:bg-design-mid/60'
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

