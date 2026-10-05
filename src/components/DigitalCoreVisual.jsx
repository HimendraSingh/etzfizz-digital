import React, { forwardRef, useState } from 'react';
import { Cpu, Zap } from 'lucide-react';

const DigitalCoreVisual = forwardRef(function DigitalCoreVisual({ className = '' }, ref) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle interactive 3D mouse tilt when hovering over the visual
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      className={`digital-core-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '460px',
        aspectRatio: '1/1',
        margin: '0 auto',
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        userSelect: 'none',
        boxSizing: 'border-box',
      }}
      aria-label="ITZFIZZ Interactive 3D Digital Core"
      role="img"
    >
      {/* Inner Tilt Wrapper for interactive mouse response */}
      <div
        className="tilt-wrapper"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Background Ambient Glow & Light Flare */}
        <div
          style={{
            position: 'absolute',
            inset: '10%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(6, 182, 212, 0.2) 40%, transparent 75%)',
            filter: 'blur(35px)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 1,
            animation: 'core-pulse 4s ease-in-out infinite alternate',
          }}
        />

        {/* Outer Orbit Ring 1 (Dashed Cyber Ring) */}
        <div
          className="orbit-ring orbit-ring-1"
          style={{
            position: 'absolute',
            inset: '2%',
            border: '2px dashed rgba(99, 102, 241, 0.4)',
            borderRadius: '50%',
            boxShadow: '0 0 25px rgba(99, 102, 241, 0.15)',
            transformStyle: 'preserve-3d',
            zIndex: 2,
          }}
        >
          {/* Orbiting Satellite Node A */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '-8px',
              transform: 'translateY(-50%)',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: '#06b6d4',
              boxShadow: '0 0 14px #06b6d4, 0 0 24px #06b6d4',
            }}
          />
        </div>

        {/* Orbit Ring 2 (Tilted Ellipse) */}
        <div
          className="orbit-ring orbit-ring-2"
          style={{
            position: 'absolute',
            inset: '8%',
            border: '1.5px solid rgba(6, 182, 212, 0.45)',
            borderRadius: '50%',
            boxShadow: 'inset 0 0 20px rgba(6, 182, 212, 0.15)',
            transformStyle: 'preserve-3d',
            zIndex: 3,
          }}
        >
          {/* Orbiting Satellite Node B */}
          <div
            style={{
              position: 'absolute',
              bottom: '12%',
              right: '12%',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#a855f7',
              boxShadow: '0 0 12px #a855f7',
            }}
          />
        </div>

        {/* Orbit Ring 3 (Isometric Inner Gauge) */}
        <div
          className="orbit-ring orbit-ring-3"
          style={{
            position: 'absolute',
            inset: '16%',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            borderTopColor: '#6366f1',
            borderRightColor: '#06b6d4',
            borderRadius: '50%',
            zIndex: 4,
          }}
        />

        {/* Central Core Holographic Sphere */}
        <div
          className="central-sphere"
          style={{
            position: 'absolute',
            inset: '24%',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 30%, #a5b4fc 0%, #4f46e5 45%, #0f172a 90%)',
            boxShadow: `
              0 0 60px rgba(99, 102, 241, 0.6),
              inset 0 0 35px rgba(255, 255, 255, 0.45),
              inset 0 -15px 30px rgba(6, 182, 212, 0.5)
            `,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 5,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Inner Geometric Grid & Icon */}
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              transform: 'translateZ(25px)',
            }}
          >
            <Cpu size={32} color="#67e8f9" style={{ filter: 'drop-shadow(0 0 8px #06b6d4)' }} />
          </div>
        </div>

        {/* Floating Futuristic Telemetry HUD Tag 1 (Top Right) */}
        <div
          className="hud-badge hud-top-right"
          style={{
            position: 'absolute',
            top: '8%',
            right: '-2%',
            background: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(6, 182, 212, 0.35)',
            borderRadius: '12px',
            padding: '8px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
            transform: 'translateZ(40px)',
            zIndex: 6,
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 8px #10b981',
            }}
          />
          <div>
            <div style={{ fontSize: '0.62rem', color: '#94a3b8', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)' }}>
              CORE_ENGINE
            </div>
            <div style={{ fontSize: '0.78rem', color: '#f8fafc', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
              GSAP :: 60 FPS
            </div>
          </div>
        </div>

        {/* Floating Futuristic Telemetry HUD Tag 2 (Bottom Left) */}
        <div
          className="hud-badge hud-bottom-left"
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '-2%',
            background: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            borderRadius: '12px',
            padding: '8px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
            transform: 'translateZ(35px)',
            zIndex: 6,
          }}
        >
          <div
            style={{
              padding: '5px',
              borderRadius: '6px',
              background: 'rgba(99, 102, 241, 0.2)',
              color: '#818cf8',
            }}
          >
            <Zap size={14} />
          </div>
          <div>
            <div style={{ fontSize: '0.62rem', color: '#94a3b8', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>
              LATENCY
            </div>
            <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
              0.4ms ULTRA-SMOOTH
            </div>
          </div>
        </div>

        {/* Futuristic Grid Crosshairs */}
        <svg
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.25,
          }}
        >
          <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="rgba(255,255,255,0.2)" strokeDasharray="4,4" />
          <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.2)" strokeDasharray="4,4" />
          <circle cx="50%" cy="50%" r="48%" stroke="rgba(255,255,255,0.15)" fill="none" />
        </svg>
      </div>

      <style>{`
        @keyframes core-pulse {
          0% { transform: scale(0.92); opacity: 0.5; }
          100% { transform: scale(1.08); opacity: 0.85; }
        }

        .orbit-ring-1 {
          animation: spin-clockwise 24s linear infinite;
        }

        .orbit-ring-2 {
          animation: spin-counter 18s linear infinite;
        }

        .orbit-ring-3 {
          animation: spin-clockwise 12s linear infinite;
        }

        @keyframes spin-clockwise {
          from { transform: rotateZ(0deg) rotateX(25deg); }
          to { transform: rotateZ(360deg) rotateX(25deg); }
        }

        @keyframes spin-counter {
          from { transform: rotateZ(360deg) rotateY(30deg); }
          to { transform: rotateZ(0deg) rotateY(30deg); }
        }

        .hud-badge {
          animation: hud-float 4s ease-in-out infinite alternate;
        }

        .hud-bottom-left {
          animation-delay: -2s;
        }

        @keyframes hud-float {
          0% { transform: translateZ(35px) translateY(0px); }
          100% { transform: translateZ(35px) translateY(-8px); }
        }

        @media (max-width: 640px) {
          .digital-core-container {
            max-width: 320px !important;
          }
          .hud-top-right {
            right: 0% !important;
            top: 0% !important;
            padding: 5px 8px !important;
          }
          .hud-bottom-left {
            left: 0% !important;
            bottom: 0% !important;
            padding: 5px 8px !important;
          }
        }

        @media (max-width: 380px) {
          .digital-core-container {
            max-width: 270px !important;
          }
        }
      `}</style>
    </div>
  );
});

export default DigitalCoreVisual;
