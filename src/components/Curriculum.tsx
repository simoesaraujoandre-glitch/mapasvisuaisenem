import React, { useState, useEffect, useRef } from 'react';
import { VisualSheetSample } from '../types';

interface CurriculumProps {
  onOpenSample: (sample: VisualSheetSample) => void;
  onCtaClick: () => void;
}

interface ContentCategory {
  title: string;
  items: string[];
}

const curriculumCategories: ContentCategory[] = [
  {
    title: 'Fundamentos',
    items: [
      'Razão',
      'Proporção',
      'Grandezas proporcionais',
      'Regra de três',
      'Escalas',
      'Conversão de unidades',
      'Frações',
      'Decimais',
      'Potenciação',
      'Radiciação',
      'Notação científica',
      'MMC e MDC'
    ]
  },
  {
    title: 'Porcentagem e Matemática Financeira',
    items: [
      'Porcentagem',
      'Aumentos e descontos',
      'Variação percentual',
      'Juros simples',
      'Juros compostos',
      'Lucro e prejuízo',
      'Acréscimos sucessivos',
      'Descontos sucessivos',
      'Taxas e índices'
    ]
  },
  {
    title: 'Estatística e Gráficos',
    items: [
      'Média',
      'Média ponderada',
      'Mediana',
      'Moda',
      'Amplitude',
      'Variância',
      'Desvio padrão',
      'Leitura de tabelas',
      'Gráfico de barras',
      'Gráfico de linhas',
      'Gráfico de setores',
      'Histograma',
      'Interpretação de gráficos'
    ]
  },
  {
    title: 'Geometria',
    items: [
      'Ângulos',
      'Triângulos',
      'Quadriláteros',
      'Polígonos',
      'Circunferência e círculo',
      'Perímetro',
      'Áreas',
      'Prismas',
      'Cilindros',
      'Pirâmides',
      'Cones',
      'Esferas',
      'Volume',
      'Capacidade',
      'Planificações'
    ]
  },
  {
    title: 'Álgebra e Funções',
    items: [
      'Expressões algébricas',
      'Produtos notáveis',
      'Fatoração',
      'Equação do 1º grau',
      'Equação do 2º grau',
      'Sistemas de equações',
      'Função afim',
      'Função quadrática',
      'Gráficos de funções',
      'Inequações'
    ]
  },
  {
    title: 'Probabilidade e outros conteúdos',
    items: [
      'Princípio Fundamental da Contagem',
      'Permutações',
      'Arranjos',
      'Combinações',
      'Probabilidade',
      'Probabilidade condicional',
      'PA',
      'PG',
      'Logaritmos',
      'Razões trigonométricas',
      'Ângulos notáveis',
      'Aplicações da trigonometria'
    ]
  }
];

