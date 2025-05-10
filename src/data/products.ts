import { JuiceProduct } from '../types';

export const juiceProducts: JuiceProduct[] = [
  {
    id: 'mango-paradise',
    name: 'Mango Paradise',
    description: 'Pure, sweet mango juice with a hint of lime for the perfect tropical refreshment.',
    category: 'fresh',
    imageUrl: 'https://images.pexels.com/photos/4443477/pexels-photo-4443477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prices: {
      small: 10000,  // 1L
      medium: 30000, // 3L
      large: 50000,  // 5L
    }
  },
  {
    id: 'passion-fruit-burst',
    name: 'Passion Fruit Burst',
    description: 'Tangy and sweet passion fruit juice that awakens your taste buds.',
    category: 'fresh',
    imageUrl: 'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prices: {
      small: 10000,
      medium: 30000,
      large: 50000,
    }
  },
  {
    id: 'tropical-cocktail',
    name: 'Tropical Cocktail',
    description: 'A refreshing blend of pineapple, mango, and orange for a taste of the tropics.',
    category: 'fresh',
    imageUrl: 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prices: {
      small: 10000,
      medium: 30000,
      large: 50000,
    }
  },
  {
    id: 'redbeet-cocktail',
    name: 'Redbeet Cocktail',
    description: 'A nutritious blend of beetroot, apple, and ginger for an earthy, sweet flavor.',
    category: 'fresh',
    imageUrl: 'https://images.pexels.com/photos/452773/pexels-photo-452773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prices: {
      small: 10000,
      medium: 30000,
      large: 50000,
    }
  },
  {
    id: 'pineapple-mint',
    name: 'Pineapple Mint',
    description: 'Sweet pineapple juice with a cooling hint of fresh mint leaves.',
    category: 'fresh',
    imageUrl: 'https://images.pexels.com/photos/1028637/pexels-photo-1028637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prices: {
      small: 10000,
      medium: 30000,
      large: 50000,
    }
  },
  {
    id: 'green-immunity',
    name: 'Green Immunity',
    description: 'A powerful blend of kale, spinach, apple, and ginger to boost your immune system.',
    category: 'immune',
    imageUrl: 'https://images.pexels.com/photos/3652097/pexels-photo-3652097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prices: {
      small: 10000,
      medium: 30000,
      large: 50000,
    }
  },
  {
    id: 'citrus-defender',
    name: 'Citrus Defender',
    description: 'A vitamin C-packed blend of orange, lemon, and grapefruit with a touch of honey.',
    category: 'immune',
    imageUrl: 'https://images.pexels.com/photos/2899074/pexels-photo-2899074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prices: {
      small: 10000,
      medium: 30000,
      large: 50000,
    }
  },
  {
    id: 'clean-green-detox',
    name: 'Clean Green Detox',
    description: 'A refreshing mix of cucumber, celery, apple, and lemon to cleanse your system.',
    category: 'detox',
    imageUrl: 'https://images.pexels.com/photos/3669739/pexels-photo-3669739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prices: {
      small: 10000,
      medium: 30000,
      large: 50000,
    }
  },
  {
    id: 'watermelon-refresh',
    name: 'Watermelon Refresh',
    description: 'Seasonal sweet watermelon juice with a hint of mint, perfect for hot days.',
    category: 'seasonal',
    imageUrl: 'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prices: {
      small: 10000,
      medium: 30000,
      large: 50000,
    }
  }
];