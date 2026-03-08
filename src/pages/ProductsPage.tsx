import Layout from '../components/Layout';
import ProductLines from '../components/ProductLines';
import ProductImageCards from '../components/ProductImageCards';
import ImageTextSection from '../components/ImageTextSection';
import ImageStrip from '../components/ImageStrip';

const productShowcaseCards = [
  {
    title: 'Exhaust Fans',
    description: 'Heavy-duty exhaust fans for industrial ventilation and air extraction.',
    imageSrc: 'https://picsum.photos/seed/prod-exhaust/600/400',
    imageAlt: 'Industrial exhaust fan',
    linkTo: '/products#exhaust-fans',
  },
  {
    title: 'Pedestal Fans',
    description: 'High-performance industrial pedestal fans for large spaces.',
    imageSrc: 'https://picsum.photos/seed/prod-pedestal/600/400',
    imageAlt: 'Industrial pedestal fan',
    linkTo: '/products#pedestal-fans',
  },
  {
    title: 'Air Circulators',
    description: 'Powerful air circulator fans for consistent airflow in workshops.',
    imageSrc: 'https://picsum.photos/seed/prod-circulator/600/400',
    imageAlt: 'Air circulator fan',
    linkTo: '/products#circulator-fans',
  },
  {
    title: 'Industrial Air Coolers',
    description: 'Evaporative cooling systems for factories and warehouses.',
    imageSrc: 'https://picsum.photos/seed/prod-cooler/600/400',
    imageAlt: 'Industrial air cooler',
    linkTo: '/products#air-coolers',
  },
];

export default function ProductsPage() {
  return (
    <Layout>
      <div className="pt-16 sm:pt-20">
        <ProductImageCards
          title="Industrial Cooling & Ventilation Equipment"
          subtitle="High-performance equipment designed for large-scale industrial applications."
          cards={productShowcaseCards}
        />
      </div>
      <ImageTextSection
        title="Engineered for Industrial Demands"
        paragraphs={[
          'Every UNICORE product is designed to withstand continuous operation in demanding environments. From heavy-duty exhaust fans to high-capacity air coolers, we focus on reliability, efficiency, and long service life.',
          'Our range covers ventilation, circulation, and evaporative cooling so you can find the right solution for your facility.',
        ]}
        imageSrc="https://picsum.photos/seed/products-eng/800/600"
        imageAlt="Industrial engineering"
        imageOnRight={true}
        className="bg-white"
      />
      <ProductLines />
      <ImageStrip
        title="Applications Across Industries"
        images={[
          { src: 'https://picsum.photos/seed/app1/600/400', alt: 'Factory' },
          { src: 'https://picsum.photos/seed/app2/600/400', alt: 'Production' },
          { src: 'https://picsum.photos/seed/app3/600/400', alt: 'Cooling' },
        ]}
        className="bg-design-bg"
      />
    </Layout>
  );
}
