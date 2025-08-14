
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
