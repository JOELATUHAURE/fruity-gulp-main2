import { TeamMember } from '../types';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Atuhaire Joel',
    role: 'Director',
    bio: 'Founder of Fruity Gulp with over 10 years in the hospitality industry. Joel is passionate about providing the freshest, highest quality beverages and exceptional service.',
    imageUrl: '/media/director.jpg',
    imageStyle: { objectPosition: 'center top' }, // Adjust image position
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: '2',
    name: 'Brenda',
    role: 'Secretary',
    bio: 'Brenda ensures smooth operations and excellent communication across all departments. Her organizational skills keep Fruity Gulp running efficiently.',
    imageUrl: '/media/secretary.jpg',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: '3',
    name: 'Bwambale Benson',
    role: 'Operations Manager',
    bio: 'With his keen eye for detail, Benson oversees daily operations and ensures that quality standards are consistently met throughout all services.',
    imageUrl: '/media/operations manager.jpg',
    imageStyle: { objectPosition: 'center top' }, // Adjust image position
    socialLinks: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: '4',
    name: 'Arinanye Alex',
    role: 'Head of Events',
    bio: 'Alex brings creativity and precision to every event. His extensive experience in event planning ensures memorable experiences for all clients.',
   //mageUrl: 'https://images.pexels.com/photos/8960464/pexels-photo-8960464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
   imageUrl: '/media/events managerr.jpg',
   imageStyle: { objectPosition: 'center top' }, // Adjust image position
    socialLinks: {
      instagram: 'https://instagram.com'
    }
  },
  {
    id: '5',
    name: 'Najuna Edgar',
    role: 'Mixologist',
    bio: 'Edgar is a talented mixologist known for his creativity and precision in crafting signature cocktails. With a passion for flavors and presentation, he ensures every drink is a memorable experience for our guests.',
    imageUrl: '/media/mixologist.jpeg',
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    }
  }
];