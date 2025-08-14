
import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import CommissionCard from './CommissionCard';

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Tabla de Servir de Nogal',
    price: 85.00,
    imageUrl: 'https://picsum.photos/id/1074/400/500',
    hoverImageUrl: 'https://picsum.photos/id/292/400/500',
    description: 'Una tabla de servir con un hermoso acabado, hecha de nogal negro macizo.'
  },
  {
    id: 2,
    name: 'Soporte para Plantas de Roble',
    price: 120.00,
    imageUrl: 'https://picsum.photos/id/106/400/500',
    hoverImageUrl: 'https://picsum.photos/id/119/400/500',
    description: 'Soporte para plantas minimalista para realzar tus plantas favoritas.'
  },
  {
    id: 3,
    name: 'Cuenco Tallado a Mano',
    price: 65.00,
    imageUrl: 'https://picsum.photos/id/1079/400/500',
    hoverImageUrl: 'https://picsum.photos/id/1080/400/500',
    description: 'Un cuenco decorativo único, tallado en una sola pieza de arce.'
  },
   {
    id: 4,
    name: 'Caja de Recuerdos de Cedro',
    price: 95.00,
    imageUrl: 'https://picsum.photos/id/30/400/500',
    hoverImageUrl: 'https://picsum.photos/id/187/400/500',
    description: 'Caja de cedro aromático con uniones de cola de milano, perfecta para tus tesoros.'
  }
];

const ProductList: React.FC = () => {
  return (
    <section id="products" className="py-16 sm:py-24 bg-brand-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Nuestra Colección</h2>
          <p className="text-lg text-brand-text/80 mt-2">Cada pieza está elaborada con pasión y precisión.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          <CommissionCard totalSlots={10} availableSlots={7} />
        </div>
      </div>
    </section>
  );
};

export default ProductList;
