import { ArrowRight } from 'lucide-react';

const points = [
  {
    no: '01',
    title: 'Advanced CNC Machining',
    description:
      'Computer-controlled precision manufacturing for consistent quality and tight tolerances.',
  },
  {
    no: '02',
    title: 'Automated Assembly Lines',
    description:
      'Streamlined production processes ensuring efficiency and reliability at scale.',
  },
  {
    no: '03',
    title: 'Rigorous Quality Testing',
    description:
      'Multi-stage inspection protocols verifying performance before shipment.',
  },
  {
    no: '04',
    title: 'Energy Efficiency Standards',
    description:
      'Sustainable design principles reduce environmental impact and operating costs.',
  },
] as const;

export default function ProductsIndustryExcellenceSection({
  imageSrc = '/manufacturing-excellence.png',
}: {
  imageSrc?: string;
}) {
  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: image */}
          <div className="w-full lg:w-[52%]">
            <h2 className="text-[2.3rem] sm:text-[2.8rem] leading-[1.05] font-bold text-design-dark mb-8">
              <span className="block">Manufacturing</span>
              <span className="block">Excellence</span>
            </h2>

            <div className="rounded-[26px] border-[12px] border-unicore-dark/40 overflow-hidden shadow-card">
              <img
                src={imageSrc}
                alt="Manufacturing Excellence"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: cards */}
          <div className="w-full lg:w-[48%]">
            <p className="text-design-mid text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
              State-of-the-art facilities equipped with advanced automation and precision machinery, backed by decades of engineering expertise and continuous innovation.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {points.map((p) => (
                <div
                  key={p.no}
                  className="relative rounded-2xl bg-white shadow-card p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-unicore-accent flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                      {p.no}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-design-dark font-semibold text-sm sm:text-base">
                        {p.title}
                      </h3>
                      <p className="text-design-mid text-xs sm:text-sm leading-relaxed mt-2">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-5 right-5 text-unicore-accent">
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

