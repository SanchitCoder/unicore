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
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/contact' },
  { label: 'Careers', to: '#' },
  { label: 'News', to: '#' },
];

export default function Footer() {

  return (
    <footer className="bg-unicore-dark text-white w-full max-w-full min-w-0 overflow-x-hidden border-t border-unicore-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-10 sm:py-12 md:py-14 min-w-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/unicore-logo.png" alt="UNICORE" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-white/80 text-sm font-normal mb-4">Engineering Excellence Since 2000</p>
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
              {companyLinks.map((item, i) => (
                <li key={i}>
                  {item.to === '#' ? (
                    <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-normal">{item.label}</a>
                  ) : (
                    <Link to={item.to} className="text-white/80 hover:text-white transition-colors text-sm font-normal">{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-4 text-white">Get In Touch</h4>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.268 4.771 1.691 5.077 4.907.06 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.299 3.225-1.125 4.641-4.473 5.077-1.29.057-1.676.069-4.85.069-3.204 0-3.584-.012-4.85-.069-3.26-.267-4.771-1.691-5.077-4.907-.06-1.265-.069-1.645-.069-4.849 0-3.204.013-3.583.07-4.849.299-3.266 1.125-4.641 4.472-5.077 1.293-.056 1.676-.069 4.85-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
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
