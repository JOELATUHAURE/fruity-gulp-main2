import img1 from '../media/img1.jpg';
import img2 from '../media/img2.jpg';
import img3 from '../media/3.jpg';
import img4 from '../media/4.jpg';
import img5 from '../media/5.jpg';
import img6 from '../media/6.jpg';
import video7 from '../media/7-video.mp4';

export const eventServices: EventService[] = [
  {
    id: 'wedding-ushering',
    name: 'Wedding Ushering',
    description: 'Professional ushering services for your special day, ensuring a smooth and memorable experience for you and your guests.',
    imageUrl: img1, // Updated to use import
    icon: 'Users'
  },
  {
    id: 'corporate-events',
    name: 'Corporate Events',
    description: 'Elevate your business gatherings with our professional services, from conferences to team-building events.',
    imageUrl: img2, // Updated to use import
    icon: 'Building2'
  },
  {
    id: 'private-parties',
    name: 'Private Parties',
    description: 'Make your celebration unforgettable with our premium party service packages tailored to your needs.',
    imageUrl: img3, // Updated to use import
    icon: 'PartyPopper'
  },
  {
    id: 'coffee-bars',
    name: 'Coffee Bars',
    description: 'Bring the café experience to your event with our mobile coffee bar featuring premium brews and professional baristas.',
    imageUrl: img4, // Updated to use import
    icon: 'Coffee'
  },
  {
    id: 'juice-bars',
    name: 'Juice Bars',
    description: 'Offer your guests a refreshing selection of our signature fresh juices and smoothies at your next event.',
    imageUrl: img5, // Updated to use import
    icon: 'Wine'
  },
  {
    id: 'cocktail-services',
    name: 'Cocktail Services',
    description: 'Professional mixologists crafting signature cocktails and mocktails for your special events.',
    imageUrl: img6, // Updated to use import
    videoUrl: video7, // Updated to use import
    icon: 'Wine'
  }
];