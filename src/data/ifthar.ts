interface User {
    id: string;
    name: string;
    location: string;
    rating: number;
    image: string;
  }
  
  interface IftarMeal {
    id: string;
    title: string;
    description: string;
    servings: number;
    type: 'gift' | 'sell';
    price?: number;
    images: string[];
    cookTime: string;
    category: 'main' | 'dessert' | 'snack' | 'drink';
    dietaryInfo: string[];
    postedAt: string;
    cookId: string;
    cook: User;
    location: string;
    status: 'available' | 'reserved' | 'completed';
  }
  
  export const iftarMeals: IftarMeal[] = [
    {
      id: '1',
      title: 'Homemade Chicken Biryani',
      description: 'Traditional Maldivian style biryani with fresh chicken and aromatic spices',
      servings: 4,
      type: 'gift',
      images: ['/home-cook/biriyani.png'],
      cookTime: '6:00 PM',
      category: 'main',
      dietaryInfo: ['Halal', 'Contains Nuts'],
      postedAt: '2024-03-10T14:00:00Z',
      cookId: 'u1',
      cook: {
        id: 'u1',
        name: 'Rishmy',
        location: 'Malé',
        rating: 4.8,
        image: '/users/cook1.jpg'
      },
      location: 'Malé',
      status: 'available'
    },
    {
      id: '2',
      title: 'Homemade Samosas',
      description: 'Crispy vegetable samosas, perfect for iftar',
      servings: 12,
      type: 'sell',
      price: 8,
      images: ['/home-cook/samosa.png'],
      cookTime: '5:45 PM',
      category: 'snack',
      dietaryInfo: ['Vegetarian', 'Halal'],
      postedAt: '2024-03-10T13:30:00Z',
      cookId: 'u2',
      cook: {
        id: 'u2',
        name: 'Reesham',
        location: 'Hulhumalé',
        rating: 4.6,
        image: '/users/cook2.jpg'
      },
      location: 'Malé',
      status: 'available'
    },
    {
      id: '3',
      title: 'Fresh Date Pudding',
      description: 'Sweet and nutritious date pudding for iftar',
      servings: 6,
      type: 'gift',
      images: ['/home-cook/date_pudding.png'],
      cookTime: '5:30 PM',
      category: 'dessert',
      dietaryInfo: ['Halal', 'Contains Dairy'],
      postedAt: '2024-03-10T12:00:00Z',
      cookId: 'u3',
      cook: {
        id: 'u3',
        name: 'Shifna',
        location: 'Hulhumalé',
        rating: 4.9,
        image: '/users/cook3.jpg'
      },
      location: 'Malé',
      status: 'available'
    }
  ];
  
  export type { IftarMeal, User };