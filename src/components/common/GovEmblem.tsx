import React from 'react';

export const AshokaEmblem: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg 
    viewBox="0 0 100 125" 
    className={className} 
    fill="currentColor" 
    aria-label="State Emblem of India"
  >
    {/* Stylized representation of Ashoka Lion Capital Emblem */}
    <g fill="currentColor">
      {/* Central Lion Head */}
      <circle cx="50" cy="30" r="16" fillOpacity="0.85" />
      <path d="M42 22 Q50 16 58 22 Q60 30 50 36 Q40 30 42 22 Z" />
      {/* Left Lion Head */}
      <circle cx="34" cy="32" r="12" fillOpacity="0.7" />
      <path d="M26 26 Q32 20 38 25 Q38 34 30 38 Q24 34 26 26 Z" />
      {/* Right Lion Head */}
      <circle cx="66" cy="32" r="12" fillOpacity="0.7" />
      <path d="M62 25 Q68 20 74 26 Q76 34 70 38 Q62 34 62 25 Z" />
      {/* Main Base Pedestal */}
      <rect x="24" y="52" width="52" height="12" rx="3" />
      {/* Ashoka Chakra Wheel */}
      <circle cx="50" cy="58" r="5" fill="#ffffff" />
      <circle cx="50" cy="58" r="3" fill="currentColor" />
      <circle cx="50" cy="58" r="1" fill="#ffffff" />
      {/* Guard animals left and right */}
      <ellipse cx="33" cy="58" rx="4" ry="2.5" fill="#ffffff" />
      <ellipse cx="67" cy="58" rx="4" ry="2.5" fill="#ffffff" />
      {/* Lower Inverted Lotus Base */}
      <path d="M22 68 C 30 76, 70 76, 78 68 L 74 80 C 60 86, 40 86, 26 80 Z" fillOpacity="0.9" />
      {/* Satyameva Jayate Banner */}
      <rect x="18" y="85" width="64" height="8" rx="2" fillOpacity="0.9" />
      <text x="50" y="91" fontSize="4.5" textAnchor="middle" fill="#ffffff" fontWeight="bold">सत्यमेव जयते</text>
    </g>
  </svg>
);

export const STSahyogLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 to-gov-navy text-white shadow-sm flex-shrink-0">
      {/* Modern leaf/sprout icon matching reference */}
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L12 12" stroke="#4ade80" />
        <path d="M12 12C9 9 5 9 3 12C3 16 7 19 12 19" fill="#22c55e" fillOpacity="0.4" stroke="#22c55e" />
        <path d="M12 8C15 5 19 5 21 8C21 12 17 15 12 15" fill="#38bdf8" fillOpacity="0.4" stroke="#38bdf8" />
        <circle cx="12" cy="19" r="2" fill="#ea580c" stroke="none" />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="text-xl font-bold tracking-tight text-gov-navy leading-none">
        ST-Sahyog
      </span>
      <span className="text-[10px] font-medium text-slate-500 tracking-wide mt-0.5 leading-tight">
        Education Today • Stronger Tomorrow
      </span>
    </div>
  </div>
);

export const MountainGraphic: React.FC<{ className?: string }> = ({ className = 'w-full h-24' }) => (
  <svg viewBox="0 0 240 100" className={className} preserveAspectRatio="none" fill="none">
    <path 
      d="M0 100 L0 75 Q40 40 80 65 T160 55 T240 70 L240 100 Z" 
      fill="#bbf7d0" 
      fillOpacity="0.6" 
    />
    <path 
      d="M0 100 L0 85 Q60 55 120 75 T240 80 L240 100 Z" 
      fill="#86efac" 
      fillOpacity="0.9" 
    />
    <path 
      d="M0 100 L0 92 Q70 70 140 85 T240 90 L240 100 Z" 
      fill="#4ade80" 
      fillOpacity="0.8" 
    />
  </svg>
);
