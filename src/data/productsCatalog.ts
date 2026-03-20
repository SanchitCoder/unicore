export type CatalogCard = {
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  productDetailsName: string;
};

export const exhaustFanCards: CatalogCard[] = [
  {
    title: 'SUPREME PLUS Industrial Exhaust Fan',
    badge: 'Exhaust Fans',
    description:
      'Heavy-duty exhaust ventilation designed to remove heat, smoke, dust, and humidity from large facilities.',
    bullets: ['Speed: 1360 RPM', 'Sweep: 450 mm', 'Power: 320 W', 'Usage: Industrial'],
    imageSrc: '/products/supreme-plus/main.jpg',
    imageAlt: 'SUPREME PLUS industrial exhaust fan',
    productDetailsName: 'SUPREME PLUS Industrial Exhaust Fan',
  },
];

export const farrataFanCards: CatalogCard[] = [
  {
    title: 'EURUS 18" WALL (Oscillating)',
    badge: 'Farrata Fans',
    description:
      'Residential pedestal/wall fan for balanced ventilation with reliable airflow performance.',
    bullets: ['Speed: 1400 rpm', 'Sweep: 450 mm', 'Power: 105 W', 'Usage: Domestic Fans'],
    imageSrc: '/products/eurus-18/main.jpg',
    imageAlt: 'EURUS 18 inch wall oscillating fan',
    productDetailsName: 'EURUS 18" WALL (Oscillating)',
  },
  {
    title: 'SUPER STAR 20" (Non-Oscillating)',
    badge: 'Farrata Fans',
    description:
      'Non-oscillating pedestal fan engineered for continuous airflow and durability.',
    bullets: ['Speed: 1350 rpm', 'Sweep: 500 mm', 'Power: 135 W', 'Usage: Domestic Fans'],
    imageSrc: '/products/super-star-20/main.jpg',
    imageAlt: 'SUPER STAR 20 inch non-oscillating pedestal fan',
    productDetailsName: 'SUPER STAR 20" (Non-Oscillating)',
  },
];

export const airCirculatorCards: CatalogCard[] = [
  {
    title: 'AEROTHRUST 18" (Oscillating)',
    badge: 'Air Circulators',
    description:
      'Air circulator fan built for strong air throw and consistent ventilation across industrial spaces.',
    bullets: ['Speed: 1400 rpm', 'Sweep: 450 mm', 'Power: 105 W', 'Usage: Industrial'],
    imageSrc: '/products/aerothrust-18/main.jpg',
    imageAlt: 'AEROTHRUST 18 inch air circulator fan',
    productDetailsName: 'AEROTHRUST 18" (Oscillating)',
  },
  {
    title: 'AEROTHRUST 24" (Oscillating)',
    badge: 'Air Circulators',
    description:
      'High-performance air circulation for large facilities, with durable blades and reliable operation.',
    bullets: ['Speed: 1400 rpm', 'Sweep: 600 mm', 'Power: 200 W', 'Usage: Industrial'],
    imageSrc: '/products/aerothrust-24/main.jpg',
    imageAlt: 'AEROTHRUST 24 inch air circulator fan',
    productDetailsName: 'AEROTHRUST 24" (Oscillating)',
  },
];

export const airCoolerCards: CatalogCard[] = [
  {
    title: 'THAR Series Industrial Air Coolers',
    badge: 'Air Coolers',
    description: 'Medium-sized factories & workshops—powerful cooling for demanding conditions.',
    bullets: ['Airflow: Up to 12,000 CMH', '800 W • 3 Speed'],
    imageSrc: '/energy-efficient-cooler.png',
    imageAlt: 'THAR Series Industrial Air Coolers',
    productDetailsName: 'THAR Series Industrial Air Coolers',
  },
  {
    title: 'THUNDER Series Industrial Air Coolers',
    badge: 'Air Coolers',
    description: 'Large warehouses & manufacturing plants—advanced cooling with tank support.',
    bullets: ['Airflow: Up to 23,000 CMH', '1100–1500 W • 70L Tank'],
    imageSrc: '/commercial-cooling.png',
    imageAlt: 'THUNDER Series Industrial Air Coolers',
    productDetailsName: 'THUNDER Series Industrial Air Coolers',
  },
  {
    title: 'THUNDER Advanced Industrial Air Coolers',
    badge: 'Air Coolers',
    description: 'Large plants, high cooling demand—speed control with remote operation.',
    bullets: ['Airflow: Up to 30,000 CMH', '12 Speed • Remote Control'],
    imageSrc: '/industrial-coolers-fans.png',
    imageAlt: 'THUNDER Advanced Industrial Air Coolers',
    productDetailsName: 'THUNDER Advanced Industrial Air Coolers',
  },
];

export const allProductsCards: CatalogCard[] = [
  ...exhaustFanCards,
  ...farrataFanCards,
  ...airCirculatorCards,
  ...airCoolerCards,
];

