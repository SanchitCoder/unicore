import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

type Spec = { label: string; value: string };

function useAutoSlider(length: number, intervalMs: number) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [length, intervalMs]);

  return index;
}

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const decodedProductName = useMemo(() => {
    const raw = productId ?? '';
    try {
      return decodeURIComponent(raw);
    } catch {
      return raw;
    }
  }, [productId]);

  const details = useMemo(() => {
    const map: Record<
      string,
      {
        title: string;
        category: string;
        description: string[];
        specs: Spec[];
        images: string[];
        features?: string[];
      }
    > = {
      'SUPREME PLUS Industrial Exhaust Fan': {
        title: 'SUPREME PLUS Industrial Exhaust Fan',
        category: 'Heavy Duty Exhaust Fans',
        description: [
          'The SUPREME PLUS series is built for continuous industrial exhaust where stable airflow and long service life matter.',
          'Featuring an aluminum hub with an MS blade configuration, these fans are designed for dependable performance in heavy-duty environments.',
        ],
        specs: [
          { label: 'Fan Type', value: 'Heavy Duty Exhaust Fan 18"' },
          { label: 'Blade Material', value: 'Aluminum Hub with MS Blade' },
          { label: 'Speed', value: '1360 RPM' },
          { label: 'Sweep', value: '450 mm' },
          { label: 'Usage', value: 'Industrial' },
          { label: 'Blades', value: '4 Leaf' },
          { label: 'Power Requirement', value: 'AC 220 – 240 V, 50 Hz' },
          { label: 'Watts', value: '320 W' },
        ],
        images: [
          '/products/supreme-plus/1.jpg',
          '/products/supreme-plus/2.jpg',
          '/products/supreme-plus/3.jpg',
          '/products/supreme-plus/4.jpg',
          '/products/supreme-plus/5.jpg',
          '/products/supreme-plus/6.jpg',
          '/products/supreme-plus/7.jpg',
        ],
      },
      'EURUS 18" WALL (Oscillating)': {
        title: 'EURUS 18" WALL (Oscillating)',
        category: 'Pedestal / Circulator Fans',
        description: [
          'EURUS is engineered for reliable everyday circulation in domestic and commercial spaces.',
          'With an oscillating airflow pattern and lightweight aluminum blades, it balances comfort with efficient air movement.',
        ],
        specs: [
          { label: 'Motor', value: 'Aluminium Winding' },
          { label: 'Fan Type', value: 'Wall Fans 18" (Oscillating)' },
          { label: 'Blade Material', value: 'Aluminum Blade (light weight)' },
          { label: 'Speed', value: '1400 rpm' },
          { label: 'Sweep', value: '450 mm' },
          { label: 'Usage', value: 'Domestic Fans' },
          { label: 'Blades', value: '3 Leaf' },
          { label: 'Power Requirement', value: 'AC 220 – 240 V, 50 Hz' },
          { label: 'Watts', value: '105 W' },
        ],
        images: [
          '/products/eurus-18/1.jpg',
          '/products/eurus-18/2.jpg',
          '/products/eurus-18/3.jpg',
          '/products/eurus-18/4.jpg',
          '/products/eurus-18/5.jpg',
          '/products/eurus-18/6.jpg',
        ],
      },
      'SUPER STAR 20" (Non-Oscillating)': {
        title: 'SUPER STAR 20" (Non-Oscillating)',
        category: 'Pedestal Fans',
        description: [
          'The SUPER STAR series offers strong airflow with a lightweight, durable blade setup suitable for regular use.',
          'Designed for stable performance, it is an ideal choice for domestic cooling and circulation.',
        ],
        specs: [
          { label: 'Fan Type', value: 'Pedestal Fans 20" (Non-Oscillating)' },
          { label: 'Blade Material', value: 'Aluminum Blade (light weight)' },
          { label: 'Speed', value: '1350 rpm' },
          { label: 'Sweep', value: '500 mm' },
          { label: 'Usage', value: 'Domestic Fans' },
          { label: 'Blades', value: '3 Leaf' },
          { label: 'Power Requirement', value: 'AC 220 – 240 V, 50 Hz' },
          { label: 'Watts', value: '135 W' },
        ],
        images: [
          '/products/super-star-20/1.jpg',
          '/products/super-star-20/2.jpg',
          '/products/super-star-20/3.jpg',
          '/products/super-star-20/4.jpg',
          '/products/super-star-20/5.jpg',
          '/products/super-star-20/6.jpg',
          '/products/super-star-20/7.jpg',
        ],
      },
      'AEROTHRUST 18" (Oscillating)': {
        title: 'AEROTHRUST 18" (Oscillating)',
        category: 'Air Circulator Fans',
        description: [
          'AEROTHRUST 18" delivers focused circulation with an oscillating airflow pattern designed for comfort and consistency.',
          'Copper winding motor and aluminum casted blades help support reliable performance in demanding environments.',
        ],
        specs: [
          { label: 'Motor', value: 'Copper Winding' },
          { label: 'Fan Type', value: 'Pedestal & Wall Fans 18" (Oscillating)' },
          { label: 'Blade Material', value: 'Aluminum Casted Blade' },
          { label: 'Speed', value: '1400 rpm' },
          { label: 'Sweep', value: '450 mm' },
          { label: 'Usage', value: 'Industrial' },
          { label: 'Blades', value: '3 Leaf' },
          { label: 'Power Requirement', value: 'AC 220 – 240 V, 50 Hz' },
          { label: 'Watts', value: '105 W' },
        ],
        images: [
          '/products/aerothrust-18/1.jpg',
          '/products/aerothrust-18/2.jpg',
          '/products/aerothrust-18/3.jpg',
          '/products/aerothrust-18/4.jpg',
          '/products/aerothrust-18/5.jpg',
        ],
      },
      'AEROTHRUST 24" (Oscillating)': {
        title: 'AEROTHRUST 24" (Oscillating)',
        category: 'Air Circulator Fans',
        description: [
          'AEROTHRUST 24" is designed to move larger volumes of air with an oscillating pattern for broader coverage.',
          'Built with copper winding and durable aluminum casted blades, it supports long-running industrial circulation.',
        ],
        specs: [
          { label: 'Motor', value: 'Copper Winding' },
          { label: 'Fan Type', value: 'Pedestal & Wall Fans 24" (Oscillating)' },
          { label: 'Blade Material', value: 'Aluminum Casted Blade' },
          { label: 'Speed', value: '1400 rpm' },
          { label: 'Sweep', value: '600 mm' },
          { label: 'Usage', value: 'Industrial' },
          { label: 'Blades', value: '3 Leaf' },
          { label: 'Power Requirement', value: 'AC 220 – 240 V, 50 Hz' },
          { label: 'Watts', value: '200 W' },
        ],
        images: [
          '/products/aerothrust-24/1.jpg',
          '/products/aerothrust-24/2.jpg',
          '/products/aerothrust-24/3.png',
          '/products/aerothrust-24/4.jpg',
          '/products/aerothrust-24/5.jpg',
          '/products/aerothrust-24/6.jpg',
          '/products/aerothrust-24/7.jpg',
        ],
      },
      AirMaxx: {
        title: 'AirMaxx',
        category: 'Industrial Air Coolers',
        description: [
          'AirMaxx pairs a 19" centrifugal fan with honeycomb cooling media for powerful, consistent airflow in factories, warehouses, and workshops.',
          'Anti-rust construction, heavy-duty castors, and a 120 L tank support dependable day-to-day industrial use.',
        ],
        specs: [
          { label: 'Fan Type', value: '19" Centrifugal blade, 4 leaf' },
          { label: 'Air Flow', value: '4800 CMH' },
          { label: 'Water Tank Capacity', value: '120 L' },
          { label: 'Motor Type', value: 'Cu Motor' },
          { label: 'Product Dimensions (mm)', value: '880L × 630W × 1480H' },
        ],
        images: ['/Airmaxxx.png'],
        features: [
          '19" FAN - POWERFUL AIR DELIVERY',
          'ANTI RUST VIRGIN - STURDY BODY',
          'HEAVY DUTY CASTOR WHEELS',
          'WATER LEVEL INDICATOR',
          'ANTI BACTERIAL COOLING MEDIA - HONEYCOMB PADS',
          'FITTED WITH UNIFLOW PUMP',
          'COMFORT COOLING',
          'LOW NOISE',
          'EASY DRAIN',
        ],
      },
      CoolBreeze: {
        title: 'CoolBreeze',
        category: 'Industrial Air Coolers',
        description: [
          'CoolBreeze delivers a 20" centrifugal airflow pattern with strong air throw for large industrial and commercial spaces.',
          'Three-side honeycomb pads and a 135 L tank help maintain effective cooling during continuous operation.',
        ],
        specs: [
          { label: 'Fan Type', value: '20" Centrifugal blade, 4 leaf' },
          { label: 'Air Throw', value: '60 ft' },
          { label: 'Water Tank Capacity', value: '135 ltr' },
          { label: 'Motor Type', value: 'Al Motor, 1350 RPM' },
          { label: 'Product Dimensions (mm)', value: '825L × 596W × 1370H' },
        ],
        images: ['/CoolBreeze.png'],
        features: [
          '20" FAN - POWERFUL AIR DELIVERY',
          'STURDY BODY',
          'HEAVY DUTY CASTOR WHEELS',
          'WATER LEVEL INDICATOR',
          '3 SIDE ANTI BACTERIAL COOLING MEDIA - HONEYCOMB PADS',
          'FITTED WITH UNIFLOW PUMP',
          'COMFORT COOLING',
          'LOW NOISE',
          'EASY DRAIN',
        ],
      },
      Glacier: {
        title: 'Glacier',
        category: 'Industrial Air Coolers',
        description: [
          'Glacier is built around a 30" centrifugal fan for high-volume cooling in the largest industrial layouts.',
          'Premium matte finish, 200 L capacity, and rugged mobility make it suited to demanding, project-scale requirements.',
        ],
        specs: [
          { label: 'Fan Type', value: '30" Centrifugal blade, 4 leaf' },
          { label: 'Water Tank Capacity', value: '200 Ltrs.' },
          { label: 'Product Dimensions (mm)', value: '1140L × 745W × 1840H' },
        ],
        images: ['/Glacier.png'],
        features: [
          '30" FAN - POWERFUL AIR DELIVERY',
          'PREMIUM MATTE FINISH - STURDY BODY',
          'HEAVY DUTY CASTOR WHEELS',
          'WATER LEVEL INDICATOR',
          'ANTI BACTERIAL COOLING MEDIA - HONEYCOMB PADS',
          'FITTED WITH UNIFLOW PUMP',
          'COMFORT COOLING',
          'LOW NOISE',
          'EASY DRAIN',
        ],
      },
    };

    return map[decodedProductName] ?? null;
  }, [decodedProductName]);

  const [requestOpen, setRequestOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const galleryIndex = useAutoSlider(details?.images?.length ?? 0, 2000);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!requestOpen) return;
    const t = window.setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    return () => window.clearTimeout(t);
  }, [requestOpen]);

  if (!details) {
    return (
      <Layout>
        <div className="py-24 px-4 sm:px-6 bg-white max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-design-dark mb-3">Product not found</h1>
          <p className="text-design-mid">The product details could not be loaded.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative pt-24 pb-10 px-4 sm:px-6 overflow-hidden bg-unicore-dark text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-unicore-dark via-unicore-dark-light to-unicore-accent opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(46,203,182,0.18)_0%,transparent_55%)]" aria-hidden />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 mb-4">
                <span className="text-sm font-medium text-white/90">{details.category}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-hero">{details.title}</h1>
              {details.description.map((p, i) => (
                <p key={i} className="text-white/95 text-base sm:text-lg font-normal leading-relaxed mb-3 drop-shadow-hero">
                  {p}
                </p>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/5">
              <div className="relative">
                <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${galleryIndex * 100}%)` }}>
                  {details.images.map((src, i) => (
                    <div key={i} className="w-full flex-shrink-0">
                      <div className="aspect-[16/10] w-full bg-design-bg overflow-hidden">
                        <img src={src} alt={`${details.title} ${i + 1}`} className="w-full h-full object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-2 py-4">
                {details.images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Slide ${i + 1}`}
                    className={`h-2 w-2 rounded-full transition-colors ${i === galleryIndex ? 'bg-unicore-accent' : 'bg-white/30'}`}
                    onClick={() => {
                      // Keep dots clickable only when there are multiple slides.
                      // Slider auto-advances; clicking simply sets the index via remount trick.
                      // (We rely on the interval for the rest.)
                      // No-op if single slide.
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-design-dark mb-2">Key Specifications</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {details.specs.map((s, i) => (
              <div key={i} className="rounded-xl border border-design-border bg-white p-4 shadow-card">
                <div className="text-xs font-semibold text-design-mid uppercase tracking-widest mb-2">{s.label}</div>
                <div className="text-sm sm:text-base font-semibold text-design-dark">{s.value}</div>
              </div>
            ))}
          </div>

          {details.features && details.features.length > 0 ? (
            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-design-dark mb-2">Key Features</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-6" />
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {details.features.map((line, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-xl border border-design-border bg-design-bg/60 px-4 py-3 text-sm font-medium text-design-dark"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-unicore-accent" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-8">
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-unicore-accent text-white font-semibold hover:bg-unicore-accent-hover shadow-btn transition-colors"
              onClick={() => setRequestOpen(true)}
            >
              Request Quote
            </button>
            <p className="text-design-mid text-sm mt-3">
              Share your requirements and we will get back with availability, specifications, and a competitive quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 px-4 sm:px-6 bg-design-bg">
        <div ref={formRef} className="max-w-6xl mx-auto">
          {!requestOpen ? null : submitted ? (
            <div className="rounded-2xl border border-unicore-accent/30 bg-unicore-accent/5 p-6 text-center">
              <p className="text-design-dark font-semibold mb-1">Thank you for your request.</p>
              <p className="text-design-mid text-sm">Our team will get back to you shortly.</p>
              <button
                type="button"
                className="mt-4 px-6 py-2.5 rounded-xl bg-unicore-accent text-white font-semibold hover:bg-unicore-accent-hover transition-colors"
                onClick={() => {
                  setRequestOpen(false);
                  setSubmitted(false);
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <div className="rounded-2xl border border-design-border bg-white shadow-card p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-design-dark mb-2">Request Quote for {details.title}</h3>
              <p className="text-design-mid text-sm mb-5">Fill in your details below and we will respond with availability and pricing.</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-design-dark mb-1.5">Name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-design-dark mb-1.5">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-design-dark mb-1.5">Phone</label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm"
                      placeholder="Phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-design-dark mb-1.5">Company</label>
                    <input
                      value={form.company}
                      onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm"
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-design-dark mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm resize-y min-h-[120px]"
                    placeholder="Quantity, installation details, and any requirements..."
                  />
                </div>
                <button type="submit" className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-unicore-accent text-white font-semibold hover:bg-unicore-accent-hover transition-colors">
                  Submit Request
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

