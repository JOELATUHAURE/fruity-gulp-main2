import { TeamMember } from '../types';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Atuhaire Joel',
    role: 'Director',
    bio: 'Founder of Fruity Gulp with over 10 years in the hospitality industry. Joel is passionate about providing the freshest, highest quality beverages and exceptional service.',
    src: '/media/director.png', // Corrected syntax
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: '2',
    name: 'David Mugisha',
    role: 'Secretary',
    bio: 'David ensures smooth operations and excellent communication across all departments. His organizational skills keep Fruity Gulp running efficiently.',
    imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    src: '/media/operations manager.png', // Corrected syntax
    socialLinks: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: '4',
    name: 'Joseph Byamugisha',
    role: 'Head of Events',
    bio: 'Joseph brings creativity and precision to every event. His extensive experience in event planning ensures memorable experiences for all clients.',
    imageUrl: 'https://images.pexels.com/photos/8960464/pexels-photo-8960464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socialLinks: {
      instagram: 'https://instagram.com'
    }
  },
  {
    id: '5',
    name: 'Olivia Kansiime',
    role: 'Barista Lead',
    bio: 'Award-winning barista who leads our coffee service team. Olivia is passionate about crafting the perfect cup and training our skilled barista team.',
    imageUrl: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    }
  }
];