import { useAuth } from '@clerk/clerk-react';
import LandingPage from './components/LandingPage';
import CCTVDashboard from './components/CCTVDashboard';

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
        background: '#0b1422',
        color: '#dbe5ff',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    );
  }

  // If not signed in, show landing page
  if (!isSignedIn) {
    return <LandingPage />;
  }

  // If signed in, show dashboard
  return <CCTVDashboard />;
}

export default App;