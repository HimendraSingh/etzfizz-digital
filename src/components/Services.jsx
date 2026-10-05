import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, ShoppingBag, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  {
    icon: Code2,
    title: 'Web Development',
    tag: 'CORE SERVICE',
    description:
      'Custom web architectures engineered with React, Next.js, and modern TypeScript. Built for maximum speed, clean maintainability, and SEO excellence.',
    features: [
      'Single Page Applications',
      'API & Headless CMS Integration',
      'Micro-Frontend Architectures',
      'Core Web Vitals Optimization',
    ],
    accent: '#6366f1',
    accentGlow: 'rgba(99, 102, 241, 0.28)',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce',
    tag: 'GROWTH ENGINE',
    description:
      'High-converting, frictionless e-commerce platforms tailored for high volume brands. Optimized checkout flows, ultra-low latency, and modern design.',
    features: [
      'Custom Shopify & Headless Stores',
      'Sub-second Checkout Flows',
      'Payment Gateway Integration',
      'Inventory & Analytics Sync',
    ],
    accent: '#06b6d4',
    accentGlow: 'rgba(6, 182, 212, 0.28)',
  },
  {
    icon: Layers,
    title: 'Digital Experiences',
    tag: 'IMMERSIVE MOTION',
    description:
      'Award-winning interactive brand experiences utilizing modern animations, 3D WebGL motion, and scroll-driven storytelling to captivate audiences.',
    features: [
      'Scroll-Driven Narratives',
      'Motion Design & Micro-UI',
      'Interactive Web Experiences',
      'Design System Architecture',
    ],
    accent: '#a855f7',
    accentGlow: 'rgba(168, 85, 247, 0.28)',
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal on scroll
      gsap.fromTo(
        headingRef.current,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
          },
        }
      );

      // Cards staggered reveal on scroll
      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 55, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
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
      id="services"
      ref={sectionRef}
      style={{
        padding: '130px 0 100px',
        position: 'relative',
        zIndex: 20,
      }}
    >
      {/* Glow backdrop */}
      <div
        className="glow-orb glow-orb-cyan"
        style={{
          top: '25%',
          right: '5%',
          transform: 'translate(30%, -20%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        {/* Section Header */}
        <div
          ref={headingRef}
          style={{
            textAlign: 'center',
            maxWidth: '680px',
            margin: '0 auto 64px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div className="badge">
            <span className="badge-dot" />
            <span>Capabilities &amp; Solutions</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              lineHeight: 1.15,
            }}
          >
            WHAT WE <span className="text-gradient-accent">BUILD</span>
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.65 }}>
            We craft digital products that seamlessly bridge high-end aesthetic design with
            flawless engineering and computational performance.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div
          ref={cardsRef}
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }}
        >
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card glass-card"
                style={{
                  padding: '38px 32px',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'rgba(15, 23, 42, 0.58)',
                }}
              >
                {/* Top Corner Glow */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '130px',
                    height: '130px',
                    background: `radial-gradient(circle at 100% 0%, ${service.accentGlow}, transparent 70%)`,
                    pointerEvents: 'none',
                  }}
                />

                <div>
                  {/* Icon & Tag */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '26px',
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        background: `rgba(${service.accent === '#6366f1' ? '99, 102, 241' : service.accent === '#06b6d4' ? '6, 182, 212' : '168, 85, 247'}, 0.14)`,
                        border: `1px solid ${service.accent}45`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: service.accent,
                        boxShadow: `0 0 24px ${service.accentGlow}`,
                      }}
                    >
                      <Icon size={26} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: service.accent,
                        padding: '5px 12px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      marginBottom: '14px',
                      color: '#ffffff',
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.94rem',
                      lineHeight: 1.65,
                      marginBottom: '26px',
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                    {service.features.map((feat, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '0.86rem',
                          color: '#cbd5e1',
                        }}
                      >
                        <CheckCircle2 size={15} color={service.accent} style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div style={{ marginTop: '34px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <a
                    href="#contact"
                    className="service-link"
                    style={{
                      textDecoration: 'none',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    <span>Request Proposal</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .service-link:hover {
          color: var(--accent-secondary) !important;
          transform: translateX(4px);
        }
        @media (max-width: 960px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
