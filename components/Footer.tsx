
import React from 'react';
import { SigmaIcon } from './icons/MathIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-400">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
             <SigmaIcon className="h-8 w-8 text-brand-accent" />
            <span className="text-xl font-bold font-serif text-white">HuggingMath</span>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} HuggingMath. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
