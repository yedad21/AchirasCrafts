
import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';

interface CommissionCardProps {
  totalSlots: number;
  availableSlots: number;
}

const CommissionCard: React.FC<CommissionCardProps> = ({ totalSlots, availableSlots }) => {
  const percentage = (availableSlots / totalSlots) * 100;

  return (
    <div className="group flex flex-col justify-between p-8 rounded-lg shadow-md bg-brand-primary text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div>
        <h3 className="text-2xl font-bold mb-3">Creaciones a Medida</h3>
        <p className="text-brand-background/80 mb-6">
          ¿Tienes una idea única? Encarga una pieza personalizada hecha a tu medida. Plazas limitadas este mes.
        </p>
      </div>
      <div>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1 font-semibold text-sm">
            <span>Plazas Disponibles</span>
            <span>{availableSlots} / {totalSlots}</span>
          </div>
          <div className="w-full bg-brand-background/30 rounded-full h-2.5">
            <div className="bg-white h-2.5 rounded-full transition-all duration-500" style={{ width: `${percentage}%` }}></div>
          </div>
        </div>
        <button className="w-full group/button flex items-center justify-center px-4 py-3 bg-white text-brand-primary font-bold rounded-md hover:bg-brand-background/90 transition-colors duration-300">
          Solicitar un Encargo
          <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover/button:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default CommissionCard;
