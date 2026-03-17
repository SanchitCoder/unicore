import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import { X } from 'lucide-react';

const exhaustFanModels = [
  { name: 'PURE Air HDEF 12" Industrial Exhaust Fan', speed: '1400 RPM', sweep: '300 mm', blade: 'MS Sheet with Aluminium Hub', power: '90 W', voltage: '220–240 V', imageSrc: 'https://picsum.photos/seed/exhaust1/600/400', imageAlt: 'PURE Air HDEF 12" Exhaust Fan' },
  { name: 'PURE Air HDEF 15" Industrial Exhaust Fan', speed: '1400 RPM', sweep: '380 mm', power: '145 W', imageSrc: 'https://picsum.photos/seed/exhaust2/600/400', imageAlt: 'PURE Air HDEF 15" Exhaust Fan' },
  { name: 'PURE Air HDEF 24" Industrial Exhaust Fan', speed: '900 RPM', sweep: '600 mm', power: '600 W', imageSrc: 'https://picsum.photos/seed/exhaust3/600/400', imageAlt: 'PURE Air HDEF 24" Exhaust Fan' },
  { name: 'SUPREME PLUS Industrial Exhaust Fan', speed: '1360 RPM', sweep: '450 mm', power: '320 W', imageSrc: 'https://picsum.photos/seed/exhaust4/600/400', imageAlt: 'SUPREME PLUS Exhaust Fan' },
];

const pedestalFanModels = [
  { name: 'AIR JET 16" Industrial Pedestal Fan', speed: '2400 RPM', sweep: '400 mm', blade: 'Plastic', power: '105 W', imageSrc: 'https://picsum.photos/seed/pedestal1/600/400', imageAlt: 'AIR JET 16" Pedestal Fan' },
  { name: 'EURUS PLUS OSC 18" Industrial Pedestal Fan', speed: '1350 RPM', sweep: '450 mm', blade: 'Aluminum', power: '130 W', imageSrc: 'https://picsum.photos/seed/pedestal2/600/400', imageAlt: 'EURUS PLUS OSC 18" Pedestal Fan' },
  { name: 'SUPER STAR 20" Industrial Pedestal Fan', speed: '1350 RPM', sweep: '500 mm', blade: 'Aluminum', power: '135 W', imageSrc: 'https://picsum.photos/seed/pedestal3/600/400', imageAlt: 'SUPER STAR 20" Pedestal Fan' },
];

const circulatorFanModels = [
  { name: 'AEROTHRUST 18" Air Circulator Fan', speed: '1400 RPM', power: '150 W', notes: 'Copper winding motor, Aluminum casted blades', imageSrc: 'https://picsum.photos/seed/circ1/600/400', imageAlt: 'AEROTHRUST 18" Circulator Fan' },
  { name: 'AEROTHRUST 24" Air Circulator Fan', speed: '1400 RPM', power: '200 W', imageSrc: 'https://picsum.photos/seed/circ2/600/400', imageAlt: 'AEROTHRUST 24" Circulator Fan' },
  { name: 'AEROTHRUST 30" Air Circulator Fan', speed: '1400 RPM', power: '260 W', imageSrc: 'https://picsum.photos/seed/circ3/600/400', imageAlt: 'AEROTHRUST 30" Circulator Fan' },
];

