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
      id: 'maldivian',
      name: 'Maldivian',
      image: '/categories/maldivian.png',
      description: 'Traditional Maldivian cuisine and local specialties',
      totalItems: 124
    },
    {
      id: 'thai',
      name: 'Thai',
      image: '/categories/thai.png',
      description: 'Authentic Thai dishes and flavors',
      totalItems: 89
    },
    {
      id: 'desserts',
      name: 'Desserts',
      image: '/categories/desserts.png',
      description: 'Sweet treats and desserts from around the world',
      totalItems: 156
    },
    {
      id: 'seafood',
      name: 'Seafood',
      image: '/categories/seafood.png',
      description: 'Fresh seafood and ocean delicacies',
      totalItems: 178
    },
    {
      id: 'italian',
      name: 'Italian',
      image: '/categories/italian.png',
      description: 'Classic Italian pasta, pizza and more',
      totalItems: 92
    },
    {
      id: 'japanese',
      name: 'Japanese',
      image: '/categories/japanese.png',
      description: 'Sushi, ramen and Japanese favorites',
      totalItems: 84
    }
  ];