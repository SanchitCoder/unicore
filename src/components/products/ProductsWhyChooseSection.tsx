import { Award, Globe, ShieldCheck, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'High Output',
    description: 'Designed for reliable performance with powerful airflow.',
  },
  {
    icon: Award,
    title: 'Cost Efficiency',
    description: 'Engineered to deliver long-term value across large orders.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'Built and tested for durability and consistent output.',
  },
  {
    icon: Globe,
    title: 'Worldwide Service',
    description: 'Support infrastructure spanning 50+ countries.',
  },
] as const;

export default function ProductsWhyChooseSection() {
  return (
    <section className="py-12 sm:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-design-dark mb-6 text-center">
          Why Choose UNICORE Products
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mx-auto mb-10" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-unicore-accent/10 border border-unicore-accent/30 mx-auto flex items-center justify-center">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-unicore-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-design-dark">{f.title}</h3>
                <p className="mt-2 text-design-mid text-sm leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

