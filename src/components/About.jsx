import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Users, Maximize2, Terminal, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: Zap,
    title: 'Performance First',
    description:
      'We obsess over sub-second response times, zero layout shifts, and streamlined asset pipelines to deliver 100/100 Lighthouse benchmark scores.',
    badge: 'SUB-100MS LATENCY',
    color: '#06b6d4',
  },
  {
    icon: Users,
    title: 'User Focused',
    description:
      'Every animation, transition, and micro-interaction is engineered with purposeful ergonomics, reducing cognitive friction and maximizing user engagement.',
    badge: 'INTUITIVE UX',
    color: '#6366f1',
  },
  {
    icon: Maximize2,
    title: 'Scalable Solutions',
    description:
      'Enterprise-grade modular architectures designed to scale effortlessly with your user growth, high concurrency, and evolving product roadmap.',
    badge: 'CLOUD-READY',
    color: '#a855f7',
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftColRef.current,
            start: 'top 80%',
          },
        }
      );

      const cards = rightColRef.current?.querySelectorAll('.benefit-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { x: 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.16,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rightColRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: '120px 0 130px',
        position: 'relative',
        zIndex: 20,
      }}
    >
      {/* Ambient background glow */}
      <div
        className="glow-orb glow-orb-purple"
        style={{
          top: '50%',
          left: '0%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div
          className="why-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.95fr 1.05fr',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Heading & Narrative */}
          <div ref={leftColRef} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="badge">
              <span className="badge-dot" />
              <span>The ITZFIZZ Advantage</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                lineHeight: 1.12,
              }}
            >
              WHY <span className="text-gradient-accent">ITZFIZZ</span>
            </h2>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.08rem',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              We are a team of visionary technologists and creative developers who believe digital
              products should not only look remarkable but operate with unmatched speed, resilience,
              and surgical precision.
            </p>

            <div
              style={{
                padding: '24px',
                borderRadius: '16px',
                background: 'rgba(15, 23, 42, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#818cf8',
                  flexShrink: 0,
                }}
              >
                <Terminal size={22} />
              </div>
              <div style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                Engineering philosophy centered on <strong>deterministic state</strong>, 
                <strong> transform-based GPU rendering</strong>, and <strong>semantic accessibility</strong>.
              </div>
            </div>

            <div style={{ marginTop: '8px' }}>
              <a
                href="#contact"
                className="btn-primary"
                style={{ padding: '14px 28px', fontSize: '0.94rem', textDecoration: 'none' }}
              >
                <span>Partner With Us</span>
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Core Benefits */}
          <div
            ref={rightColRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
            }}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="benefit-card glass-card"
                  style={{
                    padding: '28px 30px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '22px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    background: 'rgba(15, 23, 42, 0.62)',
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '14px',
                      background: `rgba(${benefit.color === '#06b6d4' ? '6, 182, 212' : benefit.color === '#6366f1' ? '99, 102, 241' : '168, 85, 247'}, 0.14)`,
                      border: `1px solid ${benefit.color}45`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: benefit.color,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                      <h3 style={{ fontSize: '1.28rem', fontWeight: 700, color: '#ffffff' }}>
                        {benefit.title}
                      </h3>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontFamily: 'var(--font-mono)',
                          color: benefit.color,
                          letterSpacing: '0.08em',
                          fontWeight: 700,
                          padding: '3px 8px',
                          borderRadius: '4px',
                          background: 'rgba(255, 255, 255, 0.04)',
                        }}
                      >
                        {benefit.badge}
                      </span>
                    </div>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .why-grid {
            grid-template-columns: 1fr !important;
            gap: 44px !important;
          }
        }
      `}</style>
    </section>
  );
}
