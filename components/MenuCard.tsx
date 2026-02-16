import React from 'react';
import { MenuItem } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      ref={elementRef}
      className={`
        relative group p-4 border-2 border-maroon/80 bg-[#FFF8E7] 
        transform transition-all duration-700 ease-out
        hover:scale-105 hover:shadow-xl hover:shadow-maroon/20 hover:z-10
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
      `}
    >
      {/* Decorative corner borders */}
      <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-maroon"></div>
      <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-maroon"></div>
      <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-maroon"></div>
      <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-maroon"></div>

      {/* Content */}
      <div className="flex flex-col h-full items-center text-center">
        {/* Image Container */}
        <div className="w-full h-40 mb-4 overflow-hidden border border-maroon/30 relative bg-gray-200">
             <div className="absolute inset-0 bg-maroon/10 mix-blend-multiply pointer-events-none z-10"></div>
             {item.imageUrl && (
                 <img 
                    src={item.imageUrl} 
                    alt={item.nameEnglish}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                 />
             )}
        </div>

        {/* Veg/Non-Veg Indicator */}
        <div className="absolute top-6 right-6 bg-white border border-green-600 p-0.5">
           <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
        </div>

        <h3 className="font-rozha text-2xl text-maroon mb-1 leading-tight">{item.nameHindi}</h3>
        <h4 className="font-eczar font-bold text-lg text-ink mb-2 uppercase tracking-wide">{item.nameEnglish}</h4>
        
        <div className="w-12 h-0.5 bg-maroon/40 my-2"></div>

        <p className="font-eczar text-ink/80 text-sm mb-4 leading-relaxed flex-grow">
          {item.description}
        </p>

        <div className="mt-auto">
          <span className="font-rozha text-3xl text-maroon inline-block transform -rotate-2">
            ₹{item.price}
          </span>
        </div>
      </div>
    </div>
  );
};