import React from 'react';
import type { KPI } from '../types';
import './ParameterBox.css';

interface ParameterBoxProps {
  kpi: KPI;
}

const ParameterBox: React.FC<ParameterBoxProps> = ({ kpi }) => {
  const getTrendIcon = () => {
    switch (kpi.trend) {
      case 'up':
        return '↗';
      case 'down':
        return '↘';
      case 'stable':
        return '→';
      default:
        return '';
    }
  };

  const getTrendColor = () => {
    switch (kpi.trend) {
      case 'up':
        return '#000000';
      case 'down':
        return '#000000';
      case 'stable':
        return '#000000';
      default:
        return '#000000';
    }
  };

  return (
    <div className="parameter-box">
      <div className="parameter-box-header">
        <h3 className="parameter-box-title">{kpi.title}</h3>
        {kpi.trend && (
          <span 
            className="parameter-box-trend"
            style={{ color: getTrendColor() }}
          >
            {getTrendIcon()}
          </span>
        )}
      </div>
      <div className="parameter-box-content">
        <div 
          className="parameter-box-value"
          style={{ color: kpi.color || '#1F2937' }}
        >
          {kpi.value}
        </div>
        <div className="parameter-box-subtitle">
          {kpi.subtitle}
        </div>
      </div>
    </div>
  );
};

export default ParameterBox;
