import React from 'react';
import { Garland, MandalaCorner } from './components/Decorations';
import { MenuSection } from './components/MenuSection';
import { menuData } from './data';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-turmeric font-eczar overflow-x-hidden relative">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 bg-vintage-paper opacity-40 pointer-events-none z-0 mix-blend-overlay"></div>
      <div className="fixed inset-0 bg-noise pointer-events-none z-0 mix-blend-multiply"></div>

      {/* Decorative Elements */}
      <Garland />
      <MandalaCorner position="tl" />
      <MandalaCorner position="tr" />
      <MandalaCorner position="bl" />
      <MandalaCorner position="br" />

      {/* Content Wrapper */}
      <div className="relative z-10 pt-32 pb-16">
        
        {/* Hero Section */}
        <header className="text-center px-4 mb-16 relative">
          <div className="max-w-4xl mx-auto border-4 border-double border-maroon p-8 md:p-12 bg-turmeric/80 backdrop-blur-sm shadow-2xl transform rotate-1">
            <div className="absolute top-[-20px] left-[50%] translate-x-[-50%] bg-maroon text-turmeric px-6 py-1 font-bold tracking-widest uppercase text-sm shadow-lg">
              Est. 1985
            </div>
            
            <h1 className="font-rozha text-6xl md:text-8xl text-maroon mb-4 text-shadow-retro leading-tight">
              द रॉयल ढाबा
            </h1>
            <h2 className="font-eczar font-black text-2xl md:text-4xl text-ink uppercase tracking-widest mb-6 border-b-2 border-maroon inline-block pb-2">
              The Royal Dhaba
            </h2>
            <p className="font-eczar text-xl text-maroon-light italic">
              "Authentic Taste of Punjab"
            </p>
            
            <div className="mt-8 flex justify-center gap-4 text-sm font-bold tracking-widest text-ink">
              <span>PURE VEG</span>
              <span>•</span>
              <span>STREET FOOD</span>
              <span>•</span>
              <span>SWEETS</span>
            </div>
          </div>
        </header>

        {/* Menu Sections */}
        <main>
          {menuData.map((section) => (
            <MenuSection key={section.id} section={section} />
          ))}
        </main>

        {/* Footer */}
        <footer className="text-center mt-12 px-4">
          <div className="inline-block border-2 border-maroon p-6 bg-paper/90 shadow-lg transform -rotate-1">
             <h3 className="font-rozha text-2xl text-maroon mb-2">पधारने के लिए धन्यवाद!</h3>
             <p className="text-ink font-bold">Thank you for visiting</p>
             <div className="mt-4 text-xs font-mono text-gray-600">
                123, Flavor Street, Food Market, New Delhi
             </div>
          </div>
          <div className="mt-8 text-maroon/60 text-sm font-bold">
            © 2026 The Royal Dhaba. Design inspired by vintage India.
          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;