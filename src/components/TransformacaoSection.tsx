import React from 'react';
import { MarcaTexto } from './MarcaTexto';

const PASSOS = [
  {
    num: '01',
    title: 'ENTENDA',
    desc: 'Visualize a lógica por trás do conteúdo.',
  },
  {
    num: '02',
    title: 'MEMORIZE',
    desc: 'Crie referências visuais mais fáceis de recuperar.',
  },
  {
    num: '03',
    title: 'RECONHEÇA',
    desc: 'Identifique mais rápido o que a questão está cobrando.',
  },
  {
    num: '04',
    title: 'APLIQUE',
    desc: 'Chegue à resolução sabendo melhor por onde começar.',
  },
];

export const TransformacaoSection: React.FC = () => {
  return (
    <section
      id="transformacao"
      className="py-16 md:py-20 lg:py-24 bg-white text-[#0E2A62] relative overflow-hidden"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FF] border border-[#0E2A62]/10 text-[#0E2A62] font-black text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-3.5">
            <span>O QUE MUDA NO SEU ESTUDO</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#0E2A62] tracking-tight leading-tight mb-3">
            Quando o conteúdo começa a fazer sentido, a forma como você encara as questões também muda.
          </h2>
        </div>

        {/* 4 Blocos: ENTENDA, MEMORIZE, RECONHEÇA, APLIQUE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {PASSOS.map((passo) => (
            <div
              key={passo.num}
              className="bg-[#FBFAF6] p-5 sm:p-6 rounded-2xl border-2 border-[#0E2A62]/10 hover:border-[#F6C945] transition-all duration-200 relative shadow-xs"
            >
              <div className="w-8 h-8 rounded-lg bg-[#F6C945] text-[#0E2A62] font-black text-xs flex items-center justify-center mb-3.5 shadow-2xs">
                {passo.num}
              </div>
              <h3 className="font-display font-black text-lg sm:text-xl text-[#0E2A62] uppercase tracking-wide mb-1.5">
                {passo.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#0E2A62]/85 font-medium leading-relaxed">
                {passo.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bloco 900+ */}
        <div className="text-center max-w-3xl mx-auto bg-[#FFF8D9] border-2 border-[#F6C945] p-6 sm:p-8 md:p-10 rounded-[22px] shadow-sm">
          <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-[#0E2A62] tracking-tight mb-3">
            Uma nota alta começa muito antes da prova.
          </h3>
          <p className="text-sm sm:text-base text-[#0E2A62]/85 font-medium leading-relaxed mb-3 sm:mb-4">
            Começa quando você deixa de apenas passar os olhos pelo conteúdo e passa a entender, lembrar e aplicar o que estudou.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-[#0E2A62] font-bold leading-relaxed">
            É esse tipo de preparação que pode colocar você em condições muito melhores para buscar os{' '}
            <span className="bg-[#F6C945] text-[#0E2A62] px-2.5 py-0.5 rounded-md font-black shadow-2xs">
              900+
            </span>
            .
          </p>
        </div>

      </div>
    </section>
  );
};
