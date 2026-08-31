export interface BonusItem {
  id: string;
  number: string;
  title: string;
  lead?: string;
  description: string;
  originalPrice: string;
  priceNote?: string;
  tag: string;
  color: string;
  bullets: string[];
  imageUrl?: string;
  sampleImages?: string[];
  orientation?: 'landscape' | 'portrait';
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
