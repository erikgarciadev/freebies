export interface SocialLink {
  platform: "x" | "instagram" | "behance" | "tiktok" | "web" | "canva";
  url: string;
}

export interface Author {
  name: string;
  avatar?: string;
  socials: SocialLink[];
}

export interface LocalizedString {
  es: string;
  en: string;
}

export interface Freebie {
  id: string;
  createdAt: Date;
  updatedAt?: Date | null;
  visible: boolean;
  imgSrc: string;
  href: string;
  tags?: string[];
  author?: Author;
  title: LocalizedString;
  description: LocalizedString;
}
