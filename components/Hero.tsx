
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-brand-dark text-white min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: `url('https://www.toptal.com/designers/subtlepatterns/uploads/random_grey_variations.png')`}}></div>
      <div className="relative container mx-auto px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-4">
          Unlock Your Mathematical Potential
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
          Premier coaching for aspiring Math Olympiad champions. We turn passion for numbers into competitive success.
        </p>
        <a href="#courses" className="bg-brand-accent hover:bg-brand-accent-light text-brand-dark font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 inline-block">
          Explore Our Courses
        </a>
      </div>
    </section>
  );
};

export default Hero;
