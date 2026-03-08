import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animate, stagger } from 'animejs';

const productCategories = [
  'Heavy Duty Exhaust Fans',
  'Industrial Pedestal Fans',
  'Air Circulator Fans',
  'Industrial Air Coolers',
];

const exhaustFanModels = [
  { name: 'PURE Air HDEF 12" Industrial Exhaust Fan', speed: '1400 RPM', sweep: '300 mm', blade: 'MS Sheet with Aluminium Hub', power: '90 W', voltage: '220–240 V', imageSrc: 'https://picsum.photos/seed/exhaust1/600/400', imageAlt: 'PURE Air HDEF 12" Exhaust Fan' },
  { name: 'PURE Air HDEF 15" Industrial Exhaust Fan', speed: '1400 RPM', sweep: '380 mm', power: '145 W', imageSrc: 'https://picsum.photos/seed/exhaust2/600/400', imageAlt: 'PURE Air HDEF 15" Exhaust Fan' },
  { name: 'PURE Air HDEF 24" Industrial Exhaust Fan', speed: '900 RPM', sweep: '600 mm', power: '600 W', imageSrc: 'https://picsum.photos/seed/exhaust3/600/400', imageAlt: 'PURE Air HDEF 24" Exhaust Fan' },
  { name: 'SUPREME PLUS Industrial Exhaust Fan', speed: '1360 RPM', sweep: '450 mm', power: '320 W', imageSrc: 'https://picsum.photos/seed/exhaust4/600/400', imageAlt: 'SUPREME PLUS Exhaust Fan' },
];

const exhaustFanFeatures = [
  'Powerful airflow for industrial ventilation',
  'High-speed motors for effective air extraction',
  'Corrosion-resistant body and durable construction',
  'Double ball bearing system for smooth operation',
  'Energy-efficient performance',
  'Designed for continuous industrial usage',
];

const pedestalFanModels = [
  { name: 'AIR JET 16" Industrial Pedestal Fan', speed: '2400 RPM', sweep: '400 mm', blade: 'Plastic', power: '105 W', imageSrc: 'https://picsum.photos/seed/pedestal1/600/400', imageAlt: 'AIR JET 16" Pedestal Fan' },
  { name: 'EURUS PLUS OSC 18" Industrial Pedestal Fan', speed: '1350 RPM', sweep: '450 mm', blade: 'Aluminum', power: '130 W', imageSrc: 'https://picsum.photos/seed/pedestal2/600/400', imageAlt: 'EURUS PLUS OSC 18" Pedestal Fan' },
  { name: 'SUPER STAR 20" Industrial Pedestal Fan', speed: '1350 RPM', sweep: '500 mm', blade: 'Aluminum', power: '135 W', imageSrc: 'https://picsum.photos/seed/pedestal3/600/400', imageAlt: 'SUPER STAR 20" Pedestal Fan' },
];

const pedestalFanFeatures = [
  'High-speed industrial motor',
  'Powerful air delivery for large spaces',
  'Durable aluminum or plastic fan blades',
  'Stable pedestal structure',
  'Designed for long operational hours',
];

const circulatorFanModels = [
  { name: 'AEROTHRUST 18" Air Circulator Fan', speed: '1400 RPM', power: '150 W', notes: 'Copper winding motor, Aluminum casted blades', imageSrc: 'https://picsum.photos/seed/circ1/600/400', imageAlt: 'AEROTHRUST 18" Circulator Fan' },
  { name: 'AEROTHRUST 24" Air Circulator Fan', speed: '1400 RPM', power: '200 W', imageSrc: 'https://picsum.photos/seed/circ2/600/400', imageAlt: 'AEROTHRUST 24" Circulator Fan' },
  { name: 'AEROTHRUST 30" Air Circulator Fan', speed: '1400 RPM', power: '260 W', imageSrc: 'https://picsum.photos/seed/circ3/600/400', imageAlt: 'AEROTHRUST 30" Circulator Fan' },
];

const circulatorFanFeatures = [
  'Heavy duty copper winding motors',
  'Cast aluminum blades for durability',
  'High air throw for large coverage areas',
  'Suitable for wall or pedestal mounting',
  'Energy-efficient airflow distribution',
];

