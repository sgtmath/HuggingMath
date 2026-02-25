
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-ctp-mantle text-ctp-text min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-ctp-mauve rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-ctp-sapphire rounded-full blur-[120px]"></div>
      </div>
      
      <div className="relative container mx-auto px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-4 text-ctp-mauve">
          Unlock Your Mathematical Potential
        </h1>
        <p className="text-lg md:text-xl text-ctp-subtext0 max-w-3xl mx-auto mb-8">
          Premier coaching for aspiring Math Olympiad champions. We turn passion for numbers into competitive success.
        </p>
        <a href="#courses" className="bg-ctp-mauve hover:bg-ctp-pink text-ctp-base font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 duration-300 inline-block shadow-lg shadow-ctp-mauve/20">
          Explore Our Courses
        </a>
      </div>
    </section>
  );
};

export default Hero;
