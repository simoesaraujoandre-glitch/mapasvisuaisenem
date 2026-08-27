import React from 'react';
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
    imageUrl: '/img/mapa-razao.webp',
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
    imageUrl: '/img/mapa-proporcao.webp',
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
    imageUrl: '/img/mapa-porcentagem.webp',
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
    imageUrl: '/img/mapa-juros-simples.webp',
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
    imageUrl: '/img/mapa-mmc-mdc.webp',
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
    imageUrl: '/img/mapa-notacao-cientifica.webp',
    themeColor: '#2563EB',
    highlightConcept: 'Representação de grandezas em base 10 e regra prática de deslocamento da vírgula.',
    summary: 'Aplicações frequentes em questões de Matemática e Ciências da Natureza.',
    formulasPreview: ['N · 10^k (1 ≤ N < 10)'],
    visualElements: []
  }
];

export const Curriculum: React.FC<CurriculumProps> = ({ onOpenSample }) => {
  return (
    <section id="conteudos" className="bg-white py-16 md:py-24 border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Nova Headline & Subheadline */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="font-heading font-extrabold text-slate-900 text-2xl sm:text-3xl md:text-4xl leading-tight mb-4 tracking-tight">
            Os conteúdos de Matemática que você vai{' '}
            <span className="text-blue-600">dominar na prática</span> com os{' '}
            <span className="text-blue-600">Mapas Visuais</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            Do básico aos conteúdos mais avançados do ENEM, tudo organizado de forma visual para você entender, revisar e aplicar com muito mais facilidade.
          </p>
        </div>

        {/* 6 Blocos / Cards Organizados (3 por linha no desktop, 1 no mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-12 sm:mb-16">
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

        {/* ========================================================================= */}
        {/* SCROLL INFINITO COM AS IMAGENS DOS MAPAS MENTAIS ABAIXO DOS CARDS */}
        {/* ========================================================================= */}
        <div className="pt-2">
          {/* Marquee Container com Scroll Infinito para a Direita */}
          <div className="relative overflow-hidden py-3 mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="animate-marquee-right flex items-center gap-6">
              
              {/* Renderiza a lista 2 vezes para loop contínuo infinito e sem saltos */}
              {[...realMaterialPages, ...realMaterialPages].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  onClick={() => onOpenSample(item)}
                  className="flex-shrink-0 cursor-pointer"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    width={1440}
                    height={1019}
                    loading="lazy"
                    decoding="async"
                    className="h-64 sm:h-80 md:h-96 w-auto object-contain rounded-xl shadow-md border border-slate-200/80"
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

