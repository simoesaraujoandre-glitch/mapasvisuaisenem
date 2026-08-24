import React from 'react';

interface MarcaTextoProps {
  children: React.ReactNode;
  color?: 'yellow' | 'blue' | 'coral' | 'green' | 'white';
  className?: string;
}

export const MarcaTexto: React.FC<MarcaTextoProps> = ({
  children,
  color = 'yellow',
  className = '',
}) => {
  const colorMap = {
    yellow: 'highlight-yellow text-[#0E2A62]',
    blue: 'highlight-blue text-[#0E2A62]',
    coral: 'highlight-coral text-[#0E2A62]',
    green: 'highlight-green text-[#0E2A62]',
    white: 'bg-white/20 text-white px-2 py-0.5 rounded-md backdrop-blur-xs',
  };

  return (
    <span className={`inline-block font-extrabold transition-all duration-300 ${colorMap[color]} ${className}`}>
      {children}
    </span>
  );
};
