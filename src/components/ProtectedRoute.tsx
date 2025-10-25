import React from 'react';
import { useAuth } from '@clerk/clerk-react';
import LandingPage from './LandingPage';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
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

  // If signed in, show protected content
  return <>{children}</>;
};

export default ProtectedRoute;
