export interface ContentBlock {
  id: string;
  number: string;
  title: string;
  topics: string[];
}

export interface BonusItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  category: 'redacao' | 'geral';
  individualValue?: string;
}

export interface PlanItem {
  id: 'basico' | 'completo';
  name: string;
  badge?: string;
  subtitle: string;
  features: string[];
  oldPrice?: string;
  totalPackageValue?: string;
  anchorNote?: string;
  discountBadge?: string;
  price: string;
  period: string;
  ctaText: string;
  isFeatured?: boolean;
  checkoutUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatarUrl: string;
  text: string;
  rating: number;
  likes?: number;
  badge?: string;
  timeAgo?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

