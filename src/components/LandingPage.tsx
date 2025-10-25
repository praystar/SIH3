import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="landing-hero">
        <div className="hero-content">
          <h1 className="hero-title">Oilseed Byproducts</h1>
          <p className="hero-subtitle">
            Global marketplace and value chain dashboard for oilseed byproducts trading
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon">🗺️</div>
              <h3>Global Dashboard</h3>
              <p>Interactive maps showing supply/demand hotspots worldwide</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h3>Market Analytics</h3>
              <p>Real-time KPIs and market insights for informed decisions</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🛒</div>
              <h3>Global Marketplace</h3>
              <p>Buy and sell oilseed byproducts with verified suppliers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-section">
        <div className="auth-container">
          <div className="auth-tabs">
            <div className="auth-tab active">
              <SignIn />
            </div>
          </div>
          
          <div className="auth-info">
            <h3>Why Join Our Platform?</h3>
            <ul className="benefits-list">
            <li>Tap into the entire global oilseed byproducts market.</li>
<li>Access real-time market intelligence and analytics.</li>
<li>Forge direct relationships with verified suppliers worldwide.</li>
<li>Get an edge by tracking crucial supply/demand trends.</li>
<li>Equip yourself with professional-grade trading tools.</li>
<li>Execute trades on a secure and reliably built platform.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="product-types">
        <h2>Supported Oilseed Byproducts</h2>
        <div className="products-grid">
          <div className="product-card">
            <h3>Soybean Meal</h3>
            <p>High-protein feed ingredient from soybean processing</p>
          </div>
          <div className="product-card">
            <h3>Rapeseed/Canola Meal</h3>
            <p>Premium meal with excellent amino acid profile</p>
          </div>
          <div className="product-card">
            <h3>Sunflower Meal</h3>
            <p>Non-GMO meal from sunflower seed processing</p>
          </div>
          <div className="product-card">
            <h3>Groundnut Cake</h3>
            <p>High-oil content cake from peanut processing</p>
          </div>
          <div className="product-card">
            <h3>Linseed Meal</h3>
            <p>Organic meal rich in omega-3 fatty acids</p>
          </div>
        </div>
      </div>

      <footer className="landing-footer">
        <p>&copy; 2024 Oilseed Byproducts Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;