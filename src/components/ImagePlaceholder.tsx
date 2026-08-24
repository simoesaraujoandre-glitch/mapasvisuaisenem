import React from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

interface ImagePlaceholderProps {
  id?: string;
  tag: string;
  label?: string;
  sublabel?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide' | 'tall' | 'a4-landscape' | 'custom';
  className?: string;
  src?: string;
  theme?: 'light' | 'navy' | 'yellow' | 'coral' | 'blue';
  shadow?: boolean;
  priority?: boolean;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  id,
  tag,
  label,
  sublabel,
  aspectRatio = 'portrait',
  className = '',
  src,
  theme = 'light',
  shadow = true,
  priority = false,
}) => {
  // Aspect ratio classes
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    tall: 'aspect-[1/1.414]', // A4 vertical
    'a4-landscape': 'aspect-[297/210]', // A4 horizontal (landscape)
    wide: 'aspect-[16/10]',
    custom: '',
  }[aspectRatio];

  // If an image source is provided in config or props, render real image with fallback
  if (src && src.trim() !== '') {
    return (
      <div 
        id={id}
        className={`relative overflow-hidden rounded-2xl ${aspectClasses} ${shadow ? 'shadow-lg hover:shadow-xl transition-shadow duration-300' : ''} ${className}`}
      >
        <img 
          src={src} 
          alt={label || tag} 
          className={`w-full ${aspectRatio === 'custom' ? 'h-auto object-contain' : 'h-full object-cover object-center'} rounded-2xl block`} 
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
        />
      </div>
    );
  }

  const themeStyles = {
    light: {
      bg: 'bg-white/85',
      border: 'border-2 border-dashed border-[#0E2A62]/25',
      tagBg: 'bg-[#0E2A62]/10 text-[#0E2A62]',
      icon: 'text-[#0E2A62]/50',
      labelColor: 'text-[#0E2A62]',
    },
    navy: {
      bg: 'bg-[#0E2A62]/40 backdrop-blur-sm',
      border: 'border-2 border-dashed border-white/30',
      tagBg: 'bg-[#F6C945] text-[#0E2A62]',
      icon: 'text-[#F6C945]',
      labelColor: 'text-white',
    },
    yellow: {
      bg: 'bg-[#FFFDF3]',
      border: 'border-2 border-dashed border-[#F6C945]',
      tagBg: 'bg-[#F6C945]/30 text-[#0E2A62]',
      icon: 'text-[#0E2A62]/70',
      labelColor: 'text-[#0E2A62]',
    },
    coral: {
      bg: 'bg-[#FFF1ED]',
      border: 'border-2 border-dashed border-[#F1645D]/40',
      tagBg: 'bg-[#F1645D]/20 text-[#F1645D]',
      icon: 'text-[#F1645D]',
      labelColor: 'text-[#0E2A62]',
    },
    blue: {
      bg: 'bg-[#EAF4FF]',
      border: 'border-2 border-dashed border-[#0E2A62]/30',
      tagBg: 'bg-[#0E2A62] text-white',
      icon: 'text-[#0E2A62]',
      labelColor: 'text-[#0E2A62]',
    },
  }[theme];

  return (
    <div
      id={id}
      className={`relative group rounded-2xl ${aspectClasses} ${themeStyles.bg} ${themeStyles.border} p-5 flex flex-col items-center justify-center text-center transition-all duration-300 ${
        shadow ? 'shadow-md hover:shadow-xl' : ''
      } ${className}`}
      aria-label={`Espaço reservado para ${tag}`}
    >
      {/* Decorative corner paper lines */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-current opacity-30 rounded-tl pointer-events-none" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-current opacity-30 rounded-tr pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-current opacity-30 rounded-bl pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-current opacity-30 rounded-br pointer-events-none" />

      {/* Main Tag Badge */}
      <div className="relative z-10 flex flex-col items-center gap-2 max-w-full px-2">
        <div className={`p-2.5 rounded-full ${themeStyles.tagBg} shadow-sm group-hover:scale-105 transition-transform duration-200`}>
          <ImageIcon className={`w-5 h-5 ${themeStyles.icon}`} />
        </div>

        <code className="font-mono text-xs md:text-sm font-bold tracking-wider px-2.5 py-1 rounded-md bg-black/5 border border-black/10 text-current select-all">
          {tag}
        </code>

        {label && (
          <p className={`text-xs md:text-sm font-semibold mt-1 ${themeStyles.labelColor}`}>
            {label}
          </p>
        )}

        {sublabel && (
          <span className="text-[11px] md:text-xs opacity-70 font-medium max-w-[200px] leading-tight">
            {sublabel}
          </span>
        )}

        <div className="flex items-center gap-1 text-[10px] font-hand text-current opacity-60 mt-1">
          <Sparkles className="w-3 h-3" />
          <span>Espaço reservado para sua imagem</span>
        </div>
      </div>
    </div>
  );
};
