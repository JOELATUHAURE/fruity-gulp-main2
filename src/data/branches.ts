import { Branch } from '../types';

export const branches: Branch[] = [
  {
    id: 'mbarara',
    name: 'Mbarara Branch',
    location: {
      latitude: -0.6066307,
      longitude: 30.6626147
    },
    address: 'Opposite Mbaguta, Outskirts of Mbarara City',
    phone: '+256780844955'
  },
  {
    id: 'kampala',
    name: 'Kampala Branch',
    location: {
      latitude: 0.3520166,
      longitude: 32.597599
    },
    address: 'Bukoto (Before Oryx Petrol Station)',
    phone: '+256780844955'
  },
  {
    id: 'entebbe',
    name: 'Entebbe Branch',
    location: {
      latitude: 0.0568048,
      longitude: 32.4624659
    },
    address: 'Fulu Road',
    phone: '+256780844955'
  }
];

export const findNearestBranch = (userLat: number, userLng: number): Branch => {
  let nearestBranch = branches[0];
  let shortestDistance = calculateDistance(
    userLat,
    userLng,
    branches[0].location.latitude,
    branches[0].location.longitude
  );

  branches.slice(1).forEach(branch => {
    const distance = calculateDistance(
      userLat,
      userLng,
      branch.location.latitude,
      branch.location.longitude
    );
    if (distance < shortestDistance) {
      shortestDistance = distance;
      nearestBranch = branch;
    }
  });

  return nearestBranch;
};

export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371e3; // Earth's radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c; // Distance in meters
};