const realMaterialPages: VisualSheetSample[] = [
  {
    id: 'sheet-razao',
    title: 'Razão: Comparar, Dividir e Simplificar',
    category: 'Fundamentos',
    imageUrl: '/img/razao-comparar-dividir-e-simplificar-6.webp',
    themeColor: '#2563EB',
    highlightConcept: 'Comparação quantitativa entre grandezas, velocidade média, densidade e escalas.',
    summary: 'Estrutura esquematizada com exemplos visuais e aplicações práticas para o ENEM.',
    formulasPreview: ['Razão = A / B', 'Escala = Desenho / Real'],
    visualElements: []
  },
  {
    id: 'sheet-proporcao',
    title: 'Proporção: Razões em Equilíbrio',
    category: 'Fundamentos',
    imageUrl: '/img/proporcao-razoes-em-equilibrio-5.webp',
    themeColor: '#2563EB',
    highlightConcept: 'Propriedades da proporção direta e inversa com esquemas visuais.',
    summary: 'Relações de igualdade entre razões organizadas passo a passo.',
    formulasPreview: ['a / b = c / d ➜ a · d = b · c'],
    visualElements: []
  },
  {
    id: 'sheet-porcentagem',
    title: 'Porcentagem: Parte de Cada 100',
    category: 'Matemática Financeira',
    imageUrl: '/img/percentagem-parte-de-cada-100-2-11zon.webp',
    themeColor: '#2563EB',
    highlightConcept: 'Fatores de aumento e desconto esquematizados de forma rápida.',
    summary: 'Esquema visual para cálculo mental e resolução sem perda de tempo.',
    formulasPreview: ['Fator de Aumento = 1 + i', 'Fator de Desconto = 1 - i'],
    visualElements: []
  },
  {
    id: 'sheet-juros',
    title: 'Juros Simples: Crescimento Linear no ENEM',
    category: 'Matemática Financeira',
    imageUrl: '/img/juros-simples-crescimento-linear-no-enem-1-11zon.webp',
    themeColor: '#2563EB',
    highlightConcept: 'Crescimento constante, fórmulas de juros e montante explicadas com clareza.',
    summary: 'Visualização da progressão linear aplicada a problemas do ENEM.',
    formulasPreview: ['J = C · i · t', 'M = C + J'],
    visualElements: []
  },
  {
    id: 'sheet-mmc-mdc',
    title: 'MMC e MDC: Ciclos ou Grupos',
    category: 'Fundamentos',
    imageUrl: '/img/mmc-e-mdc-ciclos-ou-grupos-3-11zon.webp',
    themeColor: '#2563EB',
    highlightConcept: 'Diferenciação imediata entre ciclos periódicos (MMC) e divisão máxima (MDC).',
    summary: 'Mapa com gatilhos rápidos para você nunca mais confundir nos enunciados.',
    formulasPreview: ['MMC: Encontros e ciclos', 'MDC: Divisão máxima sem sobras'],
    visualElements: []
  },
  {
    id: 'sheet-notacao',
    title: 'Notação Científica para o ENEM',
    category: 'Fundamentos',
    imageUrl: '/img/notacao-cientifica-para-o-enem-4.webp',
    themeColor: '#2563EB',
    highlightConcept: 'Representação de grandezas em base 10 e regra prática de deslocamento da vírgula.',
    summary: 'Aplicações frequentes em questões de Matemática e Ciências da Natureza.',
    formulasPreview: ['N · 10^k (1 ≤ N < 10)'],
    visualElements: []
  }
];

export const Curriculum: React.FC<CurriculumProps> = ({ onOpenSample }) => {
  const curriculumRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '150px 0px', threshold: 0.05 }
    );

    if (curriculumRef.current) {
      observer.observe(curriculumRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={curriculumRef} 
      id="conteudos" 
      className="bg-white py-16 md:py-24 border-b border-[#E2E8F0] [content-visibility:auto]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Headline & Subheadline */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="font-heading font-extrabold text-slate-900 text-2xl sm:text-3xl md:text-4xl leading-tight mb-4 tracking-tight">
            Tudo o que você vai receber e aprender para dominar a Matemática do ENEM
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            Os principais conteúdos de Matemática organizados em Mapas Visuais, para você entender, revisar e aplicar com muito mais facilidade na sua preparação para o ENEM.
          </p>
        </div>

        {/* 6 Blocos / Cards Organizados (3 por linha no desktop, 1 no mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-10 sm:mb-12">
          {curriculumCategories.map((category, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-7 shadow-none flex flex-col justify-between"
            >
              <div>
                {/* Título do Card em Azul */}
                <h3 className="font-heading font-bold text-blue-600 text-lg sm:text-xl mb-5 leading-snug">
                  {category.title}
                </h3>

                {/* Conteúdos em cinza escuro com marcadores discretos */}
                <ul className="space-y-2.5">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2.5 text-slate-700 text-sm leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom closing note */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed bg-blue-50/60 border border-blue-100 rounded-xl py-3 px-5">
            Tudo organizado visualmente para você encontrar o que precisa, entender o conteúdo e revisar sem se perder em páginas enormes de teoria.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SCROLL INFINITO COM AS IMAGENS DOS MAPAS MENTAIS ABAIXO DOS CARDS */}
        {/* ========================================================================= */}
        <div className="pt-2">
          <div className="relative overflow-hidden py-3">
            {/* Smooth Edge Fades (GPU-friendly overlays) */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10" />

            <div 
              className="animate-marquee-right flex items-center gap-4 sm:gap-6"
              style={{ animationPlayState: isVisible ? 'running' : 'paused' }}
            >
              {[...realMaterialPages, ...realMaterialPages].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="flex-shrink-0 select-none pointer-events-none"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    draggable={false}
                    loading="lazy"
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

