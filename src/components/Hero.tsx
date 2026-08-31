import React, { useRef, useMemo, useState, useEffect } from 'react';
import { VisualSheetSample } from '../types';

interface HeroProps {
  onCtaClick: () => void;
  onOpenSample: (sample: VisualSheetSample) => void;
}

export const uploadedMaterials: VisualSheetSample[] = [
  {
    id: 'mat-porcentagem',
    title: 'Porcentagem: Parte de cada 100',
    category: 'Financeira & Básica',
    imageUrl: '/img/percentagem-parte-de-cada-100-2-11zon.webp',
    themeColor: '#2563EB',
    highlightConcept: 'Relação visual entre fração, decimal e porcentagem com atalhos de cálculo mental para o ENEM.',
    summary: 'Mapa esquematizado com foco em cálculo rápido de 10%, 1%, aumentos e descontos sucessivos.',
    formulasPreview: ['10% = divide por 10', '1% = divide por 100', 'Fator = 1 ± i'],
    visualElements: [
      { label: 'Cálculo Mental', description: 'Atalhos para agilizar tempo de prova' },
      { label: 'Fator Multiplicativo', description: 'Sem enrolação com regras de 3 longas' }
    ]
  },
  {
    id: 'mat-juros',
    title: 'Juros Simples: Crescimento Linear',
    category: 'Matemática Financeira',
    imageUrl: '/img/juros-simples-crescimento-linear-no-enem-1-11zon.webp',
    themeColor: '#16A34A',
    highlightConcept: 'Gráfico e raciocínio de progressão linear aplicado a juros, rendimento e parcelamento.',
    summary: 'Aprenda a diferenciar de primeira juros simples de compostos em qualquer enunciado do ENEM.',
    formulasPreview: ['J = C · i · t', 'M = C + J', 'Crescimento Linear (Reta)'],
    visualElements: [
      { label: 'Gráfico Linear', description: 'Visualização da reta de crescimento' },
      { label: 'Atenção ao Tempo', description: 'Taxa e prazo na mesma unidade' }
    ]
  },
  {
    id: 'mat-razao',
    title: 'Razão: Comparar, Dividir e Simplificar',
    category: 'Razão e Proporção',
    imageUrl: '/img/razao-comparar-dividir-e-simplificar-6.webp',
    themeColor: '#2563EB',
    highlightConcept: 'Comparação quantitativa entre grandezas, velocidade média, densidade e escalas.',
    summary: 'Fundamento que garante mais de 8 questões certas na prova de Matemática do ENEM.',
    formulasPreview: ['Razão = A / B', 'Escala = Desenho / Real', 'Densidade = Pop / Área'],
    visualElements: [
      { label: 'Escalas & Plantas', description: 'Cuidado com unidades (cm para m)' },
      { label: 'Interpretação', description: 'Quem fica no numerador e no denominador' }
    ]
  },
  {
    id: 'mat-proporcao',
    title: 'Proporção: Razões em Equilíbrio',
    category: 'Grandezas & Proporcionalidade',
    imageUrl: '/img/proporcao-razoes-em-equilibrio-5.webp',
    themeColor: '#0284C7',
    highlightConcept: 'Grandezas direta e inversamente proporcionais e divisão proporcional rápida.',
    summary: 'Estrutura clara para nunca errar a montagem de regra de três simples ou composta.',
    formulasPreview: ['a/b = c/d  ➜  a·d = b·c', 'Direta: a/b = cte', 'Inversa: a·b = cte'],
    visualElements: [
      { label: 'Identificação', description: 'Direta (sobe-sobe) vs Inversa (sobe-desce)' },
      { label: 'Cruzamento', description: 'Multiplicação em cruz' }
    ]
  },
  {
    id: 'mat-notacao',
    title: 'Notação Científica para o ENEM',
    category: 'Aritmética & Potências',
    imageUrl: '/img/notacao-cientifica-para-o-enem-4.webp',
    themeColor: '#7C3AED',
    highlightConcept: 'Representação de números gigantescos ou minúsculos em potência de base 10 (N × 10^k).',
    summary: 'Aplicações frequentes em questões interdisciplinares de Biologia, Física e Química no ENEM.',
    formulasPreview: ['N · 10^k (1 ≤ N < 10)', 'Vírgula p/ esquerda ➜ expoente +', 'Vírgula p/ direita ➜ expoente -'],
    visualElements: [
      { label: 'Regra da Vírgula', description: 'Macete prático para não errar o sinal do expoente' },
      { label: 'Operações', description: 'Multiplicação e divisão de bases iguais' }
    ]
  },
  {
    id: 'mat-mmc-mdc',
    title: 'MMC e MDC: Ciclos ou Grupos',
    category: 'Aritmética & Divisibilidade',
    imageUrl: '/img/mmc-e-mdc-ciclos-ou-grupos-3-11zon.webp',
    themeColor: '#D97706',
    highlightConcept: 'Quando usar MMC (encontros, ciclos periódicos) e quando usar MDC (divisão máxima em partes iguais).',
    summary: 'Elimine a dúvida que faz a maioria dos vestibulandos errar enunciados do ENEM.',
    formulasPreview: ['MMC: Fatores comuns e não comuns', 'MDC: Apenas fatores comuns'],
    visualElements: [
      { label: 'Gatilho de MMC', description: '"Quando voltarão a se encontrar juntos?"' },
      { label: 'Gatilho de MDC', description: '"Dividir no maior tamanho possível sem sobras"' }
    ]
  }
];

