import { useRef, useEffect, useState } from 'react';
import { animate, stagger } from 'animejs';
import { Mail, Phone, MapPin } from 'lucide-react';
import Layout from '../components/Layout';

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    if (heroRef.current) {
      animate(heroRef.current.querySelectorAll('.contact-hero-item'), {
        translateY: { to: 0, from: 28 },
        opacity: { to: 1, from: 0 },
        duration: 600,
        delay: stagger(50),
        ease: 'out-cubic',
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-20 pb-10 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 px-5 sm:px-6 md:px-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-unicore-dark via-unicore-dark-light to-unicore-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(46,203,182,0.12)_0%,transparent_50%)]" aria-hidden />
        <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto text-center w-full px-2 sm:px-0">
          <h1 className="contact-hero-item text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight drop-shadow-hero">
            Contact Us
          </h1>
          <p className="contact-hero-item text-lg sm:text-xl md:text-2xl text-white/95 mb-4 sm:mb-5 drop-shadow-hero">
            Get in touch for product enquiries, bulk orders, and partnership opportunities
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-design-mid text-lg text-center mb-10">
            Have a question about our industrial cooling and ventilation products? We’re here to help with quotes, specifications, and bulk orders.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Contact details */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-design-dark mb-4">Reach us</h2>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-unicore-accent/10 flex items-center justify-center text-unicore-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-design-dark">Email</p>
                  <a href="mailto:contact@unicore.com" className="text-design-mid text-sm hover:text-unicore-accent transition-colors">
                    contact@unicore.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-unicore-accent/10 flex items-center justify-center text-unicore-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-design-dark">Phone</p>
                  <a href="tel:+910000000000" className="text-design-mid text-sm hover:text-unicore-accent transition-colors">
                    +91 00000 00000
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-unicore-accent/10 flex items-center justify-center text-unicore-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-design-dark">Address</p>
                  <p className="text-design-mid text-sm">
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-design-dark mb-4">Send a message</h2>
              {formSubmitted ? (
                <div className="rounded-lg border border-unicore-accent/30 bg-unicore-accent/5 p-6 text-center">
                  <p className="text-design-dark font-medium mb-1">Thank you for your message.</p>
                  <p className="text-design-mid text-sm">We’ll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-design-dark mb-1.5">Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
                        className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-design-dark mb-1.5">Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
                        className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-design-dark mb-1.5">Phone</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((f) => ({ ...f, phone: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm"
                      placeholder="Phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-design-dark mb-1.5">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData((f) => ({ ...f, subject: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm"
                      placeholder="Enquiry type or product interest"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-design-dark mb-1.5">Message</label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
                      className="w-full px-3 py-2.5 rounded-lg border border-design-border bg-white text-design-dark placeholder-design-mid/70 focus:outline-none focus:ring-2 focus:ring-unicore-accent/30 focus:border-unicore-accent text-sm resize-y min-h-[100px]"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-unicore-accent text-white font-medium hover:bg-unicore-accent-hover focus:outline-none focus:ring-2 focus:ring-unicore-accent focus:ring-offset-2 transition-colors text-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
