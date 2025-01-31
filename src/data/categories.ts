// data/categories.ts

export interface CategoryItem {
  id: string;
  name: string;
  image: string;
  description: string;
  totalItems: number;
}

export const categories: CategoryItem[] = [
  {
    id: 'home-gatherings',
    name: 'Home Gatherings',
    image: '/categories/home-gatherings.png',
    description: 'Join families opening their homes for intimate Iftar experiences',
    totalItems: 45
  },
  {
    id: 'mosque-iftars',
    name: 'Mosque Iftars',
    image: '/categories/mosque-iftars.png',
    description: 'Community Iftars hosted at local mosques and Islamic centers',
    totalItems: 28
  },
  {
    id: 'community-events',
    name: 'Community Events',
    image: '/categories/community-events.png',
    description: 'Large-scale Iftar gatherings bringing the community together',
    totalItems: 15
  },
  {
    id: 'special-needs',
    name: 'Special Needs',
    image: '/categories/special-needs.png',
    description: 'Accessible Iftar gatherings with accommodations for special needs',
    totalItems: 32
  },
  {
    id: 'travelers',
    name: 'Travelers Welcome',
    image: '/categories/travelers.png',
    description: 'Iftar hosts specifically welcoming travelers and tourists',
    totalItems: 23
  },
  {
    id: 'international',
    name: 'International',
    image: '/categories/international.png',
    description: 'Experience Iftars featuring diverse cultural traditions',
    totalItems: 38
  }
];