export const Hero: React.FC<HeroProps> = ({ onCtaClick, onOpenSample }) => {
  const heroRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '150px 0px', threshold: 0.05 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Data atual formatada dinamicamente todos os dias em português
  const todayFormatted = useMemo(() => {
    const now = new Date();
    const day = now.getDate();
    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    return `${day} de ${month} de ${year}`;
  }, []);

  return (
    <section 
      ref={heroRef} 
      id="hero" 
      className="relative bg-[#F8FAFC] pb-16 md:pb-20 overflow-hidden border-b border-slate-200/60"
    >
      {/* FAIXA VERMELHA DE PROMOÇÃO VÁLIDA SOMENTE HOJE */}
      <div 
        onClick={onCtaClick}
        className="w-full bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white py-2.5 sm:py-3 px-4 shadow-sm cursor-pointer hover:brightness-105 transition-all group border-b border-red-700/40"
      >
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center text-xs sm:text-sm font-medium">
          <span className="font-heading font-extrabold tracking-wide">
            Promoção válida somente hoje (<strong className="underline decoration-amber-300 underline-offset-2">{todayFormatted}</strong>):
          </span>

          <span className="bg-black/20 text-amber-200 font-extrabold px-2.5 py-0.5 rounded-full border border-amber-200/30 text-[11px] sm:text-xs tracking-wider">
            ATÉ 83% OFF
          </span>
        </div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative pt-8 md:pt-12">
        <div className="flex flex-col items-center text-center">
          
          {/* Top pill badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/70 px-3.5 py-1.5 rounded-full mb-5">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
              Método Visual de Revisão ENEM
            </span>
          </div>

          {/* Main Headline (Centered) */}
          <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] tracking-tight mb-6 max-w-4xl text-center">
            <span className="text-blue-600">Chega de travar</span> na{' '}
            <span className="text-blue-600">Matemática do ENEM</span>. Aprenda de forma{' '}
            <span className="text-blue-600">visual</span> e{' '}
            <span className="text-blue-600">descomplicada</span> e conquiste sua nota{' '}
            <span className="text-blue-600">900+</span>.
          </h1>

          {/* Mockup Image directly under the Headline */}
          <div className="w-full flex justify-center items-center my-4 sm:my-6">
            <img 
              src="/img/mockup.webp" 
              alt="Mockup Matemática Visual ENEM" 
              className="w-full max-w-lg md:max-w-xl h-auto object-contain drop-shadow-2xl"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Subheadline */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl font-sans text-center">
            Estude Matemática para o ENEM com Mapas Visuais que organizam fórmulas, conceitos, exemplos e aplicações para deixar os conteúdos mais simples de entender e muito mais práticos de revisar.
          </p>

          {/* Checklist with 5 key points */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-6 gap-y-2.5 mb-8 max-w-3xl">
            <div className="flex items-center gap-2 text-slate-700 text-sm font-medium">
              <span className="text-emerald-500 font-bold">✅</span>
              <span>Do básico aos conteúdos mais avançados</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 text-sm font-medium">
              <span className="text-emerald-500 font-bold">✅</span>
              <span>Fórmulas, conceitos e exemplos de forma visual</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 text-sm font-medium">
              <span className="text-emerald-500 font-bold">✅</span>
              <span>Estude pelo celular, tablet ou computador</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 text-sm font-medium">
              <span className="text-emerald-500 font-bold">✅</span>
              <span>Material 100% digital</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 text-sm font-medium">
              <span className="text-emerald-500 font-bold">✅</span>
              <span>Acesso imediato</span>
            </div>
          </div>

          {/* Primary Action (CTA) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3 w-full">
            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-heading font-bold text-base sm:text-lg rounded-xl shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 text-center"
            >
              <span>QUERO DESTRAVAR A MATEMÁTICA</span>
            </button>
          </div>

          {/* Support Text Below Button */}
          <p className="text-xs sm:text-sm text-slate-500 flex items-center justify-center gap-2 font-medium mb-8">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600" />
            A partir de R$10 • Acesso imediato • Garantia de 7 dias
          </p>

        </div>

        {/* ========================================================================= */}
        {/* CARROSSEL COM AS IMAGENS DOS PRODUTOS NA PROPORÇÃO ORIGINAL */}
        {/* ========================================================================= */}
        <div className="mt-4 pt-4">
          <div className="relative overflow-hidden py-3">
            {/* Smooth Edge Fades (GPU-friendly overlays) */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10" />

            <div 
              className="animate-marquee-right flex items-center gap-4 sm:gap-6"
              style={{ animationPlayState: isVisible ? 'running' : 'paused' }}
            >
              {[...uploadedMaterials, ...uploadedMaterials].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="flex-shrink-0 select-none pointer-events-none"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    draggable={false}
                    loading={idx < 4 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="h-52 sm:h-72 md:h-84 w-auto object-contain rounded-xl shadow-md border border-slate-200/80 bg-white"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

