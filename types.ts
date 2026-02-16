export interface MenuItem {
  id: string;
  nameHindi: string;
  nameEnglish: string;
  description: string;
  price: number;
  imageUrl?: string;
  isVeg: boolean;
  spicyLevel?: 1 | 2 | 3; // 1: mild, 2: medium, 3: hot
}

export interface MenuSectionType {
  id: string;
  titleHindi: string;
  titleEnglish: string;
  items: MenuItem[];
}