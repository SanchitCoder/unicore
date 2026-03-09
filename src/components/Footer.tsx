import { useState } from 'react';
import { Link } from 'react-router-dom';

const productLinks = [
  'Industrial Fans',
  'Air Coolers',
  'Ventilation Systems',
  'Healthcare Fans',
  'Home Appliances',
  'HVAC Systems',
];

const companyLinks = [
  'About',
  'Manufacturing',
  'Quality',
  'Careers',
  'News',
];

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-unicore-dark text-white w-full max-w-full min-w-0 overflow-x-hidden border-t border-unicore-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-10 sm:py-12 md:py-14 min-w-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/unicore-logo.png" alt="UNICORE" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-white/80 text-sm font-normal mb-4">Engineering Excellence Since 2000</p>
            <div className="flex gap-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-4 text-white">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link, i) => (
                <li key={i}>
                  <Link to="/products" className="text-white/80 hover:text-white transition-colors text-sm font-normal">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors text-sm font-normal">About</Link></li>
              <li><Link to="/industries" className="text-white/80 hover:text-white transition-colors text-sm font-normal">Manufacturing</Link></li>
              <li><Link to="/products" className="text-white/80 hover:text-white transition-colors text-sm font-normal">Quality</Link></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-normal">Careers</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-normal">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-4 text-white">Get In Touch</h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="flex-1 min-w-0 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-unicore-accent/50 focus:border-unicore-accent text-sm transition-colors"
              />
              <button type="submit" className="px-5 py-2.5 min-h-[44px] bg-unicore-accent text-white font-semibold rounded-xl hover:bg-unicore-accent-hover shadow-btn hover:shadow-btn-hover transition-all duration-300 text-sm whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/70 text-sm font-normal">© 2025 UNICORE. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-normal">
            <a href="#" className="text-white/70 hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
