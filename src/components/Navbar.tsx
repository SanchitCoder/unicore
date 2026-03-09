import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150);
    }
  }, [location.pathname, location.hash]);

  const navBtnBase =
    'inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-200';
  const navBtnActive = 'bg-unicore-accent text-white shadow-btn';
  const navBtnInactive =
    'text-white/90 hover:text-white hover:bg-white/10';

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-unicore-dark/98 backdrop-blur-md border-b border-white/5 shadow-nav w-full max-w-full min-w-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-3 sm:py-3.5 flex items-center justify-between gap-2 min-w-0 w-full">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/unicore-logo.png" alt="UNICORE" className="h-8 sm:h-10 w-auto object-contain max-w-[140px] sm:max-w-none" />
        </Link>

        <div className="hidden md:flex items-center gap-2">
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
          <Link
            to="/products"
            className={`${navBtnBase} ${location.pathname === '/products' ? navBtnActive : navBtnInactive}`}
          >
            Products
          </Link>
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

        <button
          type="button"
          className="md:hidden text-white p-2.5 rounded-xl hover:bg-white/10 transition-colors"
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

      {/* Mobile menu - button-style links */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[min(85vh,400px)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 pb-4 bg-unicore-dark border-t border-white/10 flex flex-col gap-2 overflow-y-auto max-h-[min(85vh,400px)]">
          <NavLink
            to="/"
            hash="#home"
            className={`${navBtnBase} justify-start w-full py-3 ${location.pathname === '/' ? navBtnActive : navBtnInactive}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <Link
            to="/about"
            className={`${navBtnBase} justify-start w-full py-3 ${location.pathname === '/about' ? navBtnActive : navBtnInactive}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/products"
            className={`${navBtnBase} justify-start w-full py-3 ${location.pathname === '/products' ? navBtnActive : navBtnInactive}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/industries"
            className={`${navBtnBase} justify-start w-full py-3 ${location.pathname === '/industries' ? navBtnActive : navBtnInactive}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Industries
          </Link>
          <Link
            to="/contact"
            className={`${navBtnBase} justify-start w-full py-3 ${location.pathname === '/contact' ? navBtnActive : navBtnInactive}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
