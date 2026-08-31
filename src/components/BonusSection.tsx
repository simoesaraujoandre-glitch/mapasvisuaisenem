import React, { useEffect, useRef, useState } from 'react';
import { Gift, BookOpen, PenTool, CheckSquare, Calendar } from 'lucide-react';
import { bonusList } from '../data/contentData';
import { BonusItem } from '../types';

interface BonusSectionProps {
  onOpenSample?: (sample: any) => void;
}

interface BonusCarouselProps {
  bonus: BonusItem;
  isVisible: boolean;
}

const BonusImageCarousel: React.FC<BonusCarouselProps> = ({ bonus, isVisible }) => {
  if (!bonus.sampleImages || bonus.sampleImages.length === 0) return null;

  const isPortrait = bonus.orientation === 'portrait';
  // Duplicate for seamless loop
  const displayImages = [...bonus.sampleImages, ...bonus.sampleImages];
  
  // Consistent, steady speed across all cards
  const duration = isPortrait 
    ? (bonus.sampleImages.length <= 4 ? '26s' : '30s') 
    : (bonus.sampleImages.length <= 5 ? '28s' : '32s');

  return (
    <div className="mt-4 pt-4 border-t border-slate-100/90 overflow-hidden w-full pointer-events-none select-none">
      <div className="relative w-full overflow-hidden rounded-xl bg-slate-50/70 py-1.5 px-0.5">
        {/* Soft edge gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <div 
          className="animate-marquee-right flex items-center gap-2.5 sm:gap-3"
          style={{ 
            animationDuration: duration,
            animationPlayState: isVisible ? 'running' : 'paused'
          }}
        >
          {displayImages.map((imgSrc, imgIdx) => (
            <div
              key={imgIdx}
              className={`relative flex-shrink-0 rounded-lg overflow-hidden border border-slate-200/80 bg-white shadow-2xs ${
                isPortrait 
                  ? 'h-28 sm:h-38 w-[76px] sm:w-[104px] aspect-[1/1.414]' 
                  : 'h-20 sm:h-28 w-[130px] sm:w-[180px] aspect-[16/10]'
              }`}
            >
              <img
                src={imgSrc}
                alt={`${bonus.title} ${imgIdx + 1}`}
                loading="lazy"
                decoding="async"
                draggable={false}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain rounded-md block"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BonusSection: React.FC<BonusSectionProps> = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '100px 0px', threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getBonusIcon = (id: string) => {
    switch (id) {
      case 'bonus-1': return <BookOpen className="w-5 h-5" />;
      case 'bonus-2': return <PenTool className="w-5 h-5" />;
      case 'bonus-3': return <CheckSquare className="w-5 h-5" />;
      case 'bonus-4': return <Calendar className="w-5 h-5" />;
      default: return <Gift className="w-5 h-5" />;
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="bonus" 
      className="bg-[#F7FAFF] py-16 md:py-24 border-b border-slate-200/70 [content-visibility:auto]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-700 uppercase tracking-wider mb-4">
            <Gift className="w-3.5 h-3.5" />
            <span>Presentes Exclusivos</span>
          </div>

          <h2 className="font-heading font-extrabold text-slate-900 text-2xl sm:text-3xl md:text-4xl leading-tight mb-4">
            E para completar sua preparação, desenvolvemos 4 bônus exclusivos
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            Cada bônus foi criado para complementar o material principal e deixar seus estudos para o ENEM mais completos, com novos conteúdos, prática e organização.
          </p>
        </div>

        {/* 4 Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {bonusList.map((bonus) => (
            <div 
              key={bonus.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between items-center text-center group [content-visibility:auto]"
            >
              <div className="w-full flex flex-col items-center text-center">
                {/* Bonus Cover / Mockup Header Centered */}
                <div className="relative w-28 h-36 sm:w-32 sm:h-40 bg-gradient-to-b from-slate-50 to-blue-50/40 rounded-xl p-1.5 shadow-sm border border-slate-200/80 flex items-center justify-center overflow-hidden group-hover:scale-105 group-hover:shadow-md transition-all duration-200 mb-4 mx-auto">
                  {bonus.imageUrl ? (
                    <img 
                      src={bonus.imageUrl} 
                      alt={bonus.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-slate-900 rounded-lg p-2 flex flex-col justify-between text-white">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-bold uppercase tracking-wider bg-white/20 px-1 py-0.5 rounded">
                          ENEM
                        </span>
                        {getBonusIcon(bonus.id)}
                      </div>
                      <div className="text-[9px] font-heading font-bold leading-tight line-clamp-2">
                        {bonus.title}
                      </div>
                      <div className="text-[7px] text-blue-200 font-mono">
                        PDF HD • Digital
                      </div>
                    </div>
                  )}
                </div>

                {/* Title & Tag Centered */}
                <h3 className="font-heading font-bold text-slate-900 text-lg sm:text-xl group-hover:text-blue-600 transition-colors text-center">
                  <span className="text-blue-600 font-extrabold">{bonus.number}</span> — {bonus.title}
                </h3>

                {bonus.lead && (
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-1.5 leading-snug text-center max-w-md">
                    {bonus.lead}
                  </p>
                )}

                <div className="mt-2.5">
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 inline-block px-3 py-1 rounded-md border border-emerald-200/60 text-center">
                    {bonus.priceNote || `Valor avulso: ${bonus.originalPrice} — GRÁTIS no Plano Completo`}
                  </span>
                </div>

                {/* Description Centered */}
                <p className="text-slate-600 text-sm leading-relaxed font-sans mt-3 text-center max-w-md">
                  {bonus.description}
                </p>
              </div>

              {/* Automatic Seamless Marquee Scrolling to the Right */}
              <BonusImageCarousel bonus={bonus} isVisible={isVisible} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

