import React from 'react';
import { Gift } from 'lucide-react';
import { LANDING_CONFIG } from '../config';

const BONUSES = [
  {
    id: 'bonus-01',
    tag: 'BÔNUS 01',
    title: 'Mapas Visuais de Redação',
    description:
      'Entenda visualmente o que uma boa Redação precisa ter e organize suas ideias com mais clareza antes de escrever.',
    originalPrice: 'De R$50,00',
    image: LANDING_CONFIG.IMAGES.REDACAO_MOCKUP,
    alt: 'Bônus 1 - Mapas Visuais de Redação',
  },
  {
    id: 'bonus-02',
    tag: 'BÔNUS 02',
    title: '50 Exercícios de Fixação',
    description:
      'Teste o que aprendeu e descubra quais conteúdos ainda precisa reforçar. 25 exercícios de Matemática + 25 de Linguagens.',
    originalPrice: 'De R$40,00',
    image: LANDING_CONFIG.IMAGES.BONUS_EXERCICIOS_MOCKUP,
    alt: 'Bônus 2 - 50 Exercícios de Fixação',
  },
  {
    id: 'bonus-03',
    tag: 'BÔNUS 03',
    title: 'Plano de Revisão ENEM',
    description:
      'Pare de decidir todos os dias o que estudar e siga um caminho pronto de 7, 15 ou 30 dias.',
    originalPrice: 'De R$35,00',
    image: LANDING_CONFIG.IMAGES.PLANO_REVISAO_MOCKUP,
    alt: 'Bônus 3 - Plano de Revisão ENEM',
  },
];

export const BonusSection: React.FC = () => {
  return (
    <section
      id="bonus"
      className="py-16 md:py-20 lg:py-24 bg-[#F4F8FF] relative overflow-hidden"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#0E2A62] font-black text-xs tracking-wider uppercase mb-3 sm:mb-3.5 border border-[#0E2A62]/10 shadow-2xs">
            <Gift className="w-3.5 h-3.5 text-[#0E2A62]" />
            <span>3 BÔNUS EXCLUSIVOS</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#0E2A62] tracking-tight leading-tight">
            E para complementar seus estudos, nós preparamos 3 bônus exclusivos para você melhorar ainda mais a sua nota no ENEM
          </h2>
        </div>

        {/* 3 Distinct Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              id={bonus.id}
              className="bg-white rounded-[22px] border-2 border-[#0E2A62]/12 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Header / Text Information */}
              <div className="flex flex-col items-center text-center">
                {/* 1. Tag Bônus */}
                <div className="mb-2.5">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-[#FFF8D9] text-[#0E2A62] border border-[#F6C945] font-black text-xs tracking-wider uppercase">
                    {bonus.tag}
                  </span>
                </div>

                {/* 2. Título */}
                <h3 className="font-display font-black text-lg sm:text-xl text-[#0E2A62] tracking-tight mb-1.5 min-h-[28px] sm:min-h-[48px] flex items-center justify-center">
                  {bonus.title}
                </h3>

                {/* 3. Frase Curta */}
                <p className="text-xs sm:text-sm text-[#0E2A62]/80 leading-relaxed font-medium min-h-[40px] sm:min-h-[52px] flex items-start justify-center">
                  {bonus.description}
                </p>

                {/* Preço Original -> GRÁTIS */}
                <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#3FA654]/10 border border-[#3FA654]/20 text-xs font-bold">
                  <span className="text-gray-400 line-through">{bonus.originalPrice}</span>
                  <span className="text-[#3FA654] font-black uppercase">GRÁTIS</span>
                </div>
              </div>

              {/* 4. Mockup Container */}
              <div className="w-full mt-4 flex items-center justify-center bg-white rounded-xl p-2.5 border border-[#0E2A62]/8">
                <img
                  src={bonus.image}
                  alt={bonus.alt}
                  width={240}
                  height={190}
                  className="w-full max-w-[220px] h-[160px] sm:h-[180px] object-contain drop-shadow-sm group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
