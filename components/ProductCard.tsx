
import React from 'react';
import { Product } from '../types';
import ArrowRightIcon from './icons/ArrowRightIcon';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <a href={`/product/${product.id}`} className="block flex-grow">
        <div className="relative h-72">
          {/* Default Image */}
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
          />
          {/* Hover Image */}
          <img 
            src={product.hoverImageUrl} 
            alt={`${product.name} (vista alternativa)`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-brand-primary mb-2 truncate">{product.name}</h3>
          <p className="text-lg font-bold text-brand-secondary">${product.price.toFixed(2)}</p>
        </div>
      </a>
      <div className="p-6 pt-0 mt-auto">
          <button className="w-full group/button flex items-center justify-center px-4 py-3 bg-brand-secondary text-white font-bold rounded-md hover:bg-brand-primary transition-colors duration-300">
            Añadir al Carrito
            <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover/button:translate-x-1 transition-transform duration-300" />
          </button>
      </div>
    </div>
  );
};

export default ProductCard;
