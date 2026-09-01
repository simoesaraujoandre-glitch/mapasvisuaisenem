import { ContentBlock, BonusItem, PlanItem, Testimonial, FaqItem } from '../types';

export const HERO_DATA = {
  headline: "Domine toda a Redação do ENEM com 100 Mapas Visuais simples, práticos e diretos ao ponto.",
  subheadline: "Aprenda exatamente o que uma Redação de alto nível precisa ter e se prepare para buscar 900+ no ENEM.",
  cta: "QUERO DOMINAR A REDAÇÃO DO ENEM",
  support: "A partir de R$10 • Acesso imediato • Garantia de 7 dias",
};

export const LEARN_SECTION_DATA = {
  headline: "Tudo o que você precisa dominar para construir uma Redação 900+ no ENEM.",
  subheadline: "Do primeiro contato com o tema até a revisão final, você terá um passo a passo visual para saber exatamente o que fazer em cada parte da redação.",
  closing: "Tudo isso organizado em 100 Mapas Visuais para você aprender, consultar e revisar com facilidade.",
};

export const CONTENT_BLOCKS: ContentBlock[] = [
  {
    id: "bloco-1",
    number: "BLOCO 01",
    title: "ENTENDA A PROVA",
    topics: [
      "Estrutura da Redação do ENEM",
      "Texto dissertativo-argumentativo",
      "Como funciona a correção",
      "Como funciona a nota",
      "O que pode zerar sua redação",
    ],
  },
  {
    id: "bloco-2",
    number: "BLOCO 02",
    title: "DOMINE AS 5 COMPETÊNCIAS",
    topics: [
      "Norma-padrão",
      "Tema e repertório",
      "Argumentação",
      "Coesão",
      "Proposta de intervenção",
    ],
  },
  {
    id: "bloco-3",
    number: "BLOCO 03",
    title: "INTERPRETE E PLANEJE",
    topics: [
      "Tema",
      "Assunto",
      "Recorte temático",
      "Textos motivadores",
      "Problemática",
      "Tese",
      "Escolha de argumentos",
      "Projeto de texto",
    ],
  },
  {
    id: "bloco-4",
    number: "BLOCO 04",
    title: "CONSTRUA UMA INTRODUÇÃO FORTE",
    topics: [
      "Contextualização",
      "Apresentação do tema",
      "Tese",
      "Antecipação dos argumentos",
      "Estruturas de introdução",
      "Erros mais comuns",
    ],
  },
  {
    id: "bloco-5",
    number: "BLOCO 05",
    title: "DESENVOLVA SEUS ARGUMENTOS",
    topics: [
      "Tópico frasal",
      "Causa e consequência",
      "Exemplificação",
      "Comparação",
      "Dados e evidências",
      "Desenvolvimento 1",
      "Desenvolvimento 2",
      "Como evitar argumentos superficiais",
    ],
  },
  {
    id: "bloco-6",
    number: "BLOCO 06",
    title: "USE REPERTÓRIO DA FORMA CERTA",
    topics: [
      "História",
      "Filosofia",
      "Sociologia",
      "Literatura",
      "Cinema",
      "Constituição",
      "Dados e pesquisas",
      "Repertório produtivo",
    ],
  },
  {
    id: "bloco-7",
    number: "BLOCO 07",
    title: "MELHORE SUA ESCRITA",
    topics: [
      "Coesão",
      "Coerência",
      "Conectivos",
      "Referenciação",
      "Pontuação",
      "Concordância",
      "Regência",
      "Crase",
    ],
  },
  {
    id: "bloco-8",
    number: "BLOCO 08",
    title: "FAÇA UMA CONCLUSÃO COMPLETA",
    topics: [
      "Retomada da tese",
      "Proposta de intervenção",
      "Agente",
      "Ação",
      "Meio / modo",
      "Finalidade",
      "Detalhamento",
      "Direitos humanos",
    ],
  },
];

export const BONUS_SECTION_DATA = {
  smallBadge: "5 BÔNUS EXCLUSIVOS",
  headline: "E para deixar sua preparação ainda mais completa, desenvolvemos 5 bônus exclusivos.",
  subheadline: "Você recebe materiais para aumentar seu repertório, praticar Redação e ainda revisar Matemática e Linguagens para o ENEM.",
  conditionTag: "SOMENTE HOJE NO PLANO COMPLETO",
};

