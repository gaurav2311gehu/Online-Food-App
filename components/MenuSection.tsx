import React from 'react';
import { MenuSectionType } from '../types';
import { MenuCard } from './MenuCard';
import { SectionDivider } from './Decorations';

interface MenuSectionProps {
  section: MenuSectionType;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ section }) => {
  return (
    <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-rozha text-5xl md:text-6xl text-maroon mb-2 drop-shadow-sm text-shadow-retro">
          {section.titleHindi}
        </h2>
        <p className="font-eczar font-bold text-xl tracking-[0.2em] text-ink uppercase">
          - {section.titleEnglish} -
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {section.items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
      
      <SectionDivider />
    </section>
  );
};