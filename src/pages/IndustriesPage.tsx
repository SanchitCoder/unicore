import Layout from '../components/Layout';
import ManufacturingExcellence from '../components/ManufacturingExcellence';
import SectorImageGrid from '../components/SectorImageGrid';
import ImageTextSection from '../components/ImageTextSection';
import ImageStrip from '../components/ImageStrip';

const sectorCards = [
  { title: 'Factories', imageSrc: 'https://picsum.photos/seed/sector-factory/600/400', imageAlt: 'Factory' },
  { title: 'Warehouses', imageSrc: 'https://picsum.photos/seed/sector-warehouse/600/400', imageAlt: 'Warehouse' },
  { title: 'Manufacturing Units', imageSrc: 'https://picsum.photos/seed/sector-mfg/600/400', imageAlt: 'Manufacturing' },
  { title: 'Workshops', imageSrc: 'https://picsum.photos/seed/sector-workshop/600/400', imageAlt: 'Workshop' },
  { title: 'Logistics Centers', imageSrc: 'https://picsum.photos/seed/sector-logistics/600/400', imageAlt: 'Logistics' },
  { title: 'Commercial Facilities', imageSrc: 'https://picsum.photos/seed/sector-commercial/600/400', imageAlt: 'Commercial' },
];

export default function IndustriesPage() {
  return (
    <Layout>
      <div className="pt-16 sm:pt-20">
        <SectorImageGrid
          title="Trusted Across Multiple Industrial Sectors"
          subtitle="Delivering specialized cooling and ventilation solutions across diverse industrial sectors."
          sectors={sectorCards}
        />
      </div>
      <ImageTextSection
        title="Cooling and Ventilation Where You Need It"
        paragraphs={[
          'Manufacturing plants, warehouses, workshops, and commercial facilities all face unique climate challenges. UNICORE solutions are deployed across these sectors to improve comfort, protect equipment, and support productivity.',
        ]}
        imageSrc="https://picsum.photos/seed/ind-cooling/800/600"
        imageAlt="Industrial sectors"
        imageOnRight={false}
        className="bg-design-bg"
      />
      <ManufacturingExcellence />
      <ImageStrip
        title="Industries We Serve"
        images={[
          { src: 'https://picsum.photos/seed/ind1/600/400', alt: 'Manufacturing' },
          { src: 'https://picsum.photos/seed/ind2/600/400', alt: 'Warehousing' },
          { src: 'https://picsum.photos/seed/ind3/600/400', alt: 'Commercial' },
        ]}
        className="bg-white"
      />
      <ImageTextSection
        title="Partner with UNICORE for Your Sector"
        paragraphs={[
          'Whether you run a factory, a logistics hub, or a large commercial space, we can support your cooling and ventilation needs with bulk supply and consistent quality.',
        ]}
        imageSrc="https://picsum.photos/seed/ind-partner/800/600"
        imageAlt="Industrial partnership"
        imageOnRight={true}
        className="bg-design-bg"
      />
    </Layout>
  );
}