export const BONUS_ITEMS: BonusItem[] = [
  {
    id: "bonus-1",
    tag: "BÔNUS 01",
    title: "100 REPERTÓRIOS SOCIOCULTURAIS",
    description: "100 repertórios organizados para você entender quando usar cada referência e como conectá-la ao argumento da sua redação.",
    category: "redacao",
    individualValue: "R$50,00",
  },
  {
    id: "bonus-2",
    tag: "BÔNUS 02",
    title: "30 TEMAS PARA TREINAR REDAÇÃO",
    description: "30 propostas no estilo ENEM para praticar diferentes temas, desenvolver argumentos e treinar sua estrutura de redação.",
    category: "redacao",
    individualValue: "R$40,00",
  },
  {
    id: "bonus-3",
    tag: "BÔNUS 03",
    title: "20 REDAÇÕES MODELO COMENTADAS",
    description: "Veja na prática como uma boa redação é construída, com comentários sobre introdução, tese, argumentos, repertório, conectivos e proposta de intervenção.",
    category: "redacao",
    individualValue: "R$30,00",
  },
  {
    id: "bonus-4",
    tag: "BÔNUS 04",
    title: "80 MAPAS VISUAIS DE MATEMÁTICA",
    description: "80 conteúdos de Matemática do ENEM organizados com fórmulas, conceitos, exemplos e aplicações de forma simples e visual.",
    category: "geral",
    individualValue: "R$25,00",
  },
  {
    id: "bonus-5",
    tag: "BÔNUS 05",
    title: "80 MAPAS VISUAIS DE LINGUAGENS",
    description: "80 conteúdos de Linguagens do ENEM com interpretação, gramática, gêneros textuais, literatura e outros assuntos organizados visualmente.",
    category: "geral",
    individualValue: "R$20,00",
  },
];

export const OFFER_SECTION_DATA = {
  headline: "Escolha como você quer se preparar para o ENEM.",
  plans: [
    {
      id: "basico",
      name: "PLANO BÁSICO",
      badge: "REDAÇÃO ENEM VISUAL",
      subtitle: "Para quem quer focar exclusivamente em Redação.",
      features: [
        "100 Mapas Visuais de Redação",
        "Do básico à redação completa",
        "As 5 competências explicadas",
        "Argumentação e repertório",
        "Introdução, desenvolvimento e conclusão",
        "Proposta de intervenção",
        "Material 100% digital",
        "Acesso imediato",
        "Garantia de 7 dias",
      ],
      oldPrice: "DE R$59,90",
      discountBadge: "83% OFF",
      price: "R$10",
      period: "Pagamento único.",
      ctaText: "QUERO DOMINAR REDAÇÃO POR R$10",
      isFeatured: false,
      checkoutUrl: "https://pay.wiapy.com/dNugd2LkaKX-",
    },
    {
      id: "completo",
      name: "PLANO COMPLETO",
      badge: "MELHOR CUSTO-BENEFÍCIO",
      subtitle: "Leve o material completo de Redação + todos os 5 bônus e tenha uma preparação muito mais completa para o ENEM.",
      features: [
        "100 Mapas Visuais de Redação",
        "100 Repertórios Socioculturais",
        "30 Temas para Treinar Redação",
        "20 Redações Modelo Comentadas",
        "80 Mapas Visuais de Matemática",
        "80 Mapas Visuais de Linguagens",
        "Material 100% digital",
        "Acesso imediato",
        "Garantia de 7 dias",
      ],
      totalPackageValue: "R$224,90",
      discountBadge: "87% OFF",
      price: "R$29,90",
      period: "Pagamento único.",
      ctaText: "QUERO O PACOTE COMPLETO",
      isFeatured: true,
      checkoutUrl: "https://pay.wiapy.com/R4g613t80D3Z",
    },
  ] as PlanItem[],
};

