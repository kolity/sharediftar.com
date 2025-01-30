// types/iftar.ts

export interface Cook {
  id: string;
  name: string;
  rating?: number;
  phoneNumber?: string;
  location?: string;
}

export interface DeliveryOptions {
  selfPickup: boolean;
  delivery: boolean;
  deliveryFee?: number;
  deliveryArea?: string[];
  pickupLocation?: string;
  pickupInstructions?: string;
}

export interface DietaryInfo {
  isHealthy: boolean;
  allergens: string[];
}

export interface IftarMeal {
  id: string;
  title: string;
  description: string;
  images: string[];
  servings: number;
  type: 'gift' | 'sell';
  price?: number;
  location: string;
  cook: Cook;
  cookTime: string;
  readyTime: string;
  expiryTime?: string;
  deliveryOptions: DeliveryOptions;
  dietaryInfo?: DietaryInfo;
  status: 'draft' | 'published' | 'reserved' | 'completed';
  createdAt: string;
  updatedAt: string;
}

export interface FormData {
  title: string;
  description: string;
  servings: number;
  readyTime: string;
  type: 'gift' | 'sell';
  price?: number;
  location?: string;
  cookTime?: string;
  images?: FileList | null;
  deliveryOptions: DeliveryOptions;
  dietaryInfo: DietaryInfo;
  cookContact: {
    phoneNumber: string;
    preferredContact: 'phone' | 'message';
  };
  status?: 'draft' | 'published';
}

export type FormErrors = {
  [K in keyof FormData]?: string;
} & {
  deliveryOptions?: {
    [K in keyof DeliveryOptions]?: string;
  };
  dietaryInfo?: {
    [K in keyof DietaryInfo]?: string;
  };
  cookContact?: {
    [K in keyof NonNullable<FormData['cookContact']>]?: string;
  };
};