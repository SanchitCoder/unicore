import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { Link } from 'react-router-dom';

const exhaustFanModels = [
  {
    name: 'SUPREME PLUS Industrial Exhaust Fan',
    speed: '1360 RPM',
    sweep: '450 mm',
    blade: 'Aluminum Hub with MS Blade',
    power: '320 W',
    voltage: 'AC 220 – 240 V, 50 Hz',
    usage: 'Industrial',
    blades: '4 Leaf',
    imageSrc: '/products/supreme-plus/main.jpg',
    imageAlt: 'SUPREME PLUS industrial exhaust fan',
  },
];

const pedestalFanModels = [
  {
    name: 'EURUS 18" WALL (Oscillating)',
    speed: '1400 rpm',
    sweep: '450 mm',
    blade: 'Aluminum Blade (light weight)',
    power: '105 W',
    voltage: 'AC 220 – 240 V, 50 Hz',
    usage: 'Domestic Fans',
    blades: '3 Leaf',
    motor: 'Aluminum Windings',
    imageSrc: '/products/eurus-18/main.jpg',
    imageAlt: 'EURUS 18 inch wall oscillating fan',
  },
  {
    name: 'SUPER STAR 20" (Non-Oscillating)',
    speed: '1350 rpm',
    sweep: '500 mm',
    blade: 'Aluminum Blade (light weight)',
    power: '135 W',
    voltage: 'AC 220 – 240 V, 50 Hz',
    usage: 'Domestic Fans',
    blades: '3 Leaf',
    imageSrc: '/super-20.jpg',
    imageAlt: 'SUPER STAR 20 inch non-oscillating pedestal fan',
  },
];

const circulatorFanModels = [
  {
    name: 'AEROTHRUST 18" (Oscillating)',
    speed: '1400 rpm',
    sweep: '450 mm',
    blade: 'Aluminum Casted Blade',
    power: '105 W',
    voltage: 'AC 220 – 240 V, 50 Hz',
    usage: 'Industrial',
    blades: '3 Leaf',
    motor: 'Copper Winding',
    imageSrc: '/products/aerothrust-18/main.jpg',
    imageAlt: 'AEROTHRUST 18 inch air circulator fan',
  },
  {
    name: 'AEROTHRUST 24" (Oscillating)',
    speed: '1400 rpm',
    sweep: '600 mm',
    blade: 'Aluminum Casted Blade',
    power: '200 W',
    voltage: 'AC 220 – 240 V, 50 Hz',
    usage: 'Industrial',
    blades: '3 Leaf',
    motor: 'Copper Winding',
    imageSrc: '/aero-front.jpg',
    imageAlt: 'AEROTHRUST 24 inch air circulator fan',
  },
];

