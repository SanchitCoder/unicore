import { BadgeCheck, Globe, Settings } from 'lucide-react';

const items = [
  {
    icon: Settings,
    title: 'Precision Engineering',
    description:
      'Advanced manufacturing processes and rigorous quality control ensure every product meets the highest industry standards for performance and durability.',
  },
  {
    icon: BadgeCheck,
    title: 'ISO Certified Manufacturing',
    description:
      'Our facilities maintain international quality certifications, demonstrating our commitment to excellence in every aspect of production and testing.',
  },
  {
    icon: Globe,
    title: 'Worldwide Service Network',
    description:
      'Comprehensive support infrastructure spanning 50+ countries ensures rapid response times and reliable after-sales service wherever you operate.',
  },
] as const;

export default function HomeAssuranceSection() {
  return (
    <section className="py-10 sm:py-12 bg-design-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="min-w-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-unicore-accent mx-auto flex items-center justify-center">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="mt-4 text-base sm:text-lg font-semibold text-design-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-design-mid leading-relaxed max-w-sm mx-auto">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

