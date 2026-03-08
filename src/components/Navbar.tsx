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

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/unicore-logo.png" alt="UNICORE" className="h-10 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-4 ml-10">
          <NavLink to="/" hash="#home" className={`nav-link ${location.pathname === '/' ? 'text-teal-300' : ''}`}>Home</NavLink>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'text-teal-300' : ''}`}>
            About Us
          </Link>
          <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'text-teal-300' : ''}`}>Products</Link>
          <Link to="/ventilation" className={`nav-link ${location.pathname === '/ventilation' ? 'text-teal-300' : ''}`}>Industrial Ventilation Systems</Link>
          <Link to="/industries" className={`nav-link ${location.pathname === '/industries' ? 'text-teal-300' : ''}`}>Industries we serve</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'text-teal-300' : ''}`}>Industrial Cooling Solutions</Link>
        </div>

        <button
          type="button"
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
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

      {/* Mobile menu - visible on all pages including About Us */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 pb-6 bg-slate-900/98 border-t border-white/10 flex flex-col gap-3">
          <NavLink to="/" hash="#home" className={`nav-link block py-2 ${location.pathname === '/' ? 'text-teal-300' : ''}`} onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          <Link to="/about" className={`nav-link block py-2 ${location.pathname === '/about' ? 'text-teal-300' : ''}`} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link to="/products" className={`nav-link block py-2 ${location.pathname === '/products' ? 'text-teal-300' : ''}`} onClick={() => setMobileMenuOpen(false)}>Products</Link>
          <Link to="/ventilation" className={`nav-link block py-2 ${location.pathname === '/ventilation' ? 'text-teal-300' : ''}`} onClick={() => setMobileMenuOpen(false)}>Industrial Ventilation Systems</Link>
          <Link to="/industries" className={`nav-link block py-2 ${location.pathname === '/industries' ? 'text-teal-300' : ''}`} onClick={() => setMobileMenuOpen(false)}>Industries we serve</Link>
          <Link to="/contact" className={`nav-link block py-2 ${location.pathname === '/contact' ? 'text-teal-300' : ''}`} onClick={() => setMobileMenuOpen(false)}>Industrial Cooling Solutions</Link>
        </div>
      </div>
    </nav>
  );
}
