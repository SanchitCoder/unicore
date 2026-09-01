import { CategoryKey, Product, getProductsByCategory } from './products';

export type CatalogCard = {
  slug: string;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  productDetailsName: string;
};

function toCard(product: Product): CatalogCard {
  return {
    slug: product.slug,
    title: product.name,
    badge: product.categoryLabel,
    description: product.tagline,
    bullets: product.bullets,
    imageSrc: product.cardImage,
    imageAlt: product.name,
    productDetailsName: product.name,
  };
}

function cardsFor(categoryKey: CategoryKey): CatalogCard[] {
  return getProductsByCategory(categoryKey).map(toCard);
}

export const exhaustFanCards: CatalogCard[] = cardsFor('exhaust');
export const farrataFanCards: CatalogCard[] = cardsFor('farrata');
export const wallFanCards: CatalogCard[] = cardsFor('wall');
export const airCirculatorCards: CatalogCard[] = cardsFor('circulators');
export const ductCoolerCards: CatalogCard[] = cardsFor('duct-coolers');
export const airCoolerCards: CatalogCard[] = cardsFor('coolers');
export const centrifugalFanCards: CatalogCard[] = cardsFor('centrifugal');

export const allProductsCards: CatalogCard[] = [
  ...exhaustFanCards,
  ...farrataFanCards,
  ...wallFanCards,
  ...airCirculatorCards,
  ...ductCoolerCards,
  ...airCoolerCards,
  ...centrifugalFanCards,
];