export default function ProductLines() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [bulkForm, setBulkForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    enquiryType: 'bulk' as 'catalogue' | 'bulk',
    message: '',
  });
  const [bulkFormSubmitted, setBulkFormSubmitted] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState('');
  const [quoteFormSubmitted, setQuoteFormSubmitted] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const openQuoteModal = (productName: string) => {
    setQuoteProduct(productName);
    setQuoteFormSubmitted(false);
    setQuoteForm({ name: '', email: '', phone: '', company: '', message: '' });
    setQuoteModalOpen(true);
  };

  const handleQuoteFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteFormSubmitted(true);
    setQuoteForm({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleBulkFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBulkFormSubmitted(true);
    setBulkForm({ name: '', company: '', email: '', phone: '', enquiryType: 'bulk', message: '' });
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
                <div className="aspect-[4/3] max-h-36 w-full bg-design-bg">
                  <img src={m.imageSrc} alt={m.imageAlt} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <p className="font-semibold text-design-dark text-sm mb-1.5 line-clamp-2">{m.name}</p>
                  <div className="grid gap-0.5 text-design-mid text-xs mb-3">
                    <span>Speed: {m.speed}</span>
                    <span>Sweep: {m.sweep}</span>
                    {m.blade && <span className="line-clamp-1">Blade: {m.blade}</span>}
                    <span>Power: {m.power}</span>
                    {m.voltage && <span>Voltage: {m.voltage}</span>}
                  </div>
                  <button type="button" onClick={() => openQuoteModal(m.name)} className="block w-full text-center py-2 px-3 rounded-lg bg-unicore-accent text-white text-sm font-medium hover:bg-unicore-accent-hover transition-colors">Request Quote</button>
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
                <div className="aspect-[4/3] max-h-36 w-full bg-design-bg">
                  <img src={m.imageSrc} alt={m.imageAlt} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <p className="font-semibold text-design-dark text-sm mb-1.5 line-clamp-2">{m.name}</p>
                  <div className="grid gap-0.5 text-design-mid text-xs mb-3">
                    <span>Speed: {m.speed}</span>
                    <span>Sweep: {m.sweep}</span>
                    <span>Blade: {m.blade}</span>
                    <span>Power: {m.power}</span>
                  </div>
                  <button type="button" onClick={() => openQuoteModal(m.name)} className="block w-full text-center py-2 px-3 rounded-lg bg-unicore-accent text-white text-sm font-medium hover:bg-unicore-accent-hover transition-colors">Request Quote</button>
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
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-design-dark mb-3 sm:mb-4">
            Industrial Air Circulator Fans
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-4" />
          <h3 className="text-xl font-semibold text-design-dark mb-2">Available Models</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mb-4">
            {circulatorFanModels.map((m, i) => (
              <div key={i} className="model-card-zoom opacity-0 scale-[0.92] rounded-xl border border-design-border bg-white overflow-hidden shadow-card hover:scale-[1.01] hover:shadow-card-hover hover:border-unicore-accent/40 transition-all duration-300">
                <div className="aspect-[4/3] max-h-36 w-full bg-design-bg">
                  <img src={m.imageSrc} alt={m.imageAlt} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <p className="font-semibold text-design-dark text-sm mb-1.5 line-clamp-2">{m.name}</p>
                  <div className="grid gap-0.5 text-design-mid text-xs mb-3">
                    <span>Speed: {m.speed}</span>
                    <span>Power: {m.power}</span>
                    {m.notes && <span className="line-clamp-1">{m.notes}</span>}
                  </div>
                  <button type="button" onClick={() => openQuoteModal(m.name)} className="block w-full text-center py-2 px-3 rounded-lg bg-unicore-accent text-white text-sm font-medium hover:bg-unicore-accent-hover transition-colors">Request Quote</button>
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
              <div className="aspect-[4/3] max-h-36 w-full bg-design-bg">
                <img src="https://picsum.photos/seed/thar/600/400" alt="THAR Series Industrial Air Coolers" className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <h4 className="font-semibold text-design-dark text-sm mb-1">THAR Series Industrial Air Coolers</h4>
                <p className="text-design-mid text-xs mb-2">THAR 800, THAR 1100</p>
                <ul className="list-none space-y-0.5 text-design-mid text-xs mb-3">
                  <li>• Airflow: Up to 12,000 CMH</li>
                  <li>• 800 W • 3 Speed</li>
                </ul>
                <p className="text-design-mid text-xs mb-3">Medium-sized factories &amp; workshops.</p>
                <button type="button" onClick={() => openQuoteModal('THAR Series Industrial Air Coolers')} className="block w-full text-center py-2 px-3 rounded-lg bg-unicore-accent text-white text-sm font-medium hover:bg-unicore-accent-hover transition-colors">Request Quote</button>
              </div>
            </div>

            <div className="model-card-zoom opacity-0 scale-[0.92] rounded-xl border border-design-border bg-white overflow-hidden shadow-card hover:scale-[1.01] hover:shadow-card-hover hover:border-unicore-accent/40 transition-all duration-300">
              <div className="aspect-[4/3] max-h-36 w-full bg-design-bg">
                <img src="https://picsum.photos/seed/thunder/600/400" alt="THUNDER Series Industrial Air Coolers" className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <h4 className="font-semibold text-design-dark text-sm mb-1">THUNDER Series Industrial Air Coolers</h4>
                <p className="text-design-mid text-xs mb-2">THUNDER 1100, THUNDER 1500</p>
                <ul className="list-none space-y-0.5 text-design-mid text-xs mb-3">
                  <li>• Airflow: Up to 23,000 CMH</li>
                  <li>• 1100–1500 W • 70L Tank</li>
                </ul>
                <p className="text-design-mid text-xs mb-3">Large warehouses &amp; manufacturing plants.</p>
                <button type="button" onClick={() => openQuoteModal('THUNDER Series Industrial Air Coolers')} className="block w-full text-center py-2 px-3 rounded-lg bg-unicore-accent text-white text-sm font-medium hover:bg-unicore-accent-hover transition-colors">Request Quote</button>
              </div>
            </div>

            <div className="model-card-zoom opacity-0 scale-[0.92] rounded-xl border border-design-border bg-white overflow-hidden shadow-card hover:scale-[1.01] hover:shadow-card-hover hover:border-unicore-accent/40 transition-all duration-300">
              <div className="aspect-[4/3] max-h-36 w-full bg-design-bg">
                <img src="https://picsum.photos/seed/thunder-adv/600/400" alt="THUNDER Advanced Industrial Air Coolers" className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <h4 className="font-semibold text-design-dark text-sm mb-1">THUNDER Advanced Industrial Air Coolers</h4>
                <p className="text-design-mid text-xs mb-2">1100A, 1500A, 2200A, 3000A</p>
                <ul className="list-none space-y-0.5 text-design-mid text-xs mb-3">
                  <li>• Airflow: Up to 30,000 CMH</li>
                  <li>• 12 Speed • Remote Control</li>
                </ul>
                <p className="text-design-mid text-xs mb-3">Large plants, high cooling demand.</p>
                <button type="button" onClick={() => openQuoteModal('THUNDER Advanced Industrial Air Coolers')} className="block w-full text-center py-2 px-3 rounded-lg bg-unicore-accent text-white text-sm font-medium hover:bg-unicore-accent-hover transition-colors">Request Quote</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bulk Industrial Orders & Distributor Enquiries – Form */}
        <div id="bulk-orders" className="product-line-item scroll-mt-24 sm:scroll-mt-28">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-design-dark mb-3 sm:mb-4">
            Bulk Industrial Orders & Distributor Enquiries
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-unicore-accent to-design-mid mb-6" />
          {bulkFormSubmitted ? (
            <div className="rounded-lg border border-unicore-accent/30 bg-unicore-accent/5 p-6 text-center">
              <p className="text-design-dark font-medium mb-1">Thank you for your enquiry.</p>
              <p className="text-design-mid text-sm">Our team will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleBulkFormSubmit} className="max-w-xl space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="bulk-name" className="block text-sm font-medium text-design-dark mb-1.5">Name</label>
                  <input
                    id="bulk-name"
                    type="text"
                    required
                    value={bulkForm.name}
                    onChange={(e) => setBulkForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="bulk-company" className="block text-sm font-medium text-design-dark mb-1.5">Company</label>
                  <input
                    id="bulk-company"
                    type="text"
                    value={bulkForm.company}
                    onChange={(e) => setBulkForm((f) => ({ ...f, company: e.target.value }))}
                    className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm"
                    placeholder="Company name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="bulk-email" className="block text-sm font-medium text-design-dark mb-1.5">Email</label>
                  <input
                    id="bulk-email"
                    type="email"
                    required
                    value={bulkForm.email}
                    onChange={(e) => setBulkForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="bulk-phone" className="block text-sm font-medium text-design-dark mb-1.5">Phone</label>
                  <input
                    id="bulk-phone"
                    type="tel"
                    value={bulkForm.phone}
                    onChange={(e) => setBulkForm((f) => ({ ...f, phone: e.target.value }))}
                    className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="bulk-type" className="block text-sm font-medium text-design-dark mb-1.5">Enquiry type</label>
                <select
                  id="bulk-type"
                  value={bulkForm.enquiryType}
                  onChange={(e) => setBulkForm((f) => ({ ...f, enquiryType: e.target.value as 'catalogue' | 'bulk' }))}
                  className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm"
                >
                  <option value="catalogue">Request Product Catalogue</option>
                  <option value="bulk">Submit Bulk Enquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="bulk-message" className="block text-sm font-medium text-design-dark mb-1.5">Message</label>
                <textarea
                  id="bulk-message"
                  rows={4}
                  value={bulkForm.message}
                  onChange={(e) => setBulkForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm resize-y min-h-[100px]"
                  placeholder="Tell us about your requirements, order quantity, or partnership interest..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-unicore-accent text-white font-medium hover:bg-unicore-accent-hover focus:outline-none focus:ring-2 focus:ring-unicore-accent focus:ring-offset-2 transition-colors text-sm"
              >
                Submit Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>

      {/* Request Quote modal */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setQuoteModalOpen(false)} aria-hidden />
          <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-xl border border-design-border">
            <div className="sticky top-0 flex items-center justify-between px-4 py-3 border-b border-design-border bg-white rounded-t-xl">
              <h3 className="text-lg font-semibold text-design-dark">Request Quote</h3>
              <button type="button" onClick={() => setQuoteModalOpen(false)} className="p-1.5 rounded-lg text-design-mid hover:bg-design-bg hover:text-design-dark transition-colors" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              {quoteProduct && (
                <p className="text-sm text-design-mid mb-4 p-2.5 rounded-lg bg-design-bg">
                  <span className="font-medium text-design-dark">Product:</span> {quoteProduct}
                </p>
              )}
              {quoteFormSubmitted ? (
                <div className="py-6 text-center">
                  <p className="text-design-dark font-medium mb-1">Thank you for your request.</p>
                  <p className="text-design-mid text-sm mb-4">We’ll get back to you with a quote shortly.</p>
                  <button type="button" onClick={() => setQuoteModalOpen(false)} className="px-4 py-2 rounded-lg bg-unicore-accent text-white text-sm font-medium hover:bg-unicore-accent-hover transition-colors">Close</button>
                </div>
              ) : (
                <form onSubmit={handleQuoteFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="quote-name" className="block text-sm font-medium text-design-dark mb-1.5">Name</label>
                    <input id="quote-name" type="text" required value={quoteForm.name} onChange={(e) => setQuoteForm((f) => ({ ...f, name: e.target.value }))} className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="quote-email" className="block text-sm font-medium text-design-dark mb-1.5">Email</label>
                    <input id="quote-email" type="email" required value={quoteForm.email} onChange={(e) => setQuoteForm((f) => ({ ...f, email: e.target.value }))} className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label htmlFor="quote-phone" className="block text-sm font-medium text-design-dark mb-1.5">Phone</label>
                    <input id="quote-phone" type="tel" value={quoteForm.phone} onChange={(e) => setQuoteForm((f) => ({ ...f, phone: e.target.value }))} className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm" placeholder="Phone number" />
                  </div>
                  <div>
                    <label htmlFor="quote-company" className="block text-sm font-medium text-design-dark mb-1.5">Company</label>
                    <input id="quote-company" type="text" value={quoteForm.company} onChange={(e) => setQuoteForm((f) => ({ ...f, company: e.target.value }))} className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm" placeholder="Company name" />
                  </div>
                  <div>
                    <label htmlFor="quote-message" className="block text-sm font-medium text-design-dark mb-1.5">Message</label>
                    <textarea id="quote-message" rows={3} value={quoteForm.message} onChange={(e) => setQuoteForm((f) => ({ ...f, message: e.target.value }))} className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm resize-y" placeholder="Quantity, specifications, or any questions..." />
                  </div>
                  <button type="submit" className="w-full py-2.5 rounded-lg bg-unicore-accent text-white font-medium hover:bg-unicore-accent-hover focus:outline-none focus:ring-2 focus:ring-unicore-accent focus:ring-offset-2 transition-colors text-sm">Submit Request</button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
