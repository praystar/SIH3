import { useAuth } from '@clerk/clerk-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import ValueChainDashboard from './pages/ValueChainDashboard';
import GlobalMarketplace from './pages/GlobalMarketplace';
import './App.css';

function App() {
  const { isLoaded, isSignedIn } = useAuth();

  // Show loading state while Clerk is initializing
  if (!isLoaded) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        fontSize: '18px'
      }}>
        Loading Oilseed Byproducts Platform...
      </div>
    );
  }

  // If not signed in, show landing page
  if (!isSignedIn) {
    return <LandingPage />;
  }

  // If signed in, show the main application with routing
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ValueChainDashboard />} />
            <Route path="/marketplace" element={<GlobalMarketplace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;