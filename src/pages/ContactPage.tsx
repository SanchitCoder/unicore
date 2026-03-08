import Layout from '../components/Layout';
import IndustrialCoolingSolutions from '../components/IndustrialCoolingSolutions';
import ImageTextSection from '../components/ImageTextSection';
import ImageStrip from '../components/ImageStrip';

export default function ContactPage() {
  return (
    <Layout>
      <div className="pt-16 sm:pt-20">
        <ImageTextSection
          title="Industrial Cooling Solutions for Large Facilities"
          paragraphs={[
            'Maintaining the right temperature and airflow in industrial environments is essential for productivity and worker comfort.',
            'UNICORE provides reliable industrial cooling solutions designed for factories, warehouses, workshops, and production units. Contact us for bulk quotes and partnership enquiries.',
          ]}
          imageSrc="https://picsum.photos/seed/contact-cooling/800/600"
          imageAlt="Industrial cooling solutions"
          imageOnRight={true}
        />
      </div>
      <ImageStrip
        title="Cooling Solutions in Use"
        images={[
          { src: 'https://picsum.photos/seed/contact1/600/400', alt: 'Cooling systems' },
          { src: 'https://picsum.photos/seed/contact2/600/400', alt: 'Industrial facility' },
          { src: 'https://picsum.photos/seed/contact3/600/400', alt: 'Large facilities' },
        ]}
        className="bg-design-bg"
      />
      <IndustrialCoolingSolutions />
      <ImageTextSection
        title="Get in Touch for Bulk Quotes and Partnerships"
        paragraphs={[
          'Discuss your project requirements, bulk order needs, or distributor opportunities with our team. We serve businesses across India with industrial cooling and ventilation equipment.',
        ]}
        imageSrc="https://picsum.photos/seed/contact-touch/800/600"
        imageAlt="Contact UNICORE"
        imageOnRight={false}
        className="bg-white"
      />
    </Layout>
  );
}
