
import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative text-center bg-brand-secondary/30">
       <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40" 
        style={{backgroundImage: "url('https://picsum.photos/id/1074/1600/900')"}}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-background via-brand-background/50 to-transparent z-0"></div>
      <div className="relative container mx-auto px-6 py-24 md:py-32 lg:py-48 z-10 flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-brand-primary leading-tight mb-4">
          Arte Tallado en Madera
        </h2>
        <p className="text-lg md:text-xl text-brand-text max-w-2xl mb-8">
          Descubre piezas de madera únicas y artesanales que aportan calidez y elegancia a tu espacio.
        </p>
        <a 
          href="#products" 
          className="group inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          Explorar Colección
          <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
