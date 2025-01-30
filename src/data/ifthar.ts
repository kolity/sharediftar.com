interface User {
  id: string;
  name: string;
  location: string;
  rating: number;
  image: string;
  totalHosted?: number;
}

interface IftarGathering {
  id: string;
  title: string;
  description: string;
  capacity: number;
  type: 'community' | 'home' | 'mosque';
  images: string[];
  iftarTime: string;
  menu: {
    category: 'main' | 'side' | 'dessert' | 'drink';
    items: string[];
  }[];
  dietaryInfo: string[];
  postedAt: string;
  hostId: string;
  host: User;
  location: string;
  status: 'open' | 'full' | 'completed';
  guestsCount: number;
  additionalInfo?: {
    accessibility?: string[];
    parking?: boolean;
    languages?: string[];
  };
}

export const iftarGatherings: IftarGathering[] = [
  {
    id: '1',
    title: 'Traditional Maldivian Iftar Gathering',
    description: 'Join us for a blessed evening of traditional Maldivian iftar dishes and community bonding. All are welcome!',
    capacity: 8,
    type: 'home',
    images: ['/gatherings/maldivian-iftar.png'],
    iftarTime: '18:15',
    menu: [
      {
        category: 'main',
        items: ['Chicken Biryani', 'Tharukaaree Riha', 'Chapati']
      },
      {
        category: 'side',
        items: ['Samosas', 'Bajiya', 'Mixed Salad']
      },
      {
        category: 'dessert',
        items: ['Date Pudding', 'Fresh Fruits']
      },
      {
        category: 'drink',
        items: ['Traditional Lemon Juice', 'Water']
      }
    ],
    dietaryInfo: ['Halal', 'Vegetarian Options Available'],
    postedAt: '2024-03-10T14:00:00Z',
    hostId: 'u1',
    host: {
      id: 'u1',
      name: 'Rishmy',
      location: 'Malé',
      rating: 4.8,
      image: '/users/host1.jpg',
      totalHosted: 12
    },
    location: 'Malé',
    status: 'open',
    guestsCount: 3,
    additionalInfo: {
      accessibility: ['Wheelchair Accessible'],
      parking: true,
      languages: ['Dhivehi', 'English']
    }
  },
  {
    id: '2',
    title: 'Community Iftar at Central Mosque',
    description: 'Weekly community iftar gathering at the Central Mosque. Everyone is invited to join in breaking fast together.',
    capacity: 50,
    type: 'mosque',
    images: ['/gatherings/mosque-iftar.png'],
    iftarTime: '18:20',
    menu: [
      {
        category: 'main',
        items: ['Mixed Rice', 'Chicken Curry', 'Fish Curry']
      },
      {
        category: 'side',
        items: ['Dates', 'Fresh Vegetables', 'Roshi']
      },
      {
        category: 'drink',
        items: ['Fruit Juice', 'Water']
      }
    ],
    dietaryInfo: ['Halal', 'Vegetarian Options'],
    postedAt: '2024-03-10T13:30:00Z',
    hostId: 'u2',
    host: {
      id: 'u2',
      name: 'Islamic Center',
      location: 'Hulhumalé',
      rating: 4.9,
      image: '/users/host2.jpg',
      totalHosted: 156
    },
    location: 'Hulhumalé',
    status: 'open',
    guestsCount: 28,
    additionalInfo: {
      accessibility: ['Wheelchair Accessible', 'Family Area Available'],
      parking: true,
      languages: ['Dhivehi', 'English', 'Arabic']
    }
  },
  {
    id: '3',
    title: 'Neighborhood Iftar Get-Together',
    description: 'A cozy gathering with neighbors to share iftar and strengthen community bonds.',
    capacity: 6,
    type: 'community',
    images: ['/gatherings/community-iftar.png'],
    iftarTime: '18:15',
    menu: [
      {
        category: 'main',
        items: ['Homemade Biryani', 'Grilled Fish']
      },
      {
        category: 'side',
        items: ['Fresh Salad', 'Homemade Samosas']
      },
      {
        category: 'dessert',
        items: ['Traditional Sweets', 'Fruits']
      },
      {
        category: 'drink',
        items: ['Mango Juice', 'Water']
      }
    ],
    dietaryInfo: ['Halal', 'Seafood'],
    postedAt: '2024-03-10T12:00:00Z',
    hostId: 'u3',
    host: {
      id: 'u3',
      name: 'Shifna',
      location: 'Hulhumalé',
      rating: 4.9,
      image: '/users/host3.jpg',
      totalHosted: 8
    },
    location: 'Hulhumalé',
    status: 'open',
    guestsCount: 2
  }
];

export type { IftarGathering, User };