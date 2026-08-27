import React from 'react';
import { X, Check, ArrowRight, BookX, Sparkles, CheckCircle2 } from 'lucide-react';

export const MethodComparison: React.FC = () => {
  const traditionalPoints = [
    'Páginas enormes de teoria',
    'Fórmulas apresentadas de forma isolada',
    'Muito texto para pouca informação importante',
    'Conteúdos espalhados em vários lugares',
    'Difícil encontrar algo quando precisa revisar',
    'Mais esforço para conectar as informações'
  ];

  const visualPoints = [
    'Conteúdo organizado em uma sequência clara',
    'Fórmulas acompanhadas de contexto',
    'Exemplos e aplicações',
    'Informações importantes em destaque',
    'Mais facilidade para encontrar o que precisa',
    'Revisões muito mais práticas'
  ];

  return (
    <section id="comparacao" className="bg-[#F1F5F9]/50 py-16 md:py-24 border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Comparativo Direto</span>
          </div>

          <h2 className="font-heading font-extrabold text-slate-900 text-2xl sm:text-3xl md:text-4xl leading-tight">
            Você pode continuar tentando decorar Matemática… ou começar a <span className="text-blue-600">enxergá-la</span>.
          </h2>
        </div>

        {/* 2 Comparative Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-stretch">
          
          {/* Left: Método Tradicional (Antes) */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-2xs flex flex-col justify-between h-full">
            <div>
              {/* Espaço para Imagem: Antes */}
              <div className="relative w-full h-52 sm:h-64 bg-slate-100 overflow-hidden border-b border-[#E2E8F0]/70 flex-shrink-0">
                <img
                  src="/img/antes.webp"
                  alt="Método tradicional de estudo de Matemática"
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-bold text-rose-500 uppercase tracking-wider">Estudo Cansativo (Antes)</span>
                    <h3 className="font-heading font-bold text-slate-800 text-xl mt-0.5">
                      Método Tradicional
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500">
                    <BookX className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3.5">
                  {traditionalPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-500 mt-0.5">
                        <X className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-slate-600 text-sm sm:text-base font-normal">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-7 pb-6">
              <div className="pt-4 border-t border-slate-100 text-center text-xs font-semibold text-rose-600 bg-rose-50/50 py-2.5 rounded-xl">
                Resultado: Frustração e bloqueio na hora da prova
              </div>
            </div>
          </div>

          {/* Right: Método Visual (Depois) */}
          <div className="bg-white rounded-2xl border-2 border-blue-300 overflow-hidden shadow-sm flex flex-col justify-between h-full relative">
            <div>
              {/* Espaço para Imagem: Depois */}
              <div className="relative w-full h-52 sm:h-64 bg-gradient-to-b from-blue-50 to-white overflow-hidden border-b border-blue-200/70 flex items-center justify-center p-3 flex-shrink-0">
                <img
                  src="/img/depois-visual.webp"
                  alt="Método visual de estudo de Matemática"
                  width={900}
                  height={506}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-blue-100">
                  <div>
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Estudo Eficiente (Depois)</span>
                    <h3 className="font-heading font-bold text-slate-900 text-xl mt-0.5">
                      Método Visual
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/30">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3.5">
                  {visualPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-slate-800 text-sm sm:text-base font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-7 pb-6">
              <div className="pt-4 border-t border-blue-100 text-center text-xs font-semibold text-blue-700 bg-blue-50 py-2.5 rounded-xl">
                Resultado: Compreensão rápida e segurança nas questões
              </div>
            </div>
          </div>

        </div>

        {/* Section Fechamento Text */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-slate-900 font-heading font-bold text-lg sm:text-xl">
            A Matemática não mudou. O jeito de estudar mudou.
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            Em vez de tentar organizar tudo mentalmente, você consegue visualizar conceitos, fórmulas, exemplos e aplicações de forma conectada.
          </p>
        </div>

      </div>
    </section>
  );
};
