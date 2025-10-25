import React from 'react';
import { SignInButton } from '@clerk/clerk-react';

const LandingPage: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden',
      margin: 0,
      padding: 0,
      display: 'flex',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: 'linear-gradient(135deg, #1e2530 0%, #2a3441 50%, #343d4f 100%)',
      color: '#e2e8f0'
    }}>
      {/* Subtle background elements */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '8%',
        width: '120px',
        height: '120px',
        background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(96, 165, 250, 0.08))',
        borderRadius: '20px',
        transform: 'rotate(12deg)',
        zIndex: 1
      }} />

      <div style={{
        position: 'absolute',
        top: '60%',
        right: '12%',
        width: '80px',
        height: '80px',
        background: 'linear-gradient(45deg, rgba(168, 162, 255, 0.06), rgba(196, 181, 253, 0.04))',
        borderRadius: '12px',
        transform: 'rotate(-8deg)',
        zIndex: 1
      }} />

      {/* Left Section - Content */}
      <div style={{
        flex: '0 0 55%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px 60px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          maxWidth: '520px'
        }}>
          {/* Professional header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '32px'
          }}>
            <div style={{
              width: '4px',
              height: '40px',
              background: 'linear-gradient(180deg, #3b82f6, #2563eb)',
              borderRadius: '2px',
              marginRight: '16px'
            }} />
            <span style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#9ca3af',
              textTransform: 'uppercase',
              letterSpacing: '1.5px'
            }}>
              Cybersecurity Platform
            </span>
          </div>

          <h1 style={{
            fontSize: '4rem',
            fontWeight: '800',
            color: '#f8fafc',
            lineHeight: 1.1,
            marginBottom: '24px',
            letterSpacing: '-0.02em'
          }}>
            CCTV Detection
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6, #2563eb, #1d4ed8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Dashboard
            </span>
          </h1>
          
          <p style={{
            fontSize: '20px',
            color: '#cbd5e1',
            lineHeight: 1.6,
            marginBottom: '40px',
            fontWeight: '400'
          }}>
            Advanced cybersecurity platform for global CCTV/DVR monitoring. 
            Real-time vulnerability assessment, device discovery, and threat intelligence.
          </p>

          

          <SignInButton mode="modal">
            <button style={{
              background: 'linear-gradient(135deg, #1e2530 0%, #374151 50%, #4b5563 100%)',
              color: '#f8fafc',
              border: '1px solid #4b5563',
              padding: '16px 40px',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25), 0 4px 10px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              textTransform: 'none',
              letterSpacing: '0.3px',
              minWidth: '200px',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3), 0 8px 15px rgba(59, 130, 246, 0.2)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #374151 0%, #4b5563 50%, #6b7280 100%)';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.25), 0 4px 10px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #1e2530 0%, #374151 50%, #4b5563 100%)';
              e.currentTarget.style.borderColor = '#4b5563';
            }}
            >
              Access Dashboard
            </button>
          </SignInButton>

          <div style={{
            marginTop: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{
              display: 'flex',
              gap: '8px'
            }}>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '4px',
                    height: '4px',
                    background: '#3b82f6',
                    borderRadius: '50%',
                    opacity: 0.3 + (i * 0.15),
                    animation: `professional-pulse ${2 + i * 0.3}s ease-in-out infinite ${i * 0.2}s`
                  }}
                />
              ))}
            </div>
            <span style={{
              fontSize: '14px',
              color: '#9ca3af',
              fontWeight: '500'
            }}>
              Global surveillance network active
            </span>
          </div>
        </div>
      </div>

      {/* Right Section - Dashboard-style Ocean Visualization */}
      <div style={{
        flex: '0 0 45%',
        height: '100%',
        position: 'relative',
        background: 'linear-gradient(145deg, #1f2937 0%, #374151 30%, #4b5563 60%, #6b7280 100%)',
        overflow: 'hidden',
        zIndex: 2,
        borderLeft: '1px solid #4b5563'
      }}>
        {/* Dashboard-style grid overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          zIndex: 1
        }} />

        {/* Dashboard-style data visualization elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '15%',
          width: '80px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)',
          animation: 'data-scan 3s ease-in-out infinite'
        }} />

        <div style={{
          position: 'absolute',
          top: '35%',
          right: '20%',
          width: '60px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(168, 162, 255, 0.6), transparent)',
          animation: 'data-scan 4s ease-in-out infinite 1s'
        }} />

        {/* Alert-style pollution indicators matching dashboard */}
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '20%',
          width: '12px',
          height: '12px',
          border: '2px solid #ef4444',
          borderRadius: '50%',
          background: 'rgba(239, 68, 68, 0.2)',
          animation: 'warning-pulse 2s ease-in-out infinite'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '4px',
            height: '4px',
            background: '#ef4444',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)'
          }} />
        </div>

        <div style={{
          position: 'absolute',
          top: '45%',
          right: '25%',
          width: '10px',
          height: '10px',
          border: '2px solid #f59e0b',
          borderRadius: '50%',
          background: 'rgba(245, 158, 11, 0.2)',
          animation: 'warning-pulse 2.5s ease-in-out infinite 0.8s'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '3px',
            height: '3px',
            background: '#f59e0b',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)'
          }} />
        </div>

        <div style={{
          position: 'absolute',
          top: '60%',
          left: '30%',
          width: '8px',
          height: '8px',
          border: '1px solid #10b981',
          borderRadius: '50%',
          background: 'rgba(16, 185, 129, 0.2)',
          animation: 'warning-pulse 3s ease-in-out infinite 1.5s'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '2px',
            height: '2px',
            background: '#10b981',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)'
          }} />
        </div>

        {/* Marine life indicators with dashboard colors */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '40%',
          width: '16px',
          height: '10px',
          background: 'rgba(168, 162, 255, 0.3)',
          borderRadius: '8px 4px 4px 8px',
          animation: 'marine-drift 6s ease-in-out infinite',
          border: '1px solid rgba(168, 162, 255, 0.5)'
        }}>
          <div style={{
            position: 'absolute',
            right: '-6px',
            top: '50%',
            width: '0',
            height: '0',
            borderLeft: '6px solid rgba(168, 162, 255, 0.3)',
            borderTop: '3px solid transparent',
            borderBottom: '3px solid transparent',
            transform: 'translateY(-50%)'
          }} />
        </div>

        <div style={{
          position: 'absolute',
          top: '50%',
          right: '35%',
          width: '14px',
          height: '8px',
          background: 'rgba(59, 130, 246, 0.3)',
          borderRadius: '7px 3px 3px 7px',
          animation: 'marine-drift 5s ease-in-out infinite 2s',
          border: '1px solid rgba(59, 130, 246, 0.5)'
        }}>
          <div style={{
            position: 'absolute',
            right: '-5px',
            top: '50%',
            width: '0',
            height: '0',
            borderLeft: '5px solid rgba(59, 130, 246, 0.3)',
            borderTop: '2px solid transparent',
            borderBottom: '2px solid transparent',
            transform: 'translateY(-50%)'
          }} />
        </div>

        {/* Dashboard-style seaweed/coral */}
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '25%',
          width: '3px',
          height: '60px',
          background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.4), rgba(16, 185, 129, 0.7))',
          borderRadius: '2px',
          transformOrigin: 'bottom',
          animation: 'gentle-sway 4s ease-in-out infinite'
        }} />

        <div style={{
          position: 'absolute',
          bottom: '12%',
          right: '30%',
          width: '3px',
          height: '45px',
          background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.3), rgba(16, 185, 129, 0.6))',
          borderRadius: '2px',
          transformOrigin: 'bottom',
          animation: 'gentle-sway 5s ease-in-out infinite 2s'
        }} />

        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '4px',
          height: '70px',
          background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.5), rgba(16, 185, 129, 0.8))',
          borderRadius: '2px',
          transformOrigin: 'bottom',
          animation: 'gentle-sway 4.5s ease-in-out infinite 1s'
        }} />

        {/* Dashboard-style depth layers */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30%',
          background: 'linear-gradient(180deg, transparent, rgba(30, 37, 48, 0.3))',
          zIndex: 3
        }} />

        {/* Dashboard-style corner elements */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          fontSize: '12px',
          color: '#9ca3af',
          fontWeight: '500',
          fontFamily: 'monospace'
        }}>
          SECURITY SCAN
        </div>

        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          fontSize: '11px',
          color: '#6b7280',
          fontFamily: 'monospace'
        }}>
          THREAT LEVEL: MODERATE
        </div>

        {/* Dashboard-style metric display */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '15%',
          background: 'rgba(30, 37, 48, 0.8)',
          border: '1px solid #4b5563',
          borderRadius: '8px',
          padding: '12px 16px',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#3b82f6',
            marginBottom: '4px'
          }}>1,247</div>
          <div style={{
            fontSize: '12px',
            color: '#9ca3af',
            textTransform: 'uppercase'
          }}>DEVICES FOUND</div>
        </div>
      </div>

      <style>{`
        @keyframes professional-pulse {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        @keyframes data-scan {
          0%, 100% { 
            opacity: 0;
            transform: translateX(-20px);
          }
          50% { 
            opacity: 1;
            transform: translateX(20px);
          }
        }
        @keyframes warning-pulse {
          0%, 100% { 
            opacity: 0.6;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }
        @keyframes marine-drift {
          0%, 100% { 
            transform: translateX(0px) translateY(0px);
            opacity: 0.6;
          }
          50% { 
            transform: translateX(15px) translateY(-5px);
            opacity: 0.9;
          }
        }
        @keyframes gentle-sway {
          0%, 100% { 
            transform: rotate(-2deg);
          }
          50% { 
            transform: rotate(2deg);
          }
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html, body {
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;