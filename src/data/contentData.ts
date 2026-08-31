import { BonusItem, Testimonial } from '../types';

export const CHECKOUT_URLS = {
  basic: 'https://pay.wiapy.com/vYSV-olUis-b',
  complete: 'https://pay.wiapy.com/5GXeu4Un98uW',
};

export const bonusList: BonusItem[] = [
  {
    id: 'bonus-1',
    number: 'BÔNUS 01',
    title: 'Mapas Visuais de Linguagens',
    lead: 'Leve o mesmo método visual também para Linguagens.',
    description: 'Interpretação textual • Gêneros textuais • Funções da linguagem • Figuras de linguagem • Gramática • Coesão • Literatura e os principais conteúdos cobrados no ENEM.',
    originalPrice: 'R$39,90',
    priceNote: 'Valor avulso: R$39,90 — GRÁTIS no Plano Completo',
    tag: 'Material Digital',
    color: 'from-blue-600 to-indigo-600',
    imageUrl: '/img/linguagebs-removebg-preview.webp',
    bullets: ['Gêneros e Funções da Linguagem', 'Figuras de Estilo e Coesão', 'Literatura & Interpretação'],
    orientation: 'landscape',
    sampleImages: [
      '/img/linguagens-2.webp',
      '/img/linguagens-3.webp',
      '/img/linguagens-4.webp',
      '/img/linguagens-5.webp',
      '/img/linguagens-6.webp'
    ]
  },
  {
    id: 'bonus-2',
    number: 'BÔNUS 02',
    title: 'Mapas Visuais de Redação',
    lead: 'Entenda visualmente como construir sua Redação do ENEM.',
    description: 'Estrutura • 5 competências • Introdução • Desenvolvimento • Conclusão • Tese • Argumentação • Repertório • Conectivos • Proposta de intervenção',
    originalPrice: 'R$44,90',
    priceNote: 'Valor avulso: R$44,90 — GRÁTIS no Plano Completo',
    tag: 'Material Digital',
    color: 'from-blue-700 to-sky-600',
    imageUrl: '/img/redacao-removebg-preview-1.webp',
    bullets: ['5 Competências detalhadas', 'Fórmula da Proposta de Intervenção', 'Conectivos e Repertórios Coringa'],
    orientation: 'landscape',
    sampleImages: [
      '/img/redacao-1.webp',
      '/img/redacao-2.webp',
      '/img/redacao-3.webp',
      '/img/redacao-4.webp',
      '/img/redacao-5.webp',
      '/img/redacao-6.webp'
    ]
  },
  {
    id: 'bonus-3',
    number: 'BÔNUS 03',
    title: '50 Exercícios de Fixação ENEM',
    lead: 'Não fique apenas na teoria. Coloque o conteúdo em prática.',
    description: 'São 25 exercícios de Matemática + 25 de Linguagens para testar o que aprendeu, identificar suas dificuldades e descobrir quais conteúdos precisa revisar novamente.',
    originalPrice: 'R$29,90',
    priceNote: 'Valor avulso: R$29,90 — GRÁTIS no Plano Completo',
    tag: 'Caderno Prático',
    color: 'from-cyan-600 to-blue-600',
    imageUrl: '/img/exercicos-removebg-preview.webp',
    bullets: ['25 Questões de Matemática com gabarito', '25 Questões de Linguagens comentadas', 'Checklist de diagnóstico de erros'],
    orientation: 'portrait',
    sampleImages: [
      '/img/exercicios-1.webp',
      '/img/exercicios-2.webp',
      '/img/exercicios-3.webp',
      '/img/exercicios-4.webp',
      '/img/exercicios-5.webp',
      '/img/exercicios-6.webp'
    ]
  },
  {
    id: 'bonus-4',
    number: 'BÔNUS 04',
    title: 'Plano de Revisão ENEM',
    lead: 'Saiba exatamente o que revisar em cada etapa da sua preparação.',
    description: 'Escolha entre os planos de 7, 15 ou 30 dias e siga um roteiro pronto para organizar seus conteúdos e manter sua revisão em dia.',
    originalPrice: 'R$29,90',
    priceNote: 'Valor avulso: R$29,90 — GRÁTIS no Plano Completo',
    tag: 'Cronograma Estratégico',
    color: 'from-indigo-600 to-blue-700',
    imageUrl: '/img/revisao-removebg-preview.webp',
    bullets: ['Cronograma Express de 7 dias', 'Cronograma Focado de 15 dias', 'Roteiro Completo de 30 dias'],
    orientation: 'portrait',
    sampleImages: [
      '/img/revisao-1.webp',
      '/img/revisao-2.webp',
      '/img/revisao-3.webp',
      '/img/revisao-4.webp'
    ]
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
    image: '/img/mulher-1.webp'
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
    image: '/img/homen.webp'
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
    image: '/img/mulher-2.webp'
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
    image: '/img/mulher-3.webp'
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
    image: '/img/homen1.webp'
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
    image: '/img/mulher-4.webp'
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
    image: '/img/mulher-5.webp'
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
    image: '/img/mulher-6.webp'
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
