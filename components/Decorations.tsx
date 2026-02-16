import React from 'react';

export const Garland: React.FC = () => {
  // A simple marigold string SVG pattern
  const MarigoldFlower = ({ color, cx, cy }: { color: string; cx: number; cy: number }) => (
    <g>
      <circle cx={cx} cy={cy} r="14" fill={color} stroke="#5D001E" strokeWidth="1" />
      <circle cx={cx} cy={cy} r="10" fill="none" stroke="#5D001E" strokeWidth="0.5" strokeDasharray="2 2" />
      <circle cx={cx} cy={cy} r="4" fill="#5D001E" opacity="0.3" />
    </g>
  );

  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-20 h-32">
       {/* Loop multiple strings for density */}
      <div className="absolute top-[-10px] w-full flex justify-between animate-sway-slow origin-top">
        <svg width="100%" height="120" preserveAspectRatio="none">
           {/* String Line */}
           <path d="M0,0 Q50,60 100,0 T200,0 T300,0 T400,0 T500,0 T600,0 T700,0 T800,0 T900,0 T1000,0 T1100,0 T1200,0 T1300,0 T1400,0" 
                 fill="none" stroke="#2c5e2e" strokeWidth="2" />
        </svg>
      </div>

      {/* Hanging Flowers - Simplified representation using flex for responsiveness */}
      <div className="flex justify-around absolute top-[-5px] w-full animate-sway-medium origin-top">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={`flower-1-${i}`} className="relative">
             <div className="h-12 w-0.5 bg-green-800 mx-auto"></div>
             <svg width="40" height="40" viewBox="0 0 40 40" className="mt-[-10px]">
                <MarigoldFlower color={i % 2 === 0 ? "#FF9800" : "#FFC107"} cx={20} cy={20} />
             </svg>
          </div>
        ))}
      </div>
      
      <div className="flex justify-around absolute top-[-15px] w-full animate-sway-slow origin-top opacity-80" style={{ left: '5%' }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={`flower-2-${i}`} className="relative">
             <div className="h-20 w-0.5 bg-green-800 mx-auto"></div>
             <svg width="40" height="40" viewBox="0 0 40 40" className="mt-[-10px]">
                <MarigoldFlower color={i % 3 === 0 ? "#FF5722" : "#FFB300"} cx={20} cy={20} />
             </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export const MandalaCorner: React.FC<{ position: 'tl' | 'tr' | 'bl' | 'br' }> = ({ position }) => {
  const classes = {
    tl: 'top-0 left-0',
    tr: 'top-0 right-0 transform scale-x-[-1]',
    bl: 'bottom-0 left-0 transform scale-y-[-1]',
    br: 'bottom-0 right-0 transform scale-[-1]',
  };

  return (
    <div className={`absolute w-32 h-32 md:w-48 md:h-48 pointer-events-none opacity-20 mix-blend-multiply z-0 ${classes[position]}`}>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H200V200H0V0Z" fill="none"/>
        <path d="M0 0C110.457 0 200 89.543 200 200H0V0Z" fill="#5D001E"/>
        <circle cx="0" cy="0" r="180" stroke="#FFC000" strokeWidth="2"/>
        <circle cx="0" cy="0" r="160" stroke="#FFC000" strokeWidth="4" strokeDasharray="10 10"/>
        <circle cx="0" cy="0" r="120" stroke="#FFC000" strokeWidth="1"/>
        <path d="M0 0L140 140" stroke="#FFC000" strokeWidth="2"/>
        <path d="M0 0L70 170" stroke="#FFC000" strokeWidth="1"/>
        <path d="M0 0L170 70" stroke="#FFC000" strokeWidth="1"/>
      </svg>
    </div>
  );
};

export const SectionDivider: React.FC = () => (
  <div className="w-full flex items-center justify-center my-12 opacity-80">
    <div className="h-px bg-maroon w-1/4"></div>
    <div className="mx-4 text-maroon text-2xl">✤</div>
    <div className="h-px bg-maroon w-1/4"></div>
  </div>
);