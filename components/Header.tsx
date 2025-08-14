
import React, { useState, useEffect } from 'react';
import ShoppingCartIcon from './icons/ShoppingCartIcon';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCartClick = () => {
    // As requested, opens a new tab to continue with the purchase.
    // In a real app, this would link to the checkout page.
    window.open('https://example.com/checkout', '_blank');
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-background/90 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-brand-primary tracking-wider">
          AchirasCrafts
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-brand-text hover:text-brand-primary transition-colors duration-300">Inicio</a>
          <a href="#products" className="text-brand-text hover:text-brand-primary transition-colors duration-300">Productos</a>
          <a href="#about" className="text-brand-text hover:text-brand-primary transition-colors duration-300">Nosotros</a>
        </nav>
        <button
          onClick={handleCartClick}
          className="relative text-brand-text hover:text-brand-primary transition-colors duration-300"
          aria-label="Abrir carrito de compras"
        >
          <ShoppingCartIcon className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
