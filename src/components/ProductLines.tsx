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
  { name: 'PURE Air HDEF 12" Industrial Exhaust Fan', speed: '1400 RPM', sweep: '300 mm', blade: 'MS Sheet with Aluminium Hub', power: '90 W', voltage: '220–240 V' },
  { name: 'PURE Air HDEF 15" Industrial Exhaust Fan', speed: '1400 RPM', sweep: '380 mm', power: '145 W' },
  { name: 'PURE Air HDEF 24" Industrial Exhaust Fan', speed: '900 RPM', sweep: '600 mm', power: '600 W' },
  { name: 'SUPREME PLUS Industrial Exhaust Fan', speed: '1360 RPM', sweep: '450 mm', power: '320 W' },
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
  { name: 'AIR JET 16" Industrial Pedestal Fan', speed: '2400 RPM', sweep: '400 mm', blade: 'Plastic', power: '105 W' },
  { name: 'EURUS PLUS OSC 18" Industrial Pedestal Fan', speed: '1350 RPM', sweep: '450 mm', blade: 'Aluminum', power: '130 W' },
  { name: 'SUPER STAR 20" Industrial Pedestal Fan', speed: '1350 RPM', sweep: '500 mm', blade: 'Aluminum', power: '135 W' },
];

const pedestalFanFeatures = [
  'High-speed industrial motor',
  'Powerful air delivery for large spaces',
  'Durable aluminum or plastic fan blades',
  'Stable pedestal structure',
  'Designed for long operational hours',
];

