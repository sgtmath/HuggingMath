
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { SigmaIcon } from './icons/MathIcons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle smooth scroll for hash links
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        e.preventDefault();
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false);
          // Update the URL hash without triggering a route change if possible
          window.history.pushState(null, '', `/#/${href}`);
        }
      }
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-ctp-base/90 shadow-lg backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-ctp-mauve/10 p-2 rounded-xl group-hover:bg-ctp-mauve transition-all duration-300">
              <SigmaIcon className="h-7 w-7 text-ctp-mauve group-hover:text-ctp-base transition-colors" />
            </div>
            <span className="text-xl font-bold font-serif text-ctp-text tracking-tight">HuggingMath</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                to={location.pathname === '/' ? link.href : `/${link.href}`}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-ctp-text font-semibold px-4 py-2 rounded-xl hover:bg-ctp-mauve/10 hover:text-ctp-mauve transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-ctp-text p-2 hover:bg-ctp-surface0 rounded-xl transition-colors focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-ctp-base rounded-2xl shadow-2xl p-6 border border-ctp-surface0 animate-scale-in">
            <nav className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  to={location.pathname === '/' ? link.href : `/${link.href}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-ctp-text font-semibold hover:text-ctp-mauve hover:bg-ctp-mauve/10 transition-all duration-200 text-center py-3 rounded-xl"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
