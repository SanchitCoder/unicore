import { ArrowRight } from 'lucide-react';

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
  return (
    <section className="pt-1 pb-8 sm:py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: image */}
          <div className="w-full lg:w-[52%]">
            <h2 className="text-[2.3rem] sm:text-[2.8rem] leading-[1.05] font-bold text-design-dark mb-4 sm:mb-8">
              <span className="block">Strong Manufacturing</span>
              <span className="block">Partnerships</span>
            </h2>

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
            <p className="text-design-mid text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed text-left">
              UNICORE combines trusted manufacturing partners, rigorous quality assurance, and a responsive supply network to deliver industrial cooling and ventilation solutions at scale.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {points.map((p) => (
                <div
                  key={p.no}
                  className="relative rounded-2xl bg-white shadow-card p-5 sm:p-6 text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-unicore-accent flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                      {p.no}
                    </div>

                    <div className="flex-1 w-full text-left">
                      <h3 className="block w-full !text-left text-design-dark font-semibold text-sm sm:text-base">
                        {p.title}
                      </h3>
                      <p className="block w-full !text-left text-design-mid text-xs sm:text-sm leading-relaxed mt-2">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:block absolute top-5 right-5 text-unicore-accent">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