export default function ProductLines() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const openProductDetails = (_productName: string) => {
    window.location.href = '/contact';
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.product-line-item'), {
              translateY: { to: 0, from: 28 },
              opacity: { to: 1, from: 0 },
              duration: 550,
              delay: stagger(45),
              ease: 'out-cubic',
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  // Zoom-in animation for available model cards
  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;
    const cards = container.querySelectorAll('.model-card-zoom');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animate(entry.target as HTMLElement, {
            scale: { to: 1, from: 0.95 },
            opacity: { to: 1, from: 0 },
            duration: 450,
            ease: 'out-cubic',
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Blue hero box - same style as About UNICORE on About Us page */}
      <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-unicore-dark via-unicore-dark-light to-unicore-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(46,203,182,0.12)_0%,transparent_50%)]" aria-hidden />
        <div ref={sectionRef} className="relative z-10 max-w-4xl mx-auto w-full">
          <div className="product-line-item text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight tracking-tight drop-shadow-hero">
              Industrial Cooling & Ventilation Products – UNICORE
            </h1>
            <p className="text-white/95 text-base sm:text-lg font-normal leading-relaxed mb-3 sm:mb-4 drop-shadow-hero">
              UNICORE offers a wide range of industrial cooling and ventilation products designed for factories, warehouses, workshops, manufacturing plants, and commercial facilities. Our product range includes industrial air coolers, heavy duty exhaust fans, air circulator fans, and high-performance pedestal fans built for powerful airflow and long-term industrial use.
            </p>
            <p className="text-white/95 text-base sm:text-lg font-normal leading-relaxed mb-3 sm:mb-4 drop-shadow-hero">
              Designed in collaboration with experienced manufacturers, UNICORE products deliver efficient air circulation, durability, and reliable performance for large industrial environments.
            </p>
            <p className="text-white/95 text-base sm:text-lg font-normal leading-relaxed drop-shadow-hero">
              Whether you need bulk industrial fans, ventilation systems, or cooling solutions for factories, UNICORE provides dependable products for large-scale requirements.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-white scroll-mt-24">
        <div ref={contentRef} className="max-w-4xl mx-auto w-full overflow-hidden">
        {/* In-section navigation */}
        {/* H2: Our Industrial Product Range */}
        <div id="product-range" className="product-line-item mb-8 sm:mb-10 md:mb-12 scroll-mt-24 sm:scroll-mt-28">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-design-dark mb-2 sm:mb-3">
            Our Industrial Product Range
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <p className="text-design-mid text-lg font-normal leading-relaxed">
            UNICORE supplies a complete range of industrial air cooling and ventilation equipment for large spaces. Our products are engineered to handle high airflow requirements, continuous operation, and demanding industrial conditions.
          </p>
        </div>

        {/* Layout: split product sections into 2 columns (left heavy-duty, right home/comfort) */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
        {/* H2: Heavy Duty Industrial Exhaust Fans */}
        <div id="exhaust-fans" className="product-line-item mb-6 sm:mb-8 md:mb-10 scroll-mt-24 sm:scroll-mt-28">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-design-dark mb-3 sm:mb-4">
            Heavy Duty Industrial Exhaust Fans
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <h3 className="text-xl font-semibold text-design-dark mb-2">Available Models</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mb-4">
            {exhaustFanModels.map((m, i) => (
              <div key={i} className="model-card-zoom opacity-0 scale-[0.92] rounded-xl border border-design-border bg-white overflow-hidden shadow-card hover:scale-[1.01] hover:shadow-card-hover hover:border-unicore-accent/40 transition-all duration-300">
                <div className="aspect-[4/3] max-h-36 w-full bg-design-bg overflow-hidden flex items-center justify-center">
                  <img src={m.imageSrc} alt={m.imageAlt} loading="lazy" decoding="async" className="w-full h-full object-contain" />
                </div>
                <div className="p-3">
                  <p className="font-semibold text-design-dark text-sm mb-1.5 line-clamp-2">{m.name}</p>
                  <div className="grid gap-0.5 text-design-mid text-xs mb-3">
                    <span>Speed: {m.speed}</span>
                    <span>Sweep: {m.sweep}</span>
                    {m.blade && <span className="line-clamp-1">Blade: {m.blade}</span>}
                    <span>Power: {m.power}</span>
                    {m.voltage && <span>Power Req.: {m.voltage}</span>}
                    {m.usage && <span>Usage: {m.usage}</span>}
                    {m.blades && <span>Blades: {m.blades}</span>}
                  </div>
                  <button type="button" onClick={() => openProductDetails(m.name)} className="block w-full text-center py-2 px-3 rounded-lg bg-unicore-accent text-white text-sm font-medium hover:bg-unicore-accent-hover transition-colors">View Details</button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-design-mid text-lg font-normal leading-relaxed">
            These exhaust fans are ideal for factories, warehouses, industrial kitchens, workshops, and large production units.
          </p>
        </div>

        {/* H2: Industrial Pedestal Fans (Farrata Fans) */}
        <div id="pedestal-fans" className="product-line-item mb-6 sm:mb-8 md:mb-10 scroll-mt-24 sm:scroll-mt-28">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-design-dark mb-3 sm:mb-4">
            Industrial Pedestal Fans (Farrata Fans)
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <h3 className="text-xl font-semibold text-design-dark mb-2">Available Models</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mb-4">
            {pedestalFanModels.map((m, i) => (
              <div key={i} className="model-card-zoom opacity-0 scale-[0.92] rounded-xl border border-design-border bg-white overflow-hidden shadow-card hover:scale-[1.01] hover:shadow-card-hover hover:border-unicore-accent/40 transition-all duration-300">
                <div className="aspect-[4/3] max-h-36 w-full bg-design-bg overflow-hidden flex items-center justify-center">
                  <img src={m.imageSrc} alt={m.imageAlt} loading="lazy" decoding="async" className="w-full h-full object-contain" />
                </div>
                <div className="p-3">
                  <p className="font-semibold text-design-dark text-sm mb-1.5 line-clamp-2">{m.name}</p>
                  <div className="grid gap-0.5 text-design-mid text-xs mb-3">
                    <span>Speed: {m.speed}</span>
                    <span>Sweep: {m.sweep}</span>
                    <span>Blade: {m.blade}</span>
                    <span>Power: {m.power}</span>
                    {m.voltage && <span>Power Req.: {m.voltage}</span>}
                    {m.usage && <span>Usage: {m.usage}</span>}
                    {m.blades && <span>Blades: {m.blades}</span>}
                  </div>
                  <button type="button" onClick={() => openProductDetails(m.name)} className="block w-full text-center py-2 px-3 rounded-lg bg-unicore-accent text-white text-sm font-medium hover:bg-unicore-accent-hover transition-colors">View Details</button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-design-mid text-lg font-normal leading-relaxed">
            These fans are suitable for industrial floors, production units, warehouses, and large indoor working environments.
          </p>
        </div>

          </div>

          <div>
        {/* H2: Industrial Air Circulator Fans */}
        <div id="circulator-fans" className="product-line-item mb-6 sm:mb-8 md:mb-10 scroll-mt-24 sm:scroll-mt-28">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-design-dark mb-3 sm:mb-4">
            Industrial Air Circulator Fans
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <h3 className="text-xl font-semibold text-design-dark mb-2">Available Models</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mb-4">
            {circulatorFanModels.map((m, i) => (
              <div key={i} className="model-card-zoom opacity-0 scale-[0.92] rounded-xl border border-design-border bg-white overflow-hidden shadow-card hover:scale-[1.01] hover:shadow-card-hover hover:border-unicore-accent/40 transition-all duration-300">
                <div className="aspect-[4/3] max-h-36 w-full bg-design-bg overflow-hidden flex items-center justify-center">
                  <img src={m.imageSrc} alt={m.imageAlt} loading="lazy" decoding="async" className="w-full h-full object-contain" />
                </div>
                <div className="p-3">
                  <p className="font-semibold text-design-dark text-sm mb-1.5 line-clamp-2">{m.name}</p>
                  <div className="grid gap-0.5 text-design-mid text-xs mb-3">
                    <span>Speed: {m.speed}</span>
                    <span>Sweep: {m.sweep}</span>
                    {m.blade && <span className="line-clamp-1">Blade: {m.blade}</span>}
                    <span>Power: {m.power}</span>
                    {m.voltage && <span>Power Req.: {m.voltage}</span>}
                    {m.usage && <span>Usage: {m.usage}</span>}
                    {m.blades && <span>Blades: {m.blades}</span>}
                  </div>
                  <button type="button" onClick={() => openProductDetails(m.name)} className="block w-full text-center py-2 px-3 rounded-lg bg-unicore-accent text-white text-sm font-medium hover:bg-unicore-accent-hover transition-colors">View Details</button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-design-mid text-lg font-normal leading-relaxed">
            These fans are widely used in industrial plants, warehouses, assembly lines, and manufacturing facilities.
          </p>
        </div>

        {/* H2: Industrial Air Coolers */}
        <div id="air-coolers" className="product-line-item mb-6 sm:mb-8 md:mb-10 scroll-mt-24 sm:scroll-mt-28">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-design-dark mb-3 sm:mb-4">
            Industrial Air Coolers
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <h3 className="text-xl font-semibold text-design-dark mb-2">Available Models</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
            <div className="model-card-zoom opacity-0 scale-[0.92] rounded-xl border border-design-border bg-white overflow-hidden shadow-card hover:scale-[1.01] hover:shadow-card-hover hover:border-unicore-accent/40 transition-all duration-300">
              <div className="aspect-[4/3] max-h-36 w-full bg-design-bg overflow-hidden flex items-center justify-center">
                <img src="/airmaxx-front.jpeg" alt="AirMaxx industrial air cooler" loading="lazy" decoding="async" className="w-full h-full object-contain" />
              </div>
              <div className="p-3">
                <h4 className="font-semibold text-design-dark text-sm mb-1">AirMaxx</h4>
                <p className="text-design-mid text-xs mb-2">19&quot; centrifugal • 4800 CMH</p>
                <ul className="list-none space-y-0.5 text-design-mid text-xs mb-3">
                  <li>• 120 L tank • Cu motor</li>
                  <li>• 880 × 630 × 1480 mm</li>
                </ul>
                <p className="text-design-mid text-xs mb-3">Factories, warehouses &amp; workshops.</p>
                <button type="button" onClick={() => openProductDetails('AirMaxx')} className="block w-full text-center py-2 px-3 rounded-lg bg-unicore-accent text-white text-sm font-medium hover:bg-unicore-accent-hover transition-colors">View Details</button>
              </div>
            </div>

            <div className="model-card-zoom opacity-0 scale-[0.92] rounded-xl border border-design-border bg-white overflow-hidden shadow-card hover:scale-[1.01] hover:shadow-card-hover hover:border-unicore-accent/40 transition-all duration-300">
              <div className="aspect-[4/3] max-h-36 w-full bg-design-bg overflow-hidden flex items-center justify-center">
                <img src="/cool-front.png" alt="CoolBreeze industrial air cooler" loading="lazy" decoding="async" className="w-full h-full object-contain" />
              </div>
              <div className="p-3">
                <h4 className="font-semibold text-design-dark text-sm mb-1">CoolBreeze</h4>
                <p className="text-design-mid text-xs mb-2">20&quot; centrifugal • 60 ft throw</p>
                <ul className="list-none space-y-0.5 text-design-mid text-xs mb-3">
                  <li>• 135 L tank • Al motor 1350 RPM</li>
                  <li>• 825 × 596 × 1370 mm</li>
                </ul>
                <p className="text-design-mid text-xs mb-3">Large industrial &amp; commercial spaces.</p>
                <button type="button" onClick={() => openProductDetails('CoolBreeze')} className="block w-full text-center py-2 px-3 rounded-lg bg-unicore-accent text-white text-sm font-medium hover:bg-unicore-accent-hover transition-colors">View Details</button>
              </div>
            </div>

            <div className="model-card-zoom opacity-0 scale-[0.92] rounded-xl border border-design-border bg-white overflow-hidden shadow-card hover:scale-[1.01] hover:shadow-card-hover hover:border-unicore-accent/40 transition-all duration-300">
              <div className="aspect-[4/3] max-h-36 w-full bg-design-bg overflow-hidden flex items-center justify-center">
                <img src="/glacier-front.jpeg" alt="Glacier industrial air cooler" loading="lazy" decoding="async" className="w-full h-full object-contain" />
              </div>
              <div className="p-3">
                <h4 className="font-semibold text-design-dark text-sm mb-1">Glacier</h4>
                <p className="text-design-mid text-xs mb-2">30&quot; centrifugal • 200 L tank</p>
                <ul className="list-none space-y-0.5 text-design-mid text-xs mb-3">
                  <li>• Premium matte finish body</li>
                  <li>• 1140 × 745 × 1840 mm</li>
                </ul>
                <p className="text-design-mid text-xs mb-3">Large facilities &amp; high cooling demand.</p>
                <button type="button" onClick={() => openProductDetails('Glacier')} className="block w-full text-center py-2 px-3 rounded-lg bg-unicore-accent text-white text-sm font-medium hover:bg-unicore-accent-hover transition-colors">View Details</button>
              </div>
            </div>
          </div>
        </div>

          </div>
        </div>

        {/* Bulk Industrial Orders & Distributor Enquiries (opens the dedicated form in a new tab) */}
        <div className="product-line-item scroll-mt-24 sm:scroll-mt-28">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-design-dark mb-3 sm:mb-4">
            Bulk Industrial Orders & Distributor Enquiries
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-6" />
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-unicore-accent text-white font-semibold shadow-btn hover:bg-unicore-accent-hover hover:shadow-btn-hover transition-colors text-sm"
          >
            Submit Bulk Enquiry
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
