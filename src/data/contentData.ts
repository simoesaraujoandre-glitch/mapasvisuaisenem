import { ContentTopic, BonusItem, Testimonial, VisualSheetSample } from '../types';

export const CHECKOUT_URLS = {
  basic: 'https://pay.wiapy.com/vYSV-olUis-b',
  complete: 'https://pay.wiapy.com/5GXeu4Un98uW',
};

export const contentTopics: ContentTopic[] = [
  {
    title: 'Fundamentos',
    category: 'Base Essencial',
    iconName: 'Compass',
    badgeCount: 12,
    items: [
      'Razão', 'Proporção', 'Grandezas proporcionais', 'Regra de três', 'Escalas',
      'Conversão de unidades', 'Frações', 'Decimais', 'Potenciação', 'Radiciação',
      'Notação científica', 'MMC e MDC'
    ]
  },
  {
    title: 'Porcentagem e Matemática Financeira',
    category: 'Alto Peso no ENEM',
    iconName: 'Percent',
    badgeCount: 9,
    items: [
      'Porcentagem', 'Aumentos e descontos', 'Variação percentual', 'Juros simples',
      'Juros compostos', 'Lucro e prejuízo', 'Acréscimos sucessivos', 'Descontos sucessivos',
      'Taxas e índices'
    ]
  },
  {
    title: 'Estatística e Gráficos',
    category: 'Média de 7 a 9 questões',
    iconName: 'BarChart3',
    badgeCount: 12,
    items: [
      'Média', 'Média ponderada', 'Mediana', 'Moda', 'Amplitude',
      'Variância', 'Desvio padrão', 'Tabelas', 'Gráfico de barras',
      'Gráfico de linhas', 'Gráfico de setores', 'Histograma'
    ]
  },
  {
    title: 'Geometria',
    category: 'Plana e Espacial',
    iconName: 'Shapes',
    badgeCount: 15,
    items: [
      'Ângulos', 'Triângulos', 'Quadriláteros', 'Polígonos', 'Circunferência',
      'Perímetro', 'Áreas', 'Prismas', 'Cilindros', 'Pirâmides',
      'Cones', 'Esferas', 'Volume', 'Capacidade', 'Planificações'
    ]
  },
  {
    title: 'Álgebra e Funções',
    category: 'Interpretação e Modelagem',
    iconName: 'TrendingUp',
    badgeCount: 10,
    items: [
      'Expressões algébricas', 'Produtos notáveis', 'Fatoração', 'Equação do 1º grau',
      'Equação do 2º grau', 'Sistemas', 'Função afim', 'Função quadrática',
      'Gráficos de funções', 'Inequações'
    ]
  },
  {
    title: 'Probabilidade e outros conteúdos',
    category: 'Raciocínio e Análise',
    iconName: 'Dice5',
    badgeCount: 9,
    items: [
      'Princípio Fundamental da Contagem', 'Permutações', 'Arranjos', 'Combinações',
      'Probabilidade', 'PA', 'PG', 'Logaritmos', 'Trigonometria'
    ]
  }
];

