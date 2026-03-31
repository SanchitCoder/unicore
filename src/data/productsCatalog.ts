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
    imageSrc: '/eurus-front.jpg',
    imageAlt: 'EURUS 18 inch wall oscillating fan',
    productDetailsName: 'EURUS 18" WALL (Oscillating)',
  },
  {
    title: 'SUPER STAR 20" (Non-Oscillating)',
    badge: 'Farrata Fans',
    description:
      'Non-oscillating pedestal fan engineered for continuous airflow and durability.',
    bullets: ['Speed: 1350 rpm', 'Sweep: 500 mm', 'Power: 135 W', 'Usage: Domestic Fans'],
    imageSrc: '/super-20.jpg',
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
    imageSrc: '/aero-front.jpg',
    imageAlt: 'AEROTHRUST 24 inch air circulator fan',
    productDetailsName: 'AEROTHRUST 24" (Oscillating)',
  },
];

export const airCoolerCards: CatalogCard[] = [
  {
    title: 'AirMaxx',
    badge: 'Air Coolers',
    description:
      'High-capacity cooling with a 19" centrifugal fan, 4800 CMH airflow, and a 120 L tank—built for factories, warehouses, and demanding industrial spaces.',
    bullets: ['Air Flow: 4800 CMH', '120 L tank • Cu motor', '880 × 630 × 1480 mm'],
    imageSrc: '/airmaxx-front.jpeg',
    imageAlt: 'AirMaxx industrial air cooler',
    productDetailsName: 'AirMaxx',
  },
  {
    title: 'CoolBreeze',
    badge: 'Air Coolers',
    description:
      '20" centrifugal cooling with 60 ft air throw, 135 L tank, and three-side honeycomb pads for strong airflow across large industrial and commercial areas.',
    bullets: ['Air Throw: 60 ft', '135 L tank • Al motor 1350 RPM', '825 × 596 × 1370 mm'],
    imageSrc: '/cool-front.png',
    imageAlt: 'CoolBreeze industrial air cooler',
    productDetailsName: 'CoolBreeze',
  },
  {
    title: 'Glacier',
    badge: 'Air Coolers',
    description:
      'Large-format 30" industrial cooler with premium matte finish, 200 L tank, and heavy-duty mobility for high-demand ventilation and cooling.',
    bullets: ['30" Centrifugal blade, 4 leaf', '200 L tank', '1140 × 745 × 1840 mm'],
    imageSrc: '/glacier-front.jpeg',
    imageAlt: 'Glacier industrial air cooler',
    productDetailsName: 'Glacier',
  },
];

export const allProductsCards: CatalogCard[] = [
  ...exhaustFanCards,
  ...farrataFanCards,
  ...airCirculatorCards,
  ...airCoolerCards,
];