export const TESTIMONIALS_DATA = {
  headline: "Veja o que estudantes estão achando dos Mapas Visuais",
  subheadline: "Quem utiliza o material destaca principalmente a facilidade para entender a estrutura da Redação, organizar as ideias e revisar os conteúdos.",
  items: [
    {
      id: "dep-1",
      name: "Beatriz A.",
      avatarUrl: "/images/avatar-1.webp",
      text: "Antes eu entendia a teoria, mas na hora de escrever não sabia como organizar tudo. Os Mapas Visuais deixaram a estrutura da redação muito mais clara para mim.",
      rating: 5,
    },
    {
      id: "dep-3",
      name: "Larissa F.",
      avatarUrl: "/images/avatar-3.webp",
      text: "Eu sempre tinha repertório na cabeça, mas não sabia como encaixar no texto. A forma como o material explica a conexão entre repertório e argumento fez muita diferença.",
      rating: 5,
    },
    {
      id: "dep-4",
      name: "Júlia C.",
      avatarUrl: "/images/avatar-4.webp",
      text: "As 5 competências do ENEM sempre pareciam confusas. Depois de ver tudo organizado visualmente, comecei a entender melhor o que realmente precisa aparecer na redação.",
      rating: 5,
    },
    {
      id: "dep-5",
      name: "Isabela N.",
      avatarUrl: "/images/avatar-6.webp",
      text: "Eu tinha muita dificuldade na conclusão e acabava fazendo propostas muito genéricas. A parte de intervenção deixou bem mais claro agente, ação, meio, finalidade e detalhamento.",
      rating: 5,
    },
    {
      id: "dep-6",
      name: "Gabriel T.",
      avatarUrl: "/images/avatar-5.webp",
      text: "O que mais gostei foi a praticidade. Em vez de ficar procurando conteúdo em várias anotações, consigo revisar exatamente o assunto que preciso em poucos minutos.",
      rating: 5,
    },
  ] as Testimonial[],
};

export const GUARANTEE_DATA = {
  badge: "COMPRA SEM RISCO",
  headline: "Você ainda tem 7 dias para conhecer o material.",
  subheadline: "Acesse os Mapas Visuais, veja como o material funciona e decida com calma se essa forma de estudar faz sentido para você.",
  text: "Se dentro desse período você decidir que o material não atende às suas expectativas, poderá solicitar o reembolso conforme as condições da compra.",
  highlight: "7 DIAS DE GARANTIA",
};

export const FAQ_DATA: FaqItem[] = [
  {
    question: "O material é específico para o ENEM?",
    answer: "Sim. O conteúdo foi estruturado para ensinar a Redação no formato exigido pelo ENEM.",
  },
  {
    question: "Serve para quem ainda não sabe fazer redação?",
    answer: "Sim. O material começa pelos fundamentos da Redação do ENEM e avança passo a passo até argumentação, repertório, competências e proposta de intervenção. Você pode começar mesmo que ainda tenha dificuldade para estruturar uma redação.",
  },
  {
    question: "Serve para quem já escreve, mas quer melhorar a nota?",
    answer: "Sim. Quem já possui uma base pode utilizar os Mapas Visuais para revisar pontos específicos, identificar falhas e aprimorar estrutura, argumentação, repertório e proposta de intervenção.",
  },
  {
    question: "O plano de R$10 inclui os bônus?",
    answer: "Não. O Plano Básico de R$10 inclui somente os 100 Mapas Visuais de Redação. Os 5 bônus estão disponíveis no Pacote Completo.",
  },
  {
    question: "O que está incluso no Pacote Completo?",
    answer: "O Pacote Completo inclui os 100 Mapas Visuais de Redação + 100 Repertórios Socioculturais + 30 Temas para Treinar + 20 Redações Modelo Comentadas + 80 Mapas Visuais de Matemática + 80 Mapas Visuais de Linguagens.",
  },
  {
    question: "O material é físico?",
    answer: "Não. Todo o material é 100% digital, permitindo acesso de forma prática após a confirmação da compra.",
  },
  {
    question: "Posso estudar pelo celular?",
    answer: "Sim. Você pode consultar o material pelo celular, tablet ou computador.",
  },
  {
    question: "Como recebo o acesso?",
    answer: "Após a confirmação do pagamento, as instruções de acesso são enviadas para o e-mail informado durante a compra.",
  },
  {
    question: "Tem garantia?",
    answer: "Sim. Sua compra possui garantia de 7 dias, conforme as condições apresentadas na página.",
  },
];

export const FINAL_CTA_DATA = {
  headline: "Comece agora a dominar a Redação do ENEM.",
  text: "Aprenda de forma visual como estruturar, argumentar, utilizar repertório e construir cada parte da sua Redação para chegar muito mais preparado ao ENEM.",
  highlight: "Comece por apenas R$10.",
  cta: "QUERO COMEÇAR AGORA",
  support: "Material digital • Acesso imediato • Garantia de 7 dias",
};

export const FOOTER_DATA = {
  brandTitle: "REDAÇÃO ENEM COMPLETA",
  tagline: "100 Mapas Visuais de Redação para o ENEM. Método visual, estruturado e direto ao ponto para se preparar para buscar 900+ na Redação do ENEM.",
  disclaimer: "Este produto não tem vínculo institucional com o INEP ou MEC.",
};
