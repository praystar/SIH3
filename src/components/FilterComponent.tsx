import React from 'react';
import type { FilterOptions } from '../types';
import { oilseedTypeOptions, geographicRegions } from '../data/mockData';
import './FilterComponent.css';

interface FilterComponentProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ filters, onFiltersChange }) => {
  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const clearFilters = () => {
    onFiltersChange({});
  };

  const hasActiveFilters = Object.keys(filters).length > 0;

  return (
    <div className="filter-component">
      <div className="filter-header">
        <h3>Filters</h3>
        {hasActiveFilters && (
          <button 
            onClick={clearFilters}
            className="clear-filters-btn"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="filter-grid">
        <div className="filter-group">
          <label htmlFor="oilseed-type">Oilseed Type</label>
          <select
            id="oilseed-type"
            value={filters.oilseedType || ''}
            onChange={(e) => handleFilterChange('oilseedType', e.target.value || undefined)}
          >
            <option value="">All Types</option>
            {oilseedTypeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="geographic-region">Geographic Region</label>
          <select
            id="geographic-region"
            value={filters.geographicRegion || ''}
            onChange={(e) => handleFilterChange('geographicRegion', e.target.value || undefined)}
          >
            <option value="">All Regions</option>
            {geographicRegions.map(region => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="price-min">Price Range ($/MT)</label>
          <div className="price-range">
            <input
              id="price-min"
              type="number"
              placeholder="Min"
              value={filters.priceRange?.min || ''}
              onChange={(e) => {
                const min = e.target.value ? parseFloat(e.target.value) : undefined;
                handleFilterChange('priceRange', {
                  ...filters.priceRange,
                  min
                });
              }}
            />
            <span>to</span>
            <input
              type="number"
              placeholder="Max"
              value={filters.priceRange?.max || ''}
              onChange={(e) => {
                const max = e.target.value ? parseFloat(e.target.value) : undefined;
                handleFilterChange('priceRange', {
                  ...filters.priceRange,
                  max
                });
              }}
            />
          </div>
        </div>

        <div className="filter-group">
          <label htmlFor="quantity-min">Quantity Range (MT)</label>
          <div className="quantity-range">
            <input
              id="quantity-min"
              type="number"
              placeholder="Min"
              value={filters.quantityRange?.min || ''}
              onChange={(e) => {
                const min = e.target.value ? parseFloat(e.target.value) : undefined;
                handleFilterChange('quantityRange', {
                  ...filters.quantityRange,
                  min
                });
              }}
            />
            <span>to</span>
            <input
              type="number"
              placeholder="Max"
              value={filters.quantityRange?.max || ''}
              onChange={(e) => {
                const max = e.target.value ? parseFloat(e.target.value) : undefined;
                handleFilterChange('quantityRange', {
                  ...filters.quantityRange,
                  max
                });
              }}
            />
          </div>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="active-filters">
          <h4>Active Filters:</h4>
          <div className="active-filter-tags">
            {filters.oilseedType && (
              <span className="filter-tag">
                Type: {filters.oilseedType}
                <button onClick={() => handleFilterChange('oilseedType', undefined)}>×</button>
              </span>
            )}
            {filters.geographicRegion && (
              <span className="filter-tag">
                Region: {filters.geographicRegion}
                <button onClick={() => handleFilterChange('geographicRegion', undefined)}>×</button>
              </span>
            )}
            {filters.priceRange && (filters.priceRange.min || filters.priceRange.max) && (
              <span className="filter-tag">
                Price: ${filters.priceRange.min || 0} - ${filters.priceRange.max || '∞'}
                <button onClick={() => handleFilterChange('priceRange', undefined)}>×</button>
              </span>
            )}
            {filters.quantityRange && (filters.quantityRange.min || filters.quantityRange.max) && (
              <span className="filter-tag">
                Quantity: {filters.quantityRange.min || 0} - {filters.quantityRange.max || '∞'} MT
                <button onClick={() => handleFilterChange('quantityRange', undefined)}>×</button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
