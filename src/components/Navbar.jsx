import React, { useState, forwardRef } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

const Navbar = forwardRef(function Navbar(props, ref) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      ref={ref}
      className="navbar-wrapper"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '20px 0',
        background: 'rgba(7, 9, 14, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo / Text */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: '#fff',
          }}
          aria-label="ITZFIZZ Home"
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(99, 102, 241, 0.5)',
            }}
          >
            <Sparkles size={20} color="#ffffff" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '1.35rem',
                letterSpacing: '0.12em',
                background: 'linear-gradient(90deg, #ffffff, #c7d2fe)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.1,
              }}
            >
              ITZFIZZ
            </span>
            <span
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.22em',
                color: 'var(--accent-secondary)',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              Digital Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          aria-label="Main Navigation"
        >
          {[
            { label: 'Home', id: 'home' },
            { label: 'Services', id: 'services' },
            { label: 'About', id: 'about' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="nav-link"
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.92rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                transition: 'color 0.2s ease',
                position: 'relative',
                padding: '6px 0',
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="btn-primary desktop-cta"
            style={{
              padding: '9px 20px',
              fontSize: '0.86rem',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              display: 'none',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '8px',
              padding: '8px',
              color: '#fff',
              cursor: 'pointer',
            }}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-drawer"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(7, 9, 14, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)',
          }}
        >
          {[
            { label: 'Home', id: 'home' },
            { label: 'Services', id: 'services' },
            { label: 'About', id: 'about' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="btn-primary"
            style={{
              width: '100%',
              marginTop: '8px',
              padding: '12px',
              textDecoration: 'none',
              boxSizing: 'border-box',
            }}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      <style>{`
        .nav-link:hover {
          color: #ffffff !important;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #6366f1, #06b6d4);
          transition: width 0.25s ease;
          border-radius: 2px;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media (max-width: 820px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
});

export default Navbar;
