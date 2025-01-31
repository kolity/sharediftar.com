interface User {
  id: string;
  name: string;
  location: string;
  rating: number;
  totalHosted?: number;
  verifiedHost?: boolean;
  preferredLanguages?: string[];
}

interface IftarGathering {
  id: string;
  title: string;
  description: string;
  capacity: number;
  type: 'community' | 'home' | 'mosque';
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
  region: string;
  status: 'open' | 'full' | 'completed';
  guestsCount: number;
  additionalInfo?: {
    accessibility?: string[];
    parking?: boolean;
    languages?: string[];
    prayerFacilities?: boolean;
    familyFriendly?: boolean;
    womenOnly?: boolean;
    childrenWelcome?: boolean;
  };
}

export const iftarGatherings: IftarGathering[] = [
  {
    id: '1',
    title: 'Traditional Middle Eastern Iftar',
    description: 'Join us for a blessed evening of traditional Middle Eastern dishes and community bonding. Everyone is welcome!',
    capacity: 12,
    type: 'home',
    iftarTime: '18:15',
    menu: [
      {
        category: 'main',
        items: ['Lamb Mansaf', 'Chicken Shawarma', 'Arabic Rice']
      },
      {
        category: 'side',
        items: ['Hummus', 'Fattoush', 'Fresh Salads']
      },
      {
        category: 'dessert',
        items: ['Kunafa', 'Dates', 'Fresh Fruits']
      },
      {
        category: 'drink',
        items: ['Qamar Al-Din', 'Arabic Coffee', 'Water']
      }
    ],
    dietaryInfo: ['Halal', 'Vegetarian Options Available'],
    postedAt: '2024-03-10T14:00:00Z',
    hostId: 'u1',
    host: {
      id: 'u1',
      name: 'Fatima Ahmed',
      location: 'Dubai',
      rating: 4.8,
      totalHosted: 15,
      verifiedHost: true,
      preferredLanguages: ['Arabic', 'English']
    },
    location: 'Dubai Marina',
    region: 'UAE',
    status: 'open',
    guestsCount: 3,
    additionalInfo: {
      accessibility: ['Wheelchair Accessible', 'Ground Floor'],
      parking: true,
      languages: ['Arabic', 'English'],
      familyFriendly: true,
      childrenWelcome: true
    }
  },
  {
    id: '2',
    title: 'Grand Community Iftar',
    description: 'Weekly community iftar gathering at the Islamic Center. Join us in breaking fast together as one community.',
    capacity: 150,
    type: 'mosque',
    iftarTime: '18:20',
    menu: [
      {
        category: 'main',
        items: ['Biryani', 'Grilled Chicken', 'Mixed Rice']
      },
      {
        category: 'side',
        items: ['Dates', 'Fresh Vegetables', 'Lentil Soup']
      },
      {
        category: 'drink',
        items: ['Fresh Juices', 'Coffee', 'Water']
      }
    ],
    dietaryInfo: ['Halal', 'Vegetarian Options', 'Allergen Information Available'],
    postedAt: '2024-03-10T13:30:00Z',
    hostId: 'u2',
    host: {
      id: 'u2',
      name: 'Islamic Cultural Center',
      location: 'London',
      rating: 4.9,
      totalHosted: 200,
      verifiedHost: true
    },
    location: 'East London',
    region: 'UK',
    status: 'open',
    guestsCount: 85,
    additionalInfo: {
      accessibility: ['Wheelchair Accessible', 'Family Area Available', 'Prayer Facilities'],
      parking: true,
      languages: ['English', 'Arabic', 'Urdu'],
      prayerFacilities: true,
      familyFriendly: true,
      childrenWelcome: true
    }
  },
  {
    id: '3',
    title: 'Sisters Community Iftar',
    description: 'A warm gathering for sisters to break fast together and build community bonds.',
    capacity: 20,
    type: 'community',
    iftarTime: '18:15',
    menu: [
      {
        category: 'main',
        items: ['Turkish Kebab', 'Mediterranean Salad']
      },
      {
        category: 'side',
        items: ['Stuffed Grape Leaves', 'Falafel']
      },
      {
        category: 'dessert',
        items: ['Baklava', 'Fresh Fruits']
      },
      {
        category: 'drink',
        items: ['Mint Tea', 'Rose Water', 'Water']
      }
    ],
    dietaryInfo: ['Halal', 'Vegan Options', 'Gluten-Free Options'],
    postedAt: '2024-03-10T12:00:00Z',
    hostId: 'u3',
    host: {
      id: 'u3',
      name: 'Aisha Rahman',
      location: 'Toronto',
      rating: 4.9,
      totalHosted: 12,
      verifiedHost: true,
      preferredLanguages: ['English', 'Arabic']
    },
    location: 'Downtown Toronto',
    region: 'Canada',
    status: 'open',
    guestsCount: 8,
    additionalInfo: {
      accessibility: ['Elevator Access'],
      parking: true,
      languages: ['English', 'Arabic'],
      womenOnly: true,
      familyFriendly: true,
      childrenWelcome: true
    }
  }
];

export type { IftarGathering, User };