// Oilseed by-products types
export interface OilseedProduct {
  id: string;
  type: OilseedType;
  quantity: number; // in MT (Metric Tons)
  price: number; // in $/MT
  location: string;
  listingDate: string;
  supplier: string;
  description?: string;
}

export type OilseedType = 
  | 'Soybean Meal'
  | 'Rapeseed/Canola Meal'
  | 'Sunflower Meal'
  | 'Groundnut (Peanut) Cake'
  | 'Linseed (Flaxseed) Meal';

// KPI (Key Performance Indicator) types
export interface KPI {
  id: string;
  title: string;
  value: string;
  subtitle: string;
  trend?: 'up' | 'down' | 'stable';
  color?: string;
}

// Filter types
export interface FilterOptions {
  oilseedType?: OilseedType;
  geographicRegion?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  quantityRange?: {
    min: number;
    max: number;
  };
}

// Map hotspot types
export interface SupplyDemandHotspot {
  id: string;
  latitude: number;
  longitude: number;
  type: 'supply' | 'demand';
  intensity: 'low' | 'medium' | 'high';
  oilseedType: OilseedType;
  quantity: number;
  region: string;
}

// Geographic regions
export type GeographicRegion = 
  | 'North America'
  | 'South America'
  | 'Europe'
  | 'Asia'
  | 'Africa'
  | 'Oceania';

// Form data types
export interface ProductFormData {
  type: OilseedType;
  quantity: number;
  price: number;
  location: string;
  description?: string;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