export const bonusList: BonusItem[] = [
  {
    id: 'bonus-1',
    number: 'BÔNUS 01',
    title: 'Mapas Visuais de Linguagens',
    description: 'Interpretação textual, gêneros, funções da linguagem, figuras de linguagem, gramática, coesão, literatura e os principais conteúdos de Linguagens organizados visualmente.',
    originalPrice: 'R$ 39,90',
    tag: 'Material Digital',
    color: 'from-blue-600 to-indigo-600',
    imageUrl: '/img/bonus-linguagens.webp',
    bullets: ['Gêneros e Funções da Linguagem', 'Figuras de Estilo e Coesão', 'Literatura & Interpretação']
  },
  {
    id: 'bonus-2',
    number: 'BÔNUS 02',
    title: 'Mapas Visuais de Redação',
    description: 'Estrutura da redação • 5 competências • Introdução • Desenvolvimento • Conclusão • Tese • Argumentação • Repertório • Conectivos • Proposta de intervenção',
    originalPrice: 'R$ 44,90',
    tag: 'Material Digital',
    color: 'from-blue-700 to-sky-600',
    imageUrl: '/img/bonus-redacao.webp',
    bullets: ['5 Competências detalhadas', 'Fórmula da Proposta de Intervenção', 'Conectivos e Repertórios Coringa']
  },
  {
    id: 'bonus-3',
    number: 'BÔNUS 03',
    title: '50 Exercícios de Fixação ENEM',
    description: '25 exercícios de Matemática + 25 exercícios de Linguagens para colocar o conteúdo em prática, testar o que aprendeu e identificar os assuntos que precisam de revisão.',
    originalPrice: 'R$ 29,90',
    tag: 'Caderno Prático',
    color: 'from-cyan-600 to-blue-600',
    imageUrl: '/img/bonus-exercicios.webp',
    bullets: ['25 Questões de Matemática com gabarito', '25 Questões de Linguagens comentadas', 'Checklist de diagnóstico de erros']
  },
  {
    id: 'bonus-4',
    number: 'BÔNUS 04',
    title: 'Plano de Revisão ENEM',
    description: 'Escolha entre 7, 15 ou 30 dias e tenha um roteiro pronto mostrando o que estudar e revisar em cada etapa.',
    originalPrice: 'R$ 29,90',
    tag: 'Cronograma Estratégico',
    color: 'from-indigo-600 to-blue-700',
    imageUrl: '/img/bonus-revisao.webp',
    bullets: ['Cronograma Express de 7 dias', 'Cronograma Focado de 15 dias', 'Roteiro Completo de 30 dias']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Mariana S.',
    city: 'Belo Horizonte - MG',
    targetCourse: 'Medicina na UFMG',
    scoreOrGain: '+180 pts em Matemática',
    text: '“Eu sempre travava em Matemática e gostei muito da forma como o conteúdo fica organizado. Consigo bater o olho e entender muito mais rápido.”',
    avatarBg: 'bg-rose-100 text-rose-700',
    avatarInitial: 'MS',
    image: '/img/depoimento-mariana.webp'
  },
  {
    id: 't-2',
    name: 'Lucas P.',
    city: 'São Paulo - SP',
    targetCourse: 'Engenharia na USP',
    scoreOrGain: 'Nota 890+ no simulado',
    text: '“O que mais gostei foi conseguir revisar sem precisar voltar para uma aula inteira. Abro o assunto e já encontro o que preciso.”',
    avatarBg: 'bg-blue-100 text-blue-700',
    avatarInitial: 'LP',
    image: '/img/depoimento-lucas.webp'
  },
  {
    id: 't-3',
    name: 'Beatriz R.',
    city: 'Salvador - BA',
    targetCourse: 'Direito na UFBA',
    scoreOrGain: 'Destravou as questões',
    text: '“Eu tinha muita dificuldade principalmente com fórmulas. Do jeito visual ficou muito mais fácil entender onde cada uma entra.”',
    avatarBg: 'bg-purple-100 text-purple-700',
    avatarInitial: 'BR',
    image: '/img/depoimento-beatriz.webp'
  },
  {
    id: 't-4',
    name: 'Camila V.',
    city: 'Fortaleza - CE',
    targetCourse: 'Odontologia na UFC',
    scoreOrGain: 'Acertos subiram de 14 para 36',
    text: '“Eu perdia horas procurando anotações soltas e PDFs gigantes. O mapa visual resume tudo em uma folha com exemplos claros.”',
    avatarBg: 'bg-emerald-100 text-emerald-700',
    avatarInitial: 'CV',
    image: '/img/depoimento-camila.webp'
  },
  {
    id: 't-5',
    name: 'Gabriel T.',
    city: 'Curitiba - PR',
    targetCourse: 'Ciência da Computação',
    scoreOrGain: 'Estuda no celular',
    text: '“Achei muito mais prático que os resumos convencionais. Está tudo organizado e consigo revisar pelo celular sem perder tempo.”',
    avatarBg: 'bg-amber-100 text-amber-700',
    avatarInitial: 'GT',
    image: '/img/depoimento-gabriel.webp'
  },
  {
    id: 't-6',
    name: 'Larissa M.',
    city: 'Recife - PE',
    targetCourse: 'Psicologia na UFPE',
    scoreOrGain: 'Ganhou agilidade na prova',
    text: '“Os esquemas de Linguagens e Redação do combo completo me ajudaram a economizar muito tempo na hora de resolver as questões.”',
    avatarBg: 'bg-pink-100 text-pink-700',
    avatarInitial: 'LM',
    image: '/img/depoimento-larissa.webp'
  },
  {
    id: 't-7',
    name: 'Juliana F.',
    city: 'Rio de Janeiro - RJ',
    targetCourse: 'Biomedicina na UFRJ',
    scoreOrGain: 'Fórmulas decoradas sem estresse',
    text: '“Eu decorava as fórmulas e esquecia no dia seguinte. Com a associação visual das figuras, fixou de verdade na minha cabeça.”',
    avatarBg: 'bg-sky-100 text-sky-700',
    avatarInitial: 'JF',
    image: '/img/depoimento-juliana.webp'
  },
  {
    id: 't-8',
    name: 'Fernanda D.',
    city: 'Porto Alegre - RS',
    targetCourse: 'Arquitetura na UFRGS',
    scoreOrGain: 'Geometria Espacial 100%',
    text: '“A parte de Geometria Espacial e Notação Científica é perfeita! Consegui acertar todas as questões desse tema nos simulados.”',
    avatarBg: 'bg-teal-100 text-teal-700',
    avatarInitial: 'FD',
    image: '/img/depoimento-fernanda.webp'
  }
];

