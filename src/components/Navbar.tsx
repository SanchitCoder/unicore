import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Phone } from 'lucide-react';

const PRODUCT_CATEGORIES = [
  { key: 'exhaust', label: 'Exhaust Fans' },
  { key: 'farrata', label: 'Farrata Fans' },
  { key: 'wall', label: 'Wall Fans' },
  { key: 'circulators', label: 'Air Circulators' },
  { key: 'duct-coolers', label: 'Duct Coolers' },
  { key: 'coolers', label: 'Air Coolers' },
  { key: 'centrifugal', label: 'Centrifugal Fans' },
];

function NavLink({
  to,
  hash,
  children,
  className = '',
  onClick: onNavClick,
}: {
  to: string;
  hash?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (to === '/' && hash) {
      e.preventDefault();
      if (location.pathname !== '/') {
        window.location.href = '/#' + hash.slice(1);
      } else {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onNavClick?.();
  };

  return (
    <Link
      to={hash ? (location.pathname === '/' ? '#' : '/#' + hash.slice(1)) : to}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const navBtnBase =
    'inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors duration-200';
  const navBtnActive = 'text-unicore-accent';
  const navBtnInactive = 'text-unicore-dark/85 hover:text-unicore-accent';
  const isProductsPath = location.pathname === '/products';

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-design-border shadow-nav w-full max-w-full min-w-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between gap-2 min-w-0 w-full">
        <Link to="/" className="flex flex-col items-start shrink-0 leading-none">
          <img src="/unicore-logo.png" alt="UNICORE" className="h-7 sm:h-9 w-auto object-contain max-w-[130px] sm:max-w-none" />
          <span className="mt-0.5 ml-0.5 text-[8px] sm:text-[9px] font-bold tracking-[0.22em] text-design-mid">
            COOLING &amp; VENTILATION
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <NavLink
            to="/"
            hash="#home"
            className={`${navBtnBase} ${location.pathname === '/' ? navBtnActive : navBtnInactive}`}
          >
            Home
          </NavLink>
          <Link
            to="/about"
            className={`${navBtnBase} ${location.pathname === '/about' ? navBtnActive : navBtnInactive}`}
          >
            About Us
          </Link>

          <div className="relative" ref={productsRef}>
            <button
              type="button"
              onClick={() => setProductsOpen((o) => !o)}
              className={`${navBtnBase} ${isProductsPath ? navBtnActive : navBtnInactive}`}
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              Products
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
            </button>

            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-150 ${
                productsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
              }`}
            >
              <div className="w-56 rounded-2xl border border-design-border bg-white shadow-card-hover p-2">
                <Link
                  to="/products"
                  onClick={() => setProductsOpen(false)}
                  className="block px-3.5 py-2 rounded-xl text-sm font-semibold text-unicore-dark hover:bg-design-bg transition-colors"
                >
                  All Products
                </Link>
                <div className="h-px bg-design-border my-1.5 mx-1" />
                {PRODUCT_CATEGORIES.map((c) => (
                  <Link
                    key={c.key}
                    to={`/products?tab=${c.key}`}
                    onClick={() => setProductsOpen(false)}
                    className="block px-3.5 py-2 rounded-xl text-sm text-design-mid font-medium hover:bg-design-bg hover:text-unicore-dark transition-colors"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/industries"
            className={`${navBtnBase} ${location.pathname === '/industries' ? navBtnActive : navBtnInactive}`}
          >
            Industries
          </Link>
          <Link
            to="/contact"
            className={`${navBtnBase} ${location.pathname === '/contact' ? navBtnActive : navBtnInactive}`}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-unicore-accent to-unicore-accent-hover text-white text-sm font-semibold shadow-btn hover:shadow-btn-hover hover:brightness-105 transition-all"
          >
            <Phone className="w-4 h-4" />
            Get in Touch
          </Link>

          <button
            type="button"
            className="md:hidden text-unicore-dark p-2.5 rounded-xl hover:bg-design-bg transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[min(85vh,520px)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 pb-4 bg-white border-t border-design-border flex flex-col gap-1.5 overflow-y-auto max-h-[min(85vh,520px)]">
          <NavLink
            to="/"
            hash="#home"
            className={`${navBtnBase} justify-start w-full py-3 ${location.pathname === '/' ? 'bg-unicore-accent/10 text-unicore-accent' : navBtnInactive}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <Link
            to="/about"
            className={`${navBtnBase} justify-start w-full py-3 ${location.pathname === '/about' ? 'bg-unicore-accent/10 text-unicore-accent' : navBtnInactive}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>

          <button
            type="button"
            onClick={() => setMobileProductsOpen((o) => !o)}
            className={`${navBtnBase} justify-between w-full py-3 ${isProductsPath ? 'bg-unicore-accent/10 text-unicore-accent' : navBtnInactive}`}
          >
            Products
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-200 ${mobileProductsOpen ? 'max-h-96' : 'max-h-0'}`}>
            <div className="flex flex-col gap-1 pl-4 pb-1">
              <Link
                to="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-unicore-dark hover:bg-design-bg"
              >
                All Products
              </Link>
              {PRODUCT_CATEGORIES.map((c) => (
                <Link
                  key={c.key}
                  to={`/products?tab=${c.key}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm text-design-mid hover:bg-design-bg hover:text-unicore-dark"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/industries"
            className={`${navBtnBase} justify-start w-full py-3 ${location.pathname === '/industries' ? 'bg-unicore-accent/10 text-unicore-accent' : navBtnInactive}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Industries
          </Link>
          <Link
            to="/contact"
            className={`${navBtnBase} justify-start w-full py-3 ${location.pathname === '/contact' ? 'bg-unicore-accent/10 text-unicore-accent' : navBtnInactive}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            to="/contact"
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-unicore-accent to-unicore-accent-hover text-white text-sm font-semibold shadow-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Phone className="w-4 h-4" />
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
