// Product Types
export interface JuiceProduct {
  id: string;
  name: string;
  description: string;
  category: 'fresh' | 'immune' | 'detox' | 'seasonal';
  imageUrl: string;
  prices: {
    small: number;  // 1L
    medium: number; // 3L
    large: number;  // 5L
  };
}

export interface OrderFormData {
  product: string;
  size: 'small' | 'medium' | 'large';
  quantity: number;
  name: string;
  phone: string;
  address: string;
  notes: string;
  branch: string;
  latitude: number;
  longitude: number;
}

export interface BookingFormData {
  eventType: string;
  date: string;
  location: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  imageUrl: string;
  date: string;
}

export interface EventService {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  icon: string;
}

export interface Branch {
  id: string;
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
  address: string;
  phone: string;
}