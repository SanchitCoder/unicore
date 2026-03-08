/**
 * Centralized stock image URLs (Picsum – reliable, no auth required).
 * Replace with your own assets when ready.
 */
const PICSUM = (seed: string, w: number, h?: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h ?? w}`;

export const stockImages = {
  /** Logo placeholder (use your logo in public/ when available) */
  logo: 'https://placehold.co/120x48/1F4060/ffffff?text=UNICORE',

  /** Hero / banner */
  hero: PICSUM('industrial-hero', 1920, 1080),

  /** Industrial / manufacturing */
  factory: PICSUM('factory', 800, 600),
  warehouse: PICSUM('warehouse', 800, 600),
  manufacturing: PICSUM('manufacturing', 800, 600),
  equipment: PICSUM('equipment', 800, 600),
  cooling: PICSUM('cooling', 800, 600),
  ventilation: PICSUM('ventilation', 800, 600),
  workshop: PICSUM('workshop', 800, 600),
  industrial: PICSUM('industrial', 800, 600),
  facility: PICSUM('facility', 800, 600),
  logistics: PICSUM('logistics', 800, 600),
  commercial: PICSUM('commercial', 800, 600),

  /** Product / card sizes */
  product: (seed: string) => PICSUM(seed, 600, 400),
  card: (seed: string) => PICSUM(seed, 600, 400),
} as const;