export const sampleVisualSheets: VisualSheetSample[] = [
  {
    id: 'sheet-geom',
    title: 'Geometria Espacial & Planificações',
    category: 'Geometria',
    themeColor: '#2563EB',
    highlightConcept: 'Prismas, Cilindros, Cones e Esferas com visualização 3D e fórmulas de Volume e Área Lateral em destaque.',
    summary: 'Diagrama com conexões diretas entre a figura tridimensional, a fórmula padrão e o macete de planificação que o ENEM sempre cobra.',
    formulasPreview: ['V = Ab · h (Prisma/Cilindro)', 'V = (Ab · h) / 3 (Pirâmide/Cone)', 'V = (4/3) · π · r³ (Esfera)'],
    visualElements: [
      { label: 'Visão 3D', description: 'Esboço em perspectiva isométrica' },
      { label: 'Macete ENEM', description: 'Conversão rápida de cm³ para Litros (1 dm³ = 1 L)' },
      { label: 'Cuidado!', description: 'Não confundir geratriz com altura no cone' }
    ]
  },
  {
    id: 'sheet-finance',
    title: 'Porcentagem & Matemática Financeira',
    category: 'Finanças & Variação',
    imageUrl: '/img/mapa-porcentagem.webp',
    themeColor: '#16A34A',
    highlightConcept: 'Fator de Multiplicação para aumentos e descontos sucessivos + Juros Simples x Compostos.',
    summary: 'Estrutura em árvore visual para nunca mais calcular porcentagem de forma lenta em questões longas do ENEM.',
    formulasPreview: ['Fator = 1 + i (Aumento)', 'Fator = 1 - i (Desconto)', 'M = C · (1 + i)^t (Compostos)'],
    visualElements: [
      { label: 'Atalho Mental', description: '10% = divide por 10; 1% = divide por 100' },
      { label: 'Aumentos Sucessivos', description: 'Multiplicação dos fatores (não somar!)' },
      { label: 'Pegadinha TRI', description: 'Diferença entre juros nominal e efetivo' }
    ]
  },
  {
    id: 'sheet-stats',
    title: 'Juros Simples & Crescimento Linear',
    category: 'Matemática Financeira',
    imageUrl: '/img/mapa-juros-simples.webp',
    themeColor: '#0284C7',
    highlightConcept: 'Gráfico e raciocínio de progressão linear aplicado a juros, rendimento e parcelamento.',
    summary: 'Aprenda a diferenciar de primeira juros simples de compostos em qualquer enunciado do ENEM.',
    formulasPreview: ['J = C · i · t', 'M = C + J', 'Crescimento Linear (Reta)'],
    visualElements: [
      { label: 'Gráfico Linear', description: 'Visualização da reta de crescimento' },
      { label: 'Atenção ao Tempo', description: 'Taxa e prazo na mesma unidade' }
    ]
  },
  {
    id: 'sheet-functions',
    title: 'MMC e MDC: Ciclos ou Grupos',
    category: 'Aritmética & Divisibilidade',
    imageUrl: '/img/mapa-mmc-mdc.webp',
    themeColor: '#4F46E5',
    highlightConcept: 'Quando usar MMC (encontros, ciclos periódicos) e quando usar MDC (divisão máxima em partes iguais).',
    summary: 'Elimine a dúvida que faz a maioria dos vestibulandos errar enunciados do ENEM.',
    formulasPreview: ['MMC: Fatores comuns e não comuns', 'MDC: Apenas fatores comuns'],
    visualElements: [
      { label: 'Gatilho de MMC', description: '"Quando voltarão a se encontrar juntos?"' },
      { label: 'Gatilho de MDC', description: '"Dividir no maior tamanho possível sem sobras"' }
    ]
  },
  {
    id: 'sheet-prob',
    title: 'Notação Científica para o ENEM',
    category: 'Aritmética & Potências',
    imageUrl: '/img/mapa-notacao-cientifica.webp',
    themeColor: '#D97706',
    highlightConcept: 'Representação de números gigantescos ou minúsculos em potência de base 10 (N × 10^k).',
    summary: 'Aplicações frequentes em questões interdisciplinares de Biologia, Física e Química no ENEM.',
    formulasPreview: ['N · 10^k (1 ≤ N < 10)', 'Vírgula p/ esquerda ➜ expoente +', 'Vírgula p/ direita ➜ expoente -'],
    visualElements: [
      { label: 'Regra da Vírgula', description: 'Macete prático para não errar o sinal do expoente' },
      { label: 'Operações', description: 'Multiplicação e divisão de bases iguais' }
    ]
  },
  {
    id: 'sheet-ratio',
    title: 'Razão: Comparar, Dividir e Simplificar',
    category: 'Fundamentos & Proporção',
    imageUrl: '/img/mapa-razao.webp',
    themeColor: '#059669',
    highlightConcept: 'Comparação quantitativa entre grandezas, velocidade média, densidade e escalas.',
    summary: 'Fundamento que garante mais de 8 questões certas na prova de Matemática do ENEM.',
    formulasPreview: ['Razão = A / B', 'Escala = Desenho / Real', 'Densidade = Pop / Área'],
    visualElements: [
      { label: 'Escalas & Plantas', description: 'Cuidado com unidades (cm para m)' },
      { label: 'Interpretação', description: 'Quem fica no numerador e no denominador' }
    ]
  }
];

