import type { OilseedProduct, KPI, SupplyDemandHotspot, OilseedType } from '../types';

// Mock data for oilseed products
export const mockProducts: OilseedProduct[] = [
  {
    id: '1',
    type: 'Soybean Meal',
    quantity: 5000,
    price: 350,
    location: 'Iowa, USA',
    listingDate: '2024-01-15',
    supplier: 'Midwest Grain Co.',
    description: 'High protein soybean meal, ideal for livestock feed'
  },
  {
    id: '2',
    type: 'Rapeseed/Canola Meal',
    quantity: 3200,
    price: 280,
    location: 'Saskatchewan, Canada',
    listingDate: '2024-01-14',
    supplier: 'Prairie Oilseeds Ltd.',
    description: 'Premium canola meal with excellent amino acid profile'
  },
  {
    id: '3',
    type: 'Sunflower Meal',
    quantity: 1800,
    price: 320,
    location: 'Ukraine',
    listingDate: '2024-01-13',
    supplier: 'Ukrainian Sunflower Corp.',
    description: 'High-quality sunflower meal from non-GMO seeds'
  },
  {
    id: '4',
    type: 'Groundnut (Peanut) Cake',
    quantity: 2500,
    price: 450,
    location: 'Georgia, USA',
    listingDate: '2024-01-12',
    supplier: 'Southern Peanut Co.',
    description: 'Premium peanut cake with high oil content'
  },
  {
    id: '5',
    type: 'Linseed (Flaxseed) Meal',
    quantity: 1200,
    price: 380,
    location: 'North Dakota, USA',
    listingDate: '2024-01-11',
    supplier: 'Northern Flax Inc.',
    description: 'Organic flaxseed meal rich in omega-3 fatty acids'
  },
  {
    id: '6',
    type: 'Soybean Meal',
    quantity: 4200,
    price: 340,
    location: 'Brazil',
    listingDate: '2024-01-10',
    supplier: 'Brazilian Soy Corp.',
    description: 'Brazilian soybean meal, competitive pricing'
  },
  {
    id: '7',
    type: 'Rapeseed/Canola Meal',
    quantity: 2800,
    price: 290,
    location: 'Germany',
    listingDate: '2024-01-09',
    supplier: 'European Canola Ltd.',
    description: 'EU-certified canola meal, sustainable sourcing'
  },
  {
    id: '8',
    type: 'Sunflower Meal',
    quantity: 2100,
    price: 310,
    location: 'Argentina',
    listingDate: '2024-01-08',
    supplier: 'Argentine Sunflower Co.',
    description: 'South American sunflower meal, bulk quantities available'
  }
];

// Mock KPI data
export const mockKPIs: KPI[] = [
  {
    id: '1',
    title: 'Regional Surplus',
    value: 'Soybean Meal',
    subtitle: '15,000 MT in North America',
    trend: 'up',
    color: '#10B981'
  },
  {
    id: '2',
    title: 'Highest Shortage',
    value: 'Linseed Meal',
    subtitle: '8,500 MT deficit in Europe',
    trend: 'down',
    color: '#EF4444'
  },
  {
    id: '3',
    title: 'Highest Volume Trade',
    value: 'Soybean Meal',
    subtitle: '45,000 MT traded this month',
    trend: 'up',
    color: '#3B82F6'
  }
];

// Mock supply/demand hotspots for map
export const mockHotspots: SupplyDemandHotspot[] = [
  {
    id: '1',
    latitude: 41.8781,
    longitude: -87.6298,
    type: 'supply',
    intensity: 'high',
    oilseedType: 'Soybean Meal',
    quantity: 15000,
    region: 'North America'
  },
  {
    id: '2',
    latitude: 52.5200,
    longitude: 13.4050,
    type: 'demand',
    intensity: 'high',
    oilseedType: 'Linseed (Flaxseed) Meal',
    quantity: 8500,
    region: 'Europe'
  },
  {
    id: '3',
    latitude: -23.5505,
    longitude: -46.6333,
    type: 'supply',
    intensity: 'medium',
    oilseedType: 'Soybean Meal',
    quantity: 12000,
    region: 'South America'
  },
  {
    id: '4',
    latitude: 50.1109,
    longitude: 8.6821,
    type: 'supply',
    intensity: 'medium',
    oilseedType: 'Rapeseed/Canola Meal',
    quantity: 8000,
    region: 'Europe'
  },
  {
    id: '5',
    latitude: 50.4501,
    longitude: 30.5234,
    type: 'supply',
    intensity: 'high',
    oilseedType: 'Sunflower Meal',
    quantity: 10000,
    region: 'Europe'
  },
  {
    id: '6',
    latitude: 35.6762,
    longitude: 139.6503,
    type: 'demand',
    intensity: 'high',
    oilseedType: 'Soybean Meal',
    quantity: 20000,
    region: 'Asia'
  }
];

// Oilseed type options for forms
export const oilseedTypeOptions: { value: OilseedType; label: string }[] = [
  { value: 'Soybean Meal', label: 'Soybean Meal' },
  { value: 'Rapeseed/Canola Meal', label: 'Rapeseed/Canola Meal' },
  { value: 'Sunflower Meal', label: 'Sunflower Meal' },
  { value: 'Groundnut (Peanut) Cake', label: 'Groundnut (Peanut) Cake' },
  { value: 'Linseed (Flaxseed) Meal', label: 'Linseed (Flaxseed) Meal' }
];

// Geographic regions for filtering
export const geographicRegions = [
  'North America',
  'South America', 
  'Europe',
  'Asia',
  'Africa',
  'Oceania'
];
