import React from 'react';

// Hand-drawn curved arrow
export const CurvedArrow: React.FC<{ className?: string; direction?: 'right' | 'left' | 'down' | 'up-right' }> = ({
  className = 'w-12 h-12 text-[#F6C945]',
  direction = 'right',
}) => {
  const rotation = {
    right: 'rotate-0',
    left: 'scale-x-[-1]',
    down: 'rotate-90',
    'up-right': '-rotate-45',
  }[direction];

  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${rotation} ${className}`}
      aria-hidden="true"
    >
      <path d="M 10,45 Q 50,10 85,30" />
      <path d="M 72,18 L 86,30 L 75,44" />
    </svg>
  );
};

// Hand-drawn sketch circle / oval
export const SketchCircle: React.FC<{ className?: string; children?: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <svg
        className="absolute -inset-1.5 w-[calc(100%+12px)] h-[calc(100%+12px)] pointer-events-none text-[#F6C945]"
        viewBox="0 0 120 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M 10,25 C 10,10 35,5 65,6 C 95,7 115,12 114,26 C 113,40 85,45 55,44 C 25,43 7,38 9,23" />
      </svg>
    </span>
  );
};

// Hand-drawn wavy underline
export const WavyUnderline: React.FC<{ className?: string }> = ({ className = 'text-[#F6C945]' }) => {
  return (
    <svg
      viewBox="0 0 200 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      className={`w-full h-3 ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M 5,12 Q 25,3 45,12 T 85,12 T 125,12 T 165,12 T 195,12" />
    </svg>
  );
};

// Star doodle
export const StarDoodle: React.FC<{ className?: string }> = ({ className = 'w-6 h-6 text-[#F6C945]' }) => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M 20,2 L 23,15 L 36,15 L 25,23 L 29,36 L 20,27 L 11,36 L 15,23 L 4,15 L 17,15 Z" />
    </svg>
  );
};

// Mini study math stickers
export const MathStickers: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-3 text-xs font-mono font-bold opacity-60 pointer-events-none select-none ${className}`}>
      <span className="px-2 py-0.5 rounded bg-white/70 border border-[#0E2A62]/15 shadow-xs">π ≅ 3,14</span>
      <span className="px-2 py-0.5 rounded bg-white/70 border border-[#0E2A62]/15 shadow-xs">f(x) = ax + b</span>
      <span className="px-2 py-0.5 rounded bg-white/70 border border-[#0E2A62]/15 shadow-xs">Δ = b² - 4ac</span>
    </div>
  );
};
