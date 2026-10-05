import React, { forwardRef } from 'react';
import { Gauge, HeartHandshake, TrendingUp } from 'lucide-react';

const statsData = [
  {
    value: '85%',
    label: 'Performance',
    desc: 'Lighthouse score optimization & ultra-fast load times',
    icon: Gauge,
    color: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.25)',
  },
  {
    value: '92%',
    label: 'User Experience',
    desc: 'Seamless micro-interactions & intuitive accessibility',
    icon: HeartHandshake,
    color: '#6366f1',
    glow: 'rgba(99, 102, 241, 0.25)',
  },
  {
    value: '78%',
    label: 'Business Growth',
    desc: 'Conversion lift across enterprise & scale-up clients',
    icon: TrendingUp,
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.25)',
  },
];

const Stats = forwardRef(function Stats(props, ref) {
  return (
    <div
      ref={ref}
      className="stats-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        width: '100%',
        marginTop: '40px',
      }}
    >
      {statsData.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            className="stat-card glass-card"
            style={{
              padding: '24px 22px',
              borderRadius: '16px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(15, 23, 42, 0.65)',
            }}
          >
            {/* Ambient Corner Glow */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '90px',
                height: '90px',
                background: `radial-gradient(circle at 100% 0%, ${stat.glow}, transparent 70%)`,
                pointerEvents: 'none',
              }}
            />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.2rem, 3.8vw, 2.9rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: '#ffffff',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: `rgba(${stat.color === '#06b6d4' ? '6, 182, 212' : stat.color === '#6366f1' ? '99, 102, 241' : '168, 85, 247'}, 0.12)`,
                  border: `1px solid ${stat.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: stat.color,
                }}
              >
                <Icon size={19} />
              </div>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#e2e8f0',
                letterSpacing: '0.01em',
              }}
            >
              {stat.label}
            </div>

            <p
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-dim)',
                lineHeight: 1.45,
                margin: 0,
              }}
            >
              {stat.desc}
            </p>

            {/* Visual mini progress bar */}
            <div
              style={{
                marginTop: '8px',
                width: '100%',
                height: '4px',
                borderRadius: '2px',
                background: 'rgba(255, 255, 255, 0.08)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: stat.value,
                  background: `linear-gradient(90deg, ${stat.color}, #ffffff)`,
                  borderRadius: '2px',
                  boxShadow: `0 0 10px ${stat.color}`,
                }}
              />
            </div>
          </div>
        );
      })}

      <style>{`
        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 12px !important;
          }
          .stat-card {
            padding: 18px 14px !important;
          }
        }
        @media (max-width: 680px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </div>
  );
});

export default Stats;