const circulatorFanModels = [
  { name: 'AEROTHRUST 18" Air Circulator Fan', speed: '1400 RPM', power: '150 W', notes: 'Copper winding motor, Aluminum casted blades' },
  { name: 'AEROTHRUST 24" Air Circulator Fan', speed: '1400 RPM', power: '200 W' },
  { name: 'AEROTHRUST 30" Air Circulator Fan', speed: '1400 RPM', power: '260 W' },
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

const productNavItems = [
  { id: 'product-range', label: 'Product Range' },
  { id: 'exhaust-fans', label: 'Exhaust Fans' },
  { id: 'pedestal-fans', label: 'Pedestal Fans' },
  { id: 'circulator-fans', label: 'Circulator Fans' },
  { id: 'air-coolers', label: 'Air Coolers' },
  { id: 'bulk-orders', label: 'Bulk & Distributor' },
];

function scrollToProductSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

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
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-teal-700" />
        <div ref={sectionRef} className="relative z-10 max-w-4xl mx-auto">
          <div className="product-line-item text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Industrial Cooling & Ventilation Products – UNICORE
            </h1>
            <p className="text-white/90 text-lg leading-relaxed mb-4">
              UNICORE offers a wide range of industrial cooling and ventilation products designed for factories, warehouses, workshops, manufacturing plants, and commercial facilities. Our product range includes industrial air coolers, heavy duty exhaust fans, air circulator fans, and high-performance pedestal fans built for powerful airflow and long-term industrial use.
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-4">
              Designed in collaboration with experienced manufacturers, UNICORE products deliver efficient air circulation, durability, and reliable performance for large industrial environments.
            </p>
            <p className="text-white/90 text-lg leading-relaxed">
              Whether you need bulk industrial fans, ventilation systems, or cooling solutions for factories, UNICORE provides dependable products for large-scale requirements.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 md:py-28 px-6 bg-white scroll-mt-24">
        <div ref={contentRef} className="max-w-4xl mx-auto">
        {/* In-section navigation */}
        <nav className="product-line-item mb-16 md:mb-20" aria-label="Product sections">
          <div className="sticky top-20 z-30 py-4 -mx-2 px-4 rounded-xl bg-slate-100/90 border border-slate-200 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">On this page</p>
            <div className="flex flex-wrap gap-2">
              {productNavItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToProductSection(item.id)}
                  className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:border-teal-400 hover:text-teal-700 hover:bg-teal-50/50 transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* H2: Our Industrial Product Range */}
        <div id="product-range" className="product-line-item mb-16 md:mb-20 scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Our Industrial Product Range
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mb-6" />
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            UNICORE supplies a complete range of industrial air cooling and ventilation equipment for large spaces. Our products are engineered to handle high airflow requirements, continuous operation, and demanding industrial conditions.
          </p>
          <p className="text-slate-600 mb-4">Product categories include:</p>
          <ul className="list-none space-y-2 mb-4">
            {productCategories.map((cat, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-700">
                <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                <span className="font-medium">{cat}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-600 text-lg leading-relaxed">
            These products are widely used in factories, warehouses, workshops, logistics hubs, and commercial facilities across India.
          </p>
        </div>

        {/* H2: Heavy Duty Industrial Exhaust Fans */}
        <div id="exhaust-fans" className="product-line-item mb-16 md:mb-20 scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Heavy Duty Industrial Exhaust Fans
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mb-6" />
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            UNICORE Heavy Duty Exhaust Fans are designed to remove hot air, smoke, dust, and humidity from industrial spaces. These fans help maintain proper ventilation and improve airflow inside factories and production units.
          </p>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Key Features</h3>
          <ul className="list-none space-y-2 mb-6">
            {exhaustFanFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-600">
                <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Available Models</h3>
          <div className="space-y-4 mb-6">
            {exhaustFanModels.map((m, i) => (
              <div key={i} className="model-card-zoom opacity-0 scale-[0.92] p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:scale-[1.03] hover:shadow-lg hover:border-teal-400/50 transition-all duration-300">
                <p className="font-semibold text-slate-800 mb-2">{m.name}</p>
                <div className="grid gap-1 text-slate-600 text-sm">
                  <span>Speed: {m.speed}</span>
                  <span>Sweep Size: {m.sweep}</span>
                  {m.blade && <span>Blade Type: {m.blade}</span>}
                  <span>Power: {m.power}</span>
                  {m.voltage && <span>Voltage: {m.voltage}</span>}
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-lg leading-relaxed">
            These exhaust fans are ideal for factories, warehouses, industrial kitchens, workshops, and large production units.
          </p>
        </div>

        {/* H2: Industrial Pedestal Fans (Farrata Fans) */}
        <div id="pedestal-fans" className="product-line-item mb-16 md:mb-20 scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Industrial Pedestal Fans (Farrata Fans)
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mb-6" />
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            UNICORE Industrial Pedestal Fans, also known as Farrata Fans, provide strong air throw and efficient cooling for large industrial areas. These fans are commonly used in factories, workshops, warehouses, packaging units, and commercial spaces where high air circulation is required.
          </p>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Key Features</h3>
          <ul className="list-none space-y-2 mb-6">
            {pedestalFanFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-600">
                <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Available Models</h3>
          <div className="space-y-4 mb-6">
            {pedestalFanModels.map((m, i) => (
              <div key={i} className="model-card-zoom opacity-0 scale-[0.92] p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:scale-[1.03] hover:shadow-lg hover:border-teal-400/50 transition-all duration-300">
                <p className="font-semibold text-slate-800 mb-2">{m.name}</p>
                <div className="grid gap-1 text-slate-600 text-sm">
                  <span>Speed: {m.speed}</span>
                  <span>Sweep Size: {m.sweep}</span>
                  <span>Blade Type: {m.blade}</span>
                  <span>Power: {m.power}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-lg leading-relaxed">
            These fans are suitable for industrial floors, production units, warehouses, and large indoor working environments.
          </p>
        </div>

        {/* H2: Industrial Air Circulator Fans */}
        <div id="circulator-fans" className="product-line-item mb-16 md:mb-20 scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Industrial Air Circulator Fans
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mb-6" />
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            UNICORE Air Circulator Fans are designed to provide uniform airflow across large industrial spaces. These fans help improve ventilation and maintain comfortable working conditions in factories.
          </p>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Key Features</h3>
          <ul className="list-none space-y-2 mb-6">
            {circulatorFanFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-600">
                <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Available Models</h3>
          <div className="space-y-4 mb-6">
            {circulatorFanModels.map((m, i) => (
              <div key={i} className="model-card-zoom opacity-0 scale-[0.92] p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:scale-[1.03] hover:shadow-lg hover:border-teal-400/50 transition-all duration-300">
                <p className="font-semibold text-slate-800 mb-2">{m.name}</p>
                <div className="grid gap-1 text-slate-600 text-sm">
                  <span>Speed: {m.speed}</span>
                  <span>Power: {m.power}</span>
                  {m.notes && <span>{m.notes}</span>}
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-lg leading-relaxed">
            These fans are widely used in industrial plants, warehouses, assembly lines, and manufacturing facilities.
          </p>
        </div>

        {/* H2: Industrial Air Coolers */}
        <div id="air-coolers" className="product-line-item mb-16 md:mb-20 scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Industrial Air Coolers
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mb-6" />
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            UNICORE Industrial Air Coolers are designed to provide efficient cooling for large industrial spaces such as factories, warehouses, and workshops. With high airflow capacity and durable construction, these coolers deliver reliable cooling even in demanding environments.
          </p>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Key Features</h3>
          <ul className="list-none space-y-2 mb-8">
            {airCoolerFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-600">
                <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="space-y-8">
            <div className="model-card-zoom opacity-0 scale-[0.92] p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:scale-[1.03] hover:shadow-lg hover:border-teal-400/50 transition-all duration-300">
              <h4 className="text-lg font-bold text-slate-800 mb-2">THAR Series Industrial Air Coolers</h4>
              <p className="text-slate-600 text-sm mb-3">Models Available: THAR 800, THAR 1100</p>
              <ul className="list-none space-y-1 text-slate-600 text-sm mb-3">
                <li>• Airflow: Up to 12,000 CMH</li>
                <li>• Rated Power: 800 W</li>
                <li>• Manual 3 Speed Controller</li>
                <li>• 3 Blade Axial Fan</li>
              </ul>
              <p className="text-slate-600 text-sm">Suitable for medium-sized factories, workshops, and industrial facilities.</p>
            </div>

            <div className="model-card-zoom opacity-0 scale-[0.92] p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:scale-[1.03] hover:shadow-lg hover:border-teal-400/50 transition-all duration-300">
              <h4 className="text-lg font-bold text-slate-800 mb-2">THUNDER Series Industrial Air Coolers</h4>
              <p className="text-slate-600 text-sm mb-3">Models Available: THUNDER 1100, THUNDER 1500</p>
              <ul className="list-none space-y-1 text-slate-600 text-sm mb-3">
                <li>• Airflow: Up to 23,000 CMH</li>
                <li>• Rated Power: 1100 – 1500 W</li>
                <li>• 100% Copper Motor</li>
                <li>• 70 Litre Water Tank</li>
              </ul>
              <p className="text-slate-600 text-sm">Ideal for large warehouses, manufacturing plants, and industrial production areas.</p>
            </div>

            <div className="model-card-zoom opacity-0 scale-[0.92] p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:scale-[1.03] hover:shadow-lg hover:border-teal-400/50 transition-all duration-300">
              <h4 className="text-lg font-bold text-slate-800 mb-2">THUNDER Advanced Industrial Air Coolers</h4>
              <p className="text-slate-600 text-sm mb-2">Advanced cooling systems with enhanced airflow control.</p>
              <p className="text-slate-600 text-sm mb-3">Models Available: THUNDER 1100A, THUNDER 1500A, THUNDER 2200A, THUNDER 3000A</p>
              <ul className="list-none space-y-1 text-slate-600 text-sm mb-3">
                <li>• Airflow: Up to 30,000 CMH</li>
                <li>• 12 Speed Frequency Converter</li>
                <li>• Remote Control Operation</li>
                <li>• High Performance Axial Fan</li>
                <li>• Copper Motor Technology</li>
              </ul>
              <p className="text-slate-600 text-sm">These models are suitable for large industrial plants and high cooling demand environments.</p>
            </div>
          </div>
        </div>

        {/* H2: Bulk Industrial Orders & Distributor Enquiries */}
        <div id="bulk-orders" className="product-line-item scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Bulk Industrial Orders & Distributor Enquiries
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-slate-600 mb-6" />
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            UNICORE focuses on supplying industrial cooling and ventilation products in bulk quantities to businesses and commercial buyers.
          </p>
          <p className="text-slate-700 font-semibold mb-3">Our customers typically include:</p>
          <ul className="list-none space-y-2 mb-6">
            {bulkCustomers.map((c, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-600">
                <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                {c}
              </li>
            ))}
          </ul>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            We support large order quantities, project-based supply, and distributor partnerships across India. For product specifications, pricing, and bulk enquiries, connect with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary rounded-lg inline-block text-center">Request Product Catalogue</Link>
            <Link to="/contact" className="btn-primary-large rounded-lg inline-block text-center">Submit Bulk Enquiry</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