const airCoolerFeatures = [
  'High airflow capacity for industrial cooling',
  '100% copper motor for durability',
  'Energy-efficient operation',
  'Large water tank capacity',
  'Multiple air discharge options',
  'Strong and durable body design',
];

const bulkCustomers = [
  'Factory Owners',
  'Manufacturing Units',
  'Warehouse Operators',
  'Industrial Contractors',
  'Bulk Equipment Distributors',
];

export default function ProductLines() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
        <div ref={sectionRef} className="relative z-10 max-w-4xl mx-auto w-full">
          <div className="product-line-item text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3 sm:mb-4 leading-tight">
              Industrial Cooling & Ventilation Products – UNICORE
            </h1>
            <p className="text-white/90 text-base sm:text-lg font-normal leading-relaxed mb-3 sm:mb-4">
              UNICORE offers a wide range of industrial cooling and ventilation products designed for factories, warehouses, workshops, manufacturing plants, and commercial facilities. Our product range includes industrial air coolers, heavy duty exhaust fans, air circulator fans, and high-performance pedestal fans built for powerful airflow and long-term industrial use.
            </p>
            <p className="text-white/90 text-base sm:text-lg font-normal leading-relaxed mb-3 sm:mb-4">
              Designed in collaboration with experienced manufacturers, UNICORE products deliver efficient air circulation, durability, and reliable performance for large industrial environments.
            </p>
            <p className="text-white/90 text-base sm:text-lg font-normal leading-relaxed">
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
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-design-dark mb-2 sm:mb-3">
            Our Industrial Product Range
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <p className="text-design-mid text-lg font-normal leading-relaxed mb-4">
            UNICORE supplies a complete range of industrial air cooling and ventilation equipment for large spaces. Our products are engineered to handle high airflow requirements, continuous operation, and demanding industrial conditions.
          </p>
          <p className="text-design-mid font-normal mb-4">Product categories include:</p>
          <ul className="list-none space-y-2 mb-4">
            {productCategories.map((cat, i) => (
              <li key={i} className="flex items-center gap-2 text-design-mid">
                <span className="w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                <span className="font-medium">{cat}</span>
              </li>
            ))}
          </ul>
          <p className="text-design-mid text-lg font-normal leading-relaxed">
            These products are widely used in factories, warehouses, workshops, logistics hubs, and commercial facilities across India.
          </p>
        </div>

        {/* H2: Heavy Duty Industrial Exhaust Fans */}
        <div id="exhaust-fans" className="product-line-item mb-6 sm:mb-8 md:mb-10 scroll-mt-24 sm:scroll-mt-28">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-design-dark mb-3 sm:mb-4">
            Heavy Duty Industrial Exhaust Fans
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <p className="text-design-mid text-lg font-normal leading-relaxed mb-4">
            UNICORE Heavy Duty Exhaust Fans are designed to remove hot air, smoke, dust, and humidity from industrial spaces. These fans help maintain proper ventilation and improve airflow inside factories and production units.
          </p>
          <h3 className="text-xl font-semibold text-design-dark mb-2">Key Features</h3>
          <ul className="list-none space-y-1.5 mb-4">
            {exhaustFanFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-design-mid">
                <span className="w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold text-design-dark mb-2">Available Models</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            {exhaustFanModels.map((m, i) => (
              <div key={i} className="model-card-zoom opacity-0 scale-[0.92] rounded-lg border border-design-border bg-white overflow-hidden hover:scale-[1.02] hover:shadow-md hover:border-unicore-accent/50 transition-all duration-300">
                <div className="aspect-[4/3] max-h-36 w-full bg-design-bg">
                  <img src={m.imageSrc} alt={m.imageAlt} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <p className="font-semibold text-design-dark text-sm mb-1.5 line-clamp-2">{m.name}</p>
                  <div className="grid gap-0.5 text-design-mid text-xs">
                    <span>Speed: {m.speed}</span>
                    <span>Sweep: {m.sweep}</span>
                    {m.blade && <span className="line-clamp-1">Blade: {m.blade}</span>}
                    <span>Power: {m.power}</span>
                    {m.voltage && <span>Voltage: {m.voltage}</span>}
                  </div>
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
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-design-dark mb-3 sm:mb-4">
            Industrial Pedestal Fans (Farrata Fans)
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <p className="text-design-mid text-lg font-normal leading-relaxed mb-4">
            UNICORE Industrial Pedestal Fans, also known as Farrata Fans, provide strong air throw and efficient cooling for large industrial areas. These fans are commonly used in factories, workshops, warehouses, packaging units, and commercial spaces where high air circulation is required.
          </p>
          <h3 className="text-xl font-semibold text-design-dark mb-2">Key Features</h3>
          <ul className="list-none space-y-1.5 mb-4">
            {pedestalFanFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-design-mid">
                <span className="w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold text-design-dark mb-2">Available Models</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            {pedestalFanModels.map((m, i) => (
              <div key={i} className="model-card-zoom opacity-0 scale-[0.92] rounded-lg border border-design-border bg-white overflow-hidden hover:scale-[1.02] hover:shadow-md hover:border-unicore-accent/50 transition-all duration-300">
                <div className="aspect-[4/3] max-h-36 w-full bg-design-bg">
                  <img src={m.imageSrc} alt={m.imageAlt} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <p className="font-semibold text-design-dark text-sm mb-1.5 line-clamp-2">{m.name}</p>
                  <div className="grid gap-0.5 text-design-mid text-xs">
                    <span>Speed: {m.speed}</span>
                    <span>Sweep: {m.sweep}</span>
                    <span>Blade: {m.blade}</span>
                    <span>Power: {m.power}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-design-mid text-lg font-normal leading-relaxed">
            These fans are suitable for industrial floors, production units, warehouses, and large indoor working environments.
          </p>
        </div>

        {/* H2: Industrial Air Circulator Fans */}
        <div id="circulator-fans" className="product-line-item mb-6 sm:mb-8 md:mb-10 scroll-mt-24 sm:scroll-mt-28">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-design-dark mb-3 sm:mb-4">
            Industrial Air Circulator Fans
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <p className="text-design-mid text-lg font-normal leading-relaxed mb-4">
            UNICORE Air Circulator Fans are designed to provide uniform airflow across large industrial spaces. These fans help improve ventilation and maintain comfortable working conditions in factories.
          </p>
          <h3 className="text-xl font-semibold text-design-dark mb-2">Key Features</h3>
          <ul className="list-none space-y-1.5 mb-4">
            {circulatorFanFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-design-mid">
                <span className="w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold text-design-dark mb-2">Available Models</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            {circulatorFanModels.map((m, i) => (
              <div key={i} className="model-card-zoom opacity-0 scale-[0.92] rounded-lg border border-design-border bg-white overflow-hidden hover:scale-[1.02] hover:shadow-md hover:border-unicore-accent/50 transition-all duration-300">
                <div className="aspect-[4/3] max-h-36 w-full bg-design-bg">
                  <img src={m.imageSrc} alt={m.imageAlt} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <p className="font-semibold text-design-dark text-sm mb-1.5 line-clamp-2">{m.name}</p>
                  <div className="grid gap-0.5 text-design-mid text-xs">
                    <span>Speed: {m.speed}</span>
                    <span>Power: {m.power}</span>
                    {m.notes && <span className="line-clamp-1">{m.notes}</span>}
                  </div>
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
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-design-dark mb-3 sm:mb-4">
            Industrial Air Coolers
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <p className="text-design-mid text-lg font-normal leading-relaxed mb-4">
            UNICORE Industrial Air Coolers are designed to provide efficient cooling for large industrial spaces such as factories, warehouses, and workshops. With high airflow capacity and durable construction, these coolers deliver reliable cooling even in demanding environments.
          </p>
          <h3 className="text-xl font-semibold text-design-dark mb-3">Key Features</h3>
          <ul className="list-none space-y-1.5 mb-4">
            {airCoolerFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-design-mid">
                <span className="w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="model-card-zoom opacity-0 scale-[0.92] rounded-lg border border-design-border bg-white overflow-hidden hover:scale-[1.02] hover:shadow-md hover:border-unicore-accent/50 transition-all duration-300">
              <div className="aspect-[4/3] max-h-36 w-full bg-design-bg">
                <img src="https://picsum.photos/seed/thar/600/400" alt="THAR Series Industrial Air Coolers" className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <h4 className="font-semibold text-design-dark text-sm mb-1">THAR Series Industrial Air Coolers</h4>
                <p className="text-design-mid text-xs mb-2">THAR 800, THAR 1100</p>
                <ul className="list-none space-y-0.5 text-design-mid text-xs mb-2">
                  <li>• Airflow: Up to 12,000 CMH</li>
                  <li>• 800 W • 3 Speed</li>
                </ul>
                <p className="text-design-mid text-xs">Medium-sized factories &amp; workshops.</p>
              </div>
            </div>

            <div className="model-card-zoom opacity-0 scale-[0.92] rounded-lg border border-design-border bg-white overflow-hidden hover:scale-[1.02] hover:shadow-md hover:border-unicore-accent/50 transition-all duration-300">
              <div className="aspect-[4/3] max-h-36 w-full bg-design-bg">
                <img src="https://picsum.photos/seed/thunder/600/400" alt="THUNDER Series Industrial Air Coolers" className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <h4 className="font-semibold text-design-dark text-sm mb-1">THUNDER Series Industrial Air Coolers</h4>
                <p className="text-design-mid text-xs mb-2">THUNDER 1100, THUNDER 1500</p>
                <ul className="list-none space-y-0.5 text-design-mid text-xs mb-2">
                  <li>• Airflow: Up to 23,000 CMH</li>
                  <li>• 1100–1500 W • 70L Tank</li>
                </ul>
                <p className="text-design-mid text-xs">Large warehouses &amp; manufacturing plants.</p>
              </div>
            </div>

            <div className="model-card-zoom opacity-0 scale-[0.92] rounded-lg border border-design-border bg-white overflow-hidden hover:scale-[1.02] hover:shadow-md hover:border-unicore-accent/50 transition-all duration-300">
              <div className="aspect-[4/3] max-h-36 w-full bg-design-bg">
                <img src="https://picsum.photos/seed/thunder-adv/600/400" alt="THUNDER Advanced Industrial Air Coolers" className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <h4 className="font-semibold text-design-dark text-sm mb-1">THUNDER Advanced Industrial Air Coolers</h4>
                <p className="text-design-mid text-xs mb-2">1100A, 1500A, 2200A, 3000A</p>
                <ul className="list-none space-y-0.5 text-design-mid text-xs mb-2">
                  <li>• Airflow: Up to 30,000 CMH</li>
                  <li>• 12 Speed • Remote Control</li>
                </ul>
                <p className="text-design-mid text-xs">Large plants, high cooling demand.</p>
              </div>
            </div>
          </div>
        </div>

        {/* H2: Bulk Industrial Orders & Distributor Enquiries */}
        <div id="bulk-orders" className="product-line-item scroll-mt-24 sm:scroll-mt-28">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-design-dark mb-3 sm:mb-4">
            Bulk Industrial Orders & Distributor Enquiries
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <p className="text-design-mid text-lg font-normal leading-relaxed mb-4">
            UNICORE focuses on supplying industrial cooling and ventilation products in bulk quantities to businesses and commercial buyers.
          </p>
          <p className="text-design-mid font-semibold mb-2">Our customers typically include:</p>
          <ul className="list-none space-y-1.5 mb-4">
            {bulkCustomers.map((c, i) => (
              <li key={i} className="flex items-center gap-2 text-design-mid">
                <span className="w-2 h-2 rounded-full bg-unicore-accent flex-shrink-0" />
                {c}
              </li>
            ))}
          </ul>
          <p className="text-design-mid text-lg font-normal leading-relaxed mb-5">
            We support large order quantities, project-based supply, and distributor partnerships across India. For product specifications, pricing, and bulk enquiries, connect with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-primary rounded-lg inline-block text-center">Request Product Catalogue</Link>
            <Link to="/contact" className="btn-primary-large rounded-lg inline-block text-center">Submit Bulk Enquiry</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
