import React from 'react';
import { MarcaTexto } from './MarcaTexto';

const MATEMATICA_ITEMS = [
  'Razão, proporção e regra de três',
  'Frações, potências, raízes e notação científica',
  'Porcentagem e matemática financeira',
  'Estatística, tabelas e gráficos',
  'Geometria plana e espacial',
  'Álgebra, equações e sistemas',
  'Funções e gráficos',
  'Probabilidade e análise combinatória',
  'PA, PG e logaritmos',
  'Trigonometria',
];

const LINGUAGENS_ITEMS = [
  'Tema, ideia principal e interpretação',
  'Informações explícitas, implícitas e inferência',
  'Fato, opinião, tese e argumentos',
  'Ironia, humor e intertextualidade',
  'Tipos e gêneros textuais',
  'Funções e figuras da linguagem',
  'Gramática aplicada ao texto',
  'Coesão, coerência e conectivos',
  'Variação linguística',
  'Literatura e escolas literárias',
];

export const OQueRecebeSection: React.FC = () => {
  return (
    <section
      id="o-que-vai-aprender"
      className="py-16 md:py-20 lg:py-24 bg-white text-[#0E2A62] relative overflow-hidden scroll-mt-10"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FF] border border-[#0E2A62]/10 text-[#0E2A62] font-black text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-3.5">
            <span>O QUE VOCÊ VAI APRENDER</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#0E2A62] tracking-tight leading-tight mb-3">
            160 conteúdos essenciais de Matemática e Linguagens explicados de forma visual.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#0E2A62]/85 leading-relaxed font-medium max-w-2xl mx-auto">
            São 80 conteúdos de Matemática + 80 de Linguagens, cada um organizado em seu próprio Mapa Visual para você ir direto ao que precisa aprender.
          </p>
        </div>

        {/* 2 Grandes Blocos: Matemática (80) & Linguagens (80) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* ========================================================================= */}
          {/* BLOCO MATEMÁTICA */}
          {/* ========================================================================= */}
          <div
            id="bloco-matematica"
            className="rounded-[22px] bg-[#FBFAF6] border-2 border-[#0E2A62]/12 p-6 sm:p-7 md:p-8 flex flex-col justify-between shadow-sm"
          >
            <div>
              {/* Badge + Big Number */}
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-[#EAF4FF] text-[#0E2A62] text-xs font-black uppercase tracking-wider border border-[#0E2A62]/10">
                  MATEMÁTICA
                </span>
                <span className="font-display font-black text-2xl sm:text-3xl text-[#0E2A62]">
                  80 conteúdos
                </span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl text-[#0E2A62] tracking-tight mb-2">
                80 conteúdos de Matemática
              </h3>

              <p className="text-xs sm:text-sm text-[#0E2A62]/85 mb-4 sm:mb-5 font-medium leading-relaxed">
                Aprenda dos fundamentos aos assuntos que mais exigem cálculo, interpretação e raciocínio.
              </p>

              <h4 className="font-display font-black text-xs sm:text-sm text-[#0E2A62] uppercase tracking-wider mb-2.5 pb-1 border-b border-[#0E2A62]/10">
                Você vai aprender:
              </h4>

              {/* Checklist List */}
              <div className="space-y-1.5 mb-5">
                {MATEMATICA_ITEMS.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 bg-white px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#0E2A62] border border-[#0E2A62]/8 shadow-2xs"
                  >
                    <span className="w-4 h-4 rounded-full bg-[#3FA654] text-white flex items-center justify-center text-[10px] font-black flex-shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#0E2A62]/80 font-medium leading-relaxed bg-[#FFF8D9] p-3 rounded-xl border border-[#F6C945]/50">
                Tudo explicado visualmente para você entender como o conteúdo funciona e reconhecer com mais facilidade quando utilizá-lo nas questões.
              </p>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* BLOCO LINGUAGENS */}
          {/* ========================================================================= */}
          <div
            id="bloco-linguagens"
            className="rounded-[22px] bg-[#FBFAF6] border-2 border-[#0E2A62]/12 p-6 sm:p-7 md:p-8 flex flex-col justify-between shadow-sm"
          >
            <div>
              {/* Badge + Big Number */}
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-[#F3E8FF] text-[#8064C5] text-xs font-black uppercase tracking-wider border border-[#8064C5]/20">
                  LINGUAGENS
                </span>
                <span className="font-display font-black text-2xl sm:text-3xl text-[#0E2A62]">
                  80 conteúdos
                </span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl text-[#0E2A62] tracking-tight mb-2">
                80 conteúdos de Linguagens
              </h3>

              <p className="text-xs sm:text-sm text-[#0E2A62]/85 mb-4 sm:mb-5 font-medium leading-relaxed">
                Aprenda a interpretar melhor e identificar com mais facilidade o que cada questão está cobrando.
              </p>

              <h4 className="font-display font-black text-xs sm:text-sm text-[#0E2A62] uppercase tracking-wider mb-2.5 pb-1 border-b border-[#0E2A62]/10">
                Você vai aprender:
              </h4>

              {/* Checklist List */}
              <div className="space-y-1.5 mb-5">
                {LINGUAGENS_ITEMS.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 bg-white px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#0E2A62] border border-[#0E2A62]/8 shadow-2xs"
                  >
                    <span className="w-4 h-4 rounded-full bg-[#3FA654] text-white flex items-center justify-center text-[10px] font-black flex-shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#0E2A62]/80 font-medium leading-relaxed bg-[#FFF8D9] p-3 rounded-xl border border-[#F6C945]/50">
                Tudo organizado para você reconhecer conceitos, identificar pistas no texto e responder com mais clareza e segurança.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
