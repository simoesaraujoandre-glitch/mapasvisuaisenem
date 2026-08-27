export interface ContentTopic {
  title: string;
  category: string;
  items: string[];
  iconName: string;
  badgeCount: number;
}

export interface BonusItem {
  id: string;
  number: string;
  title: string;
  description: string;
  originalPrice: string;
  tag: string;
  color: string;
  bullets: string[];
  imageUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  targetCourse: string;
  scoreOrGain: string;
  text: string;
  avatarBg: string;
  avatarInitial: string;
  image?: string;
}

export interface VisualSheetSample {
  id: string;
  title: string;
  category: string;
  themeColor: string;
  highlightConcept: string;
  summary: string;
  formulasPreview: string[];
  imageUrl?: string;
  visualElements: {
    label: string;
    description: string;
  }[];
}
