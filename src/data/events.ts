import { EventService } from '../types';
import { Users, Gift, Building2, PartyPopper, Coffee, Wine, Cocktail } from 'lucide-react';

export const eventServices: EventService[] = [
  {
    id: 'wedding-ushering',
    name: 'Wedding Ushering',
    description: 'Professional ushering services for your special day, ensuring a smooth and memorable experience for you and your guests.',
    imageUrl: 'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: 'Users'
  },
  {
    id: 'corporate-events',
    name: 'Corporate Events',
    description: 'Elevate your business gatherings with our professional services, from conferences to team-building events.',
    imageUrl: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: 'Building2'
  },
  {
    id: 'private-parties',
    name: 'Private Parties',
    description: 'Make your celebration unforgettable with our premium party service packages tailored to your needs.',
    imageUrl: 'https://images.pexels.com/photos/5473177/pexels-photo-5473177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: 'PartyPopper'
  },
  {
    id: 'coffee-bars',
    name: 'Coffee Bars',
    description: 'Bring the café experience to your event with our mobile coffee bar featuring premium brews and professional baristas.',
    imageUrl: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: 'Coffee'
  },
  {
    id: 'juice-bars',
    name: 'Juice Bars',
    description: 'Offer your guests a refreshing selection of our signature fresh juices and smoothies at your next event.',
    imageUrl: 'https://images.pexels.com/photos/1251202/pexels-photo-1251202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: 'Wine'
  },
  {
    id: 'cocktail-services',
    name: 'Cocktail Services',
    description: 'Professional mixologists crafting signature cocktails and mocktails for your special events.',
    imageUrl: 'https://images.pexels.com/photos/2531186/pexels-photo-2531186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: 'Cocktail'
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
    case 'Cocktail':
      return Cocktail;
    default:
      return Gift;
  }
};