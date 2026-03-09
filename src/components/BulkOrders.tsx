import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';

export default function BulkOrders() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    enquiryType: 'bulk' as 'bulk' | 'distribution',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelectorAll('.bulk-item'), {
              translateY: { to: 0, from: 28 },
              opacity: { to: 1, from: 0 },
              duration: 550,
              delay: stagger(40),
              ease: 'out-cubic',
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', company: '', email: '', phone: '', enquiryType: 'bulk', message: '' });
  };

  return (
    <section id="bulk-orders" ref={sectionRef} className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-5 bg-design-bg">
      <div className="max-w-2xl mx-auto">
        <h2 className="bulk-item text-3xl md:text-4xl font-bold text-design-dark mb-3 text-center tracking-tight">
          Bulk Orders & Distributor Opportunities
        </h2>
        <p className="bulk-item text-design-mid text-center mb-8">
          Looking for a reliable industrial cooler supplier or industrial fan manufacturer for bulk procurement? Submit your details below.
        </p>

        {submitted ? (
          <div className="bulk-item rounded-2xl border border-unicore-accent/30 bg-unicore-accent/5 p-8 text-center shadow-card">
            <p className="text-design-dark font-semibold mb-2">Thank you for your enquiry.</p>
            <p className="text-design-mid text-sm">Our team will get back to you shortly to discuss bulk pricing and partnership opportunities.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bulk-item space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="bulk-orders-name" className="block text-sm font-medium text-design-dark mb-1.5">Name</label>
                <input
                  id="bulk-orders-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-xl border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="bulk-orders-company" className="block text-sm font-medium text-design-dark mb-1.5">Company</label>
                <input
                  id="bulk-orders-company"
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-xl border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm"
                  placeholder="Company name"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="bulk-orders-email" className="block text-sm font-medium text-design-dark mb-1.5">Email</label>
                <input
                  id="bulk-orders-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-xl border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="bulk-orders-phone" className="block text-sm font-medium text-design-dark mb-1.5">Phone</label>
                <input
                  id="bulk-orders-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-xl border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div>
              <label htmlFor="bulk-orders-type" className="block text-sm font-medium text-design-dark mb-1.5">I am interested in</label>
              <select
                id="bulk-orders-type"
                value={form.enquiryType}
                onChange={(e) => setForm((f) => ({ ...f, enquiryType: e.target.value as 'bulk' | 'distribution' }))}
                className="w-full px-3 py-2.5 rounded-xl border border-design-border bg-white text-design-dark focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm"
              >
                <option value="bulk">Submit Bulk Enquiry</option>
                <option value="distribution">Apply for Distribution</option>
              </select>
            </div>
            <div>
              <label htmlFor="bulk-orders-message" className="block text-sm font-medium text-design-dark mb-1.5">Message</label>
              <textarea
                id="bulk-orders-message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full px-3 py-2.5 rounded-xl border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm resize-y min-h-[100px]"
                placeholder="Tell us about your requirements, order quantity, or distribution partnership interest..."
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-unicore-accent text-white font-semibold shadow-btn hover:bg-unicore-accent-hover hover:shadow-btn-hover focus:outline-none focus:ring-2 focus:ring-unicore-accent focus:ring-offset-2 transition-all duration-300 text-sm"
            >
              Submit Enquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
