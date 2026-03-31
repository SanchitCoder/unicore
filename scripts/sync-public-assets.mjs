/**
 * Copies marketing/product images from the repo root into `public/` so Vite
 * serves them at `/filename` in dev and production. Safe to run on CI when
 * root sources are absent (skips missing files; `public/` remains the source of truth).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const pub = path.join(root, 'public');

/** [source filename in repo root, destination filename in public/] */
const ROOT_TO_PUBLIC = [
  ['About Us top.png', 'about-us-top.png'],
  ['Exhaust Fan.png', 'exhaust-fan.png'],
  ['Industrial Coolers.png', 'industrial-coolers-banner.png'],
  ['Industrial Fan.png', 'industrial-fan.png'],
  ['Our Product banner.png', 'our-product-banner.png'],
  ['airmaxx-front.jpeg', 'airmaxx-front.jpeg'],
  ['airmaxx-1.jpeg', 'airmaxx-1.jpeg'],
  ['airmaxx-2.jpeg', 'airmaxx-2.jpeg'],
  ['Building-hero.png', 'Building-hero.png'],
  ['Images-unicore\\for siddhant\\(27) AEROTHRUST 450 MM WALL (18)\\Aero-front.JPG', 'aero-front.jpg'],
  ['Images-unicore\\for siddhant\\(24) EURUS 18 WALL\\Front-euros.JPG', 'eurus-front.jpg'],
  ["Images-unicore\\for siddhant\\(15) Super Star 20''\\Super-20.jpg", 'super-20.jpg'],
  ['Coolbreeze-2.png', 'coolbreeze-2.png'],
  ['Cool-front.png', 'cool-front.png'],
  ['Glacier-front.jpeg', 'glacier-front.jpeg'],
  ['Manufacturing Industries.jpeg', 'manufacturing-industries.jpeg'],
  ['Production Unit.jpeg', 'production-unit.jpeg'],
  ['Warehouses.jpg', 'warehouses.jpg'],
  ['Workshop.webp', 'workshop.webp'],
];

if (!fs.existsSync(pub)) {
  fs.mkdirSync(pub, { recursive: true });
}

let synced = 0;
for (const [fromName, toName] of ROOT_TO_PUBLIC) {
  const from = path.join(root, fromName);
  const to = path.join(pub, toName);
  if (!fs.existsSync(from)) continue;
  fs.copyFileSync(from, to);
  synced += 1;
  console.log(`[sync-public-assets] ${fromName} → public/${toName}`);
}

if (synced === 0) {
  console.log('[sync-public-assets] No root image sources found; using existing public/ assets.');
} else {
  console.log(`[sync-public-assets] Synced ${synced} file(s).`);
}
