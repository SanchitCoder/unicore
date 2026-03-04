import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { animate } from 'animejs';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
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

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
        if (navRef.current) {
          animate(navRef.current, {
            backgroundColor: scrolled
              ? { to: 'rgba(15, 23, 42, 0.95)', from: 'rgba(15, 23, 42, 0)' }
              : { to: 'rgba(15, 23, 42, 0)', from: 'rgba(15, 23, 42, 0.95)' },
            duration: 400,
            ease: 'inOut-quad',
          });
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/unicore-logo.png" alt="UNICORE" className="h-10 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'text-teal-300' : ''}`}>
            About Us
          </Link>
          <NavLink to="/" hash="#products" className="nav-link">Products</NavLink>
          <NavLink to="/" hash="#manufacturing" className="nav-link">Manufacturing</NavLink>
          <NavLink to="/" hash="#contact" className="nav-link">Contact</NavLink>
        </div>

        <Link to="/#contact" className="btn-primary-dark hidden md:block">Request Quote</Link>

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
          <NavLink to="/" className="nav-link block py-2" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          <Link to="/about" className="nav-link block py-2" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <NavLink to="/" hash="#products" className="nav-link block py-2" onClick={() => setMobileMenuOpen(false)}>Products</NavLink>
          <NavLink to="/" hash="#manufacturing" className="nav-link block py-2" onClick={() => setMobileMenuOpen(false)}>Manufacturing</NavLink>
          <NavLink to="/" hash="#contact" className="nav-link block py-2" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
          <Link to="/#contact" className="btn-primary-dark w-full text-center py-3 mt-2" onClick={() => setMobileMenuOpen(false)}>
            Request Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
