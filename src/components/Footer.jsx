import React from 'react';
import { Sparkles, ArrowUp, Github, Twitter, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(7, 9, 14, 0.95)',
        padding: '60px 0 30px',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '36px',
            marginBottom: '48px',
          }}
        >
          {/* Brand details */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={16} color="#ffffff" />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  letterSpacing: '0.1em',
                  color: '#ffffff',
                }}
              >
                ITZFIZZ
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
              Crafting state-of-the-art web applications, interactive scroll-driven platforms, and
              scalable digital systems for industry leaders.
            </p>
          </div>

          {/* Quick links */}
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <h4
                style={{
                  fontSize: '0.82rem',
                  color: '#ffffff',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                Navigation
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      style={{
                        color: 'var(--text-dim)',
                        textDecoration: 'none',
                        fontSize: '0.88rem',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#06b6d4')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                style={{
                  fontSize: '0.82rem',
                  color: '#ffffff',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                Social
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { name: 'GitHub', icon: Github, href: 'https://github.com' },
                  { name: 'Twitter / X', icon: Twitter, href: 'https://twitter.com' },
                  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <li key={s.name}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: 'var(--text-dim)',
                          textDecoration: 'none',
                          fontSize: '0.88rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
                      >
                        <Icon size={14} />
                        <span>{s.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="glass-card"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.82rem',
            color: 'var(--text-dim)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} ITZFIZZ Digital Studio. All rights reserved.
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem' }}>
            ENGINEERED WITH REACT &amp; GSAP SCROLLTRIGGER
          </div>
        </div>
      </div>
    </footer>
  );
}
