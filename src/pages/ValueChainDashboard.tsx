import React, { useState } from 'react';
import MapComponent from '../components/MapComponent';
import ParameterBox from '../components/ParameterBox';
import FilterComponent from '../components/FilterComponent';
import type { KPI, SupplyDemandHotspot, FilterOptions } from '../types';
import { mockKPIs, mockHotspots } from '../data/mockData';
import './ValueChainDashboard.css';

const ValueChainDashboard: React.FC = () => {
  const [filters, setFilters] = useState<FilterOptions>({});
  const [kpis] = useState<KPI[]>(mockKPIs);
  const [hotspots] = useState<SupplyDemandHotspot[]>(mockHotspots);

  // Filter hotspots based on current filters
  const filteredHotspots = hotspots.filter(hotspot => {
    if (filters.geographicRegion && hotspot.region !== filters.geographicRegion) {
      return false;
    }
    if (filters.oilseedType && hotspot.oilseedType !== filters.oilseedType) {
      return false;
    }
    return true;
  });

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Oilseed Byproducts Dashboard</h1>
        <p>Global Supply/Demand Hotspots for Oilseed Byproducts</p>
      </div>

      <div className="dashboard-content">
        {/* Filter Section */}
        <FilterComponent 
          filters={filters}
          onFiltersChange={setFilters}
        />

        {/* Map Section */}
        <div className="map-section">
          <div className="section-header">
            <h2>Supply/Demand Hotspots</h2>
            <div className="map-stats">
              <span className="stat-item">
                <span className="stat-label">Supply Points:</span>
                <span className="stat-value">
                  {filteredHotspots.filter(h => h.type === 'supply').length}
                </span>
              </span>
              <span className="stat-item">
                <span className="stat-label">Demand Points:</span>
                <span className="stat-value">
                  {filteredHotspots.filter(h => h.type === 'demand').length}
                </span>
              </span>
            </div>
          </div>
          <MapComponent 
            hotspots={filteredHotspots}
            height="500px"
          />
        </div>

        {/* KPI Section */}
        <div className="kpi-section">
          <div className="section-header">
            <h2>Key Performance Indicators</h2>
            <p>Real-time metrics for oilseed byproducts market</p>
          </div>
          <div className="kpi-grid">
            {kpis.map(kpi => (
              <ParameterBox key={kpi.id} kpi={kpi} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueChainDashboard;
