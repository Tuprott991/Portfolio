import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'hero', label: 'About' },
    { to: 'work-experience', label: 'Experience' },
    { to: 'timeline', label: 'Achievements' },
    { to: 'projects', label: 'Projects' },
    { to: 'publications', label: 'Publications' },
    { to: 'contact', label: 'Contact' }
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-darker/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-width flex justify-between items-center px-4">
        <Link to="hero" smooth={true} duration={50} className="cursor-pointer" onClick={closeMobileMenu}>
          <h1 className="text-xl font-bold gradient-text">Nguyễn Văn Tú</h1>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={50}
              className="cursor-pointer text-light/80 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-light/80 hover:text-primary transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-darker/95 backdrop-blur-md border-t border-white/10">
          <div className="container-width px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={50}
                className="block cursor-pointer text-light/80 hover:text-primary transition-colors py-2 font-bold"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;