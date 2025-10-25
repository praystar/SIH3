import React, { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import type { SupplyDemandHotspot } from '../types';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/images/marker-icon-2x.png',
  iconUrl: '/images/marker-icon.png',
  shadowUrl: '/images/marker-shadow.png',
});

interface MapComponentProps {
  hotspots: SupplyDemandHotspot[];
  height?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ hotspots, height = '400px' }) => {
  const mapRef = useRef<L.Map>(null);

  const getMarkerColor = (type: 'supply' | 'demand', intensity: 'low' | 'medium' | 'high') => {
    if (type === 'supply') {
      switch (intensity) {
        case 'high': return '#10B981';
        case 'medium': return '#34D399';
        case 'low': return '#6EE7B7';
        default: return '#10B981';
      }
    } else {
      switch (intensity) {
        case 'high': return '#EF4444';
        case 'medium': return '#F87171';
        case 'low': return '#FCA5A5';
        default: return '#EF4444';
      }
    }
  };

  const createCustomIcon = (type: 'supply' | 'demand', intensity: 'low' | 'medium' | 'high') => {
    const color = getMarkerColor(type, intensity);
    const size = intensity === 'high' ? 20 : intensity === 'medium' ? 16 : 12;
    
    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background-color: ${color};
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        "></div>
      `,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2]
    });
  };

  return (
    <div className="map-container" style={{ height }}>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {hotspots.map((hotspot) => (
          <Marker
            key={hotspot.id}
            position={[hotspot.latitude, hotspot.longitude]}
            icon={createCustomIcon(hotspot.type, hotspot.intensity)}
          >
            <Popup>
              <div className="popup-content">
                <h3 className="popup-title">
                  {hotspot.type === 'supply' ? '📈 Supply' : '📉 Demand'} - {hotspot.oilseedType}
                </h3>
                <div className="popup-details">
                  <p><strong>Region:</strong> {hotspot.region}</p>
                  <p><strong>Quantity:</strong> {hotspot.quantity.toLocaleString()} MT</p>
                  <p><strong>Intensity:</strong> 
                    <span className={`intensity-badge intensity-${hotspot.intensity}`}>
                      {hotspot.intensity}
                    </span>
                  </p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      <div className="map-legend">
        <h4>Legend</h4>
        <div className="legend-item">
          <div className="legend-marker supply-high"></div>
          <span>High Supply</span>
        </div>
        <div className="legend-item">
          <div className="legend-marker supply-medium"></div>
          <span>Medium Supply</span>
        </div>
        <div className="legend-item">
          <div className="legend-marker supply-low"></div>
          <span>Low Supply</span>
        </div>
        <div className="legend-item">
          <div className="legend-marker demand-high"></div>
          <span>High Demand</span>
        </div>
        <div className="legend-item">
          <div className="legend-marker demand-medium"></div>
          <span>Medium Demand</span>
        </div>
        <div className="legend-item">
          <div className="legend-marker demand-low"></div>
          <span>Low Demand</span>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
