
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="about" className="bg-brand-secondary/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold text-brand-primary mb-2">AchirasCrafts</h3>
            <p className="text-brand-text/80">Artesanía en madera hecha a mano para el hogar moderno.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-brand-primary mb-2">Enlaces Rápidos</h3>
            <ul className="space-y-1 text-brand-text/80">
              <li><a href="#home" className="hover:text-brand-primary transition-colors">Inicio</a></li>
              <li><a href="#products" className="hover:text-brand-primary transition-colors">Productos</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-brand-primary mb-2">Síguenos</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-brand-text/80 hover:text-brand-primary transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-brand-text/80 hover:text-brand-primary transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-brand-secondary/20 pt-6 text-center text-brand-text/70">
          <p>&copy; {new Date().getFullYear()} AchirasCrafts. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
