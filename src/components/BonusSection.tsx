import React from 'react';
import { Gift, BookOpen, PenTool, CheckSquare, Calendar, Sparkles } from 'lucide-react';
import { bonusList } from '../data/contentData';

export const BonusSection: React.FC = () => {
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
    <section id="bonus" className="bg-[#F7FAFF] py-16 md:py-24 border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-700 uppercase tracking-wider mb-4">
            <Gift className="w-3.5 h-3.5" />
            <span>Presentes Exclusivos</span>
          </div>

          <h2 className="font-heading font-extrabold text-slate-900 text-2xl sm:text-3xl md:text-4xl leading-tight mb-4">
            Quer uma preparação ainda mais completa para o ENEM?
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            Além do material de Matemática, no <strong className="text-blue-600 font-semibold">Plano Completo</strong> você recebe 4 bônus especiais.
          </p>
        </div>

        {/* 4 Bonus Cards (2 per row on desktop, 1 per row on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {bonusList.map((bonus) => (
            <div 
              key={bonus.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Bonus Cover / Mockup Header */}
                <div className="flex items-start justify-between gap-4 sm:gap-5 mb-6">
                  {/* Visual mini-cover with uploaded image */}
                  <div className="relative flex-shrink-0 w-24 h-32 sm:w-28 sm:h-36 bg-gradient-to-b from-slate-50 to-blue-50/40 rounded-xl p-1.5 shadow-sm border border-slate-200/80 flex items-center justify-center overflow-hidden group-hover:scale-105 group-hover:shadow-md transition-all duration-200">
                    {bonus.imageUrl ? (
                      <img 
                        src={bonus.imageUrl} 
                        alt={bonus.title}
                        width={320}
                        height={320}
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

                  {/* Title & Tag */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                        {bonus.number}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-slate-900 text-lg sm:text-xl group-hover:text-blue-600 transition-colors">
                      {bonus.title}
                    </h3>

                    <div className="text-xs text-slate-400 font-medium mt-1">
                      Valor avulso: <span className="line-through">{bonus.originalPrice}</span> (Grátis hoje)
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  {bonus.description}
                </p>
              </div>

              {/* Highlights pills */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                {bonus.bullets.map((bullet, bIdx) => (
                  <span 
                    key={bIdx}
                    className="text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg"
                  >
                    • {bullet}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
