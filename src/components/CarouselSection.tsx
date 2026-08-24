import React from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';
import { LANDING_CONFIG } from '../config';

const LINGUAGENS_ITEMS = [
  {
    id: 'ling-1',
    tag: '[LINGUAGENS_01]',
    title: 'Linguagens & Interpretação',
    subject: 'Linguagens',
    badgeColor: 'bg-[#F3E8FF] text-[#8064C5]',
    src: LANDING_CONFIG.IMAGES.LINGUAGENS_01,
  },
  {
    id: 'ling-2',
    tag: '[LINGUAGENS_02]',
    title: 'Gêneros & Tipologias Textuais',
    subject: 'Linguagens',
    badgeColor: 'bg-[#FFF1ED] text-[#F1645D]',
    src: LANDING_CONFIG.IMAGES.LINGUAGENS_02,
  },
  {
    id: 'ling-3',
    tag: '[LINGUAGENS_03]',
    title: 'Figuras de Linguagem no ENEM',
    subject: 'Linguagens',
    badgeColor: 'bg-[#F3E8FF] text-[#8064C5]',
    src: LANDING_CONFIG.IMAGES.LINGUAGENS_03,
  },
  {
    id: 'ling-4',
    tag: '[LINGUAGENS_04]',
    title: 'Funções da Linguagem & Comunicação',
    subject: 'Linguagens',
    badgeColor: 'bg-[#FFF8D9] text-[#0E2A62]',
    src: LANDING_CONFIG.IMAGES.LINGUAGENS_04,
  },
  {
    id: 'ling-5',
    tag: '[LINGUAGENS_05]',
    title: 'Variação Linguística & Contextos',
    subject: 'Linguagens',
    badgeColor: 'bg-[#FFF1ED] text-[#F1645D]',
    src: LANDING_CONFIG.IMAGES.LINGUAGENS_05,
  },
  {
    id: 'ling-6',
    tag: '[LINGUAGENS_06]',
    title: 'Recursos Expressivos & Sintaxe',
    subject: 'Linguagens',
    badgeColor: 'bg-[#F3E8FF] text-[#8064C5]',
    src: LANDING_CONFIG.IMAGES.LINGUAGENS_06,
  },
];

const MATEMATICA_ITEMS = [
  {
    id: 'mat-1',
    tag: '[MATEMATICA_01]',
    title: 'Juros Simples & Crescimento Linear',
    subject: 'Matemática',
    badgeColor: 'bg-[#EAF4FF] text-[#0E2A62]',
    src: LANDING_CONFIG.IMAGES.MATEMATICA_01,
  },
  {
    id: 'mat-2',
    tag: '[MATEMATICA_02]',
    title: 'Porcentagem: Parte de cada 100',
    subject: 'Matemática',
    badgeColor: 'bg-[#FFF8D9] text-[#0E2A62]',
    src: LANDING_CONFIG.IMAGES.MATEMATICA_02,
  },
  {
    id: 'mat-3',
    tag: '[MATEMATICA_03]',
    title: 'MMC e MDC: Ciclos ou Grupos',
    subject: 'Matemática',
    badgeColor: 'bg-[#EAF4FF] text-[#0E2A62]',
    src: LANDING_CONFIG.IMAGES.MATEMATICA_03,
  },
  {
    id: 'mat-4',
    tag: '[MATEMATICA_04]',
    title: 'Notação Científica para o ENEM',
    subject: 'Matemática',
    badgeColor: 'bg-[#FFF8D9] text-[#0E2A62]',
    src: LANDING_CONFIG.IMAGES.MATEMATICA_04,
  },
  {
    id: 'mat-5',
    tag: '[MATEMATICA_05]',
    title: 'Proporção: Razões em Equilíbrio',
    subject: 'Matemática',
    badgeColor: 'bg-[#EAF4FF] text-[#0E2A62]',
    src: LANDING_CONFIG.IMAGES.MATEMATICA_05,
  },
  {
    id: 'mat-6',
    tag: '[MATEMATICA_06]',
    title: 'Razão: Comparar, Dividir e Simplificar',
    subject: 'Matemática',
    badgeColor: 'bg-[#FFF8D9] text-[#0E2A62]',
    src: LANDING_CONFIG.IMAGES.MATEMATICA_06,
  },
];

export const CarouselSection: React.FC = () => {
  // Duplicating items to form seamless infinite loops (2x is sufficient for 50% translateX)
  const linguagensLoop = [...LINGUAGENS_ITEMS, ...LINGUAGENS_ITEMS];
  const matematicaLoop = [...MATEMATICA_ITEMS, ...MATEMATICA_ITEMS];

  return (
    <section
      id="como-funciona"
      className="relative py-8 sm:py-10 md:py-14 bg-white text-[#0E2A62] overflow-hidden"
      aria-label="Demonstração visual dos mapas"
    >
      {/* Dual Direction Infinite Scrolling Tracks (No texts above or below) */}
      <div className="space-y-4 md:space-y-6 select-none">
        
        {/* ROW 1: Linguagens (Scroll to Right) */}
        <div className="relative w-full overflow-hidden py-1">
          {/* Edge Fade Gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="animate-scroll-right flex items-center gap-4 sm:gap-6 md:gap-8 px-4">
            {linguagensLoop.map((item, index) => (
              <div
                key={`ling-${item.id}-${index}`}
                className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-[460px] flex-shrink-0"
              >
                <div className="relative">
                  <div className="flex items-center justify-center mb-2 px-1">
                    <span className={`text-xs sm:text-sm font-black px-3.5 py-0.5 rounded-full shadow-xs tracking-wide ${item.badgeColor}`}>
                      {item.subject}
                    </span>
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow-lg border border-[#0E2A62]/10 bg-white aspect-[297/210]">
                    <ImagePlaceholder
                      id={`ling-slide-${index}`}
                      tag={item.tag}
                      label={item.title}
                      aspectRatio="a4-landscape"
                      theme="yellow"
                      src={item.src}
                      className="w-full h-full bg-white text-[#0E2A62]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Matemática (Scroll to Left in opposite direction) */}
        <div className="relative w-full overflow-hidden py-1">
          {/* Edge Fade Gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="animate-scroll-left flex items-center gap-4 sm:gap-6 md:gap-8 px-4">
            {matematicaLoop.map((item, index) => (
              <div
                key={`mat-${item.id}-${index}`}
                className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-[460px] flex-shrink-0"
              >
                <div className="relative">
                  <div className="flex items-center justify-center mb-2 px-1">
                    <span className={`text-xs sm:text-sm font-black px-3.5 py-0.5 rounded-full shadow-xs tracking-wide ${item.badgeColor}`}>
                      {item.subject}
                    </span>
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow-lg border border-[#0E2A62]/10 bg-white aspect-[297/210]">
                    <ImagePlaceholder
                      id={`mat-slide-${index}`}
                      tag={item.tag}
                      label={item.title}
                      aspectRatio="a4-landscape"
                      theme="blue"
                      src={item.src}
                      className="w-full h-full bg-white text-[#0E2A62]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
