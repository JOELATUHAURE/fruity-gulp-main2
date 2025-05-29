import { Users, Gift, Building2, PartyPopper, Coffee, Wine } from 'lucide-react';

export interface EventService {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  icon: string;
}

export const eventServices: EventService[] = [
  {
    id: 'juice-only',
    name: 'Juice services only',
    description: 'Premium fresh juice service for your event.',
    imageUrl: '/media/juice-only.jpg',
    icon: 'Wine'
  },
  {
    id: 'cocktail-only',
    name: 'Cocktail services only',
    description: 'Professional cocktail bar for your event.',
    imageUrl: '/media/cocktail-only.jpeg',
    icon: 'PartyPopper'
  },
  {
    id: 'juice-cocktail-coffee-ushering',
    name: 'Juice, cocktails, coffee & ushering',
    description: 'Full service: juice, cocktails, coffee bar, and ushering.',
    imageUrl: '/media/juice-cocktail-ushering.png',
    icon: 'Gift'
  },
  {
    id: 'juice-cocktail-ushering',
    name: 'Juice, cocktails & ushering',
    description: 'Juice, cocktail bar, and ushering for your event.',
    imageUrl: '/media/juice-cocktail-ushering.jpg',
    icon: 'Users'
  },
  {
    id: 'juice-ushering',
    name: 'Juice and ushering',
    description: 'Juice service with ushering for your event.',
    imageUrl: '/media/juice-ushering.jpg',
    icon: 'Users'
  },
  {
    id: 'coffee-only',
    name: 'Coffee bar only',
    description: 'Coffee bar with premium brews and baristas.',
    imageUrl: '/media/coffee-only.png',
    icon: 'Coffee'
  },
  {
    id: 'ushering-only',
    name: 'Ushering services only',
    description: 'Professional ushering team for your event.',
    imageUrl: '/media/ushering-only.png',
    icon: 'Users'
  }
];

export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Users':
      return Users;
    case 'Gift':
      return Gift;
    case 'Building2':
      return Building2;
    case 'PartyPopper':
      return PartyPopper;
    case 'Coffee':
      return Coffee;
    case 'Wine':
      return Wine;
    default:
      return Gift;
  }
};