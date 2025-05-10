import { JuiceProduct } from '../types';

export const juiceProducts: JuiceProduct[] = [
  {
    id: 'mango-paradise',
    name: 'Mango Paradise',
    description: 'Pure, sweet mango juice with a hint of lime for the perfect tropical refreshment.',
    category: 'fresh',
    imageUrl: '/media/Mango Paradise.jpeg',
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
    imageUrl: '/media/Passion Fruit Burst.jpeg',
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
    imageUrl: '/media/Tropical Cocktail.jpeg',
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
    imageUrl: '/media/Redbeet Cocktail.jpeg',
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
    imageUrl: '/media/Pineapple Mint.jpeg',
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
    imageUrl: '/media/Green Immunity.jpeg',
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
    imageUrl: '/media/Citrus Defender.jpeg',
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
    imageUrl: '/media/Clean Green Detox.jpeg',
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
    imageUrl: '/media/Watermelon Refresh.jpeg',
    prices: {
      small: 10000,
      medium: 30000,
      large: 50000,
    }
  }
];