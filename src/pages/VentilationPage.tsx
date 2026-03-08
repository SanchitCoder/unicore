import Layout from '../components/Layout';
import IndustrialVentilationSystems from '../components/IndustrialVentilationSystems';
import ImageTextSection from '../components/ImageTextSection';
import ImageStrip from '../components/ImageStrip';

export default function VentilationPage() {
  return (
    <Layout>
      <div className="pt-16 sm:pt-20">
        <ImageTextSection
          title="Industrial Ventilation Systems and High-Performance Fans"
          paragraphs={[
            'Proper ventilation is essential for maintaining airflow, removing heat, and improving air quality in industrial environments.',
            'UNICORE provides a range of industrial ventilation systems and high-performance fans designed for factories, warehouses, and workshops.',
          ]}
          imageSrc="https://picsum.photos/seed/vent-main/800/600"
          imageAlt="Industrial ventilation systems"
          imageOnRight={false}
        />
      </div>
      <ImageStrip
        title="Ventilation in Action"
        images={[
          { src: 'https://picsum.photos/seed/vent-img1/600/400', alt: 'Industrial airflow' },
          { src: 'https://picsum.photos/seed/vent-img2/600/400', alt: 'Fan systems' },
          { src: 'https://picsum.photos/seed/vent-img3/600/400', alt: 'Facility ventilation' },
        ]}
        className="bg-design-bg"
      />
      <IndustrialVentilationSystems />
      <ImageTextSection
        title="Reliable Airflow for Large Spaces"
        paragraphs={[
          'From exhaust fans to circulators, our ventilation range is built for 24/7 operation. Partner with UNICORE for bulk orders and project-based supply across India.',
        ]}
        imageSrc="https://picsum.photos/seed/vent-reliable/800/600"
        imageAlt="Large-scale ventilation"
        imageOnRight={true}
        className="bg-white"
      />
    </Layout>
  );
}
