import React from 'react';
import { BONUS_SECTION_DATA, BONUS_ITEMS } from '../data/copyData';
import { BookMarked, PenTool, Award, Calculator, BookA, Gift } from 'lucide-react';
import { MiniBonusCarousel } from './MiniBonusCarousel';

export const BonusSection: React.FC = () => {
  const bonusIcons: Record<string, React.ReactNode> = {
    "bonus-1": <BookMarked className="w-5 h-5 text-[#F97316]" />,
    "bonus-2": <PenTool className="w-5 h-5 text-[#F97316]" />,
    "bonus-3": <Award className="w-5 h-5 text-[#F97316]" />,
    "bonus-4": <Calculator className="w-5 h-5 text-[#F97316]" />,
    "bonus-5": <BookA className="w-5 h-5 text-[#F97316]" />,
  };

  const bonusCoverImages: Record<string, string> = {
    "bonus-1": "/images/bonus1.webp",
    "bonus-2": "/images/bonus2.webp",
    "bonus-3": "/images/bonus3.webp",
    "bonus-4": "/images/bonus4.webp",
    "bonus-5": "/images/bonus5.webp",
  };

  const bonusImages: Record<string, { src: string; alt: string }[]> = {
    "bonus-1": [
      { src: '/images/bonus1-demo-1.webp', alt: 'Repertório Sociocultural 1' },
      { src: '/images/bonus1-demo-2.webp', alt: 'Repertório Sociocultural 2' },
      { src: '/images/bonus1-demo-3.webp', alt: 'Repertório Sociocultural 3' },
      { src: '/images/bonus1-demo-4.webp', alt: 'Repertório Sociocultural 4' },
      { src: '/images/bonus1-demo-5.webp', alt: 'Repertório Sociocultural 5' },
      { src: '/images/bonus1-demo-6.webp', alt: 'Repertório Sociocultural 6' },
    ],
    "bonus-2": [
      { src: '/images/bonus2-demo-1.webp', alt: 'Temas para Treinar 1' },
      { src: '/images/bonus2-demo-2.webp', alt: 'Temas para Treinar 2' },
      { src: '/images/bonus2-demo-3.webp', alt: 'Temas para Treinar 3' },
      { src: '/images/bonus2-demo-4.webp', alt: 'Temas para Treinar 4' },
      { src: '/images/bonus2-demo-5.webp', alt: 'Temas para Treinar 5' },
    ],
    "bonus-3": [
      { src: '/images/bonus3-demo-1.webp', alt: 'Redações Nota 1000 Comentadas 1' },
      { src: '/images/bonus3-demo-2.webp', alt: 'Redações Nota 1000 Comentadas 2' },
      { src: '/images/bonus3-demo-3.webp', alt: 'Redações Nota 1000 Comentadas 3' },
      { src: '/images/bonus3-demo-4.webp', alt: 'Redações Nota 1000 Comentadas 4' },
      { src: '/images/bonus3-demo-5.webp', alt: 'Redações Nota 1000 Comentadas 5' },
    ],
    "bonus-4": [
      { src: '/images/matematica-1.webp', alt: 'Matemática ENEM 1' },
      { src: '/images/matematica-2.webp', alt: 'Matemática ENEM 2' },
      { src: '/images/matematica-3.webp', alt: 'Matemática ENEM 3' },
      { src: '/images/matematica-4.webp', alt: 'Matemática ENEM 4' },
      { src: '/images/matematica-5.webp', alt: 'Matemática ENEM 5' },
    ],
    "bonus-5": [
      { src: '/images/linguagens-2.webp', alt: 'Linguagens ENEM 2' },
      { src: '/images/linguagens-3.webp', alt: 'Linguagens ENEM 3' },
      { src: '/images/linguagens-4.webp', alt: 'Linguagens ENEM 4' },
      { src: '/images/linguagens-5.webp', alt: 'Linguagens ENEM 5' },
      { src: '/images/linguagens-6.webp', alt: 'Linguagens ENEM 6' },
    ],
  };

  const redacaoBonus = BONUS_ITEMS.filter((item) => item.category === 'redacao');
  const geralBonus = BONUS_ITEMS.filter((item) => item.category === 'geral');

  return (
    <section id="bonus" className="bg-white py-12 sm:py-20 lg:py-24 border-b border-[#E5E7EB]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FFF1E8] border border-[#F97316]/20 px-3.5 py-1 rounded-full mb-3">
            <Gift className="w-3.5 h-3.5 text-[#F97316]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
              {BONUS_SECTION_DATA.smallBadge}
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172554] tracking-tight leading-tight mb-3 sm:mb-4">
            {BONUS_SECTION_DATA.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
            {BONUS_SECTION_DATA.subheadline}
          </p>
        </div>

        {/* PRIMEIRA LINHA: 3 BÔNUS DE REDAÇÃO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-5 sm:mb-6">
          {redacaoBonus.map((bonus) => (
            <div
              key={bonus.id}
              id={`card-${bonus.id}`}
              className="bg-white rounded-2xl border border-[#E5E7EB] p-5 sm:p-6 shadow-2xs hover:border-[#F97316]/40 hover:shadow-xs transition-all flex flex-col justify-between items-center text-center"
            >
              <div className="w-full flex flex-col items-center">
                {/* Visual Header / Tag */}
                <div className="flex items-center justify-between w-full mb-3.5 sm:mb-4">
                  <span className="text-xs font-extrabold text-[#F97316] bg-[#FFF1E8] px-3 py-1 rounded-full uppercase tracking-wider">
                    {bonus.tag}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-[#FFF9F5] border border-[#F97316]/20 flex items-center justify-center">
                    {bonusIcons[bonus.id]}
                  </div>
                </div>

                {/* Imagem do Bônus Centralizada */}
                <div className="w-full flex items-center justify-center p-2 sm:p-3 mb-3.5 sm:mb-4 rounded-xl bg-[#F8FAFC] border border-[#F1F5F9]">
                  <img
                    src={bonusCoverImages[bonus.id]}
                    alt={bonus.title}
                    width={420}
                    height={420}
                    className="w-full max-w-[180px] sm:max-w-[200px] h-40 sm:h-48 object-contain drop-shadow-sm rounded-md"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Title and Description */}
                <h3 className="font-heading text-base font-bold text-[#172554] mb-2 tracking-tight">
                  {bonus.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  {bonus.description}
                </p>

                {/* Ancoragem de Valor do Bônus */}
                <div className="w-full pt-3 border-t border-gray-100 flex flex-col items-center gap-1.5">
                  <span className="text-xs text-gray-400 font-medium">
                    VALOR AVULSO: <span className="line-through font-semibold">{bonus.individualValue}</span>
                  </span>
                  <div className="text-xs font-bold text-[#16A34A] bg-[#DCFCE7] px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <span className="text-sm font-extrabold text-[#16A34A]">GRÁTIS</span>
                    <span className="text-[11px] font-semibold text-[#15803d]">NO PLANO COMPLETO</span>
                  </div>
                </div>
              </div>

              {bonusImages[bonus.id] && (
                <MiniBonusCarousel
                  images={bonusImages[bonus.id]}
                  title={
                    bonus.id === 'bonus-1'
                      ? 'Prévia dos Repertórios'
                      : bonus.id === 'bonus-2'
                      ? 'Prévia dos Temas'
                      : bonus.id === 'bonus-3'
                      ? 'Prévia das Redações Nota 1000'
                      : 'Prévia dos Mapas Inclusos'
                  }
                />
              )}
            </div>
          ))}
        </div>

        {/* SEGUNDA LINHA: 2 BÔNUS GERAIS (MATEMÁTICA E LINGUAGENS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12">
          {geralBonus.map((bonus) => (
            <div
              key={bonus.id}
              id={`card-${bonus.id}`}
              className="bg-white rounded-2xl border border-[#E5E7EB] p-5 sm:p-6 shadow-2xs hover:border-[#F97316]/40 hover:shadow-xs transition-all flex flex-col justify-between items-center text-center"
            >
              <div className="w-full flex flex-col items-center">
                {/* Visual Header / Tag */}
                <div className="flex items-center justify-between w-full mb-3.5 sm:mb-4">
                  <span className="text-xs font-extrabold text-[#F97316] bg-[#FFF1E8] px-3 py-1 rounded-full uppercase tracking-wider">
                    {bonus.tag}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-[#FFF9F5] border border-[#F97316]/20 flex items-center justify-center">
                    {bonusIcons[bonus.id]}
                  </div>
                </div>

                {/* Imagem do Bônus Centralizada */}
                <div className="w-full flex items-center justify-center p-2 sm:p-3 mb-3.5 sm:mb-4 rounded-xl bg-[#F8FAFC] border border-[#F1F5F9]">
                  <img
                    src={bonusCoverImages[bonus.id]}
                    alt={bonus.title}
                    width={420}
                    height={420}
                    className="w-full max-w-[200px] sm:max-w-[220px] h-40 sm:h-48 object-contain drop-shadow-sm rounded-md"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Title and Description */}
                <h3 className="font-heading text-base font-bold text-[#172554] mb-2 tracking-tight">
                  {bonus.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  {bonus.description}
                </p>

                {/* Ancoragem de Valor do Bônus */}
                <div className="w-full pt-3 border-t border-gray-100 flex flex-col items-center gap-1.5">
                  <span className="text-xs text-gray-400 font-medium">
                    VALOR AVULSO: <span className="line-through font-semibold">{bonus.individualValue}</span>
                  </span>
                  <div className="text-xs font-bold text-[#16A34A] bg-[#DCFCE7] px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <span className="text-sm font-extrabold text-[#16A34A]">GRÁTIS</span>
                    <span className="text-[11px] font-semibold text-[#15803d]">NO PLANO COMPLETO</span>
                  </div>
                </div>
              </div>

              {bonusImages[bonus.id] && (
                <MiniBonusCarousel images={bonusImages[bonus.id]} />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
