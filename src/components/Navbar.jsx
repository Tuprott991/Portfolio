import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-darker/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-width flex justify-between items-center px-4">
        <Link to="hero" smooth={true} duration={50} className="cursor-pointer">
          <h1 className="text-xl font-bold gradient-text">Nguyễn Văn Tú</h1>
        </Link>
        
        <div className="hidden md:flex space-x-8 font-bold">
          <Link
            to="hero"
            smooth={true}
            duration={50}
            className="cursor-pointer text-light/80 hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            to="work-experience"
            smooth={true}
            duration={50}
            className="cursor-pointer text-light/80 hover:text-primary transition-colors"
          >
            Experience
          </Link>
          <Link
            to="timeline"
            smooth={true}
            duration={50}
            className="cursor-pointer text-light/80 hover:text-primary transition-colors"
          >
            Achievements & University Activities
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={50}
            className="cursor-pointer text-light/80 hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            to="publications"
            smooth={true}
            duration={50}
            className="cursor-pointer text-light/80 hover:text-primary transition-colors"
          >
            Publications
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={50}
            className="cursor-pointer text-light/80 hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;