
import React from 'react';
import { SigmaIcon } from './icons/MathIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ctp-crust text-ctp-subtext1">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-ctp-surface0 pt-8">
          <div className="flex items-center space-x-3 mb-6 md:mb-0 group">
             <SigmaIcon className="h-8 w-8 text-ctp-mauve group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold font-serif text-ctp-text">HuggingMath</span>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm mb-2">
              &copy; {new Date().getFullYear()} HuggingMath. All Rights Reserved.
            </p>
            <p className="text-xs text-ctp-overlay1 italic">
              Empowering the next generation of mathematicians.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
