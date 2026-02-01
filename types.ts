
export type Language = 'en' | 'ar';

export interface NavItem {
  id: string;
  label: {
    en: string;
    ar: string;
  };
}

export interface Content {
  hero: {
    title: { en: string; ar: string };
    cta: { en: string; ar: string };
  };
  about: {
    title: { en: string; ar: string };
    text: { en: string; ar: string };
  };
  services: Array<{
    title: { en: string; ar: string };
    desc: { en: string; ar: string };
    icon: string;
  }>;
}