export const faqs = [
  {
    q: 'Como vou receber o material após o pagamento?',
    a: 'O acesso é imediato! Assim que o pagamento for confirmado (no Pix a liberação é em menos de 1 minuto), você recebe no seu e-mail e no WhatsApp o link exclusivo para baixar todos os arquivos em PDF de alta qualidade e acessar a área do estudante.'
  },
  {
    q: 'O material funciona no celular ou preciso imprimir?',
    a: 'Funciona perfeitamente em qualquer dispositivo: celular (Android e iPhone), tablet, iPad, computador ou notebook. Se você preferir estudar no papel, todos os arquivos foram diagramados em alta definição prontos para impressão em folha A4.'
  },
  {
    q: 'Por que o Plano Básico custa apenas R$ 10?',
    a: 'Nosso objetivo é democratizar o acesso a um estudo de qualidade para qualquer vestibulando do Brasil. Queremos que você conheça o poder do método visual sem pesar no seu bolso. Não há mensalidades nem taxas ocultas: é pagamento único.'
  },
  {
    q: 'Qual a diferença entre o Plano Básico e o Plano Completo?',
    a: 'O Plano Básico (R$ 10) entrega todo o material de Mapas Visuais de Matemática. O Plano Completo (R$ 27,90) inclui, além de toda a Matemática, mais 4 bônus essenciais: Mapas de Linguagens, Mapas de Redação Nota 1000, 50 Exercícios com Gabarito e o Cronograma de Revisão de 7, 15 e 30 dias.'
  },
  {
    q: 'E se eu não gostar ou achar que não me ajudou?',
    a: 'Você tem garantia incondicional de 7 dias. Se por qualquer motivo você achar que o material não facilitou seus estudos de Matemática, basta enviar um e-mail ou mensagem e devolvemos 100% do seu dinheiro, sem burocracia.'
  }
